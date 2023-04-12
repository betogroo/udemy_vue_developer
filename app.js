const vm = Vue.createApp({
  data() {
    return {
      firstName: "Beto",
      lastName: "Groo",
      url: "https://google.com",
      raw: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20,
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    increment() {
      this.age++;
    },
    updateLastName(event) {
      this.lastName = event.target.value;
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
