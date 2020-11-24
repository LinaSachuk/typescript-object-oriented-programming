export class Message {
    title;
    message;
    id;
}

// old way
function Message2(title, message, id){
    this.title = title;
    this.message = message;
    this.id = id;
}

const message1 = new Message2('Hello', 'World', 'Infinity');
