import React from 'react'

import CategoryModal from './CategoryModal.js'
import ColorModal from './ColorModal.js'

const AppHeader = () => (
  <header>
    <nav className='container'>
      <div className="title">
        Sample Products
      </div>
      <CategoryModal />
      <ColorModal />
    </nav>
  </header>
)

export default AppHeader
