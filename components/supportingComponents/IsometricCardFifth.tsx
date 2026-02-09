const M = "0.865865 0.500278 -0.871576 0.490261";
const HIT_AREA = "182.68,21.22 458.89,180.81 278.48,282.30 2.27,122.71";

/* Fingerprint-style blob paths */
const BLOB_SHADOW =
  "M267.32 145.001L267.037 145.188L267.254 145.403C272.754 150.884 271.48 157.941 263.28 162.554C253.493 168.059 237.675 167.968 227.952 162.35L190.672 140.81C182.94 136.343 182.981 129.174 190.764 124.797C198.337 120.537 210.434 120.525 218.202 124.654L218.744 124.942L219.139 124.588C220.344 123.504 221.707 122.475 223.361 121.545C235.153 114.912 254.213 115.022 265.928 121.79C277.059 128.222 277.426 138.316 267.32 145.001Z";
const BLOB_SHADOW_ARC =
  "M243.874 138.037C250.893 137.857 258.027 139.312 263.372 142.4C264.974 143.326 266.246 144.387 267.326 145.464";
const BLOB_MAIN =
  "M267.32 143.001L267.037 143.188L267.254 143.403C272.754 148.884 271.48 155.941 263.28 160.554C253.493 166.059 237.675 165.968 227.952 160.35L190.672 138.81C182.94 134.343 182.981 127.174 190.764 122.797C198.337 118.537 210.434 118.525 218.202 122.654L218.744 122.942L219.139 122.588C220.344 121.504 221.707 120.475 223.361 119.545C235.153 112.912 254.213 113.022 265.928 119.79C277.059 126.222 277.426 136.316 267.32 143.001Z";
const BLOB_MAIN_ARC =
  "M243.874 136.037C250.893 135.857 258.027 137.312 263.372 140.4C264.974 141.326 266.246 142.387 267.326 143.464";

/* Corner dot positions: [tx, ty] */
const DOTS_SHADOW: [number, number][] = [
  [182.037, 22.855],
  [433.138, 167.936],
  [26.8965, 110.122],
  [277.998, 255.202],
];
const DOTS_MAIN: [number, number][] = [
  [182.037, 21.855],
  [433.138, 166.935],
  [26.8965, 109.122],
  [277.998, 254.202],
];

const IsometricCardFifth = ({
  isHovered,
  isFaded,
  onMouseEnter,
}: {
  isHovered: boolean;
  isFaded: boolean;
  onMouseEnter: () => void;
}) => {
  const c = isHovered
    ? {
        shadow: "#93c5fd",
        stroke: "#3b82f6",
        bg: "#eff6ff",
        fill1: "#bfdbfe",
        fill2: "#93c5fd",
        fill3: "#60a5fa",
        barBg: "#dbeafe",
      }
    : {
        shadow: "#e4e4e7",
        stroke: "#a1a1aa",
        bg: isFaded ? "#f4f4f5" : "#f5f5f5",
        fill1: "#e4e4e7",
        fill2: "#d4d4d8",
        fill3: "#a1a1aa",
        barBg: "#e4e4e7",
      };

  const t = (tx: number, ty: number) => `matrix(${M} ${tx} ${ty})`;

  return (
    <svg
      width="460"
      height="300"
      viewBox="0 0 460 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="svg-color-transitions"
      style={{ pointerEvents: "none" }}
    >
      <g style={{ pointerEvents: "auto" }}>
        {/* Shadow card */}
        <rect
          x="-0.00285524"
          y="0.495269"
          width="319"
          height="207"
          rx="15.5"
          transform={t(182.537, 27.2224)}
          fill={c.shadow}
          stroke={c.stroke}
        />

        {/* Side decorations — shadow elements outside clip */}
        <rect
          x="9.07227"
          y="115.314"
          width="8.50049"
          height="13.0286"
          fill={c.shadow}
        />
        <line
          x1="9.48145"
          y1="128.85"
          x2="9.48145"
          y2="111.85"
          stroke={c.stroke}
        />
        <circle cx="17.9814" cy="128.109" r="8" fill={c.shadow} />
        <line
          x1="14.3179"
          y1="135.984"
          x2="14.3179"
          y2="118.984"
          stroke={c.stroke}
        />
        <line
          x1="285.318"
          y1="283.121"
          x2="285.318"
          y2="266.121"
          stroke={c.stroke}
        />
        <line
          x1="268.318"
          y1="282.629"
          x2="268.318"
          y2="265.629"
          stroke={c.stroke}
        />
        <circle cx="441.981" cy="186.136" r="8" fill={c.shadow} />
        <rect
          x="443.774"
          y="173.07"
          width="6.25879"
          height="12.8606"
          fill={c.shadow}
        />
        <line
          x1="450.535"
          y1="187.25"
          x2="450.535"
          y2="170.25"
          stroke={c.stroke}
        />
        <line
          x1="445.291"
          y1="194.431"
          x2="445.291"
          y2="177.431"
          stroke={c.stroke}
        />

        {/* Main card (clipped) */}
        <g clipPath="url(#iFFclip0)">
          <rect
            width="320"
            height="208"
            rx="16"
            transform={t(182.105, 10.9685)}
            fill={c.bg}
          />

          {/* Fingerprint blob — shadow */}
          <path d={BLOB_SHADOW} fill={c.fill2} stroke={c.stroke} />
          <path
            d={BLOB_SHADOW_ARC}
            stroke={c.stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Fingerprint blob — main */}
          <path d={BLOB_MAIN} fill={c.fill1} stroke={c.stroke} />
          <path
            d={BLOB_MAIN_ARC}
            stroke={c.stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Progress bar */}
          <g clipPath="url(#iFFclip1)">
            <rect
              width="48"
              height="6"
              transform={t(176.971, 148.133)}
              fill={c.barBg}
            />
            <rect
              width="32"
              height="6"
              transform={t(176.971, 148.133)}
              fill={c.fill3}
            />
          </g>
          <rect
            x="-0.00285524"
            y="0.495269"
            width="47"
            height="5"
            transform={t(177.402, 148.387)}
            stroke={c.stroke}
            fill="none"
          />

          {/* Corner dots — shadow */}
          {DOTS_SHADOW.map((d, i) => (
            <circle
              key={`ds${i}`}
              cx="3"
              cy="3"
              r="2.5"
              transform={t(d[0], d[1])}
              fill={c.fill2}
              stroke={c.stroke}
            />
          ))}

          {/* Corner dots — main (y-1) */}
          {DOTS_MAIN.map((d, i) => (
            <circle
              key={`dm${i}`}
              cx="3"
              cy="3"
              r="2.5"
              transform={t(d[0], d[1])}
              fill={c.fill1}
              stroke={c.stroke}
            />
          ))}
        </g>

        {/* Main card stroke */}
        <rect
          x="-0.00285524"
          y="0.495269"
          width="319"
          height="207"
          rx="15.5"
          transform={t(182.537, 11.2224)}
          stroke={c.stroke}
          fill="none"
        />

        {/* Hit area */}
        <polygon
          points={HIT_AREA}
          fill="transparent"
          style={{ cursor: "pointer" }}
          onMouseEnter={onMouseEnter}
        />

        <defs>
          <clipPath id="iFFclip0">
            <rect
              width="320"
              height="208"
              rx="16"
              transform={t(182.105, 10.9685)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iFFclip1">
            <rect
              width="48"
              height="6"
              transform={t(176.971, 148.133)}
              fill="white"
            />
          </clipPath>
        </defs>
      </g>
    </svg>
  );
};

export default IsometricCardFifth;
