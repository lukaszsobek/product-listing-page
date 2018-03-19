import React from 'react'
import { connect } from 'react-redux'

import { clearFilter, toggleFilter, toggleModal } from '../../actions'
import Dropdown from './Dropdown'

const CategoryModal = ({
  activeFilters, clearFilter, data, isOpen, toggleFilter, toggleModal
}) => (
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

const mapStateToProps = ({ activeFilters, modalState, root: state }) => {
  return {
    isOpen: modalState.categoryModalVisible,
    data: state.dropdownData.categories,
    activeFilters: activeFilters.categories
  }
}

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModal('CategoryModal')),
  toggleFilter: (value) => dispatch(toggleFilter('categories', value)),
  clearFilter: () => dispatch(clearFilter('categories'))
})

export { CategoryModal }
export default connect(mapStateToProps, mapDispatchToProps)(CategoryModal)
