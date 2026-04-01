export function validateCharacter(formData) {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "Name is required";
  } else if (formData.name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters.";
  }

  if (!formData.race) {
    errors.race = "Race is required.";
  }

  if (!formData.characterClass) {
    errors.characterClass = "Class is required.";
  }

  if (!formData.background) {
    errors.background = "Background is required.";
  }

  if (!formData.guardianName.trim()) {
    errors.guardianName = "Guardian name is required.";
  }

  if (!formData.awakeningDate) {
    errors.awakeningDate = "Awakening date is required.";
  }

  if (!formData.difficulty) {
    errors.difficulty = "Difficulty is required.";
  }

  if (!formData.alignment) {
    errors.alignment = "Alignment is required.";
  }

  if (!formData.romanceInterest) {
    errors.romanceInterest = "Romance interest is required.";
  }

  if (!formData.age) {
    errors.age = "Age is required.";
  } else if (Number(formData.age) < 18 || Number(formData.age) > 250) {
    errors.age = "Age must be between 18 and 250.";
  }

  if (formData.traits.length < 2) {
    errors.traits = "Choose at least 2 traits.";
  }

  if (!formData.backstory.trim()) {
    errors.backstory = "Backstory is required.";
  } else if (formData.backstory.trim().length < 100) {
    errors.backstory = "Backstory must be at least 100 characters.";
  }

  if (!formData.acceptDestiny) {
    errors.acceptDestiny = "You must accept your destiny.";
  }

  formData.stats.forEach((stat) => {
    if (stat.value < 8 || stat.value > 15) {
      errors[`stats.${stat.name}`] = `${stat.name} must be between 8 and 15.`;
    }
  });

  return errors;
}
