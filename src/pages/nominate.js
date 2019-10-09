import React from "react";
import Link from "gatsby-link";
import Nav from "../components/nav";
import styles from "./about.module.scss";
import _ from "lodash";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.designerArray = props.data.allTwitterProfile.edges;
    this.state = {
      name: "",
      reason: "",
      formSubmitted: false,
      nameValidationMessage: null
    };
  }

  searchForName = name => {
    const formattedName = name.replace("@", "").trim();
    const found = _.find(this.designerArray, function(o) {
      return (
        o.node.profile.screen_name.toLowerCase() === formattedName.toLowerCase()
      );
    });
    return found ? true : false;
  };

  validateName = () => {
    const name = this.state.name.replace("@", "");
    if (this.searchForName(name)) {
      this.setState({
        nameValidationMessage: `🎉  Good news, ${name} is already in the directory.`
      });
      return true;
    } else {
      this.setState({
        nameValidationMessage: null
      });
      return false;
    }
  };

  handleSubmit = e => {
    const validation = this.validateName();

    if (validation) {
    } else {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "nominations", ...this.state })
      })
        .then(() => this.setState({ formSubmitted: true }))
        .catch(error => console.log(error));
    }
    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, reason } = this.state;

    return (
      <Layout>
        <Helmet title="Nominate | Blacks Who Engineer" />
        <Nav theme={"light"} />
        <div className={styles.container}>
          <h1 className={styles.h1}>Nominate</h1>

          <p className={styles.p}>
            If you know a Black engineer whose voice is valuable
            to the software industry,
            please send us a direct message at <a href="https://twitter.com/BlacksWhoEng">@BlacksWhoEng </a> with their Twitter handle and a few words about why you're nominating them.
          </p>
          <div className={styles.backContainer}>
            <Link to="/" className={styles.backLink}>
              Back to directory
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
}

export default App;

export const pageQuery = graphql`
  query Nominate {
    allTwitterProfile {
      edges {
        node {
          profile {
            screen_name
          }
        }
      }
    }
  }
`;
