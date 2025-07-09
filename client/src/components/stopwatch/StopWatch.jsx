import { useEffect,useState, useRef } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timeRef = useRef(null);

 useEffect(()=> {
    if(isRunning){
        timeRef.current = setInterval(()=> {
            setTime((prev)=> prev + 1);
        }, 500)
    }else {
        clearInterval(timeRef.current);
    }
    return () => clearInterval(timeRef.current);

 },[isRunning])

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      Time: {time}
      <button onClick={() => handleStart()}>Start</button>
      <button onClick={() => handleStop()}>Stop</button>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
};

export default StopWatch;
