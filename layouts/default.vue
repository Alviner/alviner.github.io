<template>
    <div>
        <div class="fixed inset-0 flex justify-center sm:px-8">
            <div class="flex w-full max-w-7xl lg:px-8">
                <div
                    class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"
                />
            </div>
        </div>
        <div class="relative">
            <Header />
            <main>
                <slot></slot>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
import Header from "./default/Header.vue";
</script>
