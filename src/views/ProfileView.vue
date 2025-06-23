<template>
  <div class="profile">
    <h1>エンジニアプロフィール</h1>
    <hr>
    <h2>自己紹介</h2>
    <p>
      こんにちは！私は、2017年から <b>自然言語処理（NLP）と大規模言語モデル（LLM）</b> を中心に扱うフルスタックエンジニアとして、要件定義からインフラ構築・運用まで一貫して担当してきました。
      直近では <b>診療サマリー作成システム</b> をオンプレミス／クラウド両方で構築し、文書作成時間を 90％以上短縮して 1 病院に本導入した実績があります。
      さらに、医療チャットボットや Web クローラ連動の音声認識システムなど、<b>医療・教育領域の AI プロダクト</b>を数多く開発してまいりました。
    </p>

    <h2>スキル</h2>
    <ul>
      <li>フロントエンド: Vue.js , React, JavaScript, TypeScript, HTML</li>
      <li>バックエンド: Java (Play Framework), Python (Flask, FastAPI)</li>
      <li>データベース: PostgreSQL, MySQL</li>
      <li>クラウド & DevOps: GCP (Compute Engine, App Engine, Cloud Run, Cloud Functions, Cloud Datastore, Batch), Docker, Git, GitHub Actions</li>
      <li>ツール: Vite, npm, slack, VScode</li>
    </ul>

    <!-- <h2>職務経験</h2>
    <h3>フルスタックエンジニア - アイ・ビジネスセンター (2015年4月 - 2025年5月)</h3>
    <ul>
      <li>英会話学習 AI システム、医療問診チャットボット、診療サマリー作成システムなどを開発</li>
      <li>自然言語処理、機械学習、音声認識技術を駆使し、Python や Java を用いて Web アプリケーションや API を設計・実装</li>
      <li>クラウドプラットフォームを活用したインフラ構築や、LLM を用いた高度な対話システムを開発</li>
    </ul> -->

    <h2>ポートフォリオ</h2>
    <ul>
      <li>
        <a href="https://github.com/youtokage/My-Site" target="_blank" rel="noopener noreferrer">このサイト (GitHub)</a>:
        VueとViteでビルドしてGithub Pagesに静的ページとしてデプロイ。
      </li>
    </ul>

    <h2>お問い合わせ</h2>
    <p>
      ご質問やご依頼がありましたら、お気軽にご連絡ください。<br>
      メール: <a href="mailto:youheitokage@gmail.com">youheitokage@gmail.com</a><br>
      GitHub: <a href="https://github.com/youtokage" target="_blank" rel="noopener noreferrer">github.com/youtokage</a><br>
      <!-- LinkedIn: <a href="https://www.linkedin.com/in/youtokage" target="_blank" rel="noopener noreferrer">linkedin.com/in/youtokage</a> -->
    </p>
  </div>
</template>

<script setup>
</script>

<style scoped>
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