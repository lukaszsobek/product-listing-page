import React from 'react'

import CategoryModal from './CategoryModal.js'
import ColorModal from './ColorModal.js'

const AppHeader = () => (
  <header>
    <nav className='container'>
      <CategoryModal />
      <ColorModal />
    </nav>
  </header>
)

export default AppHeader
