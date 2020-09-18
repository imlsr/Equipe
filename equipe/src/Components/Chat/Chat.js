import React, { useEffect, useState } from "react"
import "./Chat.css"
import { useParams } from "react-router-dom"
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import InforOutlinedIcon from "@material-ui/icons/InfoOutlined"
import db from "../../Firebase/Firebase"
import Message from "./Message"

function Chat() {
    const { roomId } = useParams()
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setRoomMessages] = useState([])

    useEffect(() => {
        if (roomId) {
            db.collection("rooms")
                .doc(roomId)
                .onSnapshot((snapshot) => {
                    setRoomDetails(snapshot.data())
                })
        }

        db.collection("rooms")
            .doc(roomId)
            .collection("messages")
            .orderBy("timestamp", "asc")
            .onSnapshot((snapshot) => setRoomMessages(snapshot.docs.map((doc) => doc.data())))
    }, [roomId])

    console.log(roomMessages)

    return (
        <div className="chat">
            <div className="chat_header">
                <div className="chat_headerLeft">
                    <h4 className="chat_channelName">
                        <strong>{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat_headerRight">
                    <p>
                        <InforOutlinedIcon /> Details
                    </p>
                </div>
            </div>

            <div className="chat_messages">
                {roomMessages.map(({ message, timestamp, username, userimage }) => (
                    <Message
                        message={message}
                        timestamp={timestamp}
                        username={username}
                        userimage={userimage}
                    />
                ))}
            </div>
        </div>
    )
}

export default Chat
