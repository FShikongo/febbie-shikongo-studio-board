import React from "react";
import "./Features.scss";

import bts from "../../assets/Gif/bts.gif";
import makeup from "../../assets/Gif/hair-makeup2.gif";
import cannesff from "../../assets/Gif/festival-de-cannes.gif";

const FeaturedOpportunities = () => {
  const featuredOpportunities = [
    {
      image: bts,
      title: "Crew Call Short Film",
      description:
        "Join a dynamic team in the film industry. Apply now for an exciting role!",
    },
    {
      image: makeup,
      title: "Hair and Makeup",
      description:
        "Designs and styles of hair and make-up looks for all the characters.",
    },
    {
      image: cannesff,
      title: "Film Festival",
      description:
        "Attend the biggest film festival of the year and network with industry leaders.",
    },
  ];

  return (
    <section className="features">
      <h2 className="features__title">Featured Opportunities</h2>
      <div className="features__list">
        {featuredOpportunities.map((opportunity, index) => (
          <div
            key={index}
            className={`features__item ${
              index % 2 === 0 ? "features__item--alt" : ""
            }`}
          >
            <div
              className="features__image"
              style={{ backgroundImage: `url(${opportunity.image})` }}
            ></div>
            <div className="features__text">
              <h3 className="features__title">{opportunity.title}</h3>
              <p className="features__description">{opportunity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedOpportunities;

// import { useState, useEffect } from "react";
// import React from "react";
// import "./Features.scss";

// import bts from "../../assets/Gif/bts.gif";
// import makeup from "../../assets/Gif/hair-makeup2.gif";
// import cannesff from "../../assets/Gif/festival-de-cannes.gif";

// const featureVideos = [
//   { id: "feature1", img: bts },
//   { id: "feature2", img: makeup },
//   { id: "feature3", img: cannesff },
// ];

// const FeaturedOpportunities = () => {
//   const featuredOpportunities = [
//     {
//       image: bts,
//       title: "Crew Call Short Film",
//       description:
//         "Join a dynamic team in the film industry. Apply now for an exciting role!",
//     },
//     {
//       image: makeup,
//       title: "Hair and Makeup",
//       description:
//         "Designs and styles of hair and make-up looks for all the characters.",
//     },
//     {
//       image: cannesff,
//       title: "Film Festival",
//       description:
//         "Attend the biggest film festival of the year and network with industry leaders.",
//     },
//   ];

//   return (
//     <section className="features">
//       <h2 className="features__title">Featured Opportunities</h2>
//       <div className="features__list">
//         {featuredOpportunities.map((opportunity, index) => (
//           <div key={index} className="features__card">
//             <div
//               className="features__card-image"
//               style={{ backgroundImage: `url(${opportunity.image})` }}
//             >
//               <h3 className="features__card-title">{opportunity.title}</h3>
//             </div>
//             <div className="features__card-text">
//               <p className="features__card-description">
//                 {opportunity.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FeaturedOpportunities;

// export default function Features() {
//   return (
//     <main className="main">
//       <section className="features">
//         <h2 className="features__title">Featured Opportunities</h2>
//         <div className="features__list">
//           {featureVideos.map((feature) => (
//             <div key={feature.id} className="features__card">
//               <div className="features__card-image">
//                 <img
//                   src={feature.img}
//                   alt={feature.id}
//                   className="feature-gif"
//                 />
//                 <h3 className="features__card-title">
//                   {feature.id === "feature1"
//                     ? "Crew Call Short Film"
//                     : feature.id === "feature2"
//                     ? "Hair and Makeup"
//                     : "Film Festival"}
//                 </h3>
//               </div>
//               <div className="features__card-text">
//                 <p className="features__card-description">
//                   {feature.id === "feature1"
//                     ? "Join a dynamic team in the film industry. Apply now for an exciting role!"
//                     : feature.id === "feature2"
//                     ? "Designs and styles of hair and make-up looks for all the characters."
//                     : "Attend the biggest film festival of the year and network with industry leaders."}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }
