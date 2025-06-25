---
slug: openintro-statistics-ch2-summary
title: OpenIntro 統計学 Chapter 2 学習メモ
date: 2025-06-25
excerpt: 分布の形・ばらつき・カテゴリ比較・独立性検定など、Chapter 2 の要点を３分でおさらいします。
categories: [DataScience, Statistics, Study Notes]
tags: [OpenIntro, 統計学, データ可視化]
---

# 統計データの記述

今日は **OpenIntro 統計学 Chapter 2** の学習メモを共有します。

---

## この章は何に役立つ？

- データの「形」と「広がり」を素早くつかめます。
- ２つの変数が関係するか、直感だけでなく**統計的**に判定できます。
- 可視化で「説明しやすい資料」を作る力が身につきます。

---

## 基本概念を３点で整理

1. **分布の形** — 偏った長い尾は _skewed_。左右対称なら _symmetric_。
2. **ばらつきの指標** — 標準偏差は平均からの平均距離。外れ値に強い指標が IQR（四分位範囲）。
3. **独立性の検定** — シミュレーションで「偶然か否か」を確かめ、帰無仮説を判断。

---

## 数値データの可視化

ヒストグラムや箱ひげ図で**峰（mode）**と**尾（skewness）**を確認します。  
例えば、**コンビニのレジ待ち時間**は大半が短いが、ごくまれに長く並ぶ列があります。これは右裾が長い _right skewed_ の典型ですね。

---

### ばらつきを測る２本柱

| 指標         | 意味                   | ロバスト性   |
| ------------ | ---------------------- | ------------ |
| 標準偏差 (σ) | 「平均」からの平均距離 | 外れ値に弱い |
| IQR          | 25% 〜 75% の幅        | 外れ値に強い |

---

## カテゴリデータの可視化

- **棒グラフ**：シンプルな頻度比較。
- **積み重ね棒グラフ**：説明変数と目的変数が明確なとき便利。
- **モザイクプロット**：分割表を視覚化し、割合差を直感的に見せます。

---

## シミュレーションで独立性を検定

1. 帰無仮説 H0「２変数は無関係」を立てます。
2. ランダムに並べ替えたデータで差の分布を作成。
3. 元の差が分布の*端*にあれば、H0 を棄却し関連ありと判断します。

---

## まとめ

- **形・中心・ばらつき**の３点セットで分布を読む。
- 外れ値に左右されたくなければ**中央値と IQR**を使う。
- 関連の有無は**シミュレーション**で「偶然か否か」を数値化する。

---

## ネタバレ注意：演習問題の回答

ここから先に **2.1〜2.34の回答要約** が入ります。
私なりの回答であり、必ずしも正解であるとは限りません。  
自分で解きたい方は読まないでください。

<details>
<summary>クリックして表示</summary>

### 2.1 哺乳類の寿命

(a) Positive (b) 変わらずPositive、若干横長から若干縦長になる (c) 独立でない、正の相関（Positive）がある

### 2.2 関連性

(1) positive, linear (2) 関連なし (3) positive, non-linear (4) negative, linear

### 2.3 バクテリアの増殖

プロットのスケッチ -> ﾉ￣

<!-- 正解を見ると r￣ のようなグラフになっていた。バクテリアは指数関数的に増加すると思ってた。最大値 100 に向けて収束するのは納得する。 -->

### 2.4 オフィスの生産性

プロット -> ∩

### 2.5 パラメータと統計量

(a) 標本平均: $58, 母集団平均: $52
(b) 標本平均: GPA 3.59, 母集団平均: GPA 3.37

### 2.6 大学生の睡眠時間

標本平均: 6.25 hrs, 母集団平均: 5.5 hrs

### 2.7 鉱山工場での休日数

最も少なく有給休暇を取っている労働者を解雇すべき

### 2.8 中位数と四分位数

(a)
(1) median = 6, IQR = 2
(2) median = 6, IQR = 2
これらの統計量は等しい。（実際は 2 には大きな外れ値があるため、平均や標準偏差はより大きい）
(b)
(1) median = 6, IQR = 2
(2) median = 7, IQR = 3
観測値は近そうだが、 2 の方が偏差がやや大きい
(c)
(1) median = 3, IQR = 2
(2) median = 8, IQR = 2
観測値は 2 の方が大きいが、分布の形は似ている
(d)
(1) median = 50, IQR = 50
(2) median = 500, IQR = 500
2 は 1 の 10 倍ぐらいの観測値

### 2.9 平均と標準偏差

(a)
1 より 2 の方が平均はやや大きく、標準偏差は大きい。2 には 20 という外れ値がある。
(b)
1 より 2 の方が平均はやや小さく、標準偏差は大きい。2 には -40 という外れ値がある。
(c)
1 より 2 の方が平均は大きいが、標準偏差は等しい。1の分布を正にずらすと2になる。
(d)
1 と 2 の平均は等しいが、標準偏差は 2 の方が大きい。

### 2.10 分布と箱ひげ図

(a) synmetric で偏差が大きいので、(2)
(b) synmetric で偏差が小さいので、(3)
(a) right skewed なので、(1)

### 2.11 空気の質

(a) median: 25-30
(b) right skewed なので mean は median より高い
(c) Q1: 15-20, Q3: 40, IQR: 20-25
(d) median=30, IQR=25 と仮定すると、1.5 \* IQR = 37.5 となり、ひげの範囲は -7.5 から 67.5 となる。範囲外となる観測値はなさそうなので普通の標本である。

### 2.12 中央値と平均値

median: 80-85
left skewed なので平均は中央値より低い

### 2.13 ヒストグラムと箱ひげ図

ヒストグラムで分かる分布の特徴: bimodal であり、峰は 5 と 10-13 の 2 つ。
箱ひげ図で分かる分布の特徴: median は約 10 、22.5 より上に外れ値がある。

### 2.14 フェイスブックと友人

非常に right skewed であり、極少数には非常に多くの友人がいる。

### 2.15 分布と統計量: part1

(a)
愛好家は非常に多くのペットを飼っているが、一般的には 0-2 匹が多そうなので right skewed と推測。
上記の理由から中央値は 2 付近と推測、典型的データを表現している。
データの変動は IQR で表現され、愛好家はひげを超えた外れ値で表現される。

(b)
概ね徒歩から 1-2 駅ぐらいの距離だと思うが、途方もなく遠くから通勤する人もいそうなので right skewed と推測。
中央値が典型的データを表現している。
データの変動は IQR で表現され、遠くから通勤する人々はひげを超えた外れ値で表現される。

(c)
どんなに平均から遠くとも概ね 160-210 に収まりそうなので symmetric と推測。
平均が典型的データを表現している。
データの変動は標準偏差で表現される。

### 2.16 分布と統計量: part2

(a) right skewed, median, IQR
(b) symmetric, mean, std
(c) right skewed, median, IQR
(c) right skewed, median, IQR

### 2.17 コーヒーショップでの所得

(a) mean より median の方が変動が小さく、典型的な所得を表現していて、頑健性が高い
(b) std より IQR の方が変動が小さく、典型的な変動性を表現していて、頑健性が高い

### 2.18 中央範囲

ロバストではない。例えば 2.17 での midrange を計算すると、(1) は約 65000, (2) は約 155340 となり、大きく変動する。

### 2.19 通勤時間

(a) ほぼ symmetric で unimodal なので、対数変換する必要はない
(b) 東部は全体的に高く、西武は全体的に低い。ただ、西南部の一部の郡では通勤時間が非常に大きい。

### 2.20 ヒスパニックの人口

(a) 対数変換したデータはやや right skewed だが偏りが軽減したため利用したほうが良い
(b)
マップで分かる分布の特徴: 西南部にヒスパニック系が集中している
ヒストグラムで分かる分布の特徴: 中央値は 10% 付近である。
(c) 地形的に大きな偏りがあるため、マップでの可視化が有効である

### 2.21 子供と抗生物質

(a) 順序と相対頻度の大まかな数値
(b) 強いて言えば概観、例えば未熟と心血管で過半数を超えているなどが視覚的に分かる
(c) 棒グラフ

### 2.22 移民への意見

(a) 0.4087912087912088
(b) 0.3054945054945055
(c) 0.06263736263736264
(d) 保守: 0.1532258064516129, 中道: 0.3305785123966942, リベラル: 0.5771428571428572
(e) 保守は国外退去が多く、リベラルは移民権応募が多いので、関連性がある

### 2.23 ドリーム法への見解

リベラルでは支持が多く、保守と中道は半々であり、イデオロギーによって見解が異なるので関連性がある

### 2.24 税金の引き上げ

民主は富裕層への課税強化が多く、共和と無党派/その他はわからないとほぼ同数であり、税金の引き上げと政治イデオロギーは関連性がある

### 2.25 薬アバンディアの副作用

(a) ⅰ: 正しくない、母数を無視している,
ⅱ: 正しい,
ⅲ: 正しくない、観察研究なので因果関係は確率できない
ⅳ: 正しい
(b) 0.03506158517561552
(c) 2370 人
(d) ⅰ: H0=ロシグリタゾンと心臓への副作用は独立である, HA=ロシグリタゾンは心臓への副作用の増大と関連している
ⅱ: より多くの心血管障害が発生していて、HAを支持している,
ⅲ: 統計学的にロシグリタゾンの服用に心臓病のリスクを増大させる強い証拠があると結論づける

### 2.26 心臓移植

(a) 生存率は control より treatment で高くなっているので関連性がある
(b) 生存時間は control より treatment の方が中央値、IQR の面から明らかに長い
(c) treatment: 0.6521739130434783, control: 0.8823529411764706
(d) ⅰ: H0=心臓移植は寿命を長くすることと関連性はなく、独立である, HA=心臓移植は寿命を長くすることと関連性がある
ⅱ: 28 枚の生存, 75 枚の死亡, 69 枚を処理群, 34 枚を対照群, 0 の周りで分布を作成, どの程度の確率
ⅲ: 見なせる

### 2.27 追試

(a) 引き下げる (b) 73.6 (c) 平均との点差が標準偏差より大きいので増加

### 2.28 乳児死亡率

(a) Q1: 0-10, median: 10-20, Q3: 30-40 (b) right skewed なので mean > median

### 2.29 テレビの視聴時間

0h 付近に峰がある unimodal, right skewed な分布、際限なく視聴する学生がいそうなため。

### 2.30 新しい統計量

(a) symmetric (b) left skewed (c) right skewed

### 2.31 オスカー受賞者

女優の方が標準偏差が大きく、ヒストグラムでも 20-60 まで幅広く分布しているが、30 付近の尖度は高い。
男優の方が標準偏差が小さく、 40 付近の尖度が比較的低い。
両方とも unimodal, right skewed であり、80 付近に外れ値がありそう。

### 2.32 試験の成績

100 付近に峰がある left skewed な分布

### 2.33 統計学の成績

IQR = 10, 下ひげ = 57.5, 上ひげ = 97.5
最小値はぎりぎり外れ値であり、やや left skewed な分布であることが推測できるので有用である。

### 2.34 マラソン優勝者

(a) ヒストグラム: bimodal, right skewed、箱ひげ図: median は約 2.4 であり、 2.8h 以上の外れ値が複数ある
(b) 男性と女性で記録に差があるため、2.0 付近に男性、2.4付近に女性の記録が集まり bimodal となっている。
(c) 男性の median は約 2.2h 、女性の median は約 2.5h 、女性の方が分布の幅が広い
(d) 男性は 1975 年、女性は 1980 年まで記録が短縮している傾向にあったが、それ以降はそのまま推移している

</details>

## おまけ：Notebook

使用されていたデータについて、気の向くままに可視化しました。

<details>
<summary>クリックして表示</summary>

<!DOCTYPE html>

<html lang="en">
<head><meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>ch2</title><script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.10/require.min.js"></script>
<style type="text/css">
    pre { line-height: 125%; }
td.linenos .normal { color: inherit; background-color: transparent; padding-left: 5px; padding-right: 5px; }
span.linenos { color: inherit; background-color: transparent; padding-left: 5px; padding-right: 5px; }
td.linenos .special { color: #000000; background-color: #ffffc0; padding-left: 5px; padding-right: 5px; }
span.linenos.special { color: #000000; background-color: #ffffc0; padding-left: 5px; padding-right: 5px; }
.highlight .hll { background-color: var(--jp-cell-editor-active-background) }
.highlight { background: var(--jp-cell-editor-background); color: var(--jp-mirror-editor-variable-color) }
.highlight .c { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment */
.highlight .err { color: var(--jp-mirror-editor-error-color) } /* Error */
.highlight .k { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword */
.highlight .o { color: var(--jp-mirror-editor-operator-color); font-weight: bold } /* Operator */
.highlight .p { color: var(--jp-mirror-editor-punctuation-color) } /* Punctuation */
.highlight .ch { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Hashbang */
.highlight .cm { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Multiline */
.highlight .cp { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Preproc */
.highlight .cpf { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.PreprocFile */
.highlight .c1 { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Single */
.highlight .cs { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Special */
.highlight .kc { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Constant */
.highlight .kd { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Declaration */
.highlight .kn { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Namespace */
.highlight .kp { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Pseudo */
.highlight .kr { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Reserved */
.highlight .kt { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Type */
.highlight .m { color: var(--jp-mirror-editor-number-color) } /* Literal.Number */
.highlight .s { color: var(--jp-mirror-editor-string-color) } /* Literal.String */
.highlight .ow { color: var(--jp-mirror-editor-operator-color); font-weight: bold } /* Operator.Word */
.highlight .pm { color: var(--jp-mirror-editor-punctuation-color) } /* Punctuation.Marker */
.highlight .w { color: var(--jp-mirror-editor-variable-color) } /* Text.Whitespace */
.highlight .mb { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Bin */
.highlight .mf { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Float */
.highlight .mh { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Hex */
.highlight .mi { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Integer */
.highlight .mo { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Oct */
.highlight .sa { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Affix */
.highlight .sb { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Backtick */
.highlight .sc { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Char */
.highlight .dl { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Delimiter */
.highlight .sd { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Doc */
.highlight .s2 { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Double */
.highlight .se { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Escape */
.highlight .sh { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Heredoc */
.highlight .si { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Interpol */
.highlight .sx { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Other */
.highlight .sr { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Regex */
.highlight .s1 { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Single */
.highlight .ss { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Symbol */
.highlight .il { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Integer.Long */
  </style>
<style type="text/css">
/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/\*

- Mozilla scrollbar styling
  \*/

/_ use standard opaque scrollbars for most nodes _/
[data-jp-theme-scrollbars='true'] {
scrollbar-color: rgb(var(--jp-scrollbar-thumb-color))
var(--jp-scrollbar-background-color);
}

/\* for code nodes, use a transparent style of scrollbar. These selectors

- will match lower in the tree, and so will override the above \*/
  [data-jp-theme-scrollbars='true'] .CodeMirror-hscrollbar,
  [data-jp-theme-scrollbars='true'] .CodeMirror-vscrollbar {
  scrollbar-color: rgba(var(--jp-scrollbar-thumb-color), 0.5) transparent;
  }

/_ tiny scrollbar _/

.jp-scrollbar-tiny {
scrollbar-color: rgba(var(--jp-scrollbar-thumb-color), 0.5) transparent;
scrollbar-width: thin;
}

/_ tiny scrollbar _/

.jp-scrollbar-tiny::-webkit-scrollbar,
.jp-scrollbar-tiny::-webkit-scrollbar-corner {
background-color: transparent;
height: 4px;
width: 4px;
}

.jp-scrollbar-tiny::-webkit-scrollbar-thumb {
background: rgba(var(--jp-scrollbar-thumb-color), 0.5);
}

.jp-scrollbar-tiny::-webkit-scrollbar-track:horizontal {
border-left: 0 solid transparent;
border-right: 0 solid transparent;
}

.jp-scrollbar-tiny::-webkit-scrollbar-track:vertical {
border-top: 0 solid transparent;
border-bottom: 0 solid transparent;
}

/\*

- Lumino
  \*/

.lm-ScrollBar[data-orientation='horizontal'] {
min-height: 16px;
max-height: 16px;
min-width: 45px;
border-top: 1px solid #a0a0a0;
}

.lm-ScrollBar[data-orientation='vertical'] {
min-width: 16px;
max-width: 16px;
min-height: 45px;
border-left: 1px solid #a0a0a0;
}

.lm-ScrollBar-button {
background-color: #f0f0f0;
background-position: center center;
min-height: 15px;
max-height: 15px;
min-width: 15px;
max-width: 15px;
}

.lm-ScrollBar-button:hover {
background-color: #dadada;
}

.lm-ScrollBar-button.lm-mod-active {
background-color: #cdcdcd;
}

.lm-ScrollBar-track {
background: #f0f0f0;
}

.lm-ScrollBar-thumb {
background: #cdcdcd;
}

.lm-ScrollBar-thumb:hover {
background: #bababa;
}

.lm-ScrollBar-thumb.lm-mod-active {
background: #a0a0a0;
}

.lm-ScrollBar[data-orientation='horizontal'] .lm-ScrollBar-thumb {
height: 100%;
min-width: 15px;
border-left: 1px solid #a0a0a0;
border-right: 1px solid #a0a0a0;
}

.lm-ScrollBar[data-orientation='vertical'] .lm-ScrollBar-thumb {
width: 100%;
min-height: 15px;
border-top: 1px solid #a0a0a0;
border-bottom: 1px solid #a0a0a0;
}

.lm-ScrollBar[data-orientation='horizontal']
.lm-ScrollBar-button[data-action='decrement'] {
background-image: var(--jp-icon-caret-left);
background-size: 17px;
}

.lm-ScrollBar[data-orientation='horizontal']
.lm-ScrollBar-button[data-action='increment'] {
background-image: var(--jp-icon-caret-right);
background-size: 17px;
}

.lm-ScrollBar[data-orientation='vertical']
.lm-ScrollBar-button[data-action='decrement'] {
background-image: var(--jp-icon-caret-up);
background-size: 17px;
}

.lm-ScrollBar[data-orientation='vertical']
.lm-ScrollBar-button[data-action='increment'] {
background-image: var(--jp-icon-caret-down);
background-size: 17px;
}

/\*

- Copyright (c) Jupyter Development Team.
- Distributed under the terms of the Modified BSD License.
  \*/

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------_/

.lm-Widget {
box-sizing: border-box;
position: relative;
overflow: hidden;
}

.lm-Widget.lm-mod-hidden {
display: none !important;
}

/\*

- Copyright (c) Jupyter Development Team.
- Distributed under the terms of the Modified BSD License.
  \*/

.lm-AccordionPanel[data-orientation='horizontal'] > .lm-AccordionPanel-title {
/_ Title is rotated for horizontal accordion panel using CSS _/
display: block;
transform-origin: top left;
transform: rotate(-90deg) translate(-100%);
}

/\*

- Copyright (c) Jupyter Development Team.
- Distributed under the terms of the Modified BSD License.
  \*/

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------_/

.lm-CommandPalette {
display: flex;
flex-direction: column;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}

.lm-CommandPalette-search {
flex: 0 0 auto;
}

.lm-CommandPalette-content {
flex: 1 1 auto;
margin: 0;
padding: 0;
min-height: 0;
overflow: auto;
list-style-type: none;
}

.lm-CommandPalette-header {
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
}

.lm-CommandPalette-item {
display: flex;
flex-direction: row;
}

.lm-CommandPalette-itemIcon {
flex: 0 0 auto;
}

.lm-CommandPalette-itemContent {
flex: 1 1 auto;
overflow: hidden;
}

.lm-CommandPalette-itemShortcut {
flex: 0 0 auto;
}

.lm-CommandPalette-itemLabel {
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
}

.lm-close-icon {
border: 1px solid transparent;
background-color: transparent;
position: absolute;
z-index: 1;
right: 3%;
top: 0;
bottom: 0;
margin: auto;
padding: 7px 0;
display: none;
vertical-align: middle;
outline: 0;
cursor: pointer;
}
.lm-close-icon:after {
content: 'X';
display: block;
width: 15px;
height: 15px;
text-align: center;
color: #000;
font-weight: normal;
font-size: 12px;
cursor: pointer;
}

/\*

- Copyright (c) Jupyter Development Team.
- Distributed under the terms of the Modified BSD License.
  \*/

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------_/

.lm-DockPanel {
z-index: 0;
}

.lm-DockPanel-widget {
z-index: 0;
}

.lm-DockPanel-tabBar {
z-index: 1;
}

.lm-DockPanel-handle {
z-index: 2;
}

.lm-DockPanel-handle.lm-mod-hidden {
display: none !important;
}

.lm-DockPanel-handle:after {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
content: '';
}

.lm-DockPanel-handle[data-orientation='horizontal'] {
cursor: ew-resize;
}

.lm-DockPanel-handle[data-orientation='vertical'] {
cursor: ns-resize;
}

.lm-DockPanel-handle[data-orientation='horizontal']:after {
left: 50%;
min-width: 8px;
transform: translateX(-50%);
}

.lm-DockPanel-handle[data-orientation='vertical']:after {
top: 50%;
min-height: 8px;
transform: translateY(-50%);
}

.lm-DockPanel-overlay {
z-index: 3;
box-sizing: border-box;
pointer-events: none;
}

.lm-DockPanel-overlay.lm-mod-hidden {
display: none !important;
}

/\*

- Copyright (c) Jupyter Development Team.
- Distributed under the terms of the Modified BSD License.
  \*/

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------_/

.lm-Menu {
z-index: 10000;
position: absolute;
white-space: nowrap;
overflow-x: hidden;
overflow-y: auto;
outline: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}

.lm-Menu-content {
margin: 0;
padding: 0;
display: table;
list-style-type: none;
}

.lm-Menu-item {
display: table-row;
}

.lm-Menu-item.lm-mod-hidden,
.lm-Menu-item.lm-mod-collapsed {
display: none !important;
}

.lm-Menu-itemIcon,
.lm-Menu-itemSubmenuIcon {
display: table-cell;
text-align: center;
}

.lm-Menu-itemLabel {
display: table-cell;
text-align: left;
}

.lm-Menu-itemShortcut {
display: table-cell;
text-align: right;
}

/\*

- Copyright (c) Jupyter Development Team.
- Distributed under the terms of the Modified BSD License.
  \*/

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------_/

.lm-MenuBar {
outline: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}

.lm-MenuBar-content {
margin: 0;
padding: 0;
display: flex;
flex-direction: row;
list-style-type: none;
}

.lm-MenuBar-item {
box-sizing: border-box;
}

.lm-MenuBar-itemIcon,
.lm-MenuBar-itemLabel {
display: inline-block;
}

/\*

- Copyright (c) Jupyter Development Team.
- Distributed under the terms of the Modified BSD License.
  \*/

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------_/

.lm-ScrollBar {
display: flex;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}

.lm-ScrollBar[data-orientation='horizontal'] {
flex-direction: row;
}

.lm-ScrollBar[data-orientation='vertical'] {
flex-direction: column;
}

.lm-ScrollBar-button {
box-sizing: border-box;
flex: 0 0 auto;
}

.lm-ScrollBar-track {
box-sizing: border-box;
position: relative;
overflow: hidden;
flex: 1 1 auto;
}

.lm-ScrollBar-thumb {
box-sizing: border-box;
position: absolute;
}

/\*

- Copyright (c) Jupyter Development Team.
- Distributed under the terms of the Modified BSD License.
  \*/

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------_/

.lm-SplitPanel-child {
z-index: 0;
}

.lm-SplitPanel-handle {
z-index: 1;
}

.lm-SplitPanel-handle.lm-mod-hidden {
display: none !important;
}

.lm-SplitPanel-handle:after {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
content: '';
}

.lm-SplitPanel[data-orientation='horizontal'] > .lm-SplitPanel-handle {
cursor: ew-resize;
}

.lm-SplitPanel[data-orientation='vertical'] > .lm-SplitPanel-handle {
cursor: ns-resize;
}

.lm-SplitPanel[data-orientation='horizontal'] > .lm-SplitPanel-handle:after {
left: 50%;
min-width: 8px;
transform: translateX(-50%);
}

.lm-SplitPanel[data-orientation='vertical'] > .lm-SplitPanel-handle:after {
top: 50%;
min-height: 8px;
transform: translateY(-50%);
}

/\*

- Copyright (c) Jupyter Development Team.
- Distributed under the terms of the Modified BSD License.
  \*/

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------_/

.lm-TabBar {
display: flex;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}

.lm-TabBar[data-orientation='horizontal'] {
flex-direction: row;
align-items: flex-end;
}

.lm-TabBar[data-orientation='vertical'] {
flex-direction: column;
align-items: flex-end;
}

.lm-TabBar-content {
margin: 0;
padding: 0;
display: flex;
flex: 1 1 auto;
list-style-type: none;
}

.lm-TabBar[data-orientation='horizontal'] > .lm-TabBar-content {
flex-direction: row;
}

.lm-TabBar[data-orientation='vertical'] > .lm-TabBar-content {
flex-direction: column;
}

.lm-TabBar-tab {
display: flex;
flex-direction: row;
box-sizing: border-box;
overflow: hidden;
touch-action: none; /_ Disable native Drag/Drop _/
}

.lm-TabBar-tabIcon,
.lm-TabBar-tabCloseIcon {
flex: 0 0 auto;
}

.lm-TabBar-tabLabel {
flex: 1 1 auto;
overflow: hidden;
white-space: nowrap;
}

.lm-TabBar-tabInput {
user-select: all;
width: 100%;
box-sizing: border-box;
}

.lm-TabBar-tab.lm-mod-hidden {
display: none !important;
}

.lm-TabBar-addButton.lm-mod-hidden {
display: none !important;
}

.lm-TabBar.lm-mod-dragging .lm-TabBar-tab {
position: relative;
}

.lm-TabBar.lm-mod-dragging[data-orientation='horizontal'] .lm-TabBar-tab {
left: 0;
transition: left 150ms ease;
}

.lm-TabBar.lm-mod-dragging[data-orientation='vertical'] .lm-TabBar-tab {
top: 0;
transition: top 150ms ease;
}

.lm-TabBar.lm-mod-dragging .lm-TabBar-tab.lm-mod-dragging {
transition: none;
}

.lm-TabBar-tabLabel .lm-TabBar-tabInput {
user-select: all;
width: 100%;
box-sizing: border-box;
background: inherit;
}

/\*

- Copyright (c) Jupyter Development Team.
- Distributed under the terms of the Modified BSD License.
  \*/

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------_/

.lm-TabPanel-tabBar {
z-index: 1;
}

.lm-TabPanel-stackedPanel {
z-index: 0;
}

/\*

- Copyright (c) Jupyter Development Team.
- Distributed under the terms of the Modified BSD License.
  \*/

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------_/

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

.jp-Collapse {
display: flex;
flex-direction: column;
align-items: stretch;
}

.jp-Collapse-header {
padding: 1px 12px;
background-color: var(--jp-layout-color1);
border-bottom: solid var(--jp-border-width) var(--jp-border-color2);
color: var(--jp-ui-font-color1);
cursor: pointer;
display: flex;
align-items: center;
font-size: var(--jp-ui-font-size0);
font-weight: 600;
text-transform: uppercase;
user-select: none;
}

.jp-Collapser-icon {
height: 16px;
}

.jp-Collapse-header-collapsed .jp-Collapser-icon {
transform: rotate(-90deg);
margin: auto 0;
}

.jp-Collapser-title {
line-height: 25px;
}

.jp-Collapse-contents {
padding: 0 12px;
background-color: var(--jp-layout-color1);
color: var(--jp-ui-font-color1);
overflow: auto;
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

/_ This file was auto-generated by ensureUiComponents() in @jupyterlab/buildutils _/

/\*\*

- (DEPRECATED) Support for consuming icons as CSS background images
  \*/

/_ Icons urls _/

:root {
--jp-icon-add-above: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEzN18xOTQ5MikiPgo8cGF0aCBjbGFzcz0ianAtaWNvbjMiIGQ9Ik00Ljc1IDQuOTMwNjZINi42MjVWNi44MDU2NkM2LjYyNSA3LjAxMTkxIDYuNzkzNzUgNy4xODA2NiA3IDcuMTgwNjZDNy4yMDYyNSA3LjE4MDY2IDcuMzc1IDcuMDExOTEgNy4zNzUgNi44MDU2NlY0LjkzMDY2SDkuMjVDOS40NTYyNSA0LjkzMDY2IDkuNjI1IDQuNzYxOTEgOS42MjUgNC41NTU2NkM5LjYyNSA0LjM0OTQxIDkuNDU2MjUgNC4xODA2NiA5LjI1IDQuMTgwNjZINy4zNzVWMi4zMDU2NkM3LjM3NSAyLjA5OTQxIDcuMjA2MjUgMS45MzA2NiA3IDEuOTMwNjZDNi43OTM3NSAxLjkzMDY2IDYuNjI1IDIuMDk5NDEgNi42MjUgMi4zMDU2NlY0LjE4MDY2SDQuNzVDNC41NDM3NSA0LjE4MDY2IDQuMzc1IDQuMzQ5NDEgNC4zNzUgNC41NTU2NkM0LjM3NSA0Ljc2MTkxIDQuNTQzNzUgNC45MzA2NiA0Ljc1IDQuOTMwNjZaIiBmaWxsPSIjNjE2MTYxIiBzdHJva2U9IiM2MTYxNjEiIHN0cm9rZS13aWR0aD0iMC43Ii8+CjwvZz4KPHBhdGggY2xhc3M9ImpwLWljb24zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjUgOS41VjExLjVMMi41IDExLjVWOS41TDExLjUgOS41Wk0xMiA4QzEyLjU1MjMgOCAxMyA4LjQ0NzcyIDEzIDlWMTJDMTMgMTIuNTUyMyAxMi41NTIzIDEzIDEyIDEzTDIgMTNDMS40NDc3MiAxMyAxIDEyLjU1MjMgMSAxMlY5QzEgOC40NDc3MiAxLjQ0NzcxIDggMiA4TDEyIDhaIiBmaWxsPSIjNjE2MTYxIi8+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzEzN18xOTQ5MiI+CjxyZWN0IGNsYXNzPSJqcC1pY29uMyIgd2lkdGg9IjYiIGhlaWdodD0iNiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDEwIDEuNTU1NjYpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==);
--jp-icon-add-below: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEzN18xOTQ5OCkiPgo8cGF0aCBjbGFzcz0ianAtaWNvbjMiIGQ9Ik05LjI1IDEwLjA2OTNMNy4zNzUgMTAuMDY5M0w3LjM3NSA4LjE5NDM0QzcuMzc1IDcuOTg4MDkgNy4yMDYyNSA3LjgxOTM0IDcgNy44MTkzNEM2Ljc5Mzc1IDcuODE5MzQgNi42MjUgNy45ODgwOSA2LjYyNSA4LjE5NDM0TDYuNjI1IDEwLjA2OTNMNC43NSAxMC4wNjkzQzQuNTQzNzUgMTAuMDY5MyA0LjM3NSAxMC4yMzgxIDQuMzc1IDEwLjQ0NDNDNC4zNzUgMTAuNjUwNiA0LjU0Mzc1IDEwLjgxOTMgNC43NSAxMC44MTkzTDYuNjI1IDEwLjgxOTNMNi42MjUgMTIuNjk0M0M2LjYyNSAxMi45MDA2IDYuNzkzNzUgMTMuMDY5MyA3IDEzLjA2OTNDNy4yMDYyNSAxMy4wNjkzIDcuMzc1IDEyLjkwMDYgNy4zNzUgMTIuNjk0M0w3LjM3NSAxMC44MTkzTDkuMjUgMTAuODE5M0M5LjQ1NjI1IDEwLjgxOTMgOS42MjUgMTAuNjUwNiA5LjYyNSAxMC40NDQzQzkuNjI1IDEwLjIzODEgOS40NTYyNSAxMC4wNjkzIDkuMjUgMTAuMDY5M1oiIGZpbGw9IiM2MTYxNjEiIHN0cm9rZT0iIzYxNjE2MSIgc3Ryb2tlLXdpZHRoPSIwLjciLz4KPC9nPgo8cGF0aCBjbGFzcz0ianAtaWNvbjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi41IDUuNUwyLjUgMy41TDExLjUgMy41TDExLjUgNS41TDIuNSA1LjVaTTIgN0MxLjQ0NzcyIDcgMSA2LjU1MjI4IDEgNkwxIDNDMSAyLjQ0NzcyIDEuNDQ3NzIgMiAyIDJMMTIgMkMxMi41NTIzIDIgMTMgMi40NDc3MiAxMyAzTDEzIDZDMTMgNi41NTIyOSAxMi41NTIzIDcgMTIgN0wyIDdaIiBmaWxsPSIjNjE2MTYxIi8+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzEzN18xOTQ5OCI+CjxyZWN0IGNsYXNzPSJqcC1pY29uMyIgd2lkdGg9IjYiIGhlaWdodD0iNiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0ibWF0cml4KDEgMS43NDg0NmUtMDcgMS43NDg0NmUtMDcgLTEgNCAxMy40NDQzKSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=);
--jp-icon-add: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
--jp-icon-bell: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiB2ZXJzaW9uPSIxLjEiPgogICA8cGF0aCBjbGFzcz0ianAtaWNvbjIganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMzMzMzMzIgogICAgICBkPSJtOCAwLjI5Yy0xLjQgMC0yLjcgMC43My0zLjYgMS44LTEuMiAxLjUtMS40IDMuNC0xLjUgNS4yLTAuMTggMi4yLTAuNDQgNC0yLjMgNS4zbDAuMjggMS4zaDVjMC4wMjYgMC42NiAwLjMyIDEuMSAwLjcxIDEuNSAwLjg0IDAuNjEgMiAwLjYxIDIuOCAwIDAuNTItMC40IDAuNi0xIDAuNzEtMS41aDVsMC4yOC0xLjNjLTEuOS0wLjk3LTIuMi0zLjMtMi4zLTUuMy0wLjEzLTEuOC0wLjI2LTMuNy0xLjUtNS4yLTAuODUtMS0yLjItMS44LTMuNi0xLjh6bTAgMS40YzAuODggMCAxLjkgMC41NSAyLjUgMS4zIDAuODggMS4xIDEuMSAyLjcgMS4yIDQuNCAwLjEzIDEuNyAwLjIzIDMuNiAxLjMgNS4yaC0xMGMxLjEtMS42IDEuMi0zLjQgMS4zLTUuMiAwLjEzLTEuNyAwLjMtMy4zIDEuMi00LjQgMC41OS0wLjcyIDEuNi0xLjMgMi41LTEuM3ptLTAuNzQgMTJoMS41Yy0wLjAwMTUgMC4yOCAwLjAxNSAwLjc5LTAuNzQgMC43OS0wLjczIDAuMDAxNi0wLjcyLTAuNTMtMC43NC0wLjc5eiIgLz4KPC9zdmc+Cg==);
--jp-icon-bug-dot: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiM2MTYxNjEiPgogICAgICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTcuMTkgOEgyMFYxMEgxNy45MUMxNy45NiAxMC4zMyAxOCAxMC42NiAxOCAxMVYxMkgyMFYxNEgxOC41SDE4VjE0LjAyNzVDMTUuNzUgMTQuMjc2MiAxNCAxNi4xODM3IDE0IDE4LjVDMTQgMTkuMjA4IDE0LjE2MzUgMTkuODc3OSAxNC40NTQ5IDIwLjQ3MzlDMTMuNzA2MyAyMC44MTE3IDEyLjg3NTcgMjEgMTIgMjFDOS43OCAyMSA3Ljg1IDE5Ljc5IDYuODEgMThINFYxNkg2LjA5QzYuMDQgMTUuNjcgNiAxNS4zNCA2IDE1VjE0SDRWMTJINlYxMUM2IDEwLjY2IDYuMDQgMTAuMzMgNi4wOSAxMEg0VjhINi44MUM3LjI2IDcuMjIgNy44OCA2LjU1IDguNjIgNi4wNEw3IDQuNDFMOC40MSAzTDEwLjU5IDUuMTdDMTEuMDQgNS4wNiAxMS41MSA1IDEyIDVDMTIuNDkgNSAxMi45NiA1LjA2IDEzLjQyIDUuMTdMMTUuNTkgM0wxNyA0LjQxTDE1LjM3IDYuMDRDMTYuMTIgNi41NSAxNi43NCA3LjIyIDE3LjE5IDhaTTEwIDE2SDE0VjE0SDEwVjE2Wk0xMCAxMkgxNFYxMEgxMFYxMloiIGZpbGw9IiM2MTYxNjEiLz4KICAgICAgICA8cGF0aCBkPSJNMjIgMTguNUMyMiAyMC40MzMgMjAuNDMzIDIyIDE4LjUgMjJDMTYuNTY3IDIyIDE1IDIwLjQzMyAxNSAxOC41QzE1IDE2LjU2NyAxNi41NjcgMTUgMTguNSAxNUMyMC40MzMgMTUgMjIgMTYuNTY3IDIyIDE4LjVaIiBmaWxsPSIjNjE2MTYxIi8+CiAgICA8L2c+Cjwvc3ZnPgo=);
--jp-icon-bug: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxwYXRoIGQ9Ik0yMCA4aC0yLjgxYy0uNDUtLjc4LTEuMDctMS40NS0xLjgyLTEuOTZMMTcgNC40MSAxNS41OSAzbC0yLjE3IDIuMTdDMTIuOTYgNS4wNiAxMi40OSA1IDEyIDVjLS40OSAwLS45Ni4wNi0xLjQxLjE3TDguNDEgMyA3IDQuNDFsMS42MiAxLjYzQzcuODggNi41NSA3LjI2IDcuMjIgNi44MSA4SDR2MmgyLjA5Yy0uMDUuMzMtLjA5LjY2LS4wOSAxdjFINHYyaDJ2MWMwIC4zNC4wNC42Ny4wOSAxSDR2MmgyLjgxYzEuMDQgMS43OSAyLjk3IDMgNS4xOSAzczQuMTUtMS4yMSA1LjE5LTNIMjB2LTJoLTIuMDljLjA1LS4zMy4wOS0uNjYuMDktMXYtMWgydi0yaC0ydi0xYzAtLjM0LS4wNC0uNjctLjA5LTFIMjBWOHptLTYgOGgtNHYtMmg0djJ6bTAtNGgtNHYtMmg0djJ6Ii8+CiAgPC9nPgo8L3N2Zz4K);
--jp-icon-build: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE0LjkgMTcuNDVDMTYuMjUgMTcuNDUgMTcuMzUgMTYuMzUgMTcuMzUgMTVDMTcuMzUgMTMuNjUgMTYuMjUgMTIuNTUgMTQuOSAxMi41NUMxMy41NCAxMi41NSAxMi40NSAxMy42NSAxMi40NSAxNUMxMi40NSAxNi4zNSAxMy41NCAxNy40NSAxNC45IDE3LjQ1Wk0yMC4xIDE1LjY4TDIxLjU4IDE2Ljg0QzIxLjcxIDE2Ljk1IDIxLjc1IDE3LjEzIDIxLjY2IDE3LjI5TDIwLjI2IDE5LjcxQzIwLjE3IDE5Ljg2IDIwIDE5LjkyIDE5LjgzIDE5Ljg2TDE4LjA5IDE5LjE2QzE3LjczIDE5LjQ0IDE3LjMzIDE5LjY3IDE2LjkxIDE5Ljg1TDE2LjY0IDIxLjdDMTYuNjIgMjEuODcgMTYuNDcgMjIgMTYuMyAyMkgxMy41QzEzLjMyIDIyIDEzLjE4IDIxLjg3IDEzLjE1IDIxLjdMMTIuODkgMTkuODVDMTIuNDYgMTkuNjcgMTIuMDcgMTkuNDQgMTEuNzEgMTkuMTZMOS45NjAwMiAxOS44NkM5LjgxMDAyIDE5LjkyIDkuNjIwMDIgMTkuODYgOS41NDAwMiAxOS43MUw4LjE0MDAyIDE3LjI5QzguMDUwMDIgMTcuMTMgOC4wOTAwMiAxNi45NSA4LjIyMDAyIDE2Ljg0TDkuNzAwMDIgMTUuNjhMOS42NTAwMSAxNUw5LjcwMDAyIDE0LjMxTDguMjIwMDIgMTMuMTZDOC4wOTAwMiAxMy4wNSA4LjA1MDAyIDEyLjg2IDguMTQwMDIgMTIuNzFMOS41NDAwMiAxMC4yOUM5LjYyMDAyIDEwLjEzIDkuODEwMDIgMTAuMDcgOS45NjAwMiAxMC4xM0wxMS43MSAxMC44NEMxMi4wNyAxMC41NiAxMi40NiAxMC4zMiAxMi44OSAxMC4xNUwxMy4xNSA4LjI4OTk4QzEzLjE4IDguMTI5OTggMTMuMzIgNy45OTk5OCAxMy41IDcuOTk5OThIMTYuM0MxNi40NyA3Ljk5OTk4IDE2LjYyIDguMTI5OTggMTYuNjQgOC4yODk5OEwxNi45MSAxMC4xNUMxNy4zMyAxMC4zMiAxNy43MyAxMC41NiAxOC4wOSAxMC44NEwxOS44MyAxMC4xM0MyMCAxMC4wNyAyMC4xNyAxMC4xMyAyMC4yNiAxMC4yOUwyMS42NiAxMi43MUMyMS43NSAxMi44NiAyMS43MSAxMy4wNSAyMS41OCAxMy4xNkwyMC4xIDE0LjMxTDIwLjE1IDE1TDIwLjEgMTUuNjhaIi8+CiAgICA8cGF0aCBkPSJNNy4zMjk2NiA3LjQ0NDU0QzguMDgzMSA3LjAwOTU0IDguMzM5MzIgNi4wNTMzMiA3LjkwNDMyIDUuMjk5ODhDNy40NjkzMiA0LjU0NjQzIDYuNTA4MSA0LjI4MTU2IDUuNzU0NjYgNC43MTY1NkM1LjM5MTc2IDQuOTI2MDggNS4xMjY5NSA1LjI3MTE4IDUuMDE4NDkgNS42NzU5NEM0LjkxMDA0IDYuMDgwNzEgNC45NjY4MiA2LjUxMTk4IDUuMTc2MzQgNi44NzQ4OEM1LjYxMTM0IDcuNjI4MzIgNi41NzYyMiA3Ljg3OTU0IDcuMzI5NjYgNy40NDQ1NFpNOS42NTcxOCA0Ljc5NTkzTDEwLjg2NzIgNC45NTE3OUMxMC45NjI4IDQuOTc3NDEgMTEuMDQwMiA1LjA3MTMzIDExLjAzODIgNS4xODc5M0wxMS4wMzg4IDYuOTg4OTNDMTEuMDQ1NSA3LjEwMDU0IDEwLjk2MTYgNy4xOTUxOCAxMC44NTUgNy4yMTA1NEw5LjY2MDAxIDcuMzgwODNMOS4yMzkxNSA4LjEzMTg4TDkuNjY5NjEgOS4yNTc0NUM5LjcwNzI5IDkuMzYyNzEgOS42NjkzNCA5LjQ3Njk5IDkuNTc0MDggOS41MzE5OUw4LjAxNTIzIDEwLjQzMkM3LjkxMTMxIDEwLjQ5MiA3Ljc5MzM3IDEwLjQ2NzcgNy43MjEwNSAxMC4zODI0TDYuOTg3NDggOS40MzE4OEw2LjEwOTMxIDkuNDMwODNMNS4zNDcwNCAxMC4zOTA1QzUuMjg5MDkgMTAuNDcwMiA1LjE3MzgzIDEwLjQ5MDUgNS4wNzE4NyAxMC40MzM5TDMuNTEyNDUgOS41MzI5M0MzLjQxMDQ5IDkuNDc2MzMgMy4zNzY0NyA5LjM1NzQxIDMuNDEwNzUgOS4yNTY3OUwzLjg2MzQ3IDguMTQwOTNMMy42MTc0OSA3Ljc3NDg4TDMuNDIzNDcgNy4zNzg4M0wyLjIzMDc1IDcuMjEyOTdDMi4xMjY0NyA3LjE5MjM1IDIuMDQwNDkgNy4xMDM0MiAyLjA0MjQ1IDYuOTg2ODJMMi4wNDE4NyA1LjE4NTgyQzIuMDQzODMgNS4wNjkyMiAyLjExOTA5IDQuOTc5NTggMi4yMTcwNCA0Ljk2OTIyTDMuNDIwNjUgNC43OTM5M0wzLjg2NzQ5IDQuMDI3ODhMMy40MTEwNSAyLjkxNzMxQzMuMzczMzcgMi44MTIwNCAzLjQxMTMxIDIuNjk3NzYgMy41MTUyMyAyLjYzNzc2TDUuMDc0MDggMS43Mzc3NkM1LjE2OTM0IDEuNjgyNzYgNS4yODcyOSAxLjcwNzA0IDUuMzU5NjEgMS43OTIzMUw2LjExOTE1IDIuNzI3ODhMNi45ODAwMSAyLjczODkzTDcuNzI0OTYgMS43ODkyMkM3Ljc5MTU2IDEuNzA0NTggNy45MTU0OCAxLjY3OTIyIDguMDA4NzkgMS43NDA4Mkw5LjU2ODIxIDIuNjQxODJDOS42NzAxNyAyLjY5ODQyIDkuNzEyODUgMi44MTIzNCA5LjY4NzIzIDIuOTA3OTdMOS4yMTcxOCA0LjAzMzgzTDkuNDYzMTYgNC4zOTk4OEw5LjY1NzE4IDQuNzk1OTNaIi8+CiAgPC9nPgo8L3N2Zz4K);
--jp-icon-caret-down-empty-thin: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iOS45LDEzLjYgMy42LDcuNCA0LjQsNi42IDkuOSwxMi4yIDE1LjQsNi43IDE2LjEsNy40ICIvPgoJPC9nPgo8L3N2Zz4K);
--jp-icon-caret-down-empty: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik01LjIsNS45TDksOS43bDMuOC0zLjhsMS4yLDEuMmwtNC45LDVsLTQuOS01TDUuMiw1Ljl6Ii8+CiAgPC9nPgo8L3N2Zz4K);
--jp-icon-caret-down: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik01LjIsNy41TDksMTEuMmwzLjgtMy44SDUuMnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
--jp-icon-caret-left: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwYXRoIGQ9Ik0xMC44LDEyLjhMNy4xLDlsMy44LTMuOGwwLDcuNkgxMC44eiIvPgogIDwvZz4KPC9zdmc+Cg==);
--jp-icon-caret-right: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik03LjIsNS4yTDEwLjksOWwtMy44LDMuOFY1LjJINy4yeiIvPgogIDwvZz4KPC9zdmc+Cg==);
--jp-icon-caret-up-empty-thin: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMTUuNCwxMy4zIDkuOSw3LjcgNC40LDEzLjIgMy42LDEyLjUgOS45LDYuMyAxNi4xLDEyLjYgIi8+Cgk8L2c+Cjwvc3ZnPgo=);
--jp-icon-caret-up: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwYXRoIGQ9Ik01LjIsMTAuNUw5LDYuOGwzLjgsMy44SDUuMnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
--jp-icon-case-sensitive: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0MTQxNDEiPgogICAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+CiAgPC9nPgogIDxnIGNsYXNzPSJqcC1pY29uLWFjY2VudDIiIGZpbGw9IiNGRkYiPgogICAgPHBhdGggZD0iTTcuNiw4aDAuOWwzLjUsOGgtMS4xTDEwLDE0SDZsLTAuOSwySDRMNy42LDh6IE04LDkuMUw2LjQsMTNoMy4yTDgsOS4xeiIvPgogICAgPHBhdGggZD0iTTE2LjYsOS44Yy0wLjIsMC4xLTAuNCwwLjEtMC43LDAuMWMtMC4yLDAtMC40LTAuMS0wLjYtMC4yYy0wLjEtMC4xLTAuMi0wLjQtMC4yLTAuNyBjLTAuMywwLjMtMC42LDAuNS0wLjksMC43Yy0wLjMsMC4xLTAuNywwLjItMS4xLDAuMmMtMC4zLDAtMC41LDAtMC43LTAuMWMtMC4yLTAuMS0wLjQtMC4yLTAuNi0wLjNjLTAuMi0wLjEtMC4zLTAuMy0wLjQtMC41IGMtMC4xLTAuMi0wLjEtMC40LTAuMS0wLjdjMC0wLjMsMC4xLTAuNiwwLjItMC44YzAuMS0wLjIsMC4zLTAuNCwwLjQtMC41QzEyLDcsMTIuMiw2LjksMTIuNSw2LjhjMC4yLTAuMSwwLjUtMC4xLDAuNy0wLjIgYzAuMy0wLjEsMC41LTAuMSwwLjctMC4xYzAuMiwwLDAuNC0wLjEsMC42LTAuMWMwLjIsMCwwLjMtMC4xLDAuNC0wLjJjMC4xLTAuMSwwLjItMC4yLDAuMi0wLjRjMC0xLTEuMS0xLTEuMy0xIGMtMC40LDAtMS40LDAtMS40LDEuMmgtMC45YzAtMC40LDAuMS0wLjcsMC4yLTFjMC4xLTAuMiwwLjMtMC40LDAuNS0wLjZjMC4yLTAuMiwwLjUtMC4zLDAuOC0wLjNDMTMuMyw0LDEzLjYsNCwxMy45LDQgYzAuMywwLDAuNSwwLDAuOCwwLjFjMC4zLDAsMC41LDAuMSwwLjcsMC4yYzAuMiwwLjEsMC40LDAuMywwLjUsMC41QzE2LDUsMTYsNS4yLDE2LDUuNnYyLjljMCwwLjIsMCwwLjQsMCwwLjUgYzAsMC4xLDAuMSwwLjIsMC4zLDAuMmMwLjEsMCwwLjIsMCwwLjMsMFY5Ljh6IE0xNS4yLDYuOWMtMS4yLDAuNi0zLjEsMC4yLTMuMSwxLjRjMCwxLjQsMy4xLDEsMy4xLTAuNVY2Ljl6Ii8+CiAgPC9nPgo8L3N2Zz4K);
--jp-icon-check: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxwYXRoIGQ9Ik05IDE2LjE3TDQuODMgMTJsLTEuNDIgMS40MUw5IDE5IDIxIDdsLTEuNDEtMS40MXoiLz4KICA8L2c+Cjwvc3ZnPgo=);
--jp-icon-circle-empty: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyIDJDNi40NyAyIDIgNi40NyAyIDEyczQuNDcgMTAgMTAgMTAgMTAtNC40NyAxMC0xMFMxNy41MyAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4eiIvPgogIDwvZz4KPC9zdmc+Cg==);
--jp-icon-circle: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjgiLz4KICA8L2c+Cjwvc3ZnPgo=);
--jp-icon-clear: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8bWFzayBpZD0iZG9udXRIb2xlIj4KICAgIDxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiIC8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI4IiBmaWxsPSJibGFjayIvPgogIDwvbWFzaz4KCiAgPGcgY2xhc3M9ImpwLWljb24zIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxyZWN0IGhlaWdodD0iMTgiIHdpZHRoPSIyIiB4PSIxMSIgeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMzE1LCAxMiwgMTIpIi8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgbWFzaz0idXJsKCNkb251dEhvbGUpIi8+CiAgPC9nPgo8L3N2Zz4K);
--jp-icon-close: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbi1ub25lIGpwLWljb24tc2VsZWN0YWJsZS1pbnZlcnNlIGpwLWljb24zLWhvdmVyIiBmaWxsPSJub25lIj4KICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjExIi8+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIGpwLWljb24tYWNjZW50Mi1ob3ZlciIgZmlsbD0iIzYxNjE2MSI+CiAgICA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPgogIDwvZz4KCiAgPGcgY2xhc3M9ImpwLWljb24tbm9uZSBqcC1pY29uLWJ1c3kiIGZpbGw9Im5vbmUiPgogICAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNyIvPgogIDwvZz4KPC9zdmc+Cg==);
--jp-icon-code-check: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+CiAgICA8cGF0aCBkPSJNNi41OSwzLjQxTDIsOEw2LjU5LDEyLjZMOCwxMS4xOEw0LjgyLDhMOCw0LjgyTDYuNTksMy40MU0xMi40MSwzLjQxTDExLDQuODJMMTQuMTgsOEwxMSwxMS4xOEwxMi40MSwxMi42TDE3LDhMMTIuNDEsMy40MU0yMS41OSwxMS41OUwxMy41LDE5LjY4TDkuODMsMTZMOC40MiwxNy40MUwxMy41LDIyLjVMMjMsMTNMMjEuNTksMTEuNTlaIiAvPgogIDwvZz4KPC9zdmc+Cg==);
--jp-icon-code: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyOCAyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CgkJPHBhdGggZD0iTTExLjQgMTguNkw2LjggMTRMMTEuNCA5LjRMMTAgOEw0IDE0TDEwIDIwTDExLjQgMTguNlpNMTYuNiAxOC42TDIxLjIgMTRMMTYuNiA5LjRMMTggOEwyNCAxNEwxOCAyMEwxNi42IDE4LjZWMTguNloiLz4KCTwvZz4KPC9zdmc+Cg==);
--jp-icon-collapse-all: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTggMmMxIDAgMTEgMCAxMiAwczIgMSAyIDJjMCAxIDAgMTEgMCAxMnMwIDItMiAyQzIwIDE0IDIwIDQgMjAgNFMxMCA0IDYgNGMwLTIgMS0yIDItMnoiIC8+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTE4IDhjMC0xLTEtMi0yLTJTNSA2IDQgNnMtMiAxLTIgMmMwIDEgMCAxMSAwIDEyczEgMiAyIDJjMSAwIDExIDAgMTIgMHMyLTEgMi0yYzAtMSAwLTExIDAtMTJ6bS0yIDB2MTJINFY4eiIgLz4KICAgICAgICA8cGF0aCBkPSJNNiAxM3YyaDh2LTJ6IiAvPgogICAgPC9nPgo8L3N2Zz4K);
--jp-icon-console: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwMCAyMDAiPgogIDxnIGNsYXNzPSJqcC1jb25zb2xlLWljb24tYmFja2dyb3VuZC1jb2xvciBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiMwMjg4RDEiPgogICAgPHBhdGggZD0iTTIwIDE5LjhoMTYwdjE1OS45SDIweiIvPgogIDwvZz4KICA8ZyBjbGFzcz0ianAtY29uc29sZS1pY29uLWNvbG9yIGpwLWljb24tc2VsZWN0YWJsZS1pbnZlcnNlIiBmaWxsPSIjZmZmIj4KICAgIDxwYXRoIGQ9Ik0xMDUgMTI3LjNoNDB2MTIuOGgtNDB6TTUxLjEgNzdMNzQgOTkuOWwtMjMuMyAyMy4zIDEwLjUgMTAuNSAyMy4zLTIzLjNMOTUgOTkuOSA4NC41IDg5LjQgNjEuNiA2Ni41eiIvPgogIDwvZz4KPC9zdmc+Cg==);
--jp-icon-copy: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTExLjksMUgzLjJDMi40LDEsMS43LDEuNywxLjcsMi41djEwLjJoMS41VjIuNWg4LjdWMXogTTE0LjEsMy45aC04Yy0wLjgsMC0xLjUsMC43LTEuNSwxLjV2MTAuMmMwLDAuOCwwLjcsMS41LDEuNSwxLjVoOCBjMC44LDAsMS41LTAuNywxLjUtMS41VjUuNEMxNS41LDQuNiwxNC45LDMuOSwxNC4xLDMuOXogTTE0LjEsMTUuNWgtOFY1LjRoOFYxNS41eiIvPgogIDwvZz4KPC9zdmc+Cg==);
--jp-icon-copyright: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+CiAgPGcgY2xhc3M9ImpwLWljb24zIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxwYXRoIGQ9Ik0xMS44OCw5LjE0YzEuMjgsMC4wNiwxLjYxLDEuMTUsMS42MywxLjY2aDEuNzljLTAuMDgtMS45OC0xLjQ5LTMuMTktMy40NS0zLjE5QzkuNjQsNy42MSw4LDksOCwxMi4xNCBjMCwxLjk0LDAuOTMsNC4yNCwzLjg0LDQuMjRjMi4yMiwwLDMuNDEtMS42NSwzLjQ0LTIuOTVoLTEuNzljLTAuMDMsMC41OS0wLjQ1LDEuMzgtMS42MywxLjQ0QzEwLjU1LDE0LjgzLDEwLDEzLjgxLDEwLDEyLjE0IEMxMCw5LjI1LDExLjI4LDkuMTYsMTEuODgsOS4xNHogTTEyLDJDNi40OCwyLDIsNi40OCwyLDEyczQuNDgsMTAsMTAsMTBzMTAtNC40OCwxMC0xMFMxNy41MiwyLDEyLDJ6IE0xMiwyMGMtNC40MSwwLTgtMy41OS04LTggczMuNTktOCw4LThzOCwzLjU5LDgsOFMxNi40MSwyMCwxMiwyMHoiLz4KICA8L2c+Cjwvc3ZnPgo=);
--jp-icon-cut: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTkuNjQgNy42NGMuMjMtLjUuMzYtMS4wNS4zNi0xLjY0IDAtMi4yMS0xLjc5LTQtNC00UzIgMy43OSAyIDZzMS43OSA0IDQgNGMuNTkgMCAxLjE0LS4xMyAxLjY0LS4zNkwxMCAxMmwtMi4zNiAyLjM2QzcuMTQgMTQuMTMgNi41OSAxNCA2IDE0Yy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTRjMC0uNTktLjEzLTEuMTQtLjM2LTEuNjRMMTIgMTRsNyA3aDN2LTFMOS42NCA3LjY0ek02IDhjLTEuMSAwLTItLjg5LTItMnMuOS0yIDItMiAyIC44OSAyIDItLjkgMi0yIDJ6bTAgMTJjLTEuMSAwLTItLjg5LTItMnMuOS0yIDItMiAyIC44OSAyIDItLjkgMi0yIDJ6bTYtNy41Yy0uMjggMC0uNS0uMjItLjUtLjVzLjIyLS41LjUtLjUuNS4yMi41LjUtLjIyLjUtLjUuNXpNMTkgM2wtNiA2IDIgMiA3LTdWM3oiLz4KICA8L2c+Cjwvc3ZnPgo=);
--jp-icon-delete: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIiAvPgogICAgPHBhdGggY2xhc3M9ImpwLWljb24zIiBmaWxsPSIjNjI2MjYyIiBkPSJNNiAxOWMwIDEuMS45IDIgMiAyaDhjMS4xIDAgMi0uOSAyLTJWN0g2djEyek0xOSA0aC0zLjVsLTEtMWgtNWwtMSAxSDV2MmgxNFY0eiIgLz4KPC9zdmc+Cg==);
--jp-icon-download: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE5IDloLTRWM0g5djZINWw3IDcgNy03ek01IDE4djJoMTR2LTJINXoiLz4KICA8L2c+Cjwvc3ZnPgo=);
--jp-icon-duplicate: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggY2xhc3M9ImpwLWljb24zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIuNzk5OTggMC44NzVIOC44OTU4MkM5LjIwMDYxIDAuODc1IDkuNDQ5OTggMS4xMzkxNCA5LjQ0OTk4IDEuNDYxOThDOS40NDk5OCAxLjc4NDgyIDkuMjAwNjEgMi4wNDg5NiA4Ljg5NTgyIDIuMDQ4OTZIMy4zNTQxNUMzLjA0OTM2IDIuMDQ4OTYgMi43OTk5OCAyLjMxMzEgMi43OTk5OCAyLjYzNTk0VjkuNjc5NjlDMi43OTk5OCAxMC4wMDI1IDIuNTUwNjEgMTAuMjY2NyAyLjI0NTgyIDEwLjI2NjdDMS45NDEwMyAxMC4yNjY3IDEuNjkxNjUgMTAuMDAyNSAxLjY5MTY1IDkuNjc5NjlWMi4wNDg5NkMxLjY5MTY1IDEuNDAzMjggMi4xOTA0IDAuODc1IDIuNzk5OTggMC44NzVaTTUuMzY2NjUgMTEuOVY0LjU1SDExLjA4MzNWMTEuOUg1LjM2NjY1Wk00LjE0MTY1IDQuMTQxNjdDNC4xNDE2NSAzLjY5MDYzIDQuNTA3MjggMy4zMjUgNC45NTgzMiAzLjMyNUgxMS40OTE3QzExLjk0MjcgMy4zMjUgMTIuMzA4MyAzLjY5MDYzIDEyLjMwODMgNC4xNDE2N1YxMi4zMDgzQzEyLjMwODMgMTIuNzU5NCAxMS45NDI3IDEzLjEyNSAxMS40OTE3IDEzLjEyNUg0Ljk1ODMyQzQuNTA3MjggMTMuMTI1IDQuMTQxNjUgMTIuNzU5NCA0LjE0MTY1IDEyLjMwODNWNC4xNDE2N1oiIGZpbGw9IiM2MTYxNjEiLz4KPHBhdGggY2xhc3M9ImpwLWljb24zIiBkPSJNOS40MzU3NCA4LjI2NTA3SDguMzY0MzFWOS4zMzY1QzguMzY0MzEgOS40NTQzNSA4LjI2Nzg4IDkuNTUwNzggOC4xNTAwMiA5LjU1MDc4QzguMDMyMTcgOS41NTA3OCA3LjkzNTc0IDkuNDU0MzUgNy45MzU3NCA5LjMzNjVWOC4yNjUwN0g2Ljg2NDMxQzYuNzQ2NDUgOC4yNjUwNyA2LjY1MDAyIDguMTY4NjQgNi42NTAwMiA4LjA1MDc4QzYuNjUwMDIgNy45MzI5MiA2Ljc0NjQ1IDcuODM2NSA2Ljg2NDMxIDcuODM2NUg3LjkzNTc0VjYuNzY1MDdDNy45MzU3NCA2LjY0NzIxIDguMDMyMTcgNi41NTA3OCA4LjE1MDAyIDYuNTUwNzhDOC4yNjc4OCA2LjU1MDc4IDguMzY0MzEgNi42NDcyMSA4LjM2NDMxIDYuNzY1MDdWNy44MzY1SDkuNDM1NzRDOS41NTM2IDcuODM2NSA5LjY1MDAyIDcuOTMyOTIgOS42NTAwMiA4LjA1MDc4QzkuNjUwMDIgOC4xNjg2NCA5LjU1MzYgOC4yNjUwNyA5LjQzNTc0IDguMjY1MDdaIiBmaWxsPSIjNjE2MTYxIiBzdHJva2U9IiM2MTYxNjEiIHN0cm9rZS13aWR0aD0iMC41Ii8+Cjwvc3ZnPgo=);
--jp-icon-edit: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzVMMyAxNy4yNXpNMjAuNzEgNy4wNGMuMzktLjM5LjM5LTEuMDIgMC0xLjQxbC0yLjM0LTIuMzRjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwbC0xLjgzIDEuODMgMy43NSAzLjc1IDEuODMtMS44M3oiLz4KICA8L2c+Cjwvc3ZnPgo=);
--jp-icon-ellipses: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPGNpcmNsZSBjeD0iNSIgY3k9IjEyIiByPSIyIi8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIi8+CiAgICA8Y2lyY2xlIGN4PSIxOSIgY3k9IjEyIiByPSIyIi8+CiAgPC9nPgo8L3N2Zz4K);
--jp-icon-error: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KPGcgY2xhc3M9ImpwLWljb24zIiBmaWxsPSIjNjE2MTYxIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjE5IiByPSIyIi8+PHBhdGggZD0iTTEwIDNoNHYxMmgtNHoiLz48L2c+CjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KPC9zdmc+Cg==);
--jp-icon-expand-all: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTggMmMxIDAgMTEgMCAxMiAwczIgMSAyIDJjMCAxIDAgMTEgMCAxMnMwIDItMiAyQzIwIDE0IDIwIDQgMjAgNFMxMCA0IDYgNGMwLTIgMS0yIDItMnoiIC8+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTE4IDhjMC0xLTEtMi0yLTJTNSA2IDQgNnMtMiAxLTIgMmMwIDEgMCAxMSAwIDEyczEgMiAyIDJjMSAwIDExIDAgMTIgMHMyLTEgMi0yYzAtMSAwLTExIDAtMTJ6bS0yIDB2MTJINFY4eiIgLz4KICAgICAgICA8cGF0aCBkPSJNMTEgMTBIOXYzSDZ2MmgzdjNoMnYtM2gzdi0yaC0zeiIgLz4KICAgIDwvZz4KPC9zdmc+Cg==);
--jp-icon-extension: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIwLjUgMTFIMTlWN2MwLTEuMS0uOS0yLTItMmgtNFYzLjVDMTMgMi4xMiAxMS44OCAxIDEwLjUgMVM4IDIuMTIgOCAzLjVWNUg0Yy0xLjEgMC0xLjk5LjktMS45OSAydjMuOEgzLjVjMS40OSAwIDIuNyAxLjIxIDIuNyAyLjdzLTEuMjEgMi43LTIuNyAyLjdIMlYyMGMwIDEuMS45IDIgMiAyaDMuOHYtMS41YzAtMS40OSAxLjIxLTIuNyAyLjctMi43IDEuNDkgMCAyLjcgMS4yMSAyLjcgMi43VjIySDE3YzEuMSAwIDItLjkgMi0ydi00aDEuNWMxLjM4IDAgMi41LTEuMTIgMi41LTIuNVMyMS44OCAxMSAyMC41IDExeiIvPgogIDwvZz4KPC9zdmc+Cg==);
--jp-icon-fast-forward: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTQgMThsOC41LTZMNCA2djEyem05LTEydjEybDguNS02TDEzIDZ6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=);
--jp-icon-file-upload: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTkgMTZoNnYtNmg0bC03LTctNyA3aDR6bS00IDJoMTR2Mkg1eiIvPgogIDwvZz4KPC9zdmc+Cg==);
--jp-icon-file: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkuMyA4LjJsLTUuNS01LjVjLS4zLS4zLS43LS41LTEuMi0uNUgzLjljLS44LjEtMS42LjktMS42IDEuOHYxNC4xYzAgLjkuNyAxLjYgMS42IDEuNmgxNC4yYy45IDAgMS42LS43IDEuNi0xLjZWOS40Yy4xLS41LS4xLS45LS40LTEuMnptLTUuOC0zLjNsMy40IDMuNmgtMy40VjQuOXptMy45IDEyLjdINC43Yy0uMSAwLS4yIDAtLjItLjJWNC43YzAtLjIuMS0uMy4yLS4zaDcuMnY0LjRzMCAuOC4zIDEuMWMuMy4zIDEuMS4zIDEuMS4zaDQuM3Y3LjJzLS4xLjItLjIuMnoiLz4KPC9zdmc+Cg==);
--jp-icon-filter-dot: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiNGRkYiPgogICAgPHBhdGggZD0iTTE0LDEyVjE5Ljg4QzE0LjA0LDIwLjE4IDEzLjk0LDIwLjUgMTMuNzEsMjAuNzFDMTMuMzIsMjEuMSAxMi42OSwyMS4xIDEyLjMsMjAuNzFMMTAuMjksMTguN0MxMC4wNiwxOC40NyA5Ljk2LDE4LjE2IDEwLDE3Ljg3VjEySDkuOTdMNC4yMSw0LjYyQzMuODcsNC4xOSAzLjk1LDMuNTYgNC4zOCwzLjIyQzQuNTcsMy4wOCA0Ljc4LDMgNSwzVjNIMTlWM0MxOS4yMiwzIDE5LjQzLDMuMDggMTkuNjIsMy4yMkMyMC4wNSwzLjU2IDIwLjEzLDQuMTkgMTkuNzksNC42MkwxNC4wMywxMkgxNFoiIC8+CiAgPC9nPgogIDxnIGNsYXNzPSJqcC1pY29uLWRvdCIgZmlsbD0iI0ZGRiI+CiAgICA8Y2lyY2xlIGN4PSIxOCIgY3k9IjE3IiByPSIzIj48L2NpcmNsZT4KICA8L2c+Cjwvc3ZnPgo=);
--jp-icon-filter-list: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEwIDE4aDR2LTJoLTR2MnpNMyA2djJoMThWNkgzem0zIDdoMTJ2LTJINnYyeiIvPgogIDwvZz4KPC9zdmc+Cg==);
--jp-icon-filter: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiNGRkYiPgogICAgPHBhdGggZD0iTTE0LDEyVjE5Ljg4QzE0LjA0LDIwLjE4IDEzLjk0LDIwLjUgMTMuNzEsMjAuNzFDMTMuMzIsMjEuMSAxMi42OSwyMS4xIDEyLjMsMjAuNzFMMTAuMjksMTguN0MxMC4wNiwxOC40NyA5Ljk2LDE4LjE2IDEwLDE3Ljg3VjEySDkuOTdMNC4yMSw0LjYyQzMuODcsNC4xOSAzLjk1LDMuNTYgNC4zOCwzLjIyQzQuNTcsMy4wOCA0Ljc4LDMgNSwzVjNIMTlWM0MxOS4yMiwzIDE5LjQzLDMuMDggMTkuNjIsMy4yMkMyMC4wNSwzLjU2IDIwLjEzLDQuMTkgMTkuNzksNC42MkwxNC4wMywxMkgxNFoiIC8+CiAgPC9nPgo8L3N2Zz4K);
--jp-icon-folder-favorite: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iIzAwMDAwMCI+CiAgPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggY2xhc3M9ImpwLWljb24zIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzYxNjE2MSIgZD0iTTIwIDZoLThsLTItMkg0Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjhjMC0xLjEtLjktMi0yLTJ6bS0yLjA2IDExTDE1IDE1LjI4IDEyLjA2IDE3bC43OC0zLjMzLTIuNTktMi4yNCAzLjQxLS4yOUwxNSA4bDEuMzQgMy4xNCAzLjQxLjI5LTIuNTkgMi4yNC43OCAzLjMzeiIvPgo8L3N2Zz4K);
--jp-icon-folder: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY4YzAtMS4xLS45LTItMi0yaC04bC0yLTJ6Ii8+Cjwvc3ZnPgo=);
--jp-icon-home: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iIzAwMDAwMCI+CiAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGNsYXNzPSJqcC1pY29uMyBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiM2MTYxNjEiIGQ9Ik0xMCAyMHYtNmg0djZoNXYtOGgzTDEyIDMgMiAxMmgzdjh6Ii8+Cjwvc3ZnPgo=);
--jp-icon-html5: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogIDxwYXRoIGNsYXNzPSJqcC1pY29uMCBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiMwMDAiIGQ9Ik0xMDguNCAwaDIzdjIyLjhoMjEuMlYwaDIzdjY5aC0yM1Y0NmgtMjF2MjNoLTIzLjJNMjA2IDIzaC0yMC4zVjBoNjMuN3YyM0gyMjl2NDZoLTIzbTUzLjUtNjloMjQuMWwxNC44IDI0LjNMMzEzLjIgMGgyNC4xdjY5aC0yM1YzNC44bC0xNi4xIDI0LjgtMTYuMS0yNC44VjY5aC0yMi42bTg5LjItNjloMjN2NDYuMmgzMi42VjY5aC01NS42Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iI2U0NGQyNiIgZD0iTTEwNy42IDQ3MWwtMzMtMzcwLjRoMzYyLjhsLTMzIDM3MC4yTDI1NS43IDUxMiIvPgogIDxwYXRoIGNsYXNzPSJqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiNmMTY1MjkiIGQ9Ik0yNTYgNDgwLjVWMTMxaDE0OC4zTDM3NiA0NDciLz4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGZpbGw9IiNlYmViZWIiIGQ9Ik0xNDIgMTc2LjNoMTE0djQ1LjRoLTY0LjJsNC4yIDQ2LjVoNjB2NDUuM0gxNTQuNG0yIDIyLjhIMjAybDMuMiAzNi4zIDUwLjggMTMuNnY0Ny40bC05My4yLTI2Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZS1pbnZlcnNlIiBmaWxsPSIjZmZmIiBkPSJNMzY5LjYgMTc2LjNIMjU1Ljh2NDUuNGgxMDkuNm0tNC4xIDQ2LjVIMjU1Ljh2NDUuNGg1NmwtNS4zIDU5LTUwLjcgMTMuNnY0Ny4ybDkzLTI1LjgiLz4KPC9zdmc+Cg==);
--jp-icon-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1icmFuZDQganAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGZpbGw9IiNGRkYiIGQ9Ik0yLjIgMi4yaDE3LjV2MTcuNUgyLjJ6Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tYnJhbmQwIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzNGNTFCNSIgZD0iTTIuMiAyLjJ2MTcuNWgxNy41bC4xLTE3LjVIMi4yem0xMi4xIDIuMmMxLjIgMCAyLjIgMSAyLjIgMi4ycy0xIDIuMi0yLjIgMi4yLTIuMi0xLTIuMi0yLjIgMS0yLjIgMi4yLTIuMnpNNC40IDE3LjZsMy4zLTguOCAzLjMgNi42IDIuMi0zLjIgNC40IDUuNEg0LjR6Ii8+Cjwvc3ZnPgo=);
--jp-icon-info: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDUwLjk3OCA1MC45NzgiPgoJPGcgY2xhc3M9ImpwLWljb24zIiBmaWxsPSIjNjE2MTYxIj4KCQk8cGF0aCBkPSJNNDMuNTIsNy40NThDMzguNzExLDIuNjQ4LDMyLjMwNywwLDI1LjQ4OSwwQzE4LjY3LDAsMTIuMjY2LDIuNjQ4LDcuNDU4LDcuNDU4CgkJCWMtOS45NDMsOS45NDEtOS45NDMsMjYuMTE5LDAsMzYuMDYyYzQuODA5LDQuODA5LDExLjIxMiw3LjQ1NiwxOC4wMzEsNy40NThjMCwwLDAuMDAxLDAsMC4wMDIsMAoJCQljNi44MTYsMCwxMy4yMjEtMi42NDgsMTguMDI5LTcuNDU4YzQuODA5LTQuODA5LDcuNDU3LTExLjIxMiw3LjQ1Ny0xOC4wM0M1MC45NzcsMTguNjcsNDguMzI4LDEyLjI2Niw0My41Miw3LjQ1OHoKCQkJIE00Mi4xMDYsNDIuMTA1Yy00LjQzMiw0LjQzMS0xMC4zMzIsNi44NzItMTYuNjE1LDYuODcyaC0wLjAwMmMtNi4yODUtMC4wMDEtMTIuMTg3LTIuNDQxLTE2LjYxNy02Ljg3MgoJCQljLTkuMTYyLTkuMTYzLTkuMTYyLTI0LjA3MSwwLTMzLjIzM0MxMy4zMDMsNC40NCwxOS4yMDQsMiwyNS40ODksMmM2LjI4NCwwLDEyLjE4NiwyLjQ0LDE2LjYxNyw2Ljg3MgoJCQljNC40MzEsNC40MzEsNi44NzEsMTAuMzMyLDYuODcxLDE2LjYxN0M0OC45NzcsMzEuNzcyLDQ2LjUzNiwzNy42NzUsNDIuMTA2LDQyLjEwNXoiLz4KCQk8cGF0aCBkPSJNMjMuNTc4LDMyLjIxOGMtMC4wMjMtMS43MzQsMC4xNDMtMy4wNTksMC40OTYtMy45NzJjMC4zNTMtMC45MTMsMS4xMS0xLjk5NywyLjI3Mi0zLjI1MwoJCQljMC40NjgtMC41MzYsMC45MjMtMS4wNjIsMS4zNjctMS41NzVjMC42MjYtMC43NTMsMS4xMDQtMS40NzgsMS40MzYtMi4xNzVjMC4zMzEtMC43MDcsMC40OTUtMS41NDEsMC40OTUtMi41CgkJCWMwLTEuMDk2LTAuMjYtMi4wODgtMC43NzktMi45NzljLTAuNTY1LTAuODc5LTEuNTAxLTEuMzM2LTIuODA2LTEuMzY5Yy0xLjgwMiwwLjA1Ny0yLjk4NSwwLjY2Ny0zLjU1LDEuODMyCgkJCWMtMC4zMDEsMC41MzUtMC41MDMsMS4xNDEtMC42MDcsMS44MTRjLTAuMTM5LDAuNzA3LTAuMjA3LDEuNDMyLTAuMjA3LDIuMTc0aC0yLjkzN2MtMC4wOTEtMi4yMDgsMC40MDctNC4xMTQsMS40OTMtNS43MTkKCQkJYzEuMDYyLTEuNjQsMi44NTUtMi40ODEsNS4zNzgtMi41MjdjMi4xNiwwLjAyMywzLjg3NCwwLjYwOCw1LjE0MSwxLjc1OGMxLjI3OCwxLjE2LDEuOTI5LDIuNzY0LDEuOTUsNC44MTEKCQkJYzAsMS4xNDItMC4xMzcsMi4xMTEtMC40MSwyLjkxMWMtMC4zMDksMC44NDUtMC43MzEsMS41OTMtMS4yNjgsMi4yNDNjLTAuNDkyLDAuNjUtMS4wNjgsMS4zMTgtMS43MywyLjAwMgoJCQljLTAuNjUsMC42OTctMS4zMTMsMS40NzktMS45ODcsMi4zNDZjLTAuMjM5LDAuMzc3LTAuNDI5LDAuNzc3LTAuNTY1LDEuMTk5Yy0wLjE2LDAuOTU5LTAuMjE3LDEuOTUxLTAuMTcxLDIuOTc5CgkJCUMyNi41ODksMzIuMjE4LDIzLjU3OCwzMi4yMTgsMjMuNTc4LDMyLjIxOHogTTIzLjU3OCwzOC4yMnYtMy40ODRoMy4wNzZ2My40ODRIMjMuNTc4eiIvPgoJPC9nPgo8L3N2Zz4K);
--jp-icon-inspector: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaW5zcGVjdG9yLWljb24tY29sb3IganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0tNSAxNEg0di00aDExdjR6bTAtNUg0VjloMTF2NHptNSA1aC00VjloNHY5eiIvPgo8L3N2Zz4K);
--jp-icon-json: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtanNvbi1pY29uLWNvbG9yIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iI0Y5QTgyNSI+CiAgICA8cGF0aCBkPSJNMjAuMiAxMS44Yy0xLjYgMC0xLjcuNS0xLjcgMSAwIC40LjEuOS4xIDEuMy4xLjUuMS45LjEgMS4zIDAgMS43LTEuNCAyLjMtMy41IDIuM2gtLjl2LTEuOWguNWMxLjEgMCAxLjQgMCAxLjQtLjggMC0uMyAwLS42LS4xLTEgMC0uNC0uMS0uOC0uMS0xLjIgMC0xLjMgMC0xLjggMS4zLTItMS4zLS4yLTEuMy0uNy0xLjMtMiAwLS40LjEtLjguMS0xLjIuMS0uNC4xLS43LjEtMSAwLS44LS40LS43LTEuNC0uOGgtLjVWNC4xaC45YzIuMiAwIDMuNS43IDMuNSAyLjMgMCAuNC0uMS45LS4xIDEuMy0uMS41LS4xLjktLjEgMS4zIDAgLjUuMiAxIDEuNyAxdjEuOHpNMS44IDEwLjFjMS42IDAgMS43LS41IDEuNy0xIDAtLjQtLjEtLjktLjEtMS4zLS4xLS41LS4xLS45LS4xLTEuMyAwLTEuNiAxLjQtMi4zIDMuNS0yLjNoLjl2MS45aC0uNWMtMSAwLTEuNCAwLTEuNC44IDAgLjMgMCAuNi4xIDEgMCAuMi4xLjYuMSAxIDAgMS4zIDAgMS44LTEuMyAyQzYgMTEuMiA2IDExLjcgNiAxM2MwIC40LS4xLjgtLjEgMS4yLS4xLjMtLjEuNy0uMSAxIDAgLjguMy44IDEuNC44aC41djEuOWgtLjljLTIuMSAwLTMuNS0uNi0zLjUtMi4zIDAtLjQuMS0uOS4xLTEuMy4xLS41LjEtLjkuMS0xLjMgMC0uNS0uMi0xLTEuNy0xdi0xLjl6Ii8+CiAgICA8Y2lyY2xlIGN4PSIxMSIgY3k9IjEzLjgiIHI9IjIuMSIvPgogICAgPGNpcmNsZSBjeD0iMTEiIGN5PSI4LjIiIHI9IjIuMSIvPgogIDwvZz4KPC9zdmc+Cg==);
--jp-icon-julia: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDMyNSAzMDAiPgogIDxnIGNsYXNzPSJqcC1icmFuZDAganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjY2IzYzMzIj4KICAgIDxwYXRoIGQ9Ik0gMTUwLjg5ODQzOCAyMjUgQyAxNTAuODk4NDM4IDI2Ni40MjE4NzUgMTE3LjMyMDMxMiAzMDAgNzUuODk4NDM4IDMwMCBDIDM0LjQ3NjU2MiAzMDAgMC44OTg0MzggMjY2LjQyMTg3NSAwLjg5ODQzOCAyMjUgQyAwLjg5ODQzOCAxODMuNTc4MTI1IDM0LjQ3NjU2MiAxNTAgNzUuODk4NDM4IDE1MCBDIDExNy4zMjAzMTIgMTUwIDE1MC44OTg0MzggMTgzLjU3ODEyNSAxNTAuODk4NDM4IDIyNSIvPgogIDwvZz4KICA8ZyBjbGFzcz0ianAtYnJhbmQwIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzM4OTgyNiI+CiAgICA8cGF0aCBkPSJNIDIzNy41IDc1IEMgMjM3LjUgMTE2LjQyMTg3NSAyMDMuOTIxODc1IDE1MCAxNjIuNSAxNTAgQyAxMjEuMDc4MTI1IDE1MCA4Ny41IDExNi40MjE4NzUgODcuNSA3NSBDIDg3LjUgMzMuNTc4MTI1IDEyMS4wNzgxMjUgMCAxNjIuNSAwIEMgMjAzLjkyMTg3NSAwIDIzNy41IDMzLjU3ODEyNSAyMzcuNSA3NSIvPgogIDwvZz4KICA8ZyBjbGFzcz0ianAtYnJhbmQwIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzk1NThiMiI+CiAgICA8cGF0aCBkPSJNIDMyNC4xMDE1NjIgMjI1IEMgMzI0LjEwMTU2MiAyNjYuNDIxODc1IDI5MC41MjM0MzggMzAwIDI0OS4xMDE1NjIgMzAwIEMgMjA3LjY3OTY4OCAzMDAgMTc0LjEwMTU2MiAyNjYuNDIxODc1IDE3NC4xMDE1NjIgMjI1IEMgMTc0LjEwMTU2MiAxODMuNTc4MTI1IDIwNy42Nzk2ODggMTUwIDI0OS4xMDE1NjIgMTUwIEMgMjkwLjUyMzQzOCAxNTAgMzI0LjEwMTU2MiAxODMuNTc4MTI1IDMyNC4xMDE1NjIgMjI1Ii8+CiAgPC9nPgo8L3N2Zz4K);
--jp-icon-jupyter-favicon: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUyIiBoZWlnaHQ9IjE2NSIgdmlld0JveD0iMCAwIDE1MiAxNjUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgPGcgY2xhc3M9ImpwLWp1cHl0ZXItaWNvbi1jb2xvciIgZmlsbD0iI0YzNzcyNiI+CiAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA3ODk0NywgMTEwLjU4MjkyNykiIGQ9Ik03NS45NDIyODQyLDI5LjU4MDQ1NjEgQzQzLjMwMjM5NDcsMjkuNTgwNDU2MSAxNC43OTY3ODMyLDE3LjY1MzQ2MzQgMCwwIEM1LjUxMDgzMjExLDE1Ljg0MDY4MjkgMTUuNzgxNTM4OSwyOS41NjY3NzMyIDI5LjM5MDQ5NDcsMzkuMjc4NDE3MSBDNDIuOTk5Nyw0OC45ODk4NTM3IDU5LjI3MzcsNTQuMjA2NzgwNSA3NS45NjA1Nzg5LDU0LjIwNjc4MDUgQzkyLjY0NzQ1NzksNTQuMjA2NzgwNSAxMDguOTIxNDU4LDQ4Ljk4OTg1MzcgMTIyLjUzMDY2MywzOS4yNzg0MTcxIEMxMzYuMTM5NDUzLDI5LjU2Njc3MzIgMTQ2LjQxMDI4NCwxNS44NDA2ODI5IDE1MS45MjExNTgsMCBDMTM3LjA4Nzg2OCwxNy42NTM0NjM0IDEwOC41ODI1ODksMjkuNTgwNDU2MSA3NS45NDIyODQyLDI5LjU4MDQ1NjEgTDc1Ljk0MjI4NDIsMjkuNTgwNDU2MSBaIiAvPgogICAgPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMzczNjgsIDAuNzA0ODc4KSIgZD0iTTc1Ljk3ODQ1NzksMjQuNjI2NDA3MyBDMTA4LjYxODc2MywyNC42MjY0MDczIDEzNy4xMjQ0NTgsMzYuNTUzNDQxNSAxNTEuOTIxMTU4LDU0LjIwNjc4MDUgQzE0Ni40MTAyODQsMzguMzY2MjIyIDEzNi4xMzk0NTMsMjQuNjQwMTMxNyAxMjIuNTMwNjYzLDE0LjkyODQ4NzggQzEwOC45MjE0NTgsNS4yMTY4NDM5IDkyLjY0NzQ1NzksMCA3NS45NjA1Nzg5LDAgQzU5LjI3MzcsMCA0Mi45OTk3LDUuMjE2ODQzOSAyOS4zOTA0OTQ3LDE0LjkyODQ4NzggQzE1Ljc4MTUzODksMjQuNjQwMTMxNyA1LjUxMDgzMjExLDM4LjM2NjIyMiAwLDU0LjIwNjc4MDUgQzE0LjgzMzA4MTYsMzYuNTg5OTI5MyA0My4zMzg1Njg0LDI0LjYyNjQwNzMgNzUuOTc4NDU3OSwyNC42MjY0MDczIEw3NS45Nzg0NTc5LDI0LjYyNjQwNzMgWiIgLz4KICA8L2c+Cjwvc3ZnPgo=);
--jp-icon-jupyter: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCAzOSA1MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYzOCAtMjI4MSkiPgogICAgIDxnIGNsYXNzPSJqcC1qdXB5dGVyLWljb24tY29sb3IiIGZpbGw9IiNGMzc3MjYiPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM5Ljc0IDIzMTEuOTgpIiBkPSJNIDE4LjI2NDYgNy4xMzQxMUMgMTAuNDE0NSA3LjEzNDExIDMuNTU4NzIgNC4yNTc2IDAgMEMgMS4zMjUzOSAzLjgyMDQgMy43OTU1NiA3LjEzMDgxIDcuMDY4NiA5LjQ3MzAzQyAxMC4zNDE3IDExLjgxNTIgMTQuMjU1NyAxMy4wNzM0IDE4LjI2OSAxMy4wNzM0QyAyMi4yODIzIDEzLjA3MzQgMjYuMTk2MyAxMS44MTUyIDI5LjQ2OTQgOS40NzMwM0MgMzIuNzQyNCA3LjEzMDgxIDM1LjIxMjYgMy44MjA0IDM2LjUzOCAwQyAzMi45NzA1IDQuMjU3NiAyNi4xMTQ4IDcuMTM0MTEgMTguMjY0NiA3LjEzNDExWiIvPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM5LjczIDIyODUuNDgpIiBkPSJNIDE4LjI3MzMgNS45MzkzMUMgMjYuMTIzNSA1LjkzOTMxIDMyLjk3OTMgOC44MTU4MyAzNi41MzggMTMuMDczNEMgMzUuMjEyNiA5LjI1MzAzIDMyLjc0MjQgNS45NDI2MiAyOS40Njk0IDMuNjAwNEMgMjYuMTk2MyAxLjI1ODE4IDIyLjI4MjMgMCAxOC4yNjkgMEMgMTQuMjU1NyAwIDEwLjM0MTcgMS4yNTgxOCA3LjA2ODYgMy42MDA0QyAzLjc5NTU2IDUuOTQyNjIgMS4zMjUzOSA5LjI1MzAzIDAgMTMuMDczNEMgMy41Njc0NSA4LjgyNDYzIDEwLjQyMzIgNS45MzkzMSAxOC4yNzMzIDUuOTM5MzFaIi8+CiAgICA8L2c+CiAgICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjY5LjMgMjI4MS4zMSkiIGQ9Ik0gNS44OTM1MyAyLjg0NEMgNS45MTg4OSAzLjQzMTY1IDUuNzcwODUgNC4wMTM2NyA1LjQ2ODE1IDQuNTE2NDVDIDUuMTY1NDUgNS4wMTkyMiA0LjcyMTY4IDUuNDIwMTUgNC4xOTI5OSA1LjY2ODUxQyAzLjY2NDMgNS45MTY4OCAzLjA3NDQ0IDYuMDAxNTEgMi40OTgwNSA1LjkxMTcxQyAxLjkyMTY2IDUuODIxOSAxLjM4NDYzIDUuNTYxNyAwLjk1NDg5OCA1LjE2NDAxQyAwLjUyNTE3IDQuNzY2MzMgMC4yMjIwNTYgNC4yNDkwMyAwLjA4MzkwMzcgMy42Nzc1N0MgLTAuMDU0MjQ4MyAzLjEwNjExIC0wLjAyMTIzIDIuNTA2MTcgMC4xNzg3ODEgMS45NTM2NEMgMC4zNzg3OTMgMS40MDExIDAuNzM2ODA5IDAuOTIwODE3IDEuMjA3NTQgMC41NzM1MzhDIDEuNjc4MjYgMC4yMjYyNTkgMi4yNDA1NSAwLjAyNzU5MTkgMi44MjMyNiAwLjAwMjY3MjI5QyAzLjYwMzg5IC0wLjAzMDcxMTUgNC4zNjU3MyAwLjI0OTc4OSA0Ljk0MTQyIDAuNzgyNTUxQyA1LjUxNzExIDEuMzE1MzEgNS44NTk1NiAyLjA1Njc2IDUuODkzNTMgMi44NDRaIi8+CiAgICAgIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2MzkuOCAyMzIzLjgxKSIgZD0iTSA3LjQyNzg5IDMuNTgzMzhDIDcuNDYwMDggNC4zMjQzIDcuMjczNTUgNS4wNTgxOSA2Ljg5MTkzIDUuNjkyMTNDIDYuNTEwMzEgNi4zMjYwNyA1Ljk1MDc1IDYuODMxNTYgNS4yODQxMSA3LjE0NDZDIDQuNjE3NDcgNy40NTc2MyAzLjg3MzcxIDcuNTY0MTQgMy4xNDcwMiA3LjQ1MDYzQyAyLjQyMDMyIDcuMzM3MTIgMS43NDMzNiA3LjAwODcgMS4yMDE4NCA2LjUwNjk1QyAwLjY2MDMyOCA2LjAwNTIgMC4yNzg2MSA1LjM1MjY4IDAuMTA1MDE3IDQuNjMyMDJDIC0wLjA2ODU3NTcgMy45MTEzNSAtMC4wMjYyMzYxIDMuMTU0OTQgMC4yMjY2NzUgMi40NTg1NkMgMC40Nzk1ODcgMS43NjIxNyAwLjkzMTY5NyAxLjE1NzEzIDEuNTI1NzYgMC43MjAwMzNDIDIuMTE5ODMgMC4yODI5MzUgMi44MjkxNCAwLjAzMzQzOTUgMy41NjM4OSAwLjAwMzEzMzQ0QyA0LjU0NjY3IC0wLjAzNzQwMzMgNS41MDUyOSAwLjMxNjcwNiA2LjIyOTYxIDAuOTg3ODM1QyA2Ljk1MzkzIDEuNjU4OTYgNy4zODQ4NCAyLjU5MjM1IDcuNDI3ODkgMy41ODMzOEwgNy40Mjc4OSAzLjU4MzM4WiIvPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM4LjM2IDIyODYuMDYpIiBkPSJNIDIuMjc0NzEgNC4zOTYyOUMgMS44NDM2MyA0LjQxNTA4IDEuNDE2NzEgNC4zMDQ0NSAxLjA0Nzk5IDQuMDc4NDNDIDAuNjc5MjY4IDMuODUyNCAwLjM4NTMyOCAzLjUyMTE0IDAuMjAzMzcxIDMuMTI2NTZDIDAuMDIxNDEzNiAyLjczMTk4IC0wLjA0MDM3OTggMi4yOTE4MyAwLjAyNTgxMTYgMS44NjE4MUMgMC4wOTIwMDMxIDEuNDMxOCAwLjI4MzIwNCAxLjAzMTI2IDAuNTc1MjEzIDAuNzEwODgzQyAwLjg2NzIyMiAwLjM5MDUxIDEuMjQ2OTEgMC4xNjQ3MDggMS42NjYyMiAwLjA2MjA1OTJDIDIuMDg1NTMgLTAuMDQwNTg5NyAyLjUyNTYxIC0wLjAxNTQ3MTQgMi45MzA3NiAwLjEzNDIzNUMgMy4zMzU5MSAwLjI4Mzk0MSAzLjY4NzkyIDAuNTUxNTA1IDMuOTQyMjIgMC45MDMwNkMgNC4xOTY1MiAxLjI1NDYyIDQuMzQxNjkgMS42NzQzNiA0LjM1OTM1IDIuMTA5MTZDIDQuMzgyOTkgMi42OTEwNyA0LjE3Njc4IDMuMjU4NjkgMy43ODU5NyAzLjY4NzQ2QyAzLjM5NTE2IDQuMTE2MjQgMi44NTE2NiA0LjM3MTE2IDIuMjc0NzEgNC4zOTYyOUwgMi4yNzQ3MSA0LjM5NjI5WiIvPgogICAgPC9nPgogIDwvZz4+Cjwvc3ZnPgo=);
--jp-icon-jupyterlab-wordmark: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIHZpZXdCb3g9IjAgMCAxODYwLjggNDc1Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0RTRFNEUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ4MC4xMzY0MDEsIDY0LjI3MTQ5MykiPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDU4Ljg3NTU2NikiPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA4NzYwMywgMC4xNDAyOTQpIj4KICAgICAgICA8cGF0aCBkPSJNLTQyNi45LDE2OS44YzAsNDguNy0zLjcsNjQuNy0xMy42LDc2LjRjLTEwLjgsMTAtMjUsMTUuNS0zOS43LDE1LjVsMy43LDI5IGMyMi44LDAuMyw0NC44LTcuOSw2MS45LTIzLjFjMTcuOC0xOC41LDI0LTQ0LjEsMjQtODMuM1YwSC00Mjd2MTcwLjFMLTQyNi45LDE2OS44TC00MjYuOSwxNjkuOHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU1LjA0NTI5NiwgNTYuODM3MTA0KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNTYyNDUzLCAxLjc5OTg0MikiPgogICAgICAgIDxwYXRoIGQ9Ik0tMzEyLDE0OGMwLDIxLDAsMzkuNSwxLjcsNTUuNGgtMzEuOGwtMi4xLTMzLjNoLTAuOGMtNi43LDExLjYtMTYuNCwyMS4zLTI4LDI3LjkgYy0xMS42LDYuNi0yNC44LDEwLTM4LjIsOS44Yy0zMS40LDAtNjktMTcuNy02OS04OVYwaDM2LjR2MTEyLjdjMCwzOC43LDExLjYsNjQuNyw0NC42LDY0LjdjMTAuMy0wLjIsMjAuNC0zLjUsMjguOS05LjQgYzguNS01LjksMTUuMS0xNC4zLDE4LjktMjMuOWMyLjItNi4xLDMuMy0xMi41LDMuMy0xOC45VjAuMmgzNi40VjE0OEgtMzEyTC0zMTIsMTQ4eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOTAuMDEzMzIyLCA1My40Nzk2MzgpIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS43MDY0NTgsIDAuMjMxNDI1KSI+CiAgICAgICAgPHBhdGggZD0iTS00NzguNiw3MS40YzAtMjYtMC44LTQ3LTEuNy02Ni43aDMyLjdsMS43LDM0LjhoMC44YzcuMS0xMi41LDE3LjUtMjIuOCwzMC4xLTI5LjcgYzEyLjUtNywyNi43LTEwLjMsNDEtOS44YzQ4LjMsMCw4NC43LDQxLjcsODQuNywxMDMuM2MwLDczLjEtNDMuNywxMDkuMi05MSwxMDkuMmMtMTIuMSwwLjUtMjQuMi0yLjItMzUtNy44IGMtMTAuOC01LjYtMTkuOS0xMy45LTI2LjYtMjQuMmgtMC44VjI5MWgtMzZ2LTIyMEwtNDc4LjYsNzEuNEwtNDc4LjYsNzEuNHogTS00NDIuNiwxMjUuNmMwLjEsNS4xLDAuNiwxMC4xLDEuNywxNS4xIGMzLDEyLjMsOS45LDIzLjMsMTkuOCwzMS4xYzkuOSw3LjgsMjIuMSwxMi4xLDM0LjcsMTIuMWMzOC41LDAsNjAuNy0zMS45LDYwLjctNzguNWMwLTQwLjctMjEuMS03NS42LTU5LjUtNzUuNiBjLTEyLjksMC40LTI1LjMsNS4xLTM1LjMsMTMuNGMtOS45LDguMy0xNi45LDE5LjctMTkuNiwzMi40Yy0xLjUsNC45LTIuMywxMC0yLjUsMTUuMVYxMjUuNkwtNDQyLjYsMTI1LjZMLTQ0Mi42LDEyNS42eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MDYuNzQwNzI2LCA1Ni44MzcxMDQpIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC43NTEyMjYsIDEuOTg5Mjk5KSI+CiAgICAgICAgPHBhdGggZD0iTS00NDAuOCwwbDQzLjcsMTIwLjFjNC41LDEzLjQsOS41LDI5LjQsMTIuOCw0MS43aDAuOGMzLjctMTIuMiw3LjktMjcuNywxMi44LTQyLjQgbDM5LjctMTE5LjJoMzguNUwtMzQ2LjksMTQ1Yy0yNiw2OS43LTQzLjcsMTA1LjQtNjguNiwxMjcuMmMtMTIuNSwxMS43LTI3LjksMjAtNDQuNiwyMy45bC05LjEtMzEuMSBjMTEuNy0zLjksMjIuNS0xMC4xLDMxLjgtMTguMWMxMy4yLTExLjEsMjMuNy0yNS4yLDMwLjYtNDEuMmMxLjUtMi44LDIuNS01LjcsMi45LTguOGMtMC4zLTMuMy0xLjItNi42LTIuNS05LjdMLTQ4MC4yLDAuMSBoMzkuN0wtNDQwLjgsMEwtNDQwLjgsMHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODIyLjc0ODEwNCwgMC4wMDAwMDApIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS40NjQwNTAsIDAuMzc4OTE0KSI+CiAgICAgICAgPHBhdGggZD0iTS00MTMuNywwdjU4LjNoNTJ2MjguMmgtNTJWMTk2YzAsMjUsNywzOS41LDI3LjMsMzkuNWM3LjEsMC4xLDE0LjItMC43LDIxLjEtMi41IGwxLjcsMjcuN2MtMTAuMywzLjctMjEuMyw1LjQtMzIuMiw1Yy03LjMsMC40LTE0LjYtMC43LTIxLjMtMy40Yy02LjgtMi43LTEyLjktNi44LTE3LjktMTIuMWMtMTAuMy0xMC45LTE0LjEtMjktMTQuMS01Mi45IFY4Ni41aC0zMVY1OC4zaDMxVjkuNkwtNDEzLjcsMEwtNDEzLjcsMHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTc0LjQzMzI4NiwgNTMuNDc5NjM4KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuOTkwMDM0LCAwLjYxMDMzOSkiPgogICAgICAgIDxwYXRoIGQ9Ik0tNDQ1LjgsMTEzYzAuOCw1MCwzMi4yLDcwLjYsNjguNiw3MC42YzE5LDAuNiwzNy45LTMsNTUuMy0xMC41bDYuMiwyNi40IGMtMjAuOSw4LjktNDMuNSwxMy4xLTY2LjIsMTIuNmMtNjEuNSwwLTk4LjMtNDEuMi05OC4zLTEwMi41Qy00ODAuMiw0OC4yLTQ0NC43LDAtMzg2LjUsMGM2NS4yLDAsODIuNyw1OC4zLDgyLjcsOTUuNyBjLTAuMSw1LjgtMC41LDExLjUtMS4yLDE3LjJoLTE0MC42SC00NDUuOEwtNDQ1LjgsMTEzeiBNLTMzOS4yLDg2LjZjMC40LTIzLjUtOS41LTYwLjEtNTAuNC02MC4xIGMtMzYuOCwwLTUyLjgsMzQuNC01NS43LDYwLjFILTMzOS4yTC0zMzkuMiw4Ni42TC0zMzkuMiw4Ni42eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjAxLjk2MTA1OCwgNTMuNDc5NjM4KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMTc5NjQwLCAwLjcwNTA2OCkiPgogICAgICAgIDxwYXRoIGQ9Ik0tNDc4LjYsNjhjMC0yMy45LTAuNC00NC41LTEuNy02My40aDMxLjhsMS4yLDM5LjloMS43YzkuMS0yNy4zLDMxLTQ0LjUsNTUuMy00NC41IGMzLjUtMC4xLDcsMC40LDEwLjMsMS4ydjM0LjhjLTQuMS0wLjktOC4yLTEuMy0xMi40LTEuMmMtMjUuNiwwLTQzLjcsMTkuNy00OC43LDQ3LjRjLTEsNS43LTEuNiwxMS41LTEuNywxNy4ydjEwOC4zaC0zNlY2OCBMLTQ3OC42LDY4eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMCIgZmlsbD0iI0YzNzcyNiI+CiAgICA8cGF0aCBkPSJNMTM1Mi4zLDMyNi4yaDM3VjI4aC0zN1YzMjYuMnogTTE2MDQuOCwzMjYuMmMtMi41LTEzLjktMy40LTMxLjEtMy40LTQ4Ljd2LTc2IGMwLTQwLjctMTUuMS04My4xLTc3LjMtODMuMWMtMjUuNiwwLTUwLDcuMS02Ni44LDE4LjFsOC40LDI0LjRjMTQuMy05LjIsMzQtMTUuMSw1My0xNS4xYzQxLjYsMCw0Ni4yLDMwLjIsNDYuMiw0N3Y0LjIgYy03OC42LTAuNC0xMjIuMywyNi41LTEyMi4zLDc1LjZjMCwyOS40LDIxLDU4LjQsNjIuMiw1OC40YzI5LDAsNTAuOS0xNC4zLDYyLjItMzAuMmgxLjNsMi45LDI1LjZIMTYwNC44eiBNMTU2NS43LDI1Ny43IGMwLDMuOC0wLjgsOC0yLjEsMTEuOGMtNS45LDE3LjItMjIuNywzNC00OS4yLDM0Yy0xOC45LDAtMzQuOS0xMS4zLTM0LjktMzUuM2MwLTM5LjUsNDUuOC00Ni42LDg2LjItNDUuOFYyNTcuN3ogTTE2OTguNSwzMjYuMiBsMS43LTMzLjZoMS4zYzE1LjEsMjYuOSwzOC43LDM4LjIsNjguMSwzOC4yYzQ1LjQsMCw5MS4yLTM2LjEsOTEuMi0xMDguOGMwLjQtNjEuNy0zNS4zLTEwMy43LTg1LjctMTAzLjcgYy0zMi44LDAtNTYuMywxNC43LTY5LjMsMzcuNGgtMC44VjI4aC0zNi42djI0NS43YzAsMTguMS0wLjgsMzguNi0xLjcsNTIuNUgxNjk4LjV6IE0xNzA0LjgsMjA4LjJjMC01LjksMS4zLTEwLjksMi4xLTE1LjEgYzcuNi0yOC4xLDMxLjEtNDUuNCw1Ni4zLTQ1LjRjMzkuNSwwLDYwLjUsMzQuOSw2MC41LDc1LjZjMCw0Ni42LTIzLjEsNzguMS02MS44LDc4LjFjLTI2LjksMC00OC4zLTE3LjYtNTUuNS00My4zIGMtMC44LTQuMi0xLjctOC44LTEuNy0xMy40VjIwOC4yeiIvPgogIDwvZz4KPC9zdmc+Cg==);
--jp-icon-kernel: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgZmlsbD0iIzYxNjE2MSIgZD0iTTE1IDlIOXY2aDZWOXptLTIgNGgtMnYtMmgydjJ6bTgtMlY5aC0yVjdjMC0xLjEtLjktMi0yLTJoLTJWM2gtMnYyaC0yVjNIOXYySDdjLTEuMSAwLTIgLjktMiAydjJIM3YyaDJ2MkgzdjJoMnYyYzAgMS4xLjkgMiAyIDJoMnYyaDJ2LTJoMnYyaDJ2LTJoMmMxLjEgMCAyLS45IDItMnYtMmgydi0yaC0ydi0yaDJ6bS00IDZIN1Y3aDEwdjEweiIvPgo8L3N2Zz4K);
--jp-icon-keyboard: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMjAgNUg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMTdjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0yem0tOSAzaDJ2MmgtMlY4em0wIDNoMnYyaC0ydi0yek04IDhoMnYySDhWOHptMCAzaDJ2Mkg4di0yem0tMSAySDV2LTJoMnYyem0wLTNINVY4aDJ2MnptOSA3SDh2LTJoOHYyem0wLTRoLTJ2LTJoMnYyem0wLTNoLTJWOGgydjJ6bTMgM2gtMnYtMmgydjJ6bTAtM2gtMlY4aDJ2MnoiLz4KPC9zdmc+Cg==);
--jp-icon-launch: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxwYXRoIGQ9Ik0yNiwyOEg2YTIuMDAyNywyLjAwMjcsMCwwLDEtMi0yVjZBMi4wMDI3LDIuMDAyNywwLDAsMSw2LDRIMTZWNkg2VjI2SDI2VjE2aDJWMjZBMi4wMDI3LDIuMDAyNywwLDAsMSwyNiwyOFoiLz4KICAgIDxwb2x5Z29uIHBvaW50cz0iMjAgMiAyMCA0IDI2LjU4NiA0IDE4IDEyLjU4NiAxOS40MTQgMTQgMjggNS40MTQgMjggMTIgMzAgMTIgMzAgMiAyMCAyIi8+CiAgPC9nPgo8L3N2Zz4K);
--jp-icon-launcher: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkgMTlINVY1aDdWM0g1YTIgMiAwIDAwLTIgMnYxNGEyIDIgMCAwMDIgMmgxNGMxLjEgMCAyLS45IDItMnYtN2gtMnY3ek0xNCAzdjJoMy41OWwtOS44MyA5LjgzIDEuNDEgMS40MUwxOSA2LjQxVjEwaDJWM2gtN3oiLz4KPC9zdmc+Cg==);
--jp-icon-line-form: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNNS44OCA0LjEyTDEzLjc2IDEybC03Ljg4IDcuODhMOCAyMmwxMC0xMEw4IDJ6Ii8+Cjwvc3ZnPgo=);
--jp-icon-link: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTMuOSAxMmMwLTEuNzEgMS4zOS0zLjEgMy4xLTMuMWg0VjdIN2MtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNWg0di0xLjlIN2MtMS43MSAwLTMuMS0xLjM5LTMuMS0zLjF6TTggMTNoOHYtMkg4djJ6bTktNmgtNHYxLjloNGMxLjcxIDAgMy4xIDEuMzkgMy4xIDMuMXMtMS4zOSAzLjEtMy4xIDMuMWgtNFYxN2g0YzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01eiIvPgogIDwvZz4KPC9zdmc+Cg==);
--jp-icon-list: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiM2MTYxNjEiIGQ9Ik0xOSA1djE0SDVWNWgxNG0xLjEtMkgzLjljLS41IDAtLjkuNC0uOS45djE2LjJjMCAuNC40LjkuOS45aDE2LjJjLjQgMCAuOS0uNS45LS45VjMuOWMwLS41LS41LS45LS45LS45ek0xMSA3aDZ2MmgtNlY3em0wIDRoNnYyaC02di0yem0wIDRoNnYyaC02ek03IDdoMnYySDd6bTAgNGgydjJIN3ptMCA0aDJ2Mkg3eiIvPgo8L3N2Zz4K);
--jp-icon-markdown: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDAganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjN0IxRkEyIiBkPSJNNSAxNC45aDEybC02LjEgNnptOS40LTYuOGMwLTEuMy0uMS0yLjktLjEtNC41LS40IDEuNC0uOSAyLjktMS4zIDQuM2wtMS4zIDQuM2gtMkw4LjUgNy45Yy0uNC0xLjMtLjctMi45LTEtNC4zLS4xIDEuNi0uMSAzLjItLjIgNC42TDcgMTIuNEg0LjhsLjctMTFoMy4zTDEwIDVjLjQgMS4yLjcgMi43IDEgMy45LjMtMS4yLjctMi42IDEtMy45bDEuMi0zLjdoMy4zbC42IDExaC0yLjRsLS4zLTQuMnoiLz4KPC9zdmc+Cg==);
--jp-icon-move-down: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggY2xhc3M9ImpwLWljb24zIiBkPSJNMTIuNDcxIDcuNTI4OTlDMTIuNzYzMiA3LjIzNjg0IDEyLjc2MzIgNi43NjMxNiAxMi40NzEgNi40NzEwMVY2LjQ3MTAxQzEyLjE3OSA2LjE3OTA1IDExLjcwNTcgNi4xNzg4NCAxMS40MTM1IDYuNDcwNTRMNy43NSAxMC4xMjc1VjEuNzVDNy43NSAxLjMzNTc5IDcuNDE0MjEgMSA3IDFWMUM2LjU4NTc5IDEgNi4yNSAxLjMzNTc5IDYuMjUgMS43NVYxMC4xMjc1TDIuNTk3MjYgNi40NjgyMkMyLjMwMzM4IDYuMTczODEgMS44MjY0MSA2LjE3MzU5IDEuNTMyMjYgNi40Njc3NFY2LjQ2Nzc0QzEuMjM4MyA2Ljc2MTcgMS4yMzgzIDcuMjM4MyAxLjUzMjI2IDcuNTMyMjZMNi4yOTI4OSAxMi4yOTI5QzYuNjgzNDIgMTIuNjgzNCA3LjMxNjU4IDEyLjY4MzQgNy43MDcxMSAxMi4yOTI5TDEyLjQ3MSA3LjUyODk5WiIgZmlsbD0iIzYxNjE2MSIvPgo8L3N2Zz4K);
--jp-icon-move-up: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggY2xhc3M9ImpwLWljb24zIiBkPSJNMS41Mjg5OSA2LjQ3MTAxQzEuMjM2ODQgNi43NjMxNiAxLjIzNjg0IDcuMjM2ODQgMS41Mjg5OSA3LjUyODk5VjcuNTI4OTlDMS44MjA5NSA3LjgyMDk1IDIuMjk0MjYgNy44MjExNiAyLjU4NjQ5IDcuNTI5NDZMNi4yNSAzLjg3MjVWMTIuMjVDNi4yNSAxMi42NjQyIDYuNTg1NzkgMTMgNyAxM1YxM0M3LjQxNDIxIDEzIDcuNzUgMTIuNjY0MiA3Ljc1IDEyLjI1VjMuODcyNUwxMS40MDI3IDcuNTMxNzhDMTEuNjk2NiA3LjgyNjE5IDEyLjE3MzYgNy44MjY0MSAxMi40Njc3IDcuNTMyMjZWNy41MzIyNkMxMi43NjE3IDcuMjM4MyAxMi43NjE3IDYuNzYxNyAxMi40Njc3IDYuNDY3NzRMNy43MDcxMSAxLjcwNzExQzcuMzE2NTggMS4zMTY1OCA2LjY4MzQyIDEuMzE2NTggNi4yOTI4OSAxLjcwNzExTDEuNTI4OTkgNi40NzEwMVoiIGZpbGw9IiM2MTYxNjEiLz4KPC9zdmc+Cg==);
--jp-icon-new-folder: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIwIDZoLThsLTItMkg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAxOGMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY4YzAtMS4xMS0uODktMi0yLTJ6bS0xIDhoLTN2M2gtMnYtM2gtM3YtMmgzVjloMnYzaDN2MnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
--jp-icon-not-trusted: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI1IDI1Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMykiIGQ9Ik0xLjg2MDk0IDExLjQ0MDlDMC44MjY0NDggOC43NzAyNyAwLjg2Mzc3OSA2LjA1NzY0IDEuMjQ5MDcgNC4xOTkzMkMyLjQ4MjA2IDMuOTMzNDcgNC4wODA2OCAzLjQwMzQ3IDUuNjAxMDIgMi44NDQ5QzcuMjM1NDkgMi4yNDQ0IDguODU2NjYgMS41ODE1IDkuOTg3NiAxLjA5NTM5QzExLjA1OTcgMS41ODM0MSAxMi42MDk0IDIuMjQ0NCAxNC4yMTggMi44NDMzOUMxNS43NTAzIDMuNDEzOTQgMTcuMzk5NSAzLjk1MjU4IDE4Ljc1MzkgNC4yMTM4NUMxOS4xMzY0IDYuMDcxNzcgMTkuMTcwOSA4Ljc3NzIyIDE4LjEzOSAxMS40NDA5QzE3LjAzMDMgMTQuMzAzMiAxNC42NjY4IDE3LjE4NDQgOS45OTk5OSAxOC45MzU0QzUuMzMzMTkgMTcuMTg0NCAyLjk2OTY4IDE0LjMwMzIgMS44NjA5NCAxMS40NDA5WiIvPgogICAgPHBhdGggY2xhc3M9ImpwLWljb24yIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS4zMTU5MiA5LjMyMDMxKSIgZD0iTTcuMzY4NDIgMEwwIDcuMzY0NzkiLz4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuMzE1OTIgMTYuNjgzNikgc2NhbGUoMSAtMSkiIGQ9Ik03LjM2ODQyIDBMMCA3LjM2NDc5Ii8+Cjwvc3ZnPgo=);
--jp-icon-notebook: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtbm90ZWJvb2staWNvbi1jb2xvciBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiNFRjZDMDAiPgogICAgPHBhdGggZD0iTTE4LjcgMy4zdjE1LjRIMy4zVjMuM2gxNS40bTEuNS0xLjVIMS44djE4LjNoMTguM2wuMS0xOC4zeiIvPgogICAgPHBhdGggZD0iTTE2LjUgMTYuNWwtNS40LTQuMy01LjYgNC4zdi0xMWgxMXoiLz4KICA8L2c+Cjwvc3ZnPgo=);
--jp-icon-numbering: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyOCAyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CgkJPHBhdGggZD0iTTQgMTlINlYxOS41SDVWMjAuNUg2VjIxSDRWMjJIN1YxOEg0VjE5Wk01IDEwSDZWNkg0VjdINVYxMFpNNCAxM0g1LjhMNCAxNS4xVjE2SDdWMTVINS4yTDcgMTIuOVYxMkg0VjEzWk05IDdWOUgyM1Y3SDlaTTkgMjFIMjNWMTlIOVYyMVpNOSAxNUgyM1YxM0g5VjE1WiIvPgoJPC9nPgo8L3N2Zz4K);
--jp-icon-offline-bolt: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE2Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyIDIuMDJjLTUuNTEgMC05Ljk4IDQuNDctOS45OCA5Ljk4czQuNDcgOS45OCA5Ljk4IDkuOTggOS45OC00LjQ3IDkuOTgtOS45OFMxNy41MSAyLjAyIDEyIDIuMDJ6TTExLjQ4IDIwdi02LjI2SDhMMTMgNHY2LjI2aDMuMzVMMTEuNDggMjB6Ii8+CiAgPC9nPgo8L3N2Zz4K);
--jp-icon-palette: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE4IDEzVjIwSDRWNkg5LjAyQzkuMDcgNS4yOSA5LjI0IDQuNjIgOS41IDRINEMyLjkgNCAyIDQuOSAyIDZWMjBDMiAyMS4xIDIuOSAyMiA0IDIySDE4QzE5LjEgMjIgMjAgMjEuMSAyMCAyMFYxNUwxOCAxM1pNMTkuMyA4Ljg5QzE5Ljc0IDguMTkgMjAgNy4zOCAyMCA2LjVDMjAgNC4wMSAxNy45OSAyIDE1LjUgMkMxMy4wMSAyIDExIDQuMDEgMTEgNi41QzExIDguOTkgMTMuMDEgMTEgMTUuNDkgMTFDMTYuMzcgMTEgMTcuMTkgMTAuNzQgMTcuODggMTAuM0wyMSAxMy40MkwyMi40MiAxMkwxOS4zIDguODlaTTE1LjUgOUMxNC4xMiA5IDEzIDcuODggMTMgNi41QzEzIDUuMTIgMTQuMTIgNCAxNS41IDRDMTYuODggNCAxOCA1LjEyIDE4IDYuNUMxOCA3Ljg4IDE2Ljg4IDkgMTUuNSA5WiIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDZIOS4wMTg5NEM5LjAwNjM5IDYuMTY1MDIgOSA2LjMzMTc2IDkgNi41QzkgOC44MTU3NyAxMC4yMTEgMTAuODQ4NyAxMi4wMzQzIDEySDlWMTRIMTZWMTIuOTgxMUMxNi41NzAzIDEyLjkzNzcgMTcuMTIgMTIuODIwNyAxNy42Mzk2IDEyLjYzOTZMMTggMTNWMjBINFY2Wk04IDhINlYxMEg4VjhaTTYgMTJIOFYxNEg2VjEyWk04IDE2SDZWMThIOFYxNlpNOSAxNkgxNlYxOEg5VjE2WiIvPgogIDwvZz4KPC9zdmc+Cg==);
--jp-icon-paste: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTE5IDJoLTQuMThDMTQuNC44NCAxMy4zIDAgMTIgMGMtMS4zIDAtMi40Ljg0LTIuODIgMkg1Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS03IDBjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptNyAxOEg1VjRoMnYzaDEwVjRoMnYxNnoiLz4KICAgIDwvZz4KPC9zdmc+Cg==);
--jp-icon-pdf: url(data:image/svg+xml;base64,PHN2ZwogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMiIgd2lkdGg9IjE2Ij4KICAgIDxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDQ1KSIgY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iI0ZGMkEyQSIKICAgICAgIGQ9Im0gMjIuMzQ0MzY5LC0zLjAxNjM2NDIgaCA1LjYzODYwNCB2IDEuNTc5MjQzMyBoIC0zLjU0OTIyNyB2IDEuNTA4NjkyOTkgaCAzLjMzNzU3NiBWIDEuNjUwODE1NCBoIC0zLjMzNzU3NiB2IDMuNDM1MjYxMyBoIC0yLjA4OTM3NyB6IG0gLTcuMTM2NDQ0LDEuNTc5MjQzMyB2IDQuOTQzOTU0MyBoIDAuNzQ4OTIgcSAxLjI4MDc2MSwwIDEuOTUzNzAzLC0wLjYzNDk1MzUgMC42NzgzNjksLTAuNjM0OTUzNSAwLjY3ODM2OSwtMS44NDUxNjQxIDAsLTEuMjA0NzgzNTUgLTAuNjcyOTQyLC0xLjgzNDMxMDExIC0wLjY3Mjk0MiwtMC42Mjk1MjY1OSAtMS45NTkxMywtMC42Mjk1MjY1OSB6IG0gLTIuMDg5Mzc3LC0xLjU3OTI0MzMgaCAyLjIwMzM0MyBxIDEuODQ1MTY0LDAgMi43NDYwMzksMC4yNjU5MjA3IDAuOTA2MzAxLDAuMjYwNDkzNyAxLjU1MjEwOCwwLjg5MDAyMDMgMC41Njk4MywwLjU0ODEyMjMgMC44NDY2MDUsMS4yNjQ0ODAwNiAwLjI3Njc3NCwwLjcxNjM1NzgxIDAuMjc2Nzc0LDEuNjIyNjU4OTQgMCwwLjkxNzE1NTEgLTAuMjc2Nzc0LDEuNjM4OTM5OSAtMC4yNzY3NzUsMC43MTYzNTc4IC0wLjg0NjYwNSwxLjI2NDQ4IC0wLjY1MTIzNCwwLjYyOTUyNjYgLTEuNTYyOTYyLDAuODk1NDQ3MyAtMC45MTE3MjgsMC4yNjA0OTM3IC0yLjczNTE4NSwwLjI2MDQ5MzcgaCAtMi4yMDMzNDMgeiBtIC04LjE0NTg1NjUsMCBoIDMuNDY3ODIzIHEgMS41NDY2ODE2LDAgMi4zNzE1Nzg1LDAuNjg5MjIzIDAuODMwMzI0LDAuNjgzNzk2MSAwLjgzMDMyNCwxLjk1MzcwMzE0IDAsMS4yNzUzMzM5NyAtMC44MzAzMjQsMS45NjQ1NTcwNiBRIDkuOTg3MTk2MSwyLjI3NDkxNSA4LjQ0MDUxNDUsMi4yNzQ5MTUgSCA3LjA2MjA2ODQgViA1LjA4NjA3NjcgSCA0Ljk3MjY5MTUgWiBtIDIuMDg5Mzc2OSwxLjUxNDExOTkgdiAyLjI2MzAzOTQzIGggMS4xNTU5NDEgcSAwLjYwNzgxODgsMCAwLjkzODg2MjksLTAuMjkzMDU1NDcgMC4zMzEwNDQxLC0wLjI5ODQ4MjQxIDAuMzMxMDQ0MSwtMC44NDExNzc3MiAwLC0wLjU0MjY5NTMxIC0wLjMzMTA0NDEsLTAuODM1NzUwNzQgLTAuMzMxMDQ0MSwtMC4yOTMwNTU1IC0wLjkzODg2MjksLTAuMjkzMDU1NSB6IgovPgo8L3N2Zz4K);
--jp-icon-python: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iLTEwIC0xMCAxMzEuMTYxMzYxNjk0MzM1OTQgMTMyLjM4ODk5OTkzODk2NDg0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMzA2OTk4IiBkPSJNIDU0LjkxODc4NSw5LjE5Mjc0MjFlLTQgQyA1MC4zMzUxMzIsMC4wMjIyMTcyNyA0NS45NTc4NDYsMC40MTMxMzY5NyA0Mi4xMDYyODUsMS4wOTQ2NjkzIDMwLjc2MDA2OSwzLjA5OTE3MzEgMjguNzAwMDM2LDcuMjk0NzcxNCAyOC43MDAwMzUsMTUuMDMyMTY5IHYgMTAuMjE4NzUgaCAyNi44MTI1IHYgMy40MDYyNSBoIC0yNi44MTI1IC0xMC4wNjI1IGMgLTcuNzkyNDU5LDAgLTE0LjYxNTc1ODgsNC42ODM3MTcgLTE2Ljc0OTk5OTgsMTMuNTkzNzUgLTIuNDYxODE5OTgsMTAuMjEyOTY2IC0yLjU3MTAxNTA4LDE2LjU4NjAyMyAwLDI3LjI1IDEuOTA1OTI4Myw3LjkzNzg1MiA2LjQ1NzU0MzIsMTMuNTkzNzQ4IDE0LjI0OTk5OTgsMTMuNTkzNzUgaCA5LjIxODc1IHYgLTEyLjI1IGMgMCwtOC44NDk5MDIgNy42NTcxNDQsLTE2LjY1NjI0OCAxNi43NSwtMTYuNjU2MjUgaCAyNi43ODEyNSBjIDcuNDU0OTUxLDAgMTMuNDA2MjUzLC02LjEzODE2NCAxMy40MDYyNSwtMTMuNjI1IHYgLTI1LjUzMTI1IGMgMCwtNy4yNjYzMzg2IC02LjEyOTk4LC0xMi43MjQ3NzcxIC0xMy40MDYyNSwtMTMuOTM3NDk5NyBDIDY0LjI4MTU0OCwwLjMyNzk0Mzk3IDU5LjUwMjQzOCwtMC4wMjAzNzkwMyA1NC45MTg3ODUsOS4xOTI3NDIxZS00IFogbSAtMTQuNSw4LjIxODc1MDEyNTc5IGMgMi43Njk1NDcsMCA1LjAzMTI1LDIuMjk4NjQ1NiA1LjAzMTI1LDUuMTI0OTk5NiAtMmUtNiwyLjgxNjMzNiAtMi4yNjE3MDMsNS4wOTM3NSAtNS4wMzEyNSw1LjA5Mzc1IC0yLjc3OTQ3NiwtMWUtNiAtNS4wMzEyNSwtMi4yNzc0MTUgLTUuMDMxMjUsLTUuMDkzNzUgLTEwZS03LC0yLjgyNjM1MyAyLjI1MTc3NCwtNS4xMjQ5OTk2IDUuMDMxMjUsLTUuMTI0OTk5NiB6Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iI2ZmZDQzYiIgZD0ibSA4NS42Mzc1MzUsMjguNjU3MTY5IHYgMTEuOTA2MjUgYyAwLDkuMjMwNzU1IC03LjgyNTg5NSwxNi45OTk5OTkgLTE2Ljc1LDE3IGggLTI2Ljc4MTI1IGMgLTcuMzM1ODMzLDAgLTEzLjQwNjI0OSw2LjI3ODQ4MyAtMTMuNDA2MjUsMTMuNjI1IHYgMjUuNTMxMjQ3IGMgMCw3LjI2NjM0NCA2LjMxODU4OCwxMS41NDAzMjQgMTMuNDA2MjUsMTMuNjI1MDA0IDguNDg3MzMxLDIuNDk1NjEgMTYuNjI2MjM3LDIuOTQ2NjMgMjYuNzgxMjUsMCA2Ljc1MDE1NSwtMS45NTQzOSAxMy40MDYyNTMsLTUuODg3NjEgMTMuNDA2MjUsLTEzLjYyNTAwNCBWIDg2LjUwMDkxOSBoIC0yNi43ODEyNSB2IC0zLjQwNjI1IGggMjYuNzgxMjUgMTMuNDA2MjU0IGMgNy43OTI0NjEsMCAxMC42OTYyNTEsLTUuNDM1NDA4IDEzLjQwNjI0MSwtMTMuNTkzNzUgMi43OTkzMywtOC4zOTg4ODYgMi42ODAyMiwtMTYuNDc1Nzc2IDAsLTI3LjI1IC0xLjkyNTc4LC03Ljc1NzQ0MSAtNS42MDM4NywtMTMuNTkzNzUgLTEzLjQwNjI0MSwtMTMuNTkzNzUgeiBtIC0xNS4wNjI1LDY0LjY1NjI1IGMgMi43Nzk0NzgsM2UtNiA1LjAzMTI1LDIuMjc3NDE3IDUuMDMxMjUsNS4wOTM3NDcgLTJlLTYsMi44MjYzNTQgLTIuMjUxNzc1LDUuMTI1MDA0IC01LjAzMTI1LDUuMTI1MDA0IC0yLjc2OTU1LDAgLTUuMDMxMjUsLTIuMjk4NjUgLTUuMDMxMjUsLTUuMTI1MDA0IDJlLTYsLTIuODE2MzMgMi4yNjE2OTcsLTUuMDkzNzQ3IDUuMDMxMjUsLTUuMDkzNzQ3IHoiLz4KPC9zdmc+Cg==);
--jp-icon-r-kernel: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMjE5NkYzIiBkPSJNNC40IDIuNWMxLjItLjEgMi45LS4zIDQuOS0uMyAyLjUgMCA0LjEuNCA1LjIgMS4zIDEgLjcgMS41IDEuOSAxLjUgMy41IDAgMi0xLjQgMy41LTIuOSA0LjEgMS4yLjQgMS43IDEuNiAyLjIgMyAuNiAxLjkgMSAzLjkgMS4zIDQuNmgtMy44Yy0uMy0uNC0uOC0xLjctMS4yLTMuN3MtMS4yLTIuNi0yLjYtMi42aC0uOXY2LjRINC40VjIuNXptMy43IDYuOWgxLjRjMS45IDAgMi45LS45IDIuOS0yLjNzLTEtMi4zLTIuOC0yLjNjLS43IDAtMS4zIDAtMS42LjJ2NC41aC4xdi0uMXoiLz4KPC9zdmc+Cg==);
--jp-icon-react: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMTUwIDE1MCA1NDEuOSAyOTUuMyI+CiAgPGcgY2xhc3M9ImpwLWljb24tYnJhbmQyIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzYxREFGQiI+CiAgICA8cGF0aCBkPSJNNjY2LjMgMjk2LjVjMC0zMi41LTQwLjctNjMuMy0xMDMuMS04Mi40IDE0LjQtNjMuNiA4LTExNC4yLTIwLjItMTMwLjQtNi41LTMuOC0xNC4xLTUuNi0yMi40LTUuNnYyMi4zYzQuNiAwIDguMy45IDExLjQgMi42IDEzLjYgNy44IDE5LjUgMzcuNSAxNC45IDc1LjctMS4xIDkuNC0yLjkgMTkuMy01LjEgMjkuNC0xOS42LTQuOC00MS04LjUtNjMuNS0xMC45LTEzLjUtMTguNS0yNy41LTM1LjMtNDEuNi01MCAzMi42LTMwLjMgNjMuMi00Ni45IDg0LTQ2LjlWNzhjLTI3LjUgMC02My41IDE5LjYtOTkuOSA1My42LTM2LjQtMzMuOC03Mi40LTUzLjItOTkuOS01My4ydjIyLjNjMjAuNyAwIDUxLjQgMTYuNSA4NCA0Ni42LTE0IDE0LjctMjggMzEuNC00MS4zIDQ5LjktMjIuNiAyLjQtNDQgNi4xLTYzLjYgMTEtMi4zLTEwLTQtMTkuNy01LjItMjktNC43LTM4LjIgMS4xLTY3LjkgMTQuNi03NS44IDMtMS44IDYuOS0yLjYgMTEuNS0yLjZWNzguNWMtOC40IDAtMTYgMS44LTIyLjYgNS42LTI4LjEgMTYuMi0zNC40IDY2LjctMTkuOSAxMzAuMS02Mi4yIDE5LjItMTAyLjcgNDkuOS0xMDIuNyA4Mi4zIDAgMzIuNSA0MC43IDYzLjMgMTAzLjEgODIuNC0xNC40IDYzLjYtOCAxMTQuMiAyMC4yIDEzMC40IDYuNSAzLjggMTQuMSA1LjYgMjIuNSA1LjYgMjcuNSAwIDYzLjUtMTkuNiA5OS45LTUzLjYgMzYuNCAzMy44IDcyLjQgNTMuMiA5OS45IDUzLjIgOC40IDAgMTYtMS44IDIyLjYtNS42IDI4LjEtMTYuMiAzNC40LTY2LjcgMTkuOS0xMzAuMSA2Mi0xOS4xIDEwMi41LTQ5LjkgMTAyLjUtODIuM3ptLTEzMC4yLTY2LjdjLTMuNyAxMi45LTguMyAyNi4yLTEzLjUgMzkuNS00LjEtOC04LjQtMTYtMTMuMS0yNC00LjYtOC05LjUtMTUuOC0xNC40LTIzLjQgMTQuMiAyLjEgMjcuOSA0LjcgNDEgNy45em0tNDUuOCAxMDYuNWMtNy44IDEzLjUtMTUuOCAyNi4zLTI0LjEgMzguMi0xNC45IDEuMy0zMCAyLTQ1LjIgMi0xNS4xIDAtMzAuMi0uNy00NS0xLjktOC4zLTExLjktMTYuNC0yNC42LTI0LjItMzgtNy42LTEzLjEtMTQuNS0yNi40LTIwLjgtMzkuOCA2LjItMTMuNCAxMy4yLTI2LjggMjAuNy0zOS45IDcuOC0xMy41IDE1LjgtMjYuMyAyNC4xLTM4LjIgMTQuOS0xLjMgMzAtMiA0NS4yLTIgMTUuMSAwIDMwLjIuNyA0NSAxLjkgOC4zIDExLjkgMTYuNCAyNC42IDI0LjIgMzggNy42IDEzLjEgMTQuNSAyNi40IDIwLjggMzkuOC02LjMgMTMuNC0xMy4yIDI2LjgtMjAuNyAzOS45em0zMi4zLTEzYzUuNCAxMy40IDEwIDI2LjggMTMuOCAzOS44LTEzLjEgMy4yLTI2LjkgNS45LTQxLjIgOCA0LjktNy43IDkuOC0xNS42IDE0LjQtMjMuNyA0LjYtOCA4LjktMTYuMSAxMy0yNC4xek00MjEuMiA0MzBjLTkuMy05LjYtMTguNi0yMC4zLTI3LjgtMzIgOSAuNCAxOC4yLjcgMjcuNS43IDkuNCAwIDE4LjctLjIgMjcuOC0uNy05IDExLjctMTguMyAyMi40LTI3LjUgMzJ6bS03NC40LTU4LjljLTE0LjItMi4xLTI3LjktNC43LTQxLTcuOSAzLjctMTIuOSA4LjMtMjYuMiAxMy41LTM5LjUgNC4xIDggOC40IDE2IDEzLjEgMjQgNC43IDggOS41IDE1LjggMTQuNCAyMy40ek00MjAuNyAxNjNjOS4zIDkuNiAxOC42IDIwLjMgMjcuOCAzMi05LS40LTE4LjItLjctMjcuNS0uNy05LjQgMC0xOC43LjItMjcuOC43IDktMTEuNyAxOC4zLTIyLjQgMjcuNS0zMnptLTc0IDU4LjljLTQuOSA3LjctOS44IDE1LjYtMTQuNCAyMy43LTQuNiA4LTguOSAxNi0xMyAyNC01LjQtMTMuNC0xMC0yNi44LTEzLjgtMzkuOCAxMy4xLTMuMSAyNi45LTUuOCA0MS4yLTcuOXptLTkwLjUgMTI1LjJjLTM1LjQtMTUuMS01OC4zLTM0LjktNTguMy01MC42IDAtMTUuNyAyMi45LTM1LjYgNTguMy01MC42IDguNi0zLjcgMTgtNyAyNy43LTEwLjEgNS43IDE5LjYgMTMuMiA0MCAyMi41IDYwLjktOS4yIDIwLjgtMTYuNiA0MS4xLTIyLjIgNjAuNi05LjktMy4xLTE5LjMtNi41LTI4LTEwLjJ6TTMxMCA0OTBjLTEzLjYtNy44LTE5LjUtMzcuNS0xNC45LTc1LjcgMS4xLTkuNCAyLjktMTkuMyA1LjEtMjkuNCAxOS42IDQuOCA0MSA4LjUgNjMuNSAxMC45IDEzLjUgMTguNSAyNy41IDM1LjMgNDEuNiA1MC0zMi42IDMwLjMtNjMuMiA0Ni45LTg0IDQ2LjktNC41LS4xLTguMy0xLTExLjMtMi43em0yMzcuMi03Ni4yYzQuNyAzOC4yLTEuMSA2Ny45LTE0LjYgNzUuOC0zIDEuOC02LjkgMi42LTExLjUgMi42LTIwLjcgMC01MS40LTE2LjUtODQtNDYuNiAxNC0xNC43IDI4LTMxLjQgNDEuMy00OS45IDIyLjYtMi40IDQ0LTYuMSA2My42LTExIDIuMyAxMC4xIDQuMSAxOS44IDUuMiAyOS4xem0zOC41LTY2LjdjLTguNiAzLjctMTggNy0yNy43IDEwLjEtNS43LTE5LjYtMTMuMi00MC0yMi41LTYwLjkgOS4yLTIwLjggMTYuNi00MS4xIDIyLjItNjAuNiA5LjkgMy4xIDE5LjMgNi41IDI4LjEgMTAuMiAzNS40IDE1LjEgNTguMyAzNC45IDU4LjMgNTAuNi0uMSAxNS43LTIzIDM1LjYtNTguNCA1MC42ek0zMjAuOCA3OC40eiIvPgogICAgPGNpcmNsZSBjeD0iNDIwLjkiIGN5PSIyOTYuNSIgcj0iNDUuNyIvPgogIDwvZz4KPC9zdmc+Cg==);
--jp-icon-redo: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE2Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE4LjQgMTAuNkMxNi41NSA4Ljk5IDE0LjE1IDggMTEuNSA4Yy00LjY1IDAtOC41OCAzLjAzLTkuOTYgNy4yMkwzLjkgMTZjMS4wNS0zLjE5IDQuMDUtNS41IDcuNi01LjUgMS45NSAwIDMuNzMuNzIgNS4xMiAxLjg4TDEzIDE2aDlWN2wtMy42IDMuNnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
--jp-icon-refresh: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTkgMTMuNWMtMi40OSAwLTQuNS0yLjAxLTQuNS00LjVTNi41MSA0LjUgOSA0LjVjMS4yNCAwIDIuMzYuNTIgMy4xNyAxLjMzTDEwIDhoNVYzbC0xLjc2IDEuNzZDMTIuMTUgMy42OCAxMC42NiAzIDkgMyA1LjY5IDMgMy4wMSA1LjY5IDMuMDEgOVM1LjY5IDE1IDkgMTVjMi45NyAwIDUuNDMtMi4xNiA1LjktNWgtMS41MmMtLjQ2IDItMi4yNCAzLjUtNC4zOCAzLjV6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=);
--jp-icon-regex: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0MTQxNDEiPgogICAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbi1hY2NlbnQyIiBmaWxsPSIjRkZGIj4KICAgIDxjaXJjbGUgY2xhc3M9InN0MiIgY3g9IjUuNSIgY3k9IjE0LjUiIHI9IjEuNSIvPgogICAgPHJlY3QgeD0iMTIiIHk9IjQiIGNsYXNzPSJzdDIiIHdpZHRoPSIxIiBoZWlnaHQ9IjgiLz4KICAgIDxyZWN0IHg9IjguNSIgeT0iNy41IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjg2NiAtMC41IDAuNSAwLjg2NiAtMi4zMjU1IDcuMzIxOSkiIGNsYXNzPSJzdDIiIHdpZHRoPSI4IiBoZWlnaHQ9IjEiLz4KICAgIDxyZWN0IHg9IjEyIiB5PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjUgLTAuODY2IDAuODY2IDAuNSAtMC42Nzc5IDE0LjgyNTIpIiBjbGFzcz0ic3QyIiB3aWR0aD0iMSIgaGVpZ2h0PSI4Ii8+CiAgPC9nPgo8L3N2Zz4K);
--jp-icon-run: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTggNXYxNGwxMS03eiIvPgogICAgPC9nPgo8L3N2Zz4K);
--jp-icon-running: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICA8cGF0aCBkPSJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptOTYgMzI4YzAgOC44LTcuMiAxNi0xNiAxNkgxNzZjLTguOCAwLTE2LTcuMi0xNi0xNlYxNzZjMC04LjggNy4yLTE2IDE2LTE2aDE2MGM4LjggMCAxNiA3LjIgMTYgMTZ2MTYweiIvPgogIDwvZz4KPC9zdmc+Cg==);
--jp-icon-save: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTE3IDNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjdsLTQtNHptLTUgMTZjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzem0zLTEwSDVWNWgxMHY0eiIvPgogICAgPC9nPgo8L3N2Zz4K);
--jp-icon-search: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyLjEsMTAuOWgtMC43bC0wLjItMC4yYzAuOC0wLjksMS4zLTIuMiwxLjMtMy41YzAtMy0yLjQtNS40LTUuNC01LjRTMS44LDQuMiwxLjgsNy4xczIuNCw1LjQsNS40LDUuNCBjMS4zLDAsMi41LTAuNSwzLjUtMS4zbDAuMiwwLjJ2MC43bDQuMSw0LjFsMS4yLTEuMkwxMi4xLDEwLjl6IE03LjEsMTAuOWMtMi4xLDAtMy43LTEuNy0zLjctMy43czEuNy0zLjcsMy43LTMuN3MzLjcsMS43LDMuNywzLjcgUzkuMiwxMC45LDcuMSwxMC45eiIvPgogIDwvZz4KPC9zdmc+Cg==);
--jp-icon-settings: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkuNDMgMTIuOThjLjA0LS4zMi4wNy0uNjQuMDctLjk4cy0uMDMtLjY2LS4wNy0uOThsMi4xMS0xLjY1Yy4xOS0uMTUuMjQtLjQyLjEyLS42NGwtMi0zLjQ2Yy0uMTItLjIyLS4zOS0uMy0uNjEtLjIybC0yLjQ5IDFjLS41Mi0uNC0xLjA4LS43My0xLjY5LS45OGwtLjM4LTIuNjVBLjQ4OC40ODggMCAwMDE0IDJoLTRjLS4yNSAwLS40Ni4xOC0uNDkuNDJsLS4zOCAyLjY1Yy0uNjEuMjUtMS4xNy41OS0xLjY5Ljk4bC0yLjQ5LTFjLS4yMy0uMDktLjQ5IDAtLjYxLjIybC0yIDMuNDZjLS4xMy4yMi0uMDcuNDkuMTIuNjRsMi4xMSAxLjY1Yy0uMDQuMzItLjA3LjY1LS4wNy45OHMuMDMuNjYuMDcuOThsLTIuMTEgMS42NWMtLjE5LjE1LS4yNC40Mi0uMTIuNjRsMiAzLjQ2Yy4xMi4yMi4zOS4zLjYxLjIybDIuNDktMWMuNTIuNCAxLjA4LjczIDEuNjkuOThsLjM4IDIuNjVjLjAzLjI0LjI0LjQyLjQ5LjQyaDRjLjI1IDAgLjQ2LS4xOC40OS0uNDJsLjM4LTIuNjVjLjYxLS4yNSAxLjE3LS41OSAxLjY5LS45OGwyLjQ5IDFjLjIzLjA5LjQ5IDAgLjYxLS4yMmwyLTMuNDZjLjEyLS4yMi4wNy0uNDktLjEyLS42NGwtMi4xMS0xLjY1ek0xMiAxNS41Yy0xLjkzIDAtMy41LTEuNTctMy41LTMuNXMxLjU3LTMuNSAzLjUtMy41IDMuNSAxLjU3IDMuNSAzLjUtMS41NyAzLjUtMy41IDMuNXoiLz4KPC9zdmc+Cg==);
--jp-icon-share: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTSAxOCAyIEMgMTYuMzU0OTkgMiAxNSAzLjM1NDk5MDQgMTUgNSBDIDE1IDUuMTkwOTUyOSAxNS4wMjE3OTEgNS4zNzcxMjI0IDE1LjA1NjY0MSA1LjU1ODU5MzggTCA3LjkyMTg3NSA5LjcyMDcwMzEgQyA3LjM5ODUzOTkgOS4yNzc4NTM5IDYuNzMyMDc3MSA5IDYgOSBDIDQuMzU0OTkwNCA5IDMgMTAuMzU0OTkgMyAxMiBDIDMgMTMuNjQ1MDEgNC4zNTQ5OTA0IDE1IDYgMTUgQyA2LjczMjA3NzEgMTUgNy4zOTg1Mzk5IDE0LjcyMjE0NiA3LjkyMTg3NSAxNC4yNzkyOTcgTCAxNS4wNTY2NDEgMTguNDM5NDUzIEMgMTUuMDIxNTU1IDE4LjYyMTUxNCAxNSAxOC44MDgzODYgMTUgMTkgQyAxNSAyMC42NDUwMSAxNi4zNTQ5OSAyMiAxOCAyMiBDIDE5LjY0NTAxIDIyIDIxIDIwLjY0NTAxIDIxIDE5IEMgMjEgMTcuMzU0OTkgMTkuNjQ1MDEgMTYgMTggMTYgQyAxNy4yNjc0OCAxNiAxNi42MDE1OTMgMTYuMjc5MzI4IDE2LjA3ODEyNSAxNi43MjI2NTYgTCA4Ljk0MzM1OTQgMTIuNTU4NTk0IEMgOC45NzgyMDk1IDEyLjM3NzEyMiA5IDEyLjE5MDk1MyA5IDEyIEMgOSAxMS44MDkwNDcgOC45NzgyMDk1IDExLjYyMjg3OCA4Ljk0MzM1OTQgMTEuNDQxNDA2IEwgMTYuMDc4MTI1IDcuMjc5Mjk2OSBDIDE2LjYwMTQ2IDcuNzIyMTQ2MSAxNy4yNjc5MjMgOCAxOCA4IEMgMTkuNjQ1MDEgOCAyMSA2LjY0NTAwOTYgMjEgNSBDIDIxIDMuMzU0OTkwNCAxOS42NDUwMSAyIDE4IDIgeiBNIDE4IDQgQyAxOC41NjQxMjkgNCAxOSA0LjQzNTg3MDYgMTkgNSBDIDE5IDUuNTY0MTI5NCAxOC41NjQxMjkgNiAxOCA2IEMgMTcuNDM1ODcxIDYgMTcgNS41NjQxMjk0IDE3IDUgQyAxNyA0LjQzNTg3MDYgMTcuNDM1ODcxIDQgMTggNCB6IE0gNiAxMSBDIDYuNTY0MTI5NCAxMSA3IDExLjQzNTg3MSA3IDEyIEMgNyAxMi41NjQxMjkgNi41NjQxMjk0IDEzIDYgMTMgQyA1LjQzNTg3MDYgMTMgNSAxMi41NjQxMjkgNSAxMiBDIDUgMTEuNDM1ODcxIDUuNDM1ODcwNiAxMSA2IDExIHogTSAxOCAxOCBDIDE4LjU2NDEyOSAxOCAxOSAxOC40MzU4NzEgMTkgMTkgQyAxOSAxOS41NjQxMjkgMTguNTY0MTI5IDIwIDE4IDIwIEMgMTcuNDM1ODcxIDIwIDE3IDE5LjU2NDEyOSAxNyAxOSBDIDE3IDE4LjQzNTg3MSAxNy40MzU4NzEgMTggMTggMTggeiIvPgogIDwvZz4KPC9zdmc+Cg==);
--jp-icon-spreadsheet: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDEganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNENBRjUwIiBkPSJNMi4yIDIuMnYxNy42aDE3LjZWMi4ySDIuMnptMTUuNCA3LjdoLTUuNVY0LjRoNS41djUuNXpNOS45IDQuNHY1LjVINC40VjQuNGg1LjV6bS01LjUgNy43aDUuNXY1LjVINC40di01LjV6bTcuNyA1LjV2LTUuNWg1LjV2NS41aC01LjV6Ii8+Cjwvc3ZnPgo=);
--jp-icon-stop: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogICAgICAgIDxwYXRoIGQ9Ik02IDZoMTJ2MTJINnoiLz4KICAgIDwvZz4KPC9zdmc+Cg==);
--jp-icon-tab: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIxIDNIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2SDNWNWgxMHY0aDh2MTB6Ii8+CiAgPC9nPgo8L3N2Zz4K);
--jp-icon-table-rows: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMSw4SDNWNGgxOFY4eiBNMjEsMTBIM3Y0aDE4VjEweiBNMjEsMTZIM3Y0aDE4VjE2eiIvPgogICAgPC9nPgo8L3N2Zz4K);
--jp-icon-tag: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCA0MyAyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CgkJPHBhdGggZD0iTTI4LjgzMzIgMTIuMzM0TDMyLjk5OTggMTYuNTAwN0wzNy4xNjY1IDEyLjMzNEgyOC44MzMyWiIvPgoJCTxwYXRoIGQ9Ik0xNi4yMDk1IDIxLjYxMDRDMTUuNjg3MyAyMi4xMjk5IDE0Ljg0NDMgMjIuMTI5OSAxNC4zMjQ4IDIxLjYxMDRMNi45ODI5IDE0LjcyNDVDNi41NzI0IDE0LjMzOTQgNi4wODMxMyAxMy42MDk4IDYuMDQ3ODYgMTMuMDQ4MkM1Ljk1MzQ3IDExLjUyODggNi4wMjAwMiA4LjYxOTQ0IDYuMDY2MjEgNy4wNzY5NUM2LjA4MjgxIDYuNTE0NzcgNi41NTU0OCA2LjA0MzQ3IDcuMTE4MDQgNi4wMzA1NUM5LjA4ODYzIDUuOTg0NzMgMTMuMjYzOCA1LjkzNTc5IDEzLjY1MTggNi4zMjQyNUwyMS43MzY5IDEzLjYzOUMyMi4yNTYgMTQuMTU4NSAyMS43ODUxIDE1LjQ3MjQgMjEuMjYyIDE1Ljk5NDZMMTYuMjA5NSAyMS42MTA0Wk05Ljc3NTg1IDguMjY1QzkuMzM1NTEgNy44MjU2NiA4LjYyMzUxIDcuODI1NjYgOC4xODI4IDguMjY1QzcuNzQzNDYgOC43MDU3MSA3Ljc0MzQ2IDkuNDE3MzMgOC4xODI4IDkuODU2NjdDOC42MjM4MiAxMC4yOTY0IDkuMzM1ODIgMTAuMjk2NCA5Ljc3NTg1IDkuODU2NjdDMTAuMjE1NiA5LjQxNzMzIDEwLjIxNTYgOC43MDUzMyA5Ljc3NTg1IDguMjY1WiIvPgoJPC9nPgo8L3N2Zz4K);
--jp-icon-terminal: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiA+CiAgICA8cmVjdCBjbGFzcz0ianAtdGVybWluYWwtaWNvbi1iYWNrZ3JvdW5kLWNvbG9yIGpwLWljb24tc2VsZWN0YWJsZSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDIpIiBmaWxsPSIjMzMzMzMzIi8+CiAgICA8cGF0aCBjbGFzcz0ianAtdGVybWluYWwtaWNvbi1jb2xvciBqcC1pY29uLXNlbGVjdGFibGUtaW52ZXJzZSIgZD0iTTUuMDU2NjQgOC43NjE3MkM1LjA1NjY0IDguNTk3NjYgNS4wMzEyNSA4LjQ1MzEyIDQuOTgwNDcgOC4zMjgxMkM0LjkzMzU5IDguMTk5MjIgNC44NTU0NyA4LjA4MjAzIDQuNzQ2MDkgNy45NzY1NkM0LjY0MDYyIDcuODcxMDkgNC41IDcuNzc1MzkgNC4zMjQyMiA3LjY4OTQ1QzQuMTUyMzQgNy41OTk2MSAzLjk0MzM2IDcuNTExNzIgMy42OTcyNyA3LjQyNTc4QzMuMzAyNzMgNy4yODUxNiAyLjk0MzM2IDcuMTM2NzIgMi42MTkxNCA2Ljk4MDQ3QzIuMjk0OTIgNi44MjQyMiAyLjAxNzU4IDYuNjQyNTggMS43ODcxMSA2LjQzNTU1QzEuNTYwNTUgNi4yMjg1MiAxLjM4NDc3IDUuOTg4MjggMS4yNTk3NyA1LjcxNDg0QzEuMTM0NzcgNS40Mzc1IDEuMDcyMjcgNS4xMDkzOCAxLjA3MjI3IDQuNzMwNDdDMS4wNzIyNyA0LjM5ODQ0IDEuMTI4OTEgNC4wOTU3IDEuMjQyMTkgMy44MjIyN0MxLjM1NTQ3IDMuNTQ0OTIgMS41MTU2MiAzLjMwNDY5IDEuNzIyNjYgMy4xMDE1NkMxLjkyOTY5IDIuODk4NDQgMi4xNzk2OSAyLjczNDM3IDIuNDcyNjYgMi42MDkzOEMyLjc2NTYyIDIuNDg0MzggMy4wOTE4IDIuNDA0MyAzLjQ1MTE3IDIuMzY5MTRWMS4xMDkzOEg0LjM4ODY3VjIuMzgwODZDNC43NDAyMyAyLjQyNzczIDUuMDU2NjQgMi41MjM0NCA1LjMzNzg5IDIuNjY3OTdDNS42MTkxNCAyLjgxMjUgNS44NTc0MiAzLjAwMTk1IDYuMDUyNzMgMy4yMzYzM0M2LjI1MTk1IDMuNDY2OCA2LjQwNDMgMy43NDAyMyA2LjUwOTc3IDQuMDU2NjRDNi42MTkxNCA0LjM2OTE0IDYuNjczODMgNC43MjA3IDYuNjczODMgNS4xMTEzM0g1LjA0NDkyQzUuMDQ0OTIgNC42Mzg2NyA0LjkzNzUgNC4yODEyNSA0LjcyMjY2IDQuMDM5MDZDNC41MDc4MSAzLjc5Mjk3IDQuMjE2OCAzLjY2OTkyIDMuODQ5NjEgMy42Njk5MkMzLjY1MDM5IDMuNjY5OTIgMy40NzY1NiAzLjY5NzI3IDMuMzI4MTIgMy43NTE5NUMzLjE4MzU5IDMuODAyNzMgMy4wNjQ0NSAzLjg3Njk1IDIuOTcwNyAzLjk3NDYxQzIuODc2OTUgNC4wNjgzNiAyLjgwNjY0IDQuMTc5NjkgMi43NTk3NyA0LjMwODU5QzIuNzE2OCA0LjQzNzUgMi42OTUzMSA0LjU3ODEyIDIuNjk1MzEgNC43MzA0N0MyLjY5NTMxIDQuODgyODEgMi43MTY4IDUuMDE5NTMgMi43NTk3NyA1LjE0MDYyQzIuODA2NjQgNS4yNTc4MSAyLjg4MjgxIDUuMzY3MTkgMi45ODgyOCA1LjQ2ODc1QzMuMDk3NjYgNS41NzAzMSAzLjI0MDIzIDUuNjY3OTcgMy40MTYwMiA1Ljc2MTcyQzMuNTkxOCA1Ljg1MTU2IDMuODEwNTUgNS45NDMzNiA0LjA3MjI3IDYuMDM3MTFDNC40NjY4IDYuMTg1NTUgNC44MjQyMiA2LjMzOTg0IDUuMTQ0NTMgNi41QzUuNDY0ODQgNi42NTYyNSA1LjczODI4IDYuODM5ODQgNS45NjQ4NCA3LjA1MDc4QzYuMTk1MzEgNy4yNTc4MSA2LjM3MTA5IDcuNSA2LjQ5MjE5IDcuNzc3MzRDNi42MTcxOSA4LjA1MDc4IDYuNjc5NjkgOC4zNzUgNi42Nzk2OSA4Ljc1QzYuNjc5NjkgOS4wOTM3NSA2LjYyMzA1IDkuNDA0MyA2LjUwOTc3IDkuNjgxNjRDNi4zOTY0OCA5Ljk1NTA4IDYuMjM0MzggMTAuMTkxNCA2LjAyMzQ0IDEwLjM5MDZDNS44MTI1IDEwLjU4OTggNS41NTg1OSAxMC43NSA1LjI2MTcyIDEwLjg3MTFDNC45NjQ4NCAxMC45ODgzIDQuNjMyODEgMTEuMDY0NSA0LjI2NTYyIDExLjA5OTZWMTIuMjQ4SDMuMzMzOThWMTEuMDk5NkMzLjAwMTk1IDExLjA2ODQgMi42Nzk2OSAxMC45OTYxIDIuMzY3MTkgMTAuODgyOEMyLjA1NDY5IDEwLjc2NTYgMS43NzczNCAxMC41OTc3IDEuNTM1MTYgMTAuMzc4OUMxLjI5Njg4IDEwLjE2MDIgMS4xMDU0NyA5Ljg4NDc3IDAuOTYwOTM4IDkuNTUyNzNDMC44MTY0MDYgOS4yMTY4IDAuNzQ0MTQxIDguODE0NDUgMC43NDQxNDEgOC4zNDU3SDIuMzc4OTFDMi4zNzg5MSA4LjYyNjk1IDIuNDE5OTIgOC44NjMyOCAyLjUwMTk1IDkuMDU0NjlDMi41ODM5OCA5LjI0MjE5IDIuNjg5NDUgOS4zOTI1OCAyLjgxODM2IDkuNTA1ODZDMi45NTExNyA5LjYxNTIzIDMuMTAxNTYgOS42OTMzNiAzLjI2OTUzIDkuNzQwMjNDMy40Mzc1IDkuNzg3MTEgMy42MDkzOCA5LjgxMDU1IDMuNzg1MTYgOS44MTA1NUM0LjIwMzEyIDkuODEwNTUgNC41MTk1MyA5LjcxMjg5IDQuNzM0MzggOS41MTc1OEM0Ljk0OTIyIDkuMzIyMjcgNS4wNTY2NCA5LjA3MDMxIDUuMDU2NjQgOC43NjE3MlpNMTMuNDE4IDEyLjI3MTVIOC4wNzQyMlYxMUgxMy40MThWMTIuMjcxNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuOTUyNjQgNikiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=);
--jp-icon-text-editor: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtdGV4dC1lZGl0b3ItaWNvbi1jb2xvciBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiM2MTYxNjEiIGQ9Ik0xNSAxNUgzdjJoMTJ2LTJ6bTAtOEgzdjJoMTJWN3pNMyAxM2gxOHYtMkgzdjJ6bTAgOGgxOHYtMkgzdjJ6TTMgM3YyaDE4VjNIM3oiLz4KPC9zdmc+Cg==);
--jp-icon-toc: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxwYXRoIGQ9Ik03LDVIMjFWN0g3VjVNNywxM1YxMUgyMVYxM0g3TTQsNC41QTEuNSwxLjUgMCAwLDEgNS41LDZBMS41LDEuNSAwIDAsMSA0LDcuNUExLjUsMS41IDAgMCwxIDIuNSw2QTEuNSwxLjUgMCAwLDEgNCw0LjVNNCwxMC41QTEuNSwxLjUgMCAwLDEgNS41LDEyQTEuNSwxLjUgMCAwLDEgNCwxMy41QTEuNSwxLjUgMCAwLDEgMi41LDEyQTEuNSwxLjUgMCAwLDEgNCwxMC41TTcsMTlWMTdIMjFWMTlIN000LDE2LjVBMS41LDEuNSAwIDAsMSA1LjUsMThBMS41LDEuNSAwIDAsMSA0LDE5LjVBMS41LDEuNSAwIDAsMSAyLjUsMThBMS41LDEuNSAwIDAsMSA0LDE2LjVaIiAvPgogIDwvZz4KPC9zdmc+Cg==);
--jp-icon-tree-view: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMiAxMVYzaC03djNIOVYzSDJ2OGg3VjhoMnYxMGg0djNoN3YtOGgtN3YzaC0yVjhoMnYzeiIvPgogICAgPC9nPgo8L3N2Zz4K);
--jp-icon-trusted: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI1Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMykiIGQ9Ik0xLjg2MDk0IDExLjQ0MDlDMC44MjY0NDggOC43NzAyNyAwLjg2Mzc3OSA2LjA1NzY0IDEuMjQ5MDcgNC4xOTkzMkMyLjQ4MjA2IDMuOTMzNDcgNC4wODA2OCAzLjQwMzQ3IDUuNjAxMDIgMi44NDQ5QzcuMjM1NDkgMi4yNDQ0IDguODU2NjYgMS41ODE1IDkuOTg3NiAxLjA5NTM5QzExLjA1OTcgMS41ODM0MSAxMi42MDk0IDIuMjQ0NCAxNC4yMTggMi44NDMzOUMxNS43NTAzIDMuNDEzOTQgMTcuMzk5NSAzLjk1MjU4IDE4Ljc1MzkgNC4yMTM4NUMxOS4xMzY0IDYuMDcxNzcgMTkuMTcwOSA4Ljc3NzIyIDE4LjEzOSAxMS40NDA5QzE3LjAzMDMgMTQuMzAzMiAxNC42NjY4IDE3LjE4NDQgOS45OTk5OSAxOC45MzU0QzUuMzMzMiAxNy4xODQ0IDIuOTY5NjggMTQuMzAzMiAxLjg2MDk0IDExLjQ0MDlaIi8+CiAgICA8cGF0aCBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiMzMzMzMzMiIHN0cm9rZT0iIzMzMzMzMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCA5Ljg2NzE5KSIgZD0iTTIuODYwMTUgNC44NjUzNUwwLjcyNjU0OSAyLjk5OTU5TDAgMy42MzA0NUwyLjg2MDE1IDYuMTMxNTdMOCAwLjYzMDg3Mkw3LjI3ODU3IDBMMi44NjAxNSA0Ljg2NTM1WiIvPgo8L3N2Zz4K);
--jp-icon-undo: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyLjUgOGMtMi42NSAwLTUuMDUuOTktNi45IDIuNkwyIDd2OWg5bC0zLjYyLTMuNjJjMS4zOS0xLjE2IDMuMTYtMS44OCA1LjEyLTEuODggMy41NCAwIDYuNTUgMi4zMSA3LjYgNS41bDIuMzctLjc4QzIxLjA4IDExLjAzIDE3LjE1IDggMTIuNSA4eiIvPgogIDwvZz4KPC9zdmc+Cg==);
--jp-icon-user: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE2IDdhNCA0IDAgMTEtOCAwIDQgNCAwIDAxOCAwek0xMiAxNGE3IDcgMCAwMC03IDdoMTRhNyA3IDAgMDAtNy03eiIvPgogIDwvZz4KPC9zdmc+Cg==);
--jp-icon-users: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGcgY2xhc3M9ImpwLWljb24zIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjczMjcgMCAwIDEuNzMyNyAtMy42MjgyIC4wOTk1NzcpIiBmaWxsPSIjNjE2MTYxIj4KICA8cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCgxLjUsMCwwLDEuNSwwLC02KSIgZD0ibTEyLjE4NiA3LjUwOThjLTEuMDUzNSAwLTEuOTc1NyAwLjU2NjUtMi40Nzg1IDEuNDEwMiAwLjc1MDYxIDAuMzEyNzcgMS4zOTc0IDAuODI2NDggMS44NzMgMS40NzI3aDMuNDg2M2MwLTEuNTkyLTEuMjg4OS0yLjg4MjgtMi44ODA5LTIuODgyOHoiLz4KICA8cGF0aCBkPSJtMjAuNDY1IDIuMzg5NWEyLjE4ODUgMi4xODg1IDAgMCAxLTIuMTg4NCAyLjE4ODUgMi4xODg1IDIuMTg4NSAwIDAgMS0yLjE4ODUtMi4xODg1IDIuMTg4NSAyLjE4ODUgMCAwIDEgMi4xODg1LTIuMTg4NSAyLjE4ODUgMi4xODg1IDAgMCAxIDIuMTg4NCAyLjE4ODV6Ii8+CiAgPHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoMS41LDAsMCwxLjUsMCwtNikiIGQ9Im0zLjU4OTggOC40MjE5Yy0xLjExMjYgMC0yLjAxMzcgMC45MDExMS0yLjAxMzcgMi4wMTM3aDIuODE0NWMwLjI2Nzk3LTAuMzczMDkgMC41OTA3LTAuNzA0MzUgMC45NTg5OC0wLjk3ODUyLTAuMzQ0MzMtMC42MTY4OC0xLjAwMzEtMS4wMzUyLTEuNzU5OC0xLjAzNTJ6Ii8+CiAgPHBhdGggZD0ibTYuOTE1NCA0LjYyM2ExLjUyOTQgMS41Mjk0IDAgMCAxLTEuNTI5NCAxLjUyOTQgMS41Mjk0IDEuNTI5NCAwIDAgMS0xLjUyOTQtMS41Mjk0IDEuNTI5NCAxLjUyOTQgMCAwIDEgMS41Mjk0LTEuNTI5NCAxLjUyOTQgMS41Mjk0IDAgMCAxIDEuNTI5NCAxLjUyOTR6Ii8+CiAgPHBhdGggZD0ibTYuMTM1IDEzLjUzNWMwLTMuMjM5MiAyLjYyNTktNS44NjUgNS44NjUtNS44NjUgMy4yMzkyIDAgNS44NjUgMi42MjU5IDUuODY1IDUuODY1eiIvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMy43Njg1IiByPSIyLjk2ODUiLz4KIDwvZz4KPC9zdmc+Cg==);
--jp-icon-vega: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbjEganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMjEyMTIxIj4KICAgIDxwYXRoIGQ9Ik0xMC42IDUuNGwyLjItMy4ySDIuMnY3LjNsNC02LjZ6Ii8+CiAgICA8cGF0aCBkPSJNMTUuOCAyLjJsLTQuNCA2LjZMNyA2LjNsLTQuOCA4djUuNWgxNy42VjIuMmgtNHptLTcgMTUuNEg1LjV2LTQuNGgzLjN2NC40em00LjQgMEg5LjhWOS44aDMuNHY3Ljh6bTQuNCAwaC0zLjRWNi41aDMuNHYxMS4xeiIvPgogIDwvZz4KPC9zdmc+Cg==);
--jp-icon-word: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KIDxnIGNsYXNzPSJqcC1pY29uMiIgZmlsbD0iIzQxNDE0MSI+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+CiA8L2c+CiA8ZyBjbGFzcz0ianAtaWNvbi1hY2NlbnQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSguNDMgLjA0MDEpIiBmaWxsPSIjZmZmIj4KICA8cGF0aCBkPSJtNC4xNCA4Ljc2cTAuMDY4Mi0xLjg5IDIuNDItMS44OSAxLjE2IDAgMS42OCAwLjQyIDAuNTY3IDAuNDEgMC41NjcgMS4xNnYzLjQ3cTAgMC40NjIgMC41MTQgMC40NjIgMC4xMDMgMCAwLjItMC4wMjMxdjAuNzE0cS0wLjM5OSAwLjEwMy0wLjY1MSAwLjEwMy0wLjQ1MiAwLTAuNjkzLTAuMjItMC4yMzEtMC4yLTAuMjg0LTAuNjYyLTAuOTU2IDAuODcyLTIgMC44NzItMC45MDMgMC0xLjQ3LTAuNDcyLTAuNTI1LTAuNDcyLTAuNTI1LTEuMjYgMC0wLjI2MiAwLjA0NTItMC40NzIgMC4wNTY3LTAuMjIgMC4xMTYtMC4zNzggMC4wNjgyLTAuMTY4IDAuMjMxLTAuMzA0IDAuMTU4LTAuMTQ3IDAuMjYyLTAuMjQyIDAuMTE2LTAuMDkxNCAwLjM2OC0wLjE2OCAwLjI2Mi0wLjA5MTQgMC4zOTktMC4xMjYgMC4xMzYtMC4wNDUyIDAuNDcyLTAuMTAzIDAuMzM2LTAuMDU3OCAwLjUwNC0wLjA3OTggMC4xNTgtMC4wMjMxIDAuNTY3LTAuMDc5OCAwLjU1Ni0wLjA2ODIgMC43NzctMC4yMjEgMC4yMi0wLjE1MiAwLjIyLTAuNDQxdi0wLjI1MnEwLTAuNDMtMC4zNTctMC42NjItMC4zMzYtMC4yMzEtMC45NzYtMC4yMzEtMC42NjIgMC0wLjk5OCAwLjI2Mi0wLjMzNiAwLjI1Mi0wLjM5OSAwLjc5OHptMS44OSAzLjY4cTAuNzg4IDAgMS4yNi0wLjQxIDAuNTA0LTAuNDIgMC41MDQtMC45MDN2LTEuMDVxLTAuMjg0IDAuMTM2LTAuODYxIDAuMjMxLTAuNTY3IDAuMDkxNC0wLjk4NyAwLjE1OC0wLjQyIDAuMDY4Mi0wLjc2NiAwLjMyNi0wLjMzNiAwLjI1Mi0wLjMzNiAwLjcwNHQwLjMwNCAwLjcwNCAwLjg2MSAwLjI1MnoiIHN0cm9rZS13aWR0aD0iMS4wNSIvPgogIDxwYXRoIGQ9Im0xMCA0LjU2aDAuOTQ1djMuMTVxMC42NTEtMC45NzYgMS44OS0wLjk3NiAxLjE2IDAgMS44OSAwLjg0IDAuNjgyIDAuODQgMC42ODIgMi4zMSAwIDEuNDctMC43MDQgMi40Mi0wLjcwNCAwLjg4Mi0xLjg5IDAuODgyLTEuMjYgMC0xLjg5LTEuMDJ2MC43NjZoLTAuODV6bTIuNjIgMy4wNHEtMC43NDYgMC0xLjE2IDAuNjQtMC40NTIgMC42My0wLjQ1MiAxLjY4IDAgMS4wNSAwLjQ1MiAxLjY4dDEuMTYgMC42M3EwLjc3NyAwIDEuMjYtMC42MyAwLjQ5NC0wLjY0IDAuNDk0LTEuNjggMC0xLjA1LTAuNDcyLTEuNjgtMC40NjItMC42NC0xLjI2LTAuNjR6IiBzdHJva2Utd2lkdGg9IjEuMDUiLz4KICA8cGF0aCBkPSJtMi43MyAxNS44IDEzLjYgMC4wMDgxYzAuMDA2OSAwIDAtMi42IDAtMi42IDAtMC4wMDc4LTEuMTUgMC0xLjE1IDAtMC4wMDY5IDAtMC4wMDgzIDEuNS0wLjAwODMgMS41LTJlLTMgLTAuMDAxNC0xMS4zLTAuMDAxNC0xMS4zLTAuMDAxNGwtMC4wMDU5Mi0xLjVjMC0wLjAwNzgtMS4xNyAwLjAwMTMtMS4xNyAwLjAwMTN6IiBzdHJva2Utd2lkdGg9Ii45NzUiLz4KIDwvZz4KPC9zdmc+Cg==);
--jp-icon-yaml: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi1jb250cmFzdDIganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjRDgxQjYwIj4KICAgIDxwYXRoIGQ9Ik03LjIgMTguNnYtNS40TDMgNS42aDMuM2wxLjQgMy4xYy4zLjkuNiAxLjYgMSAyLjUuMy0uOC42LTEuNiAxLTIuNWwxLjQtMy4xaDMuNGwtNC40IDcuNnY1LjVsLTIuOS0uMXoiLz4KICAgIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE3LjYiIGN5PSIxNi41IiByPSIyLjEiLz4KICAgIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE3LjYiIGN5PSIxMSIgcj0iMi4xIi8+CiAgPC9nPgo8L3N2Zz4K);
}

/_ Icon CSS class declarations _/

.jp-AddAboveIcon {
background-image: var(--jp-icon-add-above);
}

.jp-AddBelowIcon {
background-image: var(--jp-icon-add-below);
}

.jp-AddIcon {
background-image: var(--jp-icon-add);
}

.jp-BellIcon {
background-image: var(--jp-icon-bell);
}

.jp-BugDotIcon {
background-image: var(--jp-icon-bug-dot);
}

.jp-BugIcon {
background-image: var(--jp-icon-bug);
}

.jp-BuildIcon {
background-image: var(--jp-icon-build);
}

.jp-CaretDownEmptyIcon {
background-image: var(--jp-icon-caret-down-empty);
}

.jp-CaretDownEmptyThinIcon {
background-image: var(--jp-icon-caret-down-empty-thin);
}

.jp-CaretDownIcon {
background-image: var(--jp-icon-caret-down);
}

.jp-CaretLeftIcon {
background-image: var(--jp-icon-caret-left);
}

.jp-CaretRightIcon {
background-image: var(--jp-icon-caret-right);
}

.jp-CaretUpEmptyThinIcon {
background-image: var(--jp-icon-caret-up-empty-thin);
}

.jp-CaretUpIcon {
background-image: var(--jp-icon-caret-up);
}

.jp-CaseSensitiveIcon {
background-image: var(--jp-icon-case-sensitive);
}

.jp-CheckIcon {
background-image: var(--jp-icon-check);
}

.jp-CircleEmptyIcon {
background-image: var(--jp-icon-circle-empty);
}

.jp-CircleIcon {
background-image: var(--jp-icon-circle);
}

.jp-ClearIcon {
background-image: var(--jp-icon-clear);
}

.jp-CloseIcon {
background-image: var(--jp-icon-close);
}

.jp-CodeCheckIcon {
background-image: var(--jp-icon-code-check);
}

.jp-CodeIcon {
background-image: var(--jp-icon-code);
}

.jp-CollapseAllIcon {
background-image: var(--jp-icon-collapse-all);
}

.jp-ConsoleIcon {
background-image: var(--jp-icon-console);
}

.jp-CopyIcon {
background-image: var(--jp-icon-copy);
}

.jp-CopyrightIcon {
background-image: var(--jp-icon-copyright);
}

.jp-CutIcon {
background-image: var(--jp-icon-cut);
}

.jp-DeleteIcon {
background-image: var(--jp-icon-delete);
}

.jp-DownloadIcon {
background-image: var(--jp-icon-download);
}

.jp-DuplicateIcon {
background-image: var(--jp-icon-duplicate);
}

.jp-EditIcon {
background-image: var(--jp-icon-edit);
}

.jp-EllipsesIcon {
background-image: var(--jp-icon-ellipses);
}

.jp-ErrorIcon {
background-image: var(--jp-icon-error);
}

.jp-ExpandAllIcon {
background-image: var(--jp-icon-expand-all);
}

.jp-ExtensionIcon {
background-image: var(--jp-icon-extension);
}

.jp-FastForwardIcon {
background-image: var(--jp-icon-fast-forward);
}

.jp-FileIcon {
background-image: var(--jp-icon-file);
}

.jp-FileUploadIcon {
background-image: var(--jp-icon-file-upload);
}

.jp-FilterDotIcon {
background-image: var(--jp-icon-filter-dot);
}

.jp-FilterIcon {
background-image: var(--jp-icon-filter);
}

.jp-FilterListIcon {
background-image: var(--jp-icon-filter-list);
}

.jp-FolderFavoriteIcon {
background-image: var(--jp-icon-folder-favorite);
}

.jp-FolderIcon {
background-image: var(--jp-icon-folder);
}

.jp-HomeIcon {
background-image: var(--jp-icon-home);
}

.jp-Html5Icon {
background-image: var(--jp-icon-html5);
}

.jp-ImageIcon {
background-image: var(--jp-icon-image);
}

.jp-InfoIcon {
background-image: var(--jp-icon-info);
}

.jp-InspectorIcon {
background-image: var(--jp-icon-inspector);
}

.jp-JsonIcon {
background-image: var(--jp-icon-json);
}

.jp-JuliaIcon {
background-image: var(--jp-icon-julia);
}

.jp-JupyterFaviconIcon {
background-image: var(--jp-icon-jupyter-favicon);
}

.jp-JupyterIcon {
background-image: var(--jp-icon-jupyter);
}

.jp-JupyterlabWordmarkIcon {
background-image: var(--jp-icon-jupyterlab-wordmark);
}

.jp-KernelIcon {
background-image: var(--jp-icon-kernel);
}

.jp-KeyboardIcon {
background-image: var(--jp-icon-keyboard);
}

.jp-LaunchIcon {
background-image: var(--jp-icon-launch);
}

.jp-LauncherIcon {
background-image: var(--jp-icon-launcher);
}

.jp-LineFormIcon {
background-image: var(--jp-icon-line-form);
}

.jp-LinkIcon {
background-image: var(--jp-icon-link);
}

.jp-ListIcon {
background-image: var(--jp-icon-list);
}

.jp-MarkdownIcon {
background-image: var(--jp-icon-markdown);
}

.jp-MoveDownIcon {
background-image: var(--jp-icon-move-down);
}

.jp-MoveUpIcon {
background-image: var(--jp-icon-move-up);
}

.jp-NewFolderIcon {
background-image: var(--jp-icon-new-folder);
}

.jp-NotTrustedIcon {
background-image: var(--jp-icon-not-trusted);
}

.jp-NotebookIcon {
background-image: var(--jp-icon-notebook);
}

.jp-NumberingIcon {
background-image: var(--jp-icon-numbering);
}

.jp-OfflineBoltIcon {
background-image: var(--jp-icon-offline-bolt);
}

.jp-PaletteIcon {
background-image: var(--jp-icon-palette);
}

.jp-PasteIcon {
background-image: var(--jp-icon-paste);
}

.jp-PdfIcon {
background-image: var(--jp-icon-pdf);
}

.jp-PythonIcon {
background-image: var(--jp-icon-python);
}

.jp-RKernelIcon {
background-image: var(--jp-icon-r-kernel);
}

.jp-ReactIcon {
background-image: var(--jp-icon-react);
}

.jp-RedoIcon {
background-image: var(--jp-icon-redo);
}

.jp-RefreshIcon {
background-image: var(--jp-icon-refresh);
}

.jp-RegexIcon {
background-image: var(--jp-icon-regex);
}

.jp-RunIcon {
background-image: var(--jp-icon-run);
}

.jp-RunningIcon {
background-image: var(--jp-icon-running);
}

.jp-SaveIcon {
background-image: var(--jp-icon-save);
}

.jp-SearchIcon {
background-image: var(--jp-icon-search);
}

.jp-SettingsIcon {
background-image: var(--jp-icon-settings);
}

.jp-ShareIcon {
background-image: var(--jp-icon-share);
}

.jp-SpreadsheetIcon {
background-image: var(--jp-icon-spreadsheet);
}

.jp-StopIcon {
background-image: var(--jp-icon-stop);
}

.jp-TabIcon {
background-image: var(--jp-icon-tab);
}

.jp-TableRowsIcon {
background-image: var(--jp-icon-table-rows);
}

.jp-TagIcon {
background-image: var(--jp-icon-tag);
}

.jp-TerminalIcon {
background-image: var(--jp-icon-terminal);
}

.jp-TextEditorIcon {
background-image: var(--jp-icon-text-editor);
}

.jp-TocIcon {
background-image: var(--jp-icon-toc);
}

.jp-TreeViewIcon {
background-image: var(--jp-icon-tree-view);
}

.jp-TrustedIcon {
background-image: var(--jp-icon-trusted);
}

.jp-UndoIcon {
background-image: var(--jp-icon-undo);
}

.jp-UserIcon {
background-image: var(--jp-icon-user);
}

.jp-UsersIcon {
background-image: var(--jp-icon-users);
}

.jp-VegaIcon {
background-image: var(--jp-icon-vega);
}

.jp-WordIcon {
background-image: var(--jp-icon-word);
}

.jp-YamlIcon {
background-image: var(--jp-icon-yaml);
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

/\*\*

- (DEPRECATED) Support for consuming icons as CSS background images
  \*/

.jp-Icon,
.jp-MaterialIcon {
background-position: center;
background-repeat: no-repeat;
background-size: 16px;
min-width: 16px;
min-height: 16px;
}

.jp-Icon-cover {
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}

/\*\*

- (DEPRECATED) Support for specific CSS icon sizes
  \*/

.jp-Icon-16 {
background-size: 16px;
min-width: 16px;
min-height: 16px;
}

.jp-Icon-18 {
background-size: 18px;
min-width: 18px;
min-height: 18px;
}

.jp-Icon-20 {
background-size: 20px;
min-width: 20px;
min-height: 20px;
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

.lm-TabBar .lm-TabBar-addButton {
align-items: center;
display: flex;
padding: 4px;
padding-bottom: 5px;
margin-right: 1px;
background-color: var(--jp-layout-color2);
}

.lm-TabBar .lm-TabBar-addButton:hover {
background-color: var(--jp-layout-color1);
}

.lm-DockPanel-tabBar .lm-TabBar-tab {
width: var(--jp-private-horizontal-tab-width);
}

.lm-DockPanel-tabBar .lm-TabBar-content {
flex: unset;
}

.lm-DockPanel-tabBar[data-orientation='horizontal'] {
flex: 1 1 auto;
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

/\*\*

- Support for icons as inline SVG HTMLElements
  \*/

/_ recolor the primary elements of an icon _/
.jp-icon0[fill] {
fill: var(--jp-inverse-layout-color0);
}

.jp-icon1[fill] {
fill: var(--jp-inverse-layout-color1);
}

.jp-icon2[fill] {
fill: var(--jp-inverse-layout-color2);
}

.jp-icon3[fill] {
fill: var(--jp-inverse-layout-color3);
}

.jp-icon4[fill] {
fill: var(--jp-inverse-layout-color4);
}

.jp-icon0[stroke] {
stroke: var(--jp-inverse-layout-color0);
}

.jp-icon1[stroke] {
stroke: var(--jp-inverse-layout-color1);
}

.jp-icon2[stroke] {
stroke: var(--jp-inverse-layout-color2);
}

.jp-icon3[stroke] {
stroke: var(--jp-inverse-layout-color3);
}

.jp-icon4[stroke] {
stroke: var(--jp-inverse-layout-color4);
}

/_ recolor the accent elements of an icon _/
.jp-icon-accent0[fill] {
fill: var(--jp-layout-color0);
}

.jp-icon-accent1[fill] {
fill: var(--jp-layout-color1);
}

.jp-icon-accent2[fill] {
fill: var(--jp-layout-color2);
}

.jp-icon-accent3[fill] {
fill: var(--jp-layout-color3);
}

.jp-icon-accent4[fill] {
fill: var(--jp-layout-color4);
}

.jp-icon-accent0[stroke] {
stroke: var(--jp-layout-color0);
}

.jp-icon-accent1[stroke] {
stroke: var(--jp-layout-color1);
}

.jp-icon-accent2[stroke] {
stroke: var(--jp-layout-color2);
}

.jp-icon-accent3[stroke] {
stroke: var(--jp-layout-color3);
}

.jp-icon-accent4[stroke] {
stroke: var(--jp-layout-color4);
}

/_ set the color of an icon to transparent _/
.jp-icon-none[fill] {
fill: none;
}

.jp-icon-none[stroke] {
stroke: none;
}

/_ brand icon colors. Same for light and dark _/
.jp-icon-brand0[fill] {
fill: var(--jp-brand-color0);
}

.jp-icon-brand1[fill] {
fill: var(--jp-brand-color1);
}

.jp-icon-brand2[fill] {
fill: var(--jp-brand-color2);
}

.jp-icon-brand3[fill] {
fill: var(--jp-brand-color3);
}

.jp-icon-brand4[fill] {
fill: var(--jp-brand-color4);
}

.jp-icon-brand0[stroke] {
stroke: var(--jp-brand-color0);
}

.jp-icon-brand1[stroke] {
stroke: var(--jp-brand-color1);
}

.jp-icon-brand2[stroke] {
stroke: var(--jp-brand-color2);
}

.jp-icon-brand3[stroke] {
stroke: var(--jp-brand-color3);
}

.jp-icon-brand4[stroke] {
stroke: var(--jp-brand-color4);
}

/_ warn icon colors. Same for light and dark _/
.jp-icon-warn0[fill] {
fill: var(--jp-warn-color0);
}

.jp-icon-warn1[fill] {
fill: var(--jp-warn-color1);
}

.jp-icon-warn2[fill] {
fill: var(--jp-warn-color2);
}

.jp-icon-warn3[fill] {
fill: var(--jp-warn-color3);
}

.jp-icon-warn0[stroke] {
stroke: var(--jp-warn-color0);
}

.jp-icon-warn1[stroke] {
stroke: var(--jp-warn-color1);
}

.jp-icon-warn2[stroke] {
stroke: var(--jp-warn-color2);
}

.jp-icon-warn3[stroke] {
stroke: var(--jp-warn-color3);
}

/_ icon colors that contrast well with each other and most backgrounds _/
.jp-icon-contrast0[fill] {
fill: var(--jp-icon-contrast-color0);
}

.jp-icon-contrast1[fill] {
fill: var(--jp-icon-contrast-color1);
}

.jp-icon-contrast2[fill] {
fill: var(--jp-icon-contrast-color2);
}

.jp-icon-contrast3[fill] {
fill: var(--jp-icon-contrast-color3);
}

.jp-icon-contrast0[stroke] {
stroke: var(--jp-icon-contrast-color0);
}

.jp-icon-contrast1[stroke] {
stroke: var(--jp-icon-contrast-color1);
}

.jp-icon-contrast2[stroke] {
stroke: var(--jp-icon-contrast-color2);
}

.jp-icon-contrast3[stroke] {
stroke: var(--jp-icon-contrast-color3);
}

.jp-icon-dot[fill] {
fill: var(--jp-warn-color0);
}

.jp-jupyter-icon-color[fill] {
fill: var(--jp-jupyter-icon-color, var(--jp-warn-color0));
}

.jp-notebook-icon-color[fill] {
fill: var(--jp-notebook-icon-color, var(--jp-warn-color0));
}

.jp-json-icon-color[fill] {
fill: var(--jp-json-icon-color, var(--jp-warn-color1));
}

.jp-console-icon-color[fill] {
fill: var(--jp-console-icon-color, white);
}

.jp-console-icon-background-color[fill] {
fill: var(--jp-console-icon-background-color, var(--jp-brand-color1));
}

.jp-terminal-icon-color[fill] {
fill: var(--jp-terminal-icon-color, var(--jp-layout-color2));
}

.jp-terminal-icon-background-color[fill] {
fill: var(
--jp-terminal-icon-background-color,
var(--jp-inverse-layout-color2)
);
}

.jp-text-editor-icon-color[fill] {
fill: var(--jp-text-editor-icon-color, var(--jp-inverse-layout-color3));
}

.jp-inspector-icon-color[fill] {
fill: var(--jp-inspector-icon-color, var(--jp-inverse-layout-color3));
}

/_ CSS for icons in selected filebrowser listing items _/
.jp-DirListing-item.jp-mod-selected .jp-icon-selectable[fill] {
fill: #fff;
}

.jp-DirListing-item.jp-mod-selected .jp-icon-selectable-inverse[fill] {
fill: var(--jp-brand-color1);
}

/_ stylelint-disable selector-max-class, selector-max-compound-selectors _/

/\*\*

- TODO: come up with non css-hack solution for showing the busy icon on top
- of the close icon
- CSS for complex behavior of close icon of tabs in the main area tabbar
  \*/
  .lm-DockPanel-tabBar
  .lm-TabBar-tab.lm-mod-closable.jp-mod-dirty
  > .lm-TabBar-tabCloseIcon
  > :not(:hover)
  > .jp-icon3[fill] {
  > fill: none;
  > }

.lm-DockPanel-tabBar
.lm-TabBar-tab.lm-mod-closable.jp-mod-dirty

> .lm-TabBar-tabCloseIcon
> :not(:hover)
> .jp-icon-busy[fill] {
> fill: var(--jp-inverse-layout-color3);
> }

/_ stylelint-enable selector-max-class, selector-max-compound-selectors _/

/_ CSS for icons in status bar _/
#jp-main-statusbar .jp-mod-selected .jp-icon-selectable[fill] {
fill: #fff;
}

#jp-main-statusbar .jp-mod-selected .jp-icon-selectable-inverse[fill] {
fill: var(--jp-brand-color1);
}

/_ special handling for splash icon CSS. While the theme CSS reloads during
splash, the splash icon can loose theming. To prevent that, we set a
default for its color variable _/
:root {
--jp-warn-color0: var(--md-orange-700);
}

/_ not sure what to do with this one, used in filebrowser listing _/
.jp-DragIcon {
margin-right: 4px;
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

/\*\*

- Support for alt colors for icons as inline SVG HTMLElements
  \*/

/_ alt recolor the primary elements of an icon _/
.jp-icon-alt .jp-icon0[fill] {
fill: var(--jp-layout-color0);
}

.jp-icon-alt .jp-icon1[fill] {
fill: var(--jp-layout-color1);
}

.jp-icon-alt .jp-icon2[fill] {
fill: var(--jp-layout-color2);
}

.jp-icon-alt .jp-icon3[fill] {
fill: var(--jp-layout-color3);
}

.jp-icon-alt .jp-icon4[fill] {
fill: var(--jp-layout-color4);
}

.jp-icon-alt .jp-icon0[stroke] {
stroke: var(--jp-layout-color0);
}

.jp-icon-alt .jp-icon1[stroke] {
stroke: var(--jp-layout-color1);
}

.jp-icon-alt .jp-icon2[stroke] {
stroke: var(--jp-layout-color2);
}

.jp-icon-alt .jp-icon3[stroke] {
stroke: var(--jp-layout-color3);
}

.jp-icon-alt .jp-icon4[stroke] {
stroke: var(--jp-layout-color4);
}

/_ alt recolor the accent elements of an icon _/
.jp-icon-alt .jp-icon-accent0[fill] {
fill: var(--jp-inverse-layout-color0);
}

.jp-icon-alt .jp-icon-accent1[fill] {
fill: var(--jp-inverse-layout-color1);
}

.jp-icon-alt .jp-icon-accent2[fill] {
fill: var(--jp-inverse-layout-color2);
}

.jp-icon-alt .jp-icon-accent3[fill] {
fill: var(--jp-inverse-layout-color3);
}

.jp-icon-alt .jp-icon-accent4[fill] {
fill: var(--jp-inverse-layout-color4);
}

.jp-icon-alt .jp-icon-accent0[stroke] {
stroke: var(--jp-inverse-layout-color0);
}

.jp-icon-alt .jp-icon-accent1[stroke] {
stroke: var(--jp-inverse-layout-color1);
}

.jp-icon-alt .jp-icon-accent2[stroke] {
stroke: var(--jp-inverse-layout-color2);
}

.jp-icon-alt .jp-icon-accent3[stroke] {
stroke: var(--jp-inverse-layout-color3);
}

.jp-icon-alt .jp-icon-accent4[stroke] {
stroke: var(--jp-inverse-layout-color4);
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

.jp-icon-hoverShow:not(:hover) .jp-icon-hoverShow-content {
display: none !important;
}

/\*\*

- Support for hover colors for icons as inline SVG HTMLElements
  \*/

/\*\*

- regular colors
  \*/

/_ recolor the primary elements of an icon _/
.jp-icon-hover :hover .jp-icon0-hover[fill] {
fill: var(--jp-inverse-layout-color0);
}

.jp-icon-hover :hover .jp-icon1-hover[fill] {
fill: var(--jp-inverse-layout-color1);
}

.jp-icon-hover :hover .jp-icon2-hover[fill] {
fill: var(--jp-inverse-layout-color2);
}

.jp-icon-hover :hover .jp-icon3-hover[fill] {
fill: var(--jp-inverse-layout-color3);
}

.jp-icon-hover :hover .jp-icon4-hover[fill] {
fill: var(--jp-inverse-layout-color4);
}

.jp-icon-hover :hover .jp-icon0-hover[stroke] {
stroke: var(--jp-inverse-layout-color0);
}

.jp-icon-hover :hover .jp-icon1-hover[stroke] {
stroke: var(--jp-inverse-layout-color1);
}

.jp-icon-hover :hover .jp-icon2-hover[stroke] {
stroke: var(--jp-inverse-layout-color2);
}

.jp-icon-hover :hover .jp-icon3-hover[stroke] {
stroke: var(--jp-inverse-layout-color3);
}

.jp-icon-hover :hover .jp-icon4-hover[stroke] {
stroke: var(--jp-inverse-layout-color4);
}

/_ recolor the accent elements of an icon _/
.jp-icon-hover :hover .jp-icon-accent0-hover[fill] {
fill: var(--jp-layout-color0);
}

.jp-icon-hover :hover .jp-icon-accent1-hover[fill] {
fill: var(--jp-layout-color1);
}

.jp-icon-hover :hover .jp-icon-accent2-hover[fill] {
fill: var(--jp-layout-color2);
}

.jp-icon-hover :hover .jp-icon-accent3-hover[fill] {
fill: var(--jp-layout-color3);
}

.jp-icon-hover :hover .jp-icon-accent4-hover[fill] {
fill: var(--jp-layout-color4);
}

.jp-icon-hover :hover .jp-icon-accent0-hover[stroke] {
stroke: var(--jp-layout-color0);
}

.jp-icon-hover :hover .jp-icon-accent1-hover[stroke] {
stroke: var(--jp-layout-color1);
}

.jp-icon-hover :hover .jp-icon-accent2-hover[stroke] {
stroke: var(--jp-layout-color2);
}

.jp-icon-hover :hover .jp-icon-accent3-hover[stroke] {
stroke: var(--jp-layout-color3);
}

.jp-icon-hover :hover .jp-icon-accent4-hover[stroke] {
stroke: var(--jp-layout-color4);
}

/_ set the color of an icon to transparent _/
.jp-icon-hover :hover .jp-icon-none-hover[fill] {
fill: none;
}

.jp-icon-hover :hover .jp-icon-none-hover[stroke] {
stroke: none;
}

/\*\*

- inverse colors
  \*/

/_ inverse recolor the primary elements of an icon _/
.jp-icon-hover.jp-icon-alt :hover .jp-icon0-hover[fill] {
fill: var(--jp-layout-color0);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon1-hover[fill] {
fill: var(--jp-layout-color1);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon2-hover[fill] {
fill: var(--jp-layout-color2);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon3-hover[fill] {
fill: var(--jp-layout-color3);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon4-hover[fill] {
fill: var(--jp-layout-color4);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon0-hover[stroke] {
stroke: var(--jp-layout-color0);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon1-hover[stroke] {
stroke: var(--jp-layout-color1);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon2-hover[stroke] {
stroke: var(--jp-layout-color2);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon3-hover[stroke] {
stroke: var(--jp-layout-color3);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon4-hover[stroke] {
stroke: var(--jp-layout-color4);
}

/_ inverse recolor the accent elements of an icon _/
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent0-hover[fill] {
fill: var(--jp-inverse-layout-color0);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent1-hover[fill] {
fill: var(--jp-inverse-layout-color1);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent2-hover[fill] {
fill: var(--jp-inverse-layout-color2);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent3-hover[fill] {
fill: var(--jp-inverse-layout-color3);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent4-hover[fill] {
fill: var(--jp-inverse-layout-color4);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent0-hover[stroke] {
stroke: var(--jp-inverse-layout-color0);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent1-hover[stroke] {
stroke: var(--jp-inverse-layout-color1);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent2-hover[stroke] {
stroke: var(--jp-inverse-layout-color2);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent3-hover[stroke] {
stroke: var(--jp-inverse-layout-color3);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent4-hover[stroke] {
stroke: var(--jp-inverse-layout-color4);
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

.jp-IFrame {
width: 100%;
height: 100%;
}

.jp-IFrame > iframe {
border: none;
}

/_
When drag events occur, `lm-mod-override-cursor` is added to the body.
Because iframes steal all cursor events, the following two rules are necessary
to suppress pointer events while resize drags are occurring. There may be a
better solution to this problem.
_/
body.lm-mod-override-cursor .jp-IFrame {
position: relative;
}

body.lm-mod-override-cursor .jp-IFrame::before {
content: '';
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: transparent;
}

/_-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

.jp-HoverBox {
position: fixed;
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

.jp-FormGroup-content fieldset {
border: none;
padding: 0;
min-width: 0;
width: 100%;
}

/_ stylelint-disable selector-max-type _/

.jp-FormGroup-content fieldset .jp-inputFieldWrapper input,
.jp-FormGroup-content fieldset .jp-inputFieldWrapper select,
.jp-FormGroup-content fieldset .jp-inputFieldWrapper textarea {
font-size: var(--jp-content-font-size2);
border-color: var(--jp-input-border-color);
border-style: solid;
border-radius: var(--jp-border-radius);
border-width: 1px;
padding: 6px 8px;
background: none;
color: var(--jp-ui-font-color0);
height: inherit;
}

.jp-FormGroup-content fieldset input[type='checkbox'] {
position: relative;
top: 2px;
margin-left: 0;
}

.jp-FormGroup-content button.jp-mod-styled {
cursor: pointer;
}

.jp-FormGroup-content .checkbox label {
cursor: pointer;
font-size: var(--jp-content-font-size1);
}

.jp-FormGroup-content .jp-root > fieldset > legend {
display: none;
}

.jp-FormGroup-content .jp-root > fieldset > p {
display: none;
}

/\*_ copy of `input.jp-mod-styled:focus` style _/
.jp-FormGroup-content fieldset input:focus,
.jp-FormGroup-content fieldset select:focus {
-moz-outline-radius: unset;
outline: var(--jp-border-width) solid var(--md-blue-500);
outline-offset: -1px;
box-shadow: inset 0 0 4px var(--md-blue-300);
}

.jp-FormGroup-content fieldset input:hover:not(:focus),
.jp-FormGroup-content fieldset select:hover:not(:focus) {
background-color: var(--jp-border-color2);
}

/_ stylelint-enable selector-max-type _/

.jp-FormGroup-content .checkbox .field-description {
/_ Disable default description field for checkbox:
because other widgets do not have description fields,
we add descriptions to each widget on the field level.
_/
display: none;
}

.jp-FormGroup-content #root\_\_description {
display: none;
}

.jp-FormGroup-content .jp-modifiedIndicator {
width: 5px;
background-color: var(--jp-brand-color2);
margin-top: 0;
margin-left: calc(var(--jp-private-settingeditor-modifier-indent) \* -1);
flex-shrink: 0;
}

.jp-FormGroup-content .jp-modifiedIndicator.jp-errorIndicator {
background-color: var(--jp-error-color0);
margin-right: 0.5em;
}

/_ RJSF ARRAY style _/

.jp-arrayFieldWrapper legend {
font-size: var(--jp-content-font-size2);
color: var(--jp-ui-font-color0);
flex-basis: 100%;
padding: 4px 0;
font-weight: var(--jp-content-heading-font-weight);
border-bottom: 1px solid var(--jp-border-color2);
}

.jp-arrayFieldWrapper .field-description {
padding: 4px 0;
white-space: pre-wrap;
}

.jp-arrayFieldWrapper .array-item {
width: 100%;
border: 1px solid var(--jp-border-color2);
border-radius: 4px;
margin: 4px;
}

.jp-ArrayOperations {
display: flex;
margin-left: 8px;
}

.jp-ArrayOperationsButton {
margin: 2px;
}

.jp-ArrayOperationsButton .jp-icon3[fill] {
fill: var(--jp-ui-font-color0);
}

button.jp-ArrayOperationsButton.jp-mod-styled:disabled {
cursor: not-allowed;
opacity: 0.5;
}

/_ RJSF form validation error _/

.jp-FormGroup-content .validationErrors {
color: var(--jp-error-color0);
}

/_ Hide panel level error as duplicated the field level error _/
.jp-FormGroup-content .panel.errors {
display: none;
}

/_ RJSF normal content (settings-editor) _/

.jp-FormGroup-contentNormal {
display: flex;
align-items: center;
flex-wrap: wrap;
}

.jp-FormGroup-contentNormal .jp-FormGroup-contentItem {
margin-left: 7px;
color: var(--jp-ui-font-color0);
}

.jp-FormGroup-contentNormal .jp-FormGroup-description {
flex-basis: 100%;
padding: 4px 7px;
}

.jp-FormGroup-contentNormal .jp-FormGroup-default {
flex-basis: 100%;
padding: 4px 7px;
}

.jp-FormGroup-contentNormal .jp-FormGroup-fieldLabel {
font-size: var(--jp-content-font-size1);
font-weight: normal;
min-width: 120px;
}

.jp-FormGroup-contentNormal fieldset:not(:first-child) {
margin-left: 7px;
}

.jp-FormGroup-contentNormal .field-array-of-string .array-item {
/_ Display `jp-ArrayOperations` buttons side-by-side with content except
for small screens where flex-wrap will place them one below the other.
_/
display: flex;
align-items: center;
flex-wrap: wrap;
}

.jp-FormGroup-contentNormal .jp-objectFieldWrapper .form-group {
padding: 2px 8px 2px var(--jp-private-settingeditor-modifier-indent);
margin-top: 2px;
}

/_ RJSF compact content (metadata-form) _/

.jp-FormGroup-content.jp-FormGroup-contentCompact {
width: 100%;
}

.jp-FormGroup-contentCompact .form-group {
display: flex;
padding: 0.5em 0.2em 0.5em 0;
}

.jp-FormGroup-contentCompact
.jp-FormGroup-compactTitle
.jp-FormGroup-description {
font-size: var(--jp-ui-font-size1);
color: var(--jp-ui-font-color2);
}

.jp-FormGroup-contentCompact .jp-FormGroup-fieldLabel {
padding-bottom: 0.3em;
}

.jp-FormGroup-contentCompact .jp-inputFieldWrapper .form-control {
width: 100%;
box-sizing: border-box;
}

.jp-FormGroup-contentCompact .jp-arrayFieldWrapper .jp-FormGroup-compactTitle {
padding-bottom: 7px;
}

.jp-FormGroup-contentCompact
.jp-objectFieldWrapper
.jp-objectFieldWrapper
.form-group {
padding: 2px 8px 2px var(--jp-private-settingeditor-modifier-indent);
margin-top: 2px;
}

.jp-FormGroup-contentCompact ul.error-detail {
margin-block-start: 0.5em;
margin-block-end: 0.5em;
padding-inline-start: 1em;
}

/\*

- Copyright (c) Jupyter Development Team.
- Distributed under the terms of the Modified BSD License.
  \*/

.jp-SidePanel {
display: flex;
flex-direction: column;
min-width: var(--jp-sidebar-min-width);
overflow-y: auto;
color: var(--jp-ui-font-color1);
background: var(--jp-layout-color1);
font-size: var(--jp-ui-font-size1);
}

.jp-SidePanel-header {
flex: 0 0 auto;
display: flex;
border-bottom: var(--jp-border-width) solid var(--jp-border-color2);
font-size: var(--jp-ui-font-size0);
font-weight: 600;
letter-spacing: 1px;
margin: 0;
padding: 2px;
text-transform: uppercase;
}

.jp-SidePanel-toolbar {
flex: 0 0 auto;
}

.jp-SidePanel-content {
flex: 1 1 auto;
}

.jp-SidePanel-toolbar,
.jp-AccordionPanel-toolbar {
height: var(--jp-private-toolbar-height);
}

.jp-SidePanel-toolbar.jp-Toolbar-micro {
display: none;
}

.lm-AccordionPanel .jp-AccordionPanel-title {
box-sizing: border-box;
line-height: 25px;
margin: 0;
display: flex;
align-items: center;
background: var(--jp-layout-color1);
color: var(--jp-ui-font-color1);
border-bottom: var(--jp-border-width) solid var(--jp-toolbar-border-color);
box-shadow: var(--jp-toolbar-box-shadow);
font-size: var(--jp-ui-font-size0);
}

.jp-AccordionPanel-title {
cursor: pointer;
user-select: none;
-moz-user-select: none;
-webkit-user-select: none;
text-transform: uppercase;
}

.lm-AccordionPanel[data-orientation='horizontal'] > .jp-AccordionPanel-title {
/_ Title is rotated for horizontal accordion panel using CSS _/
display: block;
transform-origin: top left;
transform: rotate(-90deg) translate(-100%);
}

.jp-AccordionPanel-title .lm-AccordionPanel-titleLabel {
user-select: none;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
}

.jp-AccordionPanel-title .lm-AccordionPanel-titleCollapser {
transform: rotate(-90deg);
margin: auto 0;
height: 16px;
}

.jp-AccordionPanel-title.lm-mod-expanded .lm-AccordionPanel-titleCollapser {
transform: rotate(0deg);
}

.lm-AccordionPanel .jp-AccordionPanel-toolbar {
background: none;
box-shadow: none;
border: none;
margin-left: auto;
}

.lm-AccordionPanel .lm-SplitPanel-handle:hover {
background: var(--jp-layout-color3);
}

.jp-text-truncated {
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}

/_-----------------------------------------------------------------------------
| Copyright (c) 2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

.jp-Spinner {
position: absolute;
display: flex;
justify-content: center;
align-items: center;
z-index: 10;
left: 0;
top: 0;
width: 100%;
height: 100%;
background: var(--jp-layout-color0);
outline: none;
}

.jp-SpinnerContent {
font-size: 10px;
margin: 50px auto;
text-indent: -9999em;
width: 3em;
height: 3em;
border-radius: 50%;
background: var(--jp-brand-color3);
background: linear-gradient(
to right,
#f37626 10%,
rgba(255, 255, 255, 0) 42%
);
position: relative;
animation: load3 1s infinite linear, fadeIn 1s;
}

.jp-SpinnerContent::before {
width: 50%;
height: 50%;
background: #f37626;
border-radius: 100% 0 0;
position: absolute;
top: 0;
left: 0;
content: '';
}

.jp-SpinnerContent::after {
background: var(--jp-layout-color0);
width: 75%;
height: 75%;
border-radius: 50%;
content: '';
margin: auto;
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
}

@keyframes fadeIn {
0% {
opacity: 0;
}

100% {
opacity: 1;
}
}

@keyframes load3 {
0% {
transform: rotate(0deg);
}

100% {
transform: rotate(360deg);
}
}

/_-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

button.jp-mod-styled {
font-size: var(--jp-ui-font-size1);
color: var(--jp-ui-font-color0);
border: none;
box-sizing: border-box;
text-align: center;
line-height: 32px;
height: 32px;
padding: 0 12px;
letter-spacing: 0.8px;
outline: none;
appearance: none;
-webkit-appearance: none;
-moz-appearance: none;
}

input.jp-mod-styled {
background: var(--jp-input-background);
height: 28px;
box-sizing: border-box;
border: var(--jp-border-width) solid var(--jp-border-color1);
padding-left: 7px;
padding-right: 7px;
font-size: var(--jp-ui-font-size2);
color: var(--jp-ui-font-color0);
outline: none;
appearance: none;
-webkit-appearance: none;
-moz-appearance: none;
}

input[type='checkbox'].jp-mod-styled {
appearance: checkbox;
-webkit-appearance: checkbox;
-moz-appearance: checkbox;
height: auto;
}

input.jp-mod-styled:focus {
border: var(--jp-border-width) solid var(--md-blue-500);
box-shadow: inset 0 0 4px var(--md-blue-300);
}

.jp-select-wrapper {
display: flex;
position: relative;
flex-direction: column;
padding: 1px;
background-color: var(--jp-layout-color1);
box-sizing: border-box;
margin-bottom: 12px;
}

.jp-select-wrapper:not(.multiple) {
height: 28px;
}

.jp-select-wrapper.jp-mod-focused select.jp-mod-styled {
border: var(--jp-border-width) solid var(--jp-input-active-border-color);
box-shadow: var(--jp-input-box-shadow);
background-color: var(--jp-input-active-background);
}

select.jp-mod-styled:hover {
cursor: pointer;
color: var(--jp-ui-font-color0);
background-color: var(--jp-input-hover-background);
box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.5);
}

select.jp-mod-styled {
flex: 1 1 auto;
width: 100%;
font-size: var(--jp-ui-font-size2);
background: var(--jp-input-background);
color: var(--jp-ui-font-color0);
padding: 0 25px 0 8px;
border: var(--jp-border-width) solid var(--jp-input-border-color);
border-radius: 0;
outline: none;
appearance: none;
-webkit-appearance: none;
-moz-appearance: none;
}

select.jp-mod-styled:not([multiple]) {
height: 32px;
}

select.jp-mod-styled[multiple] {
max-height: 200px;
overflow-y: auto;
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

.jp-switch {
display: flex;
align-items: center;
padding-left: 4px;
padding-right: 4px;
font-size: var(--jp-ui-font-size1);
background-color: transparent;
color: var(--jp-ui-font-color1);
border: none;
height: 20px;
}

.jp-switch:hover {
background-color: var(--jp-layout-color2);
}

.jp-switch-label {
margin-right: 5px;
font-family: var(--jp-ui-font-family);
}

.jp-switch-track {
cursor: pointer;
background-color: var(--jp-switch-color, var(--jp-border-color1));
-webkit-transition: 0.4s;
transition: 0.4s;
border-radius: 34px;
height: 16px;
width: 35px;
position: relative;
}

.jp-switch-track::before {
content: '';
position: absolute;
height: 10px;
width: 10px;
margin: 3px;
left: 0;
background-color: var(--jp-ui-inverse-font-color1);
-webkit-transition: 0.4s;
transition: 0.4s;
border-radius: 50%;
}

.jp-switch[aria-checked='true'] .jp-switch-track {
background-color: var(--jp-switch-true-position-color, var(--jp-warn-color0));
}

.jp-switch[aria-checked='true'] .jp-switch-track::before {
/_ track width (35) - margins (3 + 3) - thumb width (10) _/
left: 19px;
}

/_-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

:root {
--jp-private-toolbar-height: calc(
28px + var(--jp-border-width)
); /_ leave 28px for content _/
}

.jp-Toolbar {
color: var(--jp-ui-font-color1);
flex: 0 0 auto;
display: flex;
flex-direction: row;
border-bottom: var(--jp-border-width) solid var(--jp-toolbar-border-color);
box-shadow: var(--jp-toolbar-box-shadow);
background: var(--jp-toolbar-background);
min-height: var(--jp-toolbar-micro-height);
padding: 2px;
z-index: 8;
overflow-x: hidden;
}

/_ Toolbar items _/

.jp-Toolbar > .jp-Toolbar-item.jp-Toolbar-spacer {
flex-grow: 1;
flex-shrink: 1;
}

.jp-Toolbar-item.jp-Toolbar-kernelStatus {
display: inline-block;
width: 32px;
background-repeat: no-repeat;
background-position: center;
background-size: 16px;
}

.jp-Toolbar > .jp-Toolbar-item {
flex: 0 0 auto;
display: flex;
padding-left: 1px;
padding-right: 1px;
font-size: var(--jp-ui-font-size1);
line-height: var(--jp-private-toolbar-height);
height: 100%;
}

/_ Toolbar buttons _/

/_ This is the div we use to wrap the react component into a Widget _/
div.jp-ToolbarButton {
color: transparent;
border: none;
box-sizing: border-box;
outline: none;
appearance: none;
-webkit-appearance: none;
-moz-appearance: none;
padding: 0;
margin: 0;
}

button.jp-ToolbarButtonComponent {
background: var(--jp-layout-color1);
border: none;
box-sizing: border-box;
outline: none;
appearance: none;
-webkit-appearance: none;
-moz-appearance: none;
padding: 0 6px;
margin: 0;
height: 24px;
border-radius: var(--jp-border-radius);
display: flex;
align-items: center;
text-align: center;
font-size: 14px;
min-width: unset;
min-height: unset;
}

button.jp-ToolbarButtonComponent:disabled {
opacity: 0.4;
}

button.jp-ToolbarButtonComponent > span {
padding: 0;
flex: 0 0 auto;
}

button.jp-ToolbarButtonComponent .jp-ToolbarButtonComponent-label {
font-size: var(--jp-ui-font-size1);
line-height: 100%;
padding-left: 2px;
color: var(--jp-ui-font-color1);
font-family: var(--jp-ui-font-family);
}

#jp-main-dock-panel[data-mode='single-document']
.jp-MainAreaWidget

> .jp-Toolbar.jp-Toolbar-micro {
> padding: 0;
> min-height: 0;
> }

#jp-main-dock-panel[data-mode='single-document']
.jp-MainAreaWidget

> .jp-Toolbar {
> border: none;
> box-shadow: none;
> }

/\*

- Copyright (c) Jupyter Development Team.
- Distributed under the terms of the Modified BSD License.
  \*/

.jp-WindowedPanel-outer {
position: relative;
overflow-y: auto;
}

.jp-WindowedPanel-inner {
position: relative;
}

.jp-WindowedPanel-window {
position: absolute;
left: 0;
right: 0;
overflow: visible;
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

/_ Sibling imports _/

body {
color: var(--jp-ui-font-color1);
font-size: var(--jp-ui-font-size1);
}

/_ Disable native link decoration styles everywhere outside of dialog boxes _/
a {
text-decoration: unset;
color: unset;
}

a:hover {
text-decoration: unset;
color: unset;
}

/_ Accessibility for links inside dialog box text _/
.jp-Dialog-content a {
text-decoration: revert;
color: var(--jp-content-link-color);
}

.jp-Dialog-content a:hover {
text-decoration: revert;
}

/_ Styles for ui-components _/
.jp-Button {
color: var(--jp-ui-font-color2);
border-radius: var(--jp-border-radius);
padding: 0 12px;
font-size: var(--jp-ui-font-size1);

/_ Copy from blueprint 3 _/
display: inline-flex;
flex-direction: row;
border: none;
cursor: pointer;
align-items: center;
justify-content: center;
text-align: left;
vertical-align: middle;
min-height: 30px;
min-width: 30px;
}

.jp-Button:disabled {
cursor: not-allowed;
}

.jp-Button:empty {
padding: 0 !important;
}

.jp-Button.jp-mod-small {
min-height: 24px;
min-width: 24px;
font-size: 12px;
padding: 0 7px;
}

/_ Use our own theme for hover styles _/
.jp-Button.jp-mod-minimal:hover {
background-color: var(--jp-layout-color2);
}

.jp-Button.jp-mod-minimal {
background: none;
}

.jp-InputGroup {
display: block;
position: relative;
}

.jp-InputGroup input {
box-sizing: border-box;
border: none;
border-radius: 0;
background-color: transparent;
color: var(--jp-ui-font-color0);
box-shadow: inset 0 0 0 var(--jp-border-width) var(--jp-input-border-color);
padding-bottom: 0;
padding-top: 0;
padding-left: 10px;
padding-right: 28px;
position: relative;
width: 100%;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
font-size: 14px;
font-weight: 400;
height: 30px;
line-height: 30px;
outline: none;
vertical-align: middle;
}

.jp-InputGroup input:focus {
box-shadow: inset 0 0 0 var(--jp-border-width)
var(--jp-input-active-box-shadow-color),
inset 0 0 0 3px var(--jp-input-active-box-shadow-color);
}

.jp-InputGroup input:disabled {
cursor: not-allowed;
resize: block;
background-color: var(--jp-layout-color2);
color: var(--jp-ui-font-color2);
}

.jp-InputGroup input:disabled ~ span {
cursor: not-allowed;
color: var(--jp-ui-font-color2);
}

.jp-InputGroup input::placeholder,
input::placeholder {
color: var(--jp-ui-font-color2);
}

.jp-InputGroupAction {
position: absolute;
bottom: 1px;
right: 0;
padding: 6px;
}

.jp-HTMLSelect.jp-DefaultStyle select {
background-color: initial;
border: none;
border-radius: 0;
box-shadow: none;
color: var(--jp-ui-font-color0);
display: block;
font-size: var(--jp-ui-font-size1);
font-family: var(--jp-ui-font-family);
height: 24px;
line-height: 14px;
padding: 0 25px 0 10px;
text-align: left;
-moz-appearance: none;
-webkit-appearance: none;
}

.jp-HTMLSelect.jp-DefaultStyle select:disabled {
background-color: var(--jp-layout-color2);
color: var(--jp-ui-font-color2);
cursor: not-allowed;
resize: block;
}

.jp-HTMLSelect.jp-DefaultStyle select:disabled ~ span {
cursor: not-allowed;
}

/_ Use our own theme for hover and option styles _/
/_ stylelint-disable-next-line selector-max-type _/
.jp-HTMLSelect.jp-DefaultStyle select:hover,
.jp-HTMLSelect.jp-DefaultStyle select > option {
background-color: var(--jp-layout-color2);
color: var(--jp-ui-font-color0);
}

select {
box-sizing: border-box;
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

/_-----------------------------------------------------------------------------
| Styles
|----------------------------------------------------------------------------_/

.jp-StatusBar-Widget {
display: flex;
align-items: center;
background: var(--jp-layout-color2);
min-height: var(--jp-statusbar-height);
justify-content: space-between;
padding: 0 10px;
}

.jp-StatusBar-Left {
display: flex;
align-items: center;
flex-direction: row;
}

.jp-StatusBar-Middle {
display: flex;
align-items: center;
}

.jp-StatusBar-Right {
display: flex;
align-items: center;
flex-direction: row-reverse;
}

.jp-StatusBar-Item {
max-height: var(--jp-statusbar-height);
margin: 0 2px;
height: var(--jp-statusbar-height);
white-space: nowrap;
text-overflow: ellipsis;
color: var(--jp-ui-font-color1);
padding: 0 6px;
}

.jp-mod-highlighted:hover {
background-color: var(--jp-layout-color3);
}

.jp-mod-clicked {
background-color: var(--jp-brand-color1);
}

.jp-mod-clicked:hover {
background-color: var(--jp-brand-color0);
}

.jp-mod-clicked .jp-StatusBar-TextItem {
color: var(--jp-ui-inverse-font-color1);
}

.jp-StatusBar-HoverItem {
box-shadow: '0px 4px 4px rgba(0, 0, 0, 0.25)';
}

.jp-StatusBar-TextItem {
font-size: var(--jp-ui-font-size1);
font-family: var(--jp-ui-font-family);
line-height: 24px;
color: var(--jp-ui-font-color1);
}

.jp-StatusBar-GroupItem {
display: flex;
align-items: center;
flex-direction: row;
}

.jp-Statusbar-ProgressCircle svg {
display: block;
margin: 0 auto;
width: 16px;
height: 24px;
align-self: normal;
}

.jp-Statusbar-ProgressCircle path {
fill: var(--jp-inverse-layout-color3);
}

.jp-Statusbar-ProgressBar-progress-bar {
height: 10px;
width: 100px;
border: solid 0.25px var(--jp-brand-color2);
border-radius: 3px;
overflow: hidden;
align-self: center;
}

.jp-Statusbar-ProgressBar-progress-bar > div {
background-color: var(--jp-brand-color2);
background-image: linear-gradient(
-45deg,
rgba(255, 255, 255, 0.2) 25%,
transparent 25%,
transparent 50%,
rgba(255, 255, 255, 0.2) 50%,
rgba(255, 255, 255, 0.2) 75%,
transparent 75%,
transparent
);
background-size: 40px 40px;
float: left;
width: 0%;
height: 100%;
font-size: 12px;
line-height: 14px;
color: #fff;
text-align: center;
animation: jp-Statusbar-ExecutionTime-progress-bar 2s linear infinite;
}

.jp-Statusbar-ProgressBar-progress-bar p {
color: var(--jp-ui-font-color1);
font-family: var(--jp-ui-font-family);
font-size: var(--jp-ui-font-size1);
line-height: 10px;
width: 100px;
}

@keyframes jp-Statusbar-ExecutionTime-progress-bar {
0% {
background-position: 0 0;
}

100% {
background-position: 40px 40px;
}
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

/_-----------------------------------------------------------------------------
| Variables
|----------------------------------------------------------------------------_/

:root {
--jp-private-commandpalette-search-height: 28px;
}

/_-----------------------------------------------------------------------------
| Overall styles
|----------------------------------------------------------------------------_/

.lm-CommandPalette {
padding-bottom: 0;
color: var(--jp-ui-font-color1);
background: var(--jp-layout-color1);

/\* This is needed so that all font sizing of children done in ems is

- relative to this base size \*/
  font-size: var(--jp-ui-font-size1);
  }

/_-----------------------------------------------------------------------------
| Modal variant
|----------------------------------------------------------------------------_/

.jp-ModalCommandPalette {
position: absolute;
z-index: 10000;
top: 38px;
left: 30%;
margin: 0;
padding: 4px;
width: 40%;
box-shadow: var(--jp-elevation-z4);
border-radius: 4px;
background: var(--jp-layout-color0);
}

.jp-ModalCommandPalette .lm-CommandPalette {
max-height: 40vh;
}

.jp-ModalCommandPalette .lm-CommandPalette .lm-close-icon::after {
display: none;
}

.jp-ModalCommandPalette .lm-CommandPalette .lm-CommandPalette-header {
display: none;
}

.jp-ModalCommandPalette .lm-CommandPalette .lm-CommandPalette-item {
margin-left: 4px;
margin-right: 4px;
}

.jp-ModalCommandPalette
.lm-CommandPalette
.lm-CommandPalette-item.lm-mod-disabled {
display: none;
}

/_-----------------------------------------------------------------------------
| Search
|----------------------------------------------------------------------------_/

.lm-CommandPalette-search {
padding: 4px;
background-color: var(--jp-layout-color1);
z-index: 2;
}

.lm-CommandPalette-wrapper {
overflow: overlay;
padding: 0 9px;
background-color: var(--jp-input-active-background);
height: 30px;
box-shadow: inset 0 0 0 var(--jp-border-width) var(--jp-input-border-color);
}

.lm-CommandPalette.lm-mod-focused .lm-CommandPalette-wrapper {
box-shadow: inset 0 0 0 1px var(--jp-input-active-box-shadow-color),
inset 0 0 0 3px var(--jp-input-active-box-shadow-color);
}

.jp-SearchIconGroup {
color: white;
background-color: var(--jp-brand-color1);
position: absolute;
top: 4px;
right: 4px;
padding: 5px 5px 1px;
}

.jp-SearchIconGroup svg {
height: 20px;
width: 20px;
}

.jp-SearchIconGroup .jp-icon3[fill] {
fill: var(--jp-layout-color0);
}

.lm-CommandPalette-input {
background: transparent;
width: calc(100% - 18px);
float: left;
border: none;
outline: none;
font-size: var(--jp-ui-font-size1);
color: var(--jp-ui-font-color0);
line-height: var(--jp-private-commandpalette-search-height);
}

.lm-CommandPalette-input::-webkit-input-placeholder,
.lm-CommandPalette-input::-moz-placeholder,
.lm-CommandPalette-input:-ms-input-placeholder {
color: var(--jp-ui-font-color2);
font-size: var(--jp-ui-font-size1);
}

/_-----------------------------------------------------------------------------
| Results
|----------------------------------------------------------------------------_/

.lm-CommandPalette-header:first-child {
margin-top: 0;
}

.lm-CommandPalette-header {
border-bottom: solid var(--jp-border-width) var(--jp-border-color2);
color: var(--jp-ui-font-color1);
cursor: pointer;
display: flex;
font-size: var(--jp-ui-font-size0);
font-weight: 600;
letter-spacing: 1px;
margin-top: 8px;
padding: 8px 0 8px 12px;
text-transform: uppercase;
}

.lm-CommandPalette-header.lm-mod-active {
background: var(--jp-layout-color2);
}

.lm-CommandPalette-header > mark {
background-color: transparent;
font-weight: bold;
color: var(--jp-ui-font-color1);
}

.lm-CommandPalette-item {
padding: 4px 12px 4px 4px;
color: var(--jp-ui-font-color1);
font-size: var(--jp-ui-font-size1);
font-weight: 400;
display: flex;
}

.lm-CommandPalette-item.lm-mod-disabled {
color: var(--jp-ui-font-color2);
}

.lm-CommandPalette-item.lm-mod-active {
color: var(--jp-ui-inverse-font-color1);
background: var(--jp-brand-color1);
}

.lm-CommandPalette-item.lm-mod-active .lm-CommandPalette-itemLabel > mark {
color: var(--jp-ui-inverse-font-color0);
}

.lm-CommandPalette-item.lm-mod-active .jp-icon-selectable[fill] {
fill: var(--jp-layout-color0);
}

.lm-CommandPalette-item.lm-mod-active:hover:not(.lm-mod-disabled) {
color: var(--jp-ui-inverse-font-color1);
background: var(--jp-brand-color1);
}

.lm-CommandPalette-item:hover:not(.lm-mod-active):not(.lm-mod-disabled) {
background: var(--jp-layout-color2);
}

.lm-CommandPalette-itemContent {
overflow: hidden;
}

.lm-CommandPalette-itemLabel > mark {
color: var(--jp-ui-font-color0);
background-color: transparent;
font-weight: bold;
}

.lm-CommandPalette-item.lm-mod-disabled mark {
color: var(--jp-ui-font-color2);
}

.lm-CommandPalette-item .lm-CommandPalette-itemIcon {
margin: 0 4px 0 0;
position: relative;
width: 16px;
top: 2px;
flex: 0 0 auto;
}

.lm-CommandPalette-item.lm-mod-disabled .lm-CommandPalette-itemIcon {
opacity: 0.6;
}

.lm-CommandPalette-item .lm-CommandPalette-itemShortcut {
flex: 0 0 auto;
}

.lm-CommandPalette-itemCaption {
display: none;
}

.lm-CommandPalette-content {
background-color: var(--jp-layout-color1);
}

.lm-CommandPalette-content:empty::after {
content: 'No results';
margin: auto;
margin-top: 20px;
width: 100px;
display: block;
font-size: var(--jp-ui-font-size2);
font-family: var(--jp-ui-font-family);
font-weight: lighter;
}

.lm-CommandPalette-emptyMessage {
text-align: center;
margin-top: 24px;
line-height: 1.32;
padding: 0 8px;
color: var(--jp-content-font-color3);
}

/_-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

.jp-Dialog {
position: absolute;
z-index: 10000;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
top: 0;
left: 0;
margin: 0;
padding: 0;
width: 100%;
height: 100%;
background: var(--jp-dialog-background);
}

.jp-Dialog-content {
display: flex;
flex-direction: column;
margin-left: auto;
margin-right: auto;
background: var(--jp-layout-color1);
padding: 24px 24px 12px;
min-width: 300px;
min-height: 150px;
max-width: 1000px;
max-height: 500px;
box-sizing: border-box;
box-shadow: var(--jp-elevation-z20);
word-wrap: break-word;
border-radius: var(--jp-border-radius);

/\* This is needed so that all font sizing of children done in ems is

- relative to this base size \*/
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color1);
  resize: both;
  }

.jp-Dialog-content.jp-Dialog-content-small {
max-width: 500px;
}

.jp-Dialog-button {
overflow: visible;
}

button.jp-Dialog-button:focus {
outline: 1px solid var(--jp-brand-color1);
outline-offset: 4px;
-moz-outline-radius: 0;
}

button.jp-Dialog-button:focus::-moz-focus-inner {
border: 0;
}

button.jp-Dialog-button.jp-mod-styled.jp-mod-accept:focus,
button.jp-Dialog-button.jp-mod-styled.jp-mod-warn:focus,
button.jp-Dialog-button.jp-mod-styled.jp-mod-reject:focus {
outline-offset: 4px;
-moz-outline-radius: 0;
}

button.jp-Dialog-button.jp-mod-styled.jp-mod-accept:focus {
outline: 1px solid var(--jp-accept-color-normal, var(--jp-brand-color1));
}

button.jp-Dialog-button.jp-mod-styled.jp-mod-warn:focus {
outline: 1px solid var(--jp-warn-color-normal, var(--jp-error-color1));
}

button.jp-Dialog-button.jp-mod-styled.jp-mod-reject:focus {
outline: 1px solid var(--jp-reject-color-normal, var(--md-grey-600));
}

button.jp-Dialog-close-button {
padding: 0;
height: 100%;
min-width: unset;
min-height: unset;
}

.jp-Dialog-header {
display: flex;
justify-content: space-between;
flex: 0 0 auto;
padding-bottom: 12px;
font-size: var(--jp-ui-font-size3);
font-weight: 400;
color: var(--jp-ui-font-color1);
}

.jp-Dialog-body {
display: flex;
flex-direction: column;
flex: 1 1 auto;
font-size: var(--jp-ui-font-size1);
background: var(--jp-layout-color1);
color: var(--jp-ui-font-color1);
overflow: auto;
}

.jp-Dialog-footer {
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
flex: 0 0 auto;
margin-left: -12px;
margin-right: -12px;
padding: 12px;
}

.jp-Dialog-checkbox {
padding-right: 5px;
}

.jp-Dialog-checkbox > input:focus-visible {
outline: 1px solid var(--jp-input-active-border-color);
outline-offset: 1px;
}

.jp-Dialog-spacer {
flex: 1 1 auto;
}

.jp-Dialog-title {
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
}

.jp-Dialog-body > .jp-select-wrapper {
width: 100%;
}

.jp-Dialog-body > button {
padding: 0 16px;
}

.jp-Dialog-body > label {
line-height: 1.4;
color: var(--jp-ui-font-color0);
}

.jp-Dialog-button.jp-mod-styled:not(:last-child) {
margin-right: 12px;
}

/\*

- Copyright (c) Jupyter Development Team.
- Distributed under the terms of the Modified BSD License.
  \*/

.jp-Input-Boolean-Dialog {
flex-direction: row-reverse;
align-items: end;
width: 100%;
}

.jp-Input-Boolean-Dialog > label {
flex: 1 1 auto;
}

/_-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

.jp-MainAreaWidget > :focus {
outline: none;
}

.jp-MainAreaWidget .jp-MainAreaWidget-error {
padding: 6px;
}

.jp-MainAreaWidget .jp-MainAreaWidget-error > pre {
width: auto;
padding: 10px;
background: var(--jp-error-color3);
border: var(--jp-border-width) solid var(--jp-error-color1);
border-radius: var(--jp-border-radius);
color: var(--jp-ui-font-color1);
font-size: var(--jp-ui-font-size1);
white-space: pre-wrap;
word-wrap: break-word;
}

/\*

- Copyright (c) Jupyter Development Team.
- Distributed under the terms of the Modified BSD License.
  \*/

/\*\*

- google-material-color v1.2.6
- https://github.com/danlevan/google-material-color
  \*/
  :root {
  --md-red-50: #ffebee;
  --md-red-100: #ffcdd2;
  --md-red-200: #ef9a9a;
  --md-red-300: #e57373;
  --md-red-400: #ef5350;
  --md-red-500: #f44336;
  --md-red-600: #e53935;
  --md-red-700: #d32f2f;
  --md-red-800: #c62828;
  --md-red-900: #b71c1c;
  --md-red-A100: #ff8a80;
  --md-red-A200: #ff5252;
  --md-red-A400: #ff1744;
  --md-red-A700: #d50000;
  --md-pink-50: #fce4ec;
  --md-pink-100: #f8bbd0;
  --md-pink-200: #f48fb1;
  --md-pink-300: #f06292;
  --md-pink-400: #ec407a;
  --md-pink-500: #e91e63;
  --md-pink-600: #d81b60;
  --md-pink-700: #c2185b;
  --md-pink-800: #ad1457;
  --md-pink-900: #880e4f;
  --md-pink-A100: #ff80ab;
  --md-pink-A200: #ff4081;
  --md-pink-A400: #f50057;
  --md-pink-A700: #c51162;
  --md-purple-50: #f3e5f5;
  --md-purple-100: #e1bee7;
  --md-purple-200: #ce93d8;
  --md-purple-300: #ba68c8;
  --md-purple-400: #ab47bc;
  --md-purple-500: #9c27b0;
  --md-purple-600: #8e24aa;
  --md-purple-700: #7b1fa2;
  --md-purple-800: #6a1b9a;
  --md-purple-900: #4a148c;
  --md-purple-A100: #ea80fc;
  --md-purple-A200: #e040fb;
  --md-purple-A400: #d500f9;
  --md-purple-A700: #a0f;
  --md-deep-purple-50: #ede7f6;
  --md-deep-purple-100: #d1c4e9;
  --md-deep-purple-200: #b39ddb;
  --md-deep-purple-300: #9575cd;
  --md-deep-purple-400: #7e57c2;
  --md-deep-purple-500: #673ab7;
  --md-deep-purple-600: #5e35b1;
  --md-deep-purple-700: #512da8;
  --md-deep-purple-800: #4527a0;
  --md-deep-purple-900: #311b92;
  --md-deep-purple-A100: #b388ff;
  --md-deep-purple-A200: #7c4dff;
  --md-deep-purple-A400: #651fff;
  --md-deep-purple-A700: #6200ea;
  --md-indigo-50: #e8eaf6;
  --md-indigo-100: #c5cae9;
  --md-indigo-200: #9fa8da;
  --md-indigo-300: #7986cb;
  --md-indigo-400: #5c6bc0;
  --md-indigo-500: #3f51b5;
  --md-indigo-600: #3949ab;
  --md-indigo-700: #303f9f;
  --md-indigo-800: #283593;
  --md-indigo-900: #1a237e;
  --md-indigo-A100: #8c9eff;
  --md-indigo-A200: #536dfe;
  --md-indigo-A400: #3d5afe;
  --md-indigo-A700: #304ffe;
  --md-blue-50: #e3f2fd;
  --md-blue-100: #bbdefb;
  --md-blue-200: #90caf9;
  --md-blue-300: #64b5f6;
  --md-blue-400: #42a5f5;
  --md-blue-500: #2196f3;
  --md-blue-600: #1e88e5;
  --md-blue-700: #1976d2;
  --md-blue-800: #1565c0;
  --md-blue-900: #0d47a1;
  --md-blue-A100: #82b1ff;
  --md-blue-A200: #448aff;
  --md-blue-A400: #2979ff;
  --md-blue-A700: #2962ff;
  --md-light-blue-50: #e1f5fe;
  --md-light-blue-100: #b3e5fc;
  --md-light-blue-200: #81d4fa;
  --md-light-blue-300: #4fc3f7;
  --md-light-blue-400: #29b6f6;
  --md-light-blue-500: #03a9f4;
  --md-light-blue-600: #039be5;
  --md-light-blue-700: #0288d1;
  --md-light-blue-800: #0277bd;
  --md-light-blue-900: #01579b;
  --md-light-blue-A100: #80d8ff;
  --md-light-blue-A200: #40c4ff;
  --md-light-blue-A400: #00b0ff;
  --md-light-blue-A700: #0091ea;
  --md-cyan-50: #e0f7fa;
  --md-cyan-100: #b2ebf2;
  --md-cyan-200: #80deea;
  --md-cyan-300: #4dd0e1;
  --md-cyan-400: #26c6da;
  --md-cyan-500: #00bcd4;
  --md-cyan-600: #00acc1;
  --md-cyan-700: #0097a7;
  --md-cyan-800: #00838f;
  --md-cyan-900: #006064;
  --md-cyan-A100: #84ffff;
  --md-cyan-A200: #18ffff;
  --md-cyan-A400: #00e5ff;
  --md-cyan-A700: #00b8d4;
  --md-teal-50: #e0f2f1;
  --md-teal-100: #b2dfdb;
  --md-teal-200: #80cbc4;
  --md-teal-300: #4db6ac;
  --md-teal-400: #26a69a;
  --md-teal-500: #009688;
  --md-teal-600: #00897b;
  --md-teal-700: #00796b;
  --md-teal-800: #00695c;
  --md-teal-900: #004d40;
  --md-teal-A100: #a7ffeb;
  --md-teal-A200: #64ffda;
  --md-teal-A400: #1de9b6;
  --md-teal-A700: #00bfa5;
  --md-green-50: #e8f5e9;
  --md-green-100: #c8e6c9;
  --md-green-200: #a5d6a7;
  --md-green-300: #81c784;
  --md-green-400: #66bb6a;
  --md-green-500: #4caf50;
  --md-green-600: #43a047;
  --md-green-700: #388e3c;
  --md-green-800: #2e7d32;
  --md-green-900: #1b5e20;
  --md-green-A100: #b9f6ca;
  --md-green-A200: #69f0ae;
  --md-green-A400: #00e676;
  --md-green-A700: #00c853;
  --md-light-green-50: #f1f8e9;
  --md-light-green-100: #dcedc8;
  --md-light-green-200: #c5e1a5;
  --md-light-green-300: #aed581;
  --md-light-green-400: #9ccc65;
  --md-light-green-500: #8bc34a;
  --md-light-green-600: #7cb342;
  --md-light-green-700: #689f38;
  --md-light-green-800: #558b2f;
  --md-light-green-900: #33691e;
  --md-light-green-A100: #ccff90;
  --md-light-green-A200: #b2ff59;
  --md-light-green-A400: #76ff03;
  --md-light-green-A700: #64dd17;
  --md-lime-50: #f9fbe7;
  --md-lime-100: #f0f4c3;
  --md-lime-200: #e6ee9c;
  --md-lime-300: #dce775;
  --md-lime-400: #d4e157;
  --md-lime-500: #cddc39;
  --md-lime-600: #c0ca33;
  --md-lime-700: #afb42b;
  --md-lime-800: #9e9d24;
  --md-lime-900: #827717;
  --md-lime-A100: #f4ff81;
  --md-lime-A200: #eeff41;
  --md-lime-A400: #c6ff00;
  --md-lime-A700: #aeea00;
  --md-yellow-50: #fffde7;
  --md-yellow-100: #fff9c4;
  --md-yellow-200: #fff59d;
  --md-yellow-300: #fff176;
  --md-yellow-400: #ffee58;
  --md-yellow-500: #ffeb3b;
  --md-yellow-600: #fdd835;
  --md-yellow-700: #fbc02d;
  --md-yellow-800: #f9a825;
  --md-yellow-900: #f57f17;
  --md-yellow-A100: #ffff8d;
  --md-yellow-A200: #ff0;
  --md-yellow-A400: #ffea00;
  --md-yellow-A700: #ffd600;
  --md-amber-50: #fff8e1;
  --md-amber-100: #ffecb3;
  --md-amber-200: #ffe082;
  --md-amber-300: #ffd54f;
  --md-amber-400: #ffca28;
  --md-amber-500: #ffc107;
  --md-amber-600: #ffb300;
  --md-amber-700: #ffa000;
  --md-amber-800: #ff8f00;
  --md-amber-900: #ff6f00;
  --md-amber-A100: #ffe57f;
  --md-amber-A200: #ffd740;
  --md-amber-A400: #ffc400;
  --md-amber-A700: #ffab00;
  --md-orange-50: #fff3e0;
  --md-orange-100: #ffe0b2;
  --md-orange-200: #ffcc80;
  --md-orange-300: #ffb74d;
  --md-orange-400: #ffa726;
  --md-orange-500: #ff9800;
  --md-orange-600: #fb8c00;
  --md-orange-700: #f57c00;
  --md-orange-800: #ef6c00;
  --md-orange-900: #e65100;
  --md-orange-A100: #ffd180;
  --md-orange-A200: #ffab40;
  --md-orange-A400: #ff9100;
  --md-orange-A700: #ff6d00;
  --md-deep-orange-50: #fbe9e7;
  --md-deep-orange-100: #ffccbc;
  --md-deep-orange-200: #ffab91;
  --md-deep-orange-300: #ff8a65;
  --md-deep-orange-400: #ff7043;
  --md-deep-orange-500: #ff5722;
  --md-deep-orange-600: #f4511e;
  --md-deep-orange-700: #e64a19;
  --md-deep-orange-800: #d84315;
  --md-deep-orange-900: #bf360c;
  --md-deep-orange-A100: #ff9e80;
  --md-deep-orange-A200: #ff6e40;
  --md-deep-orange-A400: #ff3d00;
  --md-deep-orange-A700: #dd2c00;
  --md-brown-50: #efebe9;
  --md-brown-100: #d7ccc8;
  --md-brown-200: #bcaaa4;
  --md-brown-300: #a1887f;
  --md-brown-400: #8d6e63;
  --md-brown-500: #795548;
  --md-brown-600: #6d4c41;
  --md-brown-700: #5d4037;
  --md-brown-800: #4e342e;
  --md-brown-900: #3e2723;
  --md-grey-50: #fafafa;
  --md-grey-100: #f5f5f5;
  --md-grey-200: #eee;
  --md-grey-300: #e0e0e0;
  --md-grey-400: #bdbdbd;
  --md-grey-500: #9e9e9e;
  --md-grey-600: #757575;
  --md-grey-700: #616161;
  --md-grey-800: #424242;
  --md-grey-900: #212121;
  --md-blue-grey-50: #eceff1;
  --md-blue-grey-100: #cfd8dc;
  --md-blue-grey-200: #b0bec5;
  --md-blue-grey-300: #90a4ae;
  --md-blue-grey-400: #78909c;
  --md-blue-grey-500: #607d8b;
  --md-blue-grey-600: #546e7a;
  --md-blue-grey-700: #455a64;
  --md-blue-grey-800: #37474f;
  --md-blue-grey-900: #263238;
  }

/_-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

/_-----------------------------------------------------------------------------
| RenderedText
|----------------------------------------------------------------------------_/

:root {
/_ This is the padding value to fill the gaps between lines containing spans with background color. _/
--jp-private-code-span-padding: calc(
(var(--jp-code-line-height) - 1) \* var(--jp-code-font-size) / 2
);
}

.jp-RenderedText {
text-align: left;
padding-left: var(--jp-code-padding);
line-height: var(--jp-code-line-height);
font-family: var(--jp-code-font-family);
}

.jp-RenderedText pre,
.jp-RenderedJavaScript pre,
.jp-RenderedHTMLCommon pre {
color: var(--jp-content-font-color1);
font-size: var(--jp-code-font-size);
border: none;
margin: 0;
padding: 0;
}

.jp-RenderedText pre a:link {
text-decoration: none;
color: var(--jp-content-link-color);
}

.jp-RenderedText pre a:hover {
text-decoration: underline;
color: var(--jp-content-link-color);
}

.jp-RenderedText pre a:visited {
text-decoration: none;
color: var(--jp-content-link-color);
}

/_ console foregrounds and backgrounds _/
.jp-RenderedText pre .ansi-black-fg {
color: #3e424d;
}

.jp-RenderedText pre .ansi-red-fg {
color: #e75c58;
}

.jp-RenderedText pre .ansi-green-fg {
color: #00a250;
}

.jp-RenderedText pre .ansi-yellow-fg {
color: #ddb62b;
}

.jp-RenderedText pre .ansi-blue-fg {
color: #208ffb;
}

.jp-RenderedText pre .ansi-magenta-fg {
color: #d160c4;
}

.jp-RenderedText pre .ansi-cyan-fg {
color: #60c6c8;
}

.jp-RenderedText pre .ansi-white-fg {
color: #c5c1b4;
}

.jp-RenderedText pre .ansi-black-bg {
background-color: #3e424d;
padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-red-bg {
background-color: #e75c58;
padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-green-bg {
background-color: #00a250;
padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-yellow-bg {
background-color: #ddb62b;
padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-blue-bg {
background-color: #208ffb;
padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-magenta-bg {
background-color: #d160c4;
padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-cyan-bg {
background-color: #60c6c8;
padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-white-bg {
background-color: #c5c1b4;
padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-black-intense-fg {
color: #282c36;
}

.jp-RenderedText pre .ansi-red-intense-fg {
color: #b22b31;
}

.jp-RenderedText pre .ansi-green-intense-fg {
color: #007427;
}

.jp-RenderedText pre .ansi-yellow-intense-fg {
color: #b27d12;
}

.jp-RenderedText pre .ansi-blue-intense-fg {
color: #0065ca;
}

.jp-RenderedText pre .ansi-magenta-intense-fg {
color: #a03196;
}

.jp-RenderedText pre .ansi-cyan-intense-fg {
color: #258f8f;
}

.jp-RenderedText pre .ansi-white-intense-fg {
color: #a1a6b2;
}

.jp-RenderedText pre .ansi-black-intense-bg {
background-color: #282c36;
padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-red-intense-bg {
background-color: #b22b31;
padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-green-intense-bg {
background-color: #007427;
padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-yellow-intense-bg {
background-color: #b27d12;
padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-blue-intense-bg {
background-color: #0065ca;
padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-magenta-intense-bg {
background-color: #a03196;
padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-cyan-intense-bg {
background-color: #258f8f;
padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-white-intense-bg {
background-color: #a1a6b2;
padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-default-inverse-fg {
color: var(--jp-ui-inverse-font-color0);
}

.jp-RenderedText pre .ansi-default-inverse-bg {
background-color: var(--jp-inverse-layout-color0);
padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-bold {
font-weight: bold;
}

.jp-RenderedText pre .ansi-underline {
text-decoration: underline;
}

.jp-RenderedText[data-mime-type='application/vnd.jupyter.stderr'] {
background: var(--jp-rendermime-error-background);
padding-top: var(--jp-code-padding);
}

/_-----------------------------------------------------------------------------
| RenderedLatex
|----------------------------------------------------------------------------_/

.jp-RenderedLatex {
color: var(--jp-content-font-color1);
font-size: var(--jp-content-font-size1);
line-height: var(--jp-content-line-height);
}

/_ Left-justify outputs._/
.jp-OutputArea-output.jp-RenderedLatex {
padding: var(--jp-code-padding);
text-align: left;
}

/_-----------------------------------------------------------------------------
| RenderedHTML
|----------------------------------------------------------------------------_/

.jp-RenderedHTMLCommon {
color: var(--jp-content-font-color1);
font-family: var(--jp-content-font-family);
font-size: var(--jp-content-font-size1);
line-height: var(--jp-content-line-height);

/_ Give a bit more R padding on Markdown text to keep line lengths reasonable _/
padding-right: 20px;
}

.jp-RenderedHTMLCommon em {
font-style: italic;
}

.jp-RenderedHTMLCommon strong {
font-weight: bold;
}

.jp-RenderedHTMLCommon u {
text-decoration: underline;
}

.jp-RenderedHTMLCommon a:link {
text-decoration: none;
color: var(--jp-content-link-color);
}

.jp-RenderedHTMLCommon a:hover {
text-decoration: underline;
color: var(--jp-content-link-color);
}

.jp-RenderedHTMLCommon a:visited {
text-decoration: none;
color: var(--jp-content-link-color);
}

/_ Headings _/

.jp-RenderedHTMLCommon h1,
.jp-RenderedHTMLCommon h2,
.jp-RenderedHTMLCommon h3,
.jp-RenderedHTMLCommon h4,
.jp-RenderedHTMLCommon h5,
.jp-RenderedHTMLCommon h6 {
line-height: var(--jp-content-heading-line-height);
font-weight: var(--jp-content-heading-font-weight);
font-style: normal;
margin: var(--jp-content-heading-margin-top) 0
var(--jp-content-heading-margin-bottom) 0;
}

.jp-RenderedHTMLCommon h1:first-child,
.jp-RenderedHTMLCommon h2:first-child,
.jp-RenderedHTMLCommon h3:first-child,
.jp-RenderedHTMLCommon h4:first-child,
.jp-RenderedHTMLCommon h5:first-child,
.jp-RenderedHTMLCommon h6:first-child {
margin-top: calc(0.5 \* var(--jp-content-heading-margin-top));
}

.jp-RenderedHTMLCommon h1:last-child,
.jp-RenderedHTMLCommon h2:last-child,
.jp-RenderedHTMLCommon h3:last-child,
.jp-RenderedHTMLCommon h4:last-child,
.jp-RenderedHTMLCommon h5:last-child,
.jp-RenderedHTMLCommon h6:last-child {
margin-bottom: calc(0.5 \* var(--jp-content-heading-margin-bottom));
}

.jp-RenderedHTMLCommon h1 {
font-size: var(--jp-content-font-size5);
}

.jp-RenderedHTMLCommon h2 {
font-size: var(--jp-content-font-size4);
}

.jp-RenderedHTMLCommon h3 {
font-size: var(--jp-content-font-size3);
}

.jp-RenderedHTMLCommon h4 {
font-size: var(--jp-content-font-size2);
}

.jp-RenderedHTMLCommon h5 {
font-size: var(--jp-content-font-size1);
}

.jp-RenderedHTMLCommon h6 {
font-size: var(--jp-content-font-size0);
}

/_ Lists _/

/_ stylelint-disable selector-max-type, selector-max-compound-selectors _/

.jp-RenderedHTMLCommon ul:not(.list-inline),
.jp-RenderedHTMLCommon ol:not(.list-inline) {
padding-left: 2em;
}

.jp-RenderedHTMLCommon ul {
list-style: disc;
}

.jp-RenderedHTMLCommon ul ul {
list-style: square;
}

.jp-RenderedHTMLCommon ul ul ul {
list-style: circle;
}

.jp-RenderedHTMLCommon ol {
list-style: decimal;
}

.jp-RenderedHTMLCommon ol ol {
list-style: upper-alpha;
}

.jp-RenderedHTMLCommon ol ol ol {
list-style: lower-alpha;
}

.jp-RenderedHTMLCommon ol ol ol ol {
list-style: lower-roman;
}

.jp-RenderedHTMLCommon ol ol ol ol ol {
list-style: decimal;
}

.jp-RenderedHTMLCommon ol,
.jp-RenderedHTMLCommon ul {
margin-bottom: 1em;
}

.jp-RenderedHTMLCommon ul ul,
.jp-RenderedHTMLCommon ul ol,
.jp-RenderedHTMLCommon ol ul,
.jp-RenderedHTMLCommon ol ol {
margin-bottom: 0;
}

/_ stylelint-enable selector-max-type, selector-max-compound-selectors _/

.jp-RenderedHTMLCommon hr {
color: var(--jp-border-color2);
background-color: var(--jp-border-color1);
margin-top: 1em;
margin-bottom: 1em;
}

.jp-RenderedHTMLCommon > pre {
margin: 1.5em 2em;
}

.jp-RenderedHTMLCommon pre,
.jp-RenderedHTMLCommon code {
border: 0;
background-color: var(--jp-layout-color0);
color: var(--jp-content-font-color1);
font-family: var(--jp-code-font-family);
font-size: inherit;
line-height: var(--jp-code-line-height);
padding: 0;
white-space: pre-wrap;
}

.jp-RenderedHTMLCommon :not(pre) > code {
background-color: var(--jp-layout-color2);
padding: 1px 5px;
}

/_ Tables _/

.jp-RenderedHTMLCommon table {
border-collapse: collapse;
border-spacing: 0;
border: none;
color: var(--jp-ui-font-color1);
font-size: var(--jp-ui-font-size1);
table-layout: fixed;
margin-left: auto;
margin-bottom: 1em;
margin-right: auto;
}

.jp-RenderedHTMLCommon thead {
border-bottom: var(--jp-border-width) solid var(--jp-border-color1);
vertical-align: bottom;
}

.jp-RenderedHTMLCommon td,
.jp-RenderedHTMLCommon th,
.jp-RenderedHTMLCommon tr {
vertical-align: middle;
padding: 0.5em;
line-height: normal;
white-space: normal;
max-width: none;
border: none;
}

.jp-RenderedMarkdown.jp-RenderedHTMLCommon td,
.jp-RenderedMarkdown.jp-RenderedHTMLCommon th {
max-width: none;
}

:not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon td,
:not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon th,
:not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon tr {
text-align: right;
}

.jp-RenderedHTMLCommon th {
font-weight: bold;
}

.jp-RenderedHTMLCommon tbody tr:nth-child(odd) {
background: var(--jp-layout-color0);
}

.jp-RenderedHTMLCommon tbody tr:nth-child(even) {
background: var(--jp-rendermime-table-row-background);
}

.jp-RenderedHTMLCommon tbody tr:hover {
background: var(--jp-rendermime-table-row-hover-background);
}

.jp-RenderedHTMLCommon p {
text-align: left;
margin: 0;
margin-bottom: 1em;
}

.jp-RenderedHTMLCommon img {
-moz-force-broken-image-icon: 1;
}

/_ Restrict to direct children as other images could be nested in other content. _/
.jp-RenderedHTMLCommon > img {
display: block;
margin-left: 0;
margin-right: 0;
margin-bottom: 1em;
}

/_ Change color behind transparent images if they need it... _/
[data-jp-theme-light='false'] .jp-RenderedImage img.jp-needs-light-background {
background-color: var(--jp-inverse-layout-color1);
}

[data-jp-theme-light='true'] .jp-RenderedImage img.jp-needs-dark-background {
background-color: var(--jp-inverse-layout-color1);
}

.jp-RenderedHTMLCommon img,
.jp-RenderedImage img,
.jp-RenderedHTMLCommon svg,
.jp-RenderedSVG svg {
max-width: 100%;
height: auto;
}

.jp-RenderedHTMLCommon img.jp-mod-unconfined,
.jp-RenderedImage img.jp-mod-unconfined,
.jp-RenderedHTMLCommon svg.jp-mod-unconfined,
.jp-RenderedSVG svg.jp-mod-unconfined {
max-width: none;
}

.jp-RenderedHTMLCommon .alert {
padding: var(--jp-notebook-padding);
border: var(--jp-border-width) solid transparent;
border-radius: var(--jp-border-radius);
margin-bottom: 1em;
}

.jp-RenderedHTMLCommon .alert-info {
color: var(--jp-info-color0);
background-color: var(--jp-info-color3);
border-color: var(--jp-info-color2);
}

.jp-RenderedHTMLCommon .alert-info hr {
border-color: var(--jp-info-color3);
}

.jp-RenderedHTMLCommon .alert-info > p:last-child,
.jp-RenderedHTMLCommon .alert-info > ul:last-child {
margin-bottom: 0;
}

.jp-RenderedHTMLCommon .alert-warning {
color: var(--jp-warn-color0);
background-color: var(--jp-warn-color3);
border-color: var(--jp-warn-color2);
}

.jp-RenderedHTMLCommon .alert-warning hr {
border-color: var(--jp-warn-color3);
}

.jp-RenderedHTMLCommon .alert-warning > p:last-child,
.jp-RenderedHTMLCommon .alert-warning > ul:last-child {
margin-bottom: 0;
}

.jp-RenderedHTMLCommon .alert-success {
color: var(--jp-success-color0);
background-color: var(--jp-success-color3);
border-color: var(--jp-success-color2);
}

.jp-RenderedHTMLCommon .alert-success hr {
border-color: var(--jp-success-color3);
}

.jp-RenderedHTMLCommon .alert-success > p:last-child,
.jp-RenderedHTMLCommon .alert-success > ul:last-child {
margin-bottom: 0;
}

.jp-RenderedHTMLCommon .alert-danger {
color: var(--jp-error-color0);
background-color: var(--jp-error-color3);
border-color: var(--jp-error-color2);
}

.jp-RenderedHTMLCommon .alert-danger hr {
border-color: var(--jp-error-color3);
}

.jp-RenderedHTMLCommon .alert-danger > p:last-child,
.jp-RenderedHTMLCommon .alert-danger > ul:last-child {
margin-bottom: 0;
}

.jp-RenderedHTMLCommon blockquote {
margin: 1em 2em;
padding: 0 1em;
border-left: 5px solid var(--jp-border-color2);
}

a.jp-InternalAnchorLink {
visibility: hidden;
margin-left: 8px;
color: var(--md-blue-800);
}

h1:hover .jp-InternalAnchorLink,
h2:hover .jp-InternalAnchorLink,
h3:hover .jp-InternalAnchorLink,
h4:hover .jp-InternalAnchorLink,
h5:hover .jp-InternalAnchorLink,
h6:hover .jp-InternalAnchorLink {
visibility: visible;
}

.jp-RenderedHTMLCommon kbd {
background-color: var(--jp-rendermime-table-row-background);
border: 1px solid var(--jp-border-color0);
border-bottom-color: var(--jp-border-color2);
border-radius: 3px;
box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
display: inline-block;
font-size: var(--jp-ui-font-size0);
line-height: 1em;
padding: 0.2em 0.5em;
}

/\* Most direct children of .jp-RenderedHTMLCommon have a margin-bottom of 1.0.

- At the bottom of cells this is a bit too much as there is also spacing
- between cells. Going all the way to 0 gets too tight between markdown and
- code cells.
  _/
  .jp-RenderedHTMLCommon > _:last-child {
  margin-bottom: 0.5em;
  }

/\*

- Copyright (c) Jupyter Development Team.
- Distributed under the terms of the Modified BSD License.
  \*/

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------_/

.lm-cursor-backdrop {
position: fixed;
width: 200px;
height: 200px;
margin-top: -100px;
margin-left: -100px;
will-change: transform;
z-index: 100;
}

.lm-mod-drag-image {
will-change: transform;
}

/\*

- Copyright (c) Jupyter Development Team.
- Distributed under the terms of the Modified BSD License.
  \*/

.jp-lineFormSearch {
padding: 4px 12px;
background-color: var(--jp-layout-color2);
box-shadow: var(--jp-toolbar-box-shadow);
z-index: 2;
font-size: var(--jp-ui-font-size1);
}

.jp-lineFormCaption {
font-size: var(--jp-ui-font-size0);
line-height: var(--jp-ui-font-size1);
margin-top: 4px;
color: var(--jp-ui-font-color0);
}

.jp-baseLineForm {
border: none;
border-radius: 0;
position: absolute;
background-size: 16px;
background-repeat: no-repeat;
background-position: center;
outline: none;
}

.jp-lineFormButtonContainer {
top: 4px;
right: 8px;
height: 24px;
padding: 0 12px;
width: 12px;
}

.jp-lineFormButtonIcon {
top: 0;
right: 0;
background-color: var(--jp-brand-color1);
height: 100%;
width: 100%;
box-sizing: border-box;
padding: 4px 6px;
}

.jp-lineFormButton {
top: 0;
right: 0;
background-color: transparent;
height: 100%;
width: 100%;
box-sizing: border-box;
}

.jp-lineFormWrapper {
overflow: hidden;
padding: 0 8px;
border: 1px solid var(--jp-border-color0);
background-color: var(--jp-input-active-background);
height: 22px;
}

.jp-lineFormWrapperFocusWithin {
border: var(--jp-border-width) solid var(--md-blue-500);
box-shadow: inset 0 0 4px var(--md-blue-300);
}

.jp-lineFormInput {
background: transparent;
width: 200px;
height: 100%;
border: none;
outline: none;
color: var(--jp-ui-font-color0);
line-height: 28px;
}

/_-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

.jp-JSONEditor {
display: flex;
flex-direction: column;
width: 100%;
}

.jp-JSONEditor-host {
flex: 1 1 auto;
border: var(--jp-border-width) solid var(--jp-input-border-color);
border-radius: 0;
background: var(--jp-layout-color0);
min-height: 50px;
padding: 1px;
}

.jp-JSONEditor.jp-mod-error .jp-JSONEditor-host {
border-color: red;
outline-color: red;
}

.jp-JSONEditor-header {
display: flex;
flex: 1 0 auto;
padding: 0 0 0 12px;
}

.jp-JSONEditor-header label {
flex: 0 0 auto;
}

.jp-JSONEditor-commitButton {
height: 16px;
width: 16px;
background-size: 18px;
background-repeat: no-repeat;
background-position: center;
}

.jp-JSONEditor-host.jp-mod-focused {
background-color: var(--jp-input-active-background);
border: 1px solid var(--jp-input-active-border-color);
box-shadow: var(--jp-input-box-shadow);
}

.jp-Editor.jp-mod-dropTarget {
border: var(--jp-border-width) solid var(--jp-input-active-border-color);
box-shadow: var(--jp-input-box-shadow);
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/
.jp-DocumentSearch-input {
border: none;
outline: none;
color: var(--jp-ui-font-color0);
font-size: var(--jp-ui-font-size1);
background-color: var(--jp-layout-color0);
font-family: var(--jp-ui-font-family);
padding: 2px 1px;
resize: none;
}

.jp-DocumentSearch-overlay {
position: absolute;
background-color: var(--jp-toolbar-background);
border-bottom: var(--jp-border-width) solid var(--jp-toolbar-border-color);
border-left: var(--jp-border-width) solid var(--jp-toolbar-border-color);
top: 0;
right: 0;
z-index: 7;
min-width: 405px;
padding: 2px;
font-size: var(--jp-ui-font-size1);

--jp-private-document-search-button-height: 20px;
}

.jp-DocumentSearch-overlay button {
background-color: var(--jp-toolbar-background);
outline: 0;
}

.jp-DocumentSearch-overlay button:hover {
background-color: var(--jp-layout-color2);
}

.jp-DocumentSearch-overlay button:active {
background-color: var(--jp-layout-color3);
}

.jp-DocumentSearch-overlay-row {
display: flex;
align-items: center;
margin-bottom: 2px;
}

.jp-DocumentSearch-button-content {
display: inline-block;
cursor: pointer;
box-sizing: border-box;
width: 100%;
height: 100%;
}

.jp-DocumentSearch-button-content svg {
width: 100%;
height: 100%;
}

.jp-DocumentSearch-input-wrapper {
border: var(--jp-border-width) solid var(--jp-border-color0);
display: flex;
background-color: var(--jp-layout-color0);
margin: 2px;
}

.jp-DocumentSearch-input-wrapper:focus-within {
border-color: var(--jp-cell-editor-active-border-color);
}

.jp-DocumentSearch-toggle-wrapper,
.jp-DocumentSearch-button-wrapper {
all: initial;
overflow: hidden;
display: inline-block;
border: none;
box-sizing: border-box;
}

.jp-DocumentSearch-toggle-wrapper {
width: 14px;
height: 14px;
}

.jp-DocumentSearch-button-wrapper {
width: var(--jp-private-document-search-button-height);
height: var(--jp-private-document-search-button-height);
}

.jp-DocumentSearch-toggle-wrapper:focus,
.jp-DocumentSearch-button-wrapper:focus {
outline: var(--jp-border-width) solid
var(--jp-cell-editor-active-border-color);
outline-offset: -1px;
}

.jp-DocumentSearch-toggle-wrapper,
.jp-DocumentSearch-button-wrapper,
.jp-DocumentSearch-button-content:focus {
outline: none;
}

.jp-DocumentSearch-toggle-placeholder {
width: 5px;
}

.jp-DocumentSearch-input-button::before {
display: block;
padding-top: 100%;
}

.jp-DocumentSearch-input-button-off {
opacity: var(--jp-search-toggle-off-opacity);
}

.jp-DocumentSearch-input-button-off:hover {
opacity: var(--jp-search-toggle-hover-opacity);
}

.jp-DocumentSearch-input-button-on {
opacity: var(--jp-search-toggle-on-opacity);
}

.jp-DocumentSearch-index-counter {
padding-left: 10px;
padding-right: 10px;
user-select: none;
min-width: 35px;
display: inline-block;
}

.jp-DocumentSearch-up-down-wrapper {
display: inline-block;
padding-right: 2px;
margin-left: auto;
white-space: nowrap;
}

.jp-DocumentSearch-spacer {
margin-left: auto;
}

.jp-DocumentSearch-up-down-wrapper button {
outline: 0;
border: none;
width: var(--jp-private-document-search-button-height);
height: var(--jp-private-document-search-button-height);
vertical-align: middle;
margin: 1px 5px 2px;
}

.jp-DocumentSearch-up-down-button:hover {
background-color: var(--jp-layout-color2);
}

.jp-DocumentSearch-up-down-button:active {
background-color: var(--jp-layout-color3);
}

.jp-DocumentSearch-filter-button {
border-radius: var(--jp-border-radius);
}

.jp-DocumentSearch-filter-button:hover {
background-color: var(--jp-layout-color2);
}

.jp-DocumentSearch-filter-button-enabled {
background-color: var(--jp-layout-color2);
}

.jp-DocumentSearch-filter-button-enabled:hover {
background-color: var(--jp-layout-color3);
}

.jp-DocumentSearch-search-options {
padding: 0 8px;
margin-left: 3px;
width: 100%;
display: grid;
justify-content: start;
grid-template-columns: 1fr 1fr;
align-items: center;
justify-items: stretch;
}

.jp-DocumentSearch-search-filter-disabled {
color: var(--jp-ui-font-color2);
}

.jp-DocumentSearch-search-filter {
display: flex;
align-items: center;
user-select: none;
}

.jp-DocumentSearch-regex-error {
color: var(--jp-error-color0);
}

.jp-DocumentSearch-replace-button-wrapper {
overflow: hidden;
display: inline-block;
box-sizing: border-box;
border: var(--jp-border-width) solid var(--jp-border-color0);
margin: auto 2px;
padding: 1px 4px;
height: calc(var(--jp-private-document-search-button-height) + 2px);
}

.jp-DocumentSearch-replace-button-wrapper:focus {
border: var(--jp-border-width) solid var(--jp-cell-editor-active-border-color);
}

.jp-DocumentSearch-replace-button {
display: inline-block;
text-align: center;
cursor: pointer;
box-sizing: border-box;
color: var(--jp-ui-font-color1);

/_ height - 2 _ (padding of wrapper) \*/
line-height: calc(var(--jp-private-document-search-button-height) - 2px);
width: 100%;
height: 100%;
}

.jp-DocumentSearch-replace-button:focus {
outline: none;
}

.jp-DocumentSearch-replace-wrapper-class {
margin-left: 14px;
display: flex;
}

.jp-DocumentSearch-replace-toggle {
border: none;
background-color: var(--jp-toolbar-background);
border-radius: var(--jp-border-radius);
}

.jp-DocumentSearch-replace-toggle:hover {
background-color: var(--jp-layout-color2);
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

.cm-editor {
line-height: var(--jp-code-line-height);
font-size: var(--jp-code-font-size);
font-family: var(--jp-code-font-family);
border: 0;
border-radius: 0;
height: auto;

/_ Changed to auto to autogrow _/
}

.cm-editor pre {
padding: 0 var(--jp-code-padding);
}

.jp-CodeMirrorEditor[data-type='inline'] .cm-dialog {
background-color: var(--jp-layout-color0);
color: var(--jp-content-font-color1);
}

.jp-CodeMirrorEditor {
cursor: text;
}

/_ When zoomed out 67% and 33% on a screen of 1440 width x 900 height _/
@media screen and (min-width: 2138px) and (max-width: 4319px) {
.jp-CodeMirrorEditor[data-type='inline'] .cm-cursor {
border-left: var(--jp-code-cursor-width1) solid
var(--jp-editor-cursor-color);
}
}

/_ When zoomed out less than 33% _/
@media screen and (min-width: 4320px) {
.jp-CodeMirrorEditor[data-type='inline'] .cm-cursor {
border-left: var(--jp-code-cursor-width2) solid
var(--jp-editor-cursor-color);
}
}

.cm-editor.jp-mod-readOnly .cm-cursor {
display: none;
}

.jp-CollaboratorCursor {
border-left: 5px solid transparent;
border-right: 5px solid transparent;
border-top: none;
border-bottom: 3px solid;
background-clip: content-box;
margin-left: -5px;
margin-right: -5px;
}

.cm-searching,
.cm-searching span {
/_ `.cm-searching span`: we need to override syntax highlighting _/
background-color: var(--jp-search-unselected-match-background-color);
color: var(--jp-search-unselected-match-color);
}

.cm-searching::selection,
.cm-searching span::selection {
background-color: var(--jp-search-unselected-match-background-color);
color: var(--jp-search-unselected-match-color);
}

.jp-current-match > .cm-searching,
.jp-current-match > .cm-searching span,
.cm-searching > .jp-current-match,
.cm-searching > .jp-current-match span {
background-color: var(--jp-search-selected-match-background-color);
color: var(--jp-search-selected-match-color);
}

.jp-current-match > .cm-searching::selection,
.cm-searching > .jp-current-match::selection,
.jp-current-match > .cm-searching span::selection {
background-color: var(--jp-search-selected-match-background-color);
color: var(--jp-search-selected-match-color);
}

.cm-trailingspace {
background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVQIHQGlAFr/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7+r3zKmT0/+pk9P/7+r3zAAAAAAAAAAABAAAAAAAAAAA6OPzM+/q9wAAAAAA6OPzMwAAAAAAAAAAAgAAAAAAAAAAGR8NiRQaCgAZIA0AGR8NiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQyoYJ/SY80UAAAAASUVORK5CYII=);
background-position: center left;
background-repeat: repeat-x;
}

.jp-CollaboratorCursor-hover {
position: absolute;
z-index: 1;
transform: translateX(-50%);
color: white;
border-radius: 3px;
padding-left: 4px;
padding-right: 4px;
padding-top: 1px;
padding-bottom: 1px;
text-align: center;
font-size: var(--jp-ui-font-size1);
white-space: nowrap;
}

.jp-CodeMirror-ruler {
border-left: 1px dashed var(--jp-border-color2);
}

/_ Styles for shared cursors (remote cursor locations and selected ranges) _/
.jp-CodeMirrorEditor .cm-ySelectionCaret {
position: relative;
border-left: 1px solid black;
margin-left: -1px;
margin-right: -1px;
box-sizing: border-box;
}

.jp-CodeMirrorEditor .cm-ySelectionCaret > .cm-ySelectionInfo {
white-space: nowrap;
position: absolute;
top: -1.15em;
padding-bottom: 0.05em;
left: -1px;
font-size: 0.95em;
font-family: var(--jp-ui-font-family);
font-weight: bold;
line-height: normal;
user-select: none;
color: white;
padding-left: 2px;
padding-right: 2px;
z-index: 101;
transition: opacity 0.3s ease-in-out;
}

.jp-CodeMirrorEditor .cm-ySelectionInfo {
transition-delay: 0.7s;
opacity: 0;
}

.jp-CodeMirrorEditor .cm-ySelectionCaret:hover > .cm-ySelectionInfo {
opacity: 1;
transition-delay: 0s;
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

.jp-MimeDocument {
outline: none;
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

/_-----------------------------------------------------------------------------
| Variables
|----------------------------------------------------------------------------_/

:root {
--jp-private-filebrowser-button-height: 28px;
--jp-private-filebrowser-button-width: 48px;
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

.jp-FileBrowser .jp-SidePanel-content {
display: flex;
flex-direction: column;
}

.jp-FileBrowser-toolbar.jp-Toolbar {
flex-wrap: wrap;
row-gap: 12px;
border-bottom: none;
height: auto;
margin: 8px 12px 0;
box-shadow: none;
padding: 0;
justify-content: flex-start;
}

.jp-FileBrowser-Panel {
flex: 1 1 auto;
display: flex;
flex-direction: column;
}

.jp-BreadCrumbs {
flex: 0 0 auto;
margin: 8px 12px;
}

.jp-BreadCrumbs-item {
margin: 0 2px;
padding: 0 2px;
border-radius: var(--jp-border-radius);
cursor: pointer;
}

.jp-BreadCrumbs-item:hover {
background-color: var(--jp-layout-color2);
}

.jp-BreadCrumbs-item:first-child {
margin-left: 0;
}

.jp-BreadCrumbs-item.jp-mod-dropTarget {
background-color: var(--jp-brand-color2);
opacity: 0.7;
}

/_-----------------------------------------------------------------------------
| Buttons
|----------------------------------------------------------------------------_/

.jp-FileBrowser-toolbar > .jp-Toolbar-item {
flex: 0 0 auto;
padding-left: 0;
padding-right: 2px;
align-items: center;
height: unset;
}

.jp-FileBrowser-toolbar > .jp-Toolbar-item .jp-ToolbarButtonComponent {
width: 40px;
}

/_-----------------------------------------------------------------------------
| Other styles
|----------------------------------------------------------------------------_/

.jp-FileDialog.jp-mod-conflict input {
color: var(--jp-error-color1);
}

.jp-FileDialog .jp-new-name-title {
margin-top: 12px;
}

.jp-LastModified-hidden {
display: none;
}

.jp-FileSize-hidden {
display: none;
}

.jp-FileBrowser .lm-AccordionPanel > h3:first-child {
display: none;
}

/_-----------------------------------------------------------------------------
| DirListing
|----------------------------------------------------------------------------_/

.jp-DirListing {
flex: 1 1 auto;
display: flex;
flex-direction: column;
outline: 0;
}

.jp-DirListing-header {
flex: 0 0 auto;
display: flex;
flex-direction: row;
align-items: center;
overflow: hidden;
border-top: var(--jp-border-width) solid var(--jp-border-color2);
border-bottom: var(--jp-border-width) solid var(--jp-border-color1);
box-shadow: var(--jp-toolbar-box-shadow);
z-index: 2;
}

.jp-DirListing-headerItem {
padding: 4px 12px 2px;
font-weight: 500;
}

.jp-DirListing-headerItem:hover {
background: var(--jp-layout-color2);
}

.jp-DirListing-headerItem.jp-id-name {
flex: 1 0 84px;
}

.jp-DirListing-headerItem.jp-id-modified {
flex: 0 0 112px;
border-left: var(--jp-border-width) solid var(--jp-border-color2);
text-align: right;
}

.jp-DirListing-headerItem.jp-id-filesize {
flex: 0 0 75px;
border-left: var(--jp-border-width) solid var(--jp-border-color2);
text-align: right;
}

.jp-id-narrow {
display: none;
flex: 0 0 5px;
padding: 4px;
border-left: var(--jp-border-width) solid var(--jp-border-color2);
text-align: right;
color: var(--jp-border-color2);
}

.jp-DirListing-narrow .jp-id-narrow {
display: block;
}

.jp-DirListing-narrow .jp-id-modified,
.jp-DirListing-narrow .jp-DirListing-itemModified {
display: none;
}

.jp-DirListing-headerItem.jp-mod-selected {
font-weight: 600;
}

/_ increase specificity to override bundled default _/
.jp-DirListing-content {
flex: 1 1 auto;
margin: 0;
padding: 0;
list-style-type: none;
overflow: auto;
background-color: var(--jp-layout-color1);
}

.jp-DirListing-content mark {
color: var(--jp-ui-font-color0);
background-color: transparent;
font-weight: bold;
}

.jp-DirListing-content .jp-DirListing-item.jp-mod-selected mark {
color: var(--jp-ui-inverse-font-color0);
}

/_ Style the directory listing content when a user drops a file to upload _/
.jp-DirListing.jp-mod-native-drop .jp-DirListing-content {
outline: 5px dashed rgba(128, 128, 128, 0.5);
outline-offset: -10px;
cursor: copy;
}

.jp-DirListing-item {
display: flex;
flex-direction: row;
align-items: center;
padding: 4px 12px;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}

.jp-DirListing-checkboxWrapper {
/_ Increases hit area of checkbox. _/
padding: 4px;
}

.jp-DirListing-header
.jp-DirListing-checkboxWrapper

- .jp-DirListing-headerItem {
  padding-left: 4px;
  }

.jp-DirListing-content .jp-DirListing-checkboxWrapper {
position: relative;
left: -4px;
margin: -4px 0 -4px -8px;
}

.jp-DirListing-checkboxWrapper.jp-mod-visible {
visibility: visible;
}

/_ For devices that support hovering, hide checkboxes until hovered, selected...
_/
@media (hover: hover) {
.jp-DirListing-checkboxWrapper {
visibility: hidden;
}

.jp-DirListing-item:hover .jp-DirListing-checkboxWrapper,
.jp-DirListing-item.jp-mod-selected .jp-DirListing-checkboxWrapper {
visibility: visible;
}
}

.jp-DirListing-item[data-is-dot] {
opacity: 75%;
}

.jp-DirListing-item.jp-mod-selected {
color: var(--jp-ui-inverse-font-color1);
background: var(--jp-brand-color1);
}

.jp-DirListing-item.jp-mod-dropTarget {
background: var(--jp-brand-color3);
}

.jp-DirListing-item:hover:not(.jp-mod-selected) {
background: var(--jp-layout-color2);
}

.jp-DirListing-itemIcon {
flex: 0 0 20px;
margin-right: 4px;
}

.jp-DirListing-itemText {
flex: 1 0 64px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
user-select: none;
}

.jp-DirListing-itemText:focus {
outline-width: 2px;
outline-color: var(--jp-inverse-layout-color1);
outline-style: solid;
outline-offset: 1px;
}

.jp-DirListing-item.jp-mod-selected .jp-DirListing-itemText:focus {
outline-color: var(--jp-layout-color1);
}

.jp-DirListing-itemModified {
flex: 0 0 125px;
text-align: right;
}

.jp-DirListing-itemFileSize {
flex: 0 0 90px;
text-align: right;
}

.jp-DirListing-editor {
flex: 1 0 64px;
outline: none;
border: none;
color: var(--jp-ui-font-color1);
background-color: var(--jp-layout-color1);
}

.jp-DirListing-item.jp-mod-running .jp-DirListing-itemIcon::before {
color: var(--jp-success-color1);
content: '\25CF';
font-size: 8px;
position: absolute;
left: -8px;
}

.jp-DirListing-item.jp-mod-running.jp-mod-selected
.jp-DirListing-itemIcon::before {
color: var(--jp-ui-inverse-font-color1);
}

.jp-DirListing-item.lm-mod-drag-image,
.jp-DirListing-item.jp-mod-selected.lm-mod-drag-image {
font-size: var(--jp-ui-font-size1);
padding-left: 4px;
margin-left: 4px;
width: 160px;
background-color: var(--jp-ui-inverse-font-color2);
box-shadow: var(--jp-elevation-z2);
border-radius: 0;
color: var(--jp-ui-font-color1);
transform: translateX(-40%) translateY(-58%);
}

.jp-Document {
min-width: 120px;
min-height: 120px;
outline: none;
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

/_-----------------------------------------------------------------------------
| Main OutputArea
| OutputArea has a list of Outputs
|----------------------------------------------------------------------------_/

.jp-OutputArea {
overflow-y: auto;
}

.jp-OutputArea-child {
display: table;
table-layout: fixed;
width: 100%;
overflow: hidden;
}

.jp-OutputPrompt {
width: var(--jp-cell-prompt-width);
color: var(--jp-cell-outprompt-font-color);
font-family: var(--jp-cell-prompt-font-family);
padding: var(--jp-code-padding);
letter-spacing: var(--jp-cell-prompt-letter-spacing);
line-height: var(--jp-code-line-height);
font-size: var(--jp-code-font-size);
border: var(--jp-border-width) solid transparent;
opacity: var(--jp-cell-prompt-opacity);

/_ Right align prompt text, don't wrap to handle large prompt numbers _/
text-align: right;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;

/_ Disable text selection _/
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}

.jp-OutputArea-prompt {
display: table-cell;
vertical-align: top;
}

.jp-OutputArea-output {
display: table-cell;
width: 100%;
height: auto;
overflow: auto;
user-select: text;
-moz-user-select: text;
-webkit-user-select: text;
-ms-user-select: text;
}

.jp-OutputArea .jp-RenderedText {
padding-left: 1ch;
}

/\*\*

- Prompt overlay.
  \*/

.jp-OutputArea-promptOverlay {
position: absolute;
top: 0;
width: var(--jp-cell-prompt-width);
height: 100%;
opacity: 0.5;
}

.jp-OutputArea-promptOverlay:hover {
background: var(--jp-layout-color2);
box-shadow: inset 0 0 1px var(--jp-inverse-layout-color0);
cursor: zoom-out;
}

.jp-mod-outputsScrolled .jp-OutputArea-promptOverlay:hover {
cursor: zoom-in;
}

/\*\*

- Isolated output.
  \*/
  .jp-OutputArea-output.jp-mod-isolated {
  width: 100%;
  display: block;
  }

/_
When drag events occur, `lm-mod-override-cursor` is added to the body.
Because iframes steal all cursor events, the following two rules are necessary
to suppress pointer events while resize drags are occurring. There may be a
better solution to this problem.
_/
body.lm-mod-override-cursor .jp-OutputArea-output.jp-mod-isolated {
position: relative;
}

body.lm-mod-override-cursor .jp-OutputArea-output.jp-mod-isolated::before {
content: '';
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: transparent;
}

/_ pre _/

.jp-OutputArea-output pre {
border: none;
margin: 0;
padding: 0;
overflow-x: auto;
overflow-y: auto;
word-break: break-all;
word-wrap: break-word;
white-space: pre-wrap;
}

/_ tables _/

.jp-OutputArea-output.jp-RenderedHTMLCommon table {
margin-left: 0;
margin-right: 0;
}

/_ description lists _/

.jp-OutputArea-output dl,
.jp-OutputArea-output dt,
.jp-OutputArea-output dd {
display: block;
}

.jp-OutputArea-output dl {
width: 100%;
overflow: hidden;
padding: 0;
margin: 0;
}

.jp-OutputArea-output dt {
font-weight: bold;
float: left;
width: 20%;
padding: 0;
margin: 0;
}

.jp-OutputArea-output dd {
float: left;
width: 80%;
padding: 0;
margin: 0;
}

.jp-TrimmedOutputs pre {
background: var(--jp-layout-color3);
font-size: calc(var(--jp-code-font-size) \* 1.4);
text-align: center;
text-transform: uppercase;
}

/\* Hide the gutter in case of

- - nested output areas (e.g. in the case of output widgets)
- - mirrored output areas
    \*/
    .jp-OutputArea .jp-OutputArea .jp-OutputArea-prompt {
    display: none;
    }

/_ Hide empty lines in the output area, for instance due to cleared widgets _/
.jp-OutputArea-prompt:empty {
padding: 0;
border: 0;
}

/_-----------------------------------------------------------------------------
| executeResult is added to any Output-result for the display of the object
| returned by a cell
|----------------------------------------------------------------------------_/

.jp-OutputArea-output.jp-OutputArea-executeResult {
margin-left: 0;
width: 100%;
}

/\* Text output with the Out[] prompt needs a top padding to match the

- alignment of the Out[] prompt itself.
  \*/
  .jp-OutputArea-executeResult .jp-RenderedText.jp-OutputArea-output {
  padding-top: var(--jp-code-padding);
  border-top: var(--jp-border-width) solid transparent;
  }

/_-----------------------------------------------------------------------------
| The Stdin output
|----------------------------------------------------------------------------_/

.jp-Stdin-prompt {
color: var(--jp-content-font-color0);
padding-right: var(--jp-code-padding);
vertical-align: baseline;
flex: 0 0 auto;
}

.jp-Stdin-input {
font-family: var(--jp-code-font-family);
font-size: inherit;
color: inherit;
background-color: inherit;
width: 42%;
min-width: 200px;

/_ make sure input baseline aligns with prompt _/
vertical-align: baseline;

/_ padding + margin = 0.5em between prompt and cursor _/
padding: 0 0.25em;
margin: 0 0.25em;
flex: 0 0 70%;
}

.jp-Stdin-input::placeholder {
opacity: 0;
}

.jp-Stdin-input:focus {
box-shadow: none;
}

.jp-Stdin-input:focus::placeholder {
opacity: 1;
}

/_-----------------------------------------------------------------------------
| Output Area View
|----------------------------------------------------------------------------_/

.jp-LinkedOutputView .jp-OutputArea {
height: 100%;
display: block;
}

.jp-LinkedOutputView .jp-OutputArea-output:only-child {
height: 100%;
}

/_-----------------------------------------------------------------------------
| Printing
|----------------------------------------------------------------------------_/

@media print {
.jp-OutputArea-child {
break-inside: avoid-page;
}
}

/_-----------------------------------------------------------------------------
| Mobile
|----------------------------------------------------------------------------_/
@media only screen and (max-width: 760px) {
.jp-OutputPrompt {
display: table-row;
text-align: left;
}

.jp-OutputArea-child .jp-OutputArea-output {
display: table-row;
margin-left: var(--jp-notebook-padding);
}
}

/_ Trimmed outputs warning _/
.jp-TrimmedOutputs > a {
margin: 10px;
text-decoration: none;
cursor: pointer;
}

.jp-TrimmedOutputs > a:hover {
text-decoration: none;
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

/_-----------------------------------------------------------------------------
| Table of Contents
|----------------------------------------------------------------------------_/

:root {
--jp-private-toc-active-width: 4px;
}

.jp-TableOfContents {
display: flex;
flex-direction: column;
background: var(--jp-layout-color1);
color: var(--jp-ui-font-color1);
font-size: var(--jp-ui-font-size1);
height: 100%;
}

.jp-TableOfContents-placeholder {
text-align: center;
}

.jp-TableOfContents-placeholderContent {
color: var(--jp-content-font-color2);
padding: 8px;
}

.jp-TableOfContents-placeholderContent > h3 {
margin-bottom: var(--jp-content-heading-margin-bottom);
}

.jp-TableOfContents .jp-SidePanel-content {
overflow-y: auto;
}

.jp-TableOfContents-tree {
margin: 4px;
}

.jp-TableOfContents ol {
list-style-type: none;
}

/_ stylelint-disable-next-line selector-max-type _/
.jp-TableOfContents li > ol {
/_ Align left border with triangle icon center _/
padding-left: 11px;
}

.jp-TableOfContents-content {
/_ left margin for the active heading indicator _/
margin: 0 0 0 var(--jp-private-toc-active-width);
padding: 0;
background-color: var(--jp-layout-color1);
}

.jp-tocItem {
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}

.jp-tocItem-heading {
display: flex;
cursor: pointer;
}

.jp-tocItem-heading:hover {
background-color: var(--jp-layout-color2);
}

.jp-tocItem-content {
display: block;
padding: 4px 0;
white-space: nowrap;
text-overflow: ellipsis;
overflow-x: hidden;
}

.jp-tocItem-collapser {
height: 20px;
margin: 2px 2px 0;
padding: 0;
background: none;
border: none;
cursor: pointer;
}

.jp-tocItem-collapser:hover {
background-color: var(--jp-layout-color3);
}

/_ Active heading indicator _/

.jp-tocItem-heading::before {
content: ' ';
background: transparent;
width: var(--jp-private-toc-active-width);
height: 24px;
position: absolute;
left: 0;
border-radius: var(--jp-border-radius);
}

.jp-tocItem-heading.jp-tocItem-active::before {
background-color: var(--jp-brand-color1);
}

.jp-tocItem-heading:hover.jp-tocItem-active::before {
background: var(--jp-brand-color0);
opacity: 1;
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

.jp-Collapser {
flex: 0 0 var(--jp-cell-collapser-width);
padding: 0;
margin: 0;
border: none;
outline: none;
background: transparent;
border-radius: var(--jp-border-radius);
opacity: 1;
}

.jp-Collapser-child {
display: block;
width: 100%;
box-sizing: border-box;

/_ height: 100% doesn't work because the height of its parent is computed from content _/
position: absolute;
top: 0;
bottom: 0;
}

/_-----------------------------------------------------------------------------
| Printing
|----------------------------------------------------------------------------_/

/\*
Hiding collapsers in print mode.

Note: input and output wrappers have "display: block" propery in print mode.
\*/

@media print {
.jp-Collapser {
display: none;
}
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

/_-----------------------------------------------------------------------------
| Header/Footer
|----------------------------------------------------------------------------_/

/_ Hidden by zero height by default _/
.jp-CellHeader,
.jp-CellFooter {
height: 0;
width: 100%;
padding: 0;
margin: 0;
border: none;
outline: none;
background: transparent;
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

/_-----------------------------------------------------------------------------
| Input
|----------------------------------------------------------------------------_/

/_ All input areas _/
.jp-InputArea {
display: table;
table-layout: fixed;
width: 100%;
overflow: hidden;
}

.jp-InputArea-editor {
display: table-cell;
overflow: hidden;
vertical-align: top;

/_ This is the non-active, default styling _/
border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
border-radius: 0;
background: var(--jp-cell-editor-background);
}

.jp-InputPrompt {
display: table-cell;
vertical-align: top;
width: var(--jp-cell-prompt-width);
color: var(--jp-cell-inprompt-font-color);
font-family: var(--jp-cell-prompt-font-family);
padding: var(--jp-code-padding);
letter-spacing: var(--jp-cell-prompt-letter-spacing);
opacity: var(--jp-cell-prompt-opacity);
line-height: var(--jp-code-line-height);
font-size: var(--jp-code-font-size);
border: var(--jp-border-width) solid transparent;

/_ Right align prompt text, don't wrap to handle large prompt numbers _/
text-align: right;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;

/_ Disable text selection _/
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}

/_-----------------------------------------------------------------------------
| Mobile
|----------------------------------------------------------------------------_/
@media only screen and (max-width: 760px) {
.jp-InputArea-editor {
display: table-row;
margin-left: var(--jp-notebook-padding);
}

.jp-InputPrompt {
display: table-row;
text-align: left;
}
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

/_-----------------------------------------------------------------------------
| Placeholder
|----------------------------------------------------------------------------_/

.jp-Placeholder {
display: table;
table-layout: fixed;
width: 100%;
}

.jp-Placeholder-prompt {
display: table-cell;
box-sizing: border-box;
}

.jp-Placeholder-content {
display: table-cell;
padding: 4px 6px;
border: 1px solid transparent;
border-radius: 0;
background: none;
box-sizing: border-box;
cursor: pointer;
}

.jp-Placeholder-contentContainer {
display: flex;
}

.jp-Placeholder-content:hover,
.jp-InputPlaceholder > .jp-Placeholder-content:hover {
border-color: var(--jp-layout-color3);
}

.jp-Placeholder-content .jp-MoreHorizIcon {
width: 32px;
height: 16px;
border: 1px solid transparent;
border-radius: var(--jp-border-radius);
}

.jp-Placeholder-content .jp-MoreHorizIcon:hover {
border: 1px solid var(--jp-border-color1);
box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.25);
background-color: var(--jp-layout-color0);
}

.jp-PlaceholderText {
white-space: nowrap;
overflow-x: hidden;
color: var(--jp-inverse-layout-color3);
font-family: var(--jp-code-font-family);
}

.jp-InputPlaceholder > .jp-Placeholder-content {
border-color: var(--jp-cell-editor-border-color);
background: var(--jp-cell-editor-background);
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

/_-----------------------------------------------------------------------------
| Private CSS variables
|----------------------------------------------------------------------------_/

:root {
--jp-private-cell-scrolling-output-offset: 5px;
}

/_-----------------------------------------------------------------------------
| Cell
|----------------------------------------------------------------------------_/

.jp-Cell {
padding: var(--jp-cell-padding);
margin: 0;
border: none;
outline: none;
background: transparent;
}

/_-----------------------------------------------------------------------------
| Common input/output
|----------------------------------------------------------------------------_/

.jp-Cell-inputWrapper,
.jp-Cell-outputWrapper {
display: flex;
flex-direction: row;
padding: 0;
margin: 0;

/_ Added to reveal the box-shadow on the input and output collapsers. _/
overflow: visible;
}

/_ Only input/output areas inside cells _/
.jp-Cell-inputArea,
.jp-Cell-outputArea {
flex: 1 1 auto;
}

/_-----------------------------------------------------------------------------
| Collapser
|----------------------------------------------------------------------------_/

/\* Make the output collapser disappear when there is not output, but do so

- in a manner that leaves it in the layout and preserves its width.
  \*/
  .jp-Cell.jp-mod-noOutputs .jp-Cell-outputCollapser {
  border: none !important;
  background: transparent !important;
  }

.jp-Cell:not(.jp-mod-noOutputs) .jp-Cell-outputCollapser {
min-height: var(--jp-cell-collapser-min-height);
}

/_-----------------------------------------------------------------------------
| Output
|----------------------------------------------------------------------------_/

/_ Put a space between input and output when there IS output _/
.jp-Cell:not(.jp-mod-noOutputs) .jp-Cell-outputWrapper {
margin-top: 5px;
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-Cell-outputArea {
overflow-y: auto;
max-height: 24em;
margin-left: var(--jp-private-cell-scrolling-output-offset);
resize: vertical;
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-Cell-outputArea[style*='height'] {
max-height: unset;
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-Cell-outputArea::after {
content: ' ';
box-shadow: inset 0 0 6px 2px rgb(0 0 0 / 30%);
width: 100%;
height: 100%;
position: sticky;
bottom: 0;
top: 0;
margin-top: -50%;
float: left;
display: block;
pointer-events: none;
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-OutputArea-child {
padding-top: 6px;
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-OutputArea-prompt {
width: calc(
var(--jp-cell-prompt-width) - var(--jp-private-cell-scrolling-output-offset)
);
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-OutputArea-promptOverlay {
left: calc(-1 \* var(--jp-private-cell-scrolling-output-offset));
}

/_-----------------------------------------------------------------------------
| CodeCell
|----------------------------------------------------------------------------_/

/_-----------------------------------------------------------------------------
| MarkdownCell
|----------------------------------------------------------------------------_/

.jp-MarkdownOutput {
display: table-cell;
width: 100%;
margin-top: 0;
margin-bottom: 0;
padding-left: var(--jp-code-padding);
}

.jp-MarkdownOutput.jp-RenderedHTMLCommon {
overflow: auto;
}

/_ collapseHeadingButton (show always if hiddenCellsButton is *not* shown) _/
.jp-collapseHeadingButton {
display: flex;
min-height: var(--jp-cell-collapser-min-height);
font-size: var(--jp-code-font-size);
position: absolute;
background-color: transparent;
background-size: 25px;
background-repeat: no-repeat;
background-position-x: center;
background-position-y: top;
background-image: var(--jp-icon-caret-down);
right: 0;
top: 0;
bottom: 0;
}

.jp-collapseHeadingButton.jp-mod-collapsed {
background-image: var(--jp-icon-caret-right);
}

/_
set the container font size to match that of content
so that the nested collapse buttons have the right size
_/
.jp-MarkdownCell .jp-InputPrompt {
font-size: var(--jp-content-font-size1);
}

/_
Align collapseHeadingButton with cell top header
The font sizes are identical to the ones in packages/rendermime/style/base.css
_/
.jp-mod-rendered .jp-collapseHeadingButton[data-heading-level='1'] {
font-size: var(--jp-content-font-size5);
background-position-y: calc(0.3 \* var(--jp-content-font-size5));
}

.jp-mod-rendered .jp-collapseHeadingButton[data-heading-level='2'] {
font-size: var(--jp-content-font-size4);
background-position-y: calc(0.3 \* var(--jp-content-font-size4));
}

.jp-mod-rendered .jp-collapseHeadingButton[data-heading-level='3'] {
font-size: var(--jp-content-font-size3);
background-position-y: calc(0.3 \* var(--jp-content-font-size3));
}

.jp-mod-rendered .jp-collapseHeadingButton[data-heading-level='4'] {
font-size: var(--jp-content-font-size2);
background-position-y: calc(0.3 \* var(--jp-content-font-size2));
}

.jp-mod-rendered .jp-collapseHeadingButton[data-heading-level='5'] {
font-size: var(--jp-content-font-size1);
background-position-y: top;
}

.jp-mod-rendered .jp-collapseHeadingButton[data-heading-level='6'] {
font-size: var(--jp-content-font-size0);
background-position-y: top;
}

/_ collapseHeadingButton (show only on (hover,active) if hiddenCellsButton is shown) _/
.jp-Notebook.jp-mod-showHiddenCellsButton .jp-collapseHeadingButton {
display: none;
}

.jp-Notebook.jp-mod-showHiddenCellsButton
:is(.jp-MarkdownCell:hover, .jp-mod-active)
.jp-collapseHeadingButton {
display: flex;
}

/_ showHiddenCellsButton (only show if jp-mod-showHiddenCellsButton is set, which
is a consequence of the showHiddenCellsButton option in Notebook Settings)_/
.jp-Notebook.jp-mod-showHiddenCellsButton .jp-showHiddenCellsButton {
margin-left: calc(var(--jp-cell-prompt-width) + 2 \* var(--jp-code-padding));
margin-top: var(--jp-code-padding);
border: 1px solid var(--jp-border-color2);
background-color: var(--jp-border-color3) !important;
color: var(--jp-content-font-color0) !important;
display: flex;
}

.jp-Notebook.jp-mod-showHiddenCellsButton .jp-showHiddenCellsButton:hover {
background-color: var(--jp-border-color2) !important;
}

.jp-showHiddenCellsButton {
display: none;
}

/_-----------------------------------------------------------------------------
| Printing
|----------------------------------------------------------------------------_/

/_
Using block instead of flex to allow the use of the break-inside CSS property for
cell outputs.
_/

@media print {
.jp-Cell-inputWrapper,
.jp-Cell-outputWrapper {
display: block;
}
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

/_-----------------------------------------------------------------------------
| Variables
|----------------------------------------------------------------------------_/

:root {
--jp-notebook-toolbar-padding: 2px 5px 2px 2px;
}

/\*-----------------------------------------------------------------------------

/_-----------------------------------------------------------------------------
| Styles
|----------------------------------------------------------------------------_/

.jp-NotebookPanel-toolbar {
padding: var(--jp-notebook-toolbar-padding);

/_ disable paint containment from lumino 2.0 default strict CSS containment _/
contain: style size !important;
}

.jp-Toolbar-item.jp-Notebook-toolbarCellType .jp-select-wrapper.jp-mod-focused {
border: none;
box-shadow: none;
}

.jp-Notebook-toolbarCellTypeDropdown select {
height: 24px;
font-size: var(--jp-ui-font-size1);
line-height: 14px;
border-radius: 0;
display: block;
}

.jp-Notebook-toolbarCellTypeDropdown span {
top: 5px !important;
}

.jp-Toolbar-responsive-popup {
position: absolute;
height: fit-content;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: flex-end;
border-bottom: var(--jp-border-width) solid var(--jp-toolbar-border-color);
box-shadow: var(--jp-toolbar-box-shadow);
background: var(--jp-toolbar-background);
min-height: var(--jp-toolbar-micro-height);
padding: var(--jp-notebook-toolbar-padding);
z-index: 1;
right: 0;
top: 0;
}

.jp-Toolbar > .jp-Toolbar-responsive-opener {
margin-left: auto;
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

/_-----------------------------------------------------------------------------
| Variables
|----------------------------------------------------------------------------_/

/\*-----------------------------------------------------------------------------

/_-----------------------------------------------------------------------------
| Styles
|----------------------------------------------------------------------------_/

.jp-Notebook-ExecutionIndicator {
position: relative;
display: inline-block;
height: 100%;
z-index: 9997;
}

.jp-Notebook-ExecutionIndicator-tooltip {
visibility: hidden;
height: auto;
width: max-content;
width: -moz-max-content;
background-color: var(--jp-layout-color2);
color: var(--jp-ui-font-color1);
text-align: justify;
border-radius: 6px;
padding: 0 5px;
position: fixed;
display: table;
}

.jp-Notebook-ExecutionIndicator-tooltip.up {
transform: translateX(-50%) translateY(-100%) translateY(-32px);
}

.jp-Notebook-ExecutionIndicator-tooltip.down {
transform: translateX(calc(-100% + 16px)) translateY(5px);
}

.jp-Notebook-ExecutionIndicator-tooltip.hidden {
display: none;
}

.jp-Notebook-ExecutionIndicator:hover .jp-Notebook-ExecutionIndicator-tooltip {
visibility: visible;
}

.jp-Notebook-ExecutionIndicator span {
font-size: var(--jp-ui-font-size1);
font-family: var(--jp-ui-font-family);
color: var(--jp-ui-font-color1);
line-height: 24px;
display: block;
}

.jp-Notebook-ExecutionIndicator-progress-bar {
display: flex;
justify-content: center;
height: 100%;
}

/\*

- Copyright (c) Jupyter Development Team.
- Distributed under the terms of the Modified BSD License.
  \*/

/\*

- Execution indicator
  \*/
  .jp-tocItem-content::after {
  content: '';

/_ Must be identical to form a circle _/
width: 12px;
height: 12px;
background: none;
border: none;
position: absolute;
right: 0;
}

.jp-tocItem-content[data-running='0']::after {
border-radius: 50%;
border: var(--jp-border-width) solid var(--jp-inverse-layout-color3);
background: none;
}

.jp-tocItem-content[data-running='1']::after {
border-radius: 50%;
border: var(--jp-border-width) solid var(--jp-inverse-layout-color3);
background-color: var(--jp-inverse-layout-color3);
}

.jp-tocItem-content[data-running='0'],
.jp-tocItem-content[data-running='1'] {
margin-right: 12px;
}

/\*

- Copyright (c) Jupyter Development Team.
- Distributed under the terms of the Modified BSD License.
  \*/

.jp-Notebook-footer {
height: 27px;
margin-left: calc(
var(--jp-cell-prompt-width) + var(--jp-cell-collapser-width) +
var(--jp-cell-padding)
);
width: calc(
100% -
(
var(--jp-cell-prompt-width) + var(--jp-cell-collapser-width) +
var(--jp-cell-padding) + var(--jp-cell-padding)
)
);
border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
color: var(--jp-ui-font-color3);
margin-top: 6px;
background: none;
cursor: pointer;
}

.jp-Notebook-footer:focus {
border-color: var(--jp-cell-editor-active-border-color);
}

/_ For devices that support hovering, hide footer until hover _/
@media (hover: hover) {
.jp-Notebook-footer {
opacity: 0;
}

.jp-Notebook-footer:focus,
.jp-Notebook-footer:hover {
opacity: 1;
}
}

/_-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------_/

/_-----------------------------------------------------------------------------
| Imports
|----------------------------------------------------------------------------_/

/_-----------------------------------------------------------------------------
| CSS variables
|----------------------------------------------------------------------------_/

:root {
--jp-side-by-side-output-size: 1fr;
--jp-side-by-side-resized-cell: var(--jp-side-by-side-output-size);
--jp-private-notebook-dragImage-width: 304px;
--jp-private-notebook-dragImage-height: 36px;
--jp-private-notebook-selected-color: var(--md-blue-400);
--jp-private-notebook-active-color: var(--md-green-400);
}

/_-----------------------------------------------------------------------------
| Notebook
|----------------------------------------------------------------------------_/

/_ stylelint-disable selector-max-class _/

.jp-NotebookPanel {
display: block;
height: 100%;
}

.jp-NotebookPanel.jp-Document {
min-width: 240px;
min-height: 120px;
}

.jp-Notebook {
padding: var(--jp-notebook-padding);
outline: none;
overflow: auto;
background: var(--jp-layout-color0);
}

.jp-Notebook.jp-mod-scrollPastEnd::after {
display: block;
content: '';
min-height: var(--jp-notebook-scroll-padding);
}

.jp-MainAreaWidget-ContainStrict .jp-Notebook \* {
contain: strict;
}

.jp-Notebook .jp-Cell {
overflow: visible;
}

.jp-Notebook .jp-Cell .jp-InputPrompt {
cursor: move;
}

/_-----------------------------------------------------------------------------
| Notebook state related styling
|
| The notebook and cells each have states, here are the possibilities:
|
| - Notebook
| - Command
| - Edit
| - Cell
| - None
| - Active (only one can be active)
| - Selected (the cells actions are applied to)
| - Multiselected (when multiple selected, the cursor)
| - No outputs
|----------------------------------------------------------------------------_/

/_ Command or edit modes _/

.jp-Notebook .jp-Cell:not(.jp-mod-active) .jp-InputPrompt {
opacity: var(--jp-cell-prompt-not-active-opacity);
color: var(--jp-cell-prompt-not-active-font-color);
}

.jp-Notebook .jp-Cell:not(.jp-mod-active) .jp-OutputPrompt {
opacity: var(--jp-cell-prompt-not-active-opacity);
color: var(--jp-cell-prompt-not-active-font-color);
}

/_ cell is active _/
.jp-Notebook .jp-Cell.jp-mod-active .jp-Collapser {
background: var(--jp-brand-color1);
}

/_ cell is dirty _/
.jp-Notebook .jp-Cell.jp-mod-dirty .jp-InputPrompt {
color: var(--jp-warn-color1);
}

.jp-Notebook .jp-Cell.jp-mod-dirty .jp-InputPrompt::before {
color: var(--jp-warn-color1);
content: '•';
}

.jp-Notebook .jp-Cell.jp-mod-active.jp-mod-dirty .jp-Collapser {
background: var(--jp-warn-color1);
}

/_ collapser is hovered _/
.jp-Notebook .jp-Cell .jp-Collapser:hover {
box-shadow: var(--jp-elevation-z2);
background: var(--jp-brand-color1);
opacity: var(--jp-cell-collapser-not-active-hover-opacity);
}

/_ cell is active and collapser is hovered _/
.jp-Notebook .jp-Cell.jp-mod-active .jp-Collapser:hover {
background: var(--jp-brand-color0);
opacity: 1;
}

/_ Command mode _/

.jp-Notebook.jp-mod-commandMode .jp-Cell.jp-mod-selected {
background: var(--jp-notebook-multiselected-color);
}

.jp-Notebook.jp-mod-commandMode
.jp-Cell.jp-mod-active.jp-mod-selected:not(.jp-mod-multiSelected) {
background: transparent;
}

/_ Edit mode _/

.jp-Notebook.jp-mod-editMode .jp-Cell.jp-mod-active .jp-InputArea-editor {
border: var(--jp-border-width) solid var(--jp-cell-editor-active-border-color);
box-shadow: var(--jp-input-box-shadow);
background-color: var(--jp-cell-editor-active-background);
}

/_-----------------------------------------------------------------------------
| Notebook drag and drop
|----------------------------------------------------------------------------_/

.jp-Notebook-cell.jp-mod-dropSource {
opacity: 0.5;
}

.jp-Notebook-cell.jp-mod-dropTarget,
.jp-Notebook.jp-mod-commandMode
.jp-Notebook-cell.jp-mod-active.jp-mod-selected.jp-mod-dropTarget {
border-top-color: var(--jp-private-notebook-selected-color);
border-top-style: solid;
border-top-width: 2px;
}

.jp-dragImage {
display: block;
flex-direction: row;
width: var(--jp-private-notebook-dragImage-width);
height: var(--jp-private-notebook-dragImage-height);
border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
background: var(--jp-cell-editor-background);
overflow: visible;
}

.jp-dragImage-singlePrompt {
box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.12);
}

.jp-dragImage .jp-dragImage-content {
flex: 1 1 auto;
z-index: 2;
font-size: var(--jp-code-font-size);
font-family: var(--jp-code-font-family);
line-height: var(--jp-code-line-height);
padding: var(--jp-code-padding);
border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
background: var(--jp-cell-editor-background-color);
color: var(--jp-content-font-color3);
text-align: left;
margin: 4px 4px 4px 0;
}

.jp-dragImage .jp-dragImage-prompt {
flex: 0 0 auto;
min-width: 36px;
color: var(--jp-cell-inprompt-font-color);
padding: var(--jp-code-padding);
padding-left: 12px;
font-family: var(--jp-cell-prompt-font-family);
letter-spacing: var(--jp-cell-prompt-letter-spacing);
line-height: 1.9;
font-size: var(--jp-code-font-size);
border: var(--jp-border-width) solid transparent;
}

.jp-dragImage-multipleBack {
z-index: -1;
position: absolute;
height: 32px;
width: 300px;
top: 8px;
left: 8px;
background: var(--jp-layout-color2);
border: var(--jp-border-width) solid var(--jp-input-border-color);
box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.12);
}

/_-----------------------------------------------------------------------------
| Cell toolbar
|----------------------------------------------------------------------------_/

.jp-NotebookTools {
display: block;
min-width: var(--jp-sidebar-min-width);
color: var(--jp-ui-font-color1);
background: var(--jp-layout-color1);

/_ This is needed so that all font sizing of children done in ems is
_ relative to this base size \*/
font-size: var(--jp-ui-font-size1);
overflow: auto;
}

.jp-ActiveCellTool {
padding: 12px 0;
display: flex;
}

.jp-ActiveCellTool-Content {
flex: 1 1 auto;
}

.jp-ActiveCellTool .jp-ActiveCellTool-CellContent {
background: var(--jp-cell-editor-background);
border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
border-radius: 0;
min-height: 29px;
}

.jp-ActiveCellTool .jp-InputPrompt {
min-width: calc(var(--jp-cell-prompt-width) \* 0.75);
}

.jp-ActiveCellTool-CellContent > pre {
padding: 5px 4px;
margin: 0;
white-space: normal;
}

.jp-MetadataEditorTool {
flex-direction: column;
padding: 12px 0;
}

.jp-RankedPanel > :not(:first-child) {
margin-top: 12px;
}

.jp-KeySelector select.jp-mod-styled {
font-size: var(--jp-ui-font-size1);
color: var(--jp-ui-font-color0);
border: var(--jp-border-width) solid var(--jp-border-color1);
}

.jp-KeySelector label,
.jp-MetadataEditorTool label,
.jp-NumberSetter label {
line-height: 1.4;
}

.jp-NotebookTools .jp-select-wrapper {
margin-top: 4px;
margin-bottom: 0;
}

.jp-NumberSetter input {
width: 100%;
margin-top: 4px;
}

.jp-NotebookTools .jp-Collapse {
margin-top: 16px;
}

/_-----------------------------------------------------------------------------
| Presentation Mode (.jp-mod-presentationMode)
|----------------------------------------------------------------------------_/

.jp-mod-presentationMode .jp-Notebook {
--jp-content-font-size1: var(--jp-content-presentation-font-size1);
--jp-code-font-size: var(--jp-code-presentation-font-size);
}

.jp-mod-presentationMode .jp-Notebook .jp-Cell .jp-InputPrompt,
.jp-mod-presentationMode .jp-Notebook .jp-Cell .jp-OutputPrompt {
flex: 0 0 110px;
}

/_-----------------------------------------------------------------------------
| Side-by-side Mode (.jp-mod-sideBySide)
|----------------------------------------------------------------------------_/
.jp-mod-sideBySide.jp-Notebook .jp-Notebook-cell {
margin-top: 3em;
margin-bottom: 3em;
margin-left: 5%;
margin-right: 5%;
}

.jp-mod-sideBySide.jp-Notebook .jp-CodeCell {
display: grid;
grid-template-columns: minmax(0, 1fr) min-content minmax(
0,
var(--jp-side-by-side-output-size)
);
grid-template-rows: auto minmax(0, 1fr) auto;
grid-template-areas:
'header header header'
'input handle output'
'footer footer footer';
}

.jp-mod-sideBySide.jp-Notebook .jp-CodeCell.jp-mod-resizedCell {
grid-template-columns: minmax(0, 1fr) min-content minmax(
0,
var(--jp-side-by-side-resized-cell)
);
}

.jp-mod-sideBySide.jp-Notebook .jp-CodeCell .jp-CellHeader {
grid-area: header;
}

.jp-mod-sideBySide.jp-Notebook .jp-CodeCell .jp-Cell-inputWrapper {
grid-area: input;
}

.jp-mod-sideBySide.jp-Notebook .jp-CodeCell .jp-Cell-outputWrapper {
/_ overwrite the default margin (no vertical separation needed in side by side move _/
margin-top: 0;
grid-area: output;
}

.jp-mod-sideBySide.jp-Notebook .jp-CodeCell .jp-CellFooter {
grid-area: footer;
}

.jp-mod-sideBySide.jp-Notebook .jp-CodeCell .jp-CellResizeHandle {
grid-area: handle;
user-select: none;
display: block;
height: 100%;
cursor: ew-resize;
padding: 0 var(--jp-cell-padding);
}

.jp-mod-sideBySide.jp-Notebook .jp-CodeCell .jp-CellResizeHandle::after {
content: '';
display: block;
background: var(--jp-border-color2);
height: 100%;
width: 5px;
}

.jp-mod-sideBySide.jp-Notebook
.jp-CodeCell.jp-mod-resizedCell
.jp-CellResizeHandle::after {
background: var(--jp-border-color0);
}

.jp-CellResizeHandle {
display: none;
}

/_-----------------------------------------------------------------------------
| Placeholder
|----------------------------------------------------------------------------_/

.jp-Cell-Placeholder {
padding-left: 55px;
}

.jp-Cell-Placeholder-wrapper {
background: #fff;
border: 1px solid;
border-color: #e5e6e9 #dfe0e4 #d0d1d5;
border-radius: 4px;
-webkit-border-radius: 4px;
margin: 10px 15px;
}

.jp-Cell-Placeholder-wrapper-inner {
padding: 15px;
position: relative;
}

.jp-Cell-Placeholder-wrapper-body {
background-repeat: repeat;
background-size: 50% auto;
}

.jp-Cell-Placeholder-wrapper-body div {
background: #f6f7f8;
background-image: -webkit-linear-gradient(
left,
#f6f7f8 0%,
#edeef1 20%,
#f6f7f8 40%,
#f6f7f8 100%
);
background-repeat: no-repeat;
background-size: 800px 104px;
height: 104px;
position: absolute;
right: 15px;
left: 15px;
top: 15px;
}

div.jp-Cell-Placeholder-h1 {
top: 20px;
height: 20px;
left: 15px;
width: 150px;
}

div.jp-Cell-Placeholder-h2 {
left: 15px;
top: 50px;
height: 10px;
width: 100px;
}

div.jp-Cell-Placeholder-content-1,
div.jp-Cell-Placeholder-content-2,
div.jp-Cell-Placeholder-content-3 {
left: 15px;
right: 15px;
height: 10px;
}

div.jp-Cell-Placeholder-content-1 {
top: 100px;
}

div.jp-Cell-Placeholder-content-2 {
top: 120px;
}

div.jp-Cell-Placeholder-content-3 {
top: 140px;
}

</style>
<style type="text/css">
/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/\*
The following CSS variables define the main, public API for styling JupyterLab.
These variables should be used by all plugins wherever possible. In other
words, plugins should not define custom colors, sizes, etc unless absolutely
necessary. This enables users to change the visual theme of JupyterLab
by changing these variables.

Many variables appear in an ordered sequence (0,1,2,3). These sequences
are designed to work well together, so for example, `--jp-border-color1` should
be used with `--jp-layout-color1`. The numbers have the following meanings:

- 0: super-primary, reserved for special emphasis
- 1: primary, most important under normal situations
- 2: secondary, next most important under normal situations
- 3: tertiary, next most important under normal situations

Throughout JupyterLab, we are mostly following principles from Google's
Material Design when selecting colors. We are not, however, following
all of MD as it is not optimized for dense, information rich UIs.
\*/

:root {
/\* Elevation

-
- We style box-shadows using Material Design's idea of elevation. These particular numbers are taken from here:
-
- https://github.com/material-components/material-components-web
- https://material-components-web.appspot.com/elevation.html
  \*/

--jp-shadow-base-lightness: 0;
--jp-shadow-umbra-color: rgba(
var(--jp-shadow-base-lightness),
var(--jp-shadow-base-lightness),
var(--jp-shadow-base-lightness),
0.2
);
--jp-shadow-penumbra-color: rgba(
var(--jp-shadow-base-lightness),
var(--jp-shadow-base-lightness),
var(--jp-shadow-base-lightness),
0.14
);
--jp-shadow-ambient-color: rgba(
var(--jp-shadow-base-lightness),
var(--jp-shadow-base-lightness),
var(--jp-shadow-base-lightness),
0.12
);
--jp-elevation-z0: none;
--jp-elevation-z1: 0 2px 1px -1px var(--jp-shadow-umbra-color),
0 1px 1px 0 var(--jp-shadow-penumbra-color),
0 1px 3px 0 var(--jp-shadow-ambient-color);
--jp-elevation-z2: 0 3px 1px -2px var(--jp-shadow-umbra-color),
0 2px 2px 0 var(--jp-shadow-penumbra-color),
0 1px 5px 0 var(--jp-shadow-ambient-color);
--jp-elevation-z4: 0 2px 4px -1px var(--jp-shadow-umbra-color),
0 4px 5px 0 var(--jp-shadow-penumbra-color),
0 1px 10px 0 var(--jp-shadow-ambient-color);
--jp-elevation-z6: 0 3px 5px -1px var(--jp-shadow-umbra-color),
0 6px 10px 0 var(--jp-shadow-penumbra-color),
0 1px 18px 0 var(--jp-shadow-ambient-color);
--jp-elevation-z8: 0 5px 5px -3px var(--jp-shadow-umbra-color),
0 8px 10px 1px var(--jp-shadow-penumbra-color),
0 3px 14px 2px var(--jp-shadow-ambient-color);
--jp-elevation-z12: 0 7px 8px -4px var(--jp-shadow-umbra-color),
0 12px 17px 2px var(--jp-shadow-penumbra-color),
0 5px 22px 4px var(--jp-shadow-ambient-color);
--jp-elevation-z16: 0 8px 10px -5px var(--jp-shadow-umbra-color),
0 16px 24px 2px var(--jp-shadow-penumbra-color),
0 6px 30px 5px var(--jp-shadow-ambient-color);
--jp-elevation-z20: 0 10px 13px -6px var(--jp-shadow-umbra-color),
0 20px 31px 3px var(--jp-shadow-penumbra-color),
0 8px 38px 7px var(--jp-shadow-ambient-color);
--jp-elevation-z24: 0 11px 15px -7px var(--jp-shadow-umbra-color),
0 24px 38px 3px var(--jp-shadow-penumbra-color),
0 9px 46px 8px var(--jp-shadow-ambient-color);

/\* Borders

-
- The following variables, specify the visual styling of borders in JupyterLab.
  \*/

--jp-border-width: 1px;
--jp-border-color0: var(--md-grey-400);
--jp-border-color1: var(--md-grey-400);
--jp-border-color2: var(--md-grey-300);
--jp-border-color3: var(--md-grey-200);
--jp-inverse-border-color: var(--md-grey-600);
--jp-border-radius: 2px;

/\* UI Fonts

-
- The UI font CSS variables are used for the typography all of the JupyterLab
- user interface elements that are not directly user generated content.
-
- The font sizing here is done assuming that the body font size of --jp-ui-font-size1
- is applied to a parent element. When children elements, such as headings, are sized
- in em all things will be computed relative to that body size.
  \*/

--jp-ui-font-scale-factor: 1.2;
--jp-ui-font-size0: 0.83333em;
--jp-ui-font-size1: 13px; /_ Base font size _/
--jp-ui-font-size2: 1.2em;
--jp-ui-font-size3: 1.44em;
--jp-ui-font-family: system-ui, -apple-system, blinkmacsystemfont, 'Segoe UI',
helvetica, arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
'Segoe UI Symbol';

/\*

- Use these font colors against the corresponding main layout colors.
- In a light theme, these go from dark to light.
  \*/

/_ Defaults use Material Design specification _/
--jp-ui-font-color0: rgba(0, 0, 0, 1);
--jp-ui-font-color1: rgba(0, 0, 0, 0.87);
--jp-ui-font-color2: rgba(0, 0, 0, 0.54);
--jp-ui-font-color3: rgba(0, 0, 0, 0.38);

/\*

- Use these against the brand/accent/warn/error colors.
- These will typically go from light to darker, in both a dark and light theme.
  \*/

--jp-ui-inverse-font-color0: rgba(255, 255, 255, 1);
--jp-ui-inverse-font-color1: rgba(255, 255, 255, 1);
--jp-ui-inverse-font-color2: rgba(255, 255, 255, 0.7);
--jp-ui-inverse-font-color3: rgba(255, 255, 255, 0.5);

/\* Content Fonts

-
- Content font variables are used for typography of user generated content.
-
- The font sizing here is done assuming that the body font size of --jp-content-font-size1
- is applied to a parent element. When children elements, such as headings, are sized
- in em all things will be computed relative to that body size.
  \*/

--jp-content-line-height: 1.6;
--jp-content-font-scale-factor: 1.2;
--jp-content-font-size0: 0.83333em;
--jp-content-font-size1: 14px; /_ Base font size _/
--jp-content-font-size2: 1.2em;
--jp-content-font-size3: 1.44em;
--jp-content-font-size4: 1.728em;
--jp-content-font-size5: 2.0736em;

/_ This gives a magnification of about 125% in presentation mode over normal. _/
--jp-content-presentation-font-size1: 17px;
--jp-content-heading-line-height: 1;
--jp-content-heading-margin-top: 1.2em;
--jp-content-heading-margin-bottom: 0.8em;
--jp-content-heading-font-weight: 500;

/_ Defaults use Material Design specification _/
--jp-content-font-color0: rgba(0, 0, 0, 1);
--jp-content-font-color1: rgba(0, 0, 0, 0.87);
--jp-content-font-color2: rgba(0, 0, 0, 0.54);
--jp-content-font-color3: rgba(0, 0, 0, 0.38);
--jp-content-link-color: var(--md-blue-900);
--jp-content-font-family: system-ui, -apple-system, blinkmacsystemfont,
'Segoe UI', helvetica, arial, sans-serif, 'Apple Color Emoji',
'Segoe UI Emoji', 'Segoe UI Symbol';

/\*

- Code Fonts
-
- Code font variables are used for typography of code and other monospaces content.
  \*/

--jp-code-font-size: 13px;
--jp-code-line-height: 1.3077; /_ 17px for 13px base _/
--jp-code-padding: 5px; /_ 5px for 13px base, codemirror highlighting needs integer px value _/
--jp-code-font-family-default: menlo, consolas, 'DejaVu Sans Mono', monospace;
--jp-code-font-family: var(--jp-code-font-family-default);

/_ This gives a magnification of about 125% in presentation mode over normal. _/
--jp-code-presentation-font-size: 16px;

/_ may need to tweak cursor width if you change font size _/
--jp-code-cursor-width0: 1.4px;
--jp-code-cursor-width1: 2px;
--jp-code-cursor-width2: 4px;

/\* Layout

-
- The following are the main layout colors use in JupyterLab. In a light
- theme these would go from light to dark.
  \*/

--jp-layout-color0: white;
--jp-layout-color1: white;
--jp-layout-color2: var(--md-grey-200);
--jp-layout-color3: var(--md-grey-400);
--jp-layout-color4: var(--md-grey-600);

/\* Inverse Layout

-
- The following are the inverse layout colors use in JupyterLab. In a light
- theme these would go from dark to light.
  \*/

--jp-inverse-layout-color0: #111;
--jp-inverse-layout-color1: var(--md-grey-900);
--jp-inverse-layout-color2: var(--md-grey-800);
--jp-inverse-layout-color3: var(--md-grey-700);
--jp-inverse-layout-color4: var(--md-grey-600);

/_ Brand/accent _/

--jp-brand-color0: var(--md-blue-900);
--jp-brand-color1: var(--md-blue-700);
--jp-brand-color2: var(--md-blue-300);
--jp-brand-color3: var(--md-blue-100);
--jp-brand-color4: var(--md-blue-50);
--jp-accent-color0: var(--md-green-900);
--jp-accent-color1: var(--md-green-700);
--jp-accent-color2: var(--md-green-300);
--jp-accent-color3: var(--md-green-100);

/_ State colors (warn, error, success, info) _/

--jp-warn-color0: var(--md-orange-900);
--jp-warn-color1: var(--md-orange-700);
--jp-warn-color2: var(--md-orange-300);
--jp-warn-color3: var(--md-orange-100);
--jp-error-color0: var(--md-red-900);
--jp-error-color1: var(--md-red-700);
--jp-error-color2: var(--md-red-300);
--jp-error-color3: var(--md-red-100);
--jp-success-color0: var(--md-green-900);
--jp-success-color1: var(--md-green-700);
--jp-success-color2: var(--md-green-300);
--jp-success-color3: var(--md-green-100);
--jp-info-color0: var(--md-cyan-900);
--jp-info-color1: var(--md-cyan-700);
--jp-info-color2: var(--md-cyan-300);
--jp-info-color3: var(--md-cyan-100);

/_ Cell specific styles _/

--jp-cell-padding: 5px;
--jp-cell-collapser-width: 8px;
--jp-cell-collapser-min-height: 20px;
--jp-cell-collapser-not-active-hover-opacity: 0.6;
--jp-cell-editor-background: var(--md-grey-100);
--jp-cell-editor-border-color: var(--md-grey-300);
--jp-cell-editor-box-shadow: inset 0 0 2px var(--md-blue-300);
--jp-cell-editor-active-background: var(--jp-layout-color0);
--jp-cell-editor-active-border-color: var(--jp-brand-color1);
--jp-cell-prompt-width: 64px;
--jp-cell-prompt-font-family: var(--jp-code-font-family-default);
--jp-cell-prompt-letter-spacing: 0;
--jp-cell-prompt-opacity: 1;
--jp-cell-prompt-not-active-opacity: 0.5;
--jp-cell-prompt-not-active-font-color: var(--md-grey-700);

/\* A custom blend of MD grey and blue 600

- See https://meyerweb.com/eric/tools/color-blend/#546E7A:1E88E5:5:hex \*/
  --jp-cell-inprompt-font-color: #307fc1;

/\* A custom blend of MD grey and orange 600

- https://meyerweb.com/eric/tools/color-blend/#546E7A:F4511E:5:hex \*/
  --jp-cell-outprompt-font-color: #bf5b3d;

/_ Notebook specific styles _/

--jp-notebook-padding: 10px;
--jp-notebook-select-background: var(--jp-layout-color1);
--jp-notebook-multiselected-color: var(--md-blue-50);

/_ The scroll padding is calculated to fill enough space at the bottom of the
notebook to show one single-line cell (with appropriate padding) at the top
when the notebook is scrolled all the way to the bottom. We also subtract one
pixel so that no scrollbar appears if we have just one single-line cell in the
notebook. This padding is to enable a 'scroll past end' feature in a notebook.
_/
--jp-notebook-scroll-padding: calc(
100% - var(--jp-code-font-size) \* var(--jp-code-line-height) -
var(--jp-code-padding) - var(--jp-cell-padding) - 1px
);

/_ Rendermime styles _/

--jp-rendermime-error-background: #fdd;
--jp-rendermime-table-row-background: var(--md-grey-100);
--jp-rendermime-table-row-hover-background: var(--md-light-blue-50);

/_ Dialog specific styles _/

--jp-dialog-background: rgba(0, 0, 0, 0.25);

/_ Console specific styles _/

--jp-console-padding: 10px;

/_ Toolbar specific styles _/

--jp-toolbar-border-color: var(--jp-border-color1);
--jp-toolbar-micro-height: 8px;
--jp-toolbar-background: var(--jp-layout-color1);
--jp-toolbar-box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.24);
--jp-toolbar-header-margin: 4px 4px 0 4px;
--jp-toolbar-active-background: var(--md-grey-300);

/_ Statusbar specific styles _/

--jp-statusbar-height: 24px;

/_ Input field styles _/

--jp-input-box-shadow: inset 0 0 2px var(--md-blue-300);
--jp-input-active-background: var(--jp-layout-color1);
--jp-input-hover-background: var(--jp-layout-color1);
--jp-input-background: var(--md-grey-100);
--jp-input-border-color: var(--jp-inverse-border-color);
--jp-input-active-border-color: var(--jp-brand-color1);
--jp-input-active-box-shadow-color: rgba(19, 124, 189, 0.3);

/_ General editor styles _/

--jp-editor-selected-background: #d9d9d9;
--jp-editor-selected-focused-background: #d7d4f0;
--jp-editor-cursor-color: var(--jp-ui-font-color0);

/_ Code mirror specific styles _/

--jp-mirror-editor-keyword-color: #008000;
--jp-mirror-editor-atom-color: #88f;
--jp-mirror-editor-number-color: #080;
--jp-mirror-editor-def-color: #00f;
--jp-mirror-editor-variable-color: var(--md-grey-900);
--jp-mirror-editor-variable-2-color: rgb(0, 54, 109);
--jp-mirror-editor-variable-3-color: #085;
--jp-mirror-editor-punctuation-color: #05a;
--jp-mirror-editor-property-color: #05a;
--jp-mirror-editor-operator-color: #a2f;
--jp-mirror-editor-comment-color: #408080;
--jp-mirror-editor-string-color: #ba2121;
--jp-mirror-editor-string-2-color: #708;
--jp-mirror-editor-meta-color: #a2f;
--jp-mirror-editor-qualifier-color: #555;
--jp-mirror-editor-builtin-color: #008000;
--jp-mirror-editor-bracket-color: #997;
--jp-mirror-editor-tag-color: #170;
--jp-mirror-editor-attribute-color: #00c;
--jp-mirror-editor-header-color: blue;
--jp-mirror-editor-quote-color: #090;
--jp-mirror-editor-link-color: #00c;
--jp-mirror-editor-error-color: #f00;
--jp-mirror-editor-hr-color: #999;

/_
RTC user specific colors.
These colors are used for the cursor, username in the editor,
and the icon of the user.
_/

--jp-collaborator-color1: #ffad8e;
--jp-collaborator-color2: #dac83d;
--jp-collaborator-color3: #72dd76;
--jp-collaborator-color4: #00e4d0;
--jp-collaborator-color5: #45d4ff;
--jp-collaborator-color6: #e2b1ff;
--jp-collaborator-color7: #ff9de6;

/_ Vega extension styles _/

--jp-vega-background: white;

/_ Sidebar-related styles _/

--jp-sidebar-min-width: 250px;

/_ Search-related styles _/

--jp-search-toggle-off-opacity: 0.5;
--jp-search-toggle-hover-opacity: 0.8;
--jp-search-toggle-on-opacity: 1;
--jp-search-selected-match-background-color: rgb(245, 200, 0);
--jp-search-selected-match-color: black;
--jp-search-unselected-match-background-color: var(
--jp-inverse-layout-color0
);
--jp-search-unselected-match-color: var(--jp-ui-inverse-font-color0);

/_ Icon colors that work well with light or dark backgrounds _/
--jp-icon-contrast-color0: var(--md-purple-600);
--jp-icon-contrast-color1: var(--md-green-600);
--jp-icon-contrast-color2: var(--md-pink-600);
--jp-icon-contrast-color3: var(--md-blue-600);

/_ Button colors _/
--jp-accept-color-normal: var(--md-blue-700);
--jp-accept-color-hover: var(--md-blue-800);
--jp-accept-color-active: var(--md-blue-900);
--jp-warn-color-normal: var(--md-red-700);
--jp-warn-color-hover: var(--md-red-800);
--jp-warn-color-active: var(--md-red-900);
--jp-reject-color-normal: var(--md-grey-600);
--jp-reject-color-hover: var(--md-grey-700);
--jp-reject-color-active: var(--md-grey-800);

/_ File or activity icons and switch semantic variables _/
--jp-jupyter-icon-color: #f37626;
--jp-notebook-icon-color: #f37626;
--jp-json-icon-color: var(--md-orange-700);
--jp-console-icon-background-color: var(--md-blue-700);
--jp-console-icon-color: white;
--jp-terminal-icon-background-color: var(--md-grey-800);
--jp-terminal-icon-color: var(--md-grey-200);
--jp-text-editor-icon-color: var(--md-grey-700);
--jp-inspector-icon-color: var(--md-grey-700);
--jp-switch-color: var(--md-grey-400);
--jp-switch-true-position-color: var(--md-orange-900);
}
</style>

<style type="text/css">
/* Force rendering true colors when outputing to pdf */
* {
  -webkit-print-color-adjust: exact;
}

/* Misc */
a.anchor-link {
  display: none;
}

/* Input area styling */
.jp-InputArea {
  overflow: hidden;
}

.jp-InputArea-editor {
  overflow: hidden;
}

.cm-editor.cm-s-jupyter .highlight pre {
/* weird, but --jp-code-padding defined to be 5px but 4px horizontal padding is hardcoded for pre.cm-line */
  padding: var(--jp-code-padding) 4px;
  margin: 0;

  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;

}

.jp-OutputArea-output pre {
  line-height: inherit;
  font-family: inherit;
}

.jp-RenderedText pre {
  color: var(--jp-content-font-color1);
  font-size: var(--jp-code-font-size);
}

/* Hiding the collapser by default */
.jp-Collapser {
  display: none;
}

@page {
    margin: 0.5in; /* Margin for each printed piece of paper */
}

@media print {
  .jp-Cell-inputWrapper,
  .jp-Cell-outputWrapper {
    display: block;
  }
}
</style>
<!-- Load mathjax -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/latest.js?config=TeX-AMS_CHTML-full,Safe"> </script>
<!-- MathJax configuration -->
<script type="text/x-mathjax-config">
    init_mathjax = function() {
        if (window.MathJax) {
        // MathJax loaded
            MathJax.Hub.Config({
                TeX: {
                    equationNumbers: {
                    autoNumber: "AMS",
                    useLabelIds: true
                    }
                },
                tex2jax: {
                    inlineMath: [ ['$','$'], ["\\(","\\)"] ],
                    displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
                    processEscapes: true,
                    processEnvironments: true
                },
                displayAlign: 'center',
                messageStyle: 'none',
                CommonHTML: {
                    linebreaks: {
                    automatic: true
                    }
                }
            });

            MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
        }
    }
    init_mathjax();
    </script>
<!-- End of mathjax configuration --><script type="module">

document.addEventListener("DOMContentLoaded", async () => {
const diagrams = document.querySelectorAll(".jp-Mermaid > pre.mermaid");
// do not load mermaidjs if not needed
if (!diagrams.length) {
return;
}
const mermaid = (await import("https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.7.0/mermaid.esm.min.mjs")).default;
const parser = new DOMParser();

    mermaid.initialize({
      maxTextSize: 100000,
      maxEdges: 100000,
      startOnLoad: false,
      fontFamily: window
        .getComputedStyle(document.body)
        .getPropertyValue("--jp-ui-font-family"),
      theme: document.querySelector("body[data-jp-theme-light='true']")
        ? "default"
        : "dark",
    });

    let _nextMermaidId = 0;

    function makeMermaidImage(svg) {
      const img = document.createElement("img");
      const doc = parser.parseFromString(svg, "image/svg+xml");
      const svgEl = doc.querySelector("svg");
      const { maxWidth } = svgEl?.style || {};
      const firstTitle = doc.querySelector("title");
      const firstDesc = doc.querySelector("desc");

      img.setAttribute("src", `data:image/svg+xml,${encodeURIComponent(svg)}`);
      if (maxWidth) {
        img.width = parseInt(maxWidth);
      }
      if (firstTitle) {
        img.setAttribute("alt", firstTitle.textContent);
      }
      if (firstDesc) {
        const caption = document.createElement("figcaption");
        caption.className = "sr-only";
        caption.textContent = firstDesc.textContent;
        return [img, caption];
      }
      return [img];
    }

    async function makeMermaidError(text) {
      let errorMessage = "";
      try {
        await mermaid.parse(text);
      } catch (err) {
        errorMessage = `${err}`;
      }

      const result = document.createElement("details");
      result.className = 'jp-RenderedMermaid-Details';
      const summary = document.createElement("summary");
      summary.className = 'jp-RenderedMermaid-Summary';
      const pre = document.createElement("pre");
      const code = document.createElement("code");
      code.innerText = text;
      pre.appendChild(code);
      summary.appendChild(pre);
      result.appendChild(summary);

      const warning = document.createElement("pre");
      warning.innerText = errorMessage;
      result.appendChild(warning);
      return [result];
    }

    async function renderOneMarmaid(src) {
      const id = `jp-mermaid-${_nextMermaidId++}`;
      const parent = src.parentNode;
      let raw = src.textContent.trim();
      const el = document.createElement("div");
      el.style.visibility = "hidden";
      document.body.appendChild(el);
      let results = null;
      let output = null;
      try {
        let { svg } = await mermaid.render(id, raw, el);
        svg = cleanMermaidSvg(svg);
        results = makeMermaidImage(svg);
        output = document.createElement("figure");
        results.map(output.appendChild, output);
      } catch (err) {
        parent.classList.add("jp-mod-warning");
        results = await makeMermaidError(raw);
        output = results[0];
      } finally {
        el.remove();
      }
      parent.classList.add("jp-RenderedMermaid");
      parent.appendChild(output);
    }


    /**
     * Post-process to ensure mermaid diagrams contain only valid SVG and XHTML.
     */
    function cleanMermaidSvg(svg) {
      return svg.replace(RE_VOID_ELEMENT, replaceVoidElement);
    }


    /**
     * A regular expression for all void elements, which may include attributes and
     * a slash.
     *
     * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
     *
     * Of these, only `<br>` is generated by Mermaid in place of `\n`,
     * but _any_ "malformed" tag will break the SVG rendering entirely.
     */
    const RE_VOID_ELEMENT =
      /<\s*(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)\s*([^>]*?)\s*>/gi;

    /**
     * Ensure a void element is closed with a slash, preserving any attributes.
     */
    function replaceVoidElement(match, tag, rest) {
      rest = rest.trim();
      if (!rest.endsWith('/')) {
        rest = `${rest} /`;
      }
      return `<${tag} ${rest}>`;
    }

    void Promise.all([...diagrams].map(renderOneMarmaid));

});
</script>

<style>
  .jp-Mermaid:not(.jp-RenderedMermaid) {
    display: none;
  }

  .jp-RenderedMermaid {
    overflow: auto;
    display: flex;
  }

  .jp-RenderedMermaid.jp-mod-warning {
    width: auto;
    padding: 0.5em;
    margin-top: 0.5em;
    border: var(--jp-border-width) solid var(--jp-warn-color2);
    border-radius: var(--jp-border-radius);
    color: var(--jp-ui-font-color1);
    font-size: var(--jp-ui-font-size1);
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .jp-RenderedMermaid figure {
    margin: 0;
    overflow: auto;
    max-width: 100%;
  }

  .jp-RenderedMermaid img {
    max-width: 100%;
  }

  .jp-RenderedMermaid-Details > pre {
    margin-top: 1em;
  }

  .jp-RenderedMermaid-Summary {
    color: var(--jp-warn-color2);
  }

  .jp-RenderedMermaid:not(.jp-mod-warning) pre {
    display: none;
  }

  .jp-RenderedMermaid-Summary > pre {
    display: inline-block;
    white-space: normal;
  }
</style>
<!-- End of mermaid configuration --></head>
<body class="jp-Notebook" data-jp-theme-light="true" data-jp-theme-name="JupyterLab Light">
<main>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell" id="cell-id=ee456806">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h2 id="2.1">2.1<a class="anchor-link" href="#2.1">¶</a></h2><p>loan50 、数値データ、特にローン金利について色々と可視化してみる</p>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs" id="cell-id=0576698c">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [18]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="kn">import</span><span class="w"> </span><span class="nn">pandas</span><span class="w"> </span><span class="k">as</span><span class="w"> </span><span class="nn">pd</span>
<span class="kn">from</span><span class="w"> </span><span class="nn">pandas</span><span class="w"> </span><span class="kn">import</span> <span class="n">DataFrame</span>
<span class="kn">import</span><span class="w"> </span><span class="nn">seaborn</span><span class="w"> </span><span class="k">as</span><span class="w"> </span><span class="nn">sns</span>
<span class="kn">import</span><span class="w"> </span><span class="nn">matplotlib.pyplot</span><span class="w"> </span><span class="k">as</span><span class="w"> </span><span class="nn">plt</span>
<span class="kn">import</span><span class="w"> </span><span class="nn">os</span>

<span class="nb">dir</span> <span class="o">=</span> <span class="p">(</span><span class="s2">"openstatistics_datasets_202103"</span><span class="p">)</span>
<span class="n">df</span><span class="p">:</span><span class="n">DataFrame</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">read_csv</span><span class="p">(</span><span class="n">os</span><span class="o">.</span><span class="n">path</span><span class="o">.</span><span class="n">join</span><span class="p">(</span><span class="nb">dir</span><span class="p">,</span> <span class="s2">"loan50.csv"</span><span class="p">))</span>

</pre></div>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell" id="cell-id=5d0ed8a9">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [19]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="n">df</span><span class="o">.</span><span class="n">describe</span><span class="p">()</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
<div class="jp-OutputPrompt jp-OutputArea-prompt">Out[19]:</div>
<div class="jp-RenderedHTMLCommon jp-RenderedHTML jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/html" tabindex="0">
<div>
<style scoped="">
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
<thead>
<tr style="text-align: right;">
<th></th>
<th>emp_length</th>
<th>term</th>
<th>annual_income</th>
<th>debt_to_income</th>
<th>total_credit_limit</th>
<th>total_credit_utilized</th>
<th>num_cc_carrying_balance</th>
<th>loan_amount</th>
<th>interest_rate</th>
<th>public_record_bankrupt</th>
<th>total_income</th>
</tr>
</thead>
<tbody>
<tr>
<th>count</th>
<td>48.000000</td>
<td>50.000000</td>
<td>50.000000</td>
<td>50.000000</td>
<td>50.000000</td>
<td>50.000000</td>
<td>50.000000</td>
<td>50.000000</td>
<td>50.000000</td>
<td>50.000000</td>
<td>50.000000</td>
</tr>
<tr>
<th>mean</th>
<td>4.895833</td>
<td>42.720000</td>
<td>86170.000000</td>
<td>0.722643</td>
<td>208546.640000</td>
<td>61546.540000</td>
<td>5.060000</td>
<td>17083.000000</td>
<td>11.567200</td>
<td>0.080000</td>
<td>105220.560000</td>
</tr>
<tr>
<th>std</th>
<td>3.520394</td>
<td>10.885377</td>
<td>57566.498371</td>
<td>0.958264</td>
<td>167514.864327</td>
<td>63778.074324</td>
<td>2.999388</td>
<td>10455.456343</td>
<td>5.052115</td>
<td>0.274048</td>
<td>68141.967716</td>
</tr>
<tr>
<th>min</th>
<td>0.000000</td>
<td>36.000000</td>
<td>28800.000000</td>
<td>0.054724</td>
<td>15980.000000</td>
<td>2872.000000</td>
<td>1.000000</td>
<td>3000.000000</td>
<td>5.310000</td>
<td>0.000000</td>
<td>28800.000000</td>
</tr>
<tr>
<th>25%</th>
<td>2.000000</td>
<td>36.000000</td>
<td>55750.000000</td>
<td>0.266424</td>
<td>70526.250000</td>
<td>25693.500000</td>
<td>3.000000</td>
<td>7125.000000</td>
<td>7.960000</td>
<td>0.000000</td>
<td>60000.000000</td>
</tr>
<tr>
<th>50%</th>
<td>5.000000</td>
<td>36.000000</td>
<td>74000.000000</td>
<td>0.540471</td>
<td>147363.500000</td>
<td>48005.500000</td>
<td>4.000000</td>
<td>15500.000000</td>
<td>9.930000</td>
<td>0.000000</td>
<td>78750.000000</td>
</tr>
<tr>
<th>75%</th>
<td>8.250000</td>
<td>60.000000</td>
<td>99500.000000</td>
<td>0.741217</td>
<td>299766.250000</td>
<td>76796.250000</td>
<td>6.000000</td>
<td>24000.000000</td>
<td>13.715000</td>
<td>0.000000</td>
<td>119000.000000</td>
</tr>
<tr>
<th>max</th>
<td>10.000000</td>
<td>60.000000</td>
<td>325000.000000</td>
<td>5.333729</td>
<td>793009.000000</td>
<td>373361.000000</td>
<td>14.000000</td>
<td>40000.000000</td>
<td>26.300000</td>
<td>1.000000</td>
<td>325000.000000</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell" id="cell-id=65f31d8c">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [20]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># ヒストグラムをプロット</span>
<span class="n">sns</span><span class="o">.</span><span class="n">histplot</span><span class="p">(</span>
  <span class="n">df</span><span class="p">[</span><span class="s2">"interest_rate"</span><span class="p">],</span>
  <span class="n">kde</span><span class="o">=</span><span class="kc">False</span><span class="p">,</span> 
  <span class="n">binwidth</span><span class="o">=</span><span class="mf">2.5</span><span class="p">,</span>
  <span class="n">binrange</span><span class="o">=</span><span class="p">(</span><span class="mi">5</span><span class="p">,</span> <span class="mf">27.5</span><span class="p">)</span>
<span class="p">)</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
<div class="jp-OutputPrompt jp-OutputArea-prompt">Out[20]:</div>
<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain" tabindex="0">
<pre>&lt;Axes: xlabel='interest_rate', ylabel='Count'&gt;</pre>
</div>
</div>
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,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vbj//vsbrwoAgKYaWvrggw/irrvuiieeeCKOPfbY/BoyH3fbbbdFY8gusnfjjTfGr371q1i5cmV07949LrzwwrjuuuvMywEA9izIvPrqq9G/f//836+//nqD5xozYNx8880xceLE+OUvfxnHHHNMzJ49Oy666KL8isJXXnllo70PANCMgsxTTz0VTeH555+Pc845J84666x8Obty8AMPPBAvvvhik7w/ALAPzpFpKtmE4uxaNX/605/y5VdeeSWee+65OPPMM4suDQBItUdm0KBBOxxCevLJJ6Mx/PjHP46ampro3bt37LfffvmcmX/8x3+MYcOGbXef7A7cWauT7U/zMnfu3EhddvuP6urqossA2DeDTN38mDqbNm2Kl19+OZ8v88mbSX4av/71r+O+++7Lz5DK5shk7zFy5Mh80u/23mfcuHH5BftofjauXZPN0orhw4dH6lq3PjDmzZsrzADsjSDzL//yL9tcn51htG7dumgs11xzTd4rc/755+fLffv2jTfffDMPK9sLMqNHj45Ro0Y16JGpqqpqtJooX5s2vB8Rpeh/wbXRqWfvSFXNisUx656xsXr1akEGYG/da2lbsr+ETzzxxPjnf/7nRnm9DRs2RIsWDafxZENMn7y308dVVlbmjebroM7V0aG6V9FlAJBakJk5c2YccMABjfZ6Q4cOzefEZH+VZkNLf/zjH/Nr1Fx88cWN9h4AQDMLMt/4xjcaLJdKpVixYkV+nZcxY8Y0Vm3xb//2b/nr/fCHP8zvsp3Njfmbv/mbuP766xvtPQCAZhZksgvSfVw2/NOrV6/8jthDhgxprNri4IMPjvHjx+cNAKBRgsy99967J7sBAJTPHJk5c+bUX7Mjm8Ny3HHHNVZdAAB7J8hk81WyU6KffvrpOOSQQ/J17733Xn6hvAcffDA6deq0Jy8LALD3b1FwxRVXxPvvvx//8z//E++8807esovhZddscTNHAKCse2SmTp0aTzzxRBx11FH1644++uiYMGFCo072BQBo9B6Z7IJ0rVq12mp9tm5HF6sDACg8yHzlK1+Jq666KpYvX16/btmyZXH11VfHaaed1pj1AQA0bpC544478vkwPXr0iCOOOCJvPXv2zNdlF7EDACjbOTLZTRhfeumlfJ7MvHnz8nXZfJnBgwc3dn0AAI3TI/Pkk0/mk3qznpeKior46le/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OeKII/JemtNOO63Q2vZl2byM7A8sc/jK/5h8//vfb/AdyU5WyL4bWfDPvivsmKGlTyn7y+bzn/98LFy4sOhSmr2uXbvmj588AyNbrnuO4mVDslkXuu/M3pPd0uWxxx6Lp556Kg477LD69dn34MMPP4z33nuvwfa+I8Udk23J/kDO+I7sGkHmU1q3bl2emrMETbGyoYvsh/H06dPr19XU1ORnL5100kmF1sb/7//+7//yOTK+M40vm2+d/cKcPHlyPPnkk/l34uO++MUvRqtWrRp8R7IhjGyen+9IMcdkW15++eX80Xdk1xha2k1/93d/l18zIxtOyk5bzG76lY3zf/vb3y66tGYTHD/+V0o2wTf70mcT57IJi9n4809/+tM48sgj8x8YY8aMyceds2s30PTHJGvZPLLsWiVZyMxC/49+9KP43Oc+l58WT+MPXdx///3x29/+Np+zVzfvJZv0nl1XKXvMhsBHjRqVH5u2bdvGFVdckYeYP/uzPyu6/GZ5TLLvRPb81772tfzaPtkcmewU+VNOOSUfhmUXFH3aVGrOO++8Urdu3Ur7779/6TOf+Uy+vHDhwqLLajaeeuqp/NTFT7bsFN+6U7DHjBlT6tKlS37a9WmnnVaaP39+0WU322OyYcOG0pAhQ0qdOnXKT/s9/PDDS5dccklp5cqVRZe9T9rWccjavffeW7/Nxo0bSz/84Q9L7du3Lx144IGlr3/966UVK1YUWndzPiZLliwpnXLKKaUOHTrkP7M+97nPla655prS2rVriy49Ge5+DQAkyxwZACBZggwAkCxBBgBIliADACRLkAEAkiXIAADJEmQAgGQJMgBAsgQZYCsDBw7Mb/cAUO4EGWArjzzySNx00027tO3ixYujoqKi/kZ3RctqmTJlyl5/n3L73NBcuWkksJXshoJF2LRpU3535iJ9+OGHsf/++xdaA7Dr9MgAOxxa6tGjR/zsZz+Liy++OL97b3aX8bvuuqt+2+wu45njjjsu76HI9q3zH//xH3HUUUfFAQccEL17945///d/36pH46GHHopTTz013+a+++7b6X5Z0Lj88sujW7du+fPZnejHjRtXX2vm61//ev7adcs7cuONN0b//v3z98w+S/aamalTp8aXvvSlOOSQQ/K7Ep999tn5nYo/7ecGGlnRd60Eys+pp55auuqqq/J/Z3eszu7MO2HChNKCBQtK48aNK7Vo0aI0b968/PkXX3wxv5vvE088kd9Fec2aNfn6X/3qV/md4v/rv/6r9MYbb+SP2etMmjQpf37RokX5fj169KjfZvny5Tvd79Zbby1VVVWVZsyYUVq8eHHp2WefLd1///35c6tWraq/s3BWS7a8MzfccEOpTZs2pTPOOKP00ksvlV555ZV8/W9+85v8vbPP/Mc//rE0dOjQUt++fUubN2/+VJ8baFyCDLDTIDN8+PD657Zs2VLq3LlzaeLEiQ0CSfbL/uOOOOKI+oBR56abbiqddNJJDfYbP378bu13xRVXlL7yla/kdWxL9pqTJ0/e5c+aBZlWrVrtNPS8/fbb+Wu/9tprn+pzA43LHBlgp4499tj6f2fDKF27do1Vq1Ztd/v169fnwzDf/e5345JLLqlf/9FHH0W7du0abHv88cfv1n4XXnhhfPWrX41evXrFGWeckQ/5DBky5FN9vmx4qlOnTg3WLViwIK6//vqYNWtWrF69OrZs2ZKvX7JkSfTp0+dTf26gcQgywE59cgJuFmbqfrFvy7p16/LHu+++OwYMGNDguf3226/Bcps2bXZrvy984QuxaNGi+P3vfx9PPPFEfOtb34rBgwfHb37zmz3+fB+voc7QoUPzgJPV0r179/zzZgEmm6PTGJ8baByCDPCp1J3hs3nz5vp1Xbp0yX/5v/HGGzFs2LBdfq1d3a9t27Zx3nnn5e2b3/xm3jPzzjvv5GdbZaHr47XsiTVr1sT8+fPzQPLlL385X/fcc8/ttc8N7DlBBvhUOnfuHK1bt87P8jnssMPyM3WyYZSxY8fGlVdemf87Cxq1tbUxe/bsePfdd2PUqFHbfb2d7XfbbbflZyxlZwu1aNEiHn744XyoKzu7KJOdqTR9+vQ4+eSTo7KyMtq3b7/bnynbJztTKTs7K3uvbDjpxz/+8V793MCecfo18Km0bNkybr/99vjFL36R90acc845+frvfe97+WnI9957b/Tt2zc/xXrSpEn1py1vz872y04Bv+WWW/K5NSeccEJ+Gvfvfve7PNRkfv7zn8e0adOiqqoqDzt7InutBx98MObMmZMPJ1199dVx66237tXPDeyZimzG7x7uCwBQKD0yAECyBBlgn3bMMcfEQQcdtM1WdyVhIF2GloB92ptvvpnfw2lbsrOMsjk3QLoEGQAgWYaWAIBkCTIAQLIEGQAgWYIMAJAsQQYASJYgAwAkS5ABAJIlyAAAkar/D46Wxuefavw8AAAAAElFTkSuQmCC"/>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell" id="cell-id=db6c5172">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [21]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="n">df</span><span class="p">[</span><span class="s2">"interest_rate"</span><span class="p">]</span><span class="o">.</span><span class="n">skew</span><span class="p">()</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
<div class="jp-OutputPrompt jp-OutputArea-prompt">Out[21]:</div>
<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain" tabindex="0">
<pre>np.float64(1.1365780407546275)</pre>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell" id="cell-id=acb9d7c7">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [22]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># 箱ひげ図</span>
<span class="n">sns</span><span class="o">.</span><span class="n">boxplot</span><span class="p">(</span><span class="n">df</span><span class="p">[</span><span class="s2">"interest_rate"</span><span class="p">])</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
<div class="jp-OutputPrompt jp-OutputArea-prompt">Out[22]:</div>
<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain" tabindex="0">
<pre>&lt;Axes: ylabel='interest_rate'&gt;</pre>
</div>
</div>
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,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"/>
</div>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell" id="cell-id=5b7699dc">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h2 id="%E7%B7%B4%E7%BF%92%E5%95%8F%E9%A1%8C-2.8">練習問題 2.8<a class="anchor-link" href="#%E7%B7%B4%E7%BF%92%E5%95%8F%E9%A1%8C-2.8">¶</a></h2><p>数列をプロットしてみる</p>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell" id="cell-id=f7b6cc2a">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [23]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">([</span><span class="mi">3</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">13</span><span class="p">])</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">([</span><span class="mi">3</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">20</span><span class="p">])</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
<div class="jp-OutputPrompt jp-OutputArea-prompt">Out[23]:</div>
<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain" tabindex="0">
<pre>[&lt;matplotlib.lines.Line2D at 0x1bb5cb46510&gt;]</pre>
</div>
</div>
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,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"/>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell" id="cell-id=0f73003c">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [24]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">([</span><span class="o">-</span><span class="mi">20</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">30</span><span class="p">,</span> <span class="mi">30</span><span class="p">])</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">([</span><span class="o">-</span><span class="mi">40</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">30</span><span class="p">,</span> <span class="mi">30</span><span class="p">])</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
<div class="jp-OutputPrompt jp-OutputArea-prompt">Out[24]:</div>
<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain" tabindex="0">
<pre>[&lt;matplotlib.lines.Line2D at 0x1bb5e63dcd0&gt;]</pre>
</div>
</div>
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,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"/>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell" id="cell-id=c5480774">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [25]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">([</span><span class="mi">0</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">10</span><span class="p">])</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">([</span><span class="mi">20</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">30</span><span class="p">])</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
<div class="jp-OutputPrompt jp-OutputArea-prompt">Out[25]:</div>
<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain" tabindex="0">
<pre>[&lt;matplotlib.lines.Line2D at 0x1bb5e6b2870&gt;]</pre>
</div>
</div>
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,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yH//9387chsx7uOjqKhIkpOTpa2tzfJxfb+srMyxcQG36oknnpC33nrL2GWkiyMRfmlpabJo0SLjz6tXrzb+y/wnP/mJsSgS4aG3xXXxv6738NPZav17rev0vF6v8TMc4ZWfny+33367XLhwQZyQlAg/PPSHxv79+y1T1fo+924Ri3SNuIaH3gJ49913pba21ukhJQz92aG/DBE+9913n3F7S2eY/K81a9YYaxL0z4RH5Bb4Xrx4UcrLy8UJcT/zoXSbrU6X6l/odevWGSuodeHYN77xDaeHFnd/madWdH19vfHDQxdCVldXOzq2eLvV8tprr8mbb75p3KttbW01Pu52uyUzM9Pp4cWN3bt3G1PV+ne3r6/P+J6/99578utf/9rpocUV/Ts8fb1Sdna2FBYWso4pjL75zW8a5zDprZbm5mbj6AkNu69+9avihISIj4cfftjYjvj0008bP6h1C9c777wTsggVt0bPQrj33nst0ac0/HShE8J3+JX6/Oc/b/n4K6+8Io888ohDo4o/eivg61//urE4T8NO75NreHzxi190emjATWtqajJCo6OjQ4qLi2XLli3GWUH6ZyckxDkfAAAgesT9mg8AABBdiA8AAGAr4gMAANiK+AAAALYiPgAAgK2IDwAAYCviAwAA2Ir4AAAAtiI+AACArYgPAABgK+IDAADYivgAAABip/8Pr+8+yBBQS00AAAAASUVORK5CYII="/>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell" id="cell-id=4d7e6e56">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [26]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">([</span><span class="mi">100</span><span class="p">,</span> <span class="mi">200</span><span class="p">,</span> <span class="mi">300</span><span class="p">,</span> <span class="mi">400</span><span class="p">,</span> <span class="mi">500</span><span class="p">])</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">([</span><span class="mi">0</span><span class="p">,</span> <span class="mi">50</span><span class="p">,</span> <span class="mi">300</span><span class="p">,</span> <span class="mi">550</span><span class="p">,</span> <span class="mi">600</span><span class="p">])</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
<div class="jp-OutputPrompt jp-OutputArea-prompt">Out[26]:</div>
<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain" tabindex="0">
<pre>[&lt;matplotlib.lines.Line2D at 0x1bb5e500950&gt;]</pre>
</div>
</div>
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,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"/>
</div>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell" id="cell-id=f8cc491e">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h2 id="2.2">2.2<a class="anchor-link" href="#2.2">¶</a></h2><p>loans_full_shema について、カテゴリカルデータの homeownership と app_type について可視化してみる</p>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell" id="cell-id=d1169316">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [36]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="n">df</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">read_csv</span><span class="p">(</span><span class="n">os</span><span class="o">.</span><span class="n">path</span><span class="o">.</span><span class="n">join</span><span class="p">(</span><span class="nb">dir</span><span class="p">,</span> <span class="s2">"loans_full_schema.csv"</span><span class="p">))</span>
<span class="n">pd</span><span class="o">.</span><span class="n">set_option</span><span class="p">(</span><span class="s1">'display.max_columns'</span><span class="p">,</span> <span class="kc">None</span><span class="p">)</span>
<span class="n">df</span><span class="p">[[</span><span class="s2">"homeownership"</span><span class="p">,</span> <span class="s2">"application_type"</span><span class="p">]]</span><span class="o">.</span><span class="n">describe</span><span class="p">()</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
<div class="jp-OutputPrompt jp-OutputArea-prompt">Out[36]:</div>
<div class="jp-RenderedHTMLCommon jp-RenderedHTML jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/html" tabindex="0">
<div>
<style scoped="">
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
<thead>
<tr style="text-align: right;">
<th></th>
<th>homeownership</th>
<th>application_type</th>
</tr>
</thead>
<tbody>
<tr>
<th>count</th>
<td>10000</td>
<td>10000</td>
</tr>
<tr>
<th>unique</th>
<td>3</td>
<td>2</td>
</tr>
<tr>
<th>top</th>
<td>MORTGAGE</td>
<td>individual</td>
</tr>
<tr>
<th>freq</th>
<td>4789</td>
<td>8505</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell" id="cell-id=a259c826">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="n">sns</span><span class="o">.</span><span class="n">countplot</span><span class="p">(</span><span class="n">df</span><span class="p">,</span> <span class="n">x</span><span class="o">=</span><span class="s2">"homeownership"</span><span class="p">)</span>
<span class="n">sns</span><span class="o">.</span><span class="n">countplot</span><span class="p">(</span><span class="n">df</span><span class="p">,</span> <span class="n">x</span><span class="o">=</span><span class="s2">"application_type"</span><span class="p">)</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
<div class="jp-OutputPrompt jp-OutputArea-prompt">Out[ ]:</div>
<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain" tabindex="0">
<pre>&lt;Axes: xlabel='homeownership', ylabel='count'&gt;</pre>
</div>
</div>
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,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7tyGAPKHJjMAeaInENaT8eoXs56xXJt5HElJSXLfffeZk37qyYz1JKspKSkXNAnNmjXLnLRTyz355JMmLOhJcXV/esJNzzPTq7S0NOnfv785aaTuV0+AqycG9TRt2jRzQteSJUuak0zqmc0deqLPLl26uK+/8cYbJpzo2b4ddevWlRkzZpi/H330Uenatas5c7uekLdSpUoyePBgrzN4Z2Vlmf1ec8015gziesb2jRs3urfrGdkrVKggn332mTRs2FCCgoLM86NlbrvtNnMb3a4nmP3555+9Hoseu549PCQkRHr27GlOOHuxJjMtpydQ1nNV6T71ePQkpwDyhkAEIE/mzp1rvnh37NhhQkxMTIysWbPGBCUNQ3/88Yds2rTJrPvxxx/lwQcf9Lr9Dz/8IJ9//rkJIx999JE5C3nnzp3ll19+MbfTs6WPHj3a7N/Ro0cPSU1NNbeLj483Z+hu166duS+1ZMkSefrpp+WZZ54xpyp44okn5LHHHpMNGza4z2K/efNmE7yU3k/lypXdAebXX381x6Vhw6G31XV6qY9ZA44ujiFDhpjzQ3388ceyZ88ec4wdOnSQgwcPusucPHnSPB4NWomJiSZEatDS49Hb6O0ff/xxE848nx89s/uyZcvMoseqZye/lIkTJ5qzvO/atUuee+4581zo8w8gD/TUHQCQG3fffbfrzjvv9Fp36623ukaNGuVavXq1q3jx4q6kpCT3tsTERD01kCsuLs5cf/HFF11lypRxZWRkuMtERES4rr32Wte5c+fc6+rVq+eKjY01f3/55Zeu4OBgV2Zmptf9Xn/99a53333X/H377be7BgwY4LW9R48erk6dOpm/jx075goICHDt3LnTdf78eVfFihXN/lu0aGG2f/jhh65rrrnGfdvIyEhX7dq1XWfPnvXa34MPPmj+/vnnn81j/fXXX73us127dq7o6Gjz9+zZs81j3717t3v777//btZt3Lgxx+c3p+cnKirKfZzOa/D000+7r+txdujQwWs/epwdO3bM8T4A5IwaIgB50qhRI6/r2qSktTf79u2T0NBQszi0qUibhXSbZxNP+fLl3derVq1qynn2rdF1uk+lTWPHjx83zVbaxOYshw4dMrUpSvevTU+e9Lpzv3oMWoOiNUIJCQmmWU1rZrRGRfettTBaa+NJT4ZZvHjxCx6n0n1obdONN97odUy6H+eYlN6P5/OlNUTaHBcRESH33nuvTJkyRY4cOeJ1v9mfH8/7vZhWrVpdcN3zOQdweXSqBpAn2Uc4aXOPNpf9ldtfap8aWDQUePbPcWjQyS1tDtN9aF8eDT8aTho0aGCa0jTIaHPb5Y7T85g0LGnznWdoUhqMHKVLl/ZqDlOzZ8+Wp556yjQZLliwwDQPavNWy5YtL3u/AP4+BCIABULDRXJyslmcWqK9e/eaDtFaA5Rf2l/o6NGjEhgYaGpPLnbfW7ZskcjISPc6ve55vxqCtDO37kf7+jghSfsxfffdd179hy7nlltuMTVEWnNz11135fkx6e11iY6ONrU58+fPdwei/Ni+ffsF1/U5AZB7NJkBKBDh4eESFhYmvXr1kq+//lri4uKkT58+Jog0b978L+1XQ4N2Rl69erX89NNPsnXrVnn++eflq6++MmWioqJMh2cdaaadml9//XUzX4+OAnO0bt3ajNbSjspO+NHLefPmmRoobf7KLS2rj1Mfn96PNt/p442NjZXly5df9HZaTkOQdqbWkWX6ePR4/2p40fCnHdw12OkIs0WLFpmO1QByjxoiAAVCm3Y+/fRTGTp0qAkf2idIa2Leeuutv7zfFStWmACkI8d+++03Mzxf70P7GikNS9ofR4fJaxCoU6eOaZryrPW56qqrTGDTaQDq169v1uk+tDkqe/+h3ND9jx8/3jS16Sg1HbWmtTyew/uzK1OmjOzfv9+MWvv9999NENPh/Doq7q/QY9Bw+NJLL5lpCTQQaj8lALlXTHtW56E8AMCPaDOizkvE6TyAv4YmMwAAYD0CEQAAsB5NZgAAwHrUEAEAAOsRiAAAgPUIRAAAwHoEIgAAYD0CEQAAsB6BCAAAWI9ABAAArEcgAgAAYrv/BxX1rNgcGuekAAAAAElFTkSuQmCC"/>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell" id="cell-id=612a677c">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [47]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="n">sns</span><span class="o">.</span><span class="n">countplot</span><span class="p">(</span><span class="n">df</span><span class="p">,</span> <span class="n">x</span><span class="o">=</span><span class="s2">"homeownership"</span><span class="p">,</span> <span class="n">hue</span><span class="o">=</span><span class="s2">"application_type"</span><span class="p">)</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
<div class="jp-OutputPrompt jp-OutputArea-prompt">Out[47]:</div>
<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain" tabindex="0">
<pre>&lt;Axes: xlabel='homeownership', ylabel='count'&gt;</pre>
</div>
</div>
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkQAAAGzCAYAAADOnwhmAAAAOnRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjEwLjMsIGh0dHBzOi8vbWF0cGxvdGxpYi5vcmcvZiW1igAAAAlwSFlzAAAPYQAAD2EBqD+naQAAQcVJREFUeJzt3Qd4VGX69/E7CTVU6aChKErvKKCICpFQ9AXFzgqsiKKgFAmYFRGwhKICImUtgAUELKACRpCm0kGRjohocKWJQOihzHvd9+6Z/0waSUiYIef7ua7DzJzzzJkzyST58dQQj8fjEQAAABcLDfQFAAAABBqBCAAAuB6BCAAAuB6BCAAAuB6BCAAAuB6BCAAAuB6BCAAAuB6BCAAAuB6BCAAAuB6BCAAAuF4uCRLDhg2TmJgY6dWrl4wePdr2nTp1Sp555hmZPn26nD59WqKiomT8+PFSunRp7/Pi4+PliSeekMWLF0vBggWlc+fOEhsbK7ly/d9bW7JkifTt21c2b94sERERMnDgQOnSpUu6r+38+fPy559/SqFChSQkJCSL3zkAAMgOujrZ0aNHpVy5chIaeoE6IE8QWL16tadixYqe2rVre3r16uXd3717d09ERIRn4cKFnrVr13oaN27sufHGG73Hz54966lZs6YnMjLS8+OPP3rmzZvnKVGihCcmJsZb5tdff/WEh4d7+vbt69myZYtn7NixnrCwME9cXFy6r2/37t263hsbGxsbGxubXH6b/h2/kBD9RwLo2LFjUr9+fav5eemll6Ru3bpWQ3TkyBEpWbKkTJs2Te655x4ru23bNqlWrZqsWLFCGjduLF999ZXccccdVnvj1BpNnDhRBgwYIAcOHJA8efLY/blz58qmTZu8r/nAAw/I4cOHJS4uLl3XqNdStGhR2b17txQuXDibvhIAACArJSQkWMuQ/s0vUqRIcDeZ9ejRQ9q2bSuRkZEWiBzr1q2TM2fO2H5H1apVpXz58t5ApLe1atXya0LTZjVtQtPmsXr16lkZ33M4ZXr37p3qNWnznG4OrW5TGoYIRAAAXF7S090loIFI+wb98MMPsmbNmmTH9u7dazU8WjPjS8OPHnPK+IYh57hzLK0ymhpPnjwp+fPnT/ba2gdpyJAhWfAOAQDA5SBgo8y0+Uk7UE+dOlXy5csnwUQ7d2szmbPptQIAgJwrYIFIm8T2799v/Yd0RJhuS5culTfeeMPuay1OYmKitfv52rdvn5QpU8bu660+TnrcOZZWGW36Sql2SOXNm9fbPEYzGQAAOV/AmsxatGghGzdu9Nv3z3/+0/oJaUdo7QSVO3duWbhwoXTo0MGOb9++3YbZN2nSxB7r7csvv2zBqlSpUrZvwYIFFmCqV6/uLTNv3jy/19EyzjkAADnPuXPnrB8qcr48efJceEh9MAcindOnZs2afvsKFCggxYsX9+7v2rWrzR9UrFgxCzlPPfWUBRntUK1atmxpwefhhx+WESNGWH8hnWNIO2prLY/q3r27vPnmm9K/f3955JFHZNGiRTJz5kwbeQYAyFl04LT+LUjauoCcKzQ0VCpVqmTB6GIEfJRZWkaNGmVvVGuIfCdmdISFhcmcOXNsVJkGJQ1UOjHj0KFDvWX0i6Thp0+fPjJmzBi56qqr5J133rFzAQByFicMaatBeHg4k+nmcOf/N3Hynj17bBT6xXy/Az4P0eVAR6Tp/AXawZr+RAAQvM1kP//8s4UhbW2AOxw5csRCUeXKla2rTWb/frOWGQAgR3D6DGnNENwjz/+ayjQQXwwCEQAgR6GZzF1Csuj7TSACAACuRyACACALTZkyxW+VhcGDB9s6ndmtYsWKthYoModABABANurXr5/NqZddgcuhy2A99thjcqnceuutaa4LerkJ6mH3AABc7goWLGhbditZsmS2v0ZORg0RAMA14uLipGnTplbDokPz77jjDtm5c6cd++2336yDri48fuONN9o6mzpRsC4r5ViyZImV0fntateubWV0suBNmzal+popNZlNmjRJatSoYZMIly1bVnr27Ok99vrrr0utWrVsbj1dteHJJ5+UY8eOeV9fV3XQYeR6Hbrp+VNqMtOVHdq1a2dhTIec33fffX5LWTnX9cEHH9hzdXj6Aw88IEePHr3g17FLly72ddH5/Zzr2LVrlw19f/XVV/3Krl+/3o7/8ssv9ljvT5gwQVq3bm1LaF199dXyySef+D1H1xDV69Xvk07OrO9Dvz/ZiUAEAHCN48eP2woIa9eutWYsnfz3rrvusgn+HNHR0fLMM8/Ijz/+aJP+3nnnnXLw4EG/82iZ1157zZqptGZGy6R3qRANA7qigjZv6RJWX3zxhQUJh16Truu5efNmee+992yFBV1tQWlQ09CjAUcnI9RN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qWV0f2pNeUWKFPFuERERWfo+AQBAcAloDZGv8+fPW1PWTTfdZMHH8dBDD0mFChWkXLlysmHDBqv50X5Gn332mR3fu3evXxhSzmM9llYZDU0nT56U/Pnz+x3T0NW3b1/vYy1HKAIAIOcKmkCkfYk2bdpkTVm+HnvsMe99rQkqW7astGjRQnbu3CnXXHNNtlyLdrzWDQAAuENQNJn17NlT5syZI4sXL5arrroqzbKNGjWy219++cVutW/Rvn37/Mo4j51+R6mVKVy4cLLaIQAA4D4BDUQej8fC0KxZs2TRokXW8flCdJSY0poi1aRJE9m4caPs37/fW0ZHrGnYqV69urfMwoUL/c6jZXQ/AABAaKCbyT788EOZNm2azUWkfX100349SpvFdMSYjjr77bff5IsvvpBOnTrZCLTatWtbGR2mr8Hn4Ycflp9++smG0g8cONDO7TR76bxFv/76q/Tv31+2bdsm48ePl5kzZ0qfPn0C+fYBAECQCGggmjBhgo0s08kXtcbH2WbMmGHHdci8DqfX0FO1alV55plnpEOHDvLll196zxEWFmbNbXqrNT7/+Mc/LDQNHTrUW0ZrnubOnWu1QnXq1LHh9++8806KQ+4BAID75Ap0k1ladGSXTt54IToKbd68eWmW0dD1448/ZvgaAQBAzhcUnaoBAAACiUAEAABcj0AEAABcj0AEAABcj0AEAABcj0AEAABcj0AEAABcj0AEAABcj0AEAABcj0AEAABcj0AEAABcj0AEAABcj0AEAABcj0AEAABcj0AEAABcj0AEAABcj0AEAABcj0AEAABcj0AEAABcj0AEAABcL1OBqHnz5nL48OFk+xMSEuwYAABAjg9ES5YskcTExGT7T506Jd99911WXBcAAMAlkysjhTds2OC9v2XLFtm7d6/38blz5yQuLk6uvPLKrL1CAACAYApEdevWlZCQENtSahrLnz+/jB07NiuvDwAAILgC0a5du8Tj8cjVV18tq1evlpIlS3qP5cmTR0qVKiVhYWHZcZ0AAADBEYgqVKhgt+fPn8+u6wEAAAjuQORrx44dsnjxYtm/f3+ygDRo0KCsuDYAAIDgDURvv/22PPHEE1KiRAkpU6aM9Sly6H0CEQAAyPGB6KWXXpKXX35ZBgwYkPVXBAAAcDnMQ3To0CG59957s/5qAAAALpdApGFo/vz5WX81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zp2eUqVKeZo2bepZsmSJ5/fff/fMmzfPU6NGDc+1117rOXjwoPf5t9xyi6dbt26ePXv2eH777TfPpEmTPLly5fKMHz/ec/ToUdvvbFdddZVn6NChfvuc1ytTpoynatWqnhkzZni2bNli+2bPnu1p06aN5/PPP0/2fipXrux59tln7TlJZeR8FSpUSHZNuh07dizLvwfIfvoZbtWqlX0P4+PjPbNmzfIULlzY079/f28Z/VU3efLkZN9z/VlQixcvtjL58uWzz7Mv/fnR554+fdrvuffdd5/3dZ1NywCO9PxejYuLs8+e87tR6e9S/d2tv6t8derUydOsWTPvY+czq/t9tWvXzvu7HelHIMrB9AdCfzBq1qzp+fDDD737p06d6qldu7bfD43+Ytfw4huclP6QhoeHe7p37+4XiHr16uVXrn79+p677ror2TXoD/SoUaOS7Y+KirLXSy2EnD9/3u+x/jK58sorPYmJiZ5y5cp5li1blunzpXZNuLw/577uvvtuT7169fz+cGhQSo0TiKKjo+0P0alTp5IFovS8LuArPb9X9XdW7ty5PR999JH3uIbtYcOGeQoVKuTZtWuXd7/+J/aFF17wPtbPbL9+/TyhoaGejRs3evcTiDKHJjMX0OrayZMnex9PmjTJb4ZuXbj266+/lieffFLy58/v91xd661jx44yY8YMaxJLSvd99913VsWr1cHpoVXF8+fPt2a7AgUKpFgm6SK67777rjz44IPWJKK3+vhizoeca9OmTbJ8+fJ0fx599e7dW86ePStjx47NlmuDe6T392p4eLhcf/31snjxYu9xbXpt0aKFNfk7+3/99VeJj4+X2267ze9cWuaOO+6wpjdcHAKRC/zjH/+Q77//3tqZdVu2bJntc+zYscOCTbVq1VJ8vu4/dOiQzfTtGD9+vBQsWNDas5s1a2Zrwz399NPpup5ffvnFXq9KlSrJFuHVc+o2YMAAv1WfP/nkE+816+3MmTPl2LFjmTqf0sfOMWfTYIfL05w5c+x7qP0patWqJfv375fo6Gi/Mhqkk37P9Q+ML/3jpLMDa3+1I0eOXOJ3gZwkI79XNeQ4/c+2bNli/d/q1atnv1ud/Xqrn+/GjRsnO5d+XnXlBX6HXRwCkQuULFlS2rZtax3ytKZI72tYSCojk5br/27Wr19v4ap169by3HPPyY033nhR17l69Wo7p3ZsPX36tHf/Rx99JNdcc43UqVPHHuuyK9oxUf93lZnzKf1jqcd8N13nDpcn/YOi38NVq1bZmoVaA9qhQwe/MqNGjUr2PdeOrkl17dpVihcvLsOHD7+E7wA5VXp+r+pAlZ9//ln27Nljwadp06Y2gOSWW27xC0T6OzalpTyqV68unTp1opboIrlmLTO302aznj172v1x48b5HdNRWdqktHXrVrnrrruSPVf3X3HFFRasHEWKFLHnKa2t0fv6P5fIyMgLXovzetu3b/fbf/XVV9tt0uplbR7bvHmz5Mr1fx9XrZHSpj/945XR8ykNhM714/KnTaXO91M/Fxqe9XOjnw/fZor0fM/1c/byyy/bKB3nZwbIqIz8XtVmL23i1eYx3TQIKW1K++uvv6y5TAPR448/nurrDRkyxEb8zp49O1vfV05GDZFLtGrVShITE+XMmTMSFRXld0z/N3z77bdbM5gznNN3KPvUqVNtcdzU+uFo04MOI+3Xr1+6/jfkvN6bb74px48fT7Psxo0bZe3atfbLwPd/9vp4xYoV1ncpI+dDzhcaGir/+te/ZODAgck+z+l17733Ws2i/pEBMiMjv1f1P22NGjWy32tLly61GiOlfSb1P5oa7nX4ftL+Q74iIiIswOtnP+nUEUgfApFLaPWr/o9E26f1flIaJrRZScPSt99+az982iatP9BXXnml/Y85Lfo/F63y/fTTT9N1PfpLQjuvajOVNn3ptWkNz4cffmghx7lG/UVwww03WFt6zZo1vZs+1v89OZ2r03s+x9GjR+2Xku+mfZWQM2ig0e+5b23o4cOHk33P0wrQOi+V1jYRspFZGfm9qmFH58XS/kP169f37tfaIu3kr7Wg+jsvLTExMfLnn3/KN998k63vK6ciELlI4cKFbUvJtddeazUx2sx03333WZ+dxx57zH5ItSamWLFiaZ5bj2sbtk7MqM1ZF6Ln//HHH62JTX+ItYlDw4z+4GtN04svvmg1WhpokvYFcej+999/32q90nM+X4MGDZKyZcv6bTqZH3IGbfbS/y2PGDHCG2i0X1HS73lao8maN29umwZtIDMy8ntV9+l/1LT5zLd7gAYi3a/9irTGKC16Ph0w4jspKdIvRMfeZ6A8AABAjkMNEQAAcD0CEQAAcD0CEQAAcD0CEQAAcD0CEQAAcD0CEQAAcD0CEQAAcD0CEQAAcD0CEYB00zWWevfuHejLyLF0pve6deumWYbvAZA9WO0eAC4jn3322QWXcACQcQQiALgEdAVyXdk8NPTiKuYvtK4ggMyhyQxAhujivboQrv5hLlOmjDXzOOLj46Vdu3ZSsGBBW0hYF7Tct29fsiYhXUW+fPnyVu7JJ5+0sKALser5SpUq5bcKuLNS/aOPPiolS5a08+qiqz/99JNfmQkTJtjimXny5JEqVarIBx984D2mC/zecccd3sejR4+2cKIrjzsqV64s77zzjt3v0qWLtG/fXl599VVbBLZ48eLSo0cPW0jYoauY63l11XJdibxRo0ayZMkS7/EpU6ZI0aJF5YsvvpDq1atL3rx57eujZW644QZ7jh7XxTx///13v/ei116xYkUpUqSIPPDAA7a4Z2pNZlpOFy9+8MEH7Zx6PePGjcvQ9xQAgQhABr333nv2h3fVqlUWYoYOHSoLFiywoKRh6O+//5alS5favl9//VXuv/9+v+fv3LlTvvrqKwsjH330kbz77rvStm1b+eOPP+x5w4cPl4EDB9r5Hffee6/s37/fnrdu3TqpX7++tGjRwl5LzZo1S3r16iXPPPOMbNq0SR5//HFb3X7x4sXeFcO///57C15KX6dEiRLeAPOf//zHrkvDhkOfq/v0Vt+zBhzdHD179rQVy6dPny4bNmywa2zVqpXs2LHDW+bEiRP2fjRobd682UKkBi29Hn2OPl9XP9dw5vv1mT17tsyZM8c2vdZhw4al+T0ZOXKk1KlTR3788Ud59tln7WuhX38AGaCr3QNAetxyyy2epk2b+u27/vrrPQMGDPDMnz/fExYW5omPj/ce27x5s0d/zaxevdoev/DCC57w8HBPQkKCt0xUVJSnYsWKnnPnznn3ValSxRMbG2v3v/vuO0/hwoU9p06d8nvda665xvPvf//b7t94442ebt26+R2/9957PW3atLH7hw4d8oSGhnrWrFnjOX/+vKdYsWJ2/kaNGtnxDz/80HPllVd6n9u5c2dPhQoVPGfPnvU73/3332/3f//9d3uv//nPf/xes0WLFp6YmBi7P3nyZHvv69ev9x4/ePCg7VuyZEmKX9+Uvj7R0dHe63S+B7169fI+1uts1aqV33n0Olu3bp3iawBIGTVEADKkdu3afo+1SUlrb7Zu3SoRERG2ObSpSJuF9JhvE0+hQoW8j0uXLm3lfPvW6D49p9KmsWPHjlmzlTaxOduuXbusNkXp+bXpyZc+dl5Xr0FrULRGaOPGjdaspjUzWqOi59ZaGK218VWjRg0JCwtL9j6VnkNrm6677jq/a9LzONek9HV8v15aQ6TNcVFRUXLnnXfKmDFjZM+ePX6vm/Tr4/u6qWnSpEmyx75fcwAXRqdqABmSdISTNvdoc9nFPD+tc2pg0VDg2z/HoUEnvbQ5TM+hfXk0/Gg4qVatmjWlaZDR5rYLXafvNWlY0uY739CkNBg58ufP79ccpiZPnixPP/20NRnOmDHDmge1eatx48YXfF0A2YdABCBLaLjYvXu3bU4t0ZYtW6xDtNYAZZb2F9q7d6/kypXLak9Se+1ly5ZJ586dvfv0se/ragjSztx6Hu3r44Qk7cf0888/+/UfupB69epZDZHW3Nx8880Zfk/6fN1iYmKsNmfatGneQJQZK1euTPZYvyYA0o8mMwBZIjIyUmrVqiUdO3aUH374QVavXi2dOnWyINKwYcOLOq+GBu2MPH/+fPntt99k+fLl8txzz8natWutTHR0tHV41pFm2qn59ddft/l6dBSYo1mzZjZaSzsqO+FHb6dOnWo1UNr8lV5aVt+nvj99HW2+0/cbGxsrc+fOTfV5Wk5DkHam1pFl+n70ei82vGj40w7uGux0hNnHH39sHasBpB81RACyhDbtfP755/LUU09Z+NA+QVoTM3bs2Is+77x58ywA6cixAwcO2PB8fQ3ta6Q0LGl/HB0mr0GgUqVK1jTlW+tzxRVXWGDTaQCqVq1q+/Qc2hyVtP9Qeuj5X3rpJWtq01FqOmpNa3l8h/cnFR4eLtu2bbNRawcPHrQgpsP5dVTcxdBr0HA4ZMgQm5ZAA6H2UwKQfiHaszoD5QEAQUSbEXVeIpbzAC4OTWYAAMD1CEQAAMD1aDIDAACuRw0RAABwPQIRAABwPQIRAABwPQIRAABwPQIRAABwPQIRAABwPQIRAABwPQIRAAAQt/v/yzqxK3qU37MAAAAASUVORK5CYII="/>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell" id="cell-id=57cc834d">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [50]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># カテゴリ変数の棒グラフ</span>
<span class="n">sns</span><span class="o">.</span><span class="n">histplot</span><span class="p">(</span><span class="n">df</span><span class="p">,</span> <span class="n">x</span><span class="o">=</span><span class="s2">"homeownership"</span><span class="p">,</span> <span class="n">hue</span><span class="o">=</span><span class="s2">"application_type"</span><span class="p">,</span> <span class="n">multiple</span><span class="o">=</span><span class="s2">"stack"</span><span class="p">)</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
<div class="jp-OutputPrompt jp-OutputArea-prompt">Out[50]:</div>
<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain" tabindex="0">
<pre>&lt;Axes: xlabel='homeownership', ylabel='Count'&gt;</pre>
</div>
</div>
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,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AACwHoEIAABYj0AEAACsRyACAADWIxABAADr+TQQff/99/L4449L4cKFJV26dLJw4UKv8y6XS4YNGyaFChWS4OBgadKkiRw8eNCrzOnTp6V9+/YSGhoqOXPmlC5dusjFixe9yuzatUseffRRyZIlixQtWlTGjh17V94fAAC4N/g0EF26dEkqV64sU6ZMSfS8BpcPPvhApk+fLlu2bJGsWbNKeHi4xMTEuMtoGNq7d6+sWLFCFi1aZELWiy++6D5//vx5adq0qRQvXly2b98u7777rowYMUI+/PDDu/IeAQCA/8vgyxdv3ry5ORKjrUPvv/++DB06VJ544gnz2CeffCIFChQwLUnPPPOMREZGytKlS2Xbtm1So0YNU2bSpEnSokULee+990zL0+zZsyU2NlZmzpwpmTJlkgoVKsjOnTtl/PjxXsEJAADYy2/HEEVFRcnx48dNN5kjR44cUqtWLdm0aZO5r7faTeaEIaXlg4KCTIuSU6ZevXomDDm0lenAgQNy5syZRF/76tWrpmXJ8wAAAIHLbwORhiGlLUKe9L5zTm/z58/vdT5DhgySO3durzKJXcPzNeIbPXq0CV/OoeOOAABA4PLbQORLQ4YMkXPnzrmPI0eO+LpKAADAxkBUsGBBc3vixAmvx/W+c05vo6Ojvc5fv37dzDzzLJPYNTxfI77MmTObWWueBwAACFw+HVSdlJIlS5rAsmrVKqlSpYp5TMfy6NigHj16mPt16tSRs2fPmtlj1atXN4+tXr1a4uLizFgjp8xrr70m165dk4wZM5rHdEZaWFiY5MqVS/zFyaj9cuXSZV9XAwHizF+HfF0FALin+DQQ6XpBv/76q9dAap0BpmOAihUrJn379pU333xTSpcubQLS66+/bmaOtW7d2pQvV66cNGvWTLp162am5mvo6dWrl5mBpuXUc889JyNHjjTrEw0ePFj27NkjEydOlAkTJog/0AHcki6d7Jzzjq+rggAU54rzdRUA4J7g00D0448/SsOGDd33+/fvb247deoks2bNkkGDBpm1inR6vLYE1a1b10yz1wUWHTqtXkNQ48aNzeyytm3bmrWLHDooevny5dKzZ0/TipQ3b16z2KO/TLnX7jlxueSNNmWkZN4QX1cHAWLDwdMybc1hCUrnt73iAOBXfBqIGjRoYNYbuhldvXrUqFHmuBltTZozZ06S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"/>
</div>
</div>
</div>
</div>
</div>
</main>
</body>
</html>

</details>
