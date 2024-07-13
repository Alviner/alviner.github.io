<template>
  <main>
    <ul role="list" class="devide-y devide-gray-100">
      <ArticleListItem v-for="article in articles" :key="article.id" :article="article"></ArticleListItem>
    </ul>
  </main>
</template>

<script setup lang="ts">
import type { Article } from "@/interfaces/article";

const { data: articles } = await useAsyncData("articles", () =>
  queryContent<Article>("/articles").find(),
);
</script>
