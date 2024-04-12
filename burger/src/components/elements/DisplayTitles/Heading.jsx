// props
import PropTypes from 'prop-types';

Heading.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string,
    theme: PropTypes.string,
    display: PropTypes.string,
}

function Heading(props) {

    const {
        children,
        variant,
        theme,
        display,
    } = props

    const classDefault = "mt-5 uppercase";
    let font = "";
    let color = "";

    switch(theme) {
        case "marron":
            font = "font-secondary";
            break;
        default:
            font = "tracking-normal";
    }

    switch(display) {
        case "gray":
            color = "text-gray";
            break;
        default:
            color = "text-marron";
    }

  switch(variant) {
    case "h3":
        return (
            <div className="flex items-center justify-center my-5">
                <h3 className={`${classDefault} ${font} ${color} text-2xl`}>
                    {children}
                </h3>
            </div>
        )
    default:
        return (
            <div className="flex items-center justify-center my-5">
                <h2 className={`${theme === "marron" ? "text-5xl" : "text-3xl"} ${classDefault} ${font} ${color}`}>
                    {children}
                </h2>
            </div>
        )
  }
}

export default Heading
