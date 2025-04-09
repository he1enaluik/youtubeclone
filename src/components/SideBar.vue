<template>
  <v-navigation-drawer :model-value="drawer" @update:model-value="updateDrawer" app color="surface" width="200">
    <v-list>
      <v-list-item prepend-icon="mdi-home" title="Avaleht" to="/"></v-list-item>

      <v-list-item title="Shorts" to="/shorts">
        <template v-slot:prepend>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="custom-icon">
            <rect x="4" y="4" width="16" height="16" rx="4" ry="4" stroke="#FF0000"/>
            <polygon points="10 8 16 12 10 16 10 8" fill="#FF0000"/>
          </svg>
        </template>
      </v-list-item>

      <v-list-item title="Tellimused" to="/subscriptions">
        <template v-slot:prepend>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="custom-icon">
            <rect x="4" y="4" width="12" height="2" fill="#FFFFFF"/>
            <rect x="4" y="8" width="12" height="2" fill="#FFFFFF"/>
            <rect x="4" y="12" width="12" height="2" fill="#FFFFFF"/>
            <polygon points="16 8 20 10 16 12 16 8" fill="#FFFFFF"/>
          </svg>
        </template>
      </v-list-item>

      <v-divider color="secondary"></v-divider>

      <v-list-item title="Sina" disabled class="section-header"></v-list-item>
      <v-list-item prepend-icon="mdi-history" title="Ajalugu" to="/history"></v-list-item>
      <v-list-item prepend-icon="mdi-playlist-play" title="Esitlusloendid" to="/playlists"></v-list-item>
      <v-list-item prepend-icon="mdi-video" title="Teie videod" to="/your-videos"></v-list-item>
      <v-list-item prepend-icon="mdi-clock-outline" title="Hiljem Vaatamiseks" to="/watch-later"></v-list-item>
      <v-list-item prepend-icon="mdi-thumb-up" title="Meeldinud videod" to="/liked-videos"></v-list-item>
      <v-divider color="secondary"></v-divider>

      <v-list-item title="Tellimused" disabled class="section-header"></v-list-item>
      <v-list-item
        v-for="channel in channels"
        :key="channel.name"
        :prepend-avatar="channel.logo"
        :title="channel.name"
        :to="channel.to"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: false
    },
    channels: {
      type: Array,
      default: () => []
    }
  },
  emits: ['update:drawer'],
  methods: {
    updateDrawer(value) {
      this.$emit('update:drawer', value);
    }
  }
}
</script>

<style scoped>
.custom-icon {
  margin-right: 16px;
}

.v-toolbar-title {
  color: #FFFFFF !important;
  visibility: visible !important;
  opacity: 1 !important;
}

.v-navigation-drawer {
  width: 200px !important;
  height: 100vh !important;
  overflow-y: hidden !important;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  padding: 0; 
}

.v-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 0; 
  padding-top: 0; 
}

.v-list-item {
  font-size: 11px !important; 
  padding: 4px 8px !important; 
}

.v-list-item__prepend {
  margin-right: 6px !important; 
}

.v-divider {
  margin: 4px 0 !important; 
}

.section-header {
  font-size: 10px !important; 
  padding: 4px 8px !important; 
  font-weight: bold;
  color: #FFFFFF !important;
  pointer-events: none;
}

@media (max-width: 900px) {
  .v-navigation-drawer {
    width: 180px !important; 
  }

  .v-list-item {
    font-size: 10px !important; 
    padding: 4px 6px !important; 
  }

  .section-header {
    font-size: 9px !important; 
    padding: 4px 6px !important; 
  }
}

@media (max-width: 600px) {
  .v-navigation-drawer {
    height: 50vh !important; 
  }
}
</style>