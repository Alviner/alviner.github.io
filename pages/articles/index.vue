<template>
  <div>
    <div v-for="article in articles">
      <h3>{{ article.title }}</h3>
      <a :href="article._path">Read More</a>
    </div>
  </div>
</template>

<script setup>
const { data: articles } = await useAsyncData("articles", () => queryContent("/articles").find());
</script>
