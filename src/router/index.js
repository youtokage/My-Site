// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'
import BlogListView from '../views/BlogListView.vue'
import BlogPostView from '../views/BlogPostView.vue'
import CategoryView from '../views/CategoryView.vue'
import TagView from '../views/TagView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'blog-list',
      component: BlogListView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: BlogPostView,
      props: true,
    },
    {
      path: '/category/:categoryName', // カテゴリ別記事一覧
      name: 'category-posts',
      component: CategoryView,
      props: true,
    },
    {
      path: '/tag/:tagName', // タグ別記事一覧
      name: 'tag-posts',
      component: TagView,
      props: true,
    },
    // 404 Not Found ページ
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: {
        template:
          '<h1 style="text-align: center; margin-top: 50px;">404 - ページが見つかりません</h1>',
      },
    },
  ],
})

export default router
