<template>
    <v-carousel v-model="model">
      <v-carousel-item
        v-for="(item, i) in sliderPhotos"
        
        :key="i"
      >
        <v-sheet
          
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
          <img :src='item' />
             
            
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </template>

<script>
export default {
  data: () => ({
    sliderPhotos: ['/si1.jpg','/si2.jpg','/si3.jpg','/s4.jpg'],
    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
  }),
}
</script>