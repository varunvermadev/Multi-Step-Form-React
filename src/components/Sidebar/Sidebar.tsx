import { steps } from "../../constant"
import Steps from "../common/Steps"
import './sidebar.css';

const Sidebar = ({ step,
    handleOnClickStep
 }: {
        step: number,
        handleOnClickStep: (step: number) => void
}) => {

    const stepsMarkup = steps.map(formStep => {
        return <Steps
            key={formStep.stepTitle}
            stepNumber={formStep.stepNumber}
            stepTitle={formStep.stepTitle}
            active={formStep.stepNumber === step}
            onClick={handleOnClickStep}
        />
    })

  return (
      <header className="header">
          <nav className="sidebar">
              <ul className="sidebar__list">
                  {stepsMarkup}
              </ul>
          </nav>
    </header>
  )
}

export default Sidebar