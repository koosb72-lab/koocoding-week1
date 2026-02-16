const generateBtn = document.getElementById('generate');
const numbersDiv = document.getElementById('numbers');

function setBallColor(number) {
  if (number <= 10) return '#fbc400'; // 노란색
  if (number <= 20) return '#69c8f2'; // 파란색
  if (number <= 30) return '#ff7272'; // 빨간색
  if (number <= 40) return '#aaa'; // 회색
  return '#b0d840'; // 녹색
}

function generateNumbers() {
  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNumber);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

function displayNumbers(numbers) {
  numbersDiv.innerHTML = '';
  numbers.forEach(number => {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.textContent = number;
    ball.style.backgroundColor = setBallColor(number);
    numbersDiv.appendChild(ball);
  });
}

generateBtn.addEventListener('click', () => {
  const lottoNumbers = generateNumbers();
  displayNumbers(lottoNumbers);
});

// 페이지 로드 시 초기 번호 생성
window.addEventListener('load', () => {
    const lottoNumbers = generateNumbers();
    displayNumbers(lottoNumbers);
});
