---
favicon: "assets/favicon.png"
theme: seriph
background: svelte.png
title: Svelte 5 ~~ Runes ~~
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
---

<h2>baseballyama</h2>

<style>
h2 {
  margin-top: 432px;
}
</style>

---

# Today's goal

<Center>
  <p>
    Svelte の最新情報をキャッチアップできる
  </p>
</Center>

---

# 自己紹介

- 山下 裕一朗 (baseballyama)
- 株式会社フライル
- Svelte コアチームメンバー

<img id="github" src="/github.jpeg" />

<img id="flyle" src="/flyle.png" />

<style>
#github {
  position: fixed;
  top: 40px;
  right: 40px;
  border-radius: 50%;
  height: 128px;
}

#flyle {
  width: 60%;
  margin-left: 20%;
}
</style>

---

# Agenda

- Svelte とは
- 最新情報の共有
  - リアクティビティ (Runes)
  - Slot / Snippets
  - イベントハンドラー
  - その他

---

# Svelteとは

- フロントエンドを構築するためのフレームワーク
- HTMLのスーパーセットを謳っている
- コンパイラを使用する点が他のフレームワークと大きく異なる
- コンパイラを使用することで軽量なランタイムをエンドユーザーに配信できる

---

# 強化されたチーム

- チームの変更
  - Dominic Gannaway が Vercel に入社
    - 元 Reactコアチームメンバー
    - lexical と inferno の作者
  - Vercel の Svelte チームは3名に

<img id="trueadm" src="/trueadm.png" />

<div class="images">
  <div class="image">
    <img id="rich" src="/rich.jpeg" />
    <h4>Rich Harris</h4>
  </div>
  <div class="image">
    <img id="simon" src="/simon.jpeg" />
    <h4>Simon Holthausen</h4>
  </div>
</div>

<style>
#trueadm {
  position: fixed;
  top: 120px;
  right:20px;
  width: 50%;
}

.images {
  display: flex;
  margin: 32px;
  gap: 32px;
}

.image {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#rich {
  border-radius: 50%;
  height: 128px;
}

#simon {
  border-radius: 50%;
  height: 128px;
}
</style>

---

# Svelte 5

<Center>
  <p>
    Svelte 5 は<br>
    これまでの反省やユーザーからの要望を踏まえ<br>
    0から書き直した
  </p>
</Center>

---

# Svelte 5

<Center>
  <p>
    Svelte 5 での変更点を見ていきましょう
  </p>
</Center>

---

# Runes

- 最も大きな変更の1つ
- Svelte 4 まではリアクティビティには `$` を使用していた
- Svelte 5 では Runes と呼ばれるマクロを使用する

---

# Runes

<Center>
<h2>基本的なステート</h2>
</Center>
---

<Repl
svelte4="https://svelte.dev/repl/03a35da8250d4d7faf79284d4a557a14?version=4.2.15"
svelte5="https://svelte-5-preview.vercel.app/#H4sIAAAAAAAAE0WNQQrCMBBFrxIGFy0W1G1sC57DuKjpFILtJCQTQULuLklBl_P_f28SLGbFAPKegKYNQcLNOeiAP64c4Y0rI3QQbPS6JH3Q3jgeFSlekYW2kVgM4hB4YmzO7VVR6ZZImo0lYUh73JC4aUUqjeKdOQ7iUsacFfWnv5b6Z2S2JCzp1ejXkH6KXN_WNEiRqqfSOzFCB5udzWJwBsk-Yn7kL8b0mszjAAAA" />

---

```diff
<script>
-	let count = 0;
+ let count = $state(1);

	function increment() {
		count += 1;
	}
</script>

<!-- この差分については後述します -->
- <button on:click={increment}>
+ <button onclick={increment}>
	clicks: {count}
</button>
```

---

# Runes

<Center>
<h2>算出フィールド</h2>
</Center>
---

