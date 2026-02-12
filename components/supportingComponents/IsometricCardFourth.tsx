const M = "0.865865 0.500278 -0.871576 0.490261";
const HIT_AREA = "182.68,21.22 458.89,180.81 278.48,282.30 2.27,122.71";

/* ── Globe icon paths (large globe in top-panel status bar) ── */
const GL_RING =
  "M367.747 214.667C365.34 216.021 361.451 215.999 359.06 214.617C356.669 213.236 356.682 211.018 359.088 209.664C361.495 208.311 365.384 208.333 367.775 209.715C370.167 211.096 370.154 213.313 367.747 214.667ZM360.82 210.665C359.376 211.477 359.368 212.808 360.803 213.637C362.238 214.465 364.571 214.479 366.015 213.667C367.459 212.854 367.467 211.524 366.032 210.695C364.598 209.866 362.264 209.853 360.82 210.665Z";
const GL_ARC =
  "M366.904 210.205C367.385 209.934 368.176 209.936 368.549 210.26C368.906 210.572 369.177 210.914 369.348 211.276C369.626 211.864 369.631 212.483 369.362 213.071C369.094 213.659 368.56 214.196 367.815 214.628C367.357 214.894 366.829 215.115 366.251 215.284C365.649 215.46 364.96 215.237 364.773 214.864C364.586 214.492 364.982 214.113 365.537 213.893C365.723 213.819 365.896 213.736 366.056 213.643C366.503 213.384 366.823 213.062 366.984 212.709C367.146 212.356 367.143 211.985 366.976 211.632C366.916 211.506 366.837 211.384 366.738 211.267C366.444 210.917 366.423 210.476 366.904 210.205Z";

/* Small globe icons – shadow-layer positions */
const GS1_RING =
  "M386.91 168.606C385.525 169.385 383.286 169.372 381.91 168.577C380.534 167.782 380.541 166.506 381.926 165.727C383.312 164.948 385.55 164.96 386.926 165.756C388.303 166.551 388.295 167.827 386.91 168.606ZM382.923 166.303C382.092 166.77 382.088 167.536 382.913 168.013C383.739 168.49 385.082 168.498 385.913 168.03C386.744 167.563 386.749 166.797 385.923 166.32C385.097 165.843 383.754 165.835 382.923 166.303Z";
const GS1_ARC =
  "M386.425 166.038C386.702 165.882 387.157 165.883 387.371 166.07C387.521 166.2 387.645 166.341 387.739 166.488C387.914 166.762 387.984 167.055 387.942 167.345C387.9 167.635 387.748 167.916 387.497 168.169C387.246 168.422 386.901 168.64 386.487 168.809C386.072 168.978 385.598 169.093 385.096 169.147C384.595 169.201 384.078 169.193 383.581 169.122C383.085 169.051 382.62 168.919 382.22 168.737C382.005 168.639 381.811 168.527 381.642 168.404C381.401 168.228 381.545 167.983 381.894 167.884C382.242 167.785 382.662 167.873 382.942 168.029C382.992 168.057 383.045 168.084 383.099 168.109C383.34 168.218 383.618 168.297 383.916 168.34C384.214 168.382 384.524 168.387 384.825 168.355C385.126 168.323 385.411 168.253 385.659 168.152C385.908 168.051 386.115 167.92 386.266 167.768C386.416 167.616 386.507 167.448 386.532 167.274C386.557 167.099 386.516 166.924 386.411 166.759C386.387 166.722 386.36 166.685 386.329 166.649C386.16 166.448 386.148 166.194 386.425 166.038Z";
const GS2_RING =
  "M344.91 144.606C343.525 145.385 341.286 145.372 339.91 144.577C338.534 143.782 338.541 142.506 339.926 141.727C341.312 140.948 343.55 140.96 344.926 141.756C346.303 142.551 346.295 143.827 344.91 144.606ZM340.923 142.303C340.092 142.77 340.088 143.536 340.913 144.013C341.739 144.49 343.082 144.498 343.913 144.03C344.744 143.563 344.749 142.797 343.923 142.32C343.097 141.843 341.754 141.835 340.923 142.303Z";
