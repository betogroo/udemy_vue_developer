const vm = Vue.createApp({
  data() {
    return {
      firstName: "Beto",
      lastName: "Groo",
      url: "https://google.com",
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
}).mount("#app");

/* setTimeout(() => {
  vm.lastName = "Garcia";
}, 2000); */
/* Vue.createApp({
  data() {
    return {
      firstName: "Beto",
      lastName: "Groo",
    };
  },
}).mount("#app1");
 */
