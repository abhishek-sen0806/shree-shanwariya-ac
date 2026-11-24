export function cn(...inputs: (string | boolean | undefined | null | { [key: string]: boolean | undefined | null })[]) {
  const classes: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    if (typeof input === 'string') {
      classes.push(input);
    } else if (typeof input === 'object') {
      for (const [key, value] of Object.entries(input)) {
        if (value) classes.push(key);
      }
    }
  }
  return classes.join(' ');
}

export function generateWhatsAppLink(message?: string) {
  const phone = '917879649209';
  const defaultText = encodeURIComponent(
    message || 'Hello Shri Sanwariya AC, I would like to inquire about your appliance repair / installation services in Indore.'
  );
  return `https://wa.me/${phone}?text=${defaultText}`;
}

export function generatePhoneLink() {
  return 'tel:+917879649209';
}