const GS2_ARC =
  "M344.425 142.038C344.702 141.882 345.157 141.883 345.371 142.07C345.608 142.275 345.778 142.505 345.871 142.747C346.015 143.121 345.97 143.51 345.741 143.868C345.511 144.227 345.107 144.54 344.576 144.772C344.044 145.003 343.407 145.143 342.739 145.175C342.071 145.207 341.399 145.13 340.803 144.953C340.206 144.776 339.709 144.506 339.369 144.175C339.029 143.844 338.861 143.465 338.885 143.083C338.9 142.836 338.994 142.594 339.162 142.369C339.314 142.164 339.762 142.12 340.084 142.247C340.406 142.374 340.475 142.625 340.372 142.84C340.329 142.929 340.304 143.022 340.298 143.116C340.284 143.346 340.385 143.573 340.589 143.772C340.792 143.97 341.091 144.132 341.449 144.239C341.807 144.345 342.21 144.391 342.611 144.372C343.012 144.352 343.394 144.268 343.713 144.13C344.032 143.991 344.274 143.803 344.412 143.588C344.549 143.373 344.576 143.139 344.49 142.915C344.454 142.823 344.4 142.733 344.329 142.649C344.16 142.448 344.148 142.194 344.425 142.038Z";

/* Small globe icons – main-layer positions (y-2) */
const GM1_RING =
  "M386.91 166.606C385.525 167.385 383.287 167.372 381.91 166.577C380.534 165.782 380.542 164.506 381.927 163.727C383.312 162.948 385.551 162.96 386.927 163.756C388.303 164.551 388.296 165.827 386.91 166.606ZM382.924 164.303C382.092 164.77 382.088 165.536 382.914 166.013C383.739 166.49 385.083 166.498 385.914 166.03C386.745 165.563 386.749 164.797 385.924 164.32C385.098 163.843 383.755 163.835 382.924 164.303Z";
const GM1_ARC =
  "M386.425 164.038C386.702 163.882 387.157 163.883 387.372 164.07C387.522 164.2 387.645 164.341 387.74 164.488C387.915 164.762 387.984 165.055 387.942 165.345C387.901 165.635 387.749 165.916 387.498 166.169C387.247 166.422 386.902 166.64 386.487 166.809C386.073 166.978 385.599 167.093 385.097 167.147C384.595 167.201 384.079 167.193 383.582 167.122C383.085 167.051 382.621 166.919 382.221 166.737C382.006 166.639 381.812 166.527 381.643 166.404C381.401 166.228 381.546 165.983 381.894 165.884C382.243 165.785 382.662 165.873 382.943 166.029C382.993 166.057 383.045 166.084 383.1 166.109C383.34 166.218 383.619 166.297 383.917 166.34C384.215 166.382 384.525 166.387 384.826 166.355C385.127 166.323 385.411 166.253 385.66 166.152C385.909 166.051 386.115 165.92 386.266 165.768C386.417 165.616 386.508 165.448 386.533 165.274C386.558 165.099 386.516 164.924 386.411 164.759C386.387 164.722 386.36 164.685 386.33 164.649C386.16 164.448 386.148 164.194 386.425 164.038Z";
const GM2_RING =
  "M344.909 142.606C343.524 143.385 341.286 143.372 339.909 142.577C338.533 141.782 338.541 140.506 339.926 139.727C341.311 138.948 343.55 138.96 344.926 139.756C346.302 140.551 346.295 141.827 344.909 142.606ZM340.923 140.303C340.091 140.77 340.087 141.536 340.913 142.013C341.738 142.49 343.082 142.498 343.913 142.03C344.744 141.563 344.748 140.797 343.923 140.32C343.097 139.843 341.754 139.835 340.923 140.303Z";
