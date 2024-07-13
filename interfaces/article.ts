import type { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";

export interface Article extends MarkdownParsedContent {
  id: string;
  _path: string
  title: string;
  description: string;
  datetime?: string;
}

