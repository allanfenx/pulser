import Andress from "../models/Andress";

export default {

    render(andress: Andress) {

        return {
            id: andress.id,
            cep: andress.cep,
            street: andress.street,
            district: andress.district,
            city: andress.city,
            state: andress.state,
            number: andress.number,
            created_at: andress.created_at,
            update_at: andress.update_at
        }
    },
    renderMany(andresses: Andress[]) {

        return andresses.map(andress => this.render(andress));
    }
}