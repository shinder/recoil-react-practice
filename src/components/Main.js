import React from 'react'
import {Link} from 'react-router-dom'
import List from './List'


function Main(props) {
    console.log('--- Main')
    return <>
        <div>Todo List</div> 
        <div>
            <Link to="/add">Add</Link>
        </div>
        <List/>
    </>
}

export default Main