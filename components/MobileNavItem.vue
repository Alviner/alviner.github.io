<template>
    <li>
        <PopoverButton as="template" class="block py-2">
            <NuxtLink :to="to">
                <slot></slot>
            </NuxtLink>
        </PopoverButton>
    </li>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { PopoverButton } from "@headlessui/vue";

defineProps({
    to: {
        type: String,
        required: true,
    },
});
</script>
