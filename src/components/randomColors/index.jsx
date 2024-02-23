import { useEffect, useState } from "react";
import "./styles.css";

export default function RandomColorGenerator() {
  const [color, setColor] = useState("#FFFFFF");
  const [typeColor, setTypeColor] = useState("hex");

  function randomValue(val) {
    return Math.floor(Math.random() * val);
  }

  function handleHexColor() {
    const colors = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];
    let hex = "#";

    for (let i = 0; i < 6; i++) {
      hex += colors[randomValue(colors.length)];
    }

    setColor(hex);
  }

  function handleRgbColor() {
    let rgb = "";

    rgb = `rgb(${randomValue(255)}, ${randomValue(255)}, ${randomValue(255)})`;

    setColor(rgb);
  }

  useEffect(() => {
    if (typeColor === "rgb") handleRgbColor();
    else handleHexColor();
  }, [typeColor]);

  return (
    <div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
        }}
      >
        <div className="container">
          <button onClick={() => setTypeColor("hex")}>Hex Colors</button>
          <button onClick={() => setTypeColor("rgb")}>Rgb Colors</button>
          <button
            onClick={typeColor === "hex" ? handleHexColor : handleRgbColor}
          >
            Generate Color
          </button>
        </div>
        <div className="text">
          <h3>{typeColor}</h3>
          <h2>{color}</h2>
        </div>
      </div>
    </div>
  );
}
