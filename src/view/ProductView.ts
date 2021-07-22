import Product from "../models/Product";
import ProductImageView from "./ProductImageView";
import ProductStockView from "./ProductStockView";
import ProductWeigthView from "./ProductWeigthView";


export default {

    render(product: Product) {

        return {
            id: product.id,
            name: product.name,
            slug: product.slug,
            description: product.description,
            price: product.price,
            created_at: product.created_at,
            update_at: product.update_at,
            weigthAndMeasure: ProductWeigthView.render(product.productWeigth),
            stock: ProductStockView.renderMany(product.stocks),
            images: ProductImageView.renderMany(product.images)
        }
    },

    renderMany(products: Product[]) {

        return products.map(product => this.render(product));
    }
}