
// ！！这些功能可以使用 linux nc命令直接实现

//  使用udp发送数据
//  http://www.hacksparrow.com/node-js-udp-server-and-client-example.html

// 创建server 监听9000端口 发送 Hello nodejs！
// 使用以下命令查看
	// nc 192.168.1.172 9000
	// telnet 192.168.1.172 9000
var server = require('net')
				.createServer()
				.listen(9000)
				.on('connection', function(client) {  

				    console.log('CONNECTED: ' +
				        client.remoteAddress + ':' + client.remotePort);

				    // 为这个clientet实例添加一个"data"事件处理函数
				    client.on('data', function(data) {
				        console.log('DATA ' + client.remoteAddress + ': ' + data);
				        // 回发该数据，客户端将收到来自服务端的数据
				        client.write('You said "' + data + '"');
				    });

					client.write('Hello nodejs!\n'); // 服务端向客户端输出信息，使用 write() 方法  
					// client.end(); // 服务端结束该次会话  

				});



// 向指定主机 指定端口发送 指定数据 TCP
var R_HOST = '192.168.1.172';
var R_PORT = 9000;

var client = new require('net').clientet();
client.connect(R_PORT, R_HOST, function() {

    console.log('CONNECTED TO: ' + R_HOST + ':' + R_PORT);
    // 建立连接后立即向服务器发送数据，服务器将收到这些数据 
    client.write('I am Client!');
});

// 为客户端添加“data”事件处理函数
// data是服务器发回的数据
client.on('data', function(data) {

    console.log('DATA: ' + data);
    // 完全关闭连接
    // client.destroy();

});

// 为客户端添加“close”事件处理函数
client.on('close', function() {
    console.log('Connection closed');
});


