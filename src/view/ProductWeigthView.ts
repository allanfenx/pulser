import ProductWeigth from "../models/ProductWeigth";


export default {
    render(productWeigth: ProductWeigth) {

        return {
            id: productWeigth.id,
            type_measure: productWeigth.type_measure,
            type_weigth: productWeigth.type_weigth,
            measure: productWeigth.measure,
            weigth: productWeigth.weigth
        }

    }
}