import React from 'react'
import { connect } from 'react-redux'

import { clearFilter, toggleFilter, toggleModal} from '../../actions'

import Dropdown from './Dropdown'

const data = ['blue', 'green', 'black']

const ColorModal = ({
  activeFilters, clearFilter, isOpen, toggleFilter, toggleModal
}) => (
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

const mapStateToProps = ({ activeFilters, modalState }) => ({
  isOpen: modalState.colorModalVisible,
  activeFilters: activeFilters.colors
})

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModal('ColorModal')),
  toggleFilter: (value) => dispatch(toggleFilter('colors', value)),
  clearFilter: () => dispatch(clearFilter('colors'))
})

export { ColorModal }
export default connect(mapStateToProps, mapDispatchToProps)(ColorModal)