const GM2_ARC =
  "M344.424 140.038C344.701 139.882 345.156 139.883 345.371 140.07C345.607 140.275 345.777 140.505 345.871 140.747C346.015 141.121 345.97 141.51 345.74 141.868C345.511 142.227 345.107 142.54 344.575 142.772C344.044 143.003 343.407 143.143 342.739 143.175C342.071 143.207 341.399 143.13 340.802 142.953C340.205 142.776 339.708 142.506 339.369 142.175C339.029 141.844 338.861 141.465 338.884 141.083C338.899 140.836 338.994 140.594 339.161 140.369C339.314 140.164 339.761 140.12 340.084 140.247C340.406 140.374 340.474 140.625 340.371 140.84C340.328 140.929 340.303 141.022 340.298 141.116C340.284 141.346 340.384 141.573 340.588 141.772C340.792 141.97 341.09 142.132 341.448 142.239C341.806 142.345 342.209 142.391 342.61 142.372C343.011 142.352 343.393 142.268 343.712 142.13C344.031 141.991 344.274 141.803 344.411 141.588C344.549 141.373 344.576 141.139 344.489 140.915C344.454 140.823 344.4 140.733 344.329 140.649C344.159 140.448 344.147 140.194 344.424 140.038Z";

/* Arrow path (bottom-panel status bar icon) */
const ARROW = "M273.244 260.537L272.903 262.234L279.193 261.893";

/* ── Badge position data ── */
type B = {
  bg: [number, number];
  ic: [number, number];
  st: [number, number];
  a: boolean;
};

/* Top-right panel badges (shadow layer) */
const TRS: B[] = [
  {
    bg: [197.586, 53.6777],
    ic: [198, 56.9032],
    st: [198.017, 53.9316],
    a: true,
  },
  {
    bg: [239.148, 77.691],
    ic: [239.562, 80.9165],
    st: [239.579, 77.9449],
    a: true,
  },
  {
    bg: [280.709, 101.704],
    ic: [281.123, 104.93],
    st: [281.141, 101.958],
    a: true,
  },
  {
    bg: [322.271, 125.718],
    ic: [322.685, 128.943],
    st: [322.702, 125.972],
    a: false,
  },
  {
    bg: [363.832, 149.731],
    ic: [364.246, 152.956],
    st: [364.264, 149.985],
    a: false,
  },
  {
    bg: [218.23, 89.4573],
    ic: [218.644, 92.6827],
    st: [218.661, 89.7112],
    a: true,
  },
];
/* Top-right panel badges (main layer, y-2) */
const TRM: B[] = [
  {
    bg: [197.586, 51.6779],
    ic: [198, 54.9033],
    st: [198.017, 51.9317],
    a: true,
  },
  {
    bg: [239.147, 75.691],
    ic: [239.562, 78.9165],
    st: [239.579, 75.9449],
    a: true,
  },
  {
    bg: [280.709, 99.7042],
    ic: [281.123, 102.93],
    st: [281.14, 99.9581],
    a: true,
  },
  {
    bg: [322.271, 123.718],
    ic: [322.685, 126.943],
    st: [322.702, 123.972],
    a: false,
  },
  {
    bg: [363.832, 147.731],
    ic: [364.246, 150.957],
    st: [364.263, 147.985],
    a: false,
  },
  {
    bg: [218.229, 87.4572],
    ic: [218.644, 90.6826],
    st: [218.661, 87.711],
    a: true,
  },
];
/* Simplified badge stroke positions (top-right, main layer only) */
const TRS_POS: [number, number][] = [
  [198.017, 53.9316],
  [239.579, 77.9449],
  [281.141, 101.958],
  [322.702, 125.972],
  [364.264, 149.985],
  [218.661, 89.711],
];
/* Top-right panel connector lines */
const TRH: [number, number][] = [
  [223.909, 74.415],
  [265.47, 98.4283],
  [307.032, 122.442],
  [348.593, 146.455],
];
const TRV: [number, number][] = [[243.841, 92.329]];

