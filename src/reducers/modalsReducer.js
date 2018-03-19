import {
    TOGGLE_MODAL
} from "../constants"

const initialState = {
    colorModalVisible: false,
    categoryModalVisible: false
}

const modalsReducer = (state = initialState,action) => {

    switch(action.type) {
        case TOGGLE_MODAL:
            const { colorModalVisible, categoryModalVisible } = state
            
            const modalState = {
                colorModalVisible: (
                action.modal === 'ColorModal'
                    ? !colorModalVisible
                    : false
                ),
                categoryModalVisible: (
                action.modal === 'CategoryModal'
                    ? !categoryModalVisible
                    : false
                )
            }
            
            return {
                ...state,
                ...modalState
            }


        default:
            return state
    }
}

export default modalsReducer
