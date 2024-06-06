import * as toxicity from '@tensorflow-models/toxicity';

// Verifica a toxicidade de um texto
const checkToxicity = async (text) => {
  const threshold = 0.2; // Define o nível de confiança para a classificação
  const model = await toxicity.load(threshold); // Carrega o modelo de toxicidade com o nível especificado
  const predictions = await model.classify([text]); // Classifica o texto fornecido e obtém as previsões

  // Etiquetas de classificações de toxidade
  const toxicities = {
    'identity_attack': 'ataque à identidade',
    'insult': 'insulto',
    'obscene': 'obsceno',
    'severe_toxicity': 'extremamente tóxico',
    'sexual_explicit': 'sexual explícito',
    'threat': 'ameaça',
    'toxicity': 'tóxico',
  };

  // Filtra as previsões para encontrar as que são tóxicas
  const foundToxicities = predictions
    .filter(prediction => prediction.results.some(result => result.match)) // Verifica se alguma previsão corresponde
    .map(prediction => toxicities[prediction.label]); // Mapeia as etiquetas encontradas para suas descrições legíveis

  return foundToxicities;
};

export default checkToxicity;