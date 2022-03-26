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
    name: 'MostRecentRecipe',

        data(){
        return {
            recipes: [],
        }
    },

    async created() {
        this.recipes = await this.$store.state.services.recipe.loadFiveSpecificRecipes('mr')
    },

}
</script>

<style lang="scss">

</style>
