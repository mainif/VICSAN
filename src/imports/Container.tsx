import clsx from "clsx";
import svgPaths from "./svg-3z57lik8n8";
type LinkTextProps = {
  text: string;
  additionalClassNames?: string;
};

function LinkText({ text, additionalClassNames = "" }: LinkTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex h-[17.5px] items-start top-[17.5px]", additionalClassNames)}>
      <p className="font-['Poppins:Bold',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#2A6F9B] text-[12.25px] tracking-[1.225px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <div className="absolute h-[73.5px] left-0 top-0 w-[812.047px]" data-name="Container">
        <div className="absolute h-[104.391px] left-[-0.01px] top-[-30.89px] w-[812.047px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 812.047 104.391">
            <g clipPath="url(#clip0_1_1305)" id="Icon">
              <path d={svgPaths.p151a2700} fill="var(--fill-0, white)" id="Vector" />
            </g>
            <defs>
              <clipPath id="clip0_1_1305">
                <rect fill="white" height="104.391" width="812.047" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="absolute h-[73.5px] left-0 top-0 w-[812.047px]" data-name="Container">
          <LinkText text="SERVICIOS" additionalClassNames="left-[149.73px] w-[75.844px]" />
          <div className="absolute content-stretch flex h-[21px] items-start left-[267.58px] top-[15.75px] w-[60.75px]" data-name="Link">
            <p className="font-['Poppins:Bold',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#2A6F9B] text-[14px] tracking-[1.4px] whitespace-nowrap">EQUIPO</p>
          </div>
          <div className="absolute content-stretch flex h-[24.5px] items-start left-[370.33px] top-[14px] w-[133.984px]" data-name="Link">
            <p className="font-['Poppins:Bold',sans-serif] leading-[24.5px] not-italic relative shrink-0 text-[#2A6F9B] text-[15.75px] tracking-[1.575px] whitespace-nowrap">METODOLOGÍA</p>
          </div>
          <LinkText text="QUIÉNES SOMOS" additionalClassNames="left-[546.31px] w-[116px]" />
        </div>
      </div>
    </div>
  );
}