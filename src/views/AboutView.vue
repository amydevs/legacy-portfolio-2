<template>
    <div class="wrapper">
        <div v-html="markdown" />
    </div>
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
@import "@/variables.scss";

.wrapper {
    padding: 0px 10vw 10px 10vw;
    > div {
        padding: 3px 0px 15px 0px;
        border-radius: $default-border-radius;
        background: rgba($color: #ffffff, $alpha: 0.05);
    }
}
</style>