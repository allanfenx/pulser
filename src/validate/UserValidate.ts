type UserType = {
    name: string;
    email: string;
    password: string;
    repeat_password: string
}

export function UserValidate(user: UserType, erros: string[]) {

    if (!user.name || typeof user.name == undefined || user.name == null) erros.push("O campo nome é origatório");

    if (typeof user.email == undefined || user.email == null || !user.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/))
        erros.push("O campo deve ser preenchido com um e-mail válido");

    if (user.password == null || typeof user.password == undefined || !user.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/))
        erros.push("O campo senha deve ser acima de 8 caracteres uma letra e um digito");

    if (user.password !== user.repeat_password) erros.push("Confirme sua senha para proseguir");

}
