import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import sass from 'rollup-plugin-sass';

export default {
    input: 'assets/js/main.js',
    output: {
        file: 'dist/js/script.js',
        format: 'iife',
        sourcemap: true
    },
    plugins: [
        /*resolve(),
        commonjs(),*/
        terser(),
        sass({
            output: 'dist/css/main.css',
            options: {
                includePaths: ['node_modules', 'dist/scss']
            }
        }),
    ]
};
