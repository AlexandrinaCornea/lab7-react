import { useCharacterState } from "@context/CharacterContext";
import style from "./style.module.css";

export const CharacterPreview = () => {
  const { formData } = useCharacterState();

  return (
    <aside className={style.preview}>
      <h1 className={style.title}>{formData.name || "Unnamed Character"}</h1>
      <p className={style.subtitle}>
        {formData.race || "No race selected"} •{" "}
        {formData.characterClass || "No class selected"}
      </p>
      <p className={style.line}>
        {formData.background || "No background selected"}
      </p>

      <section className={style.section}>
        <h2>Build</h2>
        <p className={style.line}>
          {formData.guardianName || "No guardian name"}
        </p>
        <p className={style.line}>{formData.age || "No age selected"}</p>
        <p className={style.line}>
          {formData.awakeningDate || "No date selected"}
        </p>
        <p className={style.line}>
          {formData.difficulty || "No difficulty selected"}
        </p>
      </section>

      <section className={style.section}>
        <h2>Stats</h2>
        <div className={style.statsGrid}>
          {formData.stats.map((stat) => (
            <p key={stat.id} className={style.stat}>
              <span>{stat.name}</span>
              <strong>{stat.value}</strong>
            </p>
          ))}
        </div>
      </section>

      <section className={style.section}>
        <h2>Story</h2>
        <p className={style.line}>
          {formData.alignment || "No alignment selected"}
        </p>
        <p className={style.line}>
          {formData.traits.length > 0
            ? formData.traits.join(", ")
            : "No traits selected"}
        </p>
        <p className={style.line}>
          {formData.romanceInterest || "No romance interest selected"}
        </p>
        <p className={`${style.line} ${style.muted}`}>
          {formData.backstory || "No backstory yet"}
        </p>
        <p className={style.line}>
          {formData.acceptDestiny ? "Destiny accepted" : "Destiny not accepted"}
        </p>
      </section>
    </aside>
  );
};
