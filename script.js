const fetchButton = document.getElementById('fetchNumbers');
const outputDiv = document.getElementById('output');

fetchButton.addEventListener('click', async () => {
  const urls = [
    'http://20.244.56.144/numbers/primes',
    'http://abc.com/fibo'
  ];

  try {
    const response = await fetch(`/numbers?url=${urls.join('&url=')}`);
    const data = await response.json();

    outputDiv.innerHTML = JSON.stringify(data, null, 2);
  } catch (error) {
    outputDiv.innerHTML = 'An error occurred while fetching data.';
  }
});