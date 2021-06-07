type UserType = {
    cpf: string,
    name: string;
    email: string;
    password: string;
    repeat_password: string
}

export function UserValidate(user: UserType, erros: string[]) {

    if (!user.cpf || typeof user.cpf === undefined || user.cpf === null) {
        erros.push("O campo cpf é obrigatório");
    } else if (!user.cpf.match(/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/)) {
        erros.push("Formato cpf invalido");
    }

    if (!user.name || typeof user.name === undefined || user.name === null) {
        erros.push("O campo nome é obrigatório");
    } else if (user.name.length > 49 || user.name.length == null) {
        erros.push("O campo nome não pode ter mais que 50 carecteres");
    }

    if (typeof user.email == undefined || user.email == null || !user.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
        erros.push("O campo deve ser preenchido com um e-mail válido");
    } else if (user.email.length > 79) {
        erros.push("O campo email não pode ter mais que 80 carecteres");
    }

    if (user.password == null || typeof user.password == undefined || !user.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/))
        erros.push("O campo senha deve ser acima de 8 caracteres uma letra e um digito");

    if (user.password !== user.repeat_password) erros.push("Confirme sua senha para proseguir");

}

