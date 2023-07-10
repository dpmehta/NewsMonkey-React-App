import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className='my-3'>
      <div className="card" style={{ width: '18rem' }}>
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: '80%', zIndex: '1' }}>{source}</span>
        <img src={!imageUrl ? "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg" : imageUrl} className="card-img-top" alt="Aaj ki taza khabar !!!" />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
          <p className="card-text"><small className="text-body-secondary"><strong>By {!author ? "unknown" : author} on {new Date(date).toGMTString()} </strong></small></p>
        </div>
      </div>
    </div>
  )

}

export default NewsItem
