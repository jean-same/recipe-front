<template>
     <section>
         <BreadCrumb :breadCrumbProps="recipe.title"/>
         
        <div class="mt-150 mb-150">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="single-recipe-section"
                        v-if="recipe.length != 0"
                        >
                            <div class="single-recipe-text">
                                <div class="single-recipe-bg"
                                v-bind:style="{ 'background-image': 'url(' + getPicture + ')' }"
                                ></div>
                                <p class="blog-meta">
                                    <span class="author"> <b-icon icon="person-fill"></b-icon> {{ recipe.user.pseudo }} </span>
                                    <span class="date"> <b-icon icon="calendar2-check"></b-icon>  {{ getRecipeDateFormatted }} </span>
                                </p>
                                <h2> {{ recipe.title }} </h2>
                                <p>  {{ recipe.content }}  </p>
                            </div>

                            <div class="comments-list-wrap">
                                <h3 class="comment-count-title">{{ recipe.comments.length }} commentaire<span v-if="recipe.comments.length > 1">s</span>  </h3>
                                <div class="comment-list">
                                    <div class="single-comment-body"
                                        v-for="comment in recipe.comments" 
                                        :key="comment.id" 
                                    >
                                        <div class="comment-text-body">
                                            <h4>{{ comment.user.pseudo }} <span class="comment-date"> {{ getCommentFormattedDate(comment.created_at) }} </span> </h4>
                                            <p>{{ comment.content }}.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="comment-template">
                                <h4>Laisser un commentaire</h4>
                                <p>Si vous avez un commentaire n'hésitez pas à nous envoyer votre avis.</p>
                                <form action="index.html">
                                    <p><textarea name="comment" id="comment" cols="30" rows="10" placeholder="Votre message"></textarea></p>
                                    <p><input type="submit" value="Submit"></p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="sidebar-section">
                            <div class="ingredients-section">
                                <h4>Ingredients</h4>
                                <ul>
                                    <li
                                        v-for="ingredient in recipe.ingredients" 
                                        :key="ingredient.id" 
                                    ><a > {{ ingredient.name }} </a></li>
                                </ul>
                            </div>
                            <div class="recent-posts">
                                <h4>Nos derniers recettes</h4>
                               <MostRecentRecipe />
                            </div>
                            <div class="archive-posts">
                                <h4>Les plus aimées</h4>
                                <MostLikedRecipe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
</template>

<script>
import BreadCrumb from './BreadCrumb.vue'
import MostLikedRecipe from './MostLikedRecipe.vue'
import MostRecentRecipe from './MostRecentRecipe.vue'


import utils from '../services/utils';
import recipeService from '../services/recipeService'

export default {
    name: 'RecipeShow',

    components: {
        BreadCrumb,
        MostLikedRecipe,
        MostRecentRecipe
    },

    data(){
        return {
            recipe: [],
            recipeId: null,
        }
    },

    methods: {
        getCommentFormattedDate: function(date) {
            return utils.formatDate(date)
        }
    },

    computed: {
        getRecipeDateFormatted() {
          return utils.formatDate(this.recipe.created_at)
        },

        getPicture() {
          return this.recipe.pictures[0].url
        }
    },

    async created() {
        this.recipeId = this.$route.params.id;
        this.recipe = await recipeService.loadOneRecipe(this.recipeId)
    },

}
</script>

<style lang="scss">


.single-recipe-bg {
  background-size: cover;
  background-position: center;
  background-color: #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
}

.single-recipe-text h2 {
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 10px;
}

.single-recipe-text p {
  font-size: 15px;
  line-height: 1.6;
  color: #051922;
}

.comments-list-wrap {
  margin: 100px 0;
}

.comments-list-wrap h3 {
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 50px;
}

.comment-template h4 {
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 50px;
}

.single-comment-body {
  position: relative;
}

.comment-text-body {
  margin-bottom: 40px;
}

.comment-text-body h4 {
  font-size: 18px;
  font-weight: 600;
}

span.comment-date {
  opacity: 0.5;
  font-size: 80%;
  font-weight: 700;
  margin-left: 5px;
}

.comment-text-body h4 a {
  color: #051922;
  font-size: 80%;
  margin-left: 10px;
  border-bottom: 1px solid #aaa;
}

.comment-text-body p {
  color: #888;
  line-height: 2;
  margin: 0;
}

.comment-template h4 {
  margin-bottom: 10px;
}

.comment-template > p {
  opacity: 0.7;
  margin-bottom: 30px;
}

.comment-template form p input[type=text] {
  border: 1px solid #ddd;
  width: 49%;
  padding: 15px;
  border-radius: 5px;
  font-size: 15px;
  color: #051922;
}

.comment-template form p input[type=email] {
  border: 1px solid #ddd;
  width: 49%;
  padding: 15px;
  border-radius: 5px;
  font-size: 15px;
  color: #051922;
  margin-left: 10px;
}

.comment-template form p textarea {
  border: 1px solid #ddd;
  padding: 15px;
  font-size: 15px;
  color: #051922;
  border-radius: 5px;
  height: 250px;
  resize: none;
  width: 100%;
}

input[type="submit"] {
    background-color: #F28123;
    color: #051922;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 15px;
    border: none !important;
    cursor: pointer;
    padding: 15px 25px;
    border-radius: 3px;
}

.sidebar-section {
  margin-left: 30px;
}

.sidebar-section h4 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
}

.sidebar-section ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.sidebar-section ul li {
  line-height: 1.5;
}

.sidebar-section ul li a {
  color: #555;
  font-size: 15px;
}

.sidebar-section > div {
  margin-bottom: 60px;
}

.sidebar-section > div:last-child {
  margin-bottom: 0;
}

.recent-posts ul li, .archive-posts ul li {
  position: relative;
  padding-left: 17px;
  margin-bottom: 10px;
}

.recent-posts ul li:before, .archive-posts ul li:before {
  position: absolute;
  left: 0;
  top: 2px;
  content: "-";
  font-weight: 900;
}

.ingredients-section ul li {
  display: inline-block;
}

.ingredients-section ul li a {
  background-color: #ddd;
  padding: 3px 10px;
  display: block;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-right: 5px;
}


</style>
