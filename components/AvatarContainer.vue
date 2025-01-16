<template>
    <div :class="combinedClasses" v-bind="otherAttrs">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";
const { class: userClasses, ...otherAttrs } = useAttrs();

const predefinedClasses =
    "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10";

const combinedClasses = computed(() => {
    let additionalClasses = [];
    if (Array.isArray(userClasses)) {
        additionalClasses = userClasses;
    } else if (typeof userClasses === "string") {
        additionalClasses = userClasses.split(" ");
    } else if (typeof userClasses === "object") {
        additionalClasses = Object.keys(userClasses).filter(
            (key) => userClasses[key],
        );
    }

    return [predefinedClasses, ...additionalClasses].join(" ");
});
</script>
