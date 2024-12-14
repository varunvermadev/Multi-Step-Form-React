import React from 'react';
import icons from '../../assets/icons.svg';

interface PlanProps {
  planImg: string;
  planName: string;
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
  planPrice: number;
  billingPlanYearly: boolean;
  formPlan: string;
}

const Plan: React.FC<PlanProps> = ({ billingPlanYearly, planImg, planName, planPrice, onInputChange, formPlan }) => {
  return (
    <li className="form__plans--plan">
      <label>
        <div className="form__plan--icon">
          <svg className='icon'>
            <use href={`${icons}${planImg}`}></use>
          </svg>
        </div>
        <span className='form__plan--name'>{planName}</span>
        <input
          checked={planName.toLowerCase() === formPlan}
          value={planName.toLowerCase()}
          onChange={onInputChange}
          type="radio"
          name="formPlan"
        />
        <p className="form__plan--price">{billingPlanYearly ? `$${planPrice * 12}/yr` : `$${planPrice}/mo`}</p>
      </label>
    </li>
  );
};

export default Plan;