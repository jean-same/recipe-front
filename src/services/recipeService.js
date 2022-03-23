import axios from "axios";

const recipeService = {

    async loadRecipes() {
        const response = await axios.get('/recipe' )

        return response;
    },

    async loadOneRecipe(recipeId) {
        const response = await axios.get('/recipe/' + recipeId )

        return response.data.result;
    },

    async loadRecipesByType(typeId) {
        const response = await axios.get('/type/' + typeId )

        return response.data.result.recipes;
    },

    async loadFiveSpecificRecipes(arg) {
        const response = await axios.get('/recipe/spec?q=' + arg )

        return response.data.result;
    },

    async addRecipe(data) {
        const response = await axios.post('/recipe/' , data )

        return response

    }

}

export default recipeService;