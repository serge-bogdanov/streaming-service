import {
  defineConfig,
  pluginEntry,
  pluginImage,
  pluginSsg,
  pluginSprite,
} from "minista";
import path from "path";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/streaming-service/" : "/",
  plugins: [pluginSsg(), pluginEntry(), pluginSprite(), pluginImage()],
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
}));
