import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import flatDts from "rollup-plugin-flat-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

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
        modules: true,
        include: "./src/lib/**/*.css",
      }),
      typescript({
        tsconfig: "./tsconfig.json",
        include: ["./src/lib/**/*.ts", "./src/lib/**/*.tsx"],
      }),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/cjs/index.js",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [flatDts()],
  },
];
