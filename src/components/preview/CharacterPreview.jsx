import { useCharacterState } from "@context/CharacterContext";

export const CharacterPreview = () => {
  const { formData } = useCharacterState();

  return (
    <div>
      <h1>{formData.name || "Unnamed Character"}</h1>
      <p>{formData.race || "No race selected"}</p>
      <p>{formData.characterClass || "No class selected"}</p>
      <p>{formData.background || "No background selected"}</p>

      <h2>Build</h2>
      <p>{formData.guardianName || "No guardian name"}</p>
      <p>{formData.age || "No age selected"}</p>
      <p>{formData.awakeningDate || "No date selected"}</p>
      <p>{formData.difficulty || "No difficulty selected"}</p>

      <h2>Stats</h2>
      {formData.stats.map((stat) => (
        <p key={stat.id}>
          {stat.name}: {stat.value}
        </p>
      ))}

      <h2>Story</h2>
      <p>{formData.alignment || "No alignment selected"}</p>
      <p>
        {formData.traits.length > 0
          ? formData.traits.join(", ")
          : "No traits selected"}
      </p>
      <p>{formData.romanceInterest || "No romance interest selected"}</p>
      <p>{formData.backstory || "No backstory yet"}</p>
      <p>
        {formData.acceptDestiny ? "Destiny accepted" : "Destiny not accepted"}
      </p>
    </div>
  );
};
