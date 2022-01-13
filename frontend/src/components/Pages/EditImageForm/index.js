import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom'
import { updateImage } from "../../../store/image";
import * as sessionActions from "../../../store/session"
import logo from "../../../images/logo.png"
import './EditImageForm.css'

function EditImageForm({ images }) {

    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)
    const { id } = useParams();
    const currentImg = images.find(image => image.id === +id)


    const [albumId, setAlbumId] = useState(currentImg?.albumId)
    const [content, setContent] = useState(currentImg?.content)
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        dispatch(sessionActions.restoreUser());
    }, [dispatch])

    const handleSubmit = async (e) => {

        e.preventDefault();

        let payload = {
            id,
            content,
        }

        let errors = []

        const image = await dispatch(updateImage(payload))

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
                        <h2 className="edit-image-header">Edit a brew</h2>
                        <input
                            className='content-input'
                            type='text'
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            required
                            placeholder='Describe your brew'
                        />
                        <div className='add-image-btn'>
                            <button type='submit'>Update</button>
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

export default EditImageForm;