import Category from "../models/Category";


export default {
    render(category: Category) {

        return {
            id: category.id,
            title: category.title,
            slug: category.slug,
            created_at: category.created_at,
            update_at: category.update_at
        }
    },

    renderMany(categories: Category[]) {

        return categories.map(category => this.render(category))
    }
}