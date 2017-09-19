var http = require('http');
var fs=require('fs');

http.createServer(function (request, response) {
 
//	 response.writeHead(200,{"Content-Type":"text/html"});
//	 response.write('<body><div>hello beijing</div></body>');

 fs.readFile("./" + request.url,function(error,data){
       if(error){
           response.writeHead(404,{"Content-type":"text/plain"});
           response.end("Sorry the page was not found");
       }else{
           response.writeHead(200,{"Content-type":"text/html"});
           response.end(data);

       }
   });

}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');