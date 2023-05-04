import React from "react";

export class Chat extends React.Component<{
  messages: any;
  myMessage: any;
  setMessages: any;
  setMyMessage: any;
}> {
  render() {
    let { messages, myMessage, setMessages, setMyMessage } = this.props;
    const sendMessage = () => {
      setMessages([...messages, `You said : ${myMessage}`]);
    };

    const handleMessageInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      setMyMessage(event.target.value);
    };
    return (
      <div className={"container"}>
        <div id={"chatWindow"} className={"messages-list"}>
          {messages.map((message: [], index: number) => (
            <ul key={index}>{message}</ul>
          ))}
        </div>
        <div className={"sendMessageContainer"}>
          <input
            className={"myMessageInput"}
            value={myMessage}
            onInput={handleMessageInput}
            placeholder={"Type your message"}
          />
          <button
            className={"sendMessage"}
            id="sendMessage"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    );
  }
}
