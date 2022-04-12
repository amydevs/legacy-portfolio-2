<template>
  <div class="social">
      <a v-for="(link, i) in links" :href="link.link" :key="i"><span :class="`mdi ${link.icon}`"/>{{ link.name }}</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@mdi/font/css/materialdesignicons.css';

export default defineComponent({
  name: 'Social',
  props: {
    msg: String
  },
  data() {
    return {
      links: [
        new SocialLink('Github', 'https://github.com/jy1263/', 'mdi-github'),
        new SocialLink('Twitter', 'https://twitter.com/jy126orjy126', 'mdi-twitter'),
        new SocialLink('This Repository', 'https://github.com/jy1263/jy1263.github.io', 'mdi-github'),
        new SocialLink('Spotify', 'https://open.spotify.com/artist/15HdoPMP89EsIfIvN1coko?si=pyuDsYIpRcu2AHDYVYIn-Q', 'mdi-spotify'),
        new SocialLink('Bandcamp', 'https://ayanamy.bandcamp.com/', 'mdi-bandcamp'),
        new SocialLink('Matter Music', 'https://app.matter.online/artists/@ayanamy', 'mdi-music-circle'),
        new SocialLink('Soundcloud', 'https://soundcloud.com/owotter', 'mdi-soundcloud'),
        new SocialLink('Wip Soundcloud', 'https://soundcloud.com/owotterwip', 'mdi-soundcloud'),
        new SocialLink("If it isn't clear enough", 'https://www.youtube.com/watch?v=ucbx9we6EHk', 'mdi-youtube')
      ] as SocialLink[]
    }
  },
  mounted() {
  },
  methods: {
  }
});
class SocialLink {
    name = '';
    link = '';
    icon = '';
    constructor(name: string, link: string, icon: string) {
        this.name = name;
        this.link = link;
        this.icon = icon;
    }
}
</script>

<style lang="scss" scoped>
.social {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 8px;
  & a {
    border-radius: 8px;
    border: 0px;
    padding: 5px 15px;
    margin: 4px;
    overflow-wrap: none;
    font-size: 15pt;
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    text-decoration: none;
    & .mdi {
      margin-right: 4px;
    }
  }
}
</style>