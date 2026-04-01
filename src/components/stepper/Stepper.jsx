import { useCharacterState } from "@context/CharacterContext";
import style from "./style.module.css";

const steps = ["Identity", "Build", "Story", "Review"];

export const Stepper = () => {
  const { currentStep } = useCharacterState();
  return (
    <div className={style.stepper}>
      {steps.map((step, index) => (
        <div
          key={step}
          className={`${style.step} ${index < currentStep ? style.stepDone : ""} ${
            index === currentStep ? style.stepCurrent : ""
          }`}
        >
          <span className={style.badge}>{index < currentStep ? "✓" : index + 1}</span>
          <p className={style.label}>{step}</p>
          <p className={style.status}>
            {index < currentStep
              ? "Completed"
              : index === currentStep
                ? "Current"
                : "Upcoming"}
          </p>
        </div>
      ))}
    </div>
  );
};
