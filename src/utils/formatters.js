export function formatPrice(value) {
  if (!value) return 'Gratis';
  return `$${value.toLocaleString('es-CO')}`;
}
