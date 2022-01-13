<template>
  <div class="container-fluid">
    <div style="background-color: #151515; height: 130px; margin: 0; padding: 0" >
      <div class="container" style="text-align: left; padding: 50px 0">
        <h1>QUADRINHOS</h1>
      </div>
    </div>

    <div class="container">
      <div class="ui characters-list cards">
        <div  class="ui card fadeIn-animation" v-for="comic in comics" :key="comic.id">
          <div v-if="comic.images[0]" class="image">
            <img :src="comic.images[0].path+'.jpg'" />
          </div>

          <div class="content">
            <h5>{{ comic.title }}</h5>
            <p>Price: ${{ comic.prices[0].price }}</p>
          </div>
        </div>
      </div>
      <!-- <div v-else style="margin-top: 10%; padding: 32px; background-color: rgba(21,21,21,0.9)">  
        <h1 style="font-size: 4em">Personagem não possui historia em quadrinho.</h1>
        <hr>
        <h2 style="font-size: 2em; color: #fff">Tente com outro personagem.</h2>
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Info",
  data() {
    return {
      comics: [],
      mostrar: true
    };
  },

  async created() {
    const ax = await axios.get(
      `https://gateway.marvel.com/v1/public/characters/${this.$route.params.id}/comics?ts=1642017929361&apikey=d321ec37c30b6d68bb8dcb50ff901465&hash=5cb1a3d150cbd015f2c7e9428735cd3c`
    );
    
    

    console.log("ax: ", ax.data.data);
    this.comics = ax.data.data.results;

  
  

  

    // http://gateway.marvel.com/v1/public/characters/1009664/comics?ts=1642017929361&apikey=d321ec37c30b6d68bb8dcb50ff901465&hash=5cb1a3d150cbd015f2c7e9428735cd3c
  },
};
</script>

<style scoped>
h1 {
  color: #fff;
}
#app {
  margin-top: 0px !important;
}

.container-fluid {
  padding: 0;
}
.vm--overlay {
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7) !important;
  opacity: 1;
}
.characters-list.cards {
  margin-top: 2em;
  justify-content: center;
}
.characters-list.cards .image {
  position: relative;
  width: 100%;
  height: 260px;
  overflow: hidden;
}
.characters-list.cards .image img {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  width: auto;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.ui.card,
.ui.cards > .card {
  width: 178px;
}
</style>
