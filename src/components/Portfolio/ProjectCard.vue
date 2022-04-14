<template>
    <div class="card">
        <span class="title">{{ title }}</span>
        <div class="description">{{ description }}</div>
        <div class="actions">
            <IconButton v-for="(action, i) in actions" v-bind="action" :key="i" />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { IconButtonProps } from '@/types/IconButtonProps';
import IconButton from '@/components/IconButton.vue'

export default defineComponent({
    components: {
        IconButton
    },
    props: {
        title: String,
        description: String,
        actions: Array as () => IconButtonProps[],
    }
})
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.card {
    display: flex;
    flex: 1;
    flex-direction: column;
    background: rgba($color: #ffffff, $alpha: 0.05);
    border-radius: $default-border-radius;
    padding: 20px;
    margin: 10px 20px;
    min-width: 40vw;
    min-height: 20vh;
    .description {
        margin: 10px 0px;
        height: 100%;
    }
    .actions {
        display: flex;
        flex-direction: row;
        gap: 6px;
    }
}
</style>