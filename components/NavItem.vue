<template>
    <li>
        <NuxtLink :to="to" :class="LinkClass">
            <slot></slot>
            <span
                v-if="isActive"
                className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"
            />
        </NuxtLink>
    </li>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";

const router = useRoute();

const props = defineProps({
    to: {
        type: String,
        required: true,
    },
});

const isActive = computed(() => router.path === props.to);
const LinkClass = computed(() => ({
    "relative block px-3 py-2 transition": true,
    "text-teal-500 dark:text-teal-400": isActive.value,
    "hover:text-teal-500 dark:hover:text-teal-400": !isActive.value,
}));
</script>
