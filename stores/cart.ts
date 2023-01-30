import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
state: () => ({
cart: [] as any[],
}),
getters: {},
actions: {},
});