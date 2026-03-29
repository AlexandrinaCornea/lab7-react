import races from "@data/races.json";
import classes from "@data/classes.json";
import backgrounds from "@data/backgrounds.json";
import {
  useCharacterDispatch,
  useCharacterState,
} from "@context/CharacterContext";
import style from "./style.module.css";

export const IdentityStep = () => {
  const { formData, touched, errors } = useCharacterState();
  const dispatch = useCharacterDispatch();

  return (
    <div>
      <input
        type="text"
        value={formData.name}
        onChange={(e) =>
          dispatch({ type: "SET_FIELD", field: "name", value: e.target.value })
        }
        onBlur={() => dispatch({ type: "TOUCH_FIELD", field: "name" })}
        placeholder="Character name"
      />
      {touched.name && errors.name && (
        <p className={style["error-text"]}>{errors.name}</p>
      )}

      <div className={style["step-section"]}>
        <p>Choose race</p>

        <div className={style["card-group"]}>
          {races.map((race) => (
            <label key={race.id} className={style["card-option"]}>
              <input
                type="radio"
                name="race"
                value={race.name}
                checked={formData.race === race.name}
                onChange={(e) =>
                  dispatch({
                    type: "SET_FIELD",
                    field: "race",
                    value: e.target.value,
                  })
                }
                onBlur={() => dispatch({ type: "TOUCH_FIELD", field: "race" })}
              />
              <div className={style["card-content"]}>
                <h3>{race.name}</h3>
                <p>{race.description}</p>
              </div>
            </label>
          ))}
        </div>

        {touched.race && errors.race && (
          <p className={style["error-text"]}>{errors.race}</p>
        )}
      </div>

      <div className={style["step-section"]}>
        <p>Choose class</p>

        <div className={style["card-group"]}>
          {classes.map((characterClass) => (
            <label key={characterClass.id} className={style["card-option"]}>
              <input
                type="radio"
                name="characterClass"
                value={characterClass.name}
                checked={formData.characterClass === characterClass.name}
                onChange={(e) =>
                  dispatch({
                    type: "SET_FIELD",
                    field: "characterClass",
                    value: e.target.value,
                  })
                }
                onBlur={() =>
                  dispatch({
                    type: "TOUCH_FIELD",
                    field: "characterClass",
                  })
                }
              />
              <div className={style["card-content"]}>
                <h3>{characterClass.name}</h3>
                <p>{characterClass.description}</p>
              </div>
            </label>
          ))}
        </div>
        {touched.characterClass && errors.characterClass && (
          <p className={style["error-text"]}>{errors.characterClass}</p>
        )}
      </div>

      <div className={style["step-section"]}>
        <p>Choose background</p>

        <div className={style["card-group"]}>
          {backgrounds.map((background) => (
            <label key={background.id} className={style["card-option"]}>
              <input
                type="radio"
                name="background"
                value={background.name}
                checked={formData.background === background.name}
                onChange={(e) =>
                  dispatch({
                    type: "SET_FIELD",
                    field: "background",
                    value: e.target.value,
                  })
                }
                onBlur={() =>
                  dispatch({
                    type: "TOUCH_FIELD",
                    field: "background",
                  })
                }
              />
              <div className={style["card-content"]}>
                <h3>{background.name}</h3>
                <p>{background.description}</p>
              </div>
            </label>
          ))}
        </div>

        {touched.background && errors.background && (
          <p className={style["error-text"]}>{errors.background}</p>
        )}
      </div>
    </div>
  );
};
