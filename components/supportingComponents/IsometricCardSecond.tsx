const M = "0.865865 0.500278 -0.871576 0.490261";
const HIT_AREA = "182.68,21.22 458.89,180.81 278.48,282.30 2.27,122.71";

const IsometricCardSecond = ({
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
        bg: "#bfdbfe",
        inner: "#eff6ff",
        fill1: "#bfdbfe",
        fill2: "#93c5fd",
        solid: "#3b82f6",
      }
    : {
        shadow: "#e4e4e7",
        stroke: "#a1a1aa",
        bg: isFaded ? "#e4e4e7" : "#e4e4e7",
        inner: "#f4f4f5",
        fill1: "#e4e4e7",
        fill2: "#d4d4d8",
        solid: "#a1a1aa",
      };

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
        {/* Shadow */}
        <rect
          x="-0.00285524"
          y="0.495269"
          width="319"
          height="207"
          rx="15.5"
          transform={`matrix(${M} 182.537 21.2224)`}
          fill={c.shadow}
          stroke={c.stroke}
        />

        {/* Main card body */}
        <rect
          x="-0.00285524"
          y="0.495269"
          width="319"
          height="207"
          rx="15.5"
          transform={`matrix(${M} 182.537 17.2224)`}
          fill={c.bg}
          stroke={c.stroke}
        />

        {/* Left sidebar shadow */}
        <rect
          x="-0.00285524"
          y="0.495269"
          width="55"
          height="195"
          rx="9.5"
          transform={`matrix(${M} 182.502 23.1656)`}
          fill={c.fill2}
          stroke={c.stroke}
        />

        {/* Left sidebar clipped content */}
        <g clipPath="url(#isoSecond0)">
          <rect
            width="56"
            height="196"
            rx="10"
            transform={`matrix(${M} 182.071 18.9116)`}
            fill={c.inner}
          />

          {/* Icon square */}
          <rect
            x="-0.00285524"
            y="0.495269"
            width="7"
            height="7"
            rx="1.5"
            transform={`matrix(${M} 176.373 27.55)`}
            fill={c.fill1}
            stroke={c.stroke}
          />

          {/* Sidebar bars */}
          <rect
            x="-0.00285524"
            y="0.495269"
            width="30"
            height="5"
            rx="1.5"
            transform={`matrix(${M} 185.026 33.5433)`}
            fill={c.fill1}
            stroke={c.stroke}
          />
          <rect
            x="-0.00285524"
            y="0.495269"
            width="27"
            height="4"
            rx="1.5"
            transform={`matrix(${M} 158.942 37.3553)`}
            fill={c.fill1}
            stroke={c.stroke}
          />
          <rect
            x="-0.00285524"
            y="0.495269"
            width="21"
            height="4"
            rx="1.5"
            transform={`matrix(${M} 150.226 42.2579)`}
            fill={c.fill1}
            stroke={c.stroke}
          />
          <rect
            x="-0.00285524"
            y="0.495269"
            width="33"
            height="4"
            rx="1.5"
            transform={`matrix(${M} 141.51 47.1605)`}
            fill={c.fill1}
            stroke={c.stroke}
          />
          <rect
            x="-0.00285524"
            y="0.495269"
            width="33"
            height="4"
            rx="1.5"
            transform={`matrix(${M} 124.078 56.9657)`}
            fill={c.fill1}
            stroke={c.stroke}
          />
          <rect
            x="-0.00285524"
            y="0.495269"
            width="25"
            height="4"
            rx="1.5"
            transform={`matrix(${M} 132.794 52.0631)`}
            fill={c.fill1}
            stroke={c.stroke}
          />
          <rect
            x="-0.00285524"
            y="0.495269"
            width="18"
            height="4"
            rx="1.5"
            transform={`matrix(${M} 106.647 66.7709)`}
            fill={c.fill1}
            stroke={c.stroke}
          />
          <rect
            x="-0.00285524"
            y="0.495269"
            width="11"
            height="4"
            rx="1.5"
            transform={`matrix(${M} 185.783 52.8639)`}
            fill={c.fill1}
            stroke={c.stroke}
          />
          <rect
            x="-0.00285524"
            y="0.495269"
            width="14"
            height="4"
            rx="1.5"
            transform={`matrix(${M} 171.872 54.7648)`}
            fill={c.fill1}
            stroke={c.stroke}
          />
          <rect
            x="-0.00285524"
            y="0.495269"
            width="10"
            height="4"
            rx="1.5"
            transform={`matrix(${M} 115.363 61.8683)`}
            fill={c.fill1}
            stroke={c.stroke}
          />
          <rect
            x="-0.00285524"
            y="0.495269"
            width="8"
            height="4"
            rx="1.5"
            transform={`matrix(${M} 127.485 68.8722)`}
            fill={c.fill1}
            stroke={c.stroke}
          />
        </g>

        {/* Sidebar stroke */}
        <rect
          x="-0.00285524"
          y="0.495269"
          width="55"
          height="195"
          rx="9.5"
          transform={`matrix(${M} 182.503 19.1655)`}
          stroke={c.stroke}
          fill="none"
        />

        {/* Top-right panel shadow + body */}
        <rect
          x="-0.00285524"
          y="0.495269"
          width="245"
          height="94"
          rx="9.5"
          transform={`matrix(${M} 236.186 54.1828)`}
          fill={c.fill2}
          stroke={c.stroke}
        />
        <rect
          x="-0.00285524"
          y="0.495269"
          width="245"
          height="94"
          rx="9.5"
          transform={`matrix(${M} 236.186 50.1828)`}
          fill={c.inner}
          stroke={c.stroke}
        />

        {/* Bottom-left panel shadow + body */}
        <rect
          x="-0.00285524"
          y="0.495269"
          width="160"
          height="94"
          rx="9.5"
          transform={`matrix(${M} 148.157 103.699)`}
          fill={c.fill2}
          stroke={c.stroke}
        />
        <rect
          x="-0.00285524"
          y="0.495269"
          width="160"
          height="94"
          rx="9.5"
          transform={`matrix(${M} 148.157 99.6992)`}
          fill={c.inner}
          stroke={c.stroke}
        />

        {/* Bottom-right panel shadow + body */}
        <rect
          x="-0.00285524"
          y="0.495269"
          width="78"
          height="94"
          rx="9.5"
          transform={`matrix(${M} 292.756 187.246)`}
          fill={c.fill2}
          stroke={c.stroke}
        />
        <rect
          x="-0.00285524"
          y="0.495269"
          width="78"
          height="94"
          rx="9.5"
          transform={`matrix(${M} 292.756 183.246)`}
          fill={c.inner}
          stroke={c.stroke}
        />

        {/* Hit area */}
        <polygon
          points={HIT_AREA}
          fill="transparent"
          style={{ cursor: "pointer" }}
          onMouseEnter={onMouseEnter}
        />

        <defs>
          <clipPath id="isoSecond0">
            <rect
              width="56"
              height="196"
              rx="10"
              transform={`matrix(${M} 182.071 18.9116)`}
              fill="white"
            />
          </clipPath>
        </defs>
      </g>
    </svg>
  );
};

export default IsometricCardSecond;
