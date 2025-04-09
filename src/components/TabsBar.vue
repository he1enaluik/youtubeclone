<template>
    <v-tabs :model-value="activeTab">
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

  <style scoped>

  .v-tabs {
    width: 100%;
    align-items: center;
    border: none !important;
    background-color: transparent !important;
  }

  .v-tab {
    color: #D1D1D1 !important;
    text-transform: none !important;
    font-size: 14px !important;
    padding: 4px 8px !important;
    margin: 10px !important;
    border: none !important;
    border-radius: 12px !important;
    background-color: #272727;
  }
  </style>