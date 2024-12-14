
const Addon = ({
  billingPlanYearly,
  addonName,
  addonDesc,
  addonPrice,
  onInputChange,
  onlineservice,
  largerstorage,
  customizableprofile,
}: {
  addonName: string,
  addonDesc: string,
  onInputChange: React.FormEventHandler,
  addonPrice: number,
  onlineservice: (boolean),
  largerstorage: (boolean),
  customizableprofile: (boolean),
  billingPlanYearly: boolean
  
}) => {
  const inputName = addonName.split(' ').join('').toLowerCase();
  return (
    <li className="form__addon">
      <label >
        <input checked={(inputName === 'onlineservice' && onlineservice) || (inputName === 'largerstorage' && largerstorage) || (inputName === 'customizableprofile' && customizableprofile)}  onChange={onInputChange} name={inputName} type="checkbox" />
        <div className="form__addon--info">
          <span className="addon-name">{addonName}</span>
          <p className="addon-desc">{addonDesc}</p>
        </div>
        <span className="addon-price">{billingPlanYearly ? `+$${addonPrice*12}/yr` : `+$${addonPrice}/mo` }</span>
      </label>
    </li>
  )
}

export default Addon