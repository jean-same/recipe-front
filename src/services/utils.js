import moment from "moment";

const utils = {

    formatDate(date) {
        return moment(date).format('ll');
    }
}

export default utils;