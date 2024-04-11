
function Button({children, className, color, theme}) {

    let background;
    if(color === 'marron') {
        background = 'bg-marron';
    } else if(color === 'red') {
        background = 'bg-red';
    } else {
        background = 'bg-yellow';
    }

    switch (theme) {
        case 'small': 
        return (
        <div>
            <button className={`${className} ${background}animate px-4 py-2 uppercase shadow-xl text-white text-xs font-button`}>
              {children}
            </button>
          </div>
          )
        case 'big': 
        return (
            <div>
            <button className={`${className} ${background}animate px-8 py-4 uppercase shadow-xl text-white text-base font-button`}>
              {children}
            </button>
          </div>
        )
        default: 
        return (
            <div>
            <button className={`${className} ${background}animate px-5 py-3 uppercase shadow-xl text-white text-sm font-button`}>
              {children}
            </button>
          </div>
        )
    }

  
}

export default Button
