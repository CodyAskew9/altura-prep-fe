import React, { useState } from "react";
import {addOneBook} from "../actions/book_action"
import { useDispatch } from 'react-redux'
import {Toast} from "react-bootstrap"

const AddBook = () => {
    const[title,setTitle] = useState("")
    const[author,setAuthor] = useState("")
    const[level,setLevel] = useState("")
    const[isbn,setIsbn] = useState("")
    const[copies,setCopies] = useState("")
    const [show, setShow] = useState(false);

    const dispatch = useDispatch()

      const PostData = () => {
        const book = { title,author,level,isbn,copies };
        
        dispatch(addOneBook(book));
        setShow(true)
        setTitle("")
        setAuthor("")
        setLevel("")
        setCopies("")
        setIsbn("")
    };
    return (
        <div  className=" mt-5">
             

             <div className="card col-md-6 m-auto p-3" >
             <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                 <Toast.Body style={{backgroundColor:"green",color:"white",fontSize:"18px"}}>One Book Added</Toast.Body>
              </Toast>
                   <h2 style={{textAlign:"center",marginBottom:"20px"}}>Add a New Book</h2>
                    <div className="mb-3">
                        <input type="text" placeholder="Book title" style={{height:"60px"}}
                         onChange={(e) => setTitle(e.target.value)} value={title} className="form-control" />
                    </div>
                    <div className="mb-2">
                        <input type="text" placeholder="Author name" value={author}  style={{height:"60px"}}
                        onChange={(e) => setAuthor(e.target.value)} className="form-control" />
                    </div>
                    <div className="mb-2">
                        <input type="text" placeholder="level" value={level}  style={{height:"60px"}}
                        onChange={(e) => setLevel(e.target.value)} className="form-control" />
                    </div>
                    <div className="mb-2">
                        <input type="text" placeholder="isbn" value={isbn} style={{height:"60px"}}
                         onChange={(e) => setIsbn(e.target.value)} className="form-control" />
                    </div>
                    <div className="mb-2">
                        <input type="text"
                         placeholder=" Number of Copies"  style={{height:"60px"}}
                         value={copies} onChange={(e) => setCopies(e.target.value)} className="form-control" />
                    </div>
                   


                    <button className="btn btn-primary " onClick={() => PostData()}>
                        Add Book
                    </button>

                </div>
        </div>
    );
};

export default AddBook;