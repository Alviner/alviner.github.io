<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

import SunIcon from "../../components/icons/SunIcon.vue";
import MoonIcon from "../../components/icons/MoonIcon.vue";

const isDarkMode = ref(false);

watch(isDarkMode, (event) => {
    document.documentElement.classList.toggle("dark", event);
    if (event) {
        localStorage.theme = "dark";
    } else {
        localStorage.theme = "light";
    }
});

onMounted(() => {
    isDarkMode.value =
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches);
});

function toggleMode() {
    isDarkMode.value = !isDarkMode.value;
}
</script>

<template>
    <button
        type="button"
        aria-label="Toggle dark mode"
        @click="toggleMode"
        class="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
    >
        <SunIcon
            class="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"
        />
        <MoonIcon
            class="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"
        />
    </button>
</template>
