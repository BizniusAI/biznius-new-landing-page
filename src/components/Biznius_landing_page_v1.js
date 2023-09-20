import React from "react";
import cn from "classnames";

import section1Styles from "./Biznius_landing_page_v1_section1.module.scss";
import section2Styles from "./Biznius_landing_page_v1_section2.module.scss";
import section3Styles from "./Biznius_landing_page_v1_section3.module.scss";
import section4Styles from "./Biznius_landing_page_v1_section4.module.scss";
import footerStyles from "./Biznius_landing_page_v1_footer.module.scss";
import styles from "./Biznius_landing_page_v1.module.scss";

function renderSection1(props) {
  return (
    <section className={section1Styles.section1}>
      <div className={section1Styles.rect1} />
      <img
        src={require("assets/b20084f80668eb149495c8d71ec2b9bf.png")}
        alt="alt text"
        className={section1Styles.decorator}
      />

      <div className={section1Styles.flex_row}>
        <div className={section1Styles.flex_row__cell}>
          <px-grid
            track-style="flex-grow: 1;"
            x="0px 539fr 0fr"
            y="0px 377fr 0px"
            xl-x="0px 539fr 0fr"
            xl-y="0px 377fr 0px"
          >
            <div className={section1Styles.flex_col}>
              <div className={section1Styles.flex_col__cell}>
                <h1 className={section1Styles.hero_title}>
                  Maximize the insight from your visitors
                </h1>
              </div>
              <div className={section1Styles.flex_col__cell}>
                <h3 className={section1Styles.subtitle}>
                  Experience Biznius.ai, an easy to embed chatbot that brings
                  human-like interactions to your website.
                </h3>
              </div>
              <div className={section1Styles.flex_col__cell}>
                <div
                  onClick={() =>
                    window.open(
                      "https://forms.office.com/pages/responsepage.aspx?id=CkJzy5glbEiCB7BzkDBhdur_XrILu4xDlaQj8xHonOVUQUdVUVpTWjhDMThFVVhWUjhSVlE0Tjk5Sy4u",
                      "_blank"
                    )
                  }
                  className={section1Styles.box}
                >
                  <h3 className={section1Styles.subtitle3}>Sign Up</h3>
                </div>
              </div>
            </div>
          </px-grid>
        </div>
        <div className={section1Styles.flex_row__spacer} />
        <div className={section1Styles.flex_row__cell1}>
          <img
            src={require("assets/2377193c86d180747e482fd5e81b8892.png")}
            alt="alt text"
            className={section1Styles.image}
          />
        </div>
      </div>

      <img
        src={require("assets/290a1d0f4bbf2b731cbb2e6926d2c8c9.png")}
        alt="alt text"
        className={section1Styles.image1}
      />
    </section>
  );
}

function renderSection2(props) {
  return (
    <section className={section2Styles.section2}>
      <div className={section2Styles.flex_col}  style={{ width: '80%' }}>
        <div className={section2Styles.flex_col__cell}>
          <h1 className={section2Styles.hero_title2}>
            Join Our Testing Program – We're Looking for 10 Participants to
            Exchange $100 Worth of Services for Free!
          </h1>
        </div>
        <div className={section2Styles.flex_col__cell}>
          <div className={footerStyles.flex_col__cell}>
            <div
              onClick={() =>
                window.open(
                  "https://forms.office.com/pages/responsepage.aspx?id=CkJzy5glbEiCB7BzkDBhdur_XrILu4xDlaQj8xHonOVUQUdVUVpTWjhDMThFVVhWUjhSVlE0Tjk5Sy4u",
                  "_blank"
                )
              }
              className={footerStyles.box}
              style={{
                backgroundColor: "#E26D38",
              }}
            >
              <h3 className={footerStyles.subtitle3}>Sign Up</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderSection3(props) {
  return (
    <section className={section3Styles.section3}>
      <div
        style={{
          "--src": `url(${
            require("assets/59f9360f724b8422ae1a1498932fe079.svg").default
          })`,
        }}
        className={section3Styles.decorator1}
      />

      <div className={section3Styles.flex_col}>
        <div className={section3Styles.flex_col__cell}>
          <h1 className={section3Styles.hero_title3}>
            For Our Participants, We Will...{" "}
          </h1>
        </div>
        <div className={section3Styles.flex_col__cell1}>
          <div className={section3Styles.flex_row}>
            <div className={section3Styles.flex_row__cell}>
              <div className={section3Styles.content_box2}>
                <div className={section3Styles.flex_col1}>
                  <div className={section3Styles.flex_col1__cell}>
                    <h3 className={section3Styles.subtitle2}>
                      Understand Problem
                    </h3>
                  </div>
                  <div className={section3Styles.flex_col1__cell}>
                    <h4 className={section3Styles.highlights}>
                      We'll engage in in-depth conversations to gain a deep
                      understanding of your problem
                    </h4>
                  </div>
                </div>

                <h1 className={section3Styles.hero_title5}>1</h1>
              </div>
            </div>
            <div className={section3Styles.flex_row__spacer} />
            <div className={section3Styles.flex_row__cell}>
              <div className={section3Styles.content_box2}>
                <div className={section3Styles.flex_col2}>
                  <div className={section3Styles.flex_col2__cell}>
                    <h3 className={section3Styles.subtitle2}>
                      Solve Your Needs
                      <br />
                    </h3>
                  </div>
                  <div className={section3Styles.flex_col2__cell}>
                    <h4 className={section3Styles.highlights1}>
                      We'll create a custom chatbot tailored to address your
                      specific needs
                    </h4>
                  </div>
                </div>

                <h1 className={section3Styles.hero_title51}>2</h1>
              </div>
            </div>
            <div className={section3Styles.flex_row__spacer1} />
            <div className={section3Styles.flex_row__cell}>
              <div className={section3Styles.content_box4}>
                <h1 className={section3Styles.hero_title52}>3</h1>
                <div className={section3Styles.flex_col3}>
                  <div className={section3Styles.flex_col3__cell}>
                    <h3 className={section3Styles.subtitle2}>
                      Let You Try it Out
                    </h3>
                  </div>
                  <div className={section3Styles.flex_col3__cell}>
                    <h4 className={section3Styles.highlights}>
                      You will receive the chatbot and have the opportunity to
                      use and test it yourself
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className={section3Styles.flex_row__spacer2} />
            <div className={section3Styles.flex_row__cell}>
              <div className={section3Styles.content_box4}>
                <div className={section3Styles.flex_col3}>
                  <div className={section3Styles.flex_col3__cell1}>
                    <h3 className={section3Styles.subtitle2}>
                      List to Your Feedback
                    </h3>
                  </div>
                  <div className={section3Styles.flex_col3__cell1}>
                    <h4 className={section3Styles.highlights}>
                      Please let us know about any suggestions or improvements
                      we can make
                    </h4>
                  </div>
                </div>

                <h1 className={section3Styles.hero_title53}>4</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderSection4(props) {
  return (
    <section className={section4Styles.section4}>
      <div className={section4Styles.flex_col}>
        <div className={section4Styles.flex_col__cell}>
          <h1
            className={section4Styles.hero_title4}
          >{`Why Invest Your Time With Us?`}</h1>
        </div>
        <div className={section4Styles.flex_col__cell}>
          <div className={section4Styles.flex_row}>
            <div className={section4Styles.flex_row__cell}>
              <img
                src={require("assets/16917837de2f61f5df3b8571a0c5547e.png")}
                alt="alt text"
                className={section4Styles.image3}
              />
            </div>
            <div className={section4Styles.flex_row__spacer} />
            <div className={section4Styles.flex_row__cell1}>
              <div className={section4Styles.flex_col1}>
                <div className={section4Styles.flex_col1__cell}>
                  <h1 className={section4Styles.big_title1}>
                    Tailored Chatbot Experience
                  </h1>
                </div>
                <div className={section4Styles.flex_col1__cell}>
                  <h3
                    className={section4Styles.subtitle4}
                  >{`Our commitment goes beyond just providing a chatbot. We invest our time to ensure it truly reflects your brand. We tune the AI to match your specific requirements, tone, and company's style, delivering tailored responses, not generic ones.`}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={section4Styles.flex_col__cell}>
          <div className={section4Styles.flex_row1}>
            <div className={section4Styles.flex_row1__cell}>
              <div className={section4Styles.flex_col2}>
                <div className={section4Styles.flex_col2__cell}>
                  <h1 className={section4Styles.big_title1}>
                    Exclusive Offer for Our Testers
                  </h1>
                </div>
                <div className={section4Styles.flex_col2__cell}>
                  <h3
                    className={section4Styles.subtitle41}
                  >{`As a token of our appreciation for being a valued tester, you'll receive your chatbot for free once our testing phase concludes. It's our way of saying thank you for your invaluable feedback and support.`}</h3>
                </div>
              </div>
            </div>
            <div className={section4Styles.flex_row1__spacer} />
            <div className={section4Styles.flex_row1__cell1}>
              <img
                src={require("assets/06930ad3b7339c4732f919e1f4e3e062.png")}
                alt="alt text"
                className={section4Styles.image2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderFooter(props) {
  return (
    <section className={footerStyles.footer}>
      <div className={footerStyles.content_box6}>
        <div className={footerStyles.flex_col}>
          <div className={footerStyles.flex_col__cell}>
            <h1 className={footerStyles.hero_title6_box}>
              <span className={footerStyles.hero_title6}>
                <span className={footerStyles.hero_title6_span0}>
                  Sign up now
                </span>
              </span>
            </h1>
          </div>
          <div className={footerStyles.flex_col__cell}>
            <div
              onClick={() =>
                window.open(
                  "https://forms.office.com/pages/responsepage.aspx?id=CkJzy5glbEiCB7BzkDBhdur_XrILu4xDlaQj8xHonOVUQUdVUVpTWjhDMThFVVhWUjhSVlE0Tjk5Sy4u",
                  "_blank"
                )
              }
              className={footerStyles.box}
            >
              <h3 className={footerStyles.subtitle3}>Sign Up</h3>
            </div>
          </div>
          <div className={footerStyles.flex_col__cell}>
            <h3 className={footerStyles.subtitle}>
              Biznius.ai © Copyright 2023. All Rights Reserved.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

function Biznius_landing_page_v1(props) {
  return (
    <main className={cn(styles.main, "biznius-landing-page-v1")}>
      <div className={styles.main__cell}>{renderSection1(props)}</div>
      <div className={styles.main__cell}>{renderSection2(props)}</div>
      <div className={styles.main__cell}>{renderSection3(props)}</div>
      <div className={styles.main__cell}>{renderSection4(props)}</div>
      <div className={styles.main__cell}>{renderFooter(props)}</div>
    </main>
  );
}

export default Biznius_landing_page_v1;
