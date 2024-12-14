import React from 'react';

interface PlanProps {
  planImg: string;
  planName: string;
  planPrice: number;
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
  formPlan: string;
  billingPlanYearly: boolean;
}

const Plan: React.FC<PlanProps> = ({ planImg, planName, planPrice, onInputChange, formPlan, billingPlanYearly }) => {
  return (
    <li className="form__plans--plan">
      <label>
        <div className="form__plan--icon">
          <img src={planImg} alt={planName} />
        </div>
        <span className="form__plan--name">{planName}</span>
        <input
          type="radio"
          name="formPlan"
          value={planName}
          checked={formPlan === planName}
          onChange={onInputChange}
        />
        <span className="form__plan--price">
          {billingPlanYearly ? `+$${planPrice * 12}/yr` : `+$${planPrice}/mo`}
        </span>
      </label>
    </li>
  );
};

export default Plan;