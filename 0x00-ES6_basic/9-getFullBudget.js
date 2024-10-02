import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeDollars(income) { return `$${income}`; },
    getIncomeInEuros(income) { return `${income} euros`; },
  };

  return fullBudget;
}
