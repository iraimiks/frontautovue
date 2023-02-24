<template>
  <div class="container" style="background-color: #f6f6ff">
    <section class="section">
      <TableService
        :selectionItems1="itemsService1"
        :selectionItems2="itemsService2"
      />
      <TableData :items="itemsBig" :selectionItems="items" />
    </section>
  </div>
</template>

<script>
import TableData from "./TableData.vue";
import TableService from "./TableService.vue";
export default {
  name: "ShowItems",
  components: {
    TableData,
    TableService,
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
      itemsService1: [
        { id: 0, name: "Diagnostika", price: "30 EUR"},
        { id: 1, name: "Spuldžu nomaiņa", price: "3.00 - 10.00 EUR" },
        { id: 2, name: "Lukturu regulēšana", price: "5.00 - 20.00 EUR" },
        { id: 3, name: "Startera maiņa", price: "15.00 - 50.00 EUR" },
        { id: 4, name: "Ģeneratora maiņa", price: "15.00 - 50.00 EUR" },
        {
          id: 5,
          name: "Turbīnas noņemšana/uzstādišana",
          price: "50.00 - 80.00 EUR",
        },
        {
          id: 6,
          name: "Motoreļļas un eļļas filtra nomaiņa (ar pacēlāja palīdzību)",
          price: "15.00 EUR",
        },
        {
          id: 7,
          name: "Filtru nomaiņa(gaisa, salona, degvielas)",
          price: "4.00 - 15.00 EUR",
        },
        {
          id: 8,
          name: "Sajūga komplekta maiņa(ar ātrumkārbas noņemšanu/uzstādīšanu)",
          price: "85.00 - 200.00 EUR",
        },
        { id: 9, name: "Tilta reduktora maiņa", price: "30.00 - 80.00 EUR" },
        { id: 10, name: "Kulises maiņa", price: "15.00 - 40.00 EUR" },
      ],
      itemsService2: [
        {
          id: 11,
          name: "Automātiskās ātrumkārbas noņemšana/uzstādīšana",
          price: "100.00 - 180.00 EUR",
        },
        {
          id: 12,
          name: "Mehāniskās ātrumkārbas noņemšana/uzstādīšana",
          price: "85.00 - 180.00 EUR",
        },
        { id: 13, name: "Termostata nomaiņa", price: "10.00 - 100.00 EUR" },
        { id: 14, name: "Ūdenssūkņa nomaiņa", price: "25.00 - 85.00 EUR" },
        {
          id: 15,
          name: "Degvielas sūkņa nomaiņa",
          price: "25.00 - 100.00 EUR",
        },
        { id: 16, name: "Radiatora nomaiņa", price: "15.00 - 50.00 EUR" },
        { id: 17, name: "Dzinēja nomaiņa", price: "300.00 - 800.00 EUR" },
        { id: 18, name: "Dzinēja kapitāls remonts", price: "no 500.00 EUR" },
        {
          id: 19,
          name: "Dzinēja spilvena nomaiņa",
          price: "15.00 - 50.00 EUR",
        },
        {
          id: 20,
          name: "Dzinēja zobsiksnas nomaiņa",
          price: "75.00 - 150.00 EUR",
        },
        { id: 21, name: "Pilnā ritošās daļas pārbaude", price: "10.00 EUR" },
      ],
    };
  },
};
</script>
<style>
</style>
