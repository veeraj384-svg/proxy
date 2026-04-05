const approvedLinks = {
  github: 'https://github.com',
  docs: 'https://developer.mozilla.org',
  portal: 'https://www.wikipedia.org',
  dashboard: 'https://www.khanacademy.org'
};

const input = document.getElementById('siteInput');
const openBtn = document.getElementById('openBtn');
const chips = document.querySelectorAll('.chip');

function normalizeInput(value) {
  const trimmed = value.trim();
  if (!trimmed) return null;

  const keyword = trimmed.toLowerCase();
  if (approvedLinks[keyword]) return approvedLinks[keyword];

  if (/^https?:\/\//i.test(trimmed)) return trimmed;

  return `https://${trimmed}`;
}

function openDestination(url) {
  if (!url) {
    alert('Please enter a valid URL or approved keyword.');
    return;
  }
  window.open(url, '_blank', 'noopener,noreferrer');
}

openBtn.addEventListener('click', () => {
  openDestination(normalizeInput(input.value));
});

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    openDestination(normalizeInput(input.value));
  }
});

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    window.open(chip.dataset.link, '_blank', 'noopener,noreferrer');
  });
});
