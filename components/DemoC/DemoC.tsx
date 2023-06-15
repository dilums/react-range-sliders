import { useState } from "react";
import Card from "@/components/Card";
import Marker from "./Marker";

export default function DemoC() {
  const [valueA, setValueA] = useState(25);
  const [valueB, setValueB] = useState(75);

  const handleChangeA = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueA(parseInt(event.target.value, 10));
  };
  const handleChangeB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueB(parseInt(event.target.value, 10));
  };

  const start = Math.min(valueA, valueB) * 3;
  const diff = Math.abs(valueA - valueB) * 3;
  return (
    <Card title="Price">
      <div style={{ padding: "0px 12px" }}>
        <div style={{ width: "300px", height: "100px" }}></div>
      </div>
      <div className="relative " style={{ width: "324px", height: "24px" }}>
        <div
          className="absolute rounded-full"
          style={{
            left: "12px",
            right: "12px",
            height: "8px",
            top: "50%",
            transform: "translate(0, -50%)",
            background: "#e8ebf9",
          }}
        ></div>
        <div
          className="absolute rounded-full"
          style={{
            left: `${12 + start}px`,
            width: `${diff}px`,
            height: "8px",
            top: "50%",
            transform: "translate(0, -50%)",
            background: "#424E82",
          }}
        ></div>
        <div
          className="absolute grid place-items-center"
          style={{
            width: "24px",
            height: "24px",
            top: 0,
            left: `${valueA * 3}px`,
          }}
        >
          <div
            className="bg-white shadow-md rounded-full grid place-items-center"
            style={{
              width: "20px",
              height: "20px",
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: "14px",
                height: "14px",
                background: "#424e82",
              }}
            ></div>
          </div>
        </div>
        <Marker value={valueA} />
        <Marker value={valueB} />
        <div
          className="absolute grid place-items-center"
          style={{
            width: "24px",
            height: "24px",
            top: 0,
            left: `${valueB * 3}px`,
          }}
        >
          <div
            className="bg-white shadow-md rounded-full grid place-items-center"
            style={{
              width: "20px",
              height: "20px",
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: "14px",
                height: "14px",
                background: "#424e82",
              }}
            ></div>
          </div>
        </div>
        <input
          type="range"
          id="rangeInput"
          name="rangeInput"
          min={0}
          max={100}
          step={1}
          value={valueA}
          onChange={handleChangeA}
        />
        <input
          type="range"
          id="rangeInput"
          name="rangeInput"
          min="0"
          max="100"
          step="1"
          value={valueB}
          onChange={handleChangeB}
        />
      </div>
      <div className="flex items-center justify-between px-3 font-semibold h-8">
        <div> $0 </div>

        <div> $1000 </div>
      </div>
    </Card>
  );
}
