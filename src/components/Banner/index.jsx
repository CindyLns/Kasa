function Banner({background, title}) {
	return (
        <div className="banner-container">
            <img className='banner-cover' src={background} alt={`banner cover`} />
            <h1 className='banner-title'>{title}</h1>
        </div>

	)
}

export default Banner