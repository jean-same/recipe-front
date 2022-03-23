<template>
    <section v-if="isConnected">
       <BreadCrumb breadCrumbProps="Nouveau recette"/>
            <div class="recipe-form-section mt-150 mb-150">
                <div class="container">
                    <div class="row">
                        <div class="recipe-form-container mb-3 mb-lg-0">
                            <div class="recipe-form">
                                <form @submit.prevent="handleSubmit">
                                    <div>
                                        <input type="text" v-model="title" placeholder="Titre de la recette" name="title" id="title">
                                    </div>
                                    <div
                                        v-if="emptyTitle"
                                        class="empty-field"
                                        role="alert"
                                    >Titre obligatoire!</div>

                                    <div class="row">

                                        <div class="type col-sm-6">
                                            <select class="form-select" v-model="selectedTypeOption" >
                                            <option >Choisir un type</option>
                                            <option
                                                v-for="type in this.types" 
                                                :key="type.id" 
                                                v-bind:id="`option${type.id}`" :value="type.id"
                                             >{{ type.name }}</option>
                                            </select>
                                            <div
                                            v-if="emptyType"
                                            class="empty-field"
                                            role="alert"
                                            >
                                            Type obligatoire!
                                            </div>
                                        </div>


                                        <div class="type col-sm-6">
                                            <select class="form-select" v-model="selectedDifficultyOption" >
                                            <option >Choisir une difficulté</option>
                                            <option
                                                v-for="difficulty in this.difficulties" 
                                                :key="difficulty.id" 
                                                v-bind:id="`option${difficulty.id}`" :value="difficulty.id"
                                             >{{ difficulty.name }}</option>
                                            </select>
                                            <div
                                            v-if="emptyDifficulty"
                                            class="empty-field"
                                            role="alert"
                                            >
                                            Difficulté obligatoire!
                                            </div>
                                        </div>

                                    </div>

                                    <div class="ingredients">

                                        <label
                                        v-for="ingredient in this.ingredients" 
                                        :key="ingredient.id" 
                                        >
                                            <input type="checkbox" v-model="selectedIngredients" name="ingredient" :value="ingredient.id">
                                            <span>
                                                {{ ingredient.name }}
                                            </span>
                                        </label>

                                    </div>
                                    <div
                                        v-if="emptyIngredient"
                                        class="empty-field"
                                        role="alert"
                                        >
                                        Ingredient obligatoire!
                                        </div>
                                    
                                    <div>
                                        <textarea name="content" v-model="content"  placeholder="Description de la recette"  id="content" cols="30" rows="5"></textarea>
                                    </div>
                                    <div
                                        v-if="emptyContent"
                                        class="empty-field"
                                        role="alert"
                                    >Description obligatoire!</div>
                                    <p><input :class="{ 'submit-disabled' : emptyTitle || emptyType || emptyDifficulty || emptyIngredient || emptyContent }" type="submit" value="Ajouter"></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
</template>

<script>

import BreadCrumb from './BreadCrumb.vue'
import recipeService from '../services/recipeService'
import typeService from '../services/typeService'
import userService from '../services/userService'
import alertService from '../services/alertService'
import ingredientService from '../services/ingredientService'
import difficultyService from '../services/difficultyService'

export default {
    name: 'RecipeCreate',

    components: {
        BreadCrumb
    },

    created() {

      console.log(userService.checkUserRole())

      if(userService.isAuthenticated() && userService.checkUserRole()) {
          this.isConnected = true
          this.loadTypes()
          this.loadIngredients()
          this.loadDifficulties()
          
      } else {
          alertService.alertSomethingWentWrong("Vous n'êtes pas autorisé à ajouter des recettes")
          this.$router.push('/recettes');
      }

    },

    data() {
        return {
            title: '',
            content: '',
            types: [],
            ingredients: [],
            difficulties: [],

            selectedIngredients : [],
            selectedTypeOption: 'Choisir un type',
            selectedDifficultyOption: 'Choisir une difficulté',
            isConnected: false,

            emptyTitle: false,
            emptyContent: false,
            emptyType: false,
            emptyDifficulty: false,
            emptyIngredient: false
        }
    },

    methods: {
        async handleSubmit() {

            this.title == '' ? this.emptyTitle = true : this.emptyTitle = false
            this.content == '' ? this.emptyContent = true : this.emptyContent = false
            this.selectedIngredients.length == 0 ? this.emptyIngredient = true : this.emptyIngredient = false
            this.selectedTypeOption == 'Choisir un type' ? this.emptyType = true : this.emptyType = false
            this.selectedDifficultyOption == 'Choisir une difficulté' ? this.emptyDifficulty = true : this.emptyDifficulty = false

            if(!this.emptyTitle && !this.emptyContent && !this.emptyIngredient && !this.emptyType && !this.emptyDifficulty) {
                let data = {
                    "title": this.title,
                    "content": this.content,
                    "type": this.selectedTypeOption,
                    "difficulty": this.selectedDifficultyOption,
                    "ingredient" : this.selectedIngredients,
                    "pictures": [
                        {
                            "url": "https://picsum.photos/id/431/350"
                        }
                    ]
                }

                const add = await recipeService.addRecipe(data)
                console.log(add)
                if(add.status == 201) {
                    alertService.alertSuccess("Recette ajoutée")
                    this.$router.push('/recettes')
                }
            }
            
        },

        async loadTypes() {
            this.types = await typeService.loadTypes()
        },

        async loadIngredients() {
            this.ingredients = await ingredientService.loadIngredients()
        },

        async loadDifficulties() {
            this.difficulties = await difficultyService.loadDifficulties()
        }
    }
}
</script>

<style scoped lang="scss">

$theme-color: #F28123;

.ingredients {
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 10px;
	display: flex;
	gap: 15px;
    flex-wrap: wrap;
}

label {
	cursor: pointer;
	user-select: none;
	display: block;

	span {
		position: relative;
		border: 1px solid #d4d4d4;
		border-radius: 10px;
		transition: 0.4s;
		padding: 0 15px;
		height: 46px;
		color: #414141;
		display: flex;
		align-items: center;
		column-gap: 7px;
	}

	input {
		pointer-events: none;
		display: none;

		&:checked + span {
			border-color: $theme-color;
			color: $theme-color;
		}
	}
}

select {
  text-align: center;
}

.recipe-form-container {
    margin: 0 auto;
}

.recipe-form form div input[type=text], textarea, select {
  width: 100%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 1em 0;
}

.recipe-form input[type=submit] {
    width: 100%;
    border-radius: 10px;
}

input[type="submit"] .submit-disabled {
    pointer-events: none;
    background: #ccc;
}

.empty-field {
  color: #fff;
  font-size: 14px;
  font-weight: normal;
  background: #E74C3C;
  width: 100%;
  text-align: center;
  display: inline-block;
  padding: 10px 0px;
  border-radius: 3px;
  margin-bottom: 18px;
}

input[type="submit"] {
    background-color: $theme-color;
    color: #051922;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 15px;
    border: none !important;
    cursor: pointer;
    padding: 15px 25px;
    border-radius: 3px;
}

</style>
