import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// const apiPrefix = '/api'
const apiPrefix = '/img'
import fs from 'fs'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        https: {
            key: fs.readFileSync('./127.0.0.2+1-key.pem'),
            cert: fs.readFileSync('./127.0.0.2+1.pem'),
        },
        proxy: {
            [apiPrefix]: {
                ws: false,
                changeOrigin: true,
                // target: "http://172.31.252.118:8000",
                // target: `http://127.0.0.1:3000`,
                target: `https://www.baidu.com`,
                // target: `https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png`,
                rewrite: (path: string) => {
                    console.log(path)
                    console.log(path.replace(new RegExp(`^${apiPrefix}`), apiPrefix))
                    return path.replace(new RegExp(`^${apiPrefix}`), apiPrefix)
                }

            },
        },
    },
})
