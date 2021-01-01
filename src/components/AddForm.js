import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {useSetRecoilState} from 'recoil'
import todoListState from '../atoms/todoListState'


function AddForm() {
    const setListData = useSetRecoilState(todoListState)
    const history = useHistory()
    const [changed, setChanged] = useState(0)
    useEffect(()=>{
        console.log('AddForm useEffect -------------')
    })
    useEffect(()=>{
        if(changed){
            history.push('/');
        }
    })

    const addItem = (event)=>{
        if(!event.currentTarget.todo.value){
            alert('請填寫名稱')
            return
        }
        event.preventDefault()
        setListData((oldData)=>([
            ...oldData,
            {
                id: Date.now(),
                name: event.currentTarget.todo.value,
                finished: false
            }
        ]))
        setChanged(1)
    }
    return <>
        <form name="add_form" onSubmit={addItem}>
            <input name="todo" autoFocus />
            <button type="submit">確定</button>
        </form>
        <Link to="/" >Home</Link>
    </>
}

export default AddForm