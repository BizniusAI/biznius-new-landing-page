import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Biznius_landing_page_v1 from 'components/Biznius_landing_page_v1';
import AOS from 'aos';
import Sticky from 'sticky-js';
import { isMobile } from 'react-device-detect';

import 'aos/dist/aos.css';
import './fonts.css';

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      AOS.init({
        offset: isMobile ? 10 : 100,
      });

      this.stickey = new Sticky('.sticky-effect');
    }, 1500);
  }

  componentDidUpdate() {
    AOS.refresh();
    if (this.stickey) {
      this.stickey.destory();
      this.stickey = new Sticky('.sticky-effect');
    }
  }

  render() {
    return <Biznius_landing_page_v1 />;
  }
}

export default App;
