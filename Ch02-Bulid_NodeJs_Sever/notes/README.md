## 學習筆記 - 課程內容紀錄

**課程名稱：**
快速創建Node JS后端服务器
https://www.youtube.com/watch?v=zHB1dn8FU44&list=PL50akgsaBZlF9DADkYuQZLQBDLHZHZ-9N&index=2&ab_channel=WenXuanDecode%E6%96%87%E8%BD%A9%E8%A7%A3%E7%A0%81

**日期：**
113/3/24

**課程目的：**
學如何使用NodeJs起一個後端伺服器

**內容摘要：**
1. [概述](#概述)
2. [重點紀錄](#重點紀錄)
3. [問題與討論](#問題與討論)
4. [下一步行動](#下一步行動)



專案結構
```
.
├── notes
│   ├── README.md
│   └── images
└── server.js

```

### 概述
簡要描述本次課程的主題和目標。

### 重點紀錄
- NodeJs服務器
  1. [導入http模組](#導入http模組)

  ```NodeJs
  const http=require("http")
  ```
  2. 使用http模塊,用回調函數參數(request,response)

  ```
  const server =http.createServer((request,response)=>{
    response.end("Welcone My World")
  })
  ```
  3. 創一個伺服器監聽
  ```
  const port=3000;
  const ip="127.0.0.1"
  server.listen(port,ip,()=>{
      console.log(`server is running at http://${ip}:${port}`)
  })
  ```


### 問題與討論
過程中並無碰到問題
- 熟悉const定義
- 分三大步驟
    1. 導入http模組
    2. http模組,使用回調函並賦予兩個參數(request,response)
    3. 創一個伺服器監聽
### 下一步行動
學習第三章節
  - 處理前端用戶的請求





