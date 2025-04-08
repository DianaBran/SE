
export function forwardChaining(userAnswers, phones, rules) {
  let phoneScores = {};

  for (let phoneId in phones) {
    phoneScores[phoneId] = 0;
  }

  console.log("User Answers:", userAnswers);

  for (let phoneId in rules) {
    let phoneRules = rules[phoneId];
    for (let rule in phoneRules) {
      let questionKey = rule.toLowerCase();
      let userAnswer = userAnswers[questionKey];
      //console.log(`questionKey: ${questionKey}`);

      //console.log(`Checking: ${phoneId}, Rule: ${rule}, Expected: ${phoneRules[rule]}, User Answer: ${userAnswer}`);

      if (String(userAnswer) === String(phoneRules[rule])) {
        phoneScores[phoneId] += 1;
      }
    }
  }

  //console.log("Phone Scores:", phoneScores);

  let sortedPhones = Object.keys(phoneScores).sort((a, b) => phoneScores[b] - phoneScores[a]);

  let filteredPhones = sortedPhones.filter(phoneId => phoneScores[phoneId] > 0);

  let topPhones = filteredPhones.slice(0, 5).map(phoneId => ({
    ...phones[phoneId],
    score: phoneScores[phoneId]
  }));


  return topPhones;
}
