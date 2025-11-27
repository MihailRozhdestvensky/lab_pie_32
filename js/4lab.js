// Задание 1
function processNumbers() {
    const N = parseInt(document.getElementById('NValue1').value);
    
    if (isNaN(N) || N <= 0) {
        document.getElementById('numbersResult').textContent = "Ошибка: N должно быть целым числом > 0";
        return;
    }
    
    const input = document.getElementById('numbersInput').value;
    const numbers = input.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
    
    if (numbers.length !== N) {
        document.getElementById('numbersResult').textContent = `Ошибка: введите ровно ${N} чисел через запятую`;
        return;
    }
    
    let result = [];
    let count = 0;
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < numbers[i - 1]) {
            result.push(numbers[i]);
            count++;
        }
    }
    
    document.getElementById('numbersResult').textContent = 
        `Элементы меньше левого соседа: [${result.join(', ')}], Количество: ${count}`;
}

// Задание 2
function calculateSum() {
    const A = parseFloat(document.getElementById('AValue').value);
    const N = parseInt(document.getElementById('NValue2').value);
    
    const isValid = !isNaN(A) && !isNaN(N) && N > 0;
    document.getElementById('sumResult').textContent = isValid ? 
        `Сумма ряда: ${calculateSeries(A, N).toFixed(6)}` : 
        "Ошибка: A - вещественное число, N - целое число > 0";
}

function calculateSeries(A, N) {
    let sum = 0;
    let term = 1; 
    
    for (let i = 0; i <= N; i++) {
        sum += term;
        term = -term * A; 
    }
    
    return sum;
}