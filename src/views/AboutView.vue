<template>
  <div class="about">
    <div class="projcontainer">
      <ProjectCard v-for="(card, i) in cards" :key="i" v-bind="card"/>
    </div>
    <Donut />
    <div style="text-align: center; margin-bottom: 10px">Spinning Donut Code is by <a href="https://www.a1k0n.net/2011/07/20/donut-math.html">a1k0n</a></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ProjectCard from '@/components/Portfolio/ProjectCard.vue';
import { ProjectCardProps } from '@/types/ProjectCardProps'
import Donut from '@/components/Donut.vue';

export default defineComponent({
  name: 'AboutView',
  components: {
    ProjectCard,
    Donut
  },
  data() {
    return {
      cards: [
        {
          title: "Chip-8 Interpretting Emulator",
          description: "A Chip-8 Interpretting Emulator Written in Rust.",
          actions: [
            {
              text: "GitHub",
              href: 'https://github.com/jy1263/chip-8-emu-rs',
              icon: 'mdi-github'
            }
          ]
        },
        {
          title: "Simple Australian Tax Calculator",
          description: "A simple tax calculator for the Australian taxation system.",
          actions: [
            {
              text: "GitHub",
              href: 'https://github.com/jy1263/TaxCalculatorLaravel',
              icon: 'mdi-github'
            },
            {
              text: "Demo",
              href: 'https://austaxcalc.000webhostapp.com/',
              icon: 'mdi-web'
            }
          ]
        },
        {
          title: "TapeSync",
          description: "A modification for the productivity and organization application Tape, to enable synchronization of items between different systems using existing sync services.",
          actions: [
            {
              text: "GitHub",
              href: 'https://github.com/jy1263/TapeSync',
              icon: 'mdi-github'
            }
          ]
        },
        {
          title: "TapeMobile",
          description: "A modification for the productivity and organization application Tape, that ports it to mobile devices and the PWA platform.",
          actions: [
            {
              text: "GitHub",
              href: 'https://github.com/jy1263/TapeMobile',
              icon: 'mdi-github'
            }
          ]
        },
        {
          title: "SRXDBepInExInstaller",
          description: "A installer for the modding framework BepInEx for the game Spin Rhythm XD written in Python and Tkinter.",
          actions: [
            {
              text: "GitHub",
              href: 'https://github.com/SRXDModdingGroup/SRXDBepInExInstaller',
              icon: 'mdi-github'
            }
          ]
        },
      ] as ProjectCardProps[]
    }
  },
  mounted() {
    
  },
  methods: {
  }
});
</script>
<style lang="scss" scoped>
.about {
  height: 100%;
  flex: 1;

  .projcontainer {
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    align-content: space-around;
    justify-content: space-around;
  }
}
</style>

