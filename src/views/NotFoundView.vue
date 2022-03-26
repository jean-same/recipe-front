<template>
    <section>
        <BreadCrumb breadCrumbProps="Page non trouvée"/>
        <div class="full-height-section error-section">
			<div class="full-height-tablecell">
				<div class="container">
					<div class="row">
						<div class="col-lg-8 offset-lg-2 text-center">
							<div class="error-text">
								<b-icon icon="emoji-frown" font-scale="7.5" aria-label="Help"></b-icon>
								<h1>Oops! Page non trouvée.</h1>
								<p>La page que vous avez demandé n’existe pas .</p>
                                <router-link class="back-home" to="/">Accueil</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

    </section>
</template>

<script>

import BreadCrumb from '../components/BreadCrumb.vue'

  export default {
    name: 'NotFoundView',

    components: {
        BreadCrumb
    },

  }

</script>

<style scoped lang="scss">

.error-text i {
  font-size: 90px;
  margin-bottom: 30px;
}

.error-text h1 {
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 10px;
}

.error-text p {
  font-size: 15px;
  margin-bottom: 30px;
}

.full-height-section {
  height: 100%;
  display: table;
  width: 100%;
}

.full-height-tablecell {
  display: table-cell;
  vertical-align: middle;
  width: 100%;
}

a.boxed-btn, .back-home {
    font-family: 'Poppins', sans-serif;
    display: inline-block;
    background-color: #F28123;
    color: #fff;
    padding: 10px 20px;
    border-radius: 50px;
}


</style>
