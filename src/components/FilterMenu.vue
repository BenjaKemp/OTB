<template>
  <div class="filter-menu_wrapper">
    <div
      v-for="filter in filters"
      :key="filter.ref"
      class="filter_item"
      :class="{ active: active === filter.ref }"
      @click="setFilter(filter.ref)"
    >
      {{ filter.text }}
      <strong>
        {{ filter.name }}
      </strong>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterMenu",
  data() {
    return {
      filters: [
        { name: "Alphabetically", ref: "alph", text: "Sort" },
        { name: "Price", ref: "price", text: "Sort by" },
        { name: "Star Rating", ref: "star", text: "Sort by" },
      ],
      active: "price",
    };
  },
  methods: {
    setFilter(ref) {
      this.active = ref;
      this.$emit("change-filter-type", ref);
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-menu_wrapper {
  padding-top: 50px;
}
.filter_item {
  padding: 10px;
  border: black solid 1px;
  width: 250px;
  background-color: white;
  color: $otb-navy;
  cursor: pointer;
  &.active {
    background-color: $otb-navy;
    color: white;
  }
}
@media only screen and (max-width: 750px) {
  .filter-menu_wrapper {
    display: flex;
    padding-top: 0;
    justify-content: space-evenly;
    position: sticky;
  }
}
</style>
