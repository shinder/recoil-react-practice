import React from 'react'
import {Link} from 'react-router-dom'

function ListItem(props) {
    const d = props.data
    console.log(d)
    return <>
        <li className={d.finished ? 'list-item finished' : 'list-item' }>
            <input type="checkbox" 
                {...(d.finished && { defaultChecked: true}) }
                onChange={()=>props.toggleFinishItem(d.id)}
            />
            {d.name}
            <Link to={'/edit/' + d.id}><button>edit</button></Link>
            <button onClick={()=>props.deleteItem(d.id)}>del</button>
        </li>
    </>
}

export default ListItem