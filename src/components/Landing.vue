<template>
  <div class="wrapper">
    <sort-menu v-on:change-filter-type="changeFilter" />
    <div class="booking-content">
      <SingleBooking
        v-for="booking in orderedBookings"
        :key="booking._id"
        :initialBooking="booking"
      />
    </div>
  </div>
</template>

<script>
import SortMenu from "./SortMenu.vue";
import SingleBooking from "./SingleBooking.vue";
export default {
  name: "Landing",
  components: { SortMenu, SingleBooking },
  data() {
    return {
      sortField: "price",
      sortMethod: {
        alph: (a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        },
        price: (a, b) => {
          if (a.price < b.price) {
            return 1;
          }
          if (a.price > b.price) {
            return -1;
          }
          return 0;
        },
        star: (a, b) => {
          if (a.rating < b.rating) {
            return 1;
          }
          if (a.rating > b.rating) {
            return -1;
          }
          return 0;
        },
      },
      bookings: [
        {
          _id: 1,
          name: "Iberostar Grand Salome",
          location: "Costa Adeje Tenreife",
          rating: 5,
          berthing: " 2 adults 2 children & 1 infant",
          dates: "3rd July 2019 for 7 days",
          departing: "East Midlands",
          price: 1136.5,
          overview:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          img: "hotel-image-1",
        },
        {
          _id: 2,
          name: "Aguamarine Golf Hotel",
          location: "Costa Adeje Tenreife",
          rating: 4,
          berthing: " 2 adults 1 child",
          dates: "27th May 2019 for 7 days",
          departing: "Liverpool",
          price: 696.8,
          overview:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          img: "hotel-image-2",
        },
        {
          _id: 3,
          name: "Las Piramedes",
          location: "Costa Adeje Tenreife",
          rating: 3,
          berthing: " 2 adults 5 children",
          dates: "27th Oct 2019 for 7 days",
          departing: "Manchester",
          price: 499.99,
          overview:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          img: "hotel-image-3",
        },
      ],
    };
  },
  computed: {
    orderedBookings() {
      const bookingClone = this.bookings;
      return bookingClone.sort(this.sortMethod[this.sortField]);
    },
  },
  methods: {
    changeFilter(e) {
      this.sortField = e;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
}

.booking-content {
  display: flex;
  flex-direction: column;
  padding-top: 50px;
}

@media only screen and (max-width: 750px) {
  .wrapper {
    flex-direction: column;
    .booking-content {
      width: 100%;
      margin: auto 0;
      padding-top: 10px;
    }
  }
}
</style>
