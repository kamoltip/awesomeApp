var pubnub = new PubNub({
subscribeKey: 'demo',
publishKey: 'demo',
});
pubnub.addListener({
message: function (message) {
console.log('message came in: ', message)
}
});
pubnub.subscribe({ channels: ['ChatRoomChannel'] });
pubnub.publish({ channel: 'ChatRoomChannel', message: 'Hello, world!' }, (publishStatus)=>{
if (publishStatus.error) {
console.error('Non 200 response', { publishStatus ) });
return ;
}
console.log('I just published my hello!');
});
