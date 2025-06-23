<template>
  <div class="profile">
    <h1>エンジニアプロフィール</h1>
    <hr>
    <h2>自己紹介</h2>
    <p>
      こんにちは！私は、2017年から **自然言語処理（NLP）と大規模言語モデル（LLM）** を中心に扱うフルスタックエンジニアとして、要件定義からインフラ構築・運用まで一貫して担当してきました。
      直近では **診療サマリー作成システム** をオンプレミス／クラウド両方で構築し、文書作成時間を 90％以上短縮して 1 病院に本導入した実績があります。
      さらに、医療チャットボットや Web クローラ連動の音声認識システムなど、**医療・教育領域の AI プロダクト**を数多く開発してまいりました。
    </p>

    <h2>スキル</h2>
    <ul>
      <li>**フロントエンド:** Vue.js , React, JavaScript, TypeScript, HTML</li>
      <li>**バックエンド:** Java (Play Framework), Python (Flask, FastAPI)</li>
      <li>**データベース:** PostgreSQL, MySQL</li>
      <li>**クラウド & DevOps:** GCP (Compute Engine, App Engine, Cloud Run, Cloud Functions, Cloud Datastore, Batch), Docker, Git, GitHub Actions</li>
      <li>**ツール:** Vite, npm, slack, vscode</li>
    </ul>

    <h2>職務経験</h2>
    <h3>リードソフトウェアエンジニア - ABC Tech (2020年4月 - 現在)</h3>
    <ul>
      <li>新規SaaSプラットフォームのフロントエンドおよびバックエンド開発を主導。</li>
      <li>Vue.jsとNode.jsを使用して、高性能なRESTful APIとインタラクティブなUIを構築。</li>
      <li>開発チームの技術的リーダーとして、コードレビュー、技術選定、メンタリングを実施。</li>
    </ul>

    <h3>ソフトウェアエンジニア - XYZ Solutions (2017年7月 - 2020年3月)</h3>
    <ul>
      <li>顧客向けWebアプリケーションの開発と保守を担当。</li>
      <li>既存システムのパフォーマンス改善と新機能追加に貢献。</li>
    </ul>

    <h2>ポートフォリオ</h2>
    <ul>
      <li>
        <a href="https://github.com/your-github/project-one" target="_blank" rel="noopener noreferrer">プロジェクトA (GitHub)</a>:
        Vue 3とExpressで構築されたタスク管理アプリケーション。
      </li>
      <li>
        <a href="https://github.com/your-github/project-two" target="_blank" rel="noopener noreferrer">プロジェクトB (GitHub)</a>:
        ReactとDjango REST Frameworkを用いたブログシステム。
      </li>
      </ul>

    <h2>お問い合わせ</h2>
    <p>
      ご質問やご依頼がありましたら、お気軽にご連絡ください。<br>
      メール: <a href="mailto:youheitokage@gmail.com">youheitokage@gmail.com</a><br>
      GitHub: <a href="https://github.com/youtokage" target="_blank" rel="noopener noreferrer">github.com/youtokage</a><br>
      LinkedIn: <a href="https://www.linkedin.com/in/youtokage" target="_blank" rel="noopener noreferrer">linkedin.com/in/youtokage</a>
    </p>
  </div>
</template>

<script setup>
// プロフィールページは静的なコンテンツなので、特別なスクリプトは不要です。
</script>

<style scoped>
/* ProfileView.vue のスコープ付きスタイル */
.profile {
  padding: 20px;
}

.profile h1 {
  text-align: center;
  margin-bottom: 25px;
}

.profile h2 {
  margin-top: 30px;
  margin-bottom: 15px;
  color: #34495e;
}

.profile ul {
  list-style-type: disc;
  margin-left: 20px;
  margin-bottom: 20px;
}

.profile ul li {
  margin-bottom: 8px;
}

.profile ul li strong {
  color: #2c3e50;
}

.profile hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
  margin: 40px 0;
}

.profile p {
  margin-bottom: 15px;
}

.profile a {
  font-weight: bold;
}
</style>