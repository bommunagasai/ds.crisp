import React from 'react'
import ReactDOM from 'react-dom'

import { Color } from '@ds.crisp/react-components'
import '@ds.crisp/scss/lib/Color.css'
import '@ds.crisp/scss/lib/Utilities.css'


ReactDOM.render(
    <div style={{ padding: '40px' }}>
        <Color width='xl' height='xl'/>
    </div>,
    document.querySelector('#root')
);
