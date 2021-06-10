
type ProductType = {
    title: string,
    name: string,
    description: string,
    price: number,
    measure: number,
    weight: number
}

export function ProductValidate(product: ProductType, erros: string[]) {

    if (!product.title || product.title == null || typeof product.title == undefined) erros.push("O Campo title é obrigatório");

    if (!product.name || product.name == null || typeof product.name == undefined) erros.push("O Campo nome é obrigatório");

    if (!product.description || product.description == null || typeof product.description == undefined) erros.push("O Campo description é obrigatório");

    if (!product.price || product.price == null || typeof product.price == undefined) erros.push("O Campo price é obrigatório");

    if (!product.measure || product.measure == null || typeof product.measure == undefined) erros.push("O Campo medida é obrigatório");

    if (!product.weight || product.weight == null || typeof product.weight == undefined) erros.push("O Campo peso é obrigatório");

}