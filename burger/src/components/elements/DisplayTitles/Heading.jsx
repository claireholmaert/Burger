// props
import PropTypes from 'prop-types';

Heading.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string,
    theme: PropTypes.string,
    display: PropTypes.string,
    alignement: PropTypes.string,
    className: PropTypes.string,
}

function Heading(props) {

    const {
        children,
        variant,
        theme,
        display,
        alignement,
        className,
    } = props

    const classDefault = "uppercase";
    let font = "";
    let color = "";
    let align = "";

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

    switch(alignement) {
        case "center":
            align = "justify-center";
            break;
            case "right":
            align = "justify-end";
            break;
        default:
            align = "justify-start";
    }

  switch(variant) {
    case "h3":
        return (
            <div className={`flex ${align}`}>
                <h3 className={`${classDefault} ${font} ${color} ${className} text-2xl`}>
                    {children}
                </h3>
            </div>
        )
        case "h4":
        return (
            <div className={`flex ${align}`}>
                <h4 className={`${classDefault} ${font} ${color} ${className} text-xl`}>
                    {children}
                </h4>
            </div>
        )
    default:
        return (
            <div className={`flex ${align}`}>
                <h2 className={`${theme === "marron" ? "text-5xl" : "text-3xl"} ${classDefault} ${font} ${color} ${className}`}>
                    {children}
                </h2>
            </div>
        )
  }
}

export default Heading
