<template>
	<div class="breadcrumb-section breadcrumb-bg">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 offset-lg-2 text-center">
					<div class="breadcrumb-text">
						<p>Enjoy our best recipes</p>
						<h1> {{ breadCrumbProps }} </h1>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
    name: 'BreadCrumb',

        props: {
        breadCrumbProps: String,
    }
}
</script>

<style lang="scss">

.breadcrumb-bg {
    background-image: url(../assets/images/bc-bg.jpg);
}

.breadcrumb-text p {
  color: #F28123;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 7px;
}

.breadcrumb-text h1 {
  font-size: 50px;
  font-weight: 900;
  color: #fff;
  margin: 0;
  margin-top: 20px;
}

.breadcrumb-section {
  padding: 100px 0;
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: 1;
  background-attachment: cover;
  margin-bottom: 5rem;
}

.breadcrumb-section:after {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  content: "";
  background-color: #07212e;
  z-index: -1;
  opacity: 0.8;
}

</style>
