const ConditionalScreenDiv = ({ screen,style, className, size, children }) => {
    return screen > size ? (
      <div style={style} className={className}>
        {children}
      </div>
    ) : (
      <>{children}</>
    )
  }
  export default ConditionalScreenDiv