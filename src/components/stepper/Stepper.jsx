import { useCharacterState } from "@context/CharacterContext";

const steps = ["Identity", "Build", "Story", "Review"];

export const Stepper = () => {
  const { currentStep } = useCharacterState();
  return (
    <div>
      {steps.map((step, index) => (
        <div key={step}>
          <span>{index + 1}</span>
          <p>{step}</p>
          <p>
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
