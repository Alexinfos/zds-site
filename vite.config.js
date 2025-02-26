import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    root: "assets",
    build: {
        outDir: "../dist",
        //emptyOutDir: true; /* TODO : décommenter une fois Gulp retiré */
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "assets/js/main.js"),
                zmd: path.resolve(__dirname, "assets/js/main_zmd.js")
            },
            output: {
                entryFileNames: "js/[name].js",
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name.endsWith(".css")) {
                        return "css/[name][extname]";
                    }
                    return "assets/[name][extname]";
                }
            }
        },
        cssCodeSplit: true
    },
    css: {
        preprocessorOptions: {
            scss: {
                sourceMap: true
            }
        },
        postcss: {
            plugins: [
                require("autoprefixer"),
                require("cssnano")
            ]
        }
    }
});
