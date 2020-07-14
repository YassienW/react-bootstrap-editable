import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import visualizer from "rollup-plugin-visualizer";
import {terser} from "rollup-plugin-terser";

module.exports = {
    input: "src/Editable.js",
    output: {
        name: "Editable",
        file: "dist/editable.js",
        format: "cjs",
        sourcemap: true,
        sourcemapExcludeSources: true
    },
    plugins: [
        nodeResolve(),
        babel({exclude: "node_modules/**"}),
        terser(),
        visualizer({filename: "bundleSize.html", sourcemap: true, open: true})
    ],
    external: ["react", "react-dom", "prop-types", "react-popper"]
};