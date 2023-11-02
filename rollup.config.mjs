import esbuild from "rollup-plugin-esbuild";
import addNotes from "./addNotes.mjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "./src/index.ts",
  output: {
    file: "dist/index.js",
    format: "iife",
  },

  plugins: [
    nodeResolve(),
    commonjs(),
    addNotes(),
    esbuild({
      minify: false,
      target: "es2015",
      loaders: {
        ".json": "json",
      },
    }),
  ],
};
