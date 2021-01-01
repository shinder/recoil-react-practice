import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {useRecoilState} from 'recoil'
import todoListState from '../atoms/todoListState'

function EditForm(props) {
    const [listData, setListData] = useRecoilState(todoListState)
    const history = useHistory()
    const [changed, setChanged] = useState(0)

    useEffect(()=>{
        if(changed){
            history.push('/');
        }
    })

    const items = listData.filter(el=>el.id===parseInt(props.dataId))
    // bad id
    const item = items.length ? items[0] : null
    if(!item) {
        history.push('/')
        return ''
    }

    const editItem = (event)=>{
        event.preventDefault()
        setListData((oldData)=>oldData.map(el=>{
            if(el.id===item.id && event.currentTarget.todo.value){
                return {
                    id: el.id,
                    name: event.currentTarget.todo.value,
                    finished: event.currentTarget.finished.checked,
                }
            }
            return el
        }))
        setChanged(1)
    }

    return <>
        <form name="edit_form" onSubmit={editItem}>
            <input name="todo" autoFocus defaultValue={item.name} /><br/>
            <input name="finished" type="checkbox" defaultChecked={item.finished}  />
            <button type="submit">修改</button>
        </form>
        <Link to="/" >取消</Link>
    </>
}

export default EditForm