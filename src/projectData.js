const projectData = [
  {
    title: "Alterlink NFT",
    image: require("./images/pj_main_alterlink.jpg"),
    description: "NFT 민팅 & 채팅 프로젝트 (진행중)",
    features: [
      {
        type: "Frontend",
        text: [
          "다양한 시각적 효과를 넣었습니다.",
          "메타마스크 지갑 연동 버튼을 추가했습니다.",
          "현재 NFT를 소유하고 있지 않다면 채팅페이지 접근할 수 없도록 했습니다.",
        ],
      },
      {
        type: "Backend",
        text: [
          "만약 DB에 사용자의 지갑주소가 없다면 로그인 페이지로 이동되도록 했고, 로그인을 하면 입력한 정보가 DB에 저장되도록 했습니다.",
          "socket.io와 openai api를 사용하여 선택한 언어에 맞게 채팅 내용이 번역되어 보여지도록 했습니다.",
        ],
      },
    ],
    urls: [{ label: "URL", link: "https://alterlink.xyz/" }],
    modalImages: [
      require("./images/pj_alterlink01.jpg"),
      require("./images/pj_alterlink02.jpg"),
      require("./images/pj_alterlink03.jpg"),
      require("./images/pj_alterlink04.jpg"),
      require("./images/pj_alterlink05.jpg"),
      require("./images/pj_alterlink_videoThumb.jpg"),
      require("./images/pj_alterlink_video.mp4"),
    ],
    modalVideo: [require("./images/pj_alterlink_video.mp4")],
  },

  {
    title: "신비한 Pub",
    image: require("./images/pj_main_pub.jpg"),
    description: "회사 내에서 진행한 프로젝트로 매출관리 프로그램입니다.",
    features: [
      {
        type: "Frontend",
        text: [
          "AuthProvider를 사용하여 로그인 후 접근할 수 있도록 설정했습니다.",
          "Chart.js를 사용하여 연도별로 전체적인 매출을 확인할 수 있도록 했습니다.",
          "일간/월간/연간 매출을 확인할 수 있고, 원하는 항목들만 선택하여 확인할 수 있도록 했습니다.",
          "선택한 날짜, 혹은 전체 기간 동안의 판매량을 비교하여 인기 메뉴를 확인할 수 있도록 했습니다.",
        ],
      },
      {
        type: "Backend",
        text: [
          "mysql과 연동하여 안주/주류 메뉴 정보를 추가할 수 있도록 했으며, 저장을 누르고 다시 접속해도 기존에 입력한 내용들을 확인할 수 있도록 했습니다.",
        ],
      },
    ],
    urls: [{ label: "Github", link: "https://github.com/qwas1121/sinbipub" }],
    modalImages: [
      require("./images/pj_pub01.jpg"),
      require("./images/pj_pub02.jpg"),
      require("./images/pj_pub03.jpg"),
      require("./images/pj_pub04.jpg"),
      require("./images/pj_pub05.jpg"),
      require("./images/pj_pub06.jpg"),
      require("./images/pj_pub07.jpg"),
    ],
  },

  {
    title: "EATCOOK",
    image: require("./images/pj_main_eatcook.jpg"),
    description:
      "식사 때마다 뭘 뭑어야할지 고민되는 사람들을 위한 음식 추천 사이트입니다.",
    features: [
      {
        type: "Frontend",
        text: [
          "각 질문지에서 원하는 것을 선택하면 해당하는 내용이 있는 음식에 숫자가 1씩 증가하여 일치하는 음식을 출력하도록 했습니다.",
          "props를 이용하여 결과값을 지도 부분에 불러올 수 있도록 했습니다.",
        ],
      },
      {
        type: "Backend",
        text: [
          "사용자들이 좋아요를 클릭하면 DB에 저장될 수 있도록 몽고DB를 사용하여 연동했습니다.",
          "그리고 네이버 api를 사용하여 현재 위치에서 해당 음식을 판매하는 음식점 리스트를 불러오고, 음식점 이름을 클릭하면 해당 음식점에 관한 블로그 리뷰를 불러오도록 했습니다.",
          "nginx를 사용하여 react와 node코드를 연동했습니다.",
        ],
      },
    ],
    urls: [
      { label: "URL", link: "https://eatcook.today/" },
      { label: "Github", link: "https://github.com/qwas1121/eatcook_back" },
    ],
    modalImages: [
      require("./images/pj_eatcook01.jpg"),
      require("./images/pj_eatcook02.jpg"),
      require("./images/pj_eatcook03.jpg"),
      require("./images/pj_eatcook04.jpg"),
    ],
  },
];

export default projectData;
