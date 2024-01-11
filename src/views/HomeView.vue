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
  <div class="bg-img responsive-image mobile">
    <div class="container ">
      <section class="hero is-medium">
        <div class="hero-body">
          <div class="columns">
            <div class="column shadow-text" >
              <h3 class="is-size-4 has-text-white element-width">Mūsu komanda piedāvā bezmaksas datora diagnostikas pakalpojumu, lai
                nodrošinātu, ka jūsu auto vienmēr ir drošībā. <strong class="has-text-white">Pieraksties tagat!</strong>
              </h3>
              <br>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <a href="https://wa.me/+37127015660" class="button is-large is-info is-responsive">PIETEIKTIES BEZMAKSAS DIAGNOSTIKAI</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <HomeViewFirst />
</template>


<style lang="scss">
@mixin breakpoint($point) {
  @if $point == small {
    @media (max-width: 600px) { @content; }
  }
  @else if $point == medium {
    @media (max-width: 900px) { @content; }
  }
  @else if $point == large {
    @media (max-width: 1200px) { @content; }
  }
}
.bg-img {
  background: url("@/assets/front_diagnostik.jpg");
  background-position: center center;
  background-repeat: no-repeat;

  background-size: cover;
  @include breakpoint(small) {
    background: url("@/assets/front_diagnostik600.jpg");
  }
  @include breakpoint(medium) {
    background: url("@/assets/front_diagnostik900.jpg");
  }
}

.element-width {
  width: 60%;
  @include breakpoint(small) {
    width: 100%;
  }
  @include breakpoint(medium) {
    width: 100%;
  }
}

.responsive-image {
  max-width: 100%;
  height: auto;
  display: block;
  /* Removes extra space below inline images */
  margin: 0 auto;
  /* Centers the image */
}

</style>
