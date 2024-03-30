const App = {
  data() {
    return {
      kmPerHour: 0,
      metersPerSecond: 0,
    };
  },
  methods: {
    convertToMetersPerSecond() {
      this.metersPerSecond = this.kmPerHour / 3.6;
    },
    convertToKmPerHour() {
      this.kmPerHour = this.metersPerSecond * 3.6;
    },
  },
};

Vue.createApp(App).mount("#app");
