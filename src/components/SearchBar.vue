<template>
  <div class="search-bar-container">
    <input
      :value="searchValue"
      @input="updateSearchValue"
      type="text"
      placeholder="Otsi"
      class="search-field"
    />
    <v-btn icon class="search-icon-btn no-border">
      <v-icon color="secondary">mdi-magnify</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    search: {
      type: String,
      default: ''
    }
  },
  emits: ['update:search'],
  computed: {
    searchValue: {
      get() {
        return this.search;
      },
      set(value) {
        this.$emit('update:search', value);
      }
    }
  },
  methods: {
    updateSearchValue(event) {
      this.searchValue = event.target.value;
    }
  }
}
</script>

<style scoped>

.search-bar-container {
  display: flex;
  align-items: center;
  background-color: #121212;
  border-radius: 20px;
  padding: 0 8px;
  width: 600px;
  height: 40px;
  border: 1px solid #444444;
}

.search-field {
  flex: 1;
  background-color: transparent;
  border: none;
  outline: none;
  height: 100%;
  padding: 0 8px;
  color: #ffffff;
  font-size: 16px;
}

</style>