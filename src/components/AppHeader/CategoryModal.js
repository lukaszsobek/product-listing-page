import React, { Component } from "react";
import { connect } from "react-redux";

import { toggleFilter, toggleModal } from "../../actions";

const DropDown = props => {
    const { data, isOpen, toggleFilter } = props;
    if(!isOpen) {
        return null;
    }

    const categoryList = data.map((category,key) => {
        return (
            <div
                key={key}
                onClick={() => toggleFilter(category)}
                >{ category }</div>
        );
    });

    return(
        <div className="modal--category__data">
            { categoryList }
            <div>..clear</div>
        </div>
    );
}

class CategoryModal extends Component {
    render() {
        const { data, isOpen, toggleFilter, toggleModal } = this.props;
        return (
            <div className="modal--category">
                <div
                    className="modal--category__title"
                    onClick={toggleModal}
                    >Category</div>
                <DropDown
                    isOpen={isOpen}
                    data={data}
                    toggleFilter={toggleFilter}
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
    toggleFilter: (value) => dispatch(toggleFilter("categories",value))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryModal);