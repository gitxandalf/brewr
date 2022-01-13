
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory, Link, Redirect } from 'react-router-dom'
import * as sessionActions from '../../../store/session'

import { getImages } from "../../../store/image"

import './BeerDetails.css'

const BeerDetails = ({ images }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const { id } = useParams()

    const singleImage = images.find(image => image.id === +id)
   
    const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {

        dispatch(sessionActions.restoreUser())
    }, [dispatch])

    if (!singleImage) {
        return (
            <p className='nope'>Either you drank it, or we don't have it.</p>
        )
    }

    return (
        <>
            <div className='beer-image-container'>
                <img className='beer-image' src={singleImage?.imageUrl} />
            </div>
            <div className='image-data-container'>
                <div className='image-data'>
                    <h1>{singleImage?.User?.username}</h1>
                    <p><b>Content:</b> {singleImage?.content}</p>
                    <p><b>Posted By:</b> {singleImage?.User?.username}</p>
                </div>
            </div>
        </>
    )
}

export default BeerDetails