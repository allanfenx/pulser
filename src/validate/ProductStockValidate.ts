type ProductStockType = {
    amount: number,
    color: string,
    index: number,
    name: string
}

export function ProductStockValidate(productStock: ProductStockType, erros: string[]) {

    if (!productStock.amount || productStock.amount !== Number(productStock.amount))
        erros.push("O campo amount é obrigatório e deve ser um numero")

    if (!productStock.color || productStock.color !== String(productStock.color))
        erros.push("O campo cor é obrigatório e deve ser um numero");
}

export function ProductStockValidateUpdate(productStock: ProductStockType, erros: string[]) {

    if (!productStock.index || productStock.index !== Number(productStock.index))
        erros.push("O campo index é obrigatório e deve ser um numero");

    if (!productStock.amount || productStock.amount !== Number(productStock.amount))
        erros.push("O campo amount é obrigatório e deve ser um numero")

    if (!productStock.color || productStock.color !== String(productStock.color))
        erros.push("O campo cor é obrigatório e deve ser um numero");
}