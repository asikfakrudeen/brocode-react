import { useCallback, useState, memo } from "react";

const ChatWindow = memo(function ChatWindow({ onMessage }) {
  console.log("ChatWindow rendered");
  return <button onClick={() => onMessage("Hello")}>Send</button>;
});

function ChatApp() {
  const [text, setText] = useState("");

  const sendMessage = useCallback((msg) => {
    console.log("Sending:", msg);
  }, []);

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <ChatWindow onMessage={sendMessage} />
    </>
  );
}

export default ChatApp;