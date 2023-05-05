# YT_Time_Copy

YT_Time_Copy は、YouTube の動画で現在の再生時間を簡単にクリップボードにコピーできる Chrome 拡張機能です。再生中の動画の現在の再生時間を一瞬でコピーし、ペーストできるようにします。

## インストール

1. このリポジトリをクローンまたはダウンロードして、ローカルに保存します。
![image](https://user-images.githubusercontent.com/91080250/236364766-7953bbc4-9f13-4724-9a02-392bf93a8793.png)
2. Chrome の拡張機能ページ (`chrome://extensions/`) を開きます。
3. 右上の「デベロッパーモード」をオンにします。
4. 「パッケージ化されていないアプリを読み込む」ボタンをクリックし、先ほど保存したプロジェクトフォルダを選択します。

## 使い方

1. YouTube 動画ページを開きます。
2. 再生中の動画の現在の再生時間をコピーするには
   - `Ctrl` キーと `Z` キーを同時に押します。

   終わりです


## ショートカットキーの変更

ショートカットキーを変更するには、`content.js` の `copyShortcut` オブジェクトを編集します。
例えば、`Ctrl` キーと `B` キーをショートカットにしたい場合、以下のように変更します。

```javascript
const copyShortcut = {
  ctrlKey: true,
  key: 'b',
};
```

## 追記
拡張機能を固定バーに固定して、食事中にマウスだけでもコピーできる機能作ろうとしたがやめた、食うのやめればええやんってなった。ま、数日使ってみて気が変わるかもしれんから追加するかもしれない