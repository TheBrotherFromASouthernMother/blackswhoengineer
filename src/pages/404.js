import React from "react";
import Link from "gatsby-link";
import Nav from "../components/nav";
import styles from "./404.module.scss";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const App = (props) => (
  <div>
    <div className={styles.container}>
      <div className="main">
        <div className="card">
          <h1 className={styles.h1}> Page Not Found </h1>
          <p>
            Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
          </p>
          <a href="/">  Back to our site </a>
        </div>
      </div>
    </div>
  </div>
);


export default App;
