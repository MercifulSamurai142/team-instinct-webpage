import { useState, useEffect } from 'react';

export function useCountdown(initialSeconds: number) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev <= 1 ? initialSeconds : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [initialSeconds]);

  const hours = String(Math.floor(secondsLeft / 3600)).padStart(2, '0');
  const mins = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, '0');
  const secs = String(secondsLeft % 60).padStart(2, '0');

  return { hours, mins, secs };
}