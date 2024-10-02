import getBugetObject from './7-getBudgetObject';

export default function getFullBujectObject(income, gdp, capita) {
  const budget = getBugetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeDollars(income) { return `$${income}`; },
    getIncomeInEuros(income) { return `${income} euros`; },
  };

  return fullBudget;
}