<Repl
svelte4="https://svelte.dev/repl/b03c2ae12c9a43149f0672aa8f695a0f?version=4.2.15"
svelte5="https://svelte-5-preview.vercel.app/#H4sIAAAAAAAAE0VOzWrDMAx-FSF2SLfAuh3dpNDnmHtobQVMHTnYcqEYv3uJ02036fsvODlPCdVPQb7MhApPy4I9ymNZn3QnL4Q9ppCjWZEhmegWOWrW4knAhMwCI7wluQh1-93hl7EhXz3ZlbMU3Z1st4nf4bupWMuU2YgLDI5NpJlYuh2UldGyiT9G-GqRVfPw-V_OwzWLBIbAxjtzG8tfRG3jGpoUlJbT3JvjqPk1TUF5XRV7nIN1kyOLSmKmeq5PZl-jTh0BAAA=" />

---

```diff
<!-- 一部抜粋 -->
<script>
	let count = 0;
-	$: doubled = count * 2;
+ let doubled = $derived(count * 2);

	function increment() {
		count += 1;
	}
</script>
```

---

# Runes

<Center>
<p>これによりこんなことができるようになります</p>
</Center>
---

<Repl
svelte4="https://svelte.dev/repl/0d513cdb246d4e5c8ace5146fc94235c?version=4.2.15"
svelte5="https://svelte-5-preview.vercel.app/#H4sIAAAAAAAAE02P3WrDMAyFX0WIXjhbYD-XWRIo7C3qXbS2MswcOcRyoZi8-7AX2t1JOud8HGWcnKeI3Skjn2fCDo_Lgi3KbSlLvJIXwhZjSKsplz6a1S0yatbiScCExAIDHKKchdRr81EUEzgKfJN8hnTxZGEA1cAw7vYneP9ns3fPwdLqrmTVI6maSmQtU2IjLjA4NivNxKIayEUpoIJ9HuCtcjfN_cujKPeXJBIYAhvvzM-Q74itPlKvsYNcOTX9lxg17-06yPu0YYtzsG5yZLGTNdH2tf0CBygTL0kBAAA=" />

---

```diff
<!-- 一部抜粋 -->
<script>
	let count = 0;
	const getDoubled = () => count * 2;
-	$: doubled = getDoubled();
+ const doubled = $derived(getDoubled());

	function increment() {
		count += 1;
	}
</script>
```

---

# Runes

- Svelte 4 では依存関係の追跡をコンパイルタイムで実施していました
  - 推移的に呼び出される関数内でのステートの書き換えに追従することができませんでした
- Svelte 5 では依存関係の追跡をランタイムで実施します
  - これにより推移的に呼び出される関数内でのステートの書き換えにも追従できるようになりました
  - これにより `.svelte.(js|ts)` ファイルでもリアクティビティを使用できるようになりました
  - これにより composables によるロジックの共有化がより柔軟になりました

---

# Runes

<Center>
<h2>エフェクト関数</h2>
</Center>
---

<Repl
svelte4="https://svelte.dev/repl/4a323280f0274e5baeaa25402de17a3c?version=4.2.15"
svelte5="https://svelte-5-preview.vercel.app/#H4sIAAAAAAAAE0XOTWrEMAwF4KsIMQuHhv5s0yTQc9RdTD1yMXWkEMuFYnz3Yk_bWeqJ7_EK-hAp4fRakM8b4YQv-44j6vfejvRFUQlHTJIP15I5uSPsulq2GknBSWaFBU5Jz0rmcXi23H4n8p6cGjPAskJpkVUnnCTSfZQPU35p7ULrH_SZnQZhCOwO2ojVDDffxN0CT1djeX647eH5PasKg7CLwX0u5b-i9r09TROU3tP1Vaw44iaX4ANdcNIjU32rP5Fk6DwcAQAA" />

---

```diff
<!-- 一部抜粋 -->
<script>
	let count = 0;
-	$: {
-		console.log({ count });
-	}
+ $effect(() => {
+		console.log({ count });
+	});

	function increment() {
		count += 1;
	}
</script>
```

---

# Runes

<Center>
<h2>オブジェクト</h2>
</Center>
---

# Runes (オブジェクト)

