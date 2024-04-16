// props
import PropTypes from 'prop-types';

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    color: PropTypes.string,
    theme: PropTypes.string,
}
function Button({children, className, color, theme}) {

    let background;
    let hoverEffect;
    switch(color) {
        case 'marron':
        background = 'bg-marron';
        hoverEffect = 'hover:bg-marron-hover';
        break;
        case 'red':
            background = 'bg-red';
            hoverEffect = 'hover:bg-red-hover';
        break;
        default:
            background = 'bg-yellow';
            hoverEffect = 'hover:bg-yellow-hover';
    }

    switch (theme) {
        case 'small': 
        return (
        <div>
            <button className={`${className} ${background} animate rounded-sm px-4 py-2 uppercase shadow-xl text-white text-xs font-button ${hoverEffect}`}>
              {children}
            </button>
          </div>
          )
        case 'big': 
        return (
            <div>
            <button className={`${className} ${background} animate rounded-md p-4 md:px-8 md:py-4 uppercase shadow-xl text-white text-sm md:text-base font-button ${hoverEffect}`}>
              {children}
            </button>
          </div>
        )
        default: 
        return (
            <div>
            <button className={`${className} ${background} animate rounded-lg px-5 py-3 uppercase shadow-xl text-white text-xs md:text-sm font-button ${hoverEffect}`}>
              {children}
            </button>
          </div>
        )
    }

  
}

export default Button
