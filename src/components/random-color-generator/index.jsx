import { useState } from "react";
import "./styles.css";
import { useEffect } from "react";

export default function RandomColorGenerator() {
  const [color, setColor] = useState("#242424");
  const [type, setType] = useState("hex");

  function randomValueGenerator(value) {
    return Math.floor(Math.random() * value);
  }

  function hexColorGenerator() {
    let hex = "#";

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

    for (let i = 0; i < 6; i++) {
      hex += colors[randomValueGenerator(colors.length)];
    }

    setColor(hex);
  }

  function rgbColorGenerator() {
    let r = randomValueGenerator(256);
    let g = randomValueGenerator(256);
    let b = randomValueGenerator(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (type === "hex") hexColorGenerator();
    else rgbColorGenerator();
  }, [type]);

  console.log(type, color);

  return (
    <div className="main-container" style={{ backgroundColor: color }}>
      <div className="btn-container">
        <button className="btn secundary" onClick={() => setType("hex")}>
          Hex Color
        </button>
        <button className="btn secundary" onClick={() => setType("rgb")}>
          Rgb Color
        </button>
        <button
          className="btn special"
          onClick={type === "hex" ? hexColorGenerator : rgbColorGenerator}
        >
          Generate Random Color {type === "hex" ? "(Hex)" : "(Rgb)"}
        </button>
      </div>

      <div className="status-container">
        <h3 className="type-status">
          {type === "hex" ? "Hex Color" : "Rgb Color"}
        </h3>
        <p className="color-status">{color}</p>
      </div>
    </div>
  );
}
