// "use client";

// import { useState, useEvffect } from "react";
// import { useLocation } from "react-router-dom";

// async function getUserProfile() {
//   const user_id = 1;

//   const response = await fetch(`https://bootcamp-api.codeit.kr/api/users/${user_id}`);
//   const find_user = await response.json().then((result) => {
//     return result.data?.find((user: any) => user.id === user_id);
//   });

//   return {
//     name: find_user.name,
//     email: find_user.email,
//     image_source: find_user.image_source,
//   };
// }

// const NavigatorBar = () => {
//   const [userProfile, setUserProfile] = useState({
//     name: "",
//     email: "",
//     image_source: "",
//   });

//   const location = useLocation();

//   const isShared = router.pathname; // location.pathname.includes("shared");
//   const position_property = isShared ? "fixed" : "relative";
//   const isExistProfile = userProfile.name !== "" && userProfile.email !== "";

//   useEffect(() => {
//     getUserProfile().then((result) => {
//       const { name, email, image_source } = result;
//       setUserProfile({
//         name: name,
//         email: email,
//         image_source: image_source,
//       });
//     });
//   }, []);

//   // style : Fixme navigation_container style position fixed or relative
//   return (
//     <>
//       <section className="navigation_container" style={{ position: "fixed" }}>
//         <div className="navigation_bar">
//           <a href="/" className="linkbrary">
//             <img src="/images/linkbrary.svg" />
//           </a>
//           {isExistProfile ? (
//             <div className="profile">
//               <img src={userProfile.image_source} className="profile_image" />
//               <span className="font_profile">{userProfile.email}</span>
//             </div>
//           ) : (
//             <a href="signin/signin.html" className="login font_button">
//               로그인
//             </a>
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default NavigatorBar;
