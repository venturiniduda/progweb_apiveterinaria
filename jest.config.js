import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
export const preset = "ts-jest";
export const testEnvironment = "node";
export const testMatch = ["**/tests/**/*.test.ts"];
export const transform = {
  ...tsJestTransformCfg,
};