<template>
	<div class="top-header-area" id="sticker">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-sm-12 text-center">
					<div class="main-menu-wrap">
						<!-- logo -->
						<div class="site-logo">
							<a href="#">
                                Logo
							</a>
						</div>
						<!-- logo -->

						<!-- menu start -->
						<nav class="main-menu">
              
							<ul>
                
								<li>
                  <router-link to="/">Accueil</router-link>
                </li>
                <li class="">
                  <router-link to="/recettes">Recettes</router-link>
                </li>
                <li>
                  <router-link to="/mes-recettes">Mes recettes</router-link>
                </li>
								<li>
                  <router-link to="/about-us">A propos de nous</router-link>
                </li>
								<li>
                  <router-link to="/mes-recettes">Contact</router-link>
                </li>
								<li>
										<a class="nav-link" v-if="currentUser"  @click.prevent="logOut"> Deconnexion </a>
                    <span v-if="!currentUser"><router-link to="/login">Connexion </router-link> <span class="text-white">ou</span> <router-link to="/inscription">Inscription </router-link></span>
								</li>
							</ul>
						</nav>
						<a class="mobile-show search-bar-icon" href="#"><i class="fas fa-search"></i></a>
						<div class="mobile-menu"></div>
						<!-- menu end -->
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>

export default {
    name: "MyHeader",

    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      },
    },

    methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
}
</script>

<style lang="scss">

ul.navbar-nav li.nav-item a.nav-link, ul.navbar-nav li.nav-item.active a.nav-link {
  color: #051922;
}

.top-header-area {
  position: absolute;
  z-index: 999;
  width: 100%;
  padding: 25px 0;
}

.top-header-area.white ul.navbar-nav li.nav-item a.nav-link, .top-header-area.white ul.navbar-nav li.nav-item.active a.nav-link {
  color: #fff;
}

ul.navbar-nav li.nav-item a.nav-link, ul.navbar-nav li.nav-item.active a.nav-link {
  color: #fff;
  font-weight: 700;
  margin-right: 14px;
}

a.navbar-brand img {
  max-width: 150px;
}

nav.main-menu ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav.main-menu ul li {
  display: inline-block;
}

nav.main-menu ul li a {
  color: #fff;
  font-weight: 700;
  display: block;
  padding: 15px;
}

nav.main-menu ul > li {
  position: relative;
}

nav.main-menu ul ul.sub-menu {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.377);
  width: 110px;
  padding: 5px 0;
  margin: 0;
  left: 0;
  top: 50px;
  border-radius: 3px;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  opacity: 0;
  visibility: hidden;
  -webkit-box-shadow: 0 0 20px #555555;
  box-shadow: 0 0 20px #555555;
}

nav.main-menu ul ul.sub-menu li {
  display: block;
  text-align: left;
}

nav.main-menu ul ul.sub-menu li a {
  color: #555;
  font-weight: 600;
  padding: 7px 10px;
  font-size: 13px;
}

nav.main-menu ul > li:hover ul {
  opacity: 1;
  visibility: visible;
}

nav.main-menu ul li:last-child a {
  display: inline-block;
}

nav.main-menu > ul li:last-child {
  float: right;
}

.site-logo {
  float: left;
  max-width: 150px;
}

ul.sub-menu li:last-child {
  float: none !important;
}

.mean-container .mean-bar {
  background-color: transparent;
  position: absolute;
  right: 0;
  top: 15px;
}

.mean-bar a.meanmenu-reveal {
  background-color: #F28123;
}

.main-menu-wrap {
  position: relative;
}

.mean-container a.meanmenu-reveal {
  color: #051922;
}

.mean-container a.meanmenu-reveal span {
  background-color: #051922;
}

.mean-container .mean-nav ul li a {
  padding: 0.5em 5%;
}

.mean-container .mean-nav ul li li a {
  padding: 0.5em 10%;
}

.mean-container .mean-nav ul li a.mean-expand {
  font-size: 16px;
  height: 10px;
  line-height: 10px;
  width: 15px;
}

.mean-container a.meanmenu-reveal {
  padding: 8px 8px 6px;
}

nav.mean-nav > ul > li:first-child > a {
  border-top: none;
}

.header-icons a {
  color: #fff;
  display: inline-block;
  padding: 10px;
}

.site-logo {
  padding: 6px 0;
}

.top-header-area.sepherate-header ul li > a, .top-header-area.sepherate-header .header-icons a {
  color: #051922;
}

nav.main-menu ul ul.sub-menu li {
  display: block;
}

nav.main-menu ul ul.sub-menu li a {
  color: #555;
  padding: 8px;
  font-size: 13px;
  font-weight: 600;
}

nav.main-menu .router-link-exact-active  {
  color: #F28123;
}

nav.main-menu li:hover > a {
  color: #F28123;
}

nav.main-menu li a {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.top-header-area .header-icons a {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.top-header-area .header-icons a:hover {
  color: #F28123;
}

.sticky-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999 !important;
}

.sticky-wrapper.is-sticky .top-header-area {
  background-color: #051922;
  padding: 15px 0;
}

.top-header-area {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

ul.navbar-nav {
  margin: 0 auto;
}

.search-area {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5555;
  background-color: #051922;
  width: 100%;
  height: 100%;
  text-align: center;
}

span.close-btn {
  position: absolute;
  right: 0%;
  color: #fff;
  top: 5%;
  cursor: pointer;
}

.search-area {
  height: 100%;
}

.search-area div {
  height: 100%;
}

.search-bar {
  height: 100%;
  display: table;
  width: 100%;
}

a.mobile-show {
  display: none;
}

.search-area .search-bar div.search-bar-tablecell {
  display: table-cell;
  vertical-align: middle;
  height: auto;
}

.search-bar-tablecell input {
  border: none;
  padding: 15px;
  width: 60%;
  background-color: transparent;
  border-bottom: 1px solid #F28123;
  display: block;
  margin: 0 auto;
  text-align: center;
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 40px;
  color: #fff;
}

.search-bar-tablecell button[type=submit] {
  border: none;
  background-color: #F28123;
  padding: 15px 30px;
  cursor: pointer;
  display: inline-block;
  border-radius: 50px;
  font-weight: 700;
}

.search-bar-tablecell input::-webkit-input-placeholder {
  color: #fff;
}

.search-bar-tablecell input:-ms-input-placeholder {
  color: #fff;
}

.search-bar-tablecell input::-ms-input-placeholder {
  color: #fff;
}

.search-bar-tablecell input::placeholder {
  color: #fff;
}

.search-bar-tablecell button[type=submit] i {
  margin-left: 5px;
}

.search-area {
  visibility: hidden;
  opacity: 0;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.search-area.search-active {
  visibility: visible;
  opacity: 1;
  z-index: 999;
}

.search-bar-tablecell h3 {
  color: #fff;
  margin-bottom: 30px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 7px;
}

</style>
