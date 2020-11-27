export class Message {
    public readonly id: string;
    title: string;
    message: string;
    isSent: boolean;

constructor(id: string) {
    this.id = id;
}

}

const message = new Message('abc123');
message.id;
// Cannot assign to 'id' because it is a read-only property.
message.id = '123';
