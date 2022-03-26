<template>
    <ul>
        <li 
        v-for="recipe in recipes" 
        :key="recipe.id" 
        ><a> {{ recipe.title }} </a></li>
    </ul>
</template>

<script>

export default {
    name: 'MostLikedRecipe',

        data(){
        return {
            recipes: [],
        }
    },

    async created() {
        this.recipes = await this.$store.state.services.recipe.loadFiveSpecificRecipes('ml');
    },

}
</script>

<style lang="scss">

</style>
