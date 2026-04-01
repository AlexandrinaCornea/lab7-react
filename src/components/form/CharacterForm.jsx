import { IdentityStep } from "@components/steps/IdentityStep";
import { BuildStep } from "@components/steps/BuildStep";
import { StoryStep } from "@components/steps/StoryStep";
import {
  useCharacterState,
  useCharacterDispatch,
} from "@context/CharacterContext";
import { stepFields } from "@utils/stepFields";
import { Stepper } from "../stepper/Stepper";
import { CharacterPreview } from "../preview/CharacterPreview";
import { ReviewStep } from "../steps/ReviewStep";

export const CharacterForm = () => {
  const { currentStep, errors, submitted } = useCharacterState();
  const dispatch = useCharacterDispatch();

  function renderStep() {
    if (currentStep === 0) return <IdentityStep />;
    if (currentStep === 1) return <BuildStep />;
    if (currentStep === 2) return <StoryStep />;
    if (currentStep === 3) return <ReviewStep />;
  }

  function handleNext() {
    const fields = stepFields[currentStep];
    const touchedFields = {};

    fields.forEach((field) => {
      touchedFields[field] = true;
    });
    const hasErrors = fields.some((field) => errors[field]);

    dispatch({ type: "VALIDATE_STEP", fields: touchedFields });

    if (!hasErrors) {
      dispatch({ type: "NEXT_STEP" });
    }
  }

  function handleBack() {
    dispatch({ type: "PREV_STEP" });
  }

  function handleSubmit() {
    dispatch({ type: "SUBMIT" });
  }

  return (
    <div>
      {submitted ? (
        <div>
          <h2>Character Submitted Successfully</h2>
          <p>Your Baldur&apos;s Gate 3 hero is ready for adventure.</p>
          <button type="button" onClick={() => dispatch({ type: "RESET" })}>
            Create Another Character
          </button>
        </div>
      ) : (
        <>
          <Stepper />
          {renderStep()}
          <div>
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 0}
            >
              Back
            </button>
            {currentStep === 3 ? (
              <button type="button" onClick={handleSubmit}>
                Submit
              </button>
            ) : (
              <button type="button" onClick={handleNext}>
                Next
              </button>
            )}
          </div>
          <CharacterPreview />
        </>
      )}
    </div>
  );
};
