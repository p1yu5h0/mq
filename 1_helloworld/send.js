var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err0, connection) {
    if(err0) throw err0;
    connection.createChannel(function(err1, channel){
        if(err1) throw err1;
        var queue = 'hello';
        var msg = 'hello mikki';
        channel.assertQueue(queue, {
            durable: false,
        })
        channel.sendToQueue(queue, Buffer.from(msg));
        console.log(" [x] Sent %s", msg);
    });
    setTimeout(function(){
        connection.close();
        process.exit(0);
    }, 500);
});

