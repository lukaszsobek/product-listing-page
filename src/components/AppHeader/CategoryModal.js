import React from 'react'
import { connect } from 'react-redux'

import {
  updateClearFilterDisplay,
  updateToggleFilterDisplay,
  toggleModal
} from '../../actions'
import Dropdown from './Dropdown'

const CategoryModal = props => {
  const {
    activeFilters,
    clearFilter,
    data,
    isOpen,
    toggleFilter,
    toggleModal
  } = props

  return (
    <div className={
      isOpen
        ? 'modal--category modal--category--open'
        : 'modal--category'
    }>
      <div
        className='modal--category__title'
        onClick={toggleModal}
      >Category</div>
      <Dropdown
        isOpen={isOpen}
        data={data}
        activeFilters={activeFilters}
        toggleFilter={toggleFilter}
        clearFilter={clearFilter}
        dropdownClass='modal--category__data'
      />
    </div>
  )
}

const mapStateToProps = ({ root: state }) => ({
  isOpen: state.modalState.categoryModalVisible,
  data: state.dropdownData.categories,
  activeFilters: state.activeFilters.categories
})

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModal('CategoryModal')),
  toggleFilter: (value) => dispatch(
    updateToggleFilterDisplay('categories', value)
  ),
  clearFilter: () => dispatch(
    updateClearFilterDisplay('categories')
  )

})

export { CategoryModal }
export default connect(mapStateToProps, mapDispatchToProps)(CategoryModal)
