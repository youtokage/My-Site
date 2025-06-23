<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { allCategories, allTags } from './utils/postLoader';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">プロフィール</RouterLink>
      <RouterLink to="/blog">ブログ</RouterLink>
    </nav>
    <div class="header-meta-nav">
      <ul class="meta-list">
        <li><strong>カテゴリ:</strong></li>
        <li v-for="(count, category) in allCategories" :key="category">
          <RouterLink :to="{ name: 'category-posts', params: { categoryName: category } }">
            {{ category }} ({{ count }})
          </RouterLink>
        </li>
      </ul>
      <ul class="meta-list">
        <li><strong>タグ:</strong></li>
        <li v-for="(count, tag) in allTags" :key="tag">
          <RouterLink :to="{ name: 'tag-posts', params: { tagName: tag } }">
            {{ tag }} ({{ count }})
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>

  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped>
/* App.vue のスコープ付きスタイル */
header {
  line-height: 1.5;
  display: flex;
  flex-direction: column; /* 垂直方向に並べる */
  justify-content: center;
  align-items: center; /* 中央揃え */
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem; /* カテゴリ/タグとの間にスペース */
}

nav a.router-link-exact-active {
  color: var(--color-text); /* VueデフォルトのCSS変数を参照 */
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.header-meta-nav {
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
}

.header-meta-nav .meta-list {
  justify-content: center; /* ヘッダー内のカテゴリ/タグも中央揃え */
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>