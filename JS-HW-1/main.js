function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

const numbersContainer = document.getElementById('numbers-container');
const countriesContainer = document.getElementById('countries-container');


for (let i = 1; i <= 100; i++) {
    const numberDiv = document.createElement('div');
    numberDiv.textContent = i;
    numberDiv.style.display = 'inline-block';
    numberDiv.style.width = '50px';
    numberDiv.style.height = '50px';
    numberDiv.style.lineHeight = '50px';
    numberDiv.style.borderRadius = '20px';
    numberDiv.style.textAlign = 'center';
    numberDiv.style.margin = '5px';
    numberDiv.style.fontSize = '20px';

    if (isPrime(i)) {
        numberDiv.style.backgroundColor = 'red';
        numberDiv.style.color = 'white';
    } else if (i % 2 === 0) {
        numberDiv.style.backgroundColor = 'green';
        numberDiv.style.color = 'white';
    } else {
        numberDiv.style.backgroundColor = 'yellow';
        numberDiv.style.color = 'black';
    }
    
    numberDiv.addEventListener('mouseover', function() {
        numberDiv.style.display = 'inline-block';
        numberDiv.style.width = '50px';
        numberDiv.style.height = '50px';
        numberDiv.style.lineHeight = '50px';
        numberDiv.style.borderRadius = '15px';
        numberDiv.style.textAlign = 'center';
        numberDiv.style.margin = '5px';
        numberDiv.style.fontSize = '20px';
        numberDiv.style.color = 'gray';
        numberDiv.classList.add("rotate-scale-up")
    });
    
    numberDiv.addEventListener('mouseout', function() {
        numberDiv.style.display = 'inline-block';
        numberDiv.style.width = '50px';
        numberDiv.style.height = '50px';
        numberDiv.style.lineHeight = '50px';
        numberDiv.style.borderRadius = '20px';
        numberDiv.style.textAlign = 'center';
        numberDiv.style.margin = '5px';
        numberDiv.style.fontSize = '20px';
        numberDiv.classList.add("rotate-center")
        if (isPrime(i)) {
        numberDiv.style.backgroundColor = 'red';
        numberDiv.style.color = 'white';
    } else if (i % 2 === 0) {
        numberDiv.style.backgroundColor = 'green';
        numberDiv.style.color = 'white';
    } else {
        numberDiv.style.backgroundColor = 'yellow';
        numberDiv.style.color = 'black';
    }
    });



    numbersContainer.appendChild(numberDiv);
}

const countries = ["Türkiye", "Azerbaycan", "Almanya", "Fransa", "İtalya", "İspanya", "Japonya", "Çin", "Rusya", "Amerika"];

countriesContainer.style.marginTop = '20px';

countries.forEach(country => {
    const countryDiv = document.createElement('div');
    countryDiv.textContent = country;

    countryDiv.style.display = 'inline-block';
    countryDiv.style.padding = '5px 10px';
    countryDiv.style.margin = '5px';
    countryDiv.style.backgroundColor = '#f4f4f4';
    countryDiv.style.border = '1px solid #ccc';

    countriesContainer.appendChild(countryDiv);
});