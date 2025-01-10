<template>
    <div :class="combinedClasses" v-bind="otherAttrs">
        <div class="mx-auto max-w-2xl lg:max-w-5xl">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";
const { class: userClasses, ...otherAttrs } = useAttrs();

const predefinedClasses = "relative px-4 sm:px-8 lg:px-12";

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
