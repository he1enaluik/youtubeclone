<template>
  <v-row class="video-row">
    <v-col v-for="video in videos" :key="video.id" class="video-col">
      <v-card class="video-card" color="surface">
        <div class="thumbnail-container">
          <img
            :src="video.thumbnail || '/vue.svg'"
            class="video-thumbnail"
            alt="Video thumbnail"
          />
        </div>
        <v-card-title class="video-title">{{ video.title }}</v-card-title>
        <v-card-subtitle class="video-subtitle">{{ video.channel }}</v-card-subtitle>
        <v-card-text class="video-text">
          {{ video.views }} vaatamist • {{ video.uploadTime }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    videos: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

.video-row {
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-between; 
  margin: 16px auto 0;
  width: 100%;
}

.video-col {
  flex: 0 0 calc(20% - 12px); 
  max-width: calc(20% - 12px); 
  padding: 8px; 
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.video-card {
  display: flex;
  flex-direction: column;
  height: 100%; 
  box-sizing: border-box; 
}

.thumbnail-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; 
  background-color: #333;
  border-radius: 4px;
  overflow: hidden;
  flex-shrink: 0; 
}

.video-thumbnail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.video-title {
  font-size: 14px !important; 
  line-height: 1.4 !important;
  padding: 8px 0 4px !important;
  color: #FFFFFF !important;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1; 
}

.video-subtitle {
  font-size: 12px !important; 
  padding: 0 !important;
  color: #D1D1D1 !important;
}

.video-text {
  font-size: 10px !important; 
  padding: 2px 0 0 !important;
  color: #D1D1D1 !important;
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .video-col {
    flex: 0 0 calc(25% - 12px); 
    max-width: calc(25% - 12px);
  }
}

@media (max-width: 900px) {
  .video-col {
    flex: 0 0 calc(33.33% - 12px); 
    max-width: calc(33.33% - 12px);
  }
}

@media (max-width: 600px) {
  .video-col {
    flex: 0 0 calc(50% - 12px); 
    max-width: calc(50% - 12px);
  }
}
</style>