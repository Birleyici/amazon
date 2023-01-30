<template>
  <div class="productlist">
    <div
      class="productlist-item"
      v-for="product in products"
      :key="product._id"
      @click="$router.push(`/shopPage`)"
    >
      <img v-bind:src="product.thumbnail" style="width: 200px" alt="product Fotoğrafı" />
      <p>{{ product.name }}</p>
      <p>{{ product.price }}TL</p>
      <button class="ana" @click.stop="addToCart(product)">Sepete Ekle</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "/stores/cart";

const cartStore = useCartStore();

const products = ref([] as any[]);

function addToCart(product: any) {
  if (!cartStore.cart.find((a: any) => a._id === product._id)) {
    cartStore.cart.push(product);
  }
}

async function getDatas() {
  const result = await fetch("http://localhost:3001/api/kahve").then((res) => res.json());
  products.value = result;
}

onMounted(() => {
  getDatas();
});
</script>

<style scoped>
.kahvelist {
  display: flex;
  gap: 35px;
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
  font-size: 15px;
}

.ana {
  margin-top: 5px;
  border: 2px solid #005e5c;
  height: 50px;
  width: 150px;
  color: #005e5c;
  font-weight: bolder;
  transition: hover 0.5s;
  background: #fff;
  cursor: pointer;
}

.kahvelist-item:hover .ana {
  opacity: 1;
  cursor: pointer;
}
</style>
