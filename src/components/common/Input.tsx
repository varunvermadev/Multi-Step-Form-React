const Input = (
    { name, labelText, inputType, errorMessage, placeholderText, inputValue, onInputChange }: {
    labelText: string,
    inputType: string,
        errorMessage: string,
        placeholderText: string,
        inputValue: string,
        name : string,
        onInputChange: React.ChangeEventHandler<HTMLInputElement>,
}) => {
  return (
      <div className="form__item">
          <label className="form__label">
              {errorMessage && 
                  <p className="form__error"><sup>*</sup>{errorMessage}</p>
              }
              {labelText}
              <input
                  name={name}
                  onChange={onInputChange}
                  placeholder={placeholderText} value={inputValue} type={inputType} className="form__input" />
          </label>
    </div>
  )
}

export default Input