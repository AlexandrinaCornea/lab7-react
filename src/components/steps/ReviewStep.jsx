import { useCharacterState } from "@context/CharacterContext";

export const ReviewStep = () => {
  const { formData } = useCharacterState();

  return (
    <div>
      <h2>Review Your Character</h2>

      <section>
        <h3>Identity</h3>
        <p>Name: {formData.name}</p>
        <p>Race: {formData.race}</p>
        <p>Class: {formData.characterClass}</p>
        <p>Background: {formData.background}</p>
      </section>

      <section>
        <h3>Build</h3>
        <p>Guardian Name: {formData.guardianName}</p>
        <p>Age: {formData.age}</p>
        <p>Awakening Date: {formData.awakeningDate}</p>
        <p>Difficulty: {formData.difficulty}</p>
      </section>

      <section>
        <h3>Stats</h3>
        {formData.stats.map((stat) => (
          <p key={stat.id}>
            {stat.name}: {stat.value}
          </p>
        ))}
      </section>

      <section>
        <h3>Story</h3>
        <p>Alignment: {formData.alignment}</p>
        <p>
          Traits:{" "}
          {formData.traits.length > 0
            ? formData.traits.join(", ")
            : "No traits selected"}
        </p>
        <p>Romance Interest: {formData.romanceInterest}</p>
        <p>Backstory: {formData.backstory}</p>
        <p>
          Accept Destiny: {formData.acceptDestiny ? "Accepted" : "Not accepted"}
        </p>
      </section>
    </div>
  );
};
