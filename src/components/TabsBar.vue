  <template>
    <v-tabs :model-value="activeTab" @update:model-value="updateActiveTab" class="tabs-container">
      <v-tab value="all">Kõik</v-tab>
      <v-tab value="gaming">Mängud</v-tab>
      <v-tab value="podcasts">Podcastid</v-tab>
      <v-tab value="music">Muusika</v-tab>
      <v-tab value="mixes">Miksid</v-tab>
      <v-tab value="sketches">Situatsioonikomöödiad</v-tab>
      <v-tab value="recent">Otse</v-tab>
      <v-tab value="watched">Märuliseiklusmängud</v-tab>
    </v-tabs>
  </template>

  <script>
  export default {
    props: {
      activeTab: {
        type: String,
        default: 'all'
      }
    },
    emits: ['update:activeTab'],
    methods: {
      updateActiveTab(value) {
        this.$emit('update:activeTab', value);
      }
    }
  }
  </script>

  <style scoped>

  .v-tabs {
    display: flex; 
    flex-wrap: nowrap; 
    justify-content: space-between; 
    width: 100%; 
    justify-content: center; 
    align-items: center; 
  }

  .v-tab {
    color: #D1D1D1 !important;
    text-transform: none !important;
    font-size: 14px !important;
    padding: 8px 16px !important;
    flex: 1 1 auto; 
    text-align: center;
    margin: 12px;
    border: 1px solid white;
    border-radius: 12px !important;
  }
  </style>