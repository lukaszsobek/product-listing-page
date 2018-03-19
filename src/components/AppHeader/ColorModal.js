import React from 'react'
import { connect } from 'react-redux'

import {
  updateClearFilterDisplay,
  updateToggleFilterDisplay,
  toggleModal
} from '../../actions'

import Dropdown from './Dropdown'

const ColorModal = props => {
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
        ? 'modal--color modal--color--open'
        : 'modal--color'
    }>
      <div
        className='modal--color__title'
        onClick={toggleModal}
      >Colors</div>
      <Dropdown
        isOpen={isOpen}
        data={data}
        activeFilters={activeFilters}
        toggleFilter={toggleFilter}
        clearFilter={clearFilter}
        dropdownClass='modal--color__data'
      />
    </div>
  )
}


const mapStateToProps = ({ activeFilters, modalState, root: state }) => ({
  isOpen: modalState.colorModalVisible,
  data: state.dropdownData.colors,
  activeFilters: activeFilters.colors
})

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModal('ColorModal')),
  toggleFilter: (value) => dispatch(
    updateToggleFilterDisplay('colors', value)
  ),
  clearFilter: () => dispatch(
    updateClearFilterDisplay('colors')
  )
})

export { ColorModal }
export default connect(mapStateToProps, mapDispatchToProps)(ColorModal)