/* Bottom-left panel badges (shadow layer) */
const BLS: B[] = [
  {
    bg: [109.557, 103.194],
    ic: [109.971, 106.419],
    st: [109.988, 103.448],
    a: true,
  },
  {
    bg: [151.118, 127.207],
    ic: [151.533, 130.433],
    st: [151.55, 127.461],
    a: true,
  },
  {
    bg: [192.68, 151.22],
    ic: [193.094, 154.446],
    st: [193.111, 151.474],
    a: true,
  },
  {
    bg: [234.241, 175.234],
    ic: [234.656, 178.459],
    st: [234.673, 175.488],
    a: true,
  },
  {
    bg: [254.885, 211.013],
    ic: [255.299, 214.239],
    st: [255.316, 211.267],
    a: true,
  },
  {
    bg: [213.324, 187],
    ic: [213.738, 190.226],
    st: [213.755, 187.254],
    a: true,
  },
  {
    bg: [130.201, 138.973],
    ic: [130.615, 142.199],
    st: [130.632, 139.227],
    a: true,
  },
];
/* Bottom-left panel badges (main layer, y-2) */
const BLM: B[] = [
  {
    bg: [109.557, 101.194],
    ic: [109.971, 104.419],
    st: [109.988, 101.448],
    a: true,
  },
  {
    bg: [151.118, 125.207],
    ic: [151.532, 128.433],
    st: [151.549, 125.461],
    a: true,
  },
  {
    bg: [192.68, 149.22],
    ic: [193.094, 152.446],
    st: [193.111, 149.474],
    a: true,
  },
  {
    bg: [234.241, 173.234],
    ic: [234.655, 176.459],
    st: [234.672, 173.488],
    a: true,
  },
  {
    bg: [254.885, 209.013],
    ic: [255.299, 212.239],
    st: [255.316, 209.267],
    a: true,
  },
  {
    bg: [213.323, 185],
    ic: [213.737, 188.226],
    st: [213.755, 185.254],
    a: true,
  },
  {
    bg: [130.2, 136.973],
    ic: [130.614, 140.199],
    st: [130.631, 137.227],
    a: true,
  },
];
/* Simplified badge stroke positions (bottom-left, main layer only) */
const BLS_POS: [number, number][] = [
  [109.988, 103.448],
  [151.55, 127.461],
  [193.111, 151.474],
  [234.673, 175.488],
  [255.316, 211.267],
  [213.755, 187.254],
  [130.632, 139.227],
];
/* Bottom-left panel connector lines */
const BLH: [number, number][] = [
  [135.879, 123.931],
  [177.441, 147.944],
  [219.002, 171.958],
  [239.646, 207.737],
];
const BLV: [number, number][] = [
  [238.935, 189.872],
  [155.812, 141.845],
];

