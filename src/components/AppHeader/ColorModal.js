import React, { Component } from "react";
import { connect } from "react-redux";

import { toggleModal } from "../../actions";

const DropDown = props => {
    if(!props.isOpen) {
        return null;
    }

    return(
        <div className="modal--color__data">
            something
        </div>
    );
}

class ColorModal extends Component {

    render() {
        const { isOpen, toggleModal } = this.props;
        return (
            <div className="modal--color">
                <div
                    className="modal--color__title"
                    onClick={toggleModal}
                >
                    Colors
                </div>
                <DropDown isOpen={isOpen}/>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    isOpen: state.modalState.colorModalVisible
});

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleModal("ColorModal"))
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorModal);