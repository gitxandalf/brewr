import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { postImage } from "../../../store/image";
import { getAlbums } from "../../../store/album";
import * as sessionActions from "../../../store/session"
import logo from "../../../images/logo.png"
import './AddImageForm.css'

function AddImageForm() {

    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)
    const albums = useSelector(state => state.album.entries)
    const choiceAlbum = albums.filter(album => album.userId === sessionUser.id)
    console.log("CHOICE ALBUM", choiceAlbum)

    const [userId, setUserId] = useState(sessionUser?.id)
    const [albumId, setAlbumId] = useState('')
    const [imageUrl, setImageUrl] = useState('');
    const [content, setContent] = useState('')
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        dispatch(postImage());
        dispatch(getAlbums());
        dispatch(sessionActions.restoreUser());
    }, [dispatch])

    const handleSubmit = async (e) => {

        e.preventDefault();

        let payload = {
            userId,
            albumId,
            imageUrl,
            content,
        }

        let errors = []

        const image = await dispatch(postImage(payload))

        if (image.errors) {
            const errorList = Object.values(image.errors)
            const list = [...errorList]
            list.map(each => errors.push(each.msg))
            setErrors(errors)
        } else { history.push(`/my-photos`) }
    }

    return (
        <>
            <div className="add-image-bg"></div>
            <form className="add-image-form" onSubmit={handleSubmit}>
                <div className="add-image-form-contents">
                    <div className="add-image-inputs">
                        <img className='add-image-icon' alt="" src={logo} />
                        <h2 className="add-image-header">Add a brew</h2>
                        <input
                            className='url-input'
                            type='text'
                            value={imageUrl}
                            onChange={e => setImageUrl(e.target.value)}
                            required
                            placeholder='Input a brew URL'
                        />
                        <br />
                        <input
                            className='content-input'
                            type='text'
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            required
                            placeholder='Describe your brew'
                        />
                        <br />
                        <select
                            className='album-input'
                            placeholder='Which album will you add to?'
                            type="text"
                            value={albumId}
                            onChange={(e) => setAlbumId(e.target.value)}
                            required
                        >
                            <option className="album-option" value=''>Select an album</option>
                            {choiceAlbum?.map(album => <option className='album-option' key={album.id} value={album.id}>{album.title}</option>)}
                        </select>
                        <br />
                        <div className='add-image-btn'>
                            <button type='submit'>Add</button>
                        </div>
                        <div className='add-image-btn'>
                            <Link className='add-cancel' to='/my-photos'>Cancel</Link>
                        </div>

                        <ul>
                            {errors.map((error, i) => <li key={i}>{error}</li>)}
                        </ul>

                    </div>
                </div>
            </form>
        </>
    )

}

export default AddImageForm;