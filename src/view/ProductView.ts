import Product from "../models/Product";


export default {

    render(product: Product) {

        return {
            id: product.id,
            name: product.name,
            slug: product.slug,
            description: product.description,
            price: product.price,
            created_at: product.created_at,
            update_at: product.update_at
        }
    },

    renderMany(products: Product[]) {

        return products.map(product => this.render(product));
    }
}