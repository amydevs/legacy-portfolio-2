<template>
  <div class="social">
      <IconButton v-for="(link, i) in links" :href="link.link" :icon="link.icon" :text="link.name" :key="i" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconButton from '@/components/IconButton.vue'

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
        new SocialLink('Github', 'https://github.com/jy1263/', 'mdi-github'),
        new SocialLink('This Repository', 'https://github.com/jy1263/jy1263.github.io', 'mdi-github'),
        new SocialLink('Spotify', 'https://open.spotify.com/artist/15HdoPMP89EsIfIvN1coko?si=pyuDsYIpRcu2AHDYVYIn-Q', 'mdi-spotify'),
        new SocialLink('Bandcamp', 'https://ayanamy.bandcamp.com/', 'mdi-music-circle'),
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