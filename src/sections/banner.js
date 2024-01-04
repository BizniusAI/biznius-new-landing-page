/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Heading, Text, Image, Button } from 'theme-ui';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'components/link';
import { FaPlayCircle } from 'react-icons/fa';
import BannerBG from 'assets/bannerBg.png';
import BannerThumb from 'assets/banner-thumb.png';

import ntdpLogo from 'assets/support/NTDP.png';
import newNativeLogo from 'assets/support/NewNative.png';
import microsoftLogo from 'assets/support/MSFT.png';

const data = [
  {
    id: 1,
    path: 'https://ntdp.gov.sa/en',
    image: ntdpLogo,
    title: 'NTDP',
  },
  {
    id: 2,
    path: 'https://newnative.ai/',
    image: newNativeLogo,
    title: 'NewNative',
  },
  {
    id: 3,
    path: 'https://www.microsoft.com/en-us/startups',
    image: microsoftLogo,
    title: 'Microsoft for Startups',
  },
];

export default function Banner() {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Smart AI Customer Service Agents for E-Commerce
          </Heading>
          <Text as="p" variant="heroSecondary">
            Let Biznius.ai handle your customer interactions, providing quick and helpful responses that reflect your brand's unique voice.
          </Text>
          <Flex>
  <Button variant="whiteButton" aria-label="Get Started" onClick={() => window.location.href='https://forms.gle/Lh4Lzwpiz9QFkE4SA'}>
    Get Started
  </Button>
  <>
    {/* Commenting out the ModalVideo component and Watch Video button for now */}
    {/* <ModalVideo
      channel="youtube"
      isOpen={videoOpen}
      videoId="ZNA9rmDsYVE"
      onClose={() => setVideoOpen(false)}
    />
    <Button
      variant="textButton"
      aria-label="Watch Video"
      onClick={handleClick}
    >
      <FaPlayCircle /> Watch Video
    </Button> */}
    <Button
      variant="textButton"
      aria-label="Watch Video"
      disabled
      sx={{ cursor: 'not-allowed', opacity: 0.5 }}
    >
      <FaPlayCircle /> Video Coming Soon
    </Button>
  </>
</Flex>

          <Flex sx={styles.sponsorBox}>
            <Text sx={styles.sponsorTitle}>Supported by:</Text>
            <Box sx={styles.sponsorBox.sponsor}>
              {data.map((item, index) => (
                <Link path={item.path} key={`client-key${index}`}>
                  <Image src={item.image} alt={item.title} sx={styles.logoImage} />
                </Link>
              ))}
            </Box>
          </Flex>
        </Box>

        <Box sx={styles.banner.imageBox}>
          {/* <Image src={BannerThumb} alt="banner" /> */}
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundImage: `url(${BannerBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ['250px', null, null, null, null, null, '140px', '130px'],
    pb: ['100px', null, null, '110px', null, 10, '150px'],
    backgroundColor: 'rgba(242, 102, 102, 1)',
    // container: {
    //   display: 'flex',
    // },
    // contentBox: {
    //   width: ['100%', null, '85%', '55%', '50%', '55%'],
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'flex-start',
    //   flexShrink: 0,
    //   pt: [0, null, null, null, null, null, 5, 7],
    // },
    // imageBox: {
    //   display: ['none', null, null, 'block'],
    //   justifyContent: 'center',
    //   ml: [0, null, null, '-110px', '-115px', '-150px', '-210px', '-270px'],
    //   mr: [0, null, null, '-145px', '-160px', '-180px', '-220px', '-290px'],
    //   mt: [0, null, null, '40px', 4, 7, 0],
    //   mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],
    //   overflow: 'hidden',
    //   textAlign: 'right',
    //   width: '100%',
    // },
    container: {
      maxWidth: 'none', // Remove the max-width constraint
      padding: '0', // Remove any default padding
      display: 'block', // Change display to block to allow heading to take full width
    },
    contentBox: {
      width: '100%', // Allow content box to take full width of the container
      display: 'block', // Change display to block for the content box
      textAlign: 'center', // Center the text for larger screens
      pt: [0, null, null, null, null, null, 5, 7],
      pb: [0, null, null, null, null, null, 5, 7],
    },
    imageBox: {
      display: 'none', // Since we removed the image, we don't need this box anymore
    },
  },
  sponsorTitle: {
    color: 'white',
    fontSize: [1, 2],
    opacity: 0.6,
    pr: 20,
    flexShrink: 0,
    pb: [2, null, 0],
  },
  logoImage: {
    height: '35px', // Set a fixed height
    width: 'auto', // Adjust width to maintain aspect ratio
  },
  sponsorBox: {
    pt: ['35px', null, null, null, null, '45px'],
    flexDirection: ['column', null, 'row'],
    sponsor: {
      display: 'flex',
      alignItems: 'center',
      '> a': {
        mr: [5, null, null, 4, 6],
        display: 'flex',
        '&:last-of-type': {
          mr: 0,
        },
      },
    },
  },
};
