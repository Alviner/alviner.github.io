<template>
    <nav>
        <ul
            class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
        >
            <NavItem to="/about">About</NavItem>
            <NavItem to="/articles">Articles</NavItem>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import NavItem from "./NavItem.vue";
</script>
