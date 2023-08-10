const seasons = ["весна", "лето", "осень"];
const resources = [
  {
    id: 1,
    name: "Дерево",
    svg: `<svg width="58" height="16" viewBox="0 0 58 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_i_3_24)">
  <rect width="58" height="16" rx="2" fill="#733203"/>
  </g>
  <rect x="0.25" y="0.25" width="57.5" height="15.5" rx="1.75" stroke="black" stroke-width="0.5"/>
  <line x1="8.28572" y1="4.21364" x2="23.2" y2="4.21364" stroke="#3C1500" stroke-width="0.3"/>
  <line x1="14.9143" y1="7.12273" x2="38.1143" y2="7.12273" stroke="#3C1500" stroke-width="0.3"/>
  <line x1="8.28572" y1="12.9409" x2="19.8857" y2="12.9409" stroke="#3C1500" stroke-width="0.3"/>
  <line x1="29.8286" y1="4.21364" x2="48.0571" y2="4.21364" stroke="#3C1500" stroke-width="0.3"/>
  <line x1="29.8286" y1="11.4864" x2="53.0286" y2="11.4864" stroke="#3C1500" stroke-width="0.3"/>
  <line x1="4.97144" y1="8.57727" x2="19.8857" y2="8.57727" stroke="#3C1500" stroke-width="0.3"/>
  <defs>
  <filter id="filter0_i_3_24" x="0" y="0" width="58" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="4"/>
  <feGaussianBlur stdDeviation="2"/>
  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_24"/>
  </filter>
  </defs>
  </svg>
  `,
  },
  {
    id: 2,
    name: "Смола",
    svg: `<svg width="30" height="30" viewBox="0 0 21 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5008 1C1.31094 17.2985 0.979241 22.7892 1.00083 27C1.26897 31.6809 2.41777 33.4054 5.00083 36C9.80197 39.537 12.137 39.023 16.0008 36C18.7706 34.0246 19.7898 32.1082 20.5008 27C19.5342 21.1009 18.4332 15.0333 10.5008 1ZM13.0008 27C14.033 24.8934 14.4869 23.5656 13.0008 18.5L16.0008 23.5C17.1924 26.4805 17.0594 27.9856 16.0008 30.5C14.9724 31.3267 14.3176 31.8709 13.0008 33C12.2178 30.6524 11.807 29.3145 13.0008 27Z" fill="#010000"/>
    <path d="M13.0008 18.5C14.4869 23.5656 14.033 24.8934 13.0008 27C11.807 29.3145 12.2178 30.6524 13.0008 33C14.3176 31.8709 14.9724 31.3267 16.0008 30.5C17.0594 27.9856 17.1924 26.4805 16.0008 23.5L13.0008 18.5Z" fill="#F7F2F2"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5008 1C1.31094 17.2985 0.979241 22.7892 1.00083 27C1.26897 31.6809 2.41777 33.4054 5.00083 36C9.80197 39.537 12.137 39.023 16.0008 36C18.7706 34.0246 19.7898 32.1082 20.5008 27C19.5342 21.1009 18.4332 15.0333 10.5008 1ZM13.0008 27C14.033 24.8934 14.4869 23.5656 13.0008 18.5L16.0008 23.5C17.1924 26.4805 17.0594 27.9856 16.0008 30.5C14.9724 31.3267 14.3176 31.8709 13.0008 33C12.2178 30.6524 11.807 29.3145 13.0008 27Z" stroke="black" stroke-width="0.5"/>
    <path d="M13.0008 18.5C14.4869 23.5656 14.033 24.8934 13.0008 27C11.807 29.3145 12.2178 30.6524 13.0008 33C14.3176 31.8709 14.9724 31.3267 16.0008 30.5C17.0594 27.9856 17.1924 26.4805 16.0008 23.5L13.0008 18.5Z" stroke="black" stroke-width="0.5"/>
    </svg>
    `,
  },
  { id: 3, name: "Камень", svg: `<svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_i_6_61)">
  <path d="M29.5 7H21L15.5 23.5L29.5 7Z" fill="#00D1FF"/>
  <path d="M21 7H10.5L15.5 23.5L21 7Z" fill="#00D1FF"/>
  <path d="M10.5 7H1L15.5 23.5L10.5 7Z" fill="#00D1FF"/>
  <path d="M15.5 1L21 7H29.5L26 1H15.5Z" fill="#00D1FF"/>
  <path d="M15.5 1L10.5 7H21L15.5 1Z" fill="#00D1FF"/>
  <path d="M15.5 1H5L1 7H10.5L15.5 1Z" fill="#00D1FF"/>
  </g>
  <path d="M15.5 1H5L1 7M15.5 1L10.5 7M15.5 1L21 7M15.5 1H26L29.5 7M10.5 7H1M10.5 7H21M10.5 7L15.5 23.5M1 7L15.5 23.5M21 7H29.5M21 7L15.5 23.5M29.5 7L15.5 23.5" stroke="black" stroke-width="0.5"/>
  <defs>
  <filter id="filter0_i_6_61" x="0.685577" y="0.75" width="29.1195" height="27.1325" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="4"/>
  <feGaussianBlur stdDeviation="2"/>
  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_6_61"/>
  </filter>
  </defs>
  </svg>
  ` },
  { id: 4, name: "Ягодка", svg: `<svg width="30" height="30" viewBox="0 0 46 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_i_6_63)">
  <path d="M23.0529 19.5666C18.4099 12.6439 14.046 11.7534 7.05286 14.0666C2.81351 16.4859 1.67768 19.7109 1.05282 24.5666C0.42797 29.4223 5.55283 37.5666 5.55283 37.5666L10.0528 43.5666C10.0528 43.5666 17.8005 48.7055 23.0529 49.5666C29.8427 48.7863 33.5529 46.5666 37.0528 43.5666C40.5528 40.5666 42.1977 37.5666 43.0528 35.5666C43.908 33.5666 45.9916 27.1759 45.5528 24.5666C45.114 21.9573 44.9739 17.5886 40.5528 14.0666C36.1318 10.5447 27.9139 15.677 23.0529 19.5666Z" fill="#50C509"/>
  <path d="M21.0529 11.0666C21.1399 9.1024 21.2735 8.05894 22.0529 6.56661C22.7916 4.88123 23.2485 3.94848 25.0529 2.56661C25.0529 2.56661 26.8215 0.619853 28.0529 1.06661C29.1232 1.45495 29.5529 3.56661 29.5529 3.56661C29.649 5.33901 29.4747 6.32768 28.0529 8.06661C26.3126 10.2551 24.937 11.0728 21.0529 11.0666Z" fill="#427821"/>
  </g>
  <path d="M23.0529 19.5666C18.4099 12.6439 14.046 11.7534 7.05286 14.0666C2.81351 16.4859 1.67768 19.7109 1.05282 24.5666C0.42797 29.4223 5.55283 37.5666 5.55283 37.5666L10.0528 43.5666C10.0528 43.5666 17.8005 48.7055 23.0529 49.5666C29.8427 48.7863 33.5529 46.5666 37.0528 43.5666C40.5528 40.5666 42.1977 37.5666 43.0528 35.5666C43.908 33.5666 45.9916 27.1759 45.5528 24.5666C45.114 21.9573 44.9739 17.5886 40.5528 14.0666C36.1318 10.5447 27.9139 15.677 23.0529 19.5666Z" stroke="black" stroke-width="0.5"/>
  <path d="M21.0529 11.0666C21.1399 9.1024 21.2735 8.05894 22.0529 6.56661C22.7916 4.88123 23.2485 3.94848 25.0529 2.56661C25.0529 2.56661 26.8215 0.619853 28.0529 1.06661C29.1232 1.45495 29.5529 3.56661 29.5529 3.56661C29.649 5.33901 29.4747 6.32768 28.0529 8.06661C26.3126 10.2551 24.937 11.0728 21.0529 11.0666Z" stroke="black" stroke-width="0.5"/>
  <defs>
  <filter id="filter0_i_6_63" x="0.750015" y="0.749973" width="45.1128" height="53.069" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="4"/>
  <feGaussianBlur stdDeviation="2"/>
  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_6_63"/>
  </filter>
  </defs>
  </svg>
  ` },
];
const LocationResource = [
  [{ id: 1, count: 3 }],
  [
    { id: 1, count: 2 },
    { id: 2, count: 1 },
  ],
  [{ id: 2, count: 2 }],
  [
    { id: 3, count: 1 },
    { id: 2, count: 2 },
  ],
  [
    { id: 1, count: 2 },
    { id: 3, count: 1 },
  ],
  [{ id: 3, count: 2 }],
  [{ id: 4, count: 2 }],
  [{ id: 4, count: 1 }],
];
const marks = [
  {
    id: 1,
    name: "лапка медведя",
    svg: `<svg
  width="24"
  height="17"
  viewBox="0 0 24 17"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <circle cx="12" cy="12" r="5" fill="black" />
  <circle cx="3" cy="9" r="3" fill="#010000" />
  <circle cx="3" cy="9" r="3" fill="#010000" />
  <circle cx="16" cy="3" r="3" fill="#010000" />
  <circle cx="16" cy="3" r="3" fill="#010000" />
  <circle cx="21" cy="9" r="3" fill="#010000" />
  <circle cx="21" cy="9" r="3" fill="#010000" />
  <circle cx="8" cy="3" r="3" fill="#010000" />
  <circle cx="8" cy="3" r="3" fill="#010000" />
  </svg>`,
  },
  {
    id: 2,
    name: "Звезда",
    svg: `<svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.5 0.745673L13.8464 7.33914L13.9055 7.50532H14.0819H21.608L15.5394 11.531L15.3766 11.6391L15.4421 11.8232L17.7724 18.3715L11.6382 14.3023L11.5 14.2106L11.3618 14.3023L5.22758 18.3715L7.55791 11.8232L7.62343 11.6391L7.46058 11.531L1.39196 7.50532H8.91809H9.09448L9.15362 7.33914L11.5 0.745673Z" fill="#B6A508" stroke="black" stroke-width="0.5"/>
  </svg>
  `,
  },
  {
    id: 3,
    name: "Сердце",
    svg: `<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_i_4_55)">
  <path d="M12 7.66667C10.0701 4.32998 8.82046 2.6219 5.125 1C2.23334 2.76321 1.53643 4.82786 1 9.33333C4.54227 14.8641 7.02512 17.3219 12 21C17.2991 16.9911 19.9041 14.5439 23 9.33333C22.9437 5.22564 22.2238 3.30051 18.875 1C15.4095 2.65733 13.9415 4.1617 12 7.66667Z" fill="#FE0000"/>
  </g>
  <path d="M12 7.66667C10.0701 4.32998 8.82046 2.6219 5.125 1C2.23334 2.76321 1.53643 4.82786 1 9.33333C4.54227 14.8641 7.02512 17.3219 12 21C17.2991 16.9911 19.9041 14.5439 23 9.33333C22.9437 5.22564 22.2238 3.30051 18.875 1C15.4095 2.65733 13.9415 4.1617 12 7.66667Z" stroke="black" stroke-width="0.5"/>
  <defs>
  <filter id="filter0_i_4_55" x="0.741165" y="0.712135" width="22.5098" height="24.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="4"/>
  <feGaussianBlur stdDeviation="2"/>
  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_4_55"/>
  </filter>
  </defs>
  </svg>
  `,
  },
  {
    id: 4,
    name: "Огонь",
    svg: `<svg width="24" height="33" viewBox="0 0 24 33" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_i_4_56)">
  <path d="M14.6015 10.2038C14.7843 14.9454 13.9143 17.2186 11.6946 21.0084C9.59127 24.6667 10.8937 26.9958 10.6045 31.4127L15.3283 22.2089C17.0135 18.3954 16.8757 14.7788 14.6015 10.2038Z" fill="#FF7A00"/>
  <path d="M17.1451 13.4052C18.962 16.6065 19.0643 20.0764 17.1451 22.2089C15.1987 25.0649 14.763 27.081 15.3283 31.4127C19.848 31.6129 23.0791 29.9674 22.9591 22.2089C23.3292 17.9071 21.1672 15.9943 17.1451 13.4052Z" fill="#FF7A00"/>
  <path d="M5.15391 1C10.1334 7.66175 6.45632 12.1739 3.33702 16.6065C-3.61133 24.8984 7.20609 34.4858 6.60738 31.4127C6.00868 28.3397 6.22717 23.761 9.51435 21.0084C12.3587 16.8821 13.1558 14.5211 12.7847 10.2038C11.8024 6.07015 10.4422 3.41128 5.15391 1Z" fill="#FF7A00"/>
  </g>
  <path d="M14.6015 10.2038C14.7843 14.9454 13.9143 17.2186 11.6946 21.0084C9.59127 24.6667 10.8937 26.9958 10.6045 31.4127L15.3283 22.2089C17.0135 18.3954 16.8757 14.7788 14.6015 10.2038Z" stroke="black" stroke-width="0.5"/>
  <path d="M17.1451 13.4052C18.962 16.6065 19.0643 20.0764 17.1451 22.2089C15.1987 25.0649 14.763 27.081 15.3283 31.4127C19.848 31.6129 23.0791 29.9674 22.9591 22.2089C23.3292 17.9071 21.1672 15.9943 17.1451 13.4052Z" stroke="black" stroke-width="0.5"/>
  <path d="M5.15391 1C10.1334 7.66175 6.45632 12.1739 3.33702 16.6065C-3.61133 24.8984 7.20609 34.4858 6.60738 31.4127C6.00868 28.3397 6.22717 23.761 9.51435 21.0084C12.3587 16.8821 13.1558 14.5211 12.7847 10.2038C11.8024 6.07015 10.4422 3.41128 5.15391 1Z" stroke="black" stroke-width="0.5"/>
  <defs>
  <filter id="filter0_i_4_56" x="0.749954" y="0.77253" width="22.5" height="35.4775" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="4"/>
  <feGaussianBlur stdDeviation="2"/>
  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_4_56"/>
  </filter>
  </defs>
  </svg>
  `,
  },
];

const UnicCardDeck = [
  //колода
  new CardBuilding([{ id: 1, count: 1 }], marks[0], 1, "Школа"),
  new CardBuilding([{ id: 2, count: 1 }], marks[1], 1, "Ферма"),
  new CardAnimal([{ id: 3, count: 2 }], marks[2], 1, "Учитель"),
  new CardAnimal([{ id: 4, count: 1 }], marks[3], 1, "Фермер"),
];
