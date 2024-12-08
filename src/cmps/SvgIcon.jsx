import React from "react";
import { svgService } from "../services/svg.service";

function svgIcon({ iconName }) {
  const svg = svgService.getSvg(iconName);

  return <i dangerouslySetInnerHTML={{ __html: svg }}></i>;
}

export default svgIcon;
