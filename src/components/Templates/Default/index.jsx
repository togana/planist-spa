import React, { Component, PropTypes } from 'react';

import styles from './styles';
import Header from '../../Organisms/Header';
import Footer from '../../Organisms/Footer';

class TemplateDefault extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <hedder style={styles.header}>
          {this.props.header}
        </hedder>
        <section style={styles.content}>
          {this.props.children}
        </section>
        <footer style={styles.footer}>
          {this.props.footer}
        </footer>
      </div>
    );
  }
}

TemplateDefault.propTypes = {
  header: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

TemplateDefault.defaultProps = {
  header: <Header />,
  children: <div />,
  footer: <Footer />,
};

export default TemplateDefault;
