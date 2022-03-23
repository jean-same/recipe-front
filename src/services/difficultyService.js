import axios from "axios";

const difficultyService = {

    async loadDifficulties() {
        return await axios.get('/difficulty' )
                .then(response => {
                    return response.data.result;
                })
                .catch(err => {
                    return err
                })
    }

}

export default difficultyService;