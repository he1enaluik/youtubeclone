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

.search-bar-wrapper {
  max-width: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
  justify-content: center; 
}


.search-bar-container {
  display: flex;
  align-items: center;
  background-color: #303030;
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

.search-icon-btn {
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
}

.search-icon-btn.no-border {
  box-shadow: none;
  border: none;
}

.search-icon-btn:hover {
  background-color: #383838;
}

.microphone-icon-btn {
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px; 
  padding: 0;
  background-color: transparent;
  cursor: pointer;
}

.microphone-icon-btn:hover {
  background-color: #383838;
  border-radius: 50%;
}

.microphone-icon-btn .v-icon {
  font-size: 24px; 
  color: #ffffff; 
}

.search-field::placeholder {
  color: #aaaaaa;
}

.search-field .v-input__control {
  padding: 0 !important;
  line-height: 36px;
}

.search-icon {
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
  cursor: pointer;
}

.search-field .v-input__control::placeholder {
  color: #AAAAAA !important;
}

.search-field .v-input__control:focus {
  outline: none;
}

.search-field .v-input__control:hover {
  background-color: #383838 !important;
}

.search-field .v-input__prepend-inner,
.search-field .v-input__append-inner {
  color: #FFFFFF !important;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; 
  width: 36px; 
}

.search-field .v-input__prepend-inner {
  margin-right: 8px; 
}

.search-field .v-input__append-inner {
  margin-left: 8px; 
}

.search-field .v-input__control::placeholder {
  color: #AAAAAA !important; 
}

.search-field .v-input__control:focus {
  outline: none; 
}

.search-field .v-input__control:hover {
  background-color: #383838 !important; 
}
</style>