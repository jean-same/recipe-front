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
    name: 'MostLikedRecipe',

        data(){
        return {
            recipes: [],
        }
    },

    async created() {
        this.recipes = await recipeService.loadFiveSpecificRecipes('ml');
    },

}
</script>

<style lang="scss">

</style>
