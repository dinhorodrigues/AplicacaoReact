import '/home/dinho/Documentos/todo/frontend/node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
import '/home/dinho/Documentos/todo/frontend/node_modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Todo from '/home/dinho/Documentos/todo/frontend/src/todo/todo.jsx'
import About from '/home/dinho/Documentos/todo/frontend/src/about/about.jsx'
import Menu from '/home/dinho/Documentos/todo/frontend/src/template/menu.jsx'

export default props => (
    <div className='container'>
        <Menu />
        <Todo />
        <About />
    </div>
)