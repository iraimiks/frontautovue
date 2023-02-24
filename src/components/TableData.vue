<template>
  <h2 class="is-size-2 has-text-centered m-5">
    Chiptuninga cenrādis
  </h2>
  <div class="columns">
    <div class="column">
      <h2 class="title is-3">Izvēlieties galveno pakalpojumu</h2>
      <div class="select">
        <select v-model="selected">
          <option v-for="item in selectionItems" :value="item">
            {{ item.name }} {{ item.price + ",00" }}
          </option>
        </select>
      </div>
    </div>
    <div class="column">
      <h2 class="title is-3">Izvēlieties papildu opcijas</h2>
      <div
        class="dropdown"
        style="width: 100%"
        v-bind:class="{ 'is-active': showDropDown }"
      >
        <div class="dropdown-trigger" style="width: 100%">
          <button
            class="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            @click="dropMenu(showDropDown)"
            style="display: flex; width: 100%; justify-content: space-between"
          >
            <div style="display: block; max-width: 100%"></div>
            <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content drop-box-style">
            <div class="dropdown-item" v-for="item in items" v-bind:key="item">
              <div class="columns is-mobile">
                <div class="column">
                  {{ item.name }} {{ item.price + ",00" }}
                </div>
                <div class="column is-one-fifth">
                  <input
                    type="checkbox"
                    class="large"
                    v-bind:id="item.id"
                    :value="item"
                    v-model="checked"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="box">
    <ul>
      <h2 class="title is-3">Galvenais pakalpojums</h2>
      <li v-if="!!selected.name">
        {{ selected.name }} € {{ selected.price }},00
      </li>
      <li v-else>Nav izvēlēts</li>
      <br />
      <h2 class="title is-3">Papildus opcijas</h2>
      <li v-for="item in listItems" v-bind:key="item">
        {{ item.name }} € {{ item.price }},00
      </li>
      <li v-if="listItems.length === 0">Nav izvēlēts</li>
      <br />
      <li><strong>Kopā:</strong> € {{ sum + ",00" }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "TableData",
  data() {
    return {
      showDropDown: false,
      checked: [],
      selected: [],
    };
  },
  props: {
    items: Array,
    selectionItems: Array,
  },
  methods: {
    dropMenu(check) {
      this.showDropDown = !check;
    },
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
.drop-box-style {

  max-width: 100%;
  max-height: 340px;
  overflow-y: auto;
  border: thin solid;
}

</style>