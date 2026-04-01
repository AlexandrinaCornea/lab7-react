import {
  useCharacterDispatch,
  useCharacterState,
} from "@context/CharacterContext";
import traits from "@data/traits.json";
import alignments from "@data/alignments.json";
import romanceInterests from "@data/romanceInterests.json";
import style from "./style.module.css";

export const StoryStep = () => {
  const { formData, touched, errors } = useCharacterState();
  const dispatch = useCharacterDispatch();

  return (
    <div>
      <div className={style["step-section"]}>
        <p>Choose alignment</p>

        <div className={style["card-group"]}>
          {alignments.map((alignment) => (
            <label key={alignment.id} className={style["card-option"]}>
              <input
                type="radio"
                name="alignment"
                value={alignment.name}
                checked={formData.alignment === alignment.name}
                onChange={(e) =>
                  dispatch({
                    type: "SET_FIELD",
                    field: "alignment",
                    value: e.target.value,
                  })
                }
                onBlur={() =>
                  dispatch({ type: "TOUCH_FIELD", field: "alignment" })
                }
              />
              <div className={style["card-content"]}>
                <h3>{alignment.name}</h3>
                <p>{alignment.description}</p>
              </div>
            </label>
          ))}
        </div>

        {touched.alignment && errors.alignment && (
          <p className={style["error-text"]}>{errors.alignment}</p>
        )}
      </div>

      <div className={style["step-section"]}>
        <p>Choose traits</p>

        <div className={style["card-group"]}>
          {traits.map((trait) => (
            <label key={trait.id} className={style["card-option"]}>
              <input
                type="checkbox"
                name="traits"
                value={trait.name}
                checked={formData.traits.includes(trait.name)}
                onChange={() => {
                  dispatch({
                    type: "TOGGLE_TRAIT",
                    trait: trait.name,
                  });
                  dispatch({
                    type: "TOUCH_FIELD",
                    field: "traits",
                  });
                }}
                onBlur={() =>
                  dispatch({
                    type: "TOUCH_FIELD",
                    field: "traits",
                  })
                }
              />
              <div className={style["card-content"]}>
                <h3>{trait.name}</h3>
                <p>{trait.description}</p>
              </div>
            </label>
          ))}
        </div>

        {touched.traits && errors.traits && (
          <p className={style["error-text"]}>{errors.traits}</p>
        )}
      </div>

      <select
        value={formData.romanceInterest}
        onChange={(e) =>
          dispatch({
            type: "SET_FIELD",
            field: "romanceInterest",
            value: e.target.value,
          })
        }
        onBlur={() =>
          dispatch({
            type: "TOUCH_FIELD",
            field: "romanceInterest",
          })
        }
      >
        <option value="">Select romance interest</option>
        {romanceInterests.map((romanceInterest) => (
          <option key={romanceInterest} value={romanceInterest}>
            {romanceInterest}
          </option>
        ))}
      </select>
      {touched.romanceInterest && errors.romanceInterest && (
        <p className={style["error-text"]}>{errors.romanceInterest}</p>
      )}

      <textarea
        value={formData.backstory}
        onChange={(e) =>
          dispatch({
            type: "SET_FIELD",
            field: "backstory",
            value: e.target.value,
          })
        }
        onBlur={() => dispatch({ type: "TOUCH_FIELD", field: "backstory" })}
        placeholder="Write your backstory..."
      ></textarea>
      {touched.backstory && errors.backstory && (
        <p className={style["error-text"]}>{errors.backstory}</p>
      )}
      <label>
        <input
          type="checkbox"
          checked={formData.acceptDestiny}
          onChange={(e) =>
            dispatch({
              type: "SET_FIELD",
              field: "acceptDestiny",
              value: e.target.checked,
            })
          }
          onBlur={() =>
            dispatch({
              type: "TOUCH_FIELD",
              field: "acceptDestiny",
            })
          }
        />
        I accept my destiny.
      </label>
      {touched.acceptDestiny && errors.acceptDestiny && (
        <p className={style["error-text"]}>{errors.acceptDestiny}</p>
      )}
    </div>
  );
};
