import esbuild from 'esbuild'
import civetPlugin from '@danielx/civet/esbuild-plugin'

esbuild.build({
  entryPoints: ['src/index.civet'],
  outdir: 'dist/',
  format: 'esm',
  plugins: [
    civetPlugin()
  ]
}).catch(() => process.exit(1))