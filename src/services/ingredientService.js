import axios from "axios";

const ingredientService = {

    async loadDifficulties() {
        const response = await axios.get('/ingredient' )

        return response.data.result;
    }

}

export default ingredientService;