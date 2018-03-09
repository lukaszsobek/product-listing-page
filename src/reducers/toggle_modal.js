const toggleModal = (state,action) => {
    const {
        colorModalVisible,
        categoryModalVisible
    } = state.modalState;
    
    const modalState = {
        colorModalVisible: (
            action.modal === "ColorModal"
                ? !colorModalVisible
                : false
        ),
        categoryModalVisible: (
            action.modal === "CategoryModal"
                ? !categoryModalVisible
                : false
        )
    }
    
    return {
        ...state,
        modalState
    }
}

export default toggleModal;