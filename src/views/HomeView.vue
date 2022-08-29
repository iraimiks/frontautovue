<template>
  <div class="bg-img">
    <div class="container is-fullhd">
      <section class="hero is-large">
        <div class="hero-body ">
          <p class="title has-text-white-ter">Serviss jūsu transportam</p>
          <p class="subtitle has-text-white-ter">Piedāvājam dažādus servisa pakalpojumus</p>
          <br>
          <div class="is-flex">
            <div class="columns">
              <div class="column">
                <router-link class="button is-rounded" to="/auto"
                  >AUTO</router-link
                >
              </div>
              <div class="column">
                <router-link class="button is-rounded" to="/spec">
                  TRAKTORI UN SPECTRANSPORTS
                </router-link>
              </div>
              <div class="column">
                <router-link class="button is-rounded" to="/moto"
                  >MOTO</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style>
.bg-img {
  background: url("@/assets/bg-main.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
