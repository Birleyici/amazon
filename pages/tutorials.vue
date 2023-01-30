<template>
  <div class="kahvelist">
    <div
      class="kahvelist-item"
      v-for="kahve in kahveler"
      :key="kahve._id"
    >
      <img v-bind:src="kahve.thumbnail" alt="Fotoğraf" />
      <p>{{ kahve.name }}</p>
      <p>{{ kahve.price }}TL</p>
      <button class="ana">Sepete Ekle</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NuxtTutorial',

  data() {
    return {
      kahveler: null,
    }
  },

  computed: {
    async getData() {
      const response = await fetch('http://localhost:8000/kahve')
      const finalResponse = await response.json()
      this.kahveler = finalResponse
    },
  },
  mounted() {
    this.getData
  },
})
</script>

<style>
.kahvelist {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-wrap: wrap;
}

.kahvelist-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  row-gap: 5px;
}

.kahvelist-item > * {
  font-size: 18px;
}

.ana {
  margin-top: 5px;
  border: 2px solid black;
  height: 50px;
  width: 150px;
  color: black;
  font-weight: bolder;
  opacity: 0;
  transition: hover 0.5s;
  background: #fff;
}

.kahvelist-item:hover .ana {
  opacity: 1;
  cursor: pointer;
}
</style>