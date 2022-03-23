<template>
  <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
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
  position: relative;
  width: 100%;
  background: #3586ff;
  min-height: 40px;
  padding: 15px 30px;
  margin-top: 50px;
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

.wave {
  position: absolute;
  top: -40px;
  left: 0;
  width: 100%;
  height: 40px;
  background: url("https://i.ibb.co/wQZVxxk/wave.png");
  background-size: 1000px 100px;
}

.wave#wave1 {
  z-index: 1000;
  opacity: 1;
  bottom: 0;
  animation: animateWaves 4s linear infinite;
}

.wave#wave2 {
  z-index: 999;
  opacity: 0.5;
  bottom: 10px;
  animation: animate 4s linear infinite !important;
}

.wave#wave3 {
  z-index: 1000;
  opacity: 0.2;
  bottom: 15px;
  animation: animateWaves 3s linear infinite;
}

.wave#wave4 {
  z-index: 999;
  opacity: 0.7;
  bottom: 20px;
  animation: animate 3s linear infinite;
}

@keyframes animateWaves {
  0% {
    background-position-x: 1000px;
  }
  100% {
    background-positon-x: 0px;
  }
}

@keyframes animate {
  0% {
    background-position-x: -1000px;
  }
  100% {
    background-positon-x: 0px;
  }
}

</style>
