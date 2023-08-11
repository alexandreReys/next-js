export function zipCodeMask(value: string): string {
  return value
    .replace(/\D/g, "")  // remove qualquer caractere que não seja número
    .slice(0, 8)        // limita a 8 dígitos
    .replace(/(\d{5})(\d)/, "$1-$2");  // insere o traço depois do quinto dígito
}
