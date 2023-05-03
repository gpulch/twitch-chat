import React from "react";

export const Chat = ({
  messages = { messages },
  myMessage = { myMessage },
  setMessages = { setMessages },
  setMyMessage = { setMyMessage },
}) => {
  const sendMessage = () => {
    setMessages([...messages, `You said : ${myMessage}`]);
  };

  const handleMessageInput = (event) => {
    setMyMessage(event.target.value);
  };
  return (
    <div className={"container"}>
      <div id={"chatWindow"} className={"messages-list"}>
        {messages.map((message, index) => (
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
};
