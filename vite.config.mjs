import { defineConfig } from "vite";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";
import autoprefixer from "autoprefixer";
import cssnanoPlugin from "cssnano";

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
            plugins: [autoprefixer, cssnanoPlugin]
        }
    },
    plugins: [
        viteStaticCopy({
            targets: [
                { src: path.resolve(__dirname, "assets/images/**/*"), dest: "assets/images" },
                { src: path.resolve(__dirname, "assets/smileys/**/*"), dest: "assets/smileys" },
                { src: path.resolve(__dirname, "assets/licenses/**/*"), dest: "assets/licenses" }
            ]
        })
    ]
});
