import ProductStock from "../models/ProductStock";

export default {

    render(productStock: ProductStock) {

        return {
            id: productStock.id,
            amount: productStock.amount,
            color: productStock.color
        }
    },

    renderMany(productStocks: ProductStock[]) {

        return productStocks.map(productStock => this.render(productStock));
    }
}