// Задание 1
function calculateSumFromAToB() {
    const A = parseInt(document.getElementById('inputA').value);
    const B = parseInt(document.getElementById('inputB').value);
    
    const isValid = !isNaN(A) && !isNaN(B);
    document.getElementById('sumResult').textContent = isValid ? 
        `Сумма чисел от ${A} до ${B}: ${f(A, B)}` : 
        "Ошибка: введите целые числа";
}

function f(A, B) {
    let sum = 0;
    for (let i = A; i <= B; i++) {
        sum += i;
    }
    return sum;
}

// Задание 2
function generateRandomMatrix() {
    const M = parseInt(document.getElementById('rows').value);
    const N = parseInt(document.getElementById('cols').value);
    
    if (isNaN(M) || isNaN(N) || M <= 0 || N <= 0) {
        alert("Введите корректные размеры матрицы (M > 0, N > 0)");
        return;
    }
    
    const matrix = createRandomMatrix(M, N);
    const sums = calculateEvenColumnSums(matrix);
    displayMatrixResults(matrix, sums);
}

function createRandomMatrix(M, N) {
    const matrix = [];
    for (let i = 0; i < M; i++) {
        const row = [];
        for (let j = 0; j < N; j++) {
            row.push(Math.floor(Math.random() * 100) + 1);
        }
        matrix.push(row);
    }
    return matrix;
}

function calculateEvenColumnSums(matrix) {
    const sums = [];
    const N = matrix[0].length;
    
    for (let j = 1; j < N; j += 2) {
        let sum = 0;
        for (let i = 0; i < matrix.length; i++) {
            sum += matrix[i][j];
        }
        sums.push({ column: j + 1, sum: sum });
    }
    
    return sums;
}

function displayMatrixResults(matrix, sums) {
    let result = "Сгенерированная матрица " + matrix.length + " × " + matrix[0].length + ":\n\n";
    
    for (let i = 0; i < matrix.length; i++) {
        result += matrix[i].join('\t') + "\n";
    }
    
    result += "\nСуммы четных столбцов:\n";
    for (let i = 0; i < sums.length; i++) {
        result += `Столбец ${sums[i].column}: ${sums[i].sum}\n`;
    }
    
    document.getElementById('matrixResult').textContent = result;
}