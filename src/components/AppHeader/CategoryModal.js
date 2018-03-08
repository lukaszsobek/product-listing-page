import React, { Component } from "react";
import { connect } from "react-redux";

import { updatePage, toggleModal } from "../../actions";

const DropDown = props => {
    const { data, isOpen, updatePage } = props;
    if(!isOpen) {
        return null;
    }

    const categoryList = data.map((category,key) => {
        return (
            <div
                key={key}
                onClick={() => updatePage(category)}
                >{ category }</div>
        );
    });

    return(
        <div className="modal--category__data">
            { categoryList }
        </div>
    );
}

class CategoryModal extends Component {
    render() {
        const { data, isOpen, updatePage, toggleModal } = this.props;
        return (
            <div className="modal--category">
                <div
                    className="modal--category__title"
                    onClick={toggleModal}
                    >Category</div>
                <DropDown
                    isOpen={isOpen}
                    data={data}
                    updatePage={updatePage}
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
    updatePage: (value) => dispatch(updatePage("categories",value))
});

export { CategoryModal, DropDown };
export default connect(mapStateToProps, mapDispatchToProps)(CategoryModal);