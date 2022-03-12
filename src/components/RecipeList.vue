<template>
    <section>
        <h1>Recettes</h1>
        <ul>
            <li> <RecipeCard /> </li>
            <li>Recette 2</li>
            <li>Recette 3</li>
            <li>Recette 4</li>
            <li>Recette 5</li>
            <li>Recette 6</li>
        </ul>
    </section>
</template>

<script>
import RecipeCard from './RecipeCard.vue'
export default {
    name: "RecipeList",
      components: {
    RecipeCard
  }
}
</script>

<style lang="scss">

</style>