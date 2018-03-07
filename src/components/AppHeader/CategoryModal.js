import React, { Component } from "react";
import { connect } from "react-redux";

import { toggleModal } from "../../actions";

const DropDown = props => {
    const { data, isOpen } = props;
    if(!isOpen) {
        return null;
    }

    const categoryList = data.map((category,key) => {
        return <div key={ key }>{ category }</div>
    })

    return(
        <div className="modal--category__data">
            { categoryList }
            <div>..clear</div>
        </div>
    );
}

class CategoryModal extends Component {

    render() {
        const { data, isOpen, toggleModal } = this.props;
        return (
            <div className="modal--category">
                <div
                    className="modal--category__title"
                    onClick={toggleModal}
                    >Category</div>
                <DropDown
                    isOpen={isOpen}
                    data={data}
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
    toggleModal: () => dispatch(toggleModal("CategoryModal"))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryModal);