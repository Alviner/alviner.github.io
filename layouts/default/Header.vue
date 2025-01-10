<template>
    <header
        class="pointer-events-none relative z-50 flex flex-col"
        style="height: var(--header-height); margin-bottom: var(--header-mb)"
    >
        <div
            class="top-0 z-10 h-16 pt-6"
            style="position: var(--header-position)"
        >
            <Container
                class="top-[var(--header-top,theme(spacing.6))] w-full"
                style="position: var(--header-position)"
            >
                <div class="relative flex gap-4">
                    <div class="flex flex-1"></div>
                    <div class="flex flex-1 justify-end md:justify-center">
                        <MobileNavigation
                            class="pointer-events-auto md:hidden"
                        />
                        <Navigation
                            class="pointer-events-auto hidden md:block"
                        />
                    </div>
                    <div class="flex justify-end md:flex-1">
                        <div class="pointer-events-auto">
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </header>
</template>

<script setup lang="ts">
import ModeToggle from "./ModeToggle.vue";
import Container from "../../components/Container.vue";
import Navigation from "../../components/Navigation.vue";
import MobileNavigation from "../../components/MobileNavigation.vue";
</script>
