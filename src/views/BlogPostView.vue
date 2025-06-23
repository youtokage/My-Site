<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { posts } from '../utils/postLoader';
import { marked } from 'marked';
import { RouterLink } from 'vue-router'; // RouterLinkを追加

const route = useRoute();
const router = useRouter();
const post = ref(null);
const renderedContent = ref('');

const fetchPost = (slug) => {
  const foundPost = posts.find(p => p.slug === slug);
  if (foundPost) {
    post.value = foundPost;
    renderedContent.value = marked(foundPost.content);
  } else {
    router.push({ name: 'NotFound' });
  }
};

onMounted(() => {
  fetchPost(route.params.slug);
});

watch(() => route.params.slug, (newSlug) => {
  fetchPost(newSlug);
});
</script>

<template>
  <div class="blog-post" v-if="post">
    <h1>{{ post.title }}</h1>
    <p class="post-meta">公開日: {{ post.date }}</p>
    <ul class="meta-list" v-if="post.categories.length > 0 || post.tags.length > 0">
      <li v-if="post.categories.length > 0">
        <strong>カテゴリ:</strong>
        <RouterLink v-for="cat in post.categories" :key="cat" :to="{ name: 'category-posts', params: { categoryName: cat } }">
          {{ cat }}
        </RouterLink>
      </li>
      <li v-if="post.tags.length > 0">
        <strong>タグ:</strong>
        <RouterLink v-for="tag in post.tags" :key="tag" :to="{ name: 'tag-posts', params: { tagName: tag } }">
          {{ tag }}
        </RouterLink>
      </li>
    </ul>

    <div class="blog-post-content" v-html="renderedContent"></div>
    <hr>
    <RouterLink to="/blog">← ブログ記事一覧に戻る</RouterLink>
  </div>
  <div v-else class="loading-message">
    <p>記事を読み込み中...</p>
  </div>
</template>

<style scoped>
/* BlogPostView.vue のスコープ付きスタイル */
.blog-post {
  padding: 20px;
}

.blog-post h1 {
  text-align: center;
  margin-bottom: 15px;
  font-size: 2.2em;
}

.blog-post .post-meta {
  text-align: center;
  font-size: 0.9em;
  color: #777;
  margin-bottom: 30px;
}

.blog-post-content {
  margin-bottom: 30px;
  line-height: 1.8;
  font-size: 1.1em;
}

/* v-htmlでレンダリングされる要素のスタイル */
.blog-post-content h1 {
  font-size: 2em;
  margin-top: 1.5em;
  margin-bottom: 0.8em;
  color: #34495e;
}

.blog-post-content h2 {
  font-size: 1.8em;
  margin-top: 1.5em;
  margin-bottom: 0.8em;
  color: #34495e;
}

.blog-post-content h3 {
  font-size: 1.5em;
  margin-top: 1.2em;
  margin-bottom: 0.7em;
  color: #34495e;
}

.blog-post-content p {
  margin-bottom: 1em;
}

.blog-post-content pre {
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.95em;
  line-height: 1.4;
  margin-bottom: 1.5em;
}

.blog-post-content code {
  background-color: #e6e6e6;
  padding: 2px 5px;
  border-radius: 4px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9em;
}

.blog-post-content ul,
.blog-post-content ol {
  margin-bottom: 1em;
  padding-left: 25px;
}

.blog-post-content li {
  margin-bottom: 0.5em;
}

.blog-post hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
  margin: 40px 0 20px 0;
}

.loading-message {
  text-align: center;
  padding: 50px;
  font-size: 1.2em;
  color: #666;
}

/* meta-list の調整 (BlogPostView用) */
.blog-post .meta-list {
  justify-content: center; /* 個別記事のメタ情報も中央揃え */
  margin-top: 10px;
  margin-bottom: 30px; /* コンテンツとの間隔 */
}

.blog-post .meta-list li {
  margin-right: 10px;
  margin-bottom: 5px;
  padding: 0;
  background: none;
  border-radius: 0;
  font-size: 0.9em;
}

.blog-post .meta-list li a {
  background-color: #e2f0e8;
  padding: 3px 8px;
  border-radius: 4px;
  color: #36a073;
  text-decoration: none;
  display: inline-block;
}

.blog-post .meta-list li a:hover {
  text-decoration: underline;
  background-color: #d1e5d7;
}

.blog-post .meta-list li strong {
  margin-right: 5px;
  color: #2c3e50;
}
</style>