const Steps = ({ stepNumber, stepTitle ,active,onClick}: {
    stepNumber: number,
    stepTitle: string,
    active: boolean,
    onClick : (step: number) => void
    
}) => {
    return (
        <li onClick={() => {
            onClick(stepNumber)
        }} className={"sidebar__list--item " + (active ? ' active' : '')}>
            <span className="step">{ stepNumber }</span>
            <div className="step-info">
                <span className="step-info__number">Step {stepNumber}</span>
                <span className="step-info__title">{stepTitle }</span>
            </div>
        </li>
    )
}

export default Steps;