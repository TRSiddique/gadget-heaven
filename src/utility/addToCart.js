import { toast } from 'react-toastify';

const getStoreReadList = () => {

    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
      const storeList = JSON.parse(storedListStr);
      return storeList;
    } else {
      return [];
    }
  };
  
  const addToReadList = (id) => {
    const storeList = getStoreReadList();
    if (storeList.includes(id)) {
      console.log(id, 'already exist');
    } else {
      storeList.push(id);
      const storedListStr = JSON.stringify(storeList);
      localStorage.setItem('read-list', storedListStr); // ✅ key name corrected
      toast('This book is added')
    }
  };
  
  export { addToReadList,getStoreReadList };
  