<template>
  <div class="container">
    <header>
      <div class="header-left">
        <div>
          <span>
            <a href="https://brauliomateus.com/vue-marvel-api/">
            <img
              class="img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1280px-Marvel_Logo.svg.png"
              alt=""
            /></a>
          </span>
        </div>

        <div class="search-character__form">
            <div class="ui action input">
              <input @change="searchHero(name)"
               v-model="name"
                placeholder="Nome Personagem"
                type="text"
                required
              />

              <span class="ui icon red button">
                <i class="search icon"></i>
              </span>
            </div>
        
        </div>
      </div>

      <div class="header-left">
        <div>
          <div class="ui sub header" style="text-align: left; color: #fff; padding-top: 15px"><b>Mostrar:</b></div>
          <select :disabled="disabled" name="skills" class="ui fluid search dropdown" v-model="selectedLimitBy" @change="loadHeroes()">
            <option v-for="item in limitBy" :key="item" :value="item">{{item}}</option>
          </select>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import api from "@/services/MarvelApi";
export default {
  data() {
    return {
      name: "",
      data: [],
      searchValue: "",
      searchResults: [],
      docs: [],
      disabled: false,
      selectedLimitBy: "10",
      limitBy: ['10','25','50','100'] 
    };
  },
  methods: {

    async searchHero(nameStart) {
      const response = await api(
        "characters",
        `nameStartsWith=${nameStart}&limit=80`
      ).catch((err) => {
        this.searchResults = err;
      });
      const { results } = response.data.data;
      if (!results) {
        return (this.searchResults = results);
      }
      this.$store.commit("UPDATE_SEARCH_HEROES", {
        heroes: results,
      });
      return (this.searchResults = results);
    },

    async loadHeroes(offset = 0) {
        this.$store.state.listHeroes.splice(0,this.$store.state.listHeroes.length);
        const response = await api(
          "characters",
          `limit=${this.selectedLimitBy}&offset=${offset}&orderBy=name`
        );
        const { results } = response.data.data;
        const { total } = response.data.data;
        this.docs = [...this.docs, ...results];
        this.total = total;
        this.offset = offset;
        this.$store.commit("UPDATE_SEARCH_HEROES", {
          heroes: this.docs,
        });
    },

    loadMore() {
      if (this.total === this.docs.length) return;
      const offsetValue = this.offset + 10;
      this.loadHeroes(offsetValue);
    },
  },

  watch: {
  },

  created() {
    this.loadHeroes();
  },
};
</script>

<style scoped>
.button {
  cursor: pointer;
}
.img {
  width: 150px;
  height: 50px;
  padding: 5px 0
}
.header-left {
  width: 100%; 
  display: flex;
  margin: 0px auto; 
  max-width: 1440px; 
  -webkit-box-align: center; 
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.search {
  border-radius: 5px
}
</style>