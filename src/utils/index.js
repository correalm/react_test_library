/**
 * @function formatCurrency
 * 
 * @param {number} currency
 * @returns {string}
 */

export function formatCurrency(currency) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(currency)
}