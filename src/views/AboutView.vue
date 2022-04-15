<template>
    <div v-html="markdown"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { marked } from 'marked';
import axios from 'axios';

export default defineComponent({
    data() {
        return {
            markdown: ''
        }
    },
    mounted: async function() {
        this.markdown = marked.parse((await axios.get("https://raw.githubusercontent.com/jy1263/jy1263/master/README.md")).data);
    }
})
</script>
<style lang="scss" scoped>
    div {
        padding: 10px 10vw;
    }
</style>