/** @jsx jsx */
import { jsx, Box, Container, Text } from 'theme-ui';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
      <Box sx={styles.topDivider} />
      <Text sx={styles.footerCopyright}>
        &copy; {new Date().getFullYear()} Biznius.ai. All rights reserved.
      </Text>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: 'white',
    textAlign: 'center',
    px: 4,
    py: [4, 5],
  },
  topDivider: {
    borderTop: '1px solid',
    borderTopColor: 'border_color',
  },
  footerCopyright: {
    fontSize: [1, '15px'],
    color: 'text',
    pt: 3, // padding-top to give space between divider and text
  },
};
