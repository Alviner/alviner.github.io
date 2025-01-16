<template>
    <NuxtLink href="/" aria-label="Home" :class="mergedClasses">
        <img :src="avatarImage" alt="" :class="iconClasses" />
    </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from "vue";

const { class: userClasses, ...otherAttrs } = useAttrs();

const props = defineProps({
    avatarImage: {
        type: String,
        default: "https://avatars.githubusercontent.com/u/9712169?v=4",
    },
    large: {
        type: Boolean,
        default: false,
    },
});

const mergedClasses = computed(() => {
    return ["pointer-events-auto", userClasses];
});

const iconClasses = computed(() => {
    return [
        "rounded-full",
        "bg-zinc-100",
        "object-cover",
        "dark:bg-zinc-800",
        props.large ? "h-16 w-16" : "h-9 w-9",
    ].join(" ");
});
</script>
