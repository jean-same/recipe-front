import axios from "axios";

const recipeService = {

    async loadRecipes() {
        const response = await axios.get('/recipe' )

        return response.data.result;
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

}

export default recipeService;