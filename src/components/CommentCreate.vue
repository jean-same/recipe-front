<template>
     <section>
        <div class="comment-template">
            <h4>Laisser un commentaire</h4>
            <p>Si vous avez un commentaire n'hésitez pas à nous envoyer votre avis.</p>
            <form @submit.prevent="handleSubmit">
                <div
                v-if="emptyContent"
                class="empty-field"
                role="alert"
                >Contenu obligatoire!</div>
                <p><textarea name="comment" id="comment" v-model="content" cols="30" rows="10" placeholder="Votre commentaire"></textarea></p>
                <p><input type="submit" value="Submit"></p>
            </form>
        </div>
     </section>
</template>

<script>

import commentService from '../services/commentService'
import alertService from '../services/alertService'


export default {
    name: 'CommentCreate',


        data(){
        return {
            recipe: [],
            recipeId: null,
            content: '',
            emptyContent: false
        }
    },

    methods: {

        async handleSubmit() {
          console.log("Je suis là")

          this.content == '' ? this.emptyContent = true : this.emptyContent = false

            if(!this.emptyContent) {
                let data = {
                    "content": this.content,
                    "recipe": this.idCommentRecipeProps
                }

                const add = await commentService.add(data)
                console.log(add)
                if(add.status == 201) {
                    alertService.alertSuccess("Commentaire ajouté")
                    this.content = ""
                }
            }
        }
    },

    props: {
        idCommentRecipeProps: Number,
    }



}
</script>

<style lang="scss">

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


</style>
