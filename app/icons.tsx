export function BackIcon() {
  return (
    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" aria-hidden>
      <path d="M10 2 2 10l8 8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={(size * 7) / 12} height={size} viewBox="0 0 7 12" fill="none" aria-hidden>
      <path d="m1.5 1.5 4 4.5-4 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WonIcon() {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" aria-hidden>
      <path
        d="M1.5 1.5 5.5 14.5 10 3l4.5 11.5 4-13"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M1 6.5h18M1 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function DollarIcon() {
  return (
    <svg width="14" height="22" viewBox="0 0 14 22" fill="none" aria-hidden>
      <path
        d="M12 6.2C11.4 4.4 9.6 3.4 7 3.4 4.1 3.4 2.2 4.8 2.2 6.8c0 4.6 9.8 2.5 9.8 8 0 2.2-2 3.8-5 3.8-2.8 0-4.6-1.1-5.2-3.1M7 1v2.4M7 18.6V21"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function UsFlagIcon() {
  const stripes = [0, 2, 4, 6].map((i) => (
    <rect key={i} x="0" y={(i * 17) / 7} width="22" height={17 / 7} fill="#f04452" />
  ));
  return (
    <svg width="22" height="17" viewBox="0 0 22 17" aria-hidden>
      <defs>
        <clipPath id="flag-clip">
          <rect width="22" height="17" rx="1.5" />
        </clipPath>
      </defs>
      <g clipPath="url(#flag-clip)">
        <rect width="22" height="17" fill="#fff" />
        {stripes}
        <rect width="10" height={(17 * 4) / 7} fill="#3c6ff0" />
      </g>
    </svg>
  );
}

export function HelpIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="7.1" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M6.2 6.2c0-1 .8-1.7 1.8-1.7s1.8.7 1.8 1.6c0 1.3-1.8 1.4-1.8 2.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="8" cy="11.4" r=".9" fill="currentColor" />
    </svg>
  );
}

export function CheckCircleIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" aria-hidden>
      <circle cx="7.5" cy="7.5" r="7.5" fill="currentColor" />
      <path d="m4.3 7.7 2.2 2.1 4.2-4.4" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DonutIcon() {
  // Ring segments as stroke dashes on a circle of circumference 2πr.
  const r = 8;
  const c = 2 * Math.PI * r;
  const segments = [
    { color: "#3485fa", length: 0.66 },
    { color: "#2fbf71", length: 0.17 },
    { color: "#f5b014", length: 0.17 },
  ];
  let offset = 0;
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
      <g transform="rotate(-90 11 11)">
        {segments.map(({ color, length }) => {
          const el = (
            <circle
              key={color}
              cx="11"
              cy="11"
              r={r}
              fill="none"
              stroke={color}
              strokeWidth="5.5"
              strokeDasharray={`${length * c} ${c}`}
              strokeDashoffset={-offset * c}
            />
          );
          offset += length;
          return el;
        })}
      </g>
    </svg>
  );
}

export function ListIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" aria-hidden>
      <rect width="13" height="13" rx="2.5" fill="currentColor" />
      <path d="M3.5 4h6M3.5 6.5h6M3.5 9h6" stroke="#2c2c35" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// Month-trend sparkline traced from the reference screenshot.
const sparkline =
  "M0 30 L14 30 L26 48 L38 37 L50 37 L60 23 L74 20 L87 9 L96 24 L106 38 L128 36 L138 45 L148 58 L158 68 L172 94 L186 93 L196 87 L203 92 L210 84 L222 120 L248 121";

export function Sparkline() {
  return (
    <svg width="88" height="46" viewBox="0 0 248 128" aria-hidden>
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3485fa" stopOpacity="0.28" />
          <stop offset="1" stopColor="#3485fa" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 32H248" stroke="#62626d" strokeWidth="2.5" strokeDasharray="9 9" />
      <path d={`${sparkline} L248 128 L0 128 Z`} fill="url(#spark-fill)" />
      <path d={sparkline} fill="none" stroke="#3485fa" strokeWidth="4" strokeLinejoin="round" />
    </svg>
  );
}
