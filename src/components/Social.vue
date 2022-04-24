<template>
  <div class="social">
      <IconButton v-for="(link, i) in links" v-bind="link" :key="i" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconButton from '@/components/IconButton.vue'
import { IconButtonProps } from '@/types/IconButtonProps'

export default defineComponent({
  name: 'Social',
  components: {
    IconButton
  },
  props: {
    msg: String
  },
  data() {
    return {
      links: [
        {
          "href": "https://github.com/jy1263/",
          "icon": "mdi-github",
          "text": "Github"
        },
        {
          "href": "https://github.com/jy1263/jy1263.github.io",
          "icon": "mdi-github",
          "text": "This Repository"
        },
        {
          "href": "https://open.spotify.com/artist/15HdoPMP89EsIfIvN1coko?si=pyuDsYIpRcu2AHDYVYIn-Q",
          "icon": "mdi-spotify",
          "text": "Spotify"
        },
        {
          "href": "https://ayanamy.bandcamp.com/",
          "icon": "mdi-music-circle",
          "text": "Bandcamp"
        },
        {
          "href": "https://app.matter.online/artists/@ayanamy",
          "icon": "mdi-music-circle",
          "text": "Matter Music"
        },
        {
          "href": "https://soundcloud.com/owotter",
          "icon": "mdi-soundcloud",
          "text": "Soundcloud"
        },
        {
          "href": "https://soundcloud.com/owotterwip",
          "icon": "mdi-soundcloud",
          "text": "WIP Soundcloud"
        },
        {
          "href": "https://www.youtube.com/watch?v=ucbx9we6EHk",
          "icon": "mdi-youtube",
          "text": "If it isn't clear enough"
        },
        {
          "href": "https://pronouns.page/u/AyanAmy",
          "icon": "mdi-face-woman-profile",
          "text": "Pronouns"
        }
      ] as IconButtonProps[]
    }
  },
  mounted() {
  },
  methods: {
  }
});
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.social {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 8px;
  gap: 8px;
}
</style>