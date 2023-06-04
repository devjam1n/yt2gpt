"use client";
import { useEffect, useState } from "react";

export default function Countdown({ targetDate }) {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const diff = targetDate.getTime() - now;

    if (diff > 3600000) {
      return Math.round(diff / 3600000) + " hours";
    } else {
      return Math.round(diff / 60000) + " minutes";
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  });

  return <span>{timeRemaining}</span>;
}
