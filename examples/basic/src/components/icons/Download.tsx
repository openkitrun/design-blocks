import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { IconProps } from "./types";

function IconDownload({ color = "#000", size = 24, ...props }: IconProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        d="M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.415L12 17 3.515 8.515 4.929 7.1 11 13.172V2h2v11.172z"
        fill={color}
      />
    </Svg>
  );
}

export default IconDownload;
