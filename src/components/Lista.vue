<template >
  <div class="container">
    <div v-if="data" class="ui characters-list cards">

      <div
        v-for="character in data.listHeroes"
        :key="character.id"
        class="ui card fadeIn-animation"
        @click.prevent="show(character)"
      >
        <div class="image">
          <img :src="character.thumbnail.path + '.jpg'" />
        </div>

        <div class="content">
          <div class="header">{{ character.name }}</div>
        </div>
        <div class="extra content">
          <span class="right floated">
            <a target="_blank" :href="character.url">
              <button
                @click.prevent="show(character)"
                class="ui icon red tiny button"
              >
                Mais Informações
              </button>
            </a>
          </span>
        </div>
      </div>
    </div>

    <modal
      name="my-first-modal"
      draggable=".window-header"
      :height="560"
      :width="500"
      :adaptive="true"
      styles="overflow: inherit; padding: 0px 0"
    >
      <img
        :src="modalImg"  alt="" style="border-radius: 5px; width: 100%; max-height: 300px; object-fit: cover; position: relative;"
      />
      <span style="position: absolute; top: 0; left: 0; color: red">{{
        modalId
      }}</span>
      <div style="padding-top: 3%; margin: 15px">
        <h3 style="color: #202124">{{ modalTitle }}</h3>

        <div style="height: 75px">
          <span v-if="modalDescription" style="float: left; font-family: 'Nunito', sans-serif">
            {{modalDescription}}
          </span>
          <span v-else style="float: left; font-family: 'Nunito', sans-serif">
            Personagem não possui descrição.
          </span>
        </div>
      </div>

      <hr />

      <div>
        <div style="text-align: center; padding: 0 15px; margin: 15px 32px">
          <button @click="routerPush()" class="button-price" style="">
            VER QUADRINHOS
          </button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: this.$store.state,
      totalPages: 0,
      limit: 3,
      offset: 0,
      char: [],
      modalTitle: "",
      modalDescription: "",
      modalImg: "",
      modalId: 0,
      modalComics: [],
    };
  },
  methods: {
    routerPush() {
      this.$router.push({
        name: "Info",
        params: { id: this.modalId, img: this.modalImg },
      });
    },

    numberPages() {
      const n = Math.round(this.totalPages / this.limit);
      this.totalPages = n;
    },
    clickPages(t) {
      return (this.offset = (t - 1) * this.limit);
    },
    show(char) {
      if (this.char.length) {
        this.char = [];
      }
      this.modalTitle = char.name;
      this.modalDescription = char.description;
      this.modalImg = char.thumbnail.path + ".jpg";
      this.modalId = char.id;
      this.modalComics = char.comics;
      this.$modal.show("my-first-modal");
    },
  },
};
</script>

<style>
.vm--overlay {
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7) !important;
  /* z-index: 999; */
  opacity: 1;
}
.characters-list.cards {
  margin-top: 2em;
  justify-content: center;
}
.characters-list.cards .image {
  position: relative;
  width: 100%;
  height: 246px;
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
  width: 364px;
  cursor: pointer;
}

.button-price {
  padding: 15px 32px;
  background-color: red;
  color: #fff;
  font-weight: bold;
  border: none;
}
</style>