import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from './auth.module';

import utilsService from '@/services/utils';
import typeService from "@/services/typeService";
import userService from "@/services/userService";
import alertService from "@/services/alertService";
import recipeService from "@/services/recipeService";
import commentService from "@/services/commentService";
import difficultyService from "@/services/difficultyService";
import ingredientService from "@/services/ingredientService";
import axiosDefaultService from "@/services/axiosDefaultService";


Vue.use(Vuex);
export default new Vuex.Store({

  state: {
  
    services: {
        user: userService,
        type: typeService,
        utils: utilsService,
        alert: alertService,
        recipe: recipeService,
        comment: commentService,
        difficulty: difficultyService,
        ingredient: ingredientService,
        axiosDefault: axiosDefaultService,    
    }

  },

  modules: {
    auth
  }
});
