<template>
    <div class="radio">
        <div>
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/15HdoPMP89EsIfIvN1coko?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    
})
</script>
<style lang="scss" scoped>
@import "@/variables.scss";

.radio {
    padding: 0px 10vw 10px 10vw;
    > div {
        padding: 15px;
        border-radius: $default-border-radius;
        background: rgba($color: #ffffff, $alpha: 0.05);
    }
}
</style>