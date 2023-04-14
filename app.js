const vm = Vue.createApp({
  data() {
    return {
      firstName: "Beto",
      middleName: "",
      lastName: "Groo",
      url: "https://google.com",
      raw: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20,
      lastNameChanges: 0,
    };
  },
  methods: {
    increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      this.lastNameChanges++;
      // console.log(`${msg} ${this.lastNameChanges} times`);
      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
  },
  computed: {
    fullName() {
      console.log("fullName computed property was call!");
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 20;
      }, 3000);
      console.log(`new: ${newVal} - - old: ${oldVal}`);
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
