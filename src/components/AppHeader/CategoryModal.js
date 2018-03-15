import React, { Component } from "react";
import { connect } from "react-redux";

import {
    updateClearFilterDisplay,
    updateToggleFilterDisplay,
    toggleModal
} from "../../actions";
import Dropdown from "./Dropdown";

class CategoryModal extends Component {
    render() {
        const { clearFilter, data, isOpen, toggleFilter, toggleModal } = this.props;
        return (
            <div className={
                    isOpen 
                    ? "modal--category modal--category--open"
                    : "modal--category"
                }>
                <div
                    className="modal--category__title"
                    onClick={toggleModal}
                    >Category</div>
                <Dropdown
                    isOpen={isOpen}
                    data={data}
                    toggleFilter={toggleFilter}
                    clearFilter={clearFilter}
                    dropdownClass="modal--category__data"
                    />
            </div>
        );
    }
};

const mapStateToProps = state => ({
    isOpen: state.modalState.categoryModalVisible,
    data: state.dropdownData.categories
});

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleModal("CategoryModal")),
    toggleFilter: (value) => dispatch(
        updateToggleFilterDisplay("categories",value)
    ),
    clearFilter: () => dispatch(
        updateClearFilterDisplay("categories")
    )

});

export { CategoryModal };
export default connect(mapStateToProps, mapDispatchToProps)(CategoryModal);