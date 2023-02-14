import React from "react";
import { useState, useRef, useEffect } from "react";


import "./Body.css";

const Body = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState<string>("");

    const inputRef = useRef<HTMLInputElement>(null);

    const onBtnClickHandler = () => {
        const temp =[...messages];
        temp.push(input);
        setMessages(temp);
        setInput("");
    }

    const onKeyDwnHandler = (e: React.KeyboardEvent) =>{
        
        if(e.key === "Enter")
            onBtnClickHandler();

        if(e.key === "Escape")
            setInput("");
    }

    useEffect(() => {
        console.log("Component rendrering");        
    },[]);
    

    return(
        <section id="bodyContent">
            <div className="input">
                <input aria-label="text-input" 
                    ref={inputRef}
                    type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={onKeyDwnHandler} />
                <button onClick={onBtnClickHandler} >Send</button>
            </div>
            <div className="messages">
                {messages.map((message, index) =><div key={"message-"+index}>{message}</div>)}
            </div>
        </section>
    );
};

export { Body };