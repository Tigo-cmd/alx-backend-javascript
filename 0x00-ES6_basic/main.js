import getFullBujectObject from './9-getFullBudget';

const fullBudget = getFullBujectObject(100, 43, 22);

const dollars = fullBudget.getIncomeDollars(fullBudget.income);
const euros = fullBudget.getIncomeInEuros(fullBudget.income);

console.log(dollars, euros);
