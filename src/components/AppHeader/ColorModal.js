import React, { Component } from "react";
import { connect } from "react-redux";

import { updatePage, toggleModal } from "../../actions";

const DropDown = props => {
    const { data, isOpen, updatePage } = props;
    if(!isOpen) {
        return null;
    }

    const colorList = data.map((color,key) => {
        return (
            <div
                key={key}
                onClick={() => updatePage(color)}
                >{color}</div>
        );
    });

    return(
        <div className="modal--color__data">
            { colorList }
            <div>..clear</div>
        </div>
    );
}

class ColorModal extends Component {
    render() {
        const { data, isOpen, updatePage, toggleModal } = this.props;
        return (
            <div className="modal--color">
                <div
                    className="modal--color__title"
                    onClick={toggleModal}
                    >Colors</div>
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
    isOpen: state.modalState.colorModalVisible,
    data: state.dropdownData.colors
});

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleModal("ColorModal")),
    updatePage: (value) => dispatch(updatePage("colors",value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorModal);