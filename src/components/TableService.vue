<template>
  <h2 class="is-size-2 has-text-centered m-5">
    Vispārējās apkopes un remontdarbi
  </h2>

  <div class="columns">
    <div class="column">
      <table
        class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
      >
        <tbody>
          <tr v-for="item in selectionItems1" v-bind:key="item">
            <td>{{ item.name }}</td>
            <td>
              <strong>{{ item.price }}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="column">
              <table
          class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
        >
          <tbody>
            <tr
              v-for="item in selectionItems2"
              v-bind:key="item"
            >
              <td>{{ item.name }}</td>
              <td>
                <strong>{{ item.price }}</strong>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableService",
  props: {
    selectionItems1: Array,
    selectionItems2: Array,
  },
};
</script>