import React from "react";
import { cx } from "../utils";

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

