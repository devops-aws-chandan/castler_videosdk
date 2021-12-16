import React from "react";
//import robot from "../animations/robot.json";
import Lottie from "react-lottie";
import { Typography, Box } from "@material-ui/core";
import useResponsiveSize from "../utils/useResponsiveSize";

const ClickAnywhereToContinue = ({ onClick, title }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: "",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const jsonSize = useResponsiveSize({
    xl: 320,
    lg: 280,
    md: 240,
    sm: 200,
    xs: 180,
  });

  return (
    <div
      onClick={onClick}
      id={"checkuserinteractionelementid"}
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(https://www.castler.com/wp-content/uploads/2021/12/backdrop-img.png)`,
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{
        backgroundColor: "#27422C",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        height: 280,
        width: 280,
      }}>
        <img src="https://www.castler.com/wp-content/uploads/2021/12/ezgif.com-gif-maker-3.gif"
          style={{
            width: 200,
            height: 140,
            resizeMode: 'contain',
          }}
        />
      </div>
      <Box mt={5} style={{
        textAlign: "center",
        margin: "10px"
      }}>
        <Typography variant="h4" style={{}}>
          {title}
        </Typography>
      </Box>
    </div>
  );
};

export default ClickAnywhereToContinue;
