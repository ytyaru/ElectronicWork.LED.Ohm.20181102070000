# import

## 環境

* Chromium 65.0.3325.181（Official Build）Built on Raspbian , running on Raspbian 9.4 （32 ビット）

## scriptタグ

* <script>のtypeを`text/javascript`から`module`へ変更する

## CORSエラー

　実行できたがエラーになった。

> Access to Script at '*.js' from origin 'null' has been blocked by CORS policy: Invalid response. Origin 'null' is therefore not allowed access.

### CORSエラー対策

* https://qiita.com/ta-ke-no-bu/items/b7cd4b4719249a9c365e

#### JS

```javascript
  var url = '使いたい外部URL';
  var img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = url;
  img.onload = function() {
    imgを引数にしてイメージの読み込み
  };
```

#### ブラウザ起動引数（エラー抑制）

```bash
$ Chrome --args --disable-web-security --user-data-dir
```

#### ローカルサーバ起動

* http://tonchix.hatenablog.com/entry/2017/09/07/233152

```bash
$ cd (index.htmlがあるディレクトリ)
$ python3 -m http.server
Serving HTTP on 0.0.0.0 port 8000 ...
127.0.0.1 - - [02/Nov/2018 12:06:47] "GET / HTTP/1.1" 200 -
127.0.0.1 - - [02/Nov/2018 12:06:47] "GET /style.css HTTP/1.1" 200 -
127.0.0.1 - - [02/Nov/2018 12:06:47] "GET /setup.js HTTP/1.1" 200 -
127.0.0.1 - - [02/Nov/2018 12:06:48] code 404, message File not found
127.0.0.1 - - [02/Nov/2018 12:06:48] "GET /favicon.ico HTTP/1.1" 404 -
127.0.0.1 - - [02/Nov/2018 12:08:41] "GET / HTTP/1.1" 200 -
```

　ブラウザのURL欄にて`0.0.0.0:8000`を入力すると`index.html`が表示される。

　（pythonなら小さいローカルサーバを簡単に作成・起動できる。だがpythonのインストールが必要）

　しかし依然として以下のエラーが出る。

```
Uncaught SyntaxError: Unexpected identifier (setup.js:2)
```

　実行結果の`code 404, message File not found`はモジュールファイル`SourceForm.js`のことだろうか。`import SourceForm from './SourceForm.js';`で問題ないと思うのだが、何か間違っているのだろうか。

### import構文

* https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/import
* https://qiita.com/senou/items/a2f7a0f717d8aadabbf7
