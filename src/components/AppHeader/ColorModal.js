import React, { Component } from "react";
import { connect } from "react-redux";

import { toggleFilter, toggleModal } from "../../actions";

const DropDown = props => {
    const { data, isOpen, toggleFilter } = props;
    if(!isOpen) {
        return null;
    }

    const colorList = data.map((color,key) => {
        return (
            <div
                key={key}
                onClick={() => toggleFilter(color)}
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
        const { data, isOpen, toggleFilter, toggleModal } = this.props;
        return (
            <div className="modal--color">
                <div
                    className="modal--color__title"
                    onClick={toggleModal}
                    >Colors</div>
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
    isOpen: state.modalState.colorModalVisible,
    data: state.dropdownData.colors
});

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleModal("ColorModal")),
    toggleFilter: (value) => dispatch(toggleFilter("colors",value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorModal);