import ProductImage from "../models/ProductImage";


export default {

    render(productImage: ProductImage) {

        return {
            id: productImage.id,
            name_image: productImage.name_image,
            name_key: productImage.key_name,
        }
    },
    renderMany(productImages: ProductImage[]) {
        return productImages.map(image => this.render(image));
    }
}