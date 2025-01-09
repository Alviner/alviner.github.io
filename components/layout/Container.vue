<template>
    <OuterContainer v-bind="$attrs">
        <InnerContainer>
            <slot></slot>
        </InnerContainer>
    </OuterContainer>
</template>

<script setup lang="ts">
import InnerContainer from "./InnerContainer.vue";
import OuterContainer from "./OuterContainer.vue";
</script>
