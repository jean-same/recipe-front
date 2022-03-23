import axios from "axios";

const ingredientService = {

    async loadIngredients() {
        return await axios.get('/ingredient' )
                .then(response => {
                    return response.data.result;
                })
                .catch(err => {
                    return err
                })
    }

}

export default ingredientService;