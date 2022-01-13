<template>
  <div class="page">
    <buscar-comp></buscar-comp>
    <Lista></Lista>
  </div>
</template>

<script>
import BuscarComp from '@/components/BuscarComp.vue'
import Lista from '@/components/Lista.vue'
export default {
  components: {
    BuscarComp,
    Lista
  },
  data() {
      return {
         nome: this.nomeBuscar
      }
  }
}
</script>
