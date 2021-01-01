import React, {useEffect} from 'react'
import {useRecoilState} from 'recoil'
import ListItem from './ListItem'
import todoListState from '../atoms/todoListState'

function List(props) {
    const [listData, setListData] = useRecoilState(todoListState)

    const deleteItem = (id) => {
        setListData(listData.filter(el => {
            if(el.id!==id){
                return {...el}
            }
        }))
    }

    const toggleFinishItem = (id) => {
        setListData(listData.map(el=>{
            const el2 = {...el}
            if(el2.id===id){
                el2.finished = ! el2.finished
            }
            return el2
        }))
    }
    console.log('-------------')
    return <>
        <ul>
            { listData.map(el => {
                const pr = {
                    key: el.id,
                    data: el,
                    deleteItem,
                    toggleFinishItem,
                }
                return <ListItem {...pr} /> 
            }) }
        </ul>
    </>
}

export default List