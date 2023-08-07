import axios from "axios"

export const addOneBook = (book)=> async dispatch =>{
    dispatch({
        type:'ADD_BOOK_REQUEST'
    })
  
    try {
        const response = await axios.post('https://altura-prep-library-be-production.up.railway.app/api/books/addBook',book);
         
        dispatch({
           type:'ADD_BOOK_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'ADD_BOOK_FAILED',
           payload:error
       })
    }
}

export const getAllBook = ()=> async dispatch =>{
    dispatch({
        type:'GET_BOOKS_REQUEST'
    })
    try {
        const response = await axios.get('https://altura-prep-library-be-production.up.railway.app/api/books/allBook');
     
        dispatch({
           type:'GET_BOOKS_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_BOOKS_FAILED',
           payload:error
       })
    }
}

export const filterBook = (searchKey)=> async dispatch =>{
    dispatch({
        type:'GET_BOOKS_REQUEST'
    })
    let filterItem ;
    try {
        const response = await axios.get('https://altura-prep-library-be-production.up.railway.app/api/books/allBook');
        filterItem = response.data.filter(pizza => pizza.title.toLowerCase().includes(searchKey));
      
        console.log(filterItem)
        dispatch({
           type:'GET_BOOKS_SUCCESS',
           payload:filterItem
       })
    } catch (error) {
       dispatch({
           type:'GET_BOOKS_FAILED',
           payload:error,
       })
    }
}