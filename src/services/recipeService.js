import axios from "axios";

const recipeService = {

    baseUri: 'http://localhost:8000/api/v1',

    async loadRecipes() {
        const response = await axios.get(recipeService.baseUri + '/recipe' )

        return response.data.result;
    },

    async loadOneRecipe(recipeId) {
        const response = await axios.get(recipeService.baseUri + '/recipe/' + recipeId )

        return response.data.result;
    },

    async loadRecipesByType(typeId) {
        const response = await axios.get(recipeService.baseUri + '/type/' + typeId )

        return response.data.result.recipes;
    }

}

export default recipeService;