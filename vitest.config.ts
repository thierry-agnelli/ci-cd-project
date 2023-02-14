// import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";
// import viteConfig from "./vite.config";

// https://vitejs.dev/config/
// export default mergeConfig(viteConfig, defineConfig({
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    exclude: ["packages/template/*", "**/node_modules/**"],
  },
// }));
});
