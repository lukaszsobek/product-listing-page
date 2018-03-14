import React, { Component } from "react";
import { connect } from "react-redux";

import { filterProducts, toggleModal } from "../../actions";
import Dropdown from "./Dropdown";

class CategoryModal extends Component {
    render() {
        const { data, isOpen, filterProducts, toggleModal } = this.props;
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
                    filterProducts={filterProducts}
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
    filterProducts: (value) => dispatch(filterProducts("categories",value))

});

export { CategoryModal };
export default connect(mapStateToProps, mapDispatchToProps)(CategoryModal);