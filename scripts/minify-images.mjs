import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminOptipng from "imagemin-optipng";
import imageminGifsicle from "imagemin-gifsicle";
import imageminSvgo from "imagemin-svgo";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, "../dist/assets");

(async () => {
    console.log(`Minifying images in ${distPath}`);

    const minifiedFiles = await imagemin([`${distPath}/{images,smileys,licenses}/**/*`], {
        destination: distPath,
        plugins: [
            imageminMozjpeg(),
            imageminOptipng(),
            imageminGifsicle(),
            imageminSvgo({
                plugins: [
                    { name: 'removeHiddenElems', active: false }
                ]
            })
        ]
    });

    console.log(`✅ Optimized ${minifiedFiles.length} images!`)
})();
