import React, { useState } from "react"
import "./ChatInput.css"
import { Button } from "@material-ui/core"

function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState("")

    const sendMessage = (e) => {
        e.preventDefault()
        if(channelId) {
            
        }
    }

    return (
        <div className="chatInput">
            <form>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Message #${channelName.toLowerCase()}`}
                />
                <button type="submit" onClick={sendMessage}>
                    Send
                </button>
            </form>
        </div>
    )
}

export default ChatInput
