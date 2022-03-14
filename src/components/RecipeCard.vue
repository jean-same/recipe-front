<template>
	<div class="single-recipe-card">
		<a href="#"><div class="single-recipe-bg recipe-bga"
     v-bind:style="{ 'background-image': 'url(' + image + ')' }"
    ></div></a>
		<div class="recipe-text-box">
			<h3><a href="#"> {{ recipeProps.title }} </a></h3>
				<p class="blog-meta">
					<span class="author"> <b-icon icon="person-fill"></b-icon> {{ recipeProps.user.pseudo }} </span>
					<span class="date"> <b-icon icon="calendar2-check"></b-icon>  13 Mar, 2022</span>
				</p>
				<p class="excerpt"> {{ recipeProps.content }} </p>
				<a href="#" class="read-more-btn">Voir plus <b-icon icon="bullseye"></b-icon>  </a>
		</div>
	</div>
</template>

<script>

export default {
    name: 'RecipeCard',

     async created() {

      if(this.recipeProps.pictures.length > 0 ) {
       this.image = this.recipeProps.pictures[0].url
      }
    },


    data() {
      return {
        image : ""
      }
    },

    props: {
        recipeProps: Object,
    }
}
</script>

<style lang="scss">

.single-recipe-card:hover .single-recipe-bg {
  opacity: 0.8;
}

.single-recipe-card {
  -webkit-box-shadow: 0 0 20px #dddddd;
  box-shadow: 0 0 20px #dddddd;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.single-recipe-card:hover {
  -webkit-box-shadow: 0 0 0;
  box-shadow: 0 0 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  transform: skewY(1deg);
}

.single-recipe-card h3 {
  font-size: 20px;
  line-height: 1.25em;
  font-weight: 600;
}

.single-recipe-card h3 a {
  color: #220505;
}

.single-recipe-card{
  margin-bottom: 30px;
}

.recipe-text-box {
  padding: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 300px;
}

.single-recipe-bg  {
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  background-color: #ddd;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

p.excerpt {
  line-height: 1.8;
  color: #555;
  height: 40%;
  margin-bottom: 2px;
}

p.blog-meta span {
  margin-right: 15px;
  opacity: 0.6;
  color: #051922;
  font-size: 0.85em;
}

p.blog-meta span:last-child {
  margin-right: 0;
}

p.blog-meta span i {
  margin-right: 5px;
}

.recipe-bg {
  background-image: url("https://baconmockup.com/350/350/");
}

.recipe-bg {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

a.read-more-btn {
  display: inline-block;
  margin-top: 15px;
  color: #051922;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  font-weight: 700;
}

a.read-more-btn:hover {
  color: #F28123;
}

</style>