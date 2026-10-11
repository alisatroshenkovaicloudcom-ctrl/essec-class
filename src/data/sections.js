// The sections, in the order of the Canva slides.
// `nav` marks the sections that appear in the top menu.
export const SECTIONS = [
  { id: 'home', title: 'Cover', nav: 'Home' },
  { id: 'brand', title: 'Why we’re launching glacé', nav: 'The Brand' },
  { id: 'benchmark', title: 'Our benchmark set' },
  { id: 'growth', title: 'How glacé will grow' },
  { id: 'laws', title: 'The 3 laws of marketing', nav: 'The 3 Laws' },
  { id: 'duplication', title: 'Duplication of Purchase' },
  { id: 'assets', title: 'Distinctive brand assets' },
  { id: 'mental', title: 'Mental availability', nav: 'Mental Availability' },
  { id: 'physical', title: 'Physical availability', nav: 'Physical Availability' },
  { id: 'portfolio', title: 'Product portfolio', nav: 'Portfolio' },
  { id: 'digital', title: 'Digital availability', nav: 'Digital' },
  { id: 'launch', title: 'Launch strategy', nav: 'Launch Strategy' },
  { id: 'thanks', title: 'Thank you' },
]

export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
