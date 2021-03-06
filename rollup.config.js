import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';

const pkg = require('./package.json');

export default {
    input: pkg.module,
    output: {
        name: pkg.name
            .split('-')
            .map((str,i) =>
                i === 0 ?
                    str :
                    (str.substring(0,1).toUpperCase() + str.substring(1))
            )
            .join(''),
        file: pkg.main,
        format: 'umd',
        globals: {
            d3: 'd3',
            webcharts: 'webCharts'
        },
    },
    external: (function() {
        const dependencies = Object.keys(pkg.dependencies)
            .filter(dependency => dependency !== 'jerzy');

        return dependencies;
    }()),
    plugins: [
        babel({
            exclude: 'node_modules/**',
            presets: [
                [ '@babel/preset-env' ]
            ],
            //plugins: [
            //    '@babel/plugin-external-helpers'
            //],
            babelrc: false
        }),
        json({
            include: ['settings-schema.json']
        }),
    ]
};
