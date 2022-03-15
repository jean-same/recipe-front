<template>
    <section>
       <BreadCrumb breadCrumbProps="Liste des recettes"/>
            <div class="latest-news mt-150 mb-150">
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

export default {
    name: "RecipeList",
      components: {
        BreadCrumb,
        RecipeTypeList,
        RecipeCard
    },

    async created() {
      this.recipes = await RecipeService.loadRecipes()
    },

    data() {
      return {
        recipes: []
      }
    },

    methods: {
        handleRecipeTypeSelected: async function(selectedOptionId) {
            this.recipes = await recipeService.loadRecipesByType(selectedOptionId);
        }
    },

    mounted() {
      document.title = "Recettes"
    }
}
</script>

<style lang="scss">

</style>