function News({author, description, publishedAt, source, title, url, urlToImage}) {
  return (
    <div className='article'>
      <img src={urlToImage} alt={description}/>
      <div>
        <h5>{title}</h5>
        <p>{description}</p>
        <p><a href={url}>Read News</a></p>
       <h6>{author}</h6>
       <p>{publishedAt}</p>
      </div>
    </div>
  )
}

export default News
