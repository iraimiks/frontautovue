<template>
  <div class="container" style="background-color: #f6f6ff">
    <section class="section">
      <div class="columns">
        <div class="column  is-one-third ">
          <div class="box">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  Diagnostika €
                  <strong>30,00</strong>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <TableData :items="itemsBig" :selectionItems="items" />
    </section>
  </div>
</template>

<script>
import TableData from "./TableData.vue";
export default {
  name: "ShowItems",
  components: {
    TableData,
  },
  data() {
    return {
      items: [
        { id: 1, name: "No Tuning (for Options only)", price: 200.0 },
        { id: 2, name: "Back to Stock (original file)", price: 200.0 },
        { id: 3, name: "Fle quality check service", price: 200.0 },
        { id: 4, name: "IMMO off (where possible)", price: 250.0 },
        { id: 5, name: "ECU/TCU Cloning service (software)", price: 250.0 },
        { id: 6, name: "MD1/MG1 ECU's Stage 1 Tuning", price: 650.0 },
        { id: 7, name: "Stage 1 Tuning (Cars)", price: 300.0 },
        { id: 8, name: "Stage 2 Tuning (Cars)", price: 350.0 },
        { id: 9, name: "Stage 3 Tuning (Cars)", price: 500.0 },
        { id: 10, name: "Eco Tuning (Cars)", price: 300.0 },
        { id: 11, name: "Gearbox (ZF/DSG) Tuning", price: 300.0 },
        { id: 12, name: "Stage 1 (Trucks)", price: 600.0 },
        {
          id: 13,
          name: "Trucks/Heavy Duty & Constructions Maschines Delete Service",
          price: 900.0,
        },
        {
          id: 14,
          name: "Trucks/Heavy Duty & Constructions Tuning  Delete Service",
          price: 1500.0,
        },
        { id: 15, name: "Stage 1 (Trucks/Heavy Duty)", price: 900.0 },
        { id: 16, name: "Volvo TRW EMS ECU'S Deletes service", price: 2500.0 },
      ],
      itemsBig: [
        { id: 17, name: "DPF delete", price: 0.0 },
        { id: 18, name: "EGR delete", price: 0.0 },
        { id: 19, name: "Swirl Flaps delete", price: 0.0 },
        { id: 20, name: "DTC fault code delete", price: 0.0 },
        { id: 21, name: "Lambda/O2 delete", price: 0.0 },
        { id: 22, name: "MAF delete", price: 0.0 },
        { id: 23, name: "TVA delete", price: 0.0 },
        { id: 24, name: "NoX Delete (unplug and send code)", price: 0.0 },
        { id: 25, name: "ONLY_HD_SCR_off", price: 0.0 },
        { id: 26, name: "OPF (Petrol Particulare filter)", price: 0.0 },
        { id: 27, name: "Denso VEA (VOLVO) DPF_CAT_off", price: 50.0 },
        { id: 28, name: "Adblue / SCR delete", price: 100.0 },
        { id: 29, name: "Start/Stop deactivation", price: 100.0 },
        { id: 30, name: "Speed Limiter disable", price: 100.0 },
        { id: 31, name: "Launch Control activation", price: 100.0 },
        { id: 32, name: "RMP Limiter increase", price: 100.0 },
        { id: 33, name: "BMW Sport display calibration", price: 100.0 },
        { id: 34, name: "Hot Start fix", price: 100.0 },
        { id: 35, name: "Pop&Bangs/Popcorn Limiter", price: 150.0 },
      ],
    };
  },
};
</script>
<style>
</style>
