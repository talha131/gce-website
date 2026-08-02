/* Site-wide identity, contact details, navigation and social links. */

export const site = {
  name: 'Government College of Education',
  shortName: 'GCE',
  founded: 1953,
  tagline: 'Striving hard to educate the nation — since 1953.',
  taglineShort: 'Striving hard to educate the nation.',
  affiliation: 'University of Karachi',
  description:
    'Government College of Education, Karachi — a government teacher-education college founded in 1953, affiliated with the University of Karachi. Over 50,000 teachers trained.',
  address: {
    line: 'Block 15, Federal B Area, Karachi, Pakistan',
    locality: 'Karachi',
    region: 'Sindh',
    country: 'PK',
  },
  email: 'info@gce.edu.pk',
  phone: '+92 330 2391291',
  phoneHref: '+923302391291',
  url: 'https://gce.edu.pk',
} as const;

/**
 * `color` is the platform's own brand hex (simple-icons). It drives the glyph
 * and the pill's tint via `--p` on `.social-pill` — it is deliberately NOT used
 * for the pill's label, which stays ink/white: WhatsApp green is ~1.9:1 and
 * Instagram pink ~3.5:1 on white, both below AA for label-sized text.
 */
export const socials = [
  { name: 'Instagram', handle: '@gce.edu.pk', href: 'https://www.instagram.com/gce.edu.pk', color: '#E4405F' },
  { name: 'Facebook', handle: 'GCE on Facebook', href: 'https://www.facebook.com/share/1869ju3tWb/', color: '#1877F2' },
  { name: 'WhatsApp', handle: 'WhatsApp Channel', href: 'https://whatsapp.com/channel/0029VawdUG40AgW2WNXEMw0z', color: '#25D366' },
  { name: 'YouTube', handle: '@gceedupk', href: 'https://youtube.com/@gceedupk', color: '#FF0000' },
] as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Academics', href: '/academics' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Faculty', href: '/faculty' },
  { label: 'Campus', href: '/campus' },
  { label: 'Student Life', href: '/student-life' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Contact', href: '/contact' },
] as const;

/** Public bus routes to the college (Contact page). */
export const transportRoutes = [
  { from: 'Water Pump', routes: '7D, 2D, 7C' },
  { from: 'Gulshan', routes: 'F-11, G-11' },
  { from: 'Sakhi Hasan', routes: '7D' },
  { from: 'Gulberg', routes: '7D' },
  { from: 'Husainabad', routes: '5C, S-3' },
  { from: 'Liaquatabad No. 10', routes: 'S-3' },
  { from: 'Javed Nihari', routes: '5C, S-3' },
] as const;
