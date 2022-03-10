import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

//---------------
// Rollup config
//---------------
export default [
  {
    input: "./src/index.js",
    output: [
      // For commonjs
      {
        file: "dist/index.js",
        format: "cjs",
      },
      // For ES Modules
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],

    plugins: [
      // css plugin
      postcss({
        plugins: [],
        minimize: true,
      }),
      // babel and other plugins that we installed previously
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
      // to achieve the minified/smallest size for our output files in the dist folder
      terser(),
    ],
  },
];
