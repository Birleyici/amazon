<template>
    <div class="d-flex flex-row justify-content-center">
        
        <div class="d-flex flex-row justify-content-center" id="app">
  <v-app id="inspire">
    <v-item-group>
      <v-container>
        <v-row>
          <v-col
            
             
            cols="12"
            md="4"
          >
            <v-item v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'primary' : ''"
                class=" mb-5"
               
                height="400"
                @click="toggle"
              >
              <h2>PRİME İLE BEDAVA KARGO</h2><router-link to="shopPage"><img  src="cm1.jpg" alt="" class="src"></router-link>
              

              </v-card>
             
            </v-item>
            
          </v-col>
          <v-col
            
             
            cols="12"
            md="4"
          >
            <v-item v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'primary' : ''"
                class=" mb-5"
                
                height="400"
                @click="toggle"
              >
              <h2>PRİME İLE BEDAVA KARGO</h2>
              <img  src="cm2.jpg" alt="" class="src">
              </v-card>
             
            </v-item>
            
          </v-col>
          <v-col
            
             
            cols="12"
            md="4"
          >
            <v-item v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'primary' : ''"
                class=" mb-5"
                
                height="400"
                @click="toggle"
              >
              <h2>PRİME İLE BEDAVA KARGO</h2>
              <img  src="cm3.jpg" alt="" class="src">
              </v-card>
             
            </v-item>
            
          </v-col>
        </v-row>
        <v-row>
          <v-col
            
             
            cols="12"
            md="4"
          >
            <v-item v-slot="{ active, toggle }">
              
              <v-card
                :color="active ? 'primary' : ''"
                class="d-flex align-center mb-5"
                
                height="400"
                @click="toggle"
                
                
              >
              <h2>PRİME İLE BEDAVA KARGO</h2>
              <img  src="cm4.jpg" alt="" class="src">    
                     
              
              </v-card>
             
            </v-item>
            
          </v-col>
          <v-col
            
             
            cols="12"
            md="4"
          >
            <v-item v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'primary' : ''"
                class="d-flex align-center mb-5"
               
                height="400"
                @click="toggle"
              >

              </v-card>
             
            </v-item>
            
          </v-col>
          <v-col
            
             
            cols="12"
            md="4"
          >
            <v-item v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'primary' : ''"
                class="d-flex align-center mb-5"
                
                height="400"
                @click="toggle"
              >

              </v-card>
             
            </v-item>
            
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </v-app>
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
        `http://localhost:8000/kahve/${this.$route.params.kahveler}`
      )
      const finalResponse = await response.json()
      this.kahveler = finalResponse
    },
  },
}

</script>