import {
  useCharacterState,
  useCharacterDispatch,
} from "@context/CharacterContext";
import style from "./style.module.css";
import difficultyOptions from "@data/difficulty.json";

export const BuildStep = () => {
  const { formData, touched, errors } = useCharacterState();
  const dispatch = useCharacterDispatch();

  return (
    <div>
      <input
        type="text"
        value={formData.guardianName}
        onChange={(e) =>
          dispatch({
            type: "SET_FIELD",
            field: "guardianName",
            value: e.target.value,
          })
        }
        onBlur={() =>
          dispatch({
            type: "TOUCH_FIELD",
            field: "guardianName",
          })
        }
        placeholder="Guardian name"
      />

      {touched.guardianName && errors.guardianName && (
        <p className={style["error-text"]}>{errors.guardianName}</p>
      )}

      <input
        type="number"
        value={formData.age}
        onChange={(e) =>
          dispatch({
            type: "SET_FIELD",
            field: "age",
            value: e.target.value,
          })
        }
        onBlur={() =>
          dispatch({
            type: "TOUCH_FIELD",
            field: "age",
          })
        }
        placeholder="Age"
      />

      {touched.age && errors.age && (
        <p className={style["error-text"]}>{errors.age}</p>
      )}

      <input
        type="date"
        value={formData.awakeningDate}
        onChange={(e) =>
          dispatch({
            type: "SET_FIELD",
            field: "awakeningDate",
            value: e.target.value,
          })
        }
        onBlur={() =>
          dispatch({
            type: "TOUCH_FIELD",
            field: "awakeningDate",
          })
        }
      />

      {touched.awakeningDate && errors.awakeningDate && (
        <p className={style["error-text"]}>{errors.awakeningDate}</p>
      )}

      <select
        value={formData.difficulty}
        onChange={(e) =>
          dispatch({
            type: "SET_FIELD",
            field: "difficulty",
            value: e.target.value,
          })
        }
        onBlur={() =>
          dispatch({
            type: "TOUCH_FIELD",
            field: "difficulty",
          })
        }
      >
        <option value="">Select difficulty</option>
        {difficultyOptions.map((difficulty) => (
          <option key={difficulty} value={difficulty}>
            {difficulty}
          </option>
        ))}
      </select>
      {touched.difficulty && errors.difficulty && (
        <p className={style["error-text"]}>{errors.difficulty}</p>
      )}

      <div>
        {formData.stats.map((stat) => (
          <div key={stat.id}>
            <p>
              {stat.name}: {stat.value}
            </p>

            <button
              type="button"
              onClick={() => {
                dispatch({ type: "TOUCH_FIELD", field: `stats.${stat.name}` });
                dispatch({ type: "DECREASE_STAT", statName: stat.name });
              }}
            >
              -
            </button>
            <button
              type="button"
              onClick={() => {
                dispatch({ type: "TOUCH_FIELD", field: `stats.${stat.name}` });
                dispatch({ type: "INCREASE_STAT", statName: stat.name });
              }}
            >
              +
            </button>
            {touched[`stats.${stat.name}`] && errors[`stats.${stat.name}`] && (
              <p className={style["error-text"]}>
                {errors[`stats.${stat.name}`]}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
