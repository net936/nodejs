var buffer1 = new Buffer(' hello ');
var buffer2 = new Buffer(' girl ');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());



