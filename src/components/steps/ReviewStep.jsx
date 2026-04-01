import { useCharacterState } from "@context/CharacterContext";
import style from "./review.module.css";

export const ReviewStep = () => {
  const { formData } = useCharacterState();

  return (
    <div className={style.review}>
      <h2 className={style.title}>Review Your Character</h2>

      <div className={style.grid}>
      <section className={style.card}>
        <h3>Identity</h3>
        <p className={style.line}>Name: {formData.name}</p>
        <p className={style.line}>Race: {formData.race}</p>
        <p className={style.line}>Class: {formData.characterClass}</p>
        <p className={style.line}>Background: {formData.background}</p>
      </section>

      <section className={style.card}>
        <h3>Build</h3>
        <p className={style.line}>Guardian Name: {formData.guardianName}</p>
        <p className={style.line}>Age: {formData.age}</p>
        <p className={style.line}>Awakening Date: {formData.awakeningDate}</p>
        <p className={style.line}>Difficulty: {formData.difficulty}</p>
      </section>

      <section className={style.card}>
        <h3>Stats</h3>
        {formData.stats.map((stat) => (
          <p key={stat.id} className={style.line}>
            {stat.name}: {stat.value}
          </p>
        ))}
      </section>

      <section className={style.card}>
        <h3>Story</h3>
        <p className={style.line}>Alignment: {formData.alignment}</p>
        <p className={style.line}>
          Traits:{" "}
          {formData.traits.length > 0
            ? formData.traits.join(", ")
            : "No traits selected"}
        </p>
        <p className={style.line}>Romance Interest: {formData.romanceInterest}</p>
        <p className={style.line}>Backstory: {formData.backstory}</p>
        <p className={style.line}>
          Accept Destiny: {formData.acceptDestiny ? "Accepted" : "Not accepted"}
        </p>
      </section>
      </div>
    </div>
  );
};
