import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import StepOne from './components/StepOne/StepOne';
import { useState } from 'react';
import StepTwo from './components/StepTwo/StepTwo';
import StepThree from './components/StepThree/StepThree';
import StepFour from './components/StepFour/StepFour';
import { mockedDataAddon } from './constant'
import StepFive from './components/StepFive/StepFive';
function App() {

  type formData = {
    name: string,
    email: string,
    phone: string,
    formPlan: string,
    billingPlanYearly: boolean,
    onlineservice: boolean,
    largerstorage: boolean,
    customizableprofile: boolean,
  };

 
  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    formPlan: 'advanced',
    billingPlanYearly: false,
    onlineservice: true,
    largerstorage: false,
    customizableprofile: false,
  })

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const addons = mockedDataAddon.filter(addon => {
    const addName = addon.addOnName.split(' ').join('').toLowerCase();
    if((addName === 'onlineservice' && formData.onlineservice) || (addName === 'largerstorage' && formData.largerstorage) || (addName === 'customizableprofile' && formData.customizableprofile)) 
    return ({
    addOnName: addon.addOnName,
    addOnPrice: addon.addOnPrice,
    addOnDesc: addon.addOnDesc
  })});

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    
    switch (e.target.type) {
      case 'checkbox':
        setFormData({
          ...formData,
          [e.target.name]: e.target.checked
        });
        break;
      case 'radio': 
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
        break;
      default:
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
    }

  }

  const [step, setStep] = useState(1);

  function handleBackButton(): void {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  function handleNextButton(): void {
    if (step < 4) {
      setStep(step + 1);
    }

  }

  let buttonClasses = "form__button";

  if (step === 1) 
    buttonClasses += " hide__button";


  function handleClickSummary(): void {
    setStep(2);
  }

  let stepMarkup = null;
  switch (step) {
    case 1:
      stepMarkup = <StepOne formErrors={formErrors}  onInputChange={handleInputChange} formData={formData} />;
      break;
    case 2:
      stepMarkup = <StepTwo formData={formData} onInputChange={handleInputChange} />;
      break;
    case 3:
      stepMarkup = <StepThree
        billingPlanYearly={formData.billingPlanYearly}
        customizableprofile={formData.customizableprofile}
        largerstorage={formData.largerstorage}
        onlineservice={formData.onlineservice}
        onInputChange={handleInputChange} />;
      break;
    case 4:
      stepMarkup = <StepFour handleClickSummary={handleClickSummary} billingPlanYearly={formData.billingPlanYearly} formPlan={formData.formPlan}  addons={addons} />;
      break;
    case 5:
      stepMarkup = <StepFive />;
      break;
  }

  function handleFormValidation(data : formData) {

    const errors = {
      name: '',
      email: '',
      phone: ''
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^[0-9]{10}$/;
    // 1. check the step one field inputs
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!data.email.trim()) {
      errors.email = "Email is required";
    }
    else if (!emailRegex.test(data.email)) {
      errors.email = "Email is invalid";
    }
    
    if (!data.phone.trim()) {
      errors.phone = "Phone is required";
    }
    else if((data.phone.length < 10) || (data.phone.length > 10) || !phoneRegex.test(data.phone)) {
      errors.phone = "Phone is invalid";
    }

    return errors;
  }

  function handleSubmitForm(e: React.FormEvent) {
    e.preventDefault();
    const validateForm = handleFormValidation(formData);
    
    if (validateForm.name || validateForm.email || validateForm.phone) {
      setFormErrors(validateForm);
      setStep(1);
      return;
    }
    setStep(5);

  }

  function handleOnClickStep(step: number) {
    setStep(step);
  };





  return (

    <>
      <div className="multi-step-form">
        <Sidebar handleOnClickStep={handleOnClickStep} step={step} />
        <form className="form" onSubmit={handleSubmitForm}>
          {stepMarkup}
          
          <div className={"form__buttons "}>
            {step > 4 ? "" : <button onClick={handleBackButton} type="button" className={buttonClasses}>Go Back</button>}
            
            {step < 4 && (
              <button onClick={handleNextButton} type="button" className="form__button">Next Step</button>
            )}
            {step === 4 && (
              <button type="submit" className="form__button">Confirm</button>
            )}
          </div>
        </form>
      </div>

    </>
  )
}

export default App;
