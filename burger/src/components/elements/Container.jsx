// props
import PropTypes from 'prop-types';

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

function Container({children}) {
  return (
    <div className="max-w-6xl h-full m-auto">
      {children}
    </div>
  )
}

export default Container
