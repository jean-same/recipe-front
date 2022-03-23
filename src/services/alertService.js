import Vue from 'vue';

const alertService = {

    alertSuccess : (message) => {
        return Vue.swal({
            position: 'center',
            icon: 'success',
            title: message ,
            showConfirmButton: false,
            timer: 1500
        })
    },

    alertSomethingWentWrong : (message) => {
        return Vue.swal({
            icon: 'error',
            title: 'Oops...',
            text: message,
        })
    },

}

export default alertService;