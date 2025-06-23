---
id: 1
slug: first-steps-with-vue-3
title: Vue 3で始める最初のステップ
date: 2023-01-15
excerpt: Vue 3は、リアクティブなユーザーインターフェースを構築するためのプログレッシブフレームワークです。この記事では、Vue 3の基本的なセットアップとコンポーネントの作成方法について説明します。
categories: [Frontend, Vue.js]
tags: [Vue3, JavaScript, Web開発]
---
# Vue 3とは？

Vue 3は、ウェブアプリケーションのUIを構築するためのJavaScriptフレームワークです。軽量で高速、そして学習曲線が緩やかであることで知られています。

## インストール

新しいVueプロジェクトを作成するには、Viteを使用するのが最も簡単です。

\`\`\`bash
npm init vue@latest
\`\`\`

## コンポーネントの作成

Vueコンポーネントは、単一ファイルコンポーネント（SFC）として定義されます。

\`\`\`vue
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello, Vue 3!')
</script>

<style scoped>
h1 {
  color: #333;
}
</style>
\`\`\`

Vue 3の世界へようこそ！