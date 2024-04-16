// props
import PropTypes from 'prop-types';

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

function Container({children}) {
  return (
    <div className="max-w-6xl h-full mx-auto px-5 xl:px-0">
      {children}
    </div>
  )
}

export default Container
