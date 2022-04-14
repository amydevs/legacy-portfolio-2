<template>
  <div class="about">
    <div class="projcontainer">
      <ProjectCard v-for="(card, i) in cards" :key="i" v-bind="card"/>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ProjectCard from '@/components/Portfolio/ProjectCard.vue';
import { IconButtonProps } from '@/types/IconButtonProps';
import { ProjectCardProps } from '@/types/ProjectCardProps'

export default defineComponent({
  name: 'AboutView',
  components: {
    ProjectCard
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
        }
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
  position: relative;

  .projcontainer {
    width: 100%;
    flex-wrap: wrap;
    position: absolute;
    display: flex;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    align-content: space-around;
    justify-content: space-around;
  }
}
</style>

