import User from "../models/User";
import AndressView from "./AndressView";


export default {

    render(user: User) {

        return {
            id: user.id,
            name: user.name,
            cpf: user.cpf,
            email: user.email,
            role: user.role,
            created_at: user.created_at,
            update_at: user.update_at,
            andresses: AndressView.renderMany(user.andress)

        }
    },

    renderMany(users: User[]) {

        return users.map(user => this.render(user));
    }
}