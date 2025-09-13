export const addThousandsSeparator = (num) => {
    if(num == null || isNaN(num)) return "";

    const numStr = num.toString();
    const parts = numStr.split('.');

    let integerPart = parts[0];
    let fractionalPart = parts[1];

    const lastThree = integerPart.substring(integerPart.length-3);
    const otherNumbers = integerPart.substring(0,integerPart.length-3);

    if(otherNumbers !== ''){
        const formattedOtherNumbers = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g,',');
        integerPart=formattedOtherNumbers+','+lastThree;
    }else{
        integerPart=lastThree;
    }

    return fractionalPart?`${integerPart}.${fractionalPart}`:integerPart;
}

export default function prepareIncomeLineChartData(transactions) {
  if (!Array.isArray(transactions)) return [];

  const grouped = {};

  transactions.forEach(tx => {
    const date = tx.date.split('T')[0];
    if (!grouped[date]) {
      grouped[date] = { date, total: 0, transactions: [] };
    }
    grouped[date].total += Number(tx.amount) || 0;
    grouped[date].transactions.push(tx);
  });

  return Object.values(grouped).sort((a, b) => new Date(a.date) - new Date(b.date));
}

export function prepareExpenseLineChartData(transactions) {
  if (!Array.isArray(transactions)) return [];

  const grouped = {};

  transactions.forEach(tx => {
    const date = tx.date.split('T')[0];
    if (!grouped[date]) {
      grouped[date] = { date, total: 0, transactions: [] };
    }
    grouped[date].total += Number(tx.amount) || 0;
    grouped[date].transactions.push(tx);
  });

  return Object.values(grouped).sort((a, b) => new Date(a.date) - new Date(b.date));
}