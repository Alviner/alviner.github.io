<template>
  <li>
    <div class="flex min-w-0 gap-x-4">
      <div class="min-w-0 flex-auto">
        <NuxtLink :to="article._path">
          <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            {{ article.title }}
          </h3>
        </NuxtLink>
        <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {{ article.description }}
        </p>
      </div>
    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p class="mt-1 text-xs leading-5 text-gray-500" v-if="article.datetime">
        Published
        <time :datetime="dayjs(article.datetime).toISOString()">
          {{ dayjs(article.datetime).format(DateFormat) }}
        </time>
      </p>
    </div>
  </li>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import type { Article } from "@/interfaces/article";

const DateFormat = "DD-MM-YYYY HH:mm";

defineProps<{
  article: Article;
}>();
</script>
