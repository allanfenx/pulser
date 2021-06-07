type AndressType = {
    cep: string;
    street: string;
    district: string;
    city: string;
    state: string;
    number: number;
    id: string;
}

export function AndressValidate(andress: AndressType, erros: string[]) {

    if (!andress.cep || andress.cep == null || typeof andress.cep == undefined) {
        erros.push("O campo cep é obrigatório");
    } else if (andress.cep.match("/^[0-9]{2}.[0-9]{3}-[0-9]{3}$/")) {
        erros.push("Formato cep invalido");
    }

    if (!andress.street || andress.street == null || typeof andress.street == undefined) {
        erros.push("O campo rua é obrigatório");
    } else if (andress.street.length > 49) {
        erros.push("O Campo street não pode ter mais que 50 caracteres");
    }

    if (!andress.district || andress.district == null || typeof andress.district == undefined) {
        erros.push("O campo bairro é obrigatório");
    } else if (andress.district.length > 49) {
        erros.push("O Campo bairro não pode ter mais que 50 caracteres");
    }

    if (!andress.city || andress.city == null || typeof andress.city == undefined) {
        erros.push("O campo cidade é obrigatório");
    } else if (andress.city.length > 49) {
        erros.push("O Campo cidade não pode ter mais que 50 caracteres");
    }

    if (!andress.state || andress.state == null || typeof andress.state == undefined) {
        erros.push("O campo estado é obrigatório");
    } else if (andress.state.length > 2) {
        erros.push("O Campo estado não pode ter mais que 2 caracteres");
    }

    if (!andress.number || andress.number == null || typeof andress.number == undefined) erros.push("O campo numero é obrigatório");

}