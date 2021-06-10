import Product from "../models/Product";
import ProductStockView from "./ProductStockView";


export default {

    render(product: Product) {

        return {
            id: product.id,
            name: product.name,
            slug: product.slug,
            description: product.description,
            price: product.price,
            weight: product.weight,
            measure: product.measure,
            created_at: product.created_at,
            update_at: product.update_at,
            stock: ProductStockView.renderMany(product.stocks)
        }
    },

    renderMany(products: Product[]) {

        return products.map(product => this.render(product));
    }
}