<template>
  <main>
    <ContentRenderer :value="article" v-if="article" />
  </main>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: article } = await useAsyncData(
  `article-${route.params.slug}`,
  () => queryContent(`/articles/${route.params.slug}`).findOne(),
);
</script>
