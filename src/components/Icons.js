import React from "react";
import { cx } from "../utils";

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={cx("w-full h-auto", className)}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={cx("w-full h-auto", className)}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const LinkedinIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={42}
      height={43}
      viewBox="0 0 42 43"
      className={cx("w-full h-auto", className)}
      {...rest}
    >
      <g clipPath="url(#a)">
        <path
          fill="#0076B2"
          d="M38.063 1.792H3.937A2.924 2.924 0 0 0 .985 4.679v34.263a2.924 2.924 0 0 0 2.954 2.881h34.124a2.93 2.93 0 0 0 2.954-2.89V4.67a2.93 2.93 0 0 0-2.953-2.878Z"
        />
        <path
          fill="#fff"
          d="M6.91 16.797h5.943v19.12H6.91v-19.12Zm2.973-9.516a3.445 3.445 0 1 1 0 6.891 3.445 3.445 0 0 1 0-6.89Zm6.697 9.516h5.696v2.625h.08c.793-1.503 2.73-3.088 5.62-3.088 6.018-.013 7.133 3.948 7.133 9.083v10.5h-5.942v-9.302c0-2.215-.04-5.067-3.088-5.067s-3.566 2.415-3.566 4.922v9.447H16.58v-19.12Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 .808h42v42H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const TwitterIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={42}
      height={43}
      viewBox="0 0 42 43"
      className={cx("w-full h-auto", className)}
      {...rest}
    >
      <g clipPath="url(#a)">
        <path
          fill="#1D9BF0"
          d="M37.7 13.24c.026.37.026.74.026 1.114 0 11.386-8.668 24.517-24.518 24.517v-.006A24.394 24.394 0 0 1 0 35.002a17.303 17.303 0 0 0 12.753-3.571 8.627 8.627 0 0 1-8.05-5.984 8.584 8.584 0 0 0 3.89-.149 8.617 8.617 0 0 1-6.912-8.446v-.11a8.562 8.562 0 0 0 3.91 1.08A8.627 8.627 0 0 1 2.926 6.315a24.457 24.457 0 0 0 17.758 9.002 8.622 8.622 0 0 1 2.494-8.233 8.626 8.626 0 0 1 12.19.374 17.29 17.29 0 0 0 5.473-2.092 8.649 8.649 0 0 1-3.788 4.766A17.135 17.135 0 0 0 42 8.776a17.504 17.504 0 0 1-4.3 4.464Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 .808h42v42H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const GithubIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={42}
      height={44}
      viewBox="0 0 42 44"
      className={cx("w-full h-auto", className)}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M21 1.739c-10.942 0-19.815 9.212-19.815 20.577 0 9.091 5.678 16.804 13.55 19.525.99.191 1.354-.446 1.354-.99 0-.49-.018-2.111-.027-3.83-5.512 1.244-6.675-2.428-6.675-2.428-.902-2.379-2.2-3.011-2.2-3.011-1.799-1.277.135-1.25.135-1.25 1.99.144 3.038 2.12 3.038 2.12 1.767 3.145 4.635 2.236 5.766 1.71.177-1.33.691-2.238 1.258-2.752-4.401-.52-9.028-2.284-9.028-10.168 0-2.247.774-4.082 2.042-5.524-.206-.518-.885-2.61.191-5.445 0 0 1.664-.553 5.45 2.11A18.325 18.325 0 0 1 21 11.688c1.683.008 3.38.236 4.963.693 3.782-2.663 5.444-2.11 5.444-2.11 1.079 2.834.4 4.928.195 5.445 1.27 1.442 2.039 3.277 2.039 5.524 0 7.903-4.635 9.643-9.048 10.153.711.638 1.345 1.891 1.345 3.81 0 2.754-.023 4.97-.023 5.647 0 .548.357 1.19 1.36.987 7.87-2.724 13.54-10.434 13.54-19.522 0-11.364-8.872-20.577-19.815-20.577Z"
        clipRule="evenodd"
      />
      <path d="M8.69 31.282c-.044.103-.198.133-.34.063-.144-.066-.224-.206-.178-.308.043-.106.198-.135.342-.064.144.067.226.207.176.31Zm.803.93c-.095.091-.28.049-.405-.095-.13-.143-.154-.335-.058-.427.098-.091.277-.048.407.095.13.145.155.335.056.428Zm.781 1.185c-.121.088-.32.006-.443-.177-.121-.183-.121-.403.004-.49.122-.089.318-.01.442.172.121.186.121.406-.003.495Zm1.07 1.145c-.108.125-.34.091-.509-.078-.173-.166-.221-.402-.113-.526.11-.125.343-.09.514.078.173.166.225.402.109.526Zm1.477.665c-.048.161-.27.234-.496.166-.224-.07-.37-.26-.324-.422.045-.163.27-.239.496-.165.224.07.37.257.324.421Zm1.622.123c.005.17-.185.31-.42.314-.237.005-.43-.132-.432-.3 0-.17.187-.31.424-.314.235-.005.428.132.428.3Zm1.508-.266c.029.165-.135.335-.369.38-.23.045-.443-.058-.473-.222-.028-.17.139-.34.369-.384.234-.042.444.058.473.226Z" />
    </svg>
  );
};

export const FacebookIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      className={cx("w-full h-auto", className)}
      {...rest}
    >
      <path
        fill="#1877F2"
        d="M15 8a7 7 0 0 0-7-7 7 7 0 0 0-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0 0 15 8z"
      />
      <path
        fill="#fff"
        d="M10.725 10.023 11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 0 0 2.188 0v-4.892h1.63z"
      />
    </svg>
  )
}

export const MessengerIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 50 50"
      className={cx("w-full h-auto", className)}
      {...rest}
    >
      <path
        fill="#007FFF"
        fillRule="evenodd"
        d="M24 0C10.745 0 0 9.95 0 22.222c0 6.994 3.49 13.231 8.944 17.305V48l8.172-4.485c2.18.604 4.491.93 6.884.93 13.255 0 24-9.95 24-22.223S37.255 0 24 0Zm2.385 29.926-6.112-6.519-11.925 6.519L21.466 16l6.26 6.519L39.504 16 26.385 29.926Z"
      />
    </svg>
  )
}

export const YoutubeIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"

      width={66}
      height={66}
      viewBox="0 0 98 98"
      className={cx("w-full h-auto", className)}
      {...rest}
    >
      <style>
        {
          ".st0{fill:#fff}.st1{fill:#f5bb41}.st2{fill:#2167d1}.st3{fill:#3d84f3}.st4{fill:#4ca853}.st5{fill:#398039}.st6{fill:#d74f3f}.st7{fill:#d43c89}.st8{fill:#b2005f}.st9{stroke:#000}.st10,.st11,.st9{fill:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st10{fill-rule:evenodd;clip-rule:evenodd;stroke:#000}.st11{stroke:#040404}.st11,.st12,.st13{fill-rule:evenodd;clip-rule:evenodd}.st13{fill:#040404}.st14{fill:url(#SVGID_1_)}.st15{fill:url(#SVGID_2_)}.st16{fill:url(#SVGID_3_)}.st17{fill:url(#SVGID_4_)}.st18{fill:url(#SVGID_5_)}.st19{fill:url(#SVGID_6_)}.st20{fill:url(#SVGID_7_)}.st21{fill:url(#SVGID_8_)}.st22{fill:url(#SVGID_9_)}.st23{fill:url(#SVGID_10_)}.st24{fill:url(#SVGID_11_)}.st25{fill:url(#SVGID_12_)}.st26{fill:url(#SVGID_13_)}.st27{fill:url(#SVGID_14_)}.st28{fill:url(#SVGID_15_)}.st29{fill:url(#SVGID_16_)}.st30{fill:url(#SVGID_17_)}.st31{fill:url(#SVGID_18_)}.st32{fill:url(#SVGID_19_)}.st33{fill:url(#SVGID_20_)}.st34{fill:url(#SVGID_21_)}.st35{fill:url(#SVGID_22_)}.st36{fill:url(#SVGID_23_)}.st37{fill:url(#SVGID_24_)}.st38{fill:url(#SVGID_25_)}.st39{fill:url(#SVGID_26_)}.st40{fill:url(#SVGID_27_)}.st41{fill:url(#SVGID_28_)}.st42{fill:url(#SVGID_29_)}.st43{fill:url(#SVGID_30_)}.st44{fill:url(#SVGID_31_)}.st45{fill:url(#SVGID_32_)}.st46{fill:url(#SVGID_33_)}.st47{fill:url(#SVGID_34_)}.st48{fill:url(#SVGID_35_)}.st49{fill:url(#SVGID_36_)}.st50{fill:url(#SVGID_37_)}.st51{fill:url(#SVGID_38_)}.st52{fill:url(#SVGID_39_)}.st53{fill:url(#SVGID_40_)}.st54{fill:url(#SVGID_41_)}.st55{fill:url(#SVGID_42_)}.st56{fill:url(#SVGID_43_)}.st57{fill:url(#SVGID_44_)}.st58{fill:url(#SVGID_45_)}.st59{fill:#040404}.st60{fill:url(#SVGID_46_)}.st61{fill:url(#SVGID_47_)}.st62{fill:url(#SVGID_48_)}.st63{fill:url(#SVGID_49_)}.st64{fill:url(#SVGID_50_)}.st65{fill:url(#SVGID_51_)}.st66{fill:url(#SVGID_52_)}.st67{fill:url(#SVGID_53_)}.st68{fill:url(#SVGID_54_)}.st69{fill:url(#SVGID_55_)}.st70{fill:url(#SVGID_56_)}.st71{fill:url(#SVGID_57_)}.st72{fill:url(#SVGID_58_)}.st73{fill:url(#SVGID_59_)}.st74{fill:url(#SVGID_60_)}.st75{fill:url(#SVGID_61_)}.st76{fill:url(#SVGID_62_)}.st77,.st78{fill:none;stroke-miterlimit:10}.st77{stroke:#000;stroke-width:3}.st78{stroke:#fff}.st79{fill:#4bc9ff}.st80{fill:#50d}.st81{fill:#ff3a00}.st82{fill:#e6162d}.st84{fill:#f93}.st85{fill:#b92b27}.st86{fill:#00aced}.st87{fill:#bd2125}.st88{fill:#1877f2}.st89{fill:#6665d2}.st90{fill:#ce3056}.st91{fill:#5bb381}.st92{fill:#61c3ec}.st93{fill:#e4b34b}.st94{fill:#181ef2}.st96{fill:#fe466c}.st97{fill:#fa4778}.st98{fill:#f70}.st99{fill-rule:evenodd;clip-rule:evenodd;fill:#1f6bf6}.st100{fill:#520094}.st101{fill:#4477e8}.st102{fill:#3d1d1c}.st103{fill:#ffe812}.st104{fill:#344356}.st105{fill:#00cc76}.st106{fill-rule:evenodd;clip-rule:evenodd;fill:#345e90}.st107{fill:#1f65d8}.st108{fill:#eb3587}.st109{fill-rule:evenodd;clip-rule:evenodd;fill:#603a88}.st110{fill:#e3ce99}.st111{fill:#783af9}.st112{fill:#ff515e}.st113{fill:#ff4906}.st114{fill:#503227}.st115{fill:#4c7bd9}.st116{fill:#69c9d0}.st117{fill:#1b92d1}.st118{fill:#eb4f4a}.st119{fill:#513728}.st120{fill:#f60}.st121{fill-rule:evenodd;clip-rule:evenodd;fill:#b61438}.st122{fill:#fffc00}.st123{fill:#141414}.st124{fill:#94d137}.st125,.st126{fill-rule:evenodd;clip-rule:evenodd;fill:#f1f1f1}.st126{fill:#66e066}.st127{fill:#2d8cff}.st128{fill:#f1a300}.st129{fill:#4ba2f2}.st130{fill:#1a5099}.st131{fill:#ee6060}.st132{fill-rule:evenodd;clip-rule:evenodd;fill:#f48120}.st133{fill:#222}.st134{fill:url(#SVGID_63_)}.st135{fill:#0077b5}.st136{fill:#fc0}.st137{fill:#eb3352}.st138{fill:#f9d265}.st139{fill:#f5b955}.st140{fill:#dd2a7b}.st141{fill:#66e066}.st142{fill:#eb4e00}.st143{fill:#ffc794}.st144{fill:#b5332a}.st145{fill:#4e85eb}.st146{fill:#58a45c}.st147{fill:#f2bc42}.st148{fill:#d85040}.st149{fill:#464eb8}.st150{fill:#7b83eb}"
        }
      </style>
      <g id="Layer_2">
        <path
          d="M94.761 27.369c-1.075-4.045-4.24-7.231-8.26-8.312C79.216 17.092 50 17.092 50 17.092s-29.216 0-36.501 1.965c-4.02 1.081-7.186 4.267-8.26 8.312C3.286 34.702 3.286 50 3.286 50s0 15.298 1.952 22.631c1.074 4.045 4.24 7.231 8.26 8.312C20.784 82.908 50 82.908 50 82.908s29.216 0 36.502-1.965c4.02-1.082 7.185-4.267 8.26-8.312C96.714 65.298 96.714 50 96.714 50s0-15.298-1.953-22.631z"
          style={{
            fill: "red",
          }}
        />
        <path
          d="M40.284 35.877v28.246l24.83-14.122z"
          style={{
            fill: "#f1f1f1",
          }}
        />
      </g>
    </svg>
  )
}

export const TiktokIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 35 35"
      className={cx("w-full h-auto", className)}
      {...rest}
    >
      <path
        fill="#EE1D52"
        d="M8.451 19.793c.156-1.294.687-2.019 1.687-2.761 1.43-1.006 3.218-.437 3.218-.437V13.22c.435-.011.87.014 1.3.077v4.343s-1.788-.569-3.219.438c-.999.742-1.53 1.467-1.686 2.76-.005.703.126 1.621.734 2.416a5.932 5.932 0 0 1-.46-.264c-1.337-.898-1.58-2.245-1.574-3.197ZM22.035 6.979c-.984-1.079-1.356-2.168-1.49-2.933h1.237s-.247 2.006 1.553 3.979l.025.026a7.133 7.133 0 0 1-1.325-1.072ZM28 10.037v4.256s-1.58-.062-2.75-.36c-1.632-.415-2.681-1.053-2.681-1.053s-.725-.456-.784-.487v8.789c0 .49-.134 1.711-.543 2.73-.533 1.334-1.356 2.21-1.508 2.388 0 0-1 1.183-2.767 1.98-1.592.719-2.99.7-3.407.719 0 0-2.417.095-4.59-1.318a9.125 9.125 0 0 1-1.312-1.053l.011.008c2.175 1.413 4.59 1.317 4.59 1.317.419-.018 1.817 0 3.408-.719 1.765-.797 2.767-1.98 2.767-1.98.15-.179.977-1.054 1.508-2.388.408-1.019.543-2.241.543-2.73v-8.788c.059.032.783.487.783.487s1.05.638 2.683 1.054c1.17.297 2.749.36 2.749.36V9.912c.54.121 1.001.154 1.3.124Z"
      />
      <path
        fill="#000"
        d="M26.7 9.913v3.334s-1.579-.062-2.748-.36c-1.633-.415-2.683-1.053-2.683-1.053s-.725-.455-.783-.488v8.79c0 .49-.134 1.712-.543 2.731-.533 1.334-1.356 2.21-1.508 2.388 0 0-1.001 1.183-2.767 1.98-1.591.719-2.99.7-3.408.719 0 0-2.415.096-4.59-1.317l-.01-.008a8.326 8.326 0 0 1-.648-.703c-.694-.846-1.12-1.847-1.227-2.133v-.003c-.172-.496-.533-1.688-.484-2.842.088-2.036.804-3.285.993-3.599a8.553 8.553 0 0 1 1.928-2.257 8.13 8.13 0 0 1 2.291-1.3 7.97 7.97 0 0 1 2.844-.572v3.375s-1.788-.567-3.218.437c-1 .742-1.53 1.467-1.687 2.76-.007.953.237 2.3 1.573 3.199.156.099.31.186.46.263.233.304.517.568.84.783 1.306.826 2.4.884 3.799.347.932-.359 1.635-1.167 1.96-2.063.205-.56.202-1.123.202-1.706V4.046h3.256c.134.765.506 1.854 1.49 2.933.396.407.84.767 1.325 1.072.144.149.876.881 1.816 1.331.487.233 1 .41 1.528.531Z"
      />
      <path
        fill="#69C9D0"
        d="M4.49 22.757v.002l.08.22c-.01-.026-.04-.104-.08-.222Z"
      />
      <path
        fill="#69C9D0"
        d="M10.513 13.792a8.136 8.136 0 0 0-2.291 1.3 8.554 8.554 0 0 0-1.927 2.262c-.19.312-.906 1.563-.993 3.599-.05 1.154.312 2.345.484 2.841v.004c.108.283.532 1.284 1.226 2.132.202.246.418.481.647.703a8.9 8.9 0 0 1-1.947-1.75c-.688-.838-1.112-1.828-1.223-2.12a.05.05 0 0 1 0-.007v-.003c-.172-.496-.535-1.688-.484-2.843.087-2.036.803-3.286.993-3.6a8.542 8.542 0 0 1 1.927-2.261 8.118 8.118 0 0 1 2.291-1.3 8.108 8.108 0 0 1 1.616-.456 8.372 8.372 0 0 1 2.527-.035v.962a7.971 7.971 0 0 0-2.846.572Z"
      />
      <path
        fill="#69C9D0"
        d="M20.544 4.046h-3.256v16.57c0 .582 0 1.144-.202 1.705-.328.896-1.028 1.704-1.96 2.063-1.4.539-2.493.48-3.798-.347a3.51 3.51 0 0 1-.844-.78c1.112.568 2.107.558 3.34.084.932-.359 1.632-1.168 1.96-2.064.205-.56.202-1.122.202-1.704V3h4.496s-.05.412.062 1.046ZM26.7 8.991v.922a7.29 7.29 0 0 1-1.524-.53c-.94-.45-1.673-1.183-1.817-1.332.167.105.34.2.517.285 1.143.547 2.27.71 2.824.655Z"
      />
    </svg>
  )
}

