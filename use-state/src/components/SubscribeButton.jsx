// Changing Button Text after Click

import { useState } from "react";
import "./subscribe-button.css";

const SubscribeButton = () => {

    const initialState = false;
    const [isSubscribed, setSubscribed] = useState(initialState);

    const handleSubscribe = () => setSubscribed((prev) => (!prev));

  return (

    <div className="button-container">
        <button onClick = {handleSubscribe} 
                className = {`subscribe-btn ${isSubscribed ? "subscribed" : ""}`}>
                    {isSubscribed ? "SUBSCRIBED" : "SUBSCRIBE"}</button>
    </div>
    
  );
}

export default SubscribeButton;