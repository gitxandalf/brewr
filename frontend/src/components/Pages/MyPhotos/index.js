import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink, useHistory } from 'react-router-dom'
import { getImages, removeImage } from "../../../store/image";
import * as sessionActions from "../../../store/session"
import UserNav from "../../Utils/UserNav";

import './MyPhotos.css'

function MyPhotos() {


    const [image, setImage] = useState();
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const allImages = useSelector(state => state.image.entries)

    useEffect(() => {
        dispatch(getImages());
        dispatch(sessionActions.restoreUser());
    }, [dispatch])

    const handleDelete = (e) => {
        e.preventDefault();
        const id = e.target.value
        dispatch(removeImage(id))
        history.push('/explore')
    }

    return (
        <>
            <UserNav />
            <div className="my-photos-bg"></div>
            <div className="my-photos-container"></div>
            <div className="sidebar">
                <h2 className="my-photos-header">Your private reserve.</h2>
                <NavLink to="/add-a-brew" className="add">Add a brew</NavLink>
            </div>
            {allImages.map((image, id) => {
                return (
                    <div key={id} className="my-photos-images">
                        <figure >
                            <Link to={`/images/${image.id}`}>
                                <img key={id} className="my-photos-spread" src={sessionUser.id === image.userId ? image.imageUrl : null} />
                            </Link>
                            <br />
                            <NavLink hidden={sessionUser.id === image.userId ? false : true} to="/edit-a-brew" className="edit">Edit</NavLink>

                        </figure>
                        <button hidden={sessionUser.id === image.userId ? false : true} className="delete" value={image.id} onClick={handleDelete} type="submit">Delete</button>
                    </div>
                )
            })}
        </>
    )
}


export default MyPhotos;