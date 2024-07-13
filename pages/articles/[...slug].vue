<template>
  <main>
    <ContentRenderer :value="article" />
  </main>
</template>


<script setup>
const route = useRoute();
const { data: article } = await useAsyncData("article", () =>
  queryContent(`/articles/${route.params.slug}`).findOne()
);
</script>
