## 學習筆記 - 課程內容紀錄

**課程名稱：**
【NodeJS 教學】NodeJS後端程序怎麼知道用戶瀏覽的頁面？
https://www.youtube.com/watch?v=gOPS_1jgaR4&list=PL50akgsaBZlF9DADkYuQZLQBDLHZHZ-9N&index=4&ab_channel=WenXuanDecode%E6%96%87%E8%BD%A9%E8%A7%A3%E7%A0%81
**日期：**
113/3/24
**課程目的：**
學會使用後端處理前端的頁面跳轉請求
**內容摘要：**
1. [概述](#概述)
2. [重點紀錄](#重點紀錄)
3. [問題與討論](#問題與討論)
4. [下一步行動](#下一步行動)



**專案結構**
```
.
├── html
│   ├── 404.html
│   ├── about.html
│   └── index.html
├── notes
│   └── README.md
├── package.json
└── server
    └── rotue
        └── server.js

```

### 概述
簡要描述本次課程的主題和目標。

### 重點紀錄
- NodeJs的基本操作：
  - const定義後導入模塊(http,fs)
  - const定義response()
  - 定義三個參數 檔案名,給用戶的狀態碼,response object
  ```NodeJs
  const sendResponse=(fileName,statusCode,response)=>{
  ```
  - 用http模塊創建node js後端服務器
  - creteServer函數會返回一個server物件
  ``` NodeJs
  const server = http.createServer((request,response)=>{
  ```
  - 資料型別
---
- 流程控制：
    1.條件判斷(response) 
  - 先定義假如錯誤會怎樣=>定義content-type的格式
  - 判斷
  ```NodeJs
        if(error){
            response.statusCode=500;
            response.setHeader("content-Type","text/plain");
            response.end("Sorry internal error");
        }
        // 先定義假如錯誤會怎樣=>定義content-type的格式
        else{
            response.statusCode=statusCode;
            response.setHeader("content-Type","text/html");
            response.end(data);
        }
  ```
- 函數定義和調用

### 問題與討論
紀錄學習過程中遇到的問題、疑惑以及與老師或同學的討論。
1. 這樣算是 SSR的渲染嗎？
    - 不完全正確。SSR（Server-Side          Rendering，服務器端渲染）是一種在服務器上生成 HTML 頁面的技術，然後將其直接發送給用戶的瀏覽器。在 SSR 中，服務器會根據用戶的請求動態生成 HTML 頁面，並將其返回給用戶。通常，這是在使用某種後端框架（例如Node.js 的Express框架、Python的Django框架等）的情況下實現的。

    - 在您提供的程式碼中，雖然後端根據用戶的請求 URL 返回不同的 HTML 頁面，但這僅僅是在後端通過檔案系統讀取 HTML 文件，然後返回給用戶的過程，並不涉及到動態生成 HTML 頁面的過程。因此，這不算是嚴格意義上的 SSR。
2. CSR跟SSR 只能擇一嗎?
不完全正確。在某些情況下，CSR（Client-Side Rendering，客戶端渲染）和 SSR（Server-Side Rendering，服務器端渲染）可以同時存在於同一個應用程序中，這種情況通常被稱為“同構”（Isomorphic）應用程序。

    - CSR：客戶端渲染是指在用戶訪問網頁時，瀏覽器會下載一個空的 HTML 頁面，然後通過 JavaScript 從服務器或其他數據源獲取數據，並在用戶的瀏覽器上動態生成和填充內容。這樣的應用程序稱為 CSR 應用程序，常見的前端框架如React、Vue.js和Angular等都支持 CSR。

    - SSR：服務器端渲染是指在服務器上動態生成 HTML 頁面，然後將其發送到用戶的瀏覽器。這樣的應用程序稱為 SSR 應用程序，通常使用後端框架（如Node.js的Express、Python的Django等）來實現。

    同構應用程序：在某些情況下，可以將 CSR 和 SSR 結合在一起，實現同構應用程序。這意味著應用程序可以在服務器端生成 HTML，然後在用戶的瀏覽器上進一步進行客戶端渲染。這樣的應用程序可以獲得較快的首次加載速度和更好的 SEO 效果。

### 下一步行動

