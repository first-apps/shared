import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import flatDts from "rollup-plugin-flat-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import cssnano from "cssnano";

export default [
  {
    input: "./src/lib/index.tsx",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: true,
      },
      // {
      //   file: "dist/esm/index.js",
      //   format: "esm",
      //   sourcemap: true,
      // },
    ],
    jsx: {
      mode: "automatic",
      factory: "React.createElement",
      importSource: "react",
      jsxImportSource: "react/jsx-runtime",
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      postcss({
        modules: {
          auto: (resourcePath) => resourcePath.endsWith(".module.css"), // enable CSS modules for *.module.css
          generateScopeName: "[hash:base64:6]", // customize generated css classnames
        },
        inject: true,
        extract: false,
        minimize: true,
        plugins: [cssnano()],
        include: ["./src/lib/**/*.css"],
      }),
      typescript({
        tsconfig: "./tsconfig.json",
        include: ["./src/lib/**/*.ts", "./src/lib/**/*.tsx"],
      }),
      terser(),
    ],
    external: ["react", "react-dom", "react/jsx-runtime"],
  },
  {
    input: "dist/cjs/index.js",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [flatDts()],
  },
];
