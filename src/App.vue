<template>
  <div id="app">
    <transition mode="out-in">
          <router-view></router-view>
       </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  data() {
      return {
          docs: [],
          test:'' ,
          total: 0,
          orderBy: '-modified'
      }
  },
  methods: {
  },
  created() {

  }

}
</script>

<style>
body {
  background-color: rgb(241, 241, 241);
  height: 100vh;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('https://i.pinimg.com/564x/42/0a/00/420a00b20a175d742e563b82274d8b07.jpg');
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
