import React from "react";
import { Helmet } from "react-helmet";
import "../styles/index.scss";

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Blacks Who Engineer"
      meta={[
        {
          property: "description",
          content:
            "A Twitter directory of accomplished Black folks in the software industry."
        },
        { property: "og:title", content: "Blacks Who Engineer" },
        {
          property: "og:description",
          content:
            "A Twitter directory of accomplished Black folks in the software industry."
        },

        {
          property: "og:image",
          content: "https://blackswho.engineer/opengraph.png"
        },
        {
          property: "og:url",
          content: "https://blackswho.engineer"
        },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Blacks Who Engineer" },
        { property: "twitter:site", content: "@BlacksWhoEng" },
        { property: "twitter:creator", content: "@DeeBlekPantha" },
        { property: "twitter:card", content: "summary_large_image" },
        {
          property: "twitter:image",
          content: "https://blackswho.engineer/opengraph.png"
        }
      ]}
    />
    {children}
  </div>
);

export default Layout;
