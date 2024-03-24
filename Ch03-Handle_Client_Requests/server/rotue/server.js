// 導入http模塊
const http=require("http")
// 導入fs模塊
const fs=require("fs")
// // 定義絕對路徑
// const path = require('path');
// // 定義三種不同的文件名
// const fileNames = ['index.html', 'about.html', '404.html'];


// 定義response
// 定義三個參數 檔案名,給用戶的狀態碼,response object
const sendResponse=(fileName,statusCode,response)=>{
    fs.readFile(`../../html/${fileName}`, (error, data) => {
        // 1.必須提供路徑,不可文件名,2.成功讀取文件 error值為undefined,data會被賦予文件內容
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
    });  
};

const server = http.createServer((request,response)=>{
    console.log(request.url,request.method);
    const url =request.url;
    const method =request.method;
    if(method === "GET"){
        if(url === "/"){
            sendResponse("index.html",200,response);
        }
        else if(url === "/about.html"){
            sendResponse("about.html",200,response);
        }
        else{
            sendResponse("404.html",404,response);
        }
    }
    else{

    }
    // 使用這個去知道用戶做了哪些操作
    // response.end("Hello From Node js server");
});
// 用http模塊創建node js後端服務器
// creteServer函數會返回一個server物件

// 伺服器監聽
const port=3000;
const ip="127.0.0.1";
server.listen(port,ip,()=>{
    console.log(`server is running at http://${ip}:${port}`);
})
