import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "./types";

function IconAdd({ color = "#000", size = 24, ...props }: IconProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2h6z" fill={color} />
    </Svg>
  );
}

export default IconAdd;
