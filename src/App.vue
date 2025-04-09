<template>
  <v-app>
    <v-app-bar app color="background" flat>
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <v-icon color="secondary">mdi-menu</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title class="d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="21" viewBox="0 0 40 28" fill="none" class="youtube-logo">
          <rect x="0" y="0" width="40" height="28" rx="6" fill="#FF0000"/>
          <polygon points="19 7 29 14 19 21" fill="#FFFFFF"/>
        </svg>
        <span class="youtube-text">
          YouTube
          <sup class="country-code">EE</sup>
        </span>
      </v-toolbar-title>

      <div class="d-flex align-center">
        <SearchBar :search="search" @update:search="search = $event" />
        <v-btn icon class="microphone-icon-btn">
          <v-icon color="secondary">mdi-microphone</v-icon>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon color="secondary">mdi-bell</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color="secondary">mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <SideBar :drawer="drawer" @update:drawer="drawer = $event" :channels="channels" />

    <v-main>
      <div class="tabs-wrapper">
        <TabsBar :activeTab="activeTab" @update:activeTab="activeTab = $event" />
      </div>

      <v-container class="pa-0" fluid>
        <VideoList :videos="videos" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'
import VideoList from './components/VideoList.vue'
import SearchBar from './components/SearchBar.vue'
import SideBar from './components/SideBar.vue'
import TabsBar from './components/TabsBar.vue'

