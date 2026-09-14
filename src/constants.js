const WHATSAPP_NUMBER = '972506797941'

export function buildWhatsappOrderUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
