import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getBook } from "../features/books/books.api"

export const BookItem = () => {

    const {id} = useParams()
    const current = useSelector(state => state.books.current)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getBook(id))
    }, [id])

    return (
        <div className="text-white text-center">
            {
                current && <div>
                    <img 
                        src={current.photo}
                        style={{height: 700, width: 500, objectFit: "cover"}}
                        className="m-3"
                    />
                    <p>{current.title}</p>
                    <strong>by {current.author}</strong>
                </div>
            }
        </div>
    )
}