- また、リアクティビティがよりきめ細かになりました
- Svelte 4 までは、リアクティブを発火する方法は再代入のみでした
- Svelte 5 では、push 関数などの破壊的関数の呼び出しでも発火します

---

<Repl
svelte4="https://svelte.dev/repl/c14a6cc5ebda4ebcad8680338019e4cc?version=4.2.15"
svelte5="https://svelte-5-preview.vercel.app/#H4sIAAAAAAAAE0WOu27DMAxFf0UgOtiokcfq2AGKbhnaIWOUIVXoVKhNCRYVIBD074XoFhl5D3l4Ewx2xADtKQFdJoQW3ryHBvjhyxDuODJCA8HF2ZSkC2a2nveaNI_IyrhIrHr1EvjCWG3q3T-xjFN4ktNZEGkeIhm2jpSj99Gan6pWqeSaF9lrr7a7JRDHysfwXQlb7FlTt372oO4rMovPFF-f_sRZWkoWWpXEILfL_l5TOhw_P1aBZ0s3Ozwq-VfnIoUGJne1g8UrtDxHzOf8C2ZubM0vAQAA" />

---

# Runes (その他)

- `beforeUpdate` / `afterUpdate` は廃止されます。
- `$effect.pre` / `$effect` を使用してください。

---

# Runes

- 全 Runes API は以下でご確認ください。

https://svelte-5-preview.vercel.app/docs/runes

---

# Slot / Snippets

- JSX が `<template>` よりも優れている点の1つはファイル内で要素を簡単に使い回すことができる点です。

```jsx
const data = ["Alice", "Bob", "Charlie", "David"];
const renderItemElement = (name) => <div key={name}>{name}</div>;

return (
  <div>
    <div>{data.map(renderItemElement)}</div>
  </div>
);
```

- Svelte 5 では、このJSXの利点を取り入れることに成功しました。

```svelte
<script>
	const data = ["Alice", "Bob", "Charlie", "David"];
</script>

{#Snippet item(name)}
	<div>{name}</div>
{/Snippet}

{#each data as name}
	{@render item(name)}
{/each}

```

---

# Slot / Snippets

- この Snippet は子コンポーネントに渡すことができます

---

<ReplSvelte5
svelte5="https://svelte-5-preview.vercel.app/#H4sIAAAAAAAAE42QT0vEMBDFv8o4Ct2Fsr3XbFE8e3JvxkNppzXQ_CGZXZCQ7y5pqit68ZY3vDeT34s4qYUCtq8RTa8JW3x0DmvkD5dFuNDChDUGe_ZDnogweOW4k0ay0s56hqd3tYwweauhOjSrOpRgdS-NaK4JE2-DUc4Rg2LSu3xyn_IqMapLF7NOoslvaWKzebPBiHIl5lyCpsMatR3VpGjElv2ZUv2NsFr_AQFLb-ajRA4SYSZDXg3hKPEk8SdfXgMRXrafpw31iih5IYa4MkFqIeaR5Czbr5g4daszwRHunLcu7Pa_2xEFXHJ88GRG8qWl6plC6Gcqd4e1h8FqZw0ZvqlygaWzv528pU-eTZm84gEAAA==" />

---

# Slot / Snippets

- 詳細は、以下をご確認ください。

https://svelte-5-preview.vercel.app/docs/Snippets

---

# イベントハンドラー

- イベントハンドラーの書き方が若干変わりました

---

<Repl
svelte4="https://svelte.dev/repl/03a35da8250d4d7faf79284d4a557a14?version=4.2.15"
svelte5="https://svelte-5-preview.vercel.app/#H4sIAAAAAAAAE0WNQQrCMBBFrxIGFy0W1G1sC57DuKjpFILtJCQTQULuLklBl_P_f28SLGbFAPKegKYNQcLNOeiAP64c4Y0rI3QQbPS6JH3Q3jgeFSlekYW2kVgM4hB4YmzO7VVR6ZZImo0lYUh73JC4aUUqjeKdOQ7iUsacFfWnv5b6Z2S2JCzp1ejXkH6KXN_WNEiRqqfSOzFCB5udzWJwBsk-Yn7kL8b0mszjAAAA" />

---

```diff
<!-- 一部抜粋 -->
- <button on:click={increment}>
+ <button onclick={increment}>
	clicks: {count}
</button>
```

---

# イベントハンドラー

- この変更により、イベントは props と同様に記述できるようになりました
- また定型的な `createEventDispatcher` の使用は不要になりました🎉

---

<ReplSvelte5
svelte5="https://svelte-5-preview.vercel.app/#H4sIAAAAAAAAE0WNwQrCMBBEf2VZPLRYUK-xLfgdxkNNUwimm9BsBAn5d0kqeJudmbeTcDFWBxT3hDStGgXevMcO-ePLEd7assYOg4ubKk4f1GY8j5IkW82gXCSGAQ6BJ9bNub1KKtkSSbFxBI6UNerVtJCKL3knjgNcSpWzpP70f0r9MzI7gvQDc52qMghIla7M3huxw9XNZjF6RsFb1PmRvzDz9rrXAAAA" />

---

```diff
<!-- 一部抜粋 -->
- <button onclick={increment}>
+ <button {onclick}>
	clicks: {count}
</button>
```

---

# イベントハンドラー

- また、子コンポーネントが任意のイベントを受け取れるようになりました
  - これは特にUIライブラリの作者にとって待望の機能でした

---

<ReplSvelte5
svelte5="https://svelte-5-preview.vercel.app/#H4sIAAAAAAAAE41R22qEMBD9lSEU1qWi7at1heJn1D7sxkhD4yQko1BC_r0k7upKW-hbzuRc5uLZIJVwrHrzDM-jYBV7NYbljL5MBG4WigTLmdOT5bFSO26loabDjuRotCVoP6TqYbB6hENRJlQswsNLpClBwJXkn62ekOAED47OJLKn4_rdX9TfDOxomJCT1AgaEy87go_1ju5kjyd4To7hh-jmv-n2iffSutxGxHoZzl9zQ3zdpAHKpsO6l3PaxmZXgd9Aclw4K3UXXoHf4VXAcjbqXg5S9KwiO4mQr1dKbf33TlyjI_BQFIWYBZKDEHdsrDYuiyvej3yZiDSCX-mhaWN310O3ejQaBVJdLsxfGn0P3wtqqQNaAgAA" />

---

<Undocumented />
# イベントハンドラー

- Svelte 4 では、各DOMにイベントがアタッチされていました
- Svelte 5 では、アプリケーションルートにのみイベントをアタッチします
  - 一般的に Event delegation と呼ばれる手法です
  - これは、React や Solid で用いられている手法です

イベントのアタッチは時間のかかる処理であるため、特に大規模なDOMでレンダリング速度やハイドレーション速度に違いが出るはずです。<br>
また、メモリ使用量にも良い影響があるはずです。

---

<Undocumented />
# テンプレート部での TypeScript

- テンプレート部で TypeScript が使用できるようになりました🎉
- `acorn-typescript` を使用しています

---

<ReplSvelte5
svelte5="https://svelte-5-preview.vercel.app/#H4sIAAAAAAAAE2WOwW7CMBBEf2W1vUbNPSRRafkLzMF1FljJOJF3g4Qs_3u15IBEj_NmNDMFzxxJsDsWTP5G2OF-WbBBfSwm5E5RCRuUec3BSC8h86IQfboMDlUcji45DXMShcmrhwGOBaytA4f7yIEcQm3gBb_n33f0c_U58r_kwd95MnjaudS327gNpvJBPly3RS-wCuVqR8rXdmVrEM2cLjA8_U9j8Ez1kcdisvZt5NGl0lpdxQZv88Rnpgk7zSvVU_0D5aI6qyUBAAA=" />

---

<Undocumented />
# CSS パーサー

