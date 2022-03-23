import axios from "axios";

const recipeService = {

    async loadRecipes() {
        return await axios.get('/recipe')
                .then(response => {
                    return response;
                })
                .catch(err => {
                    return err
                })

    },

    async loadOneRecipe(recipeId) {
        return await axios.get('/recipe/' + recipeId )
                .then(response => {
                    return response.data.result;
                })
                .catch(err => {
                    return err
                })
    },

    async loadRecipesByType(typeId) {
        return await axios.get('/type/' + typeId )
                .then(response => {
                    return response.data.result.recipes;
                })
                .catch(err => {
                    return err
                })

    },

    async loadFiveSpecificRecipes(arg) {
        return await axios.get('/recipe/spec?q=' + arg )
                .then(response => {
                    return response.data.result;
                })
                .catch(err => {
                    return err
                })
    },

    async addRecipe(data) {
        return await axios.post('/recipe/' , data )
                .then(response => {
                    return response
                })
                .catch(err => {
                    return err
                })
    }

}

export default recipeService;