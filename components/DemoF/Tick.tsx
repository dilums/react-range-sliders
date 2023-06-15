function deriveData(index: number, value: number) {
  const r1 = 130;

  const r2 = 150;
  const r3 = 140;
  const delta = Math.PI / 40;
  const angle = delta * index - Math.PI;

  const ss = Math.sin(angle);
  const cc = Math.cos(angle);

  const rs = index % 5 === 0 ? r1 : r3;

  const x1 = rs * cc;
  const y1 = rs * ss;
  const x2 = r2 * cc;
  const y2 = r2 * ss;

  const color = Math.ceil(value * (41 / 100)) > index ? "#424E82" : "#E8EBF9";
  return { x1, y1, x2, y2, color };
}

type TickProps = {
  index: number;
  value: number;
};

export default function Tick({ index, value }: TickProps) {
  const { x1, y1, x2, y2, color } = deriveData(index, value);
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
  );
}
