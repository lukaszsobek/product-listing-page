import React, { Component } from "react";
import { connect } from "react-redux";

import { 
    updateClearFilterDisplay,
    updateToggleFilterDisplay,
    toggleModal
} from "../../actions";

import Dropdown from "./Dropdown";

class ColorModal extends Component {
    render() {
        const { clearFilter, data, isOpen, toggleFilter, toggleModal } = this.props;
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
                    toggleFilter={toggleFilter}
                    clearFilter={clearFilter}
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
    toggleFilter: (value) => dispatch(
        updateToggleFilterDisplay("colors",value)
    ),
    clearFilter: () => dispatch(
        updateClearFilterDisplay("colors")
    )
});

export { ColorModal };
export default connect(mapStateToProps, mapDispatchToProps)(ColorModal);