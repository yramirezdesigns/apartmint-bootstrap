import React from 'react';
import Modal from "./Modal";
import Button from "./Button";

export default class Login extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isShowing: false
    };
  }

  showModal = () => {
    this.setState({
      isShowing: true
    });

    console.log("Hello");
  };

  hideModal = () => {
    this.setState({
      isShowing: false
    });

    console.log("Bye");
  };

  render() {
    return(
      <div>
        <Button onClickHandler={(e) => this.showModal()}
          buttonText = {"Login"}
        />
        {/*<Button onClickHandler={(e) => this.showModal()}*/}
                {/*buttonText = {"Register"}*/}
        {/*/>*/}
        <Modal isShowing={this.state.isShowing}>
          <Button onClickHandler={(e) => this.hideModal()}
                  buttonText = {"X"}
          />
          <div>
            SOME FORM
          </div>
        </Modal>
      </div>
    )
  }
}