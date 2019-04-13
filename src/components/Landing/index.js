import React, { Component } from "react";
import SignupForm from "./SignupForm";

import Modal from "@material-ui/core/Modal";

import "./styles.css";

class LandingPage extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <LandingBanner />
        <InfoContainer />
        <button type="button" onClick={this.showModal}>
          Login
        </button>
        <LoginModal show={this.state.show} handleClose={this.hideModal}>
          <SignupForm />
        </LoginModal>
      </div>
    );
  }
}

const LoginModal = ({ handleClose, show, children }) => {
  return (
    <Modal open={show} onClose={handleClose}>
      <div>{children}</div>
    </Modal>
  );
};

const LandingBanner = () => (
  <div className="landing-banner">Landing Banner Content</div>
);

const InfoContainer = () => (
  <div className="info-container">convincing text!!</div>
);

export default LandingPage;
