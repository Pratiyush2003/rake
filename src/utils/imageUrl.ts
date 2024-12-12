import { envForImage } from "@/constants/apiConst"

const createImageUrl = (url : string) => {
    return envForImage+url
}

export {createImageUrl}