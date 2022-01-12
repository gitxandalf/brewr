import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getImages } from "../../../store/image";
import * as sessionActions from "../../../store/session"
import UserNav from "../../Utils/UserNav";
import './Explore.css'

function Explore() {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const allImages = useSelector(state => state.image.entries)

    useEffect(() => {
        dispatch(getImages());
        dispatch(sessionActions.restoreUser());
    }, [dispatch])


    return (
        <>
            <UserNav className="user-nav-explore" />
            <div className="explore-bg"></div>
                <div className="explore-images-bg"></div>
                <div className="image-container">
                    <h2 className="explore-header">Everything we have on tap.</h2>
                    {allImages.map((image, id) => {
                        return (
                            <div className="image-container">
                                <figure key={id}>
                                    <Link to={`/images/${image.id}`}>
                                        <img key={id} className="image-spread" src={image.imageUrl} />
                                    </Link>
                                    <Link className="style" to={`/images/${image.id}`} >
                                        <br/> by {image.User.username}
                                    </Link>
                                </figure>
                            </div>
                        )
                    })}
                    </div>
        </>
    )
}


export default Explore;