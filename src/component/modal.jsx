import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../features/comments/comments.api";
import { useParams } from "react-router-dom";

export const Modal = ({ onClose }) => {

  const {id} = useParams()
  
  const [text, setText] = useState('')
  const [star, setStar] = useState(1) 

  const dispatch = useDispatch()
  
  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={evt => evt.stopPropagation()}>
          <form onSubmit={evt => {
            evt.preventDefault()
            if(text.trim()) {
              dispatch(addComment({text: text, rate: star, book: id}))
              setText('')
              setStar(1)
            }
          }}>

            <input 
                type="text" 
                placeholder="Comment"
                value={text}
                onChange={evt => setText(evt.target.value)}
            />

            <select value={star} onChange={evt => setStar(+evt.target.value)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <button className="btn btn-info">add</button>
          </form>
          <img onClick={onClose} style={{width:"35px", height:"35px", position:"absolute", top:10, right:10, cursor:"pointer"}} src="https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/cross_delete_remove_close-2-512.png" />
        </div>
      </div>
    </>
  );
};
