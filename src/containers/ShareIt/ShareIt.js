import React, { Component } from "react";

import Aux from "hoc/ReactAux";
//import styles from "./ShareIt.module.css";
import Layout from "components/Layout/Layout";

class ShareIt extends Component {
  state = {
    user: {
      id: "100001",
      name: "Joseph Fletcher",
      profile: {
        img: null
      },
      communiy: "Belfast",
    },
  };

  render() {
    return (
      <Aux>
        <Layout user={this.state.user} />
      </Aux>
    );
  }
}

export default ShareIt;
