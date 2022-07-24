// Add/Update SVG icons (from the design/Figma) here

import {  memo } from "react";

import { Icon } from "./Icon";
import { SVG } from "./Svg";

const _SVGIcon = ({ name, size, ...props }) => (
  <Icon {...props} name={name} size={size}>
    {(() => {
      switch (name) {
        case "arrow-left":
          return (
            <SVG
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.41 16.09L10.83 11.5L15.41 6.91L14 5.5L8 11.5L14 17.5L15.41 16.09Z"
                fill="#C2C9D1"
              />
              <path
                d="M15.41 16.09L10.83 11.5L15.41 6.91L14 5.5L8 11.5L14 17.5L15.41 16.09Z"
                fill="black"
                fillOpacity="0.9"
              />
            </SVG>
          );
        case "arrow-right":
          return (
            <SVG
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.59 16.34L13.17 11.75L8.59 7.16L10 5.75L16 11.75L10 17.75L8.59 16.34Z"
                fill="#C2C9D1"
              />
              <path
                d="M8.59 16.34L13.17 11.75L8.59 7.16L10 5.75L16 11.75L10 17.75L8.59 16.34Z"
                fill="black"
                fillOpacity="0.9"
              />
            </SVG>
          );
        case "download":
          return (
            <SVG
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 17V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V17"
                stroke="#22C55E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 12L12 16L16 12"
                stroke="#22C55E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2V16"
                stroke="#22C55E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </SVG>
          );
        case "plus-rounded":
          return (
            <SVG
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3C16.95 3 21 7.05 21 12C21 16.95 16.95 21 12 21C7.05 21 3 16.95 3 12C3 7.05 7.05 3 12 3ZM12 1.5C6.225 1.5 1.5 6.225 1.5 12C1.5 17.775 6.225 22.5 12 22.5C17.775 22.5 22.5 17.775 22.5 12C22.5 6.225 17.775 1.5 12 1.5Z"
                fill="#0EBC50"
              />
              <path
                d="M18 11.25H12.75V6H11.25V11.25H6V12.75H11.25V18H12.75V12.75H18V11.25Z"
                fill="#0EBC50"
              />
            </SVG>
          );
        case "edit":
          return (
            <SVG
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.8167 4.62231L15.5556 1.34454C15.3401 1.13013 15.0485 1.00977 14.7445 1.00977C14.4405 1.00977 14.1489 1.13013 13.9334 1.34454L2.37225 12.889L1.3167 17.4445C1.28029 17.6111 1.28153 17.7836 1.32035 17.9496C1.35917 18.1156 1.43458 18.2708 1.54107 18.4039C1.64756 18.537 1.78243 18.6447 1.93585 18.719C2.08927 18.7933 2.25735 18.8324 2.42781 18.8334C2.50724 18.8414 2.58727 18.8414 2.6667 18.8334L7.27225 17.7779L18.8167 6.24454C19.0311 6.02904 19.1515 5.73742 19.1515 5.43343C19.1515 5.12944 19.0311 4.83781 18.8167 4.62231ZM6.7167 16.7779L2.40003 17.6834L3.38337 13.4501L12.0334 4.83343L15.3667 8.16676L6.7167 16.7779ZM16.1111 7.3612L12.7778 4.02787L14.7111 2.10565L17.9889 5.43898L16.1111 7.3612Z"
                fill="black"
              />
            </SVG>
          );
        case "info":
          return (
            <SVG
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1961_23413)">
                <path
                  d="M7.00102 4.48816e-06C8.62113 -0.000458612 10.1913 0.560876 11.4439 1.58835C12.6965 2.61583 13.5541 4.04587 13.8705 5.63478C14.1869 7.2237 13.9425 8.87316 13.179 10.3021C12.4156 11.731 11.1802 12.851 9.68351 13.4712C8.1868 14.0914 6.52136 14.1734 4.97097 13.7032C3.42058 13.2331 2.08119 12.2399 1.18104 10.8928C0.280884 9.54581 -0.124327 7.92833 0.0344535 6.31602C0.193234 4.70371 0.90618 3.19635 2.0518 2.05079C2.70099 1.39978 3.47243 0.88348 4.32177 0.53154C5.17112 0.1796 6.08164 -0.00103818 7.00102 4.48816e-06ZM6.7367 4.10157C6.73523 3.97809 6.75888 3.8556 6.80619 3.74154C6.85326 3.62864 6.92307 3.52665 7.01127 3.4419C7.09679 3.35542 7.19813 3.28619 7.30977 3.23796C7.53287 3.14685 7.7828 3.14685 8.0059 3.23796C8.11631 3.28601 8.21618 3.35531 8.29984 3.4419C8.38679 3.52699 8.45542 3.62896 8.50151 3.74154C8.54694 3.85609 8.56976 3.97835 8.56873 4.10157C8.56954 4.22255 8.54671 4.34253 8.50151 4.45476C8.45494 4.56748 8.38682 4.67004 8.30098 4.75668C8.21712 4.84442 8.11687 4.91487 8.0059 4.96404C7.8959 5.01015 7.77767 5.03341 7.65841 5.0324C7.53654 5.0336 7.41567 5.01036 7.30294 4.96404C7.19088 4.91664 7.0897 4.84686 7.00558 4.75896C6.91908 4.67306 6.85053 4.57082 6.80392 4.45818C6.7587 4.34476 6.73587 4.22366 6.7367 4.10157ZM7.08875 9.54754L7.06938 9.61931L7.05571 9.67514L7.05001 9.71388V9.74464C7.04945 9.76934 7.05291 9.79397 7.06026 9.81756C7.0655 9.83485 7.07444 9.85079 7.08647 9.86427C7.0974 9.87615 7.1111 9.88516 7.12634 9.89047C7.14644 9.89765 7.16767 9.90112 7.18901 9.90073C7.25033 9.89377 7.30821 9.86879 7.35535 9.82895C7.44478 9.75927 7.52686 9.68062 7.6003 9.59425C7.70511 9.4747 7.80287 9.34917 7.89311 9.21827C7.99451 9.07472 8.10046 8.90951 8.21098 8.72494C8.21667 8.71553 8.22581 8.70872 8.23645 8.70595C8.24709 8.70318 8.25839 8.70468 8.26794 8.71013L8.64164 8.98813C8.65054 8.99434 8.65661 9.00382 8.65853 9.01449C8.66045 9.02517 8.65807 9.03617 8.6519 9.04509C8.49716 9.3183 8.32277 9.5799 8.13009 9.82781C7.9719 10.0331 7.79113 10.22 7.59119 10.3849C7.42267 10.5242 7.23357 10.6364 7.03064 10.7176C6.84244 10.7924 6.64184 10.8311 6.43933 10.8316C6.28249 10.8342 6.12614 10.8131 5.97563 10.7689C5.84925 10.7316 5.73259 10.667 5.63383 10.5798C5.53987 10.4945 5.46728 10.3884 5.42192 10.2699C5.37329 10.1379 5.34972 9.99804 5.35242 9.85743C5.35242 9.80616 5.35242 9.75261 5.36153 9.69565C5.37065 9.63868 5.37748 9.58172 5.39002 9.51563C5.40141 9.45411 5.4185 9.38461 5.43901 9.30828C5.45951 9.23194 5.48572 9.14536 5.51534 9.05079L6.16476 7.01938L6.2183 6.82911C6.23198 6.77556 6.24337 6.72885 6.25248 6.68783C6.26003 6.65399 6.26573 6.61976 6.26957 6.58529C6.27382 6.55624 6.2761 6.52693 6.27641 6.49757C6.27687 6.45509 6.26913 6.41293 6.25362 6.37338C6.23837 6.33858 6.21629 6.3072 6.18868 6.2811C6.15765 6.2531 6.1212 6.23177 6.08158 6.21843C6.0344 6.20364 5.9852 6.19633 5.93575 6.19678H5.40711C5.39612 6.19679 5.38557 6.1925 5.37769 6.18484C5.36982 6.17718 5.36525 6.16675 5.36495 6.15577V6.14096L5.50395 5.63624C5.50645 5.62732 5.51183 5.61947 5.51924 5.6139C5.52666 5.60834 5.5357 5.60538 5.54496 5.60548L8.24174 5.52003C8.25284 5.52001 8.26352 5.52426 8.27158 5.53189C8.27963 5.53952 8.28445 5.54996 8.28503 5.56104V5.57471L7.08875 9.54526V9.54754ZM11.0524 2.94857C10.1151 2.01039 8.88139 1.42628 7.56161 1.29578C6.24183 1.16529 4.91764 1.49648 3.81469 2.23292C2.71173 2.96936 1.89828 4.06548 1.51295 5.33448C1.12761 6.60349 1.19425 7.96684 1.70149 9.19222C2.20873 10.4176 3.1252 11.4292 4.2947 12.0545C5.46421 12.6799 6.81439 12.8804 8.11516 12.6218C9.41592 12.3633 10.5868 11.6616 11.4282 10.6365C12.2696 9.6114 12.7295 8.32622 12.7295 7.00001C12.7305 6.24754 12.5828 5.5023 12.295 4.80705C12.0072 4.11179 11.5849 3.48022 11.0524 2.94857Z"
                  fill="#666666"
                />
              </g>
              <defs>
                <clipPath id="clip0_1961_23413">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </SVG>
          );
        case "check":
          return (
            <SVG
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 6.65789L4.94737 10.6053L11 1" stroke="#666666" />
            </SVG>
          );
        case "view":
          return (
            <SVG
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.47 7.83C14.8819 6.30882 13.861 4.99331 12.5334 4.04604C11.2058 3.09878 9.62971 2.56129 7.99997 2.5C6.37023 2.56129 4.79416 3.09878 3.46657 4.04604C2.13898 4.99331 1.11805 6.30882 0.52997 7.83C0.490254 7.93985 0.490254 8.06015 0.52997 8.17C1.11805 9.69118 2.13898 11.0067 3.46657 11.954C4.79416 12.9012 6.37023 13.4387 7.99997 13.5C9.62971 13.4387 11.2058 12.9012 12.5334 11.954C13.861 11.0067 14.8819 9.69118 15.47 8.17C15.5097 8.06015 15.5097 7.93985 15.47 7.83ZM7.99997 12.5C5.34997 12.5 2.54997 10.535 1.53497 8C2.54997 5.465 5.34997 3.5 7.99997 3.5C10.65 3.5 13.45 5.465 14.465 8C13.45 10.535 10.65 12.5 7.99997 12.5Z"
                fill="#ffffff"
              />
              <path
                d="M8 5C7.40666 5 6.82664 5.17595 6.33329 5.50559C5.83994 5.83524 5.45543 6.30377 5.22836 6.85195C5.0013 7.40013 4.94189 8.00333 5.05765 8.58527C5.1734 9.16721 5.45912 9.70176 5.87868 10.1213C6.29824 10.5409 6.83279 10.8266 7.41473 10.9424C7.99667 11.0581 8.59987 10.9987 9.14805 10.7716C9.69623 10.5446 10.1648 10.1601 10.4944 9.66671C10.8241 9.17336 11 8.59334 11 8C11 7.20435 10.6839 6.44129 10.1213 5.87868C9.55871 5.31607 8.79565 5 8 5ZM8 10C7.60444 10 7.21776 9.8827 6.88886 9.66294C6.55996 9.44318 6.30362 9.13082 6.15224 8.76537C6.00087 8.39992 5.96126 7.99778 6.03843 7.60982C6.1156 7.22186 6.30608 6.86549 6.58579 6.58579C6.86549 6.30608 7.22186 6.1156 7.60982 6.03843C7.99778 5.96126 8.39992 6.00087 8.76537 6.15224C9.13082 6.30362 9.44318 6.55996 9.66294 6.88886C9.8827 7.21776 10 7.60444 10 8C10 8.53043 9.78929 9.03914 9.41421 9.41421C9.03914 9.78929 8.53043 10 8 10Z"
                fill="#ffffff"
              />
            </SVG>
          );
        case "send":
          return (
            <SVG
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.4173 0.364024C30.2484 0.196124 30.035 0.0798769 29.8022 0.0289497C29.5694 -0.0219775 29.3269 -0.00546734 29.1032 0.0765391L1.5713 10.076C1.33386 10.166 1.12944 10.3259 0.985183 10.5347C0.84093 10.7434 0.763672 10.9911 0.763672 11.2447C0.763672 11.4984 0.84093 11.746 0.985183 11.9547C1.12944 12.1635 1.33386 12.3235 1.5713 12.4134L12.3213 16.7007L20.2555 8.75109L22.02 10.5135L14.0483 18.4756L18.3533 29.2125C18.446 29.4451 18.6065 29.6445 18.814 29.7849C19.0215 29.9253 19.2665 30.0002 19.5171 30C19.77 29.9948 20.0154 29.9132 20.2209 29.7659C20.4265 29.6187 20.5825 29.4127 20.6685 29.175L30.6801 1.67646C30.7653 1.45531 30.7859 1.21452 30.7394 0.982147C30.6928 0.749776 30.5811 0.535403 30.4173 0.364024Z"
                fill="#22C55E"
              />
            </SVG>
          );
        case "search":
          return (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.6776 12.93C15.888 11.2784 16.4301 9.23062 16.1955 7.19644C15.9609 5.16226 14.9669 3.29168 13.4123 1.95892C11.8578 0.626155 9.85733 -0.070492 7.81119 0.00834944C5.76505 0.0871909 3.82413 0.935706 2.37673 2.38414C0.929335 3.83257 0.0822089 5.7741 0.0048316 7.8203C-0.0725457 9.86649 0.625532 11.8665 1.95941 13.4201C3.29328 14.9737 5.16458 15.9663 7.19892 16.1995C9.23326 16.4326 11.2806 15.8891 12.9314 14.6775H12.9301C12.9676 14.7275 13.0076 14.775 13.0526 14.8213L17.8651 19.6338C18.0995 19.8683 18.4175 20.0001 18.7491 20.0003C19.0807 20.0004 19.3987 19.8688 19.6333 19.6344C19.8678 19.4 19.9997 19.082 19.9998 18.7504C19.9999 18.4189 19.8683 18.1008 19.6339 17.8663L14.8214 13.0538C14.7767 13.0085 14.7287 12.9667 14.6776 12.9288V12.93ZM15.0001 8.125C15.0001 9.02784 14.8223 9.92184 14.4768 10.756C14.1313 11.5901 13.6249 12.348 12.9865 12.9864C12.3481 13.6248 11.5902 14.1312 10.7561 14.4767C9.92198 14.8222 9.02798 15 8.12515 15C7.22231 15 6.32831 14.8222 5.4942 14.4767C4.66008 14.1312 3.90219 13.6248 3.26379 12.9864C2.62538 12.348 2.11898 11.5901 1.77347 10.756C1.42797 9.92184 1.25015 9.02784 1.25015 8.125C1.25015 6.30164 1.97447 4.55296 3.26379 3.26364C4.5531 1.97433 6.30178 1.25 8.12515 1.25C9.94851 1.25 11.6972 1.97433 12.9865 3.26364C14.2758 4.55296 15.0001 6.30164 15.0001 8.125Z" fill="#556987" />
            </svg>
          )

        default:
          return <></>;
      }
    })()}
  </Icon>
);

export const SVGIcon = memo(_SVGIcon);
