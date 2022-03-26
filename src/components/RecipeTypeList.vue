<template>
     <div>
            <div class="radio-group">
                <span
                 v-for="type in this.types" 
                 :key="type.id" 
                >
                <input type="radio" v-bind:id="`option${type.id}`" v-model="selectedOption" :value="type.id" name="selector" v-on:change="handleSelectedType">
                <label v-bind:for="`option${type.id}`">{{ type.name }}</label>
                </span>
            </div>
     </div>
     
</template>

<script>

export default {
    name: 'RecipeTypeList',

    async created() {
      this.preTypes = await this.$store.state.services.type.loadTypes()
      if(this.$store.state.services.user.isAuthenticated() || this.preTypes) {
          this.types = this.preTypes
      }
    },

    data() {
      return {
        preTypes: null,
        types: [],
        selectedOption: null
      }
    },

    methods: {
        handleSelectedType: function(evt) {
            evt.preventDefault;
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
