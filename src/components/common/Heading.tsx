const Heading = ({headingText,descText} : {headingText : string,descText : string}) => {
    return (
      <>
            <h1 className="heading__primary">{headingText}</h1>
            <p className="heading__primary--desc">{descText }</p>
      </>
      
  )
}

export default Heading;