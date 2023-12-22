import CustomText from "../custom-text/CustomText";
import { getDateHHMM } from "../../services/date-service";
import ClockStyle from "./Clock.style";
import { useEffect, useState } from "react";

const Clock = () => {
  const [timer, setTimer] = useState(getDateHHMM());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(getDateHHMM());
    }, 1000);

    () => {
      clearInterval(interval);
    };
  }, []);

  return <CustomText style={ClockStyle.time}>{timer}</CustomText>;
};

export default Clock;
