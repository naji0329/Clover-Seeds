import React from "react";
import { useTimer } from "react-timer-hook";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TimerStyled from "./TimerStyled";
function Timer() {
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 1055000);
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div>
      <Box>
        <Title>WATERING TIMER LIMIT</Title>
        <TimerStyled
          seconds={seconds}
          minutes={minutes}
          hours={hours}
          days={days}
        />
      </Box>
    </div>
  );
}

export default Timer;

const Title = styled("h3")({
  fontSize: "12px",
  fontWeight: "700",
  color: "#FFFFFF",
  textAlign: "center",
  paddingBottom:"4px"
});
