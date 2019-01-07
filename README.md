# nuxt-json-api-test

### Netlify で WebHook からデプロイができるようにする

1. Netlify の Settings > Build & Deploy > Build hooks から Build hook を有効にします
   ![image](https://user-images.githubusercontent.com/13980441/50351349-32a56480-0585-11e9-8a3a-87b31fd06322.png)

1. functions/deploy.js を開き、 3 行目の url の内容を、上で作成した Build hook の URL に書き換えます。

1. Netlify にデプロイすると、 `https://{ページの URL}/.netlify/functions/deploy` にアクセスすることでデプロイが実施されるようになります。


### 定期的にデプロイが実施されるようにする

定期的にデプロイが実施されるようにするためには、
cron-job.org ( https://cron-job.org/ ) を使用します。

1. Signup からアカウントを作成します
   (タイムゾーンの設定を間違えると、意図しない時間に cron が実行される可能性があります)

1. メニューの `Cronjobs` を選択し、 `Create cronjob` を選択します

1. 必要な情報を入力していきます
   以下の内容を入力し、 Create cronjob を選択します
   - Title: 任意のタイトル
   - Address: 先ほど作成した `https://{ページの URL}/.netlify/functions/deploy` のアドレス
   - Schedule: User-defined
   - User-defined execution dates: 実行する時間の選択
     実行タイミングとなる箇所を全て選択する必要があります（曜日なども、全選択が必要です）
   ![image](https://user-images.githubusercontent.com/13980441/50352283-2e2e7b00-0588-11e9-92c1-45fdf053c3c6.png)
   ![image](https://user-images.githubusercontent.com/13980441/50352292-31296b80-0588-11e9-93a3-2cbe233ceff5.png)

1. 設定した時間に正しく実行されることを確認します
   選択した時間により、待ち時間が発生します（平均 30 秒以上）