- Svelte 4 までは、`css-tree` を使用してスタイル部を解析していました
- Svelte 5 では、独自のコードで CSS を解析しています
  - Svelteコンパイラは、CSSセレクタ部は重要ですが、宣言部は基本的に何もする必要がありません
  - よって、一般的なCSSパーサーよりも簡易なパーサーで充分でした
    - これにより将来のCSSの新仕様に対して簡単に対応できる可能性が高まりました
  - また、当時コンテナクエリをサポートするCSSパーサーはありませんでした
  - 更に、このメリットを活かして、子コンポーネントにスタイルを渡す方法を検討しています (遂に!🎉)

---

<Undocumented />
# 型定義ファイル

- Svelte 5 では `dts-buddy` というライブラリを使用して型を自動生成しています
- これにより、1.1MB あった型情報が 25KB になりました
- また、関数から宣言先に飛ぶ際、型宣言ではなく関数自体に飛べるようになりました🎉

参照: https://github.com/sveltejs/svelte/pull/8702

---

<Undocumented />
# HTMLのスーパーセットとしての Svelte

<p style="opacity: 1;">
このコードをブラウザで表示すると...
</p>

```html
<div />
hello!
```

<div style="height: 12px"></div>

<div v-click="1">

このようにレンダリングされます...

```html
<div>hello!</div>
```

</div>

<div style="height: 12px"></div>

<div v-click="2">

しかし Svelte 4 はこうレンダリングしていました...

```html
<div></div>
hello!
```

</div>

<div style="height: 12px"></div>

<div v-click="3">

- `<div>` などの 非 void HTML タグは自己終了できません
- Svelte 5 は `<div />` のようなコードを警告するようになりました

参考: https://github.com/sveltejs/svelte/pull/11114

</div>

---

# まとめ (今日ご紹介したもの)

- (チーム体制) 元 React コアチームのメンバーが参加しフルタイム3名体制になった
- (リアクティビティ) 依存関係の追跡がランタイムになったことで柔軟性が向上した
  - js/ts ファイルでもリアクティビティを使用できるようになった
  - Array / Map の破壊メソッドの利用でもリアクティブになった
  - 高度な機能も登場し、必要に応じてより細かな制御も可能になった
- (新しい slot) Snippets によりSvelteコンポーネント内で再利用可能な部品を定義できるようになった
- (イベントハンドラー) 記述が単純になり柔軟性が向上した
  - `createEventDispatcher` は不要になった
  - イベントのアタッチがトップ要素に移譲されることで性能・メモリ効率が向上した
  - Uコンポーネントは任意のイベントを受け付け可能になった
  - 型安全性が向上した
- テンプレート部の TypeScript 対応
- 自作のCSSパーサーを採用
- 型定義ファイルの改善

---

# まとめ

<Center>
これ以外にも沢山の改善が導入されています。<br>
ぜひ公式ドキュメントを一読ください。<br>
</Center>

<p style="margin-top: 400px">
公式ドキュメント: <a target="_blank" href="https://svelte-5-preview.vercel.app/docs/introduction">https://svelte-5-preview.vercel.app/docs/introduction</a>
</p>

---

# まとめ

<Center>
Svelte 4 と Svelte 5 の書き方の対比表は<br>
以下のサイトがよくまとまっています。<br>
</Center>

<p style="margin-top: 400px">
Component party: <a target="_blank" href="https://component-party.dev/?f=svelte4,svelte5">https://component-party.dev/?f=svelte4,svelte5</a>
</p>

---

# その他

<Center>
今日紹介できませんでしたが<br>
Next.js / Nuxt の Svelte 版である SvelteKit も<br>
昨年末にメジャーバージョンアップをしました。<br>
こちらも一度ドキュメントを参照ください。<br><br>
また Svelte 用の ESLint Plugin も提供しているので<br>
是非ご活用ください<br>
</Center>

<p style="margin-top: 340px">
SvelteKit: <a target="_blank" href="https://kit.svelte.dev/">https://kit.svelte.dev/</a>

SvelteKit (日本語版): <a target="_blank" href="https://kit.svelte.jp/">https://kit.svelte.jp/</a>

ESLint Plugin Svelte: <a target="_blank" href="https://github.com/sveltejs/eslint-plugin-svelte">https://github.com/sveltejs/eslint-plugin-svelte</a>

</p>
