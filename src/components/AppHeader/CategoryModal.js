import React, { Component } from "react";
import { connect } from "react-redux";

import { toggleModal } from "../../actions";

const DropDown = props => {
    if(!props.isOpen) {
        return null;
    }

    return(
        <div className="modal--category__data">
            something
        </div>
    );
}

class CategoryModal extends Component {

    render() {
        const { isOpen, toggleModal } = this.props;
        return (
            <div className="modal--category">
                <div
                    className="modal--category__title"
                    onClick={toggleModal}
                >
                    Category
                </div>
                <DropDown isOpen={isOpen}/>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    isOpen: state.modalState.categoryModalVisible
});

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleModal("CategoryModal"))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryModal);