import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// const apiPrefix = '/api'
const apiPrefix = "/img";
const apiPrefix1 = "/api";
import fs from "fs";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    https: {
      key: fs.readFileSync("./127.0.0.2+1-key.pem"),
      cert: fs.readFileSync("./127.0.0.2+1.pem"),
    },
    proxy: {
      [apiPrefix]: {
        ws: false,
        changeOrigin: true,
        target: `https://www.baidu.com`,
        rewrite: (path: string) => {
          return path.replace(new RegExp(`^${apiPrefix}`), apiPrefix);
        },
      },
      [apiPrefix1]: {
        ws: false,
        changeOrigin: true,
        target: `http://127.0.0.1:3000`,
        rewrite: (path: string) => {
          return path.replace(new RegExp(`^${apiPrefix}`), apiPrefix);
        },
      },
    },
  },
});
