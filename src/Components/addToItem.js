import { toast } from "react-toastify";

const getStoreReadList = () => {
     const storeListStr = localStorage.getItem('read-list');
     if(storeListStr){
        const storeList = JSON.parse(storeListStr)
        return storeList
     }else{
        return[]
     }
}
const addToStoreList = (id) => {
    const storeList =getStoreReadList();
    if(storeList.includes(id)){
       toast.warn('Already exists in the read list !!')
    }else{
        storeList.push(id)
        const storeListStr = JSON.stringify(storeList);
        localStorage.setItem('read-list',storeListStr);
        toast.success('This book is added to your read list !!')
    }

}
export {addToStoreList,  getStoreReadList}