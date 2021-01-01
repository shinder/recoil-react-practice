import {atom, selector} from 'recoil'

const todoListState = atom({
        key: 'todoListState',
        default: null,
    })

const listDataQuery = selector({
    key: 'listDataQuery',
    get: async ({get})=>{
        let data = get(todoListState)
        if(! data){
            const response = await fetch('/list-data.json')
            data = await response.json()
        }
        return data
    },
    set: ({set}, newValue)=>{
        set(todoListState, newValue)
    }
})

export default listDataQuery


// *** 直接從 JS 檔取資料
// import {atom} from 'recoil'
// import listData from '../data/list'

// export default atom({
//     key: 'todoListState',
//     default: listData,
// })