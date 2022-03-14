import axios from "axios";

const recipeService = {

    baseUri: 'http://localhost:8000/api/v1',

    async loadRecipes() {
        const response = await axios.get(recipeService.baseUri + '/recipe' )
        console.log(response.data.result);

        return response.data;
    }

}

export default recipeService;