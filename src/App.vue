<template>
  <nav class="navbar is-black" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <div class="level-item">
          <span class="is-size-3"><strong>Auto<span style="color: #3e8ed0">Boost</span></strong></span>
        </div>
      </a>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu"
        @click="mobilMenu(showMobileMenu)">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar-menu" v-bind:class="{ 'is-active': showMobileMenu }" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable ">
          <a class="navbar-link is-hidden-mobile"> Transports </a>
          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/auto">AUTO</router-link>
            <router-link class="navbar-item" to="/spec">TRAKTORI UN SPECTRANSPORTS</router-link>
            <router-link class="navbar-item" to="/moto">MOTO</router-link>
          </div>
        </div>
        <div class="navbar-item">
          <div class="buttons">
            <router-link class="button is-info" to="/oilchange">
              <strong>Atomātisko kārbu eļļas maiņa</strong>
            </router-link>
            <router-link class="button is-info" to="/cooling">
              <strong>Kondicionieru uzpilde</strong>
            </router-link>
            <router-link class="button is-info" to="/price">
              <strong>Cenu kalkulātors</strong>
            </router-link>
            <router-link class="button is-light" to="/works">
              Paveiktie darbi
            </router-link>
            <a class="button is-info" href="https://www.facebook.com/autboost.lv/" target="_blank">
              <i class="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
  <footer class="footer">
    <div class="container is-fluid">
      <div class="content is-normal">
        <div class="columns">
          <div class="column has-background-info-light">
            <div class="columns is-mobile">
              <div class="column">
                <i class="fas fa-mobile-alt"></i>
              </div>
              <div class="column is-11"><a href="tel:+37127015660">+371 27015660</a></div>
            </div>
          </div>
          <div class="column has-background-link-light">
            <div class="columns is-mobile">
              <div class="column is-1">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="column"><a href="mailto:autoboostlv@gmail.com">autoboostlv@gmail.com</a></div>
            </div>
          </div>
          <div class="column has-background-info-light">
            <div class="columns is-mobile">
              <div class="column is-1 ">
                <i class="far fa-clock"></i>
              </div>
              <div class="column">Pirmd. - Sest. 08.00 - 18.00</div>
            </div>
          </div>
          <div class="column has-background-link-light">
            <div class="columns is-mobile">
              <div class="column is-1">
                <i class="fas fa-map"></i>
              </div>
              <div class="column"><a href="https://goo.gl/maps/U4BEsEMnbiAciRzq7" target="_blank">Liepājas iela 5,
                  <strong>Ludza</strong></a></div>
            </div>
            <div class="columns is-mobile">
              <div class="column is-1">
                <i class="fas fa-map"></i>
              </div>
              <div class="column"><a href="https://maps.app.goo.gl/AoBPZwPzgWmhiRQ28" target="_blank">Varoņu iela 39,
                  <strong>Rēzekne</strong></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div class="container is-fluid has-background-black">
      <div class="is-flex is-justify-content-center p-5 ">
           <a href="https://cubelligent.com">cubelligent.com</a>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      showMobileMenu: false,
    }
  },
  methods: {
    mobilMenu(check) {
      this.showMobileMenu = !check;
    }
  },
  mounted() {
    document.title = 'AutoBoost'
  },

}
</script>
<style lang="scss">
$dropdown-menu-min-width: 38vw;


@import "../node_modules/bulma";
</style>
