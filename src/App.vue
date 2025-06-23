<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { allCategories, allTags } from './utils/postLoader'
</script>

<template>
  <header>
    <!-- 1️⃣ 中央寄せナビゲーション -->
    <nav class="primary-nav">
      <RouterLink class="nav-link" to="/">プロフィール</RouterLink>
      <RouterLink class="nav-link" to="/blog">ブログ</RouterLink>
    </nav>
  </header>
  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped>
/* ───────── 1. カラートークン ───────── */
:root {
  /* バッジ背景 */
  --badge-bg-cat:  #e7f3ff;  /* ライトブルー */
  --badge-bg-tag:  #e6f9ee;  /* ライトグリーン */

  /* バッジ文字色 */
  --badge-tx-cat:  #0d6efd;  /* ブルー */
  --badge-tx-tag:  #198754;  /* グリーン */

  /* メタラベル「カテゴリ:」「タグ:」 */
  --meta-label-color: #ffffff;

  /* ヘッダー背景 & テキスト */
  --header-bg: #2b2b2b;
  --header-tx: #ffffff;
}

/* ───────── 2. ヘッダー & ナビ ───────── */
header {
  position: sticky;          /* スクロールしても固定 */
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 0;
  background: var(--header-bg);
  color: var(--header-tx);
  backdrop-filter: blur(6px); /* 背景ぼかしで読みやすさ↑ */
}

/* メインナビを中央寄せ */
.primary-nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

/* ナビリンク共通 */
.nav-link {
  font-weight: 600;
  position: relative;
  padding-bottom: 2px;
  color: inherit;            /* ヘッダーと同色 */
  text-decoration: none;
}

/* 現在ページを下線で示す */
.nav-link.router-link-exact-active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background: currentColor;
}

/* ───────── 3. カテゴリ / タグエリア ───────── */
.header-meta-nav {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* 一覧行 */
.meta-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

/* 「カテゴリ:」「タグ:」ラベル */
.meta-label {
  color: var(--meta-label-color);
  font-weight: 700;
  margin-right: 0.25rem;
}

/* ───────── 4. バッジ（共通）───────── */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 9999px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: var(--badge-bg-cat); /* デフォフォールバック */
  color: var(--badge-tx-cat);
  transition: background 0.2s, transform 0.15s;
  text-decoration: none;
}

/* hover で手応え */
.badge:hover {
  background: rgba(0, 0, 0, 0.04);
  transform: translateY(-1px);
}

/* 件数を小さめに */
.count {
  font-size: 0.75rem;
  opacity: 0.8;
}

/* カテゴリ / タグ別の色分け */
.badge--cat {
  background: var(--badge-bg-cat);
  color: var(--badge-tx-cat) !important;
}
.badge--tag {
  background: var(--badge-bg-tag);
  color: var(--badge-tx-tag) !important;
}

/* ───────── 5. 折りたたみ（小画面用）───────── */
/* モバイルでカテゴリ/タグが多いときは <details> を推奨 */
details {
  width: 100%;
}
details summary {
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0.25rem 0;
  color: var(--meta-label-color);
  font-weight: 600;
}
details[open] summary::after {
  content: "▲";
  margin-left: 0.25rem;
  font-size: 0.75rem;
}
details summary::after {
  content: "▼";
  margin-left: 0.25rem;
  font-size: 0.75rem;
}

/* ───────── 6. レスポンシブ ───────── */
@media (min-width: 1024px) {
  .primary-nav { gap: 3rem; }
}
</style>
