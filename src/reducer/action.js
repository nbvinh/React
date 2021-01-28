export const tongleIsAdding =()=>{
    return {type:'TONGLE_ISADDING'}
}
export const addWord =(en, vn)=>{
    return {
        type: 'ADD_WORD',
        en:en,
        vn:vn,
    }
}
export const onMemorized =(id)=>{
    return {
        type: 'MEMORIZED',
        id : id,
    }
}
export const tongleShow=(id)=>{
    return {
        type: 'TONGLE_SHOW',
        id : id,
    }
}

export const filterShow =()=>{
    return{
        type:'FILETR_SHOW'
    }
}
export const filtermemorized = ()=>{
    return{
        type:'FILETR_MEMORIZED'
    }
}

export const needPractice =()=>{
    return {
        type:'NEED_PRACTICE'
    }
}