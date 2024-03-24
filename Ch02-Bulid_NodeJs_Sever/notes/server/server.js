// 導入http模組
const http=require("http")

// http模塊
// 使用回調函數,使用requset跟response的參數
const server =http.createServer((request,response)=>{
    response.end("Welcone My World")
})

// 伺服器監聽
const port=3000;
const ip="127.0.0.1"
server.listen(port,ip,()=>{
    console.log(`server is running at http://${ip}:${port}`)
})