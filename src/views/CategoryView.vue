<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { posts } from '../utils/postLoader'
import { RouterLink } from 'vue-router'

const route = useRoute()
const categoryName = ref('')
const currentPage = ref(1)
const postsPerPage = 5

// カテゴリ名に基づいて記事をフィルタリング
const filteredPosts = computed(() => {
  return posts.filter((post) => post.categories.includes(categoryName.value))
})

// ページネーションのための計算プロパティ
const totalPages = computed(() => {
  return Math.ceil(filteredPosts.value.length / postsPerPage)
})

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  const end = start + postsPerPage
  return filteredPosts.value.slice(start, end)
})

// ページ変更関数
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

// ルートパラメータが変更されたらカテゴリ名を更新し、ページをリセット
watch(
  () => route.params.categoryName,
  (newCategoryName) => {
    categoryName.value = newCategoryName
    currentPage.value = 1
  },
  { immediate: true },
) // 初期ロード時にも実行
</script>

<template>
  <div class="category-posts">
    <h1>カテゴリ: {{ categoryName }}</h1>
    <hr />

    <div v-if="paginatedPosts.length > 0">
      <div v-for="post in paginatedPosts" :key="post.id" class="blog-list-item">
        <h2>
          <RouterLink :to="{ name: 'blog-post', params: { slug: post.slug } }">
            {{ post.title }}
          </RouterLink>
        </h2>
        <span class="post-date">{{ post.date }}</span>
        <p>{{ post.excerpt }}</p>
        <ul class="meta-list" v-if="post.tags.length > 0">
          <li>
            <strong>タグ:</strong>
            <RouterLink
              v-for="tag in post.tags"
              :key="tag"
              :to="{ name: 'tag-posts', params: { tagName: tag } }"
            >
              {{ tag }}
            </RouterLink>
          </li>
        </ul>
        <RouterLink :to="{ name: 'blog-post', params: { slug: post.slug } }">続きを読む</RouterLink>
      </div>
    </div>
    <p v-else>このカテゴリにはまだ記事がありません。</p>

    <div class="pagination" v-if="totalPages > 1">
      <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">前へ</button>
      <span class="current-page">{{ currentPage }} / {{ totalPages }}</span>
      <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">
        次へ
      </button>
    </div>
  </div>
</template>

<style scoped>
/* BlogListView.vue と同様のスタイルを使用 */
.category-posts {
  padding: 20px;
}

.category-posts h1 {
  text-align: center;
  margin-bottom: 25px;
}

.category-posts hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0)
  );
  margin: 40px 0;
}

.blog-list-item {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.blog-list-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.blog-list-item h2 {
  margin-bottom: 8px;
  font-size: 1.8em;
}

.blog-list-item h2 a {
  color: #2c3e50;
  text-decoration: none;
}

.blog-list-item h2 a:hover {
  color: #42b983;
  text-decoration: underline;
}

.blog-list-item .post-date {
  display: block;
  font-size: 0.85em;
  color: #888;
  margin-bottom: 10px;
}

.blog-list-item p {
  color: #555;
  margin-bottom: 15px;
}

/* meta-list の調整 */
.blog-list-item .meta-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin-top: 10px;
  margin-bottom: 15px;
}

.blog-list-item .meta-list li {
  margin-right: 10px;
  margin-bottom: 5px;
  padding: 0;
  background: none;
  border-radius: 0;
  font-size: 0.9em;
}

.blog-list-item .meta-list li a {
  background-color: #e2f0e8;
  padding: 3px 8px;
  border-radius: 4px;
  color: #36a073;
  text-decoration: none;
  display: inline-block;
}

.blog-list-item .meta-list li a:hover {
  text-decoration: underline;
  background-color: #d1e5d7;
}

.blog-list-item .meta-list li strong {
  margin-right: 5px;
  color: #2c3e50;
}
</style>
