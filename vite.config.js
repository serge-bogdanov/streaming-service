import { defineConfig, pluginImage, pluginSsg, pluginSprite } from "minista";
import path from "path";

export default defineConfig({
  plugins: [pluginSsg(), pluginSprite(), pluginImage()],
  resolve: {
    alias: [
      {
        find: "@/",
        replacement: path.resolve("src") + "/",
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/styles/helpers" as *;
        `,
      },
    },
  },
});
