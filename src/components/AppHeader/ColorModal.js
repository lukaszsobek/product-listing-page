import React, { Component } from "react";
import { connect } from "react-redux";

import { updatePage, toggleModal } from "../../actions";
import Dropdown from "./Dropdown";

class ColorModal extends Component {
    render() {
        const { data, isOpen, updatePage, toggleModal } = this.props;
        return (
            <div className={
                isOpen 
                ? "modal--color modal--color--open"
                : "modal--color"
            }>
                <div
                    className="modal--color__title"
                    onClick={toggleModal}
                    >Colors</div>
                <Dropdown
                    isOpen={isOpen}
                    data={data}
                    updatePage={updatePage}
                    dropdownClass="modal--color__data"
                    />
            </div>
        );
    }
};

const mapStateToProps = state => ({
    isOpen: state.modalState.colorModalVisible,
    data: state.dropdownData.colors
});

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleModal("ColorModal")),
    updatePage: (value) => dispatch(updatePage("colors",value))
});

export { ColorModal };
export default connect(mapStateToProps, mapDispatchToProps)(ColorModal);