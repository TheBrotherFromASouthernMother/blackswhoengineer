import React from "react";
import Link from "gatsby-link";
import Nav from "../components/nav";
import styles from "./about.module.scss";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import { graphql } from "gatsby";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Helmet title="About | Blacks Who Engineer" />
        <Nav theme={"light"} />
        <div className={styles.container}>
          <h1 className={styles.h1}>About this project</h1>
          <p>
            Blacks Who Engineer is a Twitter directory of
            accomplished Black folks in the
            tech industry. It aims to help people find notable and relevant
            voices to follow on Twitter by parsing Twitter bios for popular
            keywords.
          </p>
          <p>Here are some things Blacks Who Engineer can help you with:</p>
          <h2 className={styles.emphasis}>
            If you're a hiring manager, use this project to find candidates.{" "}
          </h2>
          <p>
            Examine the diversity of senior engineers and leaders
            in your organization. Are Black folks, especially
            Black women, equally represented?  Promote and give
            growth opportunities to Black engineers.
          </p>

          <h2 className={styles.emphasis}>
            If you're organizing a conference, use this project to find
            speakers.
          </h2>
          <p>
            Ensure that Black folks have prominent speaking slots.
            Are Black women equally represented? Consider reaching 
            out to Black folks who have never given a talk before.
          </p>

          <h2 className={styles.emphasis}>
            If you have a podcast, use this project to find new guests.{" "}
          </h2>
          <p>
            Be mindful of interruptions and ensure that your guests get
            equal speaking time. Are Black women equally represented?
            Consider inviting Black folks who don't already have an audience.
          </p>

          <h2 className={styles.emphasis}>Further reading</h2>
          <p>
            For becoming a better ally – to women, people of color, LGBTQ,
            disabled, ESL or any other marginalized group.
          </p>

          <ul className={styles.ul}>
            <li className={styles.liLinks}>
              <a target="_blank" href="https://womenwho.design">
                Women Who Design
              </a>{" "}
              by Jules Forrest
            </li>
            <li className={styles.liLinks}>
              <a target="_blank" href="https://latinxswhodesign.com">
                Latinxs Who Design
              </a>{" "}
              by Pablo Stanley
            </li>
            <li className={styles.liLinks}>
              <a target="_blank" href="https://blackswho.design">
                Blacks Who Design
              </a>{" "}
              by Wes O'Haire
            </li>
            <li className={styles.liLinks}>
              <a target="_blank" href="http://www.guidetoallyship.com/">
                Guide to Allyship
              </a>{" "}
              by Amélie Lamont
            </li>
            <li className={styles.liLinks}>
              <a target="_blank" href="https://peopleofcraft.com/">
                People of Craft
              </a>{" "}
              by Amélie Lamont & Timothy Goodman
            </li>
            <li className={styles.liLinks}>
              <a
                target="_blank"
                href="https://medium.com/@nmsanchez/how-to-build-inclusive-culture-360160f417a1"
              >
                How to Build Inclusive Culture
              </a>{" "}
              by Nicole Sanchez
            </li>
            <li className={styles.liLinks}>
              <a
                target="_blank"
                href="https://medium.com/mule-design/be-a-pal-my-dudes-a34c06df1b1d"
              >
                Be a Pal, My Dudes
              </a>{" "}
              by Erika Hall
            </li>
            <li className={styles.liLinks}>
              <a
                target="_blank"
                href="https://larahogan.me/blog/what-sponsorship-looks-like/"
              >
                What Does Sponsorship Look Like?
              </a>{" "}
              by Lara Hogan
            </li>
            <li className={styles.liLinks}>
              <a
                target="_blank"
                href="https://www.huffingtonpost.com/entry/some-garbage-i-used-to-believe-about-equality_us_58501c5be4b0151082221ef7"
              >
                Some Garbage I Used to Believe About Equality
              </a>{" "}
              by Johnathan Nightingale
            </li>
            <li className={styles.liLinks}>
              <a href="https://www.proporti.onl/" target="_blank">
                proporti.onl
              </a>{" "}
              helps you check the gender ratio of the people you follow on Twitter.  If you're following more men than women, use this project to follow women and diversify the voices in your feed. Be aware that a feed of only white women is not diverse.
            </li>
            <li className={styles.liLinks}>
              <a
                target="_blank"
                href="https://afrotech.com"
              >
                AfroTech
              </a>{" "}
              by <a target="_blank" href="https://blavityinc.com">Blavity, Inc.</a>
            </li>

          </ul>

          <h2 className={styles.emphasis}>Opt out</h2>
          <p>
            If you've been featured in the directory and you'd rather not be,
            please send a DM to{" "}
            <a href="https://twitter.com/BlacksWhoEng" target="_blank">
              @BlacksWhoEng
            </a>{" "}
            on Twitter and you will be removed.
          </p>
          <h2 className={styles.emphasis}>Adinkra</h2>
          <p>
            The Blacks Who Engineer logo incorporates 8-bit
            adaptations of Adinkra symbols&mdash;if you're not
            already familiar with the symbols, here are some
            resources we found valuable:
            <ul className={styles.ul}>
              <li className={styles.liLinks}>
                <a href="https://en.wikipedia.org/wiki/Adinkra_symbols">
                  Wikipedia: Adinkra Symbols
                </a>
              </li>
              <li className={styles.liLinks}>
                <a href="http://www.adinkra.org/htmls/adinkra_index.htm">
                  Adinkra Index at adinkra.org
                </a>
              </li>
              <li className={styles.liLinks}>
                <a href="https://academicjournals.org/journal/PPR/article-full-text-pdf/A5A4C6E58407">
                  The philosophy behind some Adinkra symbols and their communicative values in Akan
                </a> by J. E. T. Kuwornu-Adjaottor, George Appiah and Melvin Nartey
              </li>
            </ul>

          </p>
          <h2 className={styles.emphasis}>Special thanks</h2>
          <p>
            We couldn't have built this site alone&mdash;we have
            the following folks to thank:
            <ul>
              <li className={styles.liLinks}>
                <a href="https://blackswho.design" target="_blank">
                  Blacks Who Design
                </a>{" "}
                for the original inspiration
              </li>
              <li className={styles.liLinks}>
                <a href="https://womenwho.design" target="_blank">
                  Women Who Design
                </a>{" "}
                for allowing similar sites to fluorish by
                open-sourcing their code!
              </li>
              <li className={styles.liLinks}>
                <a href="https://jaime.design/" target="_blank">
                  Jaime Sparr
                </a>{" "}
                for creating the 8-bit Adinkra designs, as
                well as the associated logos, icons, and design
                sensibility
              </li>
            </ul>
          </p>

          <h2 className={styles.emphasis}>Note</h2>
          <p>
            This project is in a work-in-progress. If you have a suggestion or
            find a bug, please let me know.
          </p>

          <p>
            &mdash;Christian Lowe (
            <a href="https://twitter.com/deeblekpantha" target="_blank">
              @deeblekpantha
            </a>)
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
