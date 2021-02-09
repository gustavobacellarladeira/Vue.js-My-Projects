<template><h1>this is the logout</h1></template>

<script>
export default {
  created() {
    this.$store.dispatch("logout");
    this.$router.push({ name: "Home" });
  },
};
</script>


