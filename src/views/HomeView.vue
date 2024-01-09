<script>
import HomeViewFirst from './HomeViewFirst.vue';

export default {
  name: "HomeView",
  components: {
    HomeViewFirst,
  }
};
</script>

<template>
  <div class="bg-img responsive-image">
    <div class="container is-fullhd">
      <section class="hero is-large">
        <div class="hero-body">
          <div class="columns">
            <div class="column is-6 shadow-text">
              <h3 class="is-size-3 has-text-white">Mūsu komanda piedāvā bezmaksas datora diagnostikas pakalpojumu, lai
                nodrošinātu, ka jūsu auto vienmēr ir drošībā. <strong class="has-text-white">Pieraksties tagat!</strong>
              </h3>
              <br>
            </div>
          </div>
          <div class="columns">
            <div class="column is-6">
              <a href="https://wa.me/+37127015660" class="button is-large is-fullwidth is-info is-responsive">PIETEIKTIES BEZMAKSAS DIAGNOSTIKAI</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <HomeViewFirst />
</template>


<style>
.bg-img {
  background: url("@/assets/front_diagnostik.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.responsive-image {
  max-width: 100%;
  height: auto;
  display: block;
  /* Removes extra space below inline images */
  margin: 0 auto;
  /* Centers the image */
}

.shadow-text {
  background-color: rgba(75, 145, 182, 0.15);
  /* Red color with 50% transparency */
}</style>
