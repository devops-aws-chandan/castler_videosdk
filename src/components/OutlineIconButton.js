import { Badge, Box, ButtonBase, Tooltip, useTheme } from "@material-ui/core";
import React, { useState } from "react";
import useResponsiveSize from "../utils/useResponsiveSize";

const OutlineIconButton = ({
  badge,
  onClick,
  Icon,
  isFocused,
  bgColor,
  focusBGColor,
  focusIconColor,
  disabled,
  large,
  renderRightComponent,
  tooltipTitle,
  btnID,
}) => {
  const theme = useTheme();
  const [mouseOver, setMouseOver] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);

  const iconSize = useResponsiveSize({
    xl: 24 * (large ? 1.7 : 1),
    lg: 24 * (large ? 1.7 : 1),
    md: 32 * (large ? 1.7 : 1),
    sm: 28 * (large ? 1.7 : 1),
    xs: 24 * (large ? 1.7 : 1),
  });

  return (
    <Tooltip placement="bottom" title={tooltipTitle || ""}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: theme.spacing(1),
          overflow: "hidden",
          backgroundColor: bgColor
            ? bgColor
            : isFocused
            ? focusBGColor || "#fff"
            : theme.palette.background.default,
          border: `${2}px solid ${
            mouseOver || mouseDown
              ? "transparent"
              : bgColor
              ? bgColor
              : focusBGColor
              ? focusBGColor
              : "#ffffff33"
          }`,
          transition: "all 200ms",
          transitionTimingFunction: "linear",
        }}
      >
        <ButtonBase
          id={btnID}
          onMouseEnter={() => {
            setMouseOver(true);
          }}
          onMouseLeave={() => {
            setMouseOver(false);
          }}
          onMouseDown={() => {
            setMouseDown(true);
          }}
          onMouseUp={() => {
            setMouseDown(false);
          }}
          disabled={disabled}
          onClick={onClick}
        >
          <Box
            p={1}
            style={{
              opacity: disabled ? 0.7 : 1,
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: theme.spacing(1),
              transform: `scale(${mouseOver ? (mouseDown ? 0.95 : 1.1) : 1})`,
              transition: "all 200ms",
              transitionTimingFunction: "linear",
            }}
          >
            <Badge color={"secondary"} badgeContent={badge}>
              <Icon
                style={{
                  color: isFocused ? focusIconColor || "#1C1F2E" : "#fff",
                  height: iconSize,
                  width: iconSize,
                }}
              ></Icon>
            </Badge>
          </Box>
        </ButtonBase>
        {typeof renderRightComponent === "function" && renderRightComponent()}
      </Box>
    </Tooltip>
  );
};

export default OutlineIconButton;
