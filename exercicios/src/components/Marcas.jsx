import PropTypes from 'prop-types'

function Marcas({ marca, dinheiro }) {
    return (
        <div>
            <p>{marca} - {dinheiro}</p>
        </div>
    )
}

Marcas.propTypes = {
    marca: PropTypes.string,
    dinheiro: PropTypes.number
}

export default Marcas