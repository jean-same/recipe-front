<template>
    <section>
        <h1>Recettes</h1>
        <ul>
            <li> <RecipeCard /> </li>
        </ul>
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