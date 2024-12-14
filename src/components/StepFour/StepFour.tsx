import Heading from "../common/Heading";
import './stepfour.css';
import { mockedDataPlan } from "../../constant";
const StepFour = ({ addons, billingPlanYearly,formPlan,handleClickSummary }: {
    billingPlanYearly: boolean,
    formPlan: string,
    addons: ({
        addOnName: string,
        addOnPrice: number,
        addOnDesc: string,
    })[]
}) => {

    const plan = mockedDataPlan.find(plan => plan.planName.toLowerCase() === formPlan);
    let sum = plan?.planPrice;
    const addonsMarkup = addons.map(addon => {
        sum += addon?.addOnPrice;
        return (
            <li key={addon.addOnName} className="form__summary--list-item">
                <span>{addon.addOnName}</span>
                <span>{billingPlanYearly ? `+$${12*addon.addOnPrice}/yr` : `+$${addon.addOnPrice}/mo` }</span>
            </li>
        )
    })
    
  return (
      <section className="form__steps">
          <Heading 
              headingText="Finishing up"
              descText="Double-check everything looks OK before confirming." 
          />
            <div className="form__summary">
              <ul className="form__summary--list">
                  <li className="form__summary--list-item item-plan">
                      <div className="item-plan__box">
                          <span>{plan.planName.charAt(0).toUpperCase() + plan.planName.slice(1) + (billingPlanYearly ? " (Yearly)" : " (Monthly)") }</span>
                          <button onClick={handleClickSummary} className="change-plan" type="button">Change Plan</button>
                      </div>
                      <span>{ billingPlanYearly ? `+$${plan.planPrice*12}/yr` : `+$${plan.planPrice}/mo` }</span>
                  </li>
                  {addonsMarkup}
              </ul>
                <div className="form__summary--total">
                    <span>Total</span>
                  <span>+${billingPlanYearly ? (sum*12 + " /yr") : (sum+ ' /mo') }</span>
              </div>
            </div>
    </section>
  )
}

export default StepFour