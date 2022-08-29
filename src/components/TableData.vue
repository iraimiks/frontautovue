<template>
  <h2 class="title is-2">Izvēlieties galveno pakalpojumu</h2>
  <div class="select is-medium">
    <select v-model="selected">
      <option v-for="item in selectionItems" :value="item">
        {{ item.name }} {{ item.price + ",00" }}
      </option>
    </select>
  </div>
  <h2 class="title is-3">Izvēlieties papildu opcijas</h2>
  <table class="table">
    <thead>
      <tr>
        <th>Pakalpojums</th>
        <th>Cena (Euro)</th>
        <th>Atlasīt</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" v-bind:key="item">
        <td>
          {{ item.name }}
        </td>
        <td>
          {{ item.price + ",00" }}
        </td>
        <td>
          <input
            type="checkbox"
            class="large"
            v-bind:id="item.id"
            :value="item"
            v-model="checked"
          />
        </td>
      </tr>
    </tbody>
  </table>
  <div class="box">
    <ul>
      <h2 class="title is-3">Galvenais pakalpojums</h2>
      <li v-if="!!selected.name">{{ selected.name }} € {{ selected.price }},00</li>
      <li v-else>Nav izvēlēts</li>
      <br>
      <h2 class="title is-3">Papildus opcijas</h2>
      <li v-for="item in listItems" v-bind:key="item">
        {{ item.name }} € {{ item.price }},00
      </li>
      <li v-if="listItems.length === 0">Nav izvēlēts</li>
      <br>
      <li><strong>Kopā:</strong> € {{ sum + ",00" }}</li>
    </ul>
    
  </div>
</template>
<script>
export default {
  name: "TableData",
  data() {
    return {
      checked: [],
      selected: [],
    };
  },
  props: {
    items: Array,
    selectionItems: Array,
  },
  computed: {
    sum() {
      let rawObject = JSON.parse(JSON.stringify(this.checked));
      let rawPriceSelected = JSON.parse(JSON.stringify(this.selected));
      let checkSelectPrice = 0;
      if (rawPriceSelected.length !== 0) {
        checkSelectPrice = rawPriceSelected.price;
      } 
      let sum = checkSelectPrice;
      for (let i = 0; i < rawObject.length; i++) {
        sum += rawObject[i].price;
      }
      return sum;
    },
    listItems() {
      var rawObject = JSON.parse(JSON.stringify(this.checked));
      return rawObject;
    },
  },
};
</script>
<style>
input.large {
  width: 40px;
  height: 30px;
}
</style>