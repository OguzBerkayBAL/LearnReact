import React from 'react'

const Course = ({ course }) => {
    const { id, title, description, price, link, image } = course;
    return (
        <div className='course'>
            <div>
                <img style={{borderRadius:'10px'}} src={image} width={210} height={110} />
                <h4 className='course-title'>{title}</h4>
                <p className='course-desc'>{description}</p>
                <h3 className='course-price'>{price} ₺</h3>
                <div className='course-link'><a style={{textDecoration:'none'}} href={link} >Satın almak için tıklayın</a></div>
                
            </div>
        </div>
    )
}

export default Course