import { useEffect, useCallback, useState } from "react";

function LocationTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [handleMove]);

  return <p>Position: {position.x}, {position.y}</p>;
}

export default LocationTracker;