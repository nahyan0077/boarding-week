//Question from Dossire.Nexus
const {fork} = require('child_process');

class MessageQueue {
    constructor() {
        this.topics = {}
        this.processes = {}
    }
    createTopic(topic){
        if (typeof topic !== 'string') {
            console.log("Topic must be a string");
            return
        }
        if (this.topics[topic]) {
            console.log(`This topic name  => ${topic} ==>> already exists `);
            return
        }
        //for messages
        this.topics[topic] = []
        let child = fork(`./child.js`)
        this.processes[topic] = child
        console.log("child process created");
        
    }
    sendMessage(topic, message){
        if (!this.topics[topic]) {
            console.log(`This topic name  => ${topic} ==>> not exists `);
            return
        }
        this.topics[topic].push(message)
        console.log(`Message sent to topic "${topic}": ${message}`);
    }
}

const msgQue = new MessageQueue()

msgQue.createTopic("topic1")

msgQue.sendMessage("topic1","hai topic1")