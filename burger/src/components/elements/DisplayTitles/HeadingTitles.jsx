// props
import PropTypes from 'prop-types';

HeadingTitles.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string,
}

function HeadingTitles(props) {

    const {
        children,
        variant
    } = props;

    const classDefault = "px-7 py-3 bg-yellow rounded-md text-marron uppercase font-bold inline-block tracking-widest";

  switch(variant) {
    case "h3":
        return (
            <div className="flex items-center justify-center my-5">
                <h3 className={`${classDefault} text-xl`}>
                    {children}
                </h3>
            </div>
        )
    default:
        return (
            <div className="flex items-center justify-center my-5">
                <h2 className={`${classDefault} text-2xl`}>
                    {children}
                </h2>
            </div>
        )
  }
}

export default HeadingTitles
