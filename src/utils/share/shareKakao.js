if (!window.Kakao.isInitialized()) {
  window.Kakao.init("9689f3bf08e90e99b3853de68837a33f");
}

const shareKakao = () => {
  window.Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: "타이틀이요",
      description: "타이틀 설명",
      imageUrl:
        "http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
      link: {
        mobileWebUrl: "http://localhost:3000",
        webUrl: "http://localhost:3000",
      },
    },
  });
};

export default shareKakao;
