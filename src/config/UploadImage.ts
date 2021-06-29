import { diskStorage } from "multer";
import { randomBytes } from "crypto";
import { Request } from "express";
import { resolve } from "path";

export default {

    dest: resolve(__dirname, "..", "..", "public", "image", "product"),
    storage: diskStorage({
        destination: (req, file, cb) => {
            cb(null, resolve(__dirname, "..", "..", "public", "image", "product"))
        },
        filename: (req, file, cb) => {
            const hash = randomBytes(16).toString('hex');

            const fileName = `${hash}-${file.originalname}`;

            cb(null, fileName);
        }
    }),
    limits: {
        fileSize: 4 * 1024 * 1024
    },
    filefilter: (req: Request, cb: CallableFunction) => {
        const alowedMines = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ];

        if (alowedMines.includes(req.file.mimetype)) {
            cb(null, true)
        } else {
            cb(new Error("Invalid file type"));
        }
    }
}