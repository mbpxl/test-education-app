import React, { useEffect } from "react";

type TimerProps = {
  duration: number;
  onTimeUp: () => void;
};

export const Timer = (props: TimerProps) => {
  const [timeLeft, setTimeLeft] = React.useState<number>(() => {
    const savedTime = localStorage.getItem("timeLeft");
    return savedTime ? parseInt(savedTime) : props.duration;
  });

  useEffect(() => {
    // Если время истекло, вызовем onTimeUp и сбросим таймер
    if (timeLeft <= 0) {
      props.onTimeUp();
      localStorage.removeItem("timeLeft");
      return;
    }

    // Устанавливаем таймер, который обновляет время каждые 1 секунду
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        localStorage.setItem("timeLeft", newTime.toString());
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, props]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return <div>Time left: {formatTime(timeLeft)}</div>;
};
