import { useState, useMemo, useEffect } from "react";

const AnalyticsTracker = () => {
    
  const [page, setPage] = useState("home");

  const analyticsInfo = useMemo(() => ({ page }), [page]);

  useEffect(() => {
    console.log("Tracking:", analyticsInfo.page);
  }, [analyticsInfo]); // safe because reference is stable

  return (
    <>
      <button onClick={() => setPage("profile")}>Go to Profile</button>
    </>
  );
}

export default AnalyticsTracker;