import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getBooks } from "./books.api"
import { Link } from "react-router-dom"

export const Books = () => {

    const books = useSelector(state => state.books.list)

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getBooks())
    }, [])

    return <>
        <h2 className="text-center mt-3">Book Store</h2>
        <div className="list-books">
            {
                books.map(book =>
                    <div key={book.id}>
                        <p>{book.author}</p>
                        <img 
                            src={book.photo}
                            style={{width: 150, height: 200}}
                        />
                        <p>{book.title}</p>
                        <Link to={`/book/${book.id}`} style={{color:"#fff",textDecoration:"none"}}>comments</Link>
                    </div>
                )
            }
        </div>
    </>
}