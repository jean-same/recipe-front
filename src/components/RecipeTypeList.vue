<template>
     <div>
            <div class="radio-group">
                <span
                 v-for="type in this.types.result" 
                 :key="type.id" 
                >
                <input type="radio" v-bind:id="`option${type.id}`" v-model="selectedOption" :value="type.id" name="selector" v-on:change="handleSelectedType">
                <label v-bind:for="`option${type.id}`">{{ type.name }}</label>
                </span>
            </div>
     </div>
     
</template>

<script>
import typeService from '../services/typeService'

export default {
    name: 'RecipeTypeList',

    async created() {
      this.types = await typeService.loadTypes()
    },

    data() {
      return {
        types: [],
        selectedOption: null
      }
    },

    methods: {
        handleSelectedType: function(evt) {
            evt.PreventDefault;
            this.$emit('recipe-typeId-selected' , this.selectedOption)
        }
    }
}
</script>

<style lang="scss">

$bg: #000000;
$fg: lighten($bg,10%);
$borderWidth: 3px;

input[type=radio] {
  position: absolute;
  visibility: hidden;
  display: none;
}

label {
  color: lighten($bg,30%);
  display: inline-block;
  cursor: pointer;
  font-weight: bold;
  padding: 5px 20px;
}

input[type=radio]:checked + label{
  color: lighten($bg,60%);
  background: $fg;
}

label + input[type=radio] + label {
  border-left: solid $borderWidth $fg;
}
.radio-group {
  border: solid $borderWidth $fg;
  display: inline-block;
  margin: 20px 0;
  border-radius: 10px;
  overflow: hidden;
}

</style>