/* ── Component ── */
const IsometricCardFourth = ({
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
        bg: "#dbeafe",
        inner: "#eff6ff",
        fill1: "#bfdbfe",
        fill2: "#93c5fd",
        fill3: "#60a5fa",
        accent: "#2563EB",
      }
    : {
        shadow: "#e4e4e7",
        stroke: "#a1a1aa",
        bg: isFaded ? "#f4f4f5" : "#fafafa",
        inner: "#f4f4f5",
        fill1: "#e4e4e7",
        fill2: "#d4d4d8",
        fill3: "#a1a1aa",
        accent: "#737373",
      };

  /* helpers */
  const t = (tx: number, ty: number) => `matrix(${M} ${tx} ${ty})`;

  const badge = (clipId: string, b: B) => (
    <>
      <g clipPath={`url(#${clipId})`}>
        <rect
          width="36"
          height="12"
          rx="4"
          transform={t(b.bg[0], b.bg[1])}
          fill={c.inner}
        />
        <rect
          x="-0.00285524"
          y="0.495269"
          width="5"
          height="5"
          rx="1.5"
          transform={t(b.ic[0], b.ic[1])}
          fill={b.a ? c.fill3 : c.fill1}
          stroke={c.stroke}
        />
      </g>
      <rect
        x="-0.00285524"
        y="0.495269"
        width="35"
        height="11"
        rx="3.5"
        transform={t(b.st[0], b.st[1])}
        stroke={c.stroke}
        fill="none"
      />
    </>
  );

  const simpleBadge = (pos: [number, number]) => (
    <>
      <rect
        x="-0.00285524"
        y="0.495269"
        width="35"
        height="11"
        rx="3.5"
        transform={t(pos[0], pos[1])}
        fill={c.fill2}
      />
      <rect
        x="-0.00285524"
        y="0.495269"
        width="35"
        height="11"
        rx="3.5"
        transform={t(pos[0], pos[1])}
        stroke={c.stroke}
      />
    </>
  );

  const hline = (p: [number, number]) => (
    <rect width="12" height="1" transform={t(p[0], p[1])} fill={c.stroke} />
  );

  const vline = (p: [number, number]) => (
    <rect width="1" height="12" transform={t(p[0], p[1])} fill={c.stroke} />
  );

  const globe = (ring: string, arc: string) => (
    <>
      <path d={ring} fill={c.fill3} />
      <path d={arc} fill={c.stroke} />
    </>
  );

  /* Status bar content shared by both layers in the TOP-RIGHT panel */
  const topStatusBar = (clipId: string, barFill: string) => (
    <>
      <g clipPath={`url(#${clipId})`}>
        <rect
          width="308"
          height="20"
          transform={t(116.703, 59.6813)}
          fill={barFill}
        />
        {globe(GL_RING, GL_ARC)}
        <rect
          x="-0.00285524"
          y="0.495269"
          width="23"
          height="4"
          rx="1.5"
          transform={t(335.723, 193.684)}
          fill={c.fill1}
          stroke={c.stroke}
        />
        <rect
          x="-0.00285524"
          y="0.495269"
          width="15"
          height="4"
          rx="1.5"
          transform={t(316.673, 182.678)}
          fill={c.fill1}
          stroke={c.stroke}
        />
      </g>
      <rect
        x="-0.00285524"
        y="0.495269"
        width="307"
        height="19"
        transform={t(117.134, 59.9352)}
        stroke={c.stroke}
        fill="none"
      />
    </>
  );

  /* Status bar content shared by both layers in the BOTTOM-LEFT panel */
  const bottomStatusBar = (
    statusClip: string,
    arrowClip: string,
    barFill: string
  ) => (
    <>
      <g clipPath={`url(#${statusClip})`}>
        <rect
          width="308"
          height="20"
          transform={t(28.6738, 109.197)}
          fill={barFill}
        />
        <circle
          cx="5"
          cy="5"
          r="5"
          transform={t(275.417, 256.729)}
          fill={c.fill3}
        />
        <g clipPath={`url(#${arrowClip})`}>
          <path
            d={ARROW}
            stroke={c.accent}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <rect
          x="-0.00285524"
          y="0.495269"
          width="19"
          height="4"
          rx="1.5"
          transform={t(251.157, 245.202)}
          fill={c.fill1}
          stroke={c.stroke}
        />
      </g>
      <rect
        x="-0.00285524"
        y="0.495269"
        width="307"
        height="19"
        transform={t(29.1051, 109.451)}
        stroke={c.stroke}
        fill="none"
      />
    </>
  );

  return (
    <svg
      width="460"
      height="300"
      viewBox="0 0 460 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ pointerEvents: "none" }}
    >
      <g style={{ pointerEvents: "auto" }}>
        {/* ═══ SHADOW LAYER (clipped, card at y+4) ═══ */}
        <g clipPath="url(#iF0)">
          <rect
            width="320"
            height="208"
            rx="16"
            transform={t(182.105, 20.9684)}
            fill={c.shadow}
          />

          {/* Top-right panel shadow */}
          <rect
            x="-0.00285524"
            y="0.495269"
            width="307"
            height="94"
            rx="9.5"
            transform={t(182.502, 27.1655)}
            fill={c.fill2}
            stroke={c.stroke}
          />

          {/* Top-right panel content */}
          <g clipPath="url(#iF1)">
            <rect
              width="308"
              height="95"
              rx="10"
              transform={t(182.071, 22.9117)}
              fill={c.fill1}
            />
            {topStatusBar("iF2", c.fill1)}
            {badge("iF3", TRS[0])}
            {TRH.map((p, i) => (
              <g key={`sh-${i}`}>{hline(p)}</g>
            ))}
            {TRS.slice(1).map((b, i) => (
              <g key={`stb-${i}`}>{badge(`iF${4 + i}`, b)}</g>
            ))}
            {TRV.map((p, i) => (
              <g key={`sv-${i}`}>{vline(p)}</g>
            ))}
            {globe(GS1_RING, GS1_ARC)}
            {globe(GS2_RING, GS2_ARC)}
          </g>
          <rect
            x="-0.00285524"
            y="0.495269"
            width="307"
            height="94"
            rx="9.5"
            transform={t(182.503, 23.1656)}
            stroke={c.stroke}
            fill="none"
          />

          {/* Bottom-left panel shadow */}
          <rect
            x="-0.00285524"
            y="0.495269"
            width="307"
            height="94"
            rx="9.5"
            transform={t(94.4734, 76.6819)}
            fill={c.fill2}
            stroke={c.stroke}
          />

          {/* Bottom-left panel content */}
          <g clipPath="url(#iF9)">
            <rect
              width="308"
              height="95"
              rx="10"
              transform={t(94.042, 72.4279)}
              fill={c.fill1}
            />
            {bottomStatusBar("iF10", "iF11", c.fill1)}
            {badge("iF12", BLS[0])}
            {BLH.map((p, i) => (
              <g key={`bsh-${i}`}>{hline(p)}</g>
            ))}
            {BLS.slice(1).map((b, i) => (
              <g key={`bsb-${i}`}>{badge(`iF${13 + i}`, b)}</g>
            ))}
            {BLV.map((p, i) => (
              <g key={`bsv-${i}`}>{vline(p)}</g>
            ))}
          </g>
          <rect
            x="-0.00285524"
            y="0.495269"
            width="307"
            height="94"
            rx="9.5"
            transform={t(94.4733, 72.6817)}
            stroke={c.stroke}
            fill="none"
          />
        </g>

        {/* Shadow card outer stroke */}
        <rect
          x="-0.00285524"
          y="0.495269"
          width="319"
          height="207"
          rx="15.5"
          transform={t(182.537, 21.2223)}
          stroke={c.stroke}
          fill="none"
        />

        {/* ═══ MAIN LAYER (clipped, card at y+0) ═══ */}
        <g clipPath="url(#iF19)">
          <rect
            width="320"
            height="208"
            rx="16"
            transform={t(182.105, 16.9684)}
            fill={c.bg}
          />

          {/* Top-right panel shadow */}
          <rect
            x="-0.00285524"
            y="0.495269"
            width="307"
            height="94"
            rx="9.5"
            transform={t(182.502, 23.1655)}
            fill={c.fill2}
            stroke={c.stroke}
          />

          {/* Top-right panel content */}
          <g clipPath="url(#iF20)">
            <rect
              width="308"
              height="95"
              rx="10"
              transform={t(182.071, 22.9117)}
              fill={c.fill1}
            />
            {topStatusBar("iF21", c.bg)}
            {/* Simplified under-badges */}
            {TRS_POS.map((p, i) => (
              <g key={`mts-${i}`}>{simpleBadge(p)}</g>
            ))}
            {/* Connector lines */}
            {TRH.map((p, i) => (
              <g key={`mth-${i}`}>{hline(p)}</g>
            ))}
            {TRV.map((p, i) => (
              <g key={`mtv-${i}`}>{vline(p)}</g>
            ))}
            {/* Globe icons at y-2 */}
            {globe(GM1_RING, GM1_ARC)}
            {globe(GM2_RING, GM2_ARC)}
            {/* Detailed badges at y-2 */}
            {TRM.map((b, i) => (
              <g key={`mtb-${i}`}>{badge(`iF${22 + i}`, b)}</g>
            ))}
          </g>
          <rect
            x="-0.00285524"
            y="0.495269"
            width="307"
            height="94"
            rx="9.5"
            transform={t(182.503, 23.1656)}
            stroke={c.stroke}
            fill="none"
          />

          {/* Bottom-left panel shadow */}
          <rect
            x="-0.00285524"
            y="0.495269"
            width="307"
            height="94"
            rx="9.5"
            transform={t(94.4734, 72.6819)}
            fill={c.fill2}
            stroke={c.stroke}
          />

          {/* Bottom-left panel content */}
          <g clipPath="url(#iF28)">
            <rect
              width="308"
              height="95"
              rx="10"
              transform={t(94.042, 72.4279)}
              fill={c.fill1}
            />
            {bottomStatusBar("iF29", "iF30", c.bg)}
            {/* Simplified under-badges */}
            {BLS_POS.map((p, i) => (
              <g key={`mbs-${i}`}>{simpleBadge(p)}</g>
            ))}
            {/* Connector lines */}
            {BLH.map((p, i) => (
              <g key={`mbh-${i}`}>{hline(p)}</g>
            ))}
            {BLV.map((p, i) => (
              <g key={`mbv-${i}`}>{vline(p)}</g>
            ))}
            {/* Detailed badges at y-2 */}
            {BLM.map((b, i) => (
              <g key={`mbb-${i}`}>{badge(`iF${31 + i}`, b)}</g>
            ))}
          </g>
          <rect
            x="-0.00285524"
            y="0.495269"
            width="307"
            height="94"
            rx="9.5"
            transform={t(94.4733, 72.6817)}
            stroke={c.stroke}
            fill="none"
          />
        </g>

        {/* Main card outer stroke */}
        <rect
          x="-0.00285524"
          y="0.495269"
          width="319"
          height="207"
          rx="15.5"
          transform={t(182.537, 17.2223)}
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
          {/* Shadow layer clips */}
          <clipPath id="iF0">
            <rect
              width="320"
              height="208"
              rx="16"
              transform={t(182.105, 20.9684)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF1">
            <rect
              width="308"
              height="95"
              rx="10"
              transform={t(182.071, 22.9117)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF2">
            <rect
              width="308"
              height="20"
              transform={t(116.703, 59.6813)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF3">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(197.586, 53.6777)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF4">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(239.148, 77.691)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF5">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(280.709, 101.704)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF6">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(322.271, 125.718)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF7">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(363.832, 149.731)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF8">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(218.23, 89.4573)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF9">
            <rect
              width="308"
              height="95"
              rx="10"
              transform={t(94.042, 72.4279)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF10">
            <rect
              width="308"
              height="20"
              transform={t(28.6738, 109.197)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF11">
            <rect
              width="8"
              height="8"
              transform={t(275.411, 257.72)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF12">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(109.557, 103.194)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF13">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(151.118, 127.207)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF14">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(192.68, 151.22)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF15">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(234.241, 175.234)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF16">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(254.885, 211.013)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF17">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(213.324, 187)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF18">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(130.201, 138.973)}
              fill="white"
            />
          </clipPath>

          {/* Main layer clips */}
          <clipPath id="iF19">
            <rect
              width="320"
              height="208"
              rx="16"
              transform={t(182.105, 16.9684)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF20">
            <rect
              width="308"
              height="95"
              rx="10"
              transform={t(182.071, 22.9117)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF21">
            <rect
              width="308"
              height="20"
              transform={t(116.703, 59.6813)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF22">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(197.586, 51.6779)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF23">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(239.147, 75.691)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF24">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(280.709, 99.7042)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF25">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(322.271, 123.718)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF26">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(363.832, 147.731)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF27">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(218.229, 87.4572)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF28">
            <rect
              width="308"
              height="95"
              rx="10"
              transform={t(94.042, 72.4279)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF29">
            <rect
              width="308"
              height="20"
              transform={t(28.6738, 109.197)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF30">
            <rect
              width="8"
              height="8"
              transform={t(275.411, 257.72)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF31">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(109.557, 101.194)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF32">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(151.118, 125.207)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF33">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(192.68, 149.22)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF34">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(234.241, 173.234)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF35">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(254.885, 209.013)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF36">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(213.323, 185)}
              fill="white"
            />
          </clipPath>
          <clipPath id="iF37">
            <rect
              width="36"
              height="12"
              rx="4"
              transform={t(130.2, 136.973)}
              fill="white"
            />
          </clipPath>
        </defs>
      </g>
    </svg>
  );
};

export default IsometricCardFourth;
