# prosh - Get usable http(s) proxy.

使用可能なHTTP/HTTPSプロキシをリスト上から抽出します。

デフォルトではProxiflyの[Proxy List](https://github.com/proxifly/free-proxy-list/)を使います。

## 使う

リポジトリをクローンして、`bun i && bun start`してください。

### オプション

- `--http` HTTPプロキシを取得します。(デフォルト)
- `-https` HTTPSプロキシを取得します。
- `--silent` ログを抑制し、結果のみを出力します。

### 設定を編集する

プロキシリストや接続テスト用のエンドポイントは`consts.ts`から編集できます。
お好きにどうぞ。
