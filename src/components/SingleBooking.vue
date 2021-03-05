<template>
  <div class="single-booking_wrapper">
    <div class="single-booking_row">
      <div class="image_container">
        <img :src="imgPathPNG(booking.img)" alt="" class="booking-image" />
        <div type="button" class="collapsible" @click="toggleCollapsable">
          Read {{ copy }} about this hotel
          <div class="chevron-container">
            <img class="chevron" :src="iconPathSVG('chevron-down-solid')" />
          </div>
        </div>
      </div>
      <div class="info_container">
        <div class="booking-info booking-info_title">{{ booking.name }}</div>
        <div class="booking-info booking-info_subtitle">
          {{ booking.location }}
        </div>
        <div class="rating_content">
          <div v-for="star in stars" :key="star">
            <span class="fa fa-star checked"></span>
          </div>
        </div>
        <div class="booking-info booking-info_text">{{ booking.berthing }}</div>
        <div class="booking-info booking-info_text">{{ booking.dates }}</div>
        <div class="booking-info booking-info_text">
          Departing from {{ booking.departing }}
        </div>
        <div class="booking-info_content">
          <div class="text">Book Now</div>
          <div class="price">{{ convertToPounds(booking.price)}}</div>
        </div>
      </div>
    </div>
    <div class="content" :class="{ show: copy !== 'more' }">
      <div class="content_text">Overview</div>
      <div class="content_text">
        {{ booking.overview }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleBooking",
  props: ["initialBooking"],
  data() {
    return {
      booking: this.initialBooking,
      copy: "more",
    };
  },
  computed: {
    stars() {
      return new Array(this.booking.rating);
    },
  },
  methods: {
    toggleCollapsable() {
      this.copy = this.copy === "more" ? "less" : "more";
    },
    imgPathPNG(item) {
      try {
        return require(`../assets/${item}.png`);
      } catch (e) {
        return require(`../assets/logo.png`);
      }
    },
    iconPathSVG() {
      const item =
        this.copy !== "more" ? "chevron-down-solid" : "chevron-right-solid";
      try {
        return require(`../assets/icons/${item}.svg`);
      } catch (e) {
        return require(`../assets/logo.png`);
      }
    },
    convertToPounds(number) {
      const converted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "GBP",
      }).format(number);
      return converted;
    },
  },
};
</script>
<style scoped lang="scss">
.single-booking_wrapper {
  margin-bottom: 50px;
  width: 800px;
  .single-booking_row {
    display: flex;
    .image_container {
      position: relative;
      flex: 2;
      .booking-image {
        width: 100%;
        height: 100%;
      }
      .collapsible {
        position: absolute;
        padding: 5px;
        left: 0;
        bottom: 0;
        background-color: $otb-white;
        color: $otb-navy;
        align-items: center;
        cursor: pointer;
        font-size: 15px;
        height: 25px;
        width: 250px;
        display: flex;
        padding: 5px 10px 5px 10px;
        justify-content: space-between;
        .chevron-container {
          height: 15px;
          width: 15px;
          .chevron {
            height: 100%;
          }
        }
      }
    }
    .info_container {
      display: flex;
      flex: 1;
      flex-direction: column;
      background-color: $otb-white;
      padding: 10px;
      justify-content: space-between;
      .rating_content {
        display: flex;
        color: $otb-gold;
        border-radius: 5px;
      }
      .booking-info {
        margin-bottom: 5px;
        &_title {
          font-size: 16px;
          color: $otb-navy;
        }
        &_subtitle {
          font-size: 16px;
          color: grey;
        }
        &_text {
          font-size: 14px;
          font-family: $otb-font-regs;
          padding: 5px;
          margin: 0;
          display: block;
        }
        &_content {
          color: $otb-navy;
          background-color: $otb-gold;
          border-radius: 5px;
          .text {
            padding-top: 15px;
            font-size: 12px;
            text-align: center;
            font-weight: bold;
            font-family: $otb-font-regs;
          }
          .price {
            padding-bottom: 15px;
            font-size: 35px;
            text-align: center;
            font-weight: bold;
            font-family: $otb-font-regs;
          }
        }
      }
    }
  }
  .content {
    flex: 1;
    display: none;
    overflow: hidden;
    background-color: white;
    padding: 15px;
    .content_text {
      font-family: $otb-font-regs;
      margin-bottom: 10px;
      
    }
  }
  .show {
    display: block;
  }
}
@media only screen and (max-width: 750px) {
  .single-booking_wrapper {
    width: 100%;
    .single-booking_row {
      flex-direction: column;
    }
  }
}
</style>