export default {
  components: {
    VideoList,
    SearchBar,
    SideBar,
    TabsBar
  },
  data() {
    return {
      search: '',
      drawer: true,
      activeTab: 'all',
      channels: [],
      videos: [
        {
          id: 1,
          thumbnail: new URL('/assets/image1.png', import.meta.url).href,
          title: '+15ETHs / Creating a personal AI bot',
          channel: 'Spontud',
          views: '13 tuh',
          uploadTime: '1 päeva eest'
        },
        {
          id: 2,
          thumbnail: new URL('/assets/image2.png', import.meta.url).href,
          title: 'Outer Wilds - All Achievements',
          channel: 'Jimmy',
          views: '1,2 tuh',
          uploadTime: '1 aasta eest'
        },
        {
          id: 3,
          thumbnail: new URL('/assets/image3.png', import.meta.url).href,
          title: 'I Bought EVERY Tech Ad I Saw for a MONTH',
          channel: 'Linus Tech Tips',
          views: '2,3 mil',
          uploadTime: '7 päeva eest'
        },
        {
          id: 4,
          thumbnail: new URL('/assets/image4.png', import.meta.url).href,
          title: 'Six Lies Elon Musk Believed (in the last 24 hours)',
          channel: 'The Hated One',
          views: '1,2 tuh',
          uploadTime: '5 päeva eest'
        },
        {
          id: 5,
          thumbnail: new URL('/assets/image5.png', import.meta.url).href,
          title: 'Exploring the Blue Box: The Magic of the TARDIS in Doctor Who',
          channel: 'TARDIS Talks',
          views: '86 tuh',
          uploadTime: '1 kuu eest'
        },
        {
          id: 6,
          thumbnail: new URL('/assets/image6.png', import.meta.url).href,
          title: 'The Supervive Experience',
          channel: 'SauceK',
          views: '5,4 tuh',
          uploadTime: '4 päeva eest'
        },
        {
          id: 7,
          thumbnail: new URL('/assets/image7.png', import.meta.url).href,
          title: 'We Might Find Alien Life in 2332',
          channel: 'Veritasium',
          views: '3,1 tuh',
          uploadTime: '2 nädala eest'
        },
        {
          id: 8,
          thumbnail: new URL('/assets/image8.png', import.meta.url).href,
          title: 'Maagia retsept',
          channel: 'Spontud',
          views: '2,9 tuh',
          uploadTime: '8 kuu eest'
        },
        {
          id: 9,
          thumbnail: new URL('/assets/image9.png', import.meta.url).href,
          title: 'LEFT CLOUD BEATS RIGHT',
          channel: 'Yes, really',
          views: '699 tuh',
          uploadTime: '1 aasta eest'
        },
        {
          id: 10,
          thumbnail: new URL('/assets/image10.png', import.meta.url).href,
          title: 'House tells the ugly truth about Vogler’s drug',
          channel: 'Peter Grant',
          views: '1,9 mil',
          uploadTime: '10 aasta eest'
        },
        {
          id: 11,
          thumbnail: new URL('/assets/image11.png', import.meta.url).href,
          title: '100% SPEEDRUN OF PAST SELF',
          channel: 'Future Self',
          views: '2,8 tuh',
          uploadTime: '2 päeva eest'
        },
        {
          id: 12,
          thumbnail: new URL('/assets/image12.png', import.meta.url).href,
          title: 'Why Didn’t Jumper Get a Sequel?',
          channel: 'CinemaSins',
          views: '1,4 mil',
          uploadTime: '1 aasta eest'
        },
        {
          id: 13,
          thumbnail: new URL('/assets/image13.png', import.meta.url).href,
          title: 'Exploring Abandoned Places',
          channel: 'Urban Explorer',
          views: '450 tuh',
          uploadTime: '2 päeva eest'
        },
        {
          id: 14,
          thumbnail: new URL('/assets/image14.png', import.meta.url).href,
          title: 'The Science of Black Holes',
          channel: 'Kurzgesagt',
          views: '3,5 mil',
          uploadTime: '1 kuu eest'
        },
        {
          id: 15,
          thumbnail: new URL('/assets/image15.png', import.meta.url).href,
          title: 'DIY Home Decor Ideas',
          channel: 'Crafty Panda',
          views: '780 tuh',
          uploadTime: '5 päeva eest'
        }
      ]
    }
  },
  async created() {
    await this.fetchChannelLogos()
  },
  methods: {
    async fetchChannelLogos() {
      const apiKey = 'AIzaSyDbSRbQUQe51hz1b-ZpBnVKck4bjzOOFpQ';


      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIds.join(',')}&key=${apiKey}`
        );

        if (response.data && response.data.items) {
          this.channels = response.data.items.map((channel, index) => ({
            name: channel.snippet.title,
            logo: new URL(`/assets/image${(index % 6) + 1}.png`, import.meta.url).href,
            to: `/channel/${channel.snippet.title.toLowerCase().replace(/ /g, '')}`
          }));
        } else {
          console.error('Error: response.data.items is undefined', response);
          this.channels = [
            { name: 'Linus Tech Tips', logo: new URL('/assets/image1.png', import.meta.url).href, to: '/channel/linustechtips' },
            { name: 'MFPallytime', logo: new URL('/assets/image2.png', import.meta.url).href, to: '/channel/mfpallytime' },
            { name: 'Ray William Johnson', logo: new URL('/assets/image3.png', import.meta.url).href, to: '/channel/raywilliamjohnson' },
            { name: 'Steven He', logo: new URL('/assets/image4.png', import.meta.url).href, to: '/channel/stevenhe' },
            { name: 'JerryRigEverything', logo: new URL('/assets/image5.png', import.meta.url).href, to: '/channel/jerryrigeverything' },
            { name: 'Adam Conover', logo: new URL('/assets/image6.png', import.meta.url).href, to: '/channel/adamconover' },
            { name: 'Thought2', logo: new URL('/assets/image1.png', import.meta.url).href, to: '/channel/thought2' }
          ];
        }
      } catch (error) {
        console.error('Error fetching channel logos:', error);
        this.channels = [
          { name: 'Linus Tech Tips', logo: new URL('/assets/image1.png', import.meta.url).href, to: '/channel/linustechtips' },
          { name: 'MFPallytime', logo: new URL('/assets/image2.png', import.meta.url).href, to: '/channel/mfpallytime' },
          { name: 'Ray William Johnson', logo: new URL('/assets/image3.png', import.meta.url).href, to: '/channel/raywilliamjohnson' },
          { name: 'Steven He', logo: new URL('/assets/image4.png', import.meta.url).href, to: '/channel/stevenhe' },
          { name: 'JerryRigEverything', logo: new URL('/assets/image5.png', import.meta.url).href, to: '/channel/jerryrigeverything' },
          { name: 'Adam Conover', logo: new URL('/assets/image6.png', import.meta.url).href, to: '/channel/adamconover' },
          { name: 'Thought2', logo: new URL('/assets/image1.png', import.meta.url).href, to: '/channel/thought2' }
        ];
      }
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Trade Gothic LT Std Bold Condensed No. 20';
  src: url('/assets/trade-gothic-lt-std-webfont/trade-gothic-lt-std-bold-condensed-no-20-5872def1d27d8.woff') format('woff');
  font-weight: bold;
  font-style: normal;
}

.v-main {
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
}

.v-container {
  padding: 0 !important;
  max-width: 100% !important;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

/* Microphone Icon Button */
.microphone-icon-btn {
  margin-left: 20px;
  padding: 0;
  background-color: #383838; /* Always have the background color */
  border-radius: 80%; /* Always have the border radius */
  cursor: pointer;
}

/* Tabs Wrapper */
.tabs-wrapper {
  margin-top: 18px; /* Add spacing between the search bar and tabs */
}

.youtube-logo {
  margin-right: 1px; /* Add spacing between the logo and text */
  width: 28px; /* Adjust width as needed */
  height: 17px; /* Adjust height as needed */
  /* display: flex; */
  /* align-items: center; */
}

.youtube-text {
  font-family: 'Trade Gothic LT Std Bold Condensed No. 20', sans-serif;
  font-size: 20px; /* Adjust font size as needed */
  font-weight: 500; /* Adjust font weight as needed */
  color: #FFFFFF; /* Set text color */
  line-height: 21px; /* Align text vertically with the logo */
  vertical-align: middle;
}

.country-code {
  font-family: 'Trade Gothic LT Std Bold Condensed No. 20', sans-serif;
  font-size: 8px; /* Adjust font size as needed */
  vertical-align: super; /* Position the country code as a superscript */
  margin-left: 2px; /* Add spacing between the text and country code */
}
</style>