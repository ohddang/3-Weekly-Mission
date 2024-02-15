// if (!window.Kakao.isInitialized()) {
// window.Kakao.init("9689f3bf08e90e99b3853de68837a33f");
// }

const shareKakao = (shareURL = "") => {
  console.log(shareURL);

  // window.Kakao.Share.sendDefault({
  //   objectType: "feed",
  //   content: {
  //     title: "Linkbrary",
  //     description: "링크를 저장하고 공유하는 가장 쉬운 방법",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D",
  //     link: {
  //       mobileWebUrl: shareURL,
  //       webUrl: shareURL,
  //     },
  //   },
  // });
};

export default shareKakao;

// document 파일에서 카카오 sdk 추가하기
// import Document, { Html, Head, Main, NextScript } from 'next/document';

// class MyDocument extends Document {
//   render() {
//     return (
//       <Html>
//         <Head>
//           <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
//           {/* Other head elements */}
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// export default MyDocument;
