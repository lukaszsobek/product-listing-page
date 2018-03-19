import React from 'react'

const Dropdown = ({
  clearFilter, data, dropdownClass, activeFilters, isOpen, toggleFilter
}) => {
  if (!isOpen) {
    return null
  }

  const activeFilterString = activeFilters.join(',,,')

  const list = data.map((dataItem, key) => {
    const isFilterActive = activeFilterString.indexOf(dataItem) > -1

    return (
      <div
        className={isFilterActive ? 'active' : ''}
        key={key}
        onClick={() => toggleFilter(dataItem)}
      >{dataItem}</div>
    )
  })

  return (
    <div className={dropdownClass}>
      { list }
      { activeFilters.length > 0 &&
        <div
          onClick={clearFilter}
        >...clear</div>
      }
    </div>
  )
}

export default Dropdown
