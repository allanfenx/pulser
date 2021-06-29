import { unlink } from "fs";
import { resolve } from "path";

export default (value: string) => {

    unlink(resolve(__dirname, "..", "..", "public", "image", "product", `${value}`), err => {
        if (err) return false;
    })
}