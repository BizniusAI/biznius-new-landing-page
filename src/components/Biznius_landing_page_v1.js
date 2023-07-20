import React from 'react';
import cn from 'classnames';

import section1Styles from './Biznius_landing_page_v1_section1.module.scss';
import section2Styles from './Biznius_landing_page_v1_section2.module.scss';
import section3Styles from './Biznius_landing_page_v1_section3.module.scss';
import section4Styles from './Biznius_landing_page_v1_section4.module.scss';
import footerStyles from './Biznius_landing_page_v1_footer.module.scss';
import styles from './Biznius_landing_page_v1.module.scss';

function renderSection1(props) {
  return (
    <section className={section1Styles.section1}>
      <div className={section1Styles.rect1} />
      <img
        src={require('assets/b20084f80668eb149495c8d71ec2b9bf.png')}
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
            xl-y="0px 377fr 0px">
            <div className={section1Styles.flex_col}>
              <div className={section1Styles.flex_col__cell}>
                <h1 className={section1Styles.hero_title}>Maximize the insight from your visitors</h1>
              </div>
              <div className={section1Styles.flex_col__cell}>
                <h3 className={section1Styles.subtitle}>
                  Experience Biznius.ai, an easy to embed chatbot that brings human-like interactions to your website.
                  Yet, we go beyond; we turn your customer conversations into potent strategies for growth.
                </h3>
              </div>
              <div className={section1Styles.flex_col__cell}>
                <div
                  onClick={() =>
                    window.open(
                      'https://docs.google.com/forms/d/e/1FAIpQLSdyqzzGMS8i2moJKZVDhEcyUtGIhVpn_5eXg03S0jkFEMKXlA/viewform?usp=sf_link',
                      '_blank'
                    )
                  }
                  className={section1Styles.box}>
                  <h3 className={section1Styles.subtitle3}>Sign Up</h3>
                </div>
              </div>
            </div>
          </px-grid>
        </div>
        <div className={section1Styles.flex_row__spacer} />
        <div className={section1Styles.flex_row__cell1}>
          <img
            src={require('assets/2377193c86d180747e482fd5e81b8892.png')}
            alt="alt text"
            className={section1Styles.image}
          />
        </div>
      </div>

      <img
        src={require('assets/290a1d0f4bbf2b731cbb2e6926d2c8c9.png')}
        alt="alt text"
        className={section1Styles.image1}
      />
    </section>
  );
}

function renderSection2(props) {
  return (
    <section className={section2Styles.section2}>
      <div className={section2Styles.flex_col}>
        <div className={section2Styles.flex_col__cell}>
          <h1 className={section2Styles.hero_title2}>Pricing Plan</h1>
        </div>
        <div className={section2Styles.flex_col__cell}>
          <div
            style={{ '--src': `url(${require('assets/000d1039e113067bcda711d6b8e63c56.png')})` }}
            className={section2Styles.content_box}>
            <div className={section2Styles.content_box1}>
              <h3 className={section2Styles.subtitle1}>Limited-Time Offer</h3>
            </div>

            <div className={section2Styles.flex_col1}>
              <div className={section2Styles.flex_col1__cell}>
                <h1 className={section2Styles.hero_title1}>Free!</h1>
              </div>
              <div className={section2Styles.flex_col1__cell}>
                <h1 className={section2Styles.big_title_box}>
                  <span className={section2Styles.big_title}>
                    <span className={section2Styles.big_title_span0}>$49</span>
                    <span className={section2Styles.big_title_span1}> </span>
                    <span className={section2Styles.big_title_span2}>/month</span>
                  </span>
                </h1>
              </div>
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
        style={{ '--src': `url(${require('assets/59f9360f724b8422ae1a1498932fe079.svg').default})` }}
        className={section3Styles.decorator1}
      />

      <div className={section3Styles.flex_col}>
        <div className={section3Styles.flex_col__cell}>
          <h1 className={section3Styles.hero_title3}>Start using effortlessly </h1>
        </div>
        <div className={section3Styles.flex_col__cell1}>
          <div className={section3Styles.flex_row}>
            <div className={section3Styles.flex_row__cell}>
              <div className={section3Styles.content_box2}>
                <div className={section3Styles.flex_col1}>
                  <div className={section3Styles.flex_col1__cell}>
                    <h3 className={section3Styles.subtitle2}>Add your domain</h3>
                  </div>
                  <div className={section3Styles.flex_col1__cell}>
                    <h4 className={section3Styles.highlights}>
                      We will automatically crawl and extract all the valuable information from your website.
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
                    <h3 className={section3Styles.subtitle21}>
                      Embed the chatbot <br />
                    </h3>
                  </div>
                  <div className={section3Styles.flex_col2__cell}>
                    <h4 className={section3Styles.highlights1}>
                      Onto your website effortlessly to enable its powerful capabilities.
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
                    <h3 className={section3Styles.subtitle2}>Customers indulge</h3>
                  </div>
                  <div className={section3Styles.flex_col3__cell}>
                    <h4 className={section3Styles.highlights}>In the seamless experience of our human-like chatbot.</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className={section3Styles.flex_row__spacer2} />
            <div className={section3Styles.flex_row__cell}>
              <div className={section3Styles.content_box4}>
                <div className={section3Styles.flex_col3}>
                  <div className={section3Styles.flex_col3__cell1}>
                    <h3 className={section3Styles.subtitle2}>Receive reports</h3>
                  </div>
                  <div className={section3Styles.flex_col3__cell1}>
                    <h4 className={section3Styles.highlights}>Provide insights based on all the conversations</h4>
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
          <h1 className={section4Styles.hero_title4}>{`What's included?`}</h1>
        </div>
        <div className={section4Styles.flex_col__cell}>
          <div className={section4Styles.flex_row}>
            <div className={section4Styles.flex_row__cell}>
              <img
                src={require('assets/16917837de2f61f5df3b8571a0c5547e.png')}
                alt="alt text"
                className={section4Styles.image3}
              />
            </div>
            <div className={section4Styles.flex_row__spacer} />
            <div className={section4Styles.flex_row__cell1}>
              <div className={section4Styles.flex_col1}>
                <div className={section4Styles.flex_col1__cell}>
                  <h1 className={section4Styles.big_title1}>Advanced Pre-sales Chatbot</h1>
                </div>
                <div className={section4Styles.flex_col1__cell}>
                  <h3
                    className={
                      section4Styles.subtitle4
                    }>{`Transform your website's visitor experience with our human-like presales chatbot. Watch as it intuitively guides your visitors, answering their queries, and helping them find what they're looking for.`}</h3>
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
                  <h1 className={section4Styles.big_title1}>Bi-Weekly Business Reports</h1>
                </div>
                <div className={section4Styles.flex_col2__cell}>
                  <h3
                    className={
                      section4Styles.subtitle41
                    }>{`Get insights like never before with our bi-weekly business reports. Leveraging advanced Machine Learning models, we'll deep-dive into your customer interactions data, providing you with actionable insights and valuable understanding of your customers' needs and preferences.`}</h3>
                </div>
              </div>
            </div>
            <div className={section4Styles.flex_row1__spacer} />
            <div className={section4Styles.flex_row1__cell1}>
              <img
                src={require('assets/06930ad3b7339c4732f919e1f4e3e062.png')}
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
                <span className={footerStyles.hero_title6_span0}>Sign up</span>
                <span className={footerStyles.hero_title6_span1}> </span>
                <span className={footerStyles.hero_title6_span2}>now</span>
              </span>
            </h1>
          </div>
          <div className={footerStyles.flex_col__cell}>
            <div
              onClick={() =>
                window.open(
                  'https://docs.google.com/forms/d/e/1FAIpQLSdyqzzGMS8i2moJKZVDhEcyUtGIhVpn_5eXg03S0jkFEMKXlA/viewform?usp=sf_link',
                  '_blank'
                )
              }
              className={footerStyles.box}>
              <h3 className={footerStyles.subtitle3}>Sign Up</h3>
            </div>
          </div>
          <div className={footerStyles.flex_col__cell}>
            <h3 className={footerStyles.subtitle}>Biznius.ai © Copyright 2023. All Rights Reserved.</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

function Biznius_landing_page_v1(props) {
  return (
    <main className={cn(styles.main, 'biznius-landing-page-v1')}>
      <div className={styles.main__cell}>{renderSection1(props)}</div>
      <div className={styles.main__cell}>{renderSection2(props)}</div>
      <div className={styles.main__cell}>{renderSection3(props)}</div>
      <div className={styles.main__cell}>{renderSection4(props)}</div>
      <div className={styles.main__cell}>{renderFooter(props)}</div>
    </main>
  );
}

export default Biznius_landing_page_v1;
