<template>
    <a :href="href"><span :class="`mdi ${icon}`"/>{{ text }}</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        href: String,
        icon: String,
        text: String
    }
})
</script>
<style lang="scss" scoped>
@import '@mdi/font/css/materialdesignicons.css';
@import "@/variables.scss";

a {
    border-radius: $default-border-radius;
    border: 0px;
    padding: 5px 15px;
    overflow-wrap: none;
    font-size: 15pt;
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    text-decoration: none;
    & .mdi {
        margin-right: 4px;
    }
}
</style>