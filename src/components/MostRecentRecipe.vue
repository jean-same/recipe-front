<template>
    <ul>
        <li 
        v-for="recipe in recipes" 
        :key="recipe.id" 
        ><a> {{ recipe.title }} </a></li>
    </ul>
</template>

<script>
import recipeService from '../services/recipeService'

export default {
    name: 'MostRecentRecipe',

        data(){
        return {
            recipes: [],
        }
    },

    async created() {
        this.recipes = await recipeService.loadFiveSpecificRecipes('mr')
    },

}
</script>

<style lang="scss">

</style>
