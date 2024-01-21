function Chat() {
    const askOllama = () => {
        console.log("clicked");
    }

    return <div>
        <input type="text" />
        <button onClick={askOllama}>Send</button>
    </div>
}

export default Chat;