import Heading from "../common/Heading";
import { mockedDataPlan } from "../../constant";
import Plan from "../common/Plan";
import './steptwo.css';
const StepTwo = ({ onInputChange, formData }: {
    onInputChange: React.FormEventHandler,
    formData: {
        name: string,
        email: string,
        phone: string,
        formPlan: string,
        billingPlanYearly: boolean,
    }
}) => {

    const plans = mockedDataPlan.map(plan => {
        return <Plan
            key={plan.planName}
            planImg={plan.planImg}
            planName={plan.planName}
            planPrice={plan.planPrice}
            onInputChange={onInputChange}
            formPlan={formData.formPlan}
            billingPlanYearly={formData.billingPlanYearly}

        />;
    });

    return (
        <section className="form__steps">
            <Heading

                headingText="Select your plan"
                descText="You have the option of monthly or yearly billing"
            />

            <ul className="form__plans">
                {plans}
            </ul>
            <div className="form__billing-plan">
                <span>Monthly</span>
                <label htmlFor="billingPlan" className="billing-plan">
                    <input  onChange={onInputChange} checked={formData.billingPlanYearly} type="checkbox" name="billingPlanYearly" />
                </label>
                <span>Yearly</span>
            </div>
        </section>
    )
}

export default StepTwo;