import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "./types";

function IconArrowDropDown({ color = "#000", size = 24, ...props }: IconProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        d="M12 15l-4.243-4.242 1.415-1.414L12 12.172l2.828-2.828 1.415 1.414L12 15.001z"
        fill={color}
      />
    </Svg>
  );
}

export default IconArrowDropDown;
