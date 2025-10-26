
document.addEventListener('DOMContentLoaded', function () {
  const wholecookie = document.getElementById('wholecookie');
  const leftcookie = document.getElementById('leftcookie');
  const rightcookie = document.getElementById('rightcookie');
  const resetButton = document.getElementById('resetButton');
  if (!wholecookie) return;

  wholecookie.style.cursor = 'pointer';

  wholecookie.addEventListener('click', () => {
    // hide the whole cookie and show the split cookies + reset button
    wholecookie.style.display = 'none';
    if (leftcookie) leftcookie.style.display = 'inline';
    if (rightcookie) rightcookie.style.display = 'inline';
    if (resetButton) resetButton.style.display = 'block';
  });

  if (resetButton) {
    resetButton.addEventListener('click', () => {
      // revert to initial state
      wholecookie.style.display = '';
      if (leftcookie) leftcookie.style.display = 'none';
      if (rightcookie) rightcookie.style.display = 'none';
      resetButton.style.display = 'none';
    });
  }
});

async function getRandomProverb() {
  try {
    const data = await window.fs.readFile('assets/fortunes/proverbs.txt', { encoding: 'utf8' });
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const randomIndex = Math.floor(Math.random() * lines.length);
    return lines[randomIndex];
  } catch (error) {
    console.error('Error reading proverbs file:', error);
    return 'Unable to load proverb.';
  }
};