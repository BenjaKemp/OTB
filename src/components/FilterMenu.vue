<template>
  <div class="filter-menu_wrapper">
    <div
      v-for="filter in filters"
      :key="filter.ref"
      class="filter_item"
      :class="{ active: active === filter.ref }"
      @click="setFilter(filter.ref)"
    >
    <div>
      {{ filter.text }}
      <strong>
        {{ filter.name }}
      </strong>
    </div>
      <div class="icon-container">
        <img class="icon" :src="iconPathSVG(filter.icon)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterMenu",
  data() {
    return {
      filters: [
        { name: "Alphabetically", ref: "alph", text: "Sort", icon:"sort-alpha-down-solid" },
        { name: "Price", ref: "price", text: "Sort by",icon: "pound-sign-solid" },
        { name: "Star Rating", ref: "star", text: "Sort by",icon:"star-solid" },
      ],
      active: "price",
    };
  },
  methods: {
    setFilter(ref) {
      this.active = ref;
      this.$emit("change-filter-type", ref);
    },
    iconPathSVG(item) {

      try {
        return require(`../assets/icons/${item}.svg`);
      } catch (e) {
        return require(`../assets/logo.png`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-menu_wrapper {
  padding-top: 50px;

}
.filter_item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: black solid 1px;
  width: 250px;
  background-color: white;
  color: $otb-navy;
  cursor: pointer;
  &.active {
    background-color: $otb-navy;
    color: $otb-white;
  }
  .icon-container {
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    border: 1px black solid;
    padding: 5px;
    border-radius: 50%;
    background-color: $otb-grey;
    .icon {
      height: 100%;
    }
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
