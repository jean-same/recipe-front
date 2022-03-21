<template>
    <section>
       <BreadCrumb breadCrumbProps="Liste des recettes"/>
            <div v-if="this.recipes" class="latest-news mt-150 mb-150">
              <div class="container">
                <RecipeTypeList 
                  v-on:recipe-typeId-selected="handleRecipeTypeSelected"
                /> 
                <div class="row"> 
                  <div 
                    v-for="recipe in this.recipes" :key="recipe.id"
                    class="col-lg-4 col-md-6">
                  <RecipeCard :recipeProps="recipe" /> 
                  </div>
                </div>
              </div>
            </div>
    </section>
</template>

<script>
import RecipeCard from './RecipeCard.vue'
import BreadCrumb from './BreadCrumb.vue'
import RecipeService from '../services/recipeService.js'
import RecipeTypeList from './RecipeTypeList.vue'
import recipeService from '../services/recipeService.js'
import userService from '../services/userService'

export default {
    name: "RecipeList",
      components: {
        BreadCrumb,
        RecipeTypeList,
        RecipeCard
    },

    async created() {


      this.preRecipe = await RecipeService.loadRecipes()

      if(!userService.isAuthenticated() || this.preRecipe == false) {
          this.$store.dispatch('auth/logout');
          this.$router.push('/login');
      } else {
        this.recipes = this.preRecipe.data.result
      }

    },

    data() {
      return {
        preRecipe: null,
        recipes: []
      }
    },

    methods: {
      
      handleRecipeTypeSelected: async function(selectedOptionId) {
        if(!userService.isAuthenticated() ) {
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        } else {
              this.recipes = await recipeService.loadRecipesByType(selectedOptionId);
        }
      }
    },

    mounted() {
      document.title = "Recettes"
    }
}
</script>

<style lang="scss">

</style>