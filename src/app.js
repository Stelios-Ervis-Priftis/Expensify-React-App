// Third party libraries
import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'

// Components
// import IndecisionApp from './components/IndecisionApp'
// const IndecisionApp = lazy(() => import('./components/IndecisionApp'))

// Style
import './css/styles.scss'
import 'normalize.css'

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faRobot, faTrashAlt, faPlusCircle, faPlusSquare, faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faRobot, faTrashAlt, faPlusCircle, faPlusSquare, faSpinner )

// Render to are root div (app-root)
ReactDOM.render(
    <Suspense fallback={<div className="loader"><FontAwesomeIcon icon="spinner" pulse /><p>Loading</p></div>}>
        
    </Suspense>,
    document.getElementById('app-root')
)