import vector from './vector';
import misc from './misc';
import numeric from './numeric';

/*
 * Normal distribution
 */

const Normal = function(mean, variance) {
    this.mean = mean;
    this.variance = variance;
};

Normal.prototype._de = function(x) {
    return (
        (1 / (Math.sqrt(this.variance) * Math.sqrt(2 * Math.PI))) *
        Math.exp(-Math.pow(x - this.mean, 2) / (2 * this.variance))
    );
};

Normal.prototype._di = function(x) {
    return 0.5 * (1 + misc.erf((x - this.mean) / (Math.sqrt(this.variance) * Math.sqrt(2))));
};

Normal.prototype.dens = function(arg) {
    if (arg instanceof vector.Vector) {
        result = new vector.Vector([]);
        for (var i = 0; i < arg.length(); ++i) {
            result.push(this._de(arg.elements[i]));
        }
        return result;
    } else {
        return this._de(arg);
    }
};

Normal.prototype.distr = function(arg) {
    if (arg instanceof vector.Vector) {
        result = new vector.Vector([]);
        for (var i = 0; i < arg.length(); ++i) {
            result.push(this._di(arg.elements[i]));
        }
        return result;
    } else {
        return this._di(arg);
    }
};

Normal.prototype.inverse = function(x) {
    var a1 = -3.969683028665376e1;
    var a2 = 2.209460984245205e2;
    var a3 = -2.759285104469687e2;
    var a4 = 1.38357751867269e2;
    var a5 = -3.066479806614716e1;
    var a6 = 2.506628277459239;

    var b1 = -5.447609879822406e1;
    var b2 = 1.615858368580409e2;
    var b3 = -1.556989798598866e2;
    var b4 = 6.680131188771972e1;
    var b5 = -1.328068155288572e1;

    var c1 = -7.784894002430293e-3;
    var c2 = -3.223964580411365e-1;
    var c3 = -2.400758277161838;
    var c4 = -2.549732539343734;
    var c5 = 4.374664141464968;
    var c6 = 2.938163982698783;

    var d1 = 7.784695709041462e-3;
    var d2 = 3.224671290700398e-1;
    var d3 = 2.445134137142996;
    var d4 = 3.754408661907416;

    var q, r, y;

    if (x < 0.02425) {
        q = Math.sqrt(-2 * Math.log(x));
        y =
            (((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) /
            ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    } else if (x < 1 - 0.02425) {
        q = x - 0.5;
        r = q * q;
        y =
            ((((((a1 * r + a2) * r + a3) * r + a4) * r + a5) * r + a6) * q) /
            (((((b1 * r + b2) * r + b3) * r + b4) * r + b5) * r + 1);
    } else {
        q = Math.sqrt(-2 * Math.log(1 - x));
        y =
            -(((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) /
            ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    }

    return y * this.variance + this.mean;
};

/*
 * Standard Normal distribution
 */

StandardNormal.prototype = new Normal();

StandardNormal.prototype.constructor = StandardNormal;

function StandardNormal() {
    this.mean = 0;
    this.variance = 1;
}

/*
 * T distribution
 */

const T = function(df) {
    this.df = df;
};

T.prototype._de = function(x) {
    return (
        (misc.gamma((this.df + 1) / 2) / (Math.sqrt(this.df * Math.PI) * misc.gamma(this.df / 2))) *
        Math.pow(1 + Math.pow(x, 2) / this.df, -(this.df + 1) / 2)
    );
};

T.prototype._di = function(x) {
    if (x < 0) {
        return 0.5 * misc.rbeta(this.df / (Math.pow(x, 2) + this.df), this.df / 2, 0.5);
    } else {
        return 1 - 0.5 * misc.rbeta(this.df / (Math.pow(x, 2) + this.df), this.df / 2, 0.5);
    }
};

T.prototype.dens = function(arg) {
    if (arg instanceof vector.Vector) {
        result = new vector.Vector([]);
        for (var i = 0; i < arg.length(); ++i) {
            result.push(this._de(arg.elements[i]));
        }
        return result;
    } else {
        return this._de(arg);
    }
};

T.prototype.distr = function(arg) {
    if (arg instanceof vector.Vector) {
        result = new vector.Vector([]);
        for (var i = 0; i < arg.length(); ++i) {
            result.push(this._di(arg.elements[i]));
        }
        return result;
    } else {
        return this._di(arg);
    }
};

T.prototype.inverse = function(x) {
    return (function(o, x) {
        var t = numeric.Numeric.bisection(
            function(y) {
                return o._di(y) - x;
            },
            -10.1,
            10
        );
        return t;
    })(this, x);
};

/*
 * Kolmogorov distribution
 */

const Kolmogorov = function() {};

Kolmogorov.prototype._di = function(x) {
    var term;
    var sum = 0;
    var k = 1;
    do {
        term = Math.exp((-Math.pow(2 * k - 1, 2) * Math.pow(Math.PI, 2)) / (8 * Math.pow(x, 2)));
        sum = sum + term;
        k++;
    } while (Math.abs(term) > 0.000000000001);
    return (Math.sqrt(2 * Math.PI) * sum) / x;
};

Kolmogorov.prototype.distr = function(arg) {
    if (arg instanceof vector.Vector) {
        result = new vector.Vector([]);
        for (var i = 0; i < arg.length(); ++i) {
            result.push(this._di(arg.elements[i]));
        }
        return result;
    } else {
        return this._di(arg);
    }
};

Kolmogorov.prototype.inverse = function(x) {
    return (function(o, x) {
        var t = numeric.Numeric.bisection(
            function(y) {
                return o._di(y) - x;
            },
            0,
            1
        );
        return t;
    })(this, x);
};

/*
 * F distribution
 */

const F = function(df1, df2) {
    this.df1 = df1;
    this.df2 = df2;
};

F.prototype._di = function(x) {
    return misc.rbeta((this.df1 * x) / (this.df1 * x + this.df2), this.df1 / 2, this.df2 / 2);
};

F.prototype.distr = function(arg) {
    if (arg instanceof vector.Vector) {
        result = new vector.Vector([]);
        for (var i = 0; i < arg.length(); ++i) {
            result.push(this._di(arg.elements[i]));
        }
        return result;
    } else {
        return this._di(arg);
    }
};

export default {
    Normal,
    StandardNormal,
    T,
    F,
    Kolmogorov
};
