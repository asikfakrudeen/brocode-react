// Changing Button Text after Click

import { useState } from "react";

const SubscribeButton = () => {

    const initialValue = false;
    const [subscribed, setSubscribed] = useState(initialValue);

    const handleSubscribe = () => setSubscribed(true);

  return (
    <button onClick = {handleSubscribe}>{subscribed ? "Subscribed!" : "Subscribe"}</button>
  );
}

export default SubscribeButton;