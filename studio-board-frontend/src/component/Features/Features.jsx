// import React from "react";
// import "./Features.scss";

// import bts from "../../assets/Gif/bts.gif";
// import makeup from "../../assets/Gif/hair-makeup2.gif";
// import cannesff from "../../assets/Gif/festival-de-cannes.gif";

// const FeaturedOpportunities = () => {
//   const featuredOpportunities = [
//     {
//       image: bts,
//       title: "Crew Call Short Film",
//       description:
//         "Join a dynamic team in the film industry. Apply now for an exciting role!",
//       company: "Studio Board Productions",
//       website: "www.studioboard.com",
//       email: "info@studioboard.com",
//     },
//     {
//       image: makeup,
//       title: "Hair and Makeup",
//       description:
//         "Designs and styles of hair and make-up looks for all the characters.",
//       company: "GlamFX Studio",
//       website: "www.glamfxstudio.com",
//       email: "info@glamfxstudio.com",
//     },
//     {
//       image: cannesff,
//       title: "Film Festival",
//       description:
//         "Attend the biggest film festival of the year and network with industry leaders.",
//       company: "Cannes Film Festival",
//       website: "www.festival-cannes.com",
//       email: "info@festival-cannes.com",
//     },
//   ];

//   return (
//     <section className="features">
//       <h2 className="features__title">Featured Opportunities</h2>
//       <div className="features__list features__scroll">
//         {featuredOpportunities.map((opportunity, index) => (
//           <div key={index} className="features__item">
//             <div
//               className="features__image"
//               style={{ backgroundImage: `url(${opportunity.image})` }}
//             ></div>
//             <div className="features__text">
//               <h3 className="features__title">{opportunity.title}</h3>
//               <p className="features__description">{opportunity.description}</p>
//               <p className="features__company">
//                 <strong>{opportunity.company}</strong>
//               </p>
//               <p className="features__contact">
//                 <a href={`mailto:${opportunity.email}`}>{opportunity.email}</a>{" "}
//                 |{" "}
//                 <a
//                   href={`https://${opportunity.website}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {opportunity.website}
//                 </a>
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FeaturedOpportunities;

import React from "react";
import "./Features.scss";

import bts from "../../assets/Gif/bts.gif";
import makeup from "../../assets/Gif/hair-makeup2.gif";
import cannesff from "../../assets/Gif/festival-de-cannes.gif";

const Features = () => {
  const features = [
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
      <div className="features__list features__scroll">
        {features.map(
          (
            feature,
            index // Fix here: Use "features"
          ) => (
            <div key={index} className="features__item">
              <div
                className="features__image"
                style={{ backgroundImage: `url(${feature.image})` }}
              ></div>
              <div className="features__text">
                <h3 className="features__title">{feature.title}</h3>
                <p className="features__description">{feature.description}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Features;
