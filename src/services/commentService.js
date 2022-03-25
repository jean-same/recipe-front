import axios from "axios";

const commentService = {

    async add(data) {
        return await axios.post('/comment', data )
                .then(response => {
                    return response;
                })
                .catch(err => {
                    return err
                })
    }

}

export default commentService;