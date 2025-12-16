import svgPaths from "./svg-k6fnla9a88";
import clsx from "clsx";

const imgImageBlindingLights =
  "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png";
const imgImageLevitating =
  "https://upload.wikimedia.org/wikipedia/en/2/26/Dua_Lipa_-_Levitating.png";
const imgImageStarboy =
  "https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png";
const imgImageGood4U =
  "https://upload.wikimedia.org/wikipedia/en/6/6a/Olivia_Rodrigo_-_Good_4_U.png";
const imgImageAsItWas =
  "https://upload.wikimedia.org/wikipedia/en/b/b2/Harry_Styles_-_As_It_Was.png";

function Container({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[51.957px] min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.989px] items-start relative size-full">
        {children}
      </div>
    </div>
  );
}
type CosmicCardProps = {
  additionalClassNames?: string;
};

function CosmicCard({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<CosmicCardProps>) {
  return (
    <div
      className={clsx(
        "absolute bg-gradient-to-b from-[#111a33] left-0 rounded-[20px] to-[#0e1530] w-[337.34px]",
        additionalClassNames
      )}
    >
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[1.256px] pt-[25.243px] px-[25.243px] relative rounded-[inherit] size-full">
        {children}
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#223056] border-[1.256px] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_12px_32px_0px_rgba(0,0,0,0.5)]"
      />
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div
      className={clsx("h-[19.982px] relative shrink-0", additionalClassNames)}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        {children}
      </div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div
      className={clsx("h-[23.986px] relative shrink-0", additionalClassNames)}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        {children}
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[63.931px] min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        {children}
      </div>
    </div>
  );
}
type ContainerText6Props = {
  text: string;
};

function ContainerText6({ text }: ContainerText6Props) {
  return (
    <div className="absolute content-stretch flex h-[15.978px] items-start left-0 top-[47.95px] w-[190.89px]">
      <p
        className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#b7c0d9] text-[12px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {text}
      </p>
    </div>
  );
}
type TextText1Props = {
  text: string;
};

function TextText1({ text }: TextText1Props) {
  return (
    <Wrapper2 additionalClassNames="w-[26.558px]">
      <p
        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[-2px] w-[27px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {text}
      </p>
    </Wrapper2>
  );
}
type ContainerText5Props = {
  text: string;
  additionalClassNames?: string;
};

function ContainerText5({
  text,
  additionalClassNames = "",
}: ContainerText5Props) {
  return (
    <div
      className={clsx(
        "relative rounded-[4.21525e+07px] shrink-0 size-[31.995px]",
        additionalClassNames
      )}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p
          className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
type ContainerText4Props = {
  text: string;
};

function ContainerText4({ text }: ContainerText4Props) {
  return (
    <div className="h-[19.982px] relative shrink-0 w-full">
      <p
        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-[68.07px] text-[#b7c0d9] text-[14px] text-center top-[-2px] translate-x-[-50%] w-[95px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {text}
      </p>
    </div>
  );
}
type ContainerText3Props = {
  text: string;
};

function ContainerText3({ text }: ContainerText3Props) {
  return (
    <div className="h-[19.982px] relative shrink-0 w-full">
      <p
        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-[68.05px] text-[#b7c0d9] text-[14px] text-center top-[-2px] translate-x-[-50%] w-[95px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {text}
      </p>
    </div>
  );
}
type ContainerText2Props = {
  text: string;
  additionalClassNames?: string;
};

function ContainerText2({
  text,
  additionalClassNames = "",
}: ContainerText2Props) {
  return (
    <div
      className={clsx(
        "absolute bg-gradient-to-b content-stretch flex from-[#00eeff] items-center justify-center rounded-[4.21525e+07px] size-[31.995px] to-[#7d5cff] top-[-7.99px]",
        additionalClassNames
      )}
    >
      <p
        className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {text}
      </p>
    </div>
  );
}
type ContainerText1Props = {
  text: string;
  additionalClassNames?: string;
};

function ContainerText1({
  text,
  additionalClassNames = "",
}: ContainerText1Props) {
  return (
    <div
      className={clsx(
        "absolute content-stretch flex items-center justify-center left-[-7.99px] rounded-[4.21525e+07px] size-[23.986px] top-[-7.99px]",
        additionalClassNames
      )}
    >
      <p
        className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {text}
      </p>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="absolute content-stretch flex h-[19.982px] items-start left-0 overflow-clip top-[23.99px] w-[190.89px]">
      <p
        className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#b7c0d9] text-[14px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {text}
      </p>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="content-stretch flex h-[19.982px] items-start overflow-clip relative shrink-0 w-full">
      <p
        className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#b7c0d9] text-[14px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {text}
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[23.986px] relative shrink-0 w-[80.164px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.989px] items-center relative size-full">
        <TextText text="View All" />
        <Icon />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[15.997px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon">
          <path
            d="M3.3328 7.99873H12.6647"
            id="Vector"
            stroke="var(--stroke-0, #00EEFF)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33312"
          />
          <path
            d={svgPaths.p31f50780}
            id="Vector_2"
            stroke="var(--stroke-0, #00EEFF)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33312"
          />
        </g>
      </svg>
    </div>
  );
}
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return (
    <Wrapper1 additionalClassNames="w-[56.178px]">
      <p
        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#0ef] text-[16px] text-nowrap top-[-0.74px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {text}
      </p>
    </Wrapper1>
  );
}
type HeadingTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HeadingText({ text, additionalClassNames = "" }: HeadingTextProps) {
  return (
    <div
      className={clsx("h-[41.593px] relative shrink-0", additionalClassNames)}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p
          className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[41.6px] relative shrink-0 text-[32px] text-nowrap text-white"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="absolute h-[23.986px] left-0 overflow-clip top-0 w-[190.89px]">
      <p
        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-0.74px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {text}
      </p>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div
      className={clsx(
        "h-[23.986px] relative shrink-0 w-full",
        additionalClassNames
      )}
    >
      <p
        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-0.74px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {text}
      </p>
    </div>
  );
}
type ButtonTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ButtonText({ text, additionalClassNames = "" }: ButtonTextProps) {
  return (
    <div
      className={clsx(
        "bg-[rgba(28,34,51,0.1)] h-[54.45px] relative rounded-[12px] shrink-0",
        additionalClassNames
      )}
    >
      <div
        aria-hidden="true"
        className="absolute border-[#223056] border-[1.256px] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p
          className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-[13.25px] text-[#e6e9f2] text-[14px] top-[5.24px] w-[48px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default function CosmicSpotifyStatsApp() {
  return (
    <div
      className="bg-[#060016] relative size-full"
      data-name="Cosmic Spotify Stats App"
    >
      <div
        className="absolute h-[2635.752px] left-[16px] top-[16px] w-[337.34px]"
        data-name="Dashboard"
      >
        <div
          className="absolute content-stretch flex flex-col gap-[23.986px] h-[190.399px] items-start left-0 top-0 w-[337.34px]"
          data-name="Container"
        >
          <div
            className="h-[47.992px] relative shrink-0 w-full"
            data-name="Heading 1"
          >
            <p
              className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[48px] left-0 text-[40px] text-nowrap text-white top-[-3.51px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Your Music Stats
            </p>
          </div>
          <div
            className="content-stretch flex flex-col h-[118.42px] items-start justify-between relative shrink-0 w-full"
            data-name="Container"
          >
            <div
              className="h-[54.45px] relative shrink-0 w-[337.34px]"
              data-name="PeriodChips"
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.989px] items-start relative size-full">
                <div
                  className="bg-[rgba(0,238,255,0.12)] h-[54.45px] relative rounded-[12px] shrink-0 w-[100.323px]"
                  data-name="Button"
                >
                  <div
                    aria-hidden="true"
                    className="absolute border-[#0ef] border-[1.256px] border-solid inset-0 pointer-events-none rounded-[12px]"
                  />
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p
                      className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-[13px] text-[#0ef] text-[14px] top-[5.02px] w-[53px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      Last 4 Weeks
                    </p>
                  </div>
                </div>
                <ButtonText
                  text="Last 6 Months"
                  additionalClassNames="w-[107.016px]"
                />
                <ButtonText
                  text="Last 12 Months"
                  additionalClassNames="w-[114.004px]"
                />
              </div>
            </div>
            <div
              className="bg-[#7d5cff] h-[47.973px] relative rounded-[10px] shrink-0 w-[113.611px]"
              data-name="SlotClone"
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.989px] items-center justify-center relative size-full">
                <div
                  className="relative shrink-0 size-[19.982px]"
                  data-name="Icon"
                >
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 20 20"
                  >
                    <g id="Icon">
                      <path
                        d={svgPaths.p1b432500}
                        id="Vector"
                        stroke="var(--stroke-0, white)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.66517"
                      />
                      <path
                        d={svgPaths.p3818c400}
                        id="Vector_2"
                        stroke="var(--stroke-0, white)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.66517"
                      />
                      <path
                        d={svgPaths.p1a71b900}
                        id="Vector_3"
                        stroke="var(--stroke-0, white)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.66517"
                      />
                    </g>
                  </svg>
                </div>
                <Wrapper1 additionalClassNames="w-[37.668px]">
                  <p
                    className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-0.74px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Share
                  </p>
                </Wrapper1>
              </div>
            </div>
          </div>
        </div>
        <CosmicCard additionalClassNames="h-[728.483px] top-[222.39px]">
          <div
            className="content-stretch flex flex-col gap-[23.986px] h-[677.998px] items-start relative shrink-0 w-full"
            data-name="Container"
          >
            <div
              className="content-stretch flex h-[41.593px] items-center justify-between relative shrink-0 w-full"
              data-name="Dashboard"
            >
              <HeadingText
                text="Top Tracks"
                additionalClassNames="w-[150.965px]"
              />
              <Button />
            </div>
            <div
              className="h-[612.418px] relative shrink-0 w-full"
              data-name="Dashboard"
            >
              <div
                className="absolute border-[0px_0px_1.256px] border-[rgba(28,34,51,0.16)] border-solid h-[113.14px] left-0 rounded-[10px] top-0 w-[286.855px]"
                data-name="Button"
              >
                <div
                  className="absolute content-stretch flex flex-col gap-[3.985px] h-[87.898px] items-start left-[83.97px] top-[11.99px] w-[190.89px]"
                  data-name="Container"
                >
                  <Text
                    text="Blinding Lights"
                    additionalClassNames="overflow-clip"
                  />
                  <ContainerText text="The Weeknd" />
                  <div
                    className="h-[31.956px] relative shrink-0 w-full"
                    data-name="PlaycountBar"
                  >
                    <div
                      className="absolute h-[19.982px] left-0 top-0 w-[57.925px]"
                      data-name="Text"
                    >
                      <p
                        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-[-0.21px] text-[#b7c0d9] text-[14px] top-[-2.14px] w-[68px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        342 plays
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute left-[11.99px] size-[55.981px] top-[11.99px]"
                  data-name="Container"
                >
                  <div
                    className="absolute left-0 rounded-[4px] size-[55.981px] top-0"
                    data-name="Image (Blinding Lights)"
                  >
                    <img
                      alt=""
                      className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full"
                      src={imgImageBlindingLights}
                    />
                  </div>
                  <ContainerText1
                    text="1"
                    additionalClassNames="bg-gradient-to-b from-[#00eeff] to-[#7d5cff]"
                  />
                </div>
              </div>
              <div
                className="absolute border-[0px_0px_1.256px] border-[rgba(28,34,51,0.16)] border-solid h-[113.14px] left-0 rounded-[10px] top-[125.13px] w-[286.855px]"
                data-name="Button"
              >
                <div
                  className="absolute content-stretch flex flex-col gap-[3.985px] h-[87.898px] items-start left-[83.97px] top-[11.99px] w-[190.89px]"
                  data-name="Container"
                >
                  <Text
                    text="Levitating"
                    additionalClassNames="overflow-clip"
                  />
                  <ContainerText text="Dua Lipa" />
                  <div
                    className="h-[31.956px] relative shrink-0 w-full"
                    data-name="PlaycountBar"
                  >
                    <div
                      className="absolute h-[19.982px] left-0 top-0 w-[57.925px]"
                      data-name="Text"
                    >
                      <p
                        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-[-0.21px] text-[#b7c0d9] text-[14px] top-[-2.28px] w-[78px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        298 plays
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute left-[11.99px] size-[55.981px] top-[11.99px]"
                  data-name="Container"
                >
                  <div
                    className="absolute left-0 rounded-[4px] size-[55.981px] top-0"
                    data-name="Image (Levitating)"
                  >
                    <img
                      alt=""
                      className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full"
                      src={imgImageLevitating}
                    />
                  </div>
                  <ContainerText1
                    text="2"
                    additionalClassNames="bg-gradient-to-b from-[#00eeff] to-[#7d5cff]"
                  />
                </div>
              </div>
              <div
                className="absolute border-[0px_0px_1.256px] border-[rgba(28,34,51,0.16)] border-solid h-[113.14px] left-0 rounded-[10px] top-[250.27px] w-[286.855px]"
                data-name="Button"
              >
                <div
                  className="absolute content-stretch flex flex-col gap-[3.985px] h-[87.898px] items-start left-[83.97px] top-[11.99px] w-[190.89px]"
                  data-name="Container"
                >
                  <Text text="Starboy" additionalClassNames="overflow-clip" />
                  <ContainerText text="The Weeknd" />
                  <div
                    className="h-[31.956px] relative shrink-0 w-full"
                    data-name="PlaycountBar"
                  >
                    <div
                      className="absolute h-[19.982px] left-0 top-0 w-[57.925px]"
                      data-name="Text"
                    >
                      <p
                        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-[-0.21px] text-[#b7c0d9] text-[14px] top-[-2.41px] w-[73px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        276 plays
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute left-[11.99px] size-[55.981px] top-[11.99px]"
                  data-name="Container"
                >
                  <div
                    className="absolute left-0 rounded-[4px] size-[55.981px] top-0"
                    data-name="Image (Starboy)"
                  >
                    <img
                      alt=""
                      className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full"
                      src={imgImageStarboy}
                    />
                  </div>
                  <ContainerText1
                    text="3"
                    additionalClassNames="bg-gradient-to-b from-[#00eeff] to-[#7d5cff]"
                  />
                </div>
              </div>
              <div
                className="absolute border-[0px_0px_1.256px] border-[rgba(28,34,51,0.16)] border-solid h-[113.14px] left-0 rounded-[10px] top-[375.4px] w-[286.855px]"
                data-name="Button"
              >
                <div
                  className="absolute content-stretch flex flex-col gap-[3.985px] h-[87.898px] items-start left-[83.97px] top-[11.99px] w-[190.89px]"
                  data-name="Container"
                >
                  <Text text="Good 4 U" additionalClassNames="overflow-clip" />
                  <ContainerText text="Olivia Rodrigo" />
                  <div
                    className="h-[31.956px] relative shrink-0 w-full"
                    data-name="PlaycountBar"
                  >
                    <div
                      className="absolute h-[19.982px] left-0 top-0 w-[57.925px]"
                      data-name="Text"
                    >
                      <p
                        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-[-0.21px] text-[#b7c0d9] text-[14px] top-[-1.55px] w-[69px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        254 plays
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute left-[11.99px] size-[55.981px] top-[11.99px]"
                  data-name="Container"
                >
                  <div
                    className="absolute left-0 rounded-[4px] size-[55.981px] top-0"
                    data-name="Image (Good 4 U)"
                  >
                    <img
                      alt=""
                      className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full"
                      src={imgImageGood4U}
                    />
                  </div>
                  <ContainerText1
                    text="4"
                    additionalClassNames="bg-[#223056]"
                  />
                </div>
              </div>
              <div
                className="absolute h-[111.884px] left-0 rounded-[10px] top-[500.53px] w-[286.855px]"
                data-name="Button"
              >
                <div
                  className="absolute content-stretch flex flex-col gap-[3.985px] h-[87.898px] items-start left-[83.97px] top-[11.99px] w-[190.89px]"
                  data-name="Container"
                >
                  <Text text="As It Was" additionalClassNames="overflow-clip" />
                  <ContainerText text="Harry Styles" />
                  <div
                    className="h-[31.956px] relative shrink-0 w-full"
                    data-name="PlaycountBar"
                  >
                    <div
                      className="absolute h-[19.982px] left-0 top-0 w-[57.925px]"
                      data-name="Text"
                    >
                      <p
                        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-[-0.21px] text-[#b7c0d9] text-[14px] top-[-1.68px] w-[69px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        231 plays
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute left-[11.99px] size-[55.981px] top-[11.99px]"
                  data-name="Container"
                >
                  <div
                    className="absolute left-0 rounded-[4px] size-[55.981px] top-0"
                    data-name="Image (As It Was)"
                  >
                    <img
                      alt=""
                      className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full"
                      src={imgImageAsItWas}
                    />
                  </div>
                  <ContainerText1
                    text="5"
                    additionalClassNames="bg-[#223056]"
                  />
                </div>
              </div>
            </div>
          </div>
        </CosmicCard>
        <CosmicCard additionalClassNames="h-[522.832px] top-[974.86px]">
          <div
            className="content-stretch flex flex-col gap-[23.986px] h-[472.347px] items-start relative shrink-0 w-full"
            data-name="Container"
          >
            <div
              className="content-stretch flex h-[41.593px] items-center justify-between relative shrink-0 w-full"
              data-name="Dashboard"
            >
              <HeadingText
                text="Top Artists"
                additionalClassNames="w-[155.048px]"
              />
              <Button />
            </div>
            <div
              className="h-[406.767px] relative shrink-0 w-full"
              data-name="Dashboard"
            >
              <div
                className="absolute content-stretch flex flex-col gap-[11.993px] h-[195.385px] items-start left-0 top-0 w-[135.419px]"
                data-name="Container"
              >
                <div
                  className="h-[135.419px] relative shrink-0 w-full"
                  data-name="Container"
                >
                  <div
                    className="absolute left-0 rounded-[4.21525e+07px] size-[135.419px] top-0"
                    data-name="Image (The Weeknd)"
                  >
                    <img
                      alt=""
                      className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4.21525e+07px] size-full"
                      src={imgImageLevitating}
                    />
                  </div>
                  <ContainerText2
                    text="1"
                    additionalClassNames="left-[111.41px]"
                  />
                </div>
                <div
                  className="h-[23.986px] overflow-clip relative shrink-0 w-full"
                  data-name="Container"
                >
                  <p
                    className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[24px] left-[67.89px] text-[16px] text-center text-nowrap text-white top-[-0.74px] translate-x-[-50%]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    The Weeknd
                  </p>
                </div>
                <ContainerText3 text="618 plays • 34h" />
              </div>
              <div
                className="absolute content-stretch flex flex-col gap-[11.993px] h-[195.385px] items-start left-[151.42px] top-0 w-[135.439px]"
                data-name="Container"
              >
                <div
                  className="h-[135.439px] relative shrink-0 w-full"
                  data-name="Container"
                >
                  <div
                    className="absolute left-0 rounded-[4.21525e+07px] size-[135.439px] top-0"
                    data-name="Image (Dua Lipa)"
                  >
                    <img
                      alt=""
                      className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4.21525e+07px] size-full"
                      src={imgImageAsItWas}
                    />
                  </div>
                  <ContainerText2
                    text="2"
                    additionalClassNames="left-[111.43px]"
                  />
                </div>
                <div
                  className="h-[23.986px] overflow-clip relative shrink-0 w-full"
                  data-name="Container"
                >
                  <p
                    className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[24px] left-[68.34px] text-[16px] text-center text-nowrap text-white top-[-0.74px] translate-x-[-50%]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Dua Lipa
                  </p>
                </div>
                <ContainerText4 text="423 plays • 23h" />
              </div>
              <div
                className="absolute content-stretch flex flex-col gap-[11.993px] h-[195.385px] items-start left-0 top-[211.38px] w-[135.419px]"
                data-name="Container"
              >
                <div
                  className="h-[135.419px] relative shrink-0 w-full"
                  data-name="Container"
                >
                  <div
                    className="absolute left-0 rounded-[4.21525e+07px] size-[135.419px] top-0"
                    data-name="Image (Olivia Rodrigo)"
                  >
                    <img
                      alt=""
                      className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4.21525e+07px] size-full"
                      src={imgImageGood4U}
                    />
                  </div>
                  <ContainerText2
                    text="3"
                    additionalClassNames="left-[111.41px]"
                  />
                </div>
                <div
                  className="h-[23.986px] overflow-clip relative shrink-0 w-full"
                  data-name="Container"
                >
                  <p
                    className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[24px] left-[68.22px] text-[16px] text-center text-nowrap text-white top-[-0.74px] translate-x-[-50%]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Olivia Rodrigo
                  </p>
                </div>
                <ContainerText3 text="441 plays • 24h" />
              </div>
              <div
                className="absolute content-stretch flex flex-col gap-[11.993px] h-[195.385px] items-start left-[151.42px] top-[211.38px] w-[135.439px]"
                data-name="Container"
              >
                <div
                  className="h-[135.439px] relative shrink-0 w-full"
                  data-name="Container"
                >
                  <div
                    className="absolute left-0 rounded-[4.21525e+07px] size-[135.439px] top-0"
                    data-name="Image (Harry Styles)"
                  >
                    <img
                      alt=""
                      className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4.21525e+07px] size-full"
                      src={imgImageStarboy}
                    />
                  </div>
                  <div
                    className="absolute bg-[#223056] content-stretch flex items-center justify-center left-[111.43px] rounded-[4.21525e+07px] size-[31.995px] top-[-7.99px]"
                    data-name="Container"
                  >
                    <p
                      className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      4
                    </p>
                  </div>
                </div>
                <div
                  className="h-[23.986px] overflow-clip relative shrink-0 w-full"
                  data-name="Container"
                >
                  <p
                    className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[24px] left-[67.26px] text-[16px] text-center text-nowrap text-white top-[-0.74px] translate-x-[-50%]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Harry Styles
                  </p>
                </div>
                <ContainerText4 text="387 plays • 21h" />
              </div>
            </div>
          </div>
        </CosmicCard>
        <CosmicCard additionalClassNames="h-[439.842px] top-[1521.68px]">
          <div
            className="content-stretch flex flex-col gap-[23.986px] h-[389.356px] items-start relative shrink-0 w-full"
            data-name="Container"
          >
            <div
              className="content-stretch flex h-[41.593px] items-center justify-between relative shrink-0 w-full"
              data-name="Dashboard"
            >
              <HeadingText
                text="Top Genres"
                additionalClassNames="w-[162.075px]"
              />
              <Button />
            </div>
            <div
              className="content-stretch flex flex-col gap-[15.997px] h-[323.777px] items-start relative shrink-0 w-full"
              data-name="Dashboard"
            >
              <div
                className="content-stretch flex gap-[15.997px] h-[51.957px] items-center relative shrink-0 w-full"
                data-name="Container"
              >
                <ContainerText5
                  text="1"
                  additionalClassNames="bg-gradient-to-b from-[#00eeff] to-[#7d5cff]"
                />
                <Container>
                  <Text text="Pop" />
                  <div
                    className="content-stretch flex gap-[11.993px] h-[19.982px] items-center relative shrink-0 w-full"
                    data-name="Container"
                  >
                    <div
                      className="basis-0 bg-[#1c2233] grow h-[7.989px] min-h-px min-w-px relative rounded-[4.21525e+07px] shrink-0"
                      data-name="Container"
                    >
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-0 pr-[130.217px] py-0 relative size-full">
                          <div
                            className="bg-gradient-to-r from-[#00eeff] h-[7.989px] rounded-[4.21525e+07px] shrink-0 to-[#7d5cff] w-full"
                            data-name="Container"
                          />
                        </div>
                      </div>
                    </div>
                    <TextText1 text="35%" />
                  </div>
                </Container>
              </div>
              <div
                className="content-stretch flex gap-[15.997px] h-[51.957px] items-center relative shrink-0 w-full"
                data-name="Container"
              >
                <ContainerText5
                  text="2"
                  additionalClassNames="bg-gradient-to-b from-[#00eeff] to-[#7d5cff]"
                />
                <Container>
                  <Text text="Electronic" />
                  <div
                    className="content-stretch flex gap-[11.993px] h-[19.982px] items-center relative shrink-0 w-full"
                    data-name="Container"
                  >
                    <div
                      className="basis-0 bg-[#1c2233] grow h-[7.989px] min-h-px min-w-px relative rounded-[4.21525e+07px] shrink-0"
                      data-name="Container"
                    >
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-0 pr-[150.239px] py-0 relative size-full">
                          <div
                            className="bg-gradient-to-r from-[#00eeff] h-[7.989px] rounded-[4.21525e+07px] shrink-0 to-[#7d5cff] w-full"
                            data-name="Container"
                          />
                        </div>
                      </div>
                    </div>
                    <TextText1 text="25%" />
                  </div>
                </Container>
              </div>
              <div
                className="content-stretch flex gap-[15.997px] h-[51.957px] items-center relative shrink-0 w-full"
                data-name="Container"
              >
                <ContainerText5
                  text="3"
                  additionalClassNames="bg-gradient-to-b from-[#00eeff] to-[#7d5cff]"
                />
                <Container>
                  <div
                    className="h-[23.986px] relative shrink-0 w-full"
                    data-name="Container"
                  >
                    <p
                      className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-0.74px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >{`R&B`}</p>
                  </div>
                  <div
                    className="content-stretch flex gap-[11.993px] h-[19.982px] items-center relative shrink-0 w-full"
                    data-name="Container"
                  >
                    <div
                      className="basis-0 bg-[#1c2233] grow h-[7.989px] min-h-px min-w-px relative rounded-[4.21525e+07px] shrink-0"
                      data-name="Container"
                    >
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-0 pr-[160.249px] py-0 relative size-full">
                          <div
                            className="bg-gradient-to-r from-[#00eeff] h-[7.989px] rounded-[4.21525e+07px] shrink-0 to-[#7d5cff] w-full"
                            data-name="Container"
                          />
                        </div>
                      </div>
                    </div>
                    <TextText1 text="20%" />
                  </div>
                </Container>
              </div>
              <div
                className="content-stretch flex gap-[15.997px] h-[51.957px] items-center relative shrink-0 w-full"
                data-name="Container"
              >
                <ContainerText5 text="4" additionalClassNames="bg-[#223056]" />
                <Container>
                  <Text text="Indie" />
                  <div
                    className="content-stretch flex gap-[11.993px] h-[19.982px] items-center relative shrink-0 w-full"
                    data-name="Container"
                  >
                    <div
                      className="basis-0 bg-[#1c2233] grow h-[7.989px] min-h-px min-w-px relative rounded-[4.21525e+07px] shrink-0"
                      data-name="Container"
                    >
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-0 pr-[176.286px] py-0 relative size-full">
                          <div
                            className="bg-gradient-to-r from-[#00eeff] h-[7.989px] rounded-[4.21525e+07px] shrink-0 to-[#7d5cff] w-full"
                            data-name="Container"
                          />
                        </div>
                      </div>
                    </div>
                    <TextText1 text="12%" />
                  </div>
                </Container>
              </div>
              <div
                className="content-stretch flex gap-[15.997px] h-[51.957px] items-center relative shrink-0 w-full"
                data-name="Container"
              >
                <ContainerText5 text="5" additionalClassNames="bg-[#223056]" />
                <Container>
                  <Text text="Alternative" />
                  <div
                    className="content-stretch flex gap-[11.993px] h-[19.982px] items-center relative shrink-0 w-full"
                    data-name="Container"
                  >
                    <div
                      className="basis-0 bg-[#1c2233] grow h-[7.989px] min-h-px min-w-px relative rounded-[4.21525e+07px] shrink-0"
                      data-name="Container"
                    >
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-0 pr-[191.224px] py-0 relative size-full">
                          <div
                            className="bg-gradient-to-r from-[#00eeff] h-[7.989px] rounded-[4.21525e+07px] shrink-0 to-[#7d5cff] w-full"
                            data-name="Container"
                          />
                        </div>
                      </div>
                    </div>
                    <Wrapper2 additionalClassNames="w-[19.02px]">
                      <p
                        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[-2px] w-[20px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        8%
                      </p>
                    </Wrapper2>
                  </div>
                </Container>
              </div>
            </div>
          </div>
        </CosmicCard>
        <CosmicCard additionalClassNames="h-[650.243px] top-[1985.51px]">
          <div
            className="content-stretch flex flex-col gap-[23.986px] h-[599.757px] items-start relative shrink-0 w-full"
            data-name="Container"
          >
            <div
              className="h-[83.187px] relative shrink-0 w-full"
              data-name="Dashboard"
            >
              <div
                className="absolute h-[83.187px] left-0 top-0 w-[212.207px]"
                data-name="Heading 2"
              >
                <p
                  className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[41.6px] left-[-0.24px] text-[32px] text-white top-[-1.75px] w-[133px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Recently Played
                </p>
              </div>
              <div
                className="absolute content-stretch flex gap-[7.989px] h-[23.986px] items-center left-[206.76px] top-[6.25px] w-[80.164px]"
                data-name="Button"
              >
                <TextText text="View All" />
                <Icon />
              </div>
            </div>
            <div
              className="h-[492.584px] relative shrink-0 w-full"
              data-name="Dashboard"
            >
              <div
                className="absolute content-stretch flex gap-[15.997px] h-[89.174px] items-start left-0 pb-[1.256px] pt-[11.993px] px-[11.993px] rounded-[10px] top-0 w-[286.855px]"
                data-name="Button"
              >
                <div
                  aria-hidden="true"
                  className="absolute border-[0px_0px_1.256px] border-[rgba(28,34,51,0.16)] border-solid inset-0 pointer-events-none rounded-[10px]"
                />
                <div
                  className="relative rounded-[4px] shrink-0 size-[55.981px]"
                  data-name="Image (Blinding Lights)"
                >
                  <img
                    alt=""
                    className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full"
                    src={imgImageBlindingLights}
                  />
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
                </div>
                <Wrapper>
                  <Text1 text="Blinding Lights" />
                  <Text2 text="The Weeknd" />
                  <ContainerText6 text="1h ago" />
                </Wrapper>
              </div>
              <div
                className="absolute content-stretch flex gap-[15.997px] h-[89.174px] items-start left-0 pb-[1.256px] pt-[11.993px] px-[11.993px] rounded-[10px] top-[101.17px] w-[286.855px]"
                data-name="Button"
              >
                <div
                  aria-hidden="true"
                  className="absolute border-[0px_0px_1.256px] border-[rgba(28,34,51,0.16)] border-solid inset-0 pointer-events-none rounded-[10px]"
                />
                <div
                  className="relative rounded-[4px] shrink-0 size-[55.981px]"
                  data-name="Image (Levitating)"
                >
                  <img
                    alt=""
                    className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full"
                    src={imgImageLevitating}
                  />
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
                </div>
                <Wrapper>
                  <Text1 text="Levitating" />
                  <Text2 text="Dua Lipa" />
                  <ContainerText6 text="3h ago" />
                </Wrapper>
              </div>
              <div
                className="absolute content-stretch flex gap-[15.997px] h-[89.174px] items-start left-0 pb-[1.256px] pt-[11.993px] px-[11.993px] rounded-[10px] top-[202.33px] w-[286.855px]"
                data-name="Button"
              >
                <div
                  aria-hidden="true"
                  className="absolute border-[0px_0px_1.256px] border-[rgba(28,34,51,0.16)] border-solid inset-0 pointer-events-none rounded-[10px]"
                />
                <div
                  className="relative rounded-[4px] shrink-0 size-[55.981px]"
                  data-name="Image (Starboy)"
                >
                  <img
                    alt=""
                    className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full"
                    src={imgImageStarboy}
                  />
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
                </div>
                <div
                  className="basis-0 grow h-[63.931px] min-h-px min-w-px relative shrink-0"
                  data-name="Container"
                >
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <Text text="Starboy" additionalClassNames="overflow-clip" />
                    <ContainerText text="The Weeknd" />
                    <div
                      className="content-stretch flex h-[15.978px] items-start relative shrink-0 w-full"
                      data-name="Container"
                    >
                      <p
                        className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#b7c0d9] text-[12px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        5h ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute content-stretch flex gap-[15.997px] h-[89.174px] items-start left-0 pb-[1.256px] pt-[11.993px] px-[11.993px] rounded-[10px] top-[303.5px] w-[286.855px]"
                data-name="Button"
              >
                <div
                  aria-hidden="true"
                  className="absolute border-[0px_0px_1.256px] border-[rgba(28,34,51,0.16)] border-solid inset-0 pointer-events-none rounded-[10px]"
                />
                <div
                  className="relative rounded-[4px] shrink-0 size-[55.981px]"
                  data-name="Image (Good 4 U)"
                >
                  <img
                    alt=""
                    className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full"
                    src={imgImageGood4U}
                  />
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
                </div>
                <Wrapper>
                  <Text1 text="Good 4 U" />
                  <Text2 text="Olivia Rodrigo" />
                  <ContainerText6 text="1d ago" />
                </Wrapper>
              </div>
              <div
                className="absolute content-stretch flex gap-[15.997px] h-[87.917px] items-start left-0 pb-0 pt-[11.993px] px-[11.993px] rounded-[10px] top-[404.67px] w-[286.855px]"
                data-name="Button"
              >
                <div
                  className="relative rounded-[4px] shrink-0 size-[55.981px]"
                  data-name="Image (As It Was)"
                >
                  <img
                    alt=""
                    className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full"
                    src={imgImageAsItWas}
                  />
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
                </div>
                <Wrapper>
                  <Text1 text="As It Was" />
                  <Text2 text="Harry Styles" />
                  <ContainerText6 text="1d ago" />
                </Wrapper>
              </div>
            </div>
          </div>
        </CosmicCard>
      </div>
    </div>
  );
}
