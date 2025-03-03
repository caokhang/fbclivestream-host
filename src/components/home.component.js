import React, { Component } from "react";

import UserService from "../services/user.service";
import Section from './HomeSection/Section';
import Footer from './Footer';
import Header from './Header';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div>
        <Header />
        <Section />
        <Footer />
      </div>
    );
  }
}
