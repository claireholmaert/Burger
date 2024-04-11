
function Button({children, className}) {
    
  return (
    <div>
      <button className={`${className}animate px-5 py-3 uppercase shadow-xl text-white font-button tracking-widest`}>
        {children}
      </button>
    </div>
  )
}

export default Button
