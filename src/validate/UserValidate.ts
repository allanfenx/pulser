
type User = {
    name: string;
    email: string;
    password: string;
    repeat_password: string;
}

/*export function UserValidate(user: User, erros: any[]) {

    if (user.name == null || typeof user.name == undefined) {
        erros.push("O Campo nome é obrigatório");
    }

    if (user.email.match("^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$") || user.email == null || typeof user.email == undefined) {
        erros.push("Informe um email válido!")
    }

    if (user.password == null || typeof user.password == undefined) {
        erros.push("!!!!!!");
    }
}*/

class UserValidate {

    validUser(user: User, erros: any[]) {


        erros = [];

        if (user.name == null || typeof user.name == undefined) {
            erros.push("O Campo nome é obrigatório");
        }

        if (user.email.match("^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$") || user.email == null || typeof user.email == undefined) {
            erros.push("Informe um email válido!")
        }

        if (user.password == null || typeof user.password == undefined) {
            erros.push("!!!!!!");
        }
    }
}

export default new UserValidate();