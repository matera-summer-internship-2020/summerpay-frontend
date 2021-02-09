// Reference: http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js
export const cpfValidator = (cpf: string): boolean => {
  let soma = 0;
  let resto = 0;
  const cpfNumbers = cpf.replace(/\D/g, '');
  if (cpfNumbers == '00000000000') return false;
  for (let i = 1; i <= 9; i++) soma = soma + parseInt(cpfNumbers.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpfNumbers.substring(9, 10))) return false;
  soma = 0;
  for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpfNumbers.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpfNumbers.substring(10, 11))) return false;

  return true;
};
