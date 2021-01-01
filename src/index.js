import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import {RecoilRoot} from 'recoil'

import './styles/todo-list.css'

import Main from './components/Main'
import AddForm from './components/AddForm'
import EditForm from './components/EditForm'

ReactDom.render(
    <BrowserRouter>
      <RecoilRoot>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Route path="/" exact render={()=>{
            console.log('--- before Main')
            return <Main />
          }} />
          <Route path="/add" component={AddForm} />
          <Route path="/edit/:id" render={({match})=>{
            return <EditForm dataId={match.params.id} />
          }} />
        </React.Suspense>
      </RecoilRoot>
    </BrowserRouter>, document.querySelector('#root'))


