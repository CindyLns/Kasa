import { Link } from 'react-router-dom'

function Card({id, title, cover}) {
	return (
        <li key={id} className="card">
            <Link to={`/accommodation/${id}`}>
            <img className='card-cover' src={cover} alt={`${title} cover`} />
            <div className="card-gradient"></div>
            <h3 className='card-title'>{title}</h3>
            </Link>
        </li>

	)
}

export default Card