import Ts from 'rollup-plugin-typescript2'

export default {
    input: [
        'src/index.ts',
        'src/atoms/Color/index.ts',
        'src/atoms/Grid/index.ts',
        'src/atoms/Typography/index.ts',
        'src/atoms/Button/index.ts',
        'src/atoms/Tag/index.ts',
        'src/atoms/Image/index.ts',
        'src/atoms/Loader/index.ts',
        'src/atoms/Card/index.ts',
        // 'src/molecules/Select/index.ts',
    ],
    output: {
        dir: 'lib',
        format: 'esm',
        sourcemap: true
    },
    plugins: [Ts()],
    preserveModules: true,
    external: ['react', '@ds.e/foundation']
}