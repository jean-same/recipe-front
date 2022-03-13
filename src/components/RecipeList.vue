<template>
    <section>
        <h1>Recettes</h1>
            <div class="latest-news mt-150 mb-150">
              <div class="container">
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
import RecipeService from '../services/recipeService.js'

export default {
    name: "RecipeList",
      components: {
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
    }
}
</script>

<style lang="scss">

</style>