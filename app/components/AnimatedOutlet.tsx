import { useState } from "react";
import { useOutlet } from "@remix-run/react";

function AnimatedOutlet() {
  const [outlet] = useState(useOutlet());
  return outlet;
}

export default AnimatedOutlet;
