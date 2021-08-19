import React, { useEffect, useState } from "react";
import {ContainerClock} from "./view"
function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return <ContainerClock>{clockState}</ContainerClock>;
}

export default Clock;
