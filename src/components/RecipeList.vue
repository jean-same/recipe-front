<template>
    <section>
       <BreadCrumb breadCrumbProps="Liste des recettes"/>
            <div class="latest-news mt-150 mb-150">
              <div class="container">
                <RecipeTypeList /> 
                <div class="row"> 
                  <div 
                    v-for="recipe in this.recipes.result" :key="recipe.id"
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

export default {
    name: "RecipeList",
      components: {
        BreadCrumb,
        RecipeTypeList,
        RecipeCard
    },

    async created() {
      console.log('Le composant vient d"etre cree')
      this.recipes = await RecipeService.loadRecipes()
      console.log(this.recipes)
    },

    data() {
      return {
        recipes: []
      }
    },

      mounted() {
    document.title = "Recettes"
  }
}
</script>

<style lang="scss">

</style>