<template>
  <v-navigation-drawer
    :model-value="drawer"
    @update:model-value="updateDrawer"
    app
    color="surface"
    width="217"
    style="height: calc(100vh - 64px); overflow-y: auto;"
  >
    <v-list>
      <v-list-item prepend-icon="mdi-home" title="Avaleht" to="/"></v-list-item>

      <v-list-item title="Shorts" to="/shorts"></v-list-item>

      <v-list-item title="Tellimused" to="/subscriptions">
        <template v-slot:prepend></template>
      </v-list-item>

      <v-divider color="secondary"></v-divider>

      <v-list-item title="Teie" disabled class="section-header"></v-list-item>
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
        :title="channel.name"
        :to="channel.to"
      >
        <template v-slot:prepend>
          <v-avatar size="24">
            <v-img :src="channel.logo" :alt="`${channel.name} logo`"></v-img>
          </v-avatar>
        </template>
      </v-list-item>
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
  margin-right: 32px;
}

.v-list {
  padding-top: 1px; 
}

.v-list-item {
  font-size: 17px !important; 
  padding: 4px 8px !important; 
}

</style>
