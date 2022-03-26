<template>
  <footer class="footer">
    <ul class="social-icon">
      <li class="social-icon-item"><a class="social-icon-link" href="https://fr-fr.facebook.com/recettes">
          <b-icon icon="facebook" scale="1"></b-icon>
        </a></li>
      <li class="social-icon-item"><a class="social-icon-link" href="https://twitter.com//recettes">
          <b-icon icon="twitter" scale="1"></b-icon>
        </a></li>
      <li class="social-icon-item"><a class="social-icon-link" href="https://instagram.com/recettes">
          <b-icon icon="instagram" scale="1"></b-icon>
        </a></li>
    </ul>
    <ul class="menu">
      <li class="menu-item"><router-link class="menu-link"  to="/">Accueil</router-link></li>
      <li class="menu-item"><router-link class="menu-link"  to="/recettes">Recettes</router-link></li>
      <li class="menu-item"><router-link class="menu-link"  to="/mes-recettes">Mes recettes</router-link></li>
      <li class="menu-item"><router-link class="menu-link"  to="/about-us">A propos de nous</router-link></li>
      <li class="menu-item"><router-link class="menu-link"  to="/mes-recettes">Contact</router-link></li>

    </ul>
    <p>&copy;{{ getCurrentYear() }} JM | All Rights Reserved</p>
  </footer>
</template>

<script>

export default {
    name: 'MyFooter',

    methods: {
        getCurrentYear() {
            let date = new Date()
            return date.getFullYear()
        }
    }
}
</script>

<style scoped lang="scss">

.footer {
  position:absolute;
  bottom:0;
  width: 100%;
  background: #3586ff;
  min-height: 40px;
  padding: 15px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.social-icon,
.menu {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
}

.social-icon-item,
.menu-item {
  list-style: none;
}

.social-icon-link {
  font-size: 2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
}
.social-icon-link:hover {
  transform: translateY(-10px);
}

.menu-link {
  font-size: 1.2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
  text-decoration: none;
  opacity: 0.75;
  font-weight: 300;
}

.menu-link:hover {
  opacity: 1;
}

.footer p {
  color: #fff;
  margin: 15px 0 10px 0;
  font-size: 1rem;
  font-weight: 300;
}

</style>
