import icons from '../../assets/icons.svg';

const Plan = ({billingPlanYearly, planImg, planName, planPrice, onInputChange ,formPlan}: {
    planImg: string,
    planName: string,
    onInputChange: React.FormEventHandler,
    planPrice: number,
    billingPlanYearly: boolean,
    formPlan : 'string'
}) => {
    return (
        <>
            <li className="form__plans--plan">
                <label >
                    <div className="form__plan--icon">
                        <svg className='icon'>
                            <use href={icons + planImg}></use>
                        </svg>
                    </div>
                    <span className='form__plan--name'> {planName}</span>
                    <input
                        checked={planName.toLowerCase() === formPlan}
                        value={planName.toLowerCase()}
                        onChange={onInputChange} type="radio" name="formPlan" />
                    <p className="form__plan--price">{billingPlanYearly ? `$${planPrice*12}/yr` : `$${planPrice}/mo`}</p>
                </label>
            </li>
        </>
    )
}

export default Plan;