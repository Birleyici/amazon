<!-- Please remove this file from your project -->
<template>
  <div class="kahvelist">
    <div class="kahvelist-item" v-for="kahve in kahveler" :key="kahve._id">
      <img v-bind:src="kahve.thumbnail" alt="Kahve Fotoğrafı" />
      <p>{{ kahve.name }}</p>
      <p>{{ kahve.price }}TL</p>
      <button class="ana">Sepete Ekle</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',

  data() {
    return {
      kahveler: {},
    }
  },
  created() {
    this.getUrunById()
  },
  methods: {
    async getUrunById() {
      const response = await fetch(
        `http://localhost:8000/shopPage}`
      )
      const finalResponse = await response.json()
      this.kahveler = finalResponse
    },
  },
}
</script>

<style scoped></style>
