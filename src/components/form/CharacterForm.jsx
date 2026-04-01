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
import style from "./style.module.css";

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
    <div className={style.layout}>
      {submitted ? (
        <div className={style.successBox}>
          <p className={style.eyebrow}>Adventure Complete</p>
          <h2>Character Submitted Successfully</h2>
          <p>Your Baldur's Gate 3 hero is ready for adventure.</p>
          <button
            className={style.primaryButton}
            type="button"
            onClick={() => dispatch({ type: "RESET" })}
          >
            Create Another Character
          </button>
        </div>
      ) : (
        <>
          <div className={style.formColumn}>
            <div className={style.heroCard}>
              <p className={style.eyebrow}>Baldur's Gate 3 Builder</p>
              <h1 className={style.title}>Forge Your Tadpole Survivor</h1>
              <p className={style.subtitle}>
                Build a multi-step hero sheet with identity, combat style, and
                story choices.
              </p>
            </div>
            <Stepper />
            <div className={style.stepCard}>{renderStep()}</div>
            <div className={style.actions}>
              <button
                className={style.secondaryButton}
                onClick={handleBack}
                disabled={currentStep === 0}
              >
                Back
              </button>
              {currentStep === 3 ? (
                <button className={style.primaryButton} onClick={handleSubmit}>
                  Submit
                </button>
              ) : (
                <button className={style.primaryButton} onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
          </div>
          <div className={style.previewColumn}>
            <CharacterPreview />
          </div>
        </>
      )}
    </div>
  );
};
