// src/utils/postLoader.js
import matter from 'gray-matter';

// Viteのimport.meta.globを利用して、静的ビルド時に全てのMarkdownファイルを読み込む
// globEager は、マッチしたモジュールを直接インポートし、Promiseを返さない
const markdownFiles = import.meta.glob('../posts/*.md', { eager: true, as: 'raw' });

/**
 * @typedef {Object} BlogPost
 * @property {string} id - 記事の一意のID
 * @property {string} slug - 記事のURLフレンドリーなスラッグ
 * @property {string} title - 記事のタイトル
 * @property {string} date - 記事の公開日 (YYYY-MM-DD形式)
 * @property {string} excerpt - 記事の抜粋
 * @property {string} content - 記事の全文 (Markdown形式)
 * @property {string[]} [categories] - 記事のカテゴリ配列 (オプション)
 * @property {string[]} [tags] - 記事のタグ配列 (オプション)
 */

/**
 * 全てのブログ記事をロードし、フロントマターとコンテンツを抽出する関数
 * @returns {BlogPost[]} ブログ記事のデータ配列
 */
export const loadPosts = () => {
  const posts = [];

  for (const path in markdownFiles) {
    const rawContent = markdownFiles[path];
    const { data, content } = matter(rawContent);

    // slugが定義されていない場合は、ファイル名から推測
    const slug = data.slug || path.split('/').pop().replace(/\.md$/, '');

    posts.push({
      id: data.id || slug, // idもスラッグから生成可能
      slug: slug,
      title: data.title || 'タイトルなし',
      date: data.date || '未定',
      excerpt: data.excerpt || content.substring(0, 150) + '...', // 抜粋がない場合はコンテンツの冒頭を使用
      content: content,
      categories: Array.isArray(data.categories) ? data.categories : [],
      tags: Array.isArray(data.tags) ? data.tags : [],
    });
  }

  // 日付で降順にソート (新しい記事が上に来るように)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return posts;
};

/**
 * 全てのカテゴリとそれに関連する記事数を取得する
 * @param {BlogPost[]} allPosts - 全てのブログ記事データ
 * @returns {Object.<string, number>} カテゴリ名と記事数のマップ
 */
export const getCategories = (allPosts) => {
  const categoriesMap = {};
  allPosts.forEach(post => {
    post.categories.forEach(category => {
      categoriesMap[category] = (categoriesMap[category] || 0) + 1;
    });
  });
  return categoriesMap;
};

/**
 * 全てのタグとそれに関連する記事数を取得する
 * @param {BlogPost[]} allPosts - 全てのブログ記事データ
 * @returns {Object.<string, number>} タグ名と記事数のマップ
 */
export const getTags = (allPosts) => {
  const tagsMap = {};
  allPosts.forEach(post => {
    post.tags.forEach(tag => {
      tagsMap[tag] = (tagsMap[tag] || 0) + 1;
    });
  });
  return tagsMap;
};

// 全記事を一度ロードしてエクスポート
export const posts = loadPosts();
export const allCategories = getCategories(posts);
export const allTags = getTags(posts);