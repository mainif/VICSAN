export function Doodles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden opacity-70">
      <svg className="w-full h-full" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="doodleGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2A6F9B" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#1F6D9F" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <circle cx="220" cy="140" r="33" fill="url(#doodleGradient)">
          <animate attributeName="r" values="26;36;26" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="4s" repeatCount="indefinite" />
        </circle>

        <circle cx="910" cy="260" r="20" fill="#2A6F9B" opacity="0.28">
          <animate attributeName="cx" values="910;950;910" dur="5s" repeatCount="indefinite" />
        </circle>

        <circle cx="1450" cy="120" r="18" fill="#1F6D9F" opacity="0.25">
          <animate attributeName="cy" values="120;170;120" dur="5.3s" repeatCount="indefinite" />
        </circle>

        <path d="M 120 980 Q 330 860 520 910" stroke="#2A6F9B" strokeWidth="2.5" strokeDasharray="8 6" opacity="0.4">
          <animate attributeName="stroke-dashoffset" from="0" to="22" dur="5s" repeatCount="indefinite" />
        </path>

        <path d="M 250 720 C 400 650 480 760 620 700" stroke="#1F6D9F" strokeWidth="2" strokeDasharray="6 4" opacity="0.45">
          <animate attributeName="d" values="M 250 720 C 400 650 480 760 620 700;M 250 720 C 400 780 480 670 620 720;M 250 720 C 400 650 480 760 620 700" dur="6s" repeatCount="indefinite" />
        </path>

        <g fill="#fff" opacity="0.2">
          <rect x="1260" y="850" width="14" height="14" rx="4">
            <animate attributeName="x" values="1260;1300;1260" dur="5.5s" repeatCount="indefinite" />
          </rect>
          <rect x="176" y="520" width="10" height="10" rx="3">
            <animate attributeName="y" values="520;560;520" dur="4.8s" repeatCount="indefinite" />
          </rect>
          <rect x="1730" y="370" width="12" height="12" rx="2">
            <animate attributeName="x" values="1730;1690;1730" dur="6.2s" repeatCount="indefinite" />
          </rect>
        </g>
      </svg>
    </div>
  );
}
