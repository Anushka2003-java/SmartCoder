import { useEffect } from "react";
import { startCanvasAnimation } from "../canvas";

export default function CanvasBg() {
  useEffect(() => {
    startCanvasAnimation();
  }, []);

  return <canvas id="bgCanvas"></canvas>;
}
