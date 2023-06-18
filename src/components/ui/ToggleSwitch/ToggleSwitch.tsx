import React from "react";
import { styled } from "@mui/system";
import { Theme } from "@mui/material";
import { lightTheme } from "../../../styles/theme";

const Switch = styled("label")(({ theme }: { theme: Theme }) => ({
  position: "relative",
  display: "inline-block",
  width: "50px",
  height: "20px",
  cursor: "pointer",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  transition: "0.4s",
  borderRadius: "55px",
  backgroundColor: theme.temperatureSwitch.backgroundColor,
  "& .on, & .off": {
    color: theme.temperatureSwitch.textColor,
    position: "absolute",
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
    fontSize: "1rem",
    fontWeight: 500,
    display: "flex",
    "& svg": {
      width: "20px",
      fill: "white",
    },
  },
  "& .on": {
    paddingRight: "15px",
  },
  "& .off": {
    paddingLeft: "15px",
  },
}));

const Slider = styled("div")(({ theme }: { theme: Theme }) => ({
  position: "absolute",
  height: "16px",
  width: "18px",
  left: "2px",
  top: "2px",
  backgroundColor: theme.temperatureSwitch.sliderColor,
  transition: "0.4s",
  borderRadius: "44px",
}));

interface IToggleSwitchProps {
  onClick: Function;
}

const ToggleSwitch: React.FC<IToggleSwitchProps> = (props) => {
  const [toggled, setToggled] = React.useState(false);

  return (
    <Switch
      theme={lightTheme}
      onClick={() => {
        setToggled((checked) => !checked);
        props.onClick();
      }}
    >
      {toggled && <span className="on">C</span>}
      {!toggled && <span className="off">F</span>}
      <Slider
        theme={lightTheme}
        style={{
          transform: toggled ? " translateX(28px)" : " translateX(0px)",
        }}
      ></Slider>
    </Switch>
  );
};

export default ToggleSwitch;
