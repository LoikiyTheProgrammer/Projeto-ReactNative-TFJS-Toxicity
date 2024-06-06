import * as toxicity from '@tensorflow-models/toxicity';

const checkToxicity = async (text) => {
  const threshold = 0.2;
  const model = await toxicity.load(threshold);
  const predictions = await model.classify([text]);

  const toxicities = {
    'identity_attack': 'ataque à identidade',
    'insult': 'insulto',
    'obscene': 'obsceno',
    'severe_toxicity': 'extremamente tóxico',
    'sexual_explicit': 'sexual explícito',
    'threat': 'ameaça',
    'toxicity': 'tóxico',
  };

  const foundToxicities = predictions
    .filter(prediction => prediction.results.some(result => result.match))
    .map(prediction => toxicities[prediction.label]);

  return foundToxicities;
};

export default checkToxicity;