export const DribbbleIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={42}
      height={43}
      viewBox="0 0 42 43"
      className={cx("w-full h-auto", className)}
      {...rest}
    >
      <g clipPath="url(#a)">
        <path
          fill="#E74D89"
          d="M21 2.202c10.828 0 19.59 8.761 19.59 19.573 0 10.812-8.762 19.589-19.59 19.589S1.41 32.603 1.41 21.79C1.412 10.98 10.173 2.202 21 2.202Z"
        />
        <path
          fill="#B2215A"
          d="M21 42.758c-11.583 0-21-9.4-21-20.967C0 10.208 9.417.808 21 .808s21 9.4 21 20.967c0 11.566-9.417 20.983-21 20.983Zm17.702-18.112c-.607-.197-5.545-1.657-11.172-.771 2.346 6.431 3.297 11.681 3.478 12.764 4.036-2.707 6.907-7.006 7.694-11.993Zm-10.696 13.65c-.263-1.575-1.313-7.055-3.823-13.584a.304.304 0 0 1-.115.032c-10.123 3.528-13.749 10.533-14.077 11.19A17.866 17.866 0 0 0 21 39.706a17.525 17.525 0 0 0 7.006-1.411ZM7.678 33.784c.41-.689 5.332-8.826 14.585-11.829.23-.082.476-.147.706-.213a46.698 46.698 0 0 0-1.46-3.035C12.55 21.38 3.855 21.267 3.068 21.25c0 .18-.016.36-.016.541a17.927 17.927 0 0 0 4.626 11.993ZM3.445 18.133c.804.016 8.187.049 16.587-2.182-2.97-5.283-6.185-9.713-6.645-10.353-5.036 2.363-8.777 6.99-9.942 12.535ZM16.8 4.384c.492.656 3.757 5.086 6.694 10.484 6.382-2.396 9.072-6.005 9.4-6.464A17.882 17.882 0 0 0 21 3.892c-1.444 0-2.855.18-4.2.492Zm18.08 6.087c-.378.508-3.38 4.364-10.008 7.071.41.853.82 1.723 1.198 2.592.13.312.262.624.393.919 5.972-.755 11.895.46 12.485.574a17.843 17.843 0 0 0-4.068-11.156Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 .808h42v42H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
