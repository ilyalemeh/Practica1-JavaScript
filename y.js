// 4
// const numRows = 10;
// const numCols = 10;
// const total = numRows * numCols;
// const cells = 10;
// let cells1 = 0;
// const cells2 = [];

// function Random() {
//   while (cells2.length < cells) {
//     const randomCell = Math.floor(Math.random() * total) + 1;
//     if (!cells2.includes(randomCell)) {
//       cells2.push(randomCell);
//     }
//   }
// }

// function GameBoard() {
//   const gameBoard = document.querySelector('#gameBoard');

//   for (let i = 0; i < numRows; i++) {
//     const row = gameBoard.insertRow(i);
//     for (let j = 0; j < numCols; j++) {
//       const cell = row.insertCell(j);
//       cell.setAttribute('data-cell-index', i * numCols + j + 1);
//       cell.addEventListener('click', checkCell);
//     }
//   }
// }

// function checkCell(event) {
//   const clickedCell = event.target;
//   const cellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

//   if (cells2.includes(cellIndex)) {
//     clickedCell.style.backgroundColor = 'blue';
//     cells1++;

//     if (cells1 === cells) {
//       alert('Поздравляем, вы лучший, как наш учитель Александр Юрьевич!');
//       disableAllCells();
//       clearInterval(timerInterval);
//     }
//   } else {
//     clickedCell.style.backgroundColor = 'black';
//   }
// }

// function disableAllCells() {
//   const allCells = document.querySelectorAll('td'); 
//   allCells.forEach(cell => {
//     cell.removeEventListener('click', checkCell);
//   });
// }

// let timeLeft = 60;
// const timeDisplay = document.querySelector('#timeLeft');
// const timerInterval = setInterval(() => {
//   timeLeft--;
//   timeDisplay.textContent = timeLeft;

//   if (timeLeft === 0) {
//     clearInterval(timerInterval);
//     alert('Вы проиграли Вы не Александр Юрьевич!!!!');
//     disableAllCells();
//   }
//   if (cells1 === cells) { 
//     clearInterval(timerInterval);
//   }
// }, 1000);

// Random();
// GameBoard();

// 5
// const inputField = document.getElementById('inputField');
//   let capsLockEnabled = false;

//   function insertText(value) {
//     if (capsLockEnabled) {
//       value = value.toUpperCase();
//     }
//     inputField.value += value;
//   }

//   function backspace() {
//     inputField.value = inputField.value.slice(0, -1);
//   }

//   function toggleCapsLock() {
//     capsLockEnabled = !capsLockEnabled;
//   }
// 6

// const months = [
//   'Январь', 'Февраль', 'Март',
//   'Апрель', 'Май', 'Июнь',
//   'Июль', 'Август', 'Сентябрь',
//   'Октябрь', 'Ноябрь', 'Декабрь'
// ];

// let currentDate = new Date();

// function renderCalendar(year, month) {
//   const currentDay = new Date().getDate();
//   const daysInMonth = new Date(year, month + 1, 0).getDate();

//   document.write('<h2>' + months[month] + ' ' + year + '</h2>');

//   document.write('<ul>');
//   for (let day = 1; day <= daysInMonth; day++) {
//     const className = (day === currentDay) ? 'today' : '';
//     document.write('<li class="' + className + '">' + day + '</li>');
//   }
//   document.write('</ul>');
// }

// function changeMonth(offset) {
//   currentDate.setMonth(currentDate.getMonth() + offset);
//   document.body.innerHTML = '';
//   renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
// }

// document.write('<button onclick="changeMonth(-1)">Назад</button>');
// document.write('<button onclick="changeMonth(1)">Вперед</button>');

// renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
// 7
// const tag = {
//   'h1': 'Заголовок 1-го уровня',
//   'span': 'Инлайн-элемент без семантики',
//   'ul': 'Неупорядоченный список',
//   'li': 'Элемент списка',
//   'form': 'Форма для сбора данных',
//   'div': 'Элемент-контейнер',
//   'p': 'Параграф текста',
//   'a': 'Ссылка',
//   'img': 'Изображение',
//   // Добавьте другие теги и их описания по необходимости
// };

// function searchTag(event) {
//   if (event.key === 'Enter') {
//     const input = document.getElementById('tagInput');
//     const tagDescriptionDiv = document.getElementById('tagDescription');
//     const tagName = input.value.toLowerCase();

//     if (tag[tagName]) {
//       tagDescriptionDiv.textContent = tag[tagName];
//     } else {
//       tagDescriptionDiv.textContent = 'Описание не найдено';
//     }
//     input.value = '';
//   }
// }
// 8
// const historicalEvents = [
//   { year: 2000, date: '01-01', title: 'Начало нового тысячелетия', description: 'Переход от 1999 года к 2000 году.' },
//   { year: 2001, date: '09-11', title: 'Теракты 11 сентября', description: 'Серия террористических атак в США.' },
//   { year: 2002, date: '01-01', title: 'Введение евро', description: 'Европейский союз ввел евро в качестве общей валюты.' },
//   { year: 2003, date: '20-03', title: 'Вторжение коалиции в Ирак', description: 'Начало вторжения в Ирак силами коалиции под руководством США.' },
//   { year: 2004, date: '01-05', title: 'Расширение Европейского союза', description: 'Вступление 10 новых стран в состав Европейского союза.' },
//   { year: 2005, date: '07-07', title: 'Теракты в Лондоне', description: 'Серия террористических атак в Лондоне в подземке и на автобусах.' },
//   { year: 2006, date: '01-01', title: 'Запуск Twitter', description: 'Запуск социальной сети Twitter.' },
//   { year: 2007, date: '29-06', title: 'Выход первого iPhone', description: 'Компания Apple выпустила свой первый смартфон - iPhone.' },
//   { year: 2008, date: '08-08', title: 'Война в Южной Осетии', description: 'Вооруженный конфликт между Грузией и Россией.' },
//   { year: 2009, date: '20-01', title: 'Инаугурация Обамы', description: 'Барак Обама вступает в должность президента США.' },
// ];

// const input = document.getElementById('input');
// const table = document.getElementById('table');

// input.addEventListener('keydown', function (event) {
//   if (event.key === 'Enter') {
//     const year = parseInt(input.value);
//     const eventsForYear = historicalEvents.filter(event => event.year === year);

//     renderTable(eventsForYear);
//   }
// });

// function renderTable(events) {
  
//   table.innerHTML = '';
//   const headerRow = table.insertRow();
//   const headers = ['Дата', 'Название', 'Описание'];
//   headers.forEach(header => {
//     const cell = headerRow.insertCell();
//     cell.textContent = header;
//   });


//   events.forEach(event => {
//     const row = table.insertRow();
//     const cells = ['date', 'title', 'description'];
//     cells.forEach(cellName => {
//       const cell = row.insertCell();
//       cell.textContent = event[cellName];
//     });
//   });
// }
// 9
// const horoscopes = {
//   'Овен': {
//     today: 'Сегодня будет удачный день для начала новых начинаний.',
//     tomorrow: 'Завтра вы можете столкнуться с неожиданными ситуациями, будьте готовы.',
//     dayAfterTomorrow: 'Послезавтра важно уделить время своим близким.'
//   },
//   'Телец': {
//     today: 'Сегодня подходит для творчества и самовыражения.',
//     tomorrow: 'Завтра лучше избегать конфликтов и сохранять спокойствие.',
//     dayAfterTomorrow: 'Послезавтра возможны полезные знакомства.'
//   },
//   'Близнецы': {
//     today: 'Сегодня подходит для общения и обмена идеями.',
//     tomorrow: 'Завтра будьте внимательны к мелочам, избегайте недоразумений.',
//     dayAfterTomorrow: 'Послезавтра благоприятно для обучения новому.'
//   },
//   'Рак': {
//     today: 'Сегодня вы можете почувствовать поддержку семьи.',
//     tomorrow: 'Завтра избегайте конфликтов, уделите внимание близким.',
//     dayAfterTomorrow: 'Послезавтра подходит для заботы о домашних делах.'
//   },
//   'Лев': {
//     today: 'Сегодня подходит для проявления лидерских качеств.',
//     tomorrow: 'Завтра будьте внимательны к мнению окружающих.',
//     dayAfterTomorrow: 'Послезавтра благоприятно для творческих начинаний.'
//   },
//   'Дева': {
//     today: 'Сегодня фокусируйтесь на деталях и порядке.',
//     tomorrow: 'Завтра планируйте ваши задачи и будьте организованными.',
//     dayAfterTomorrow: 'Послезавтра благоприятно для заботы о здоровье.'
//   },
//   'Весы': {
//     today: 'Сегодня старайтесь найти баланс в отношениях.',
//     tomorrow: 'Завтра будьте открыты для компромиссов и сотрудничества.',
//     dayAfterTomorrow: 'Послезавтра подходит для общения и обмена идеями.'
//   },
//   'Скорпион': {
//     today: 'Сегодня будьте осторожны в выражении своих чувств.',
//     tomorrow: 'Завтра фокусируйтесь на своих целях и стремлениях.',
//     dayAfterTomorrow: 'Послезавтра благоприятно для планов и амбиций.'
//   },
//   'Стрелец': {
//     today: 'Сегодня будьте открыты для новых идей и приключений.',
//     tomorrow: 'Завтра стремитесь к знаниям и саморазвитию.',
//     dayAfterTomorrow: 'Послезавтра подходит для обучения новому.'
//   },
//   'Козерог': {
//     today: 'Сегодня фокусируйтесь на достижении своих целей.',
//     tomorrow: 'Завтра будьте осторожны в финансовых вопросах.',
//     dayAfterTomorrow: 'Послезавтра благоприятно для планов на будущее.'
//   },
//   'Водолей': {
//     today: 'Сегодня будьте открыты для общения и социальных связей.',
//     tomorrow: 'Завтра старайтесь быть оригинальными и творческими.',
//     dayAfterTomorrow: 'Послезавтра подходит для работы в коллективе.'
//   },
//   'Рыбы': {
//     today: 'Сегодня слушайте свои внутренние чувства и интуицию.',
//     tomorrow: 'Завтра уделите внимание своим эмоциональным потребностям.',
//     dayAfterTomorrow: 'Послезавтра благоприятно для творчества и самовыражения.'
//   }
// };
// function showHoroscope(event) {
//   if (event.key === 'Enter') {
//     const birthdateInput = document.getElementById('birthdateInput');
//     const selectedDay = document.querySelector('input[name="day"]:checked').value;

//     const zodiacSigns = [
//       'Овен', 'Телец', 'Близнецы', 'Рак', 'Лев', 'Дева',
//       'Весы', 'Скорпион', 'Стрелец', 'Козерог', 'Водолей', 'Рыбы'
//     ];
//     const birthDate = new Date(birthdateInput.value);
//     const zodiacIndex = (birthDate.getMonth() + 1) % 12;
//     const zodiacSign = zodiacSigns[zodiacIndex];

//     const horoscopeOutput = document.getElementById('horoscopeOutput');
//     horoscopeOutput.textContent = horoscopes[zodiacSign][selectedDay];
//   }
// }

// document.querySelectorAll('input[name="day"]').forEach(function (radio) {
//   radio.addEventListener('change', showHoroscope);
// });
// 10
// const predictions = [
//   { text: 'Сегодня будет отличный день!', type: 'good' },
//   { text: 'Остерегайтесь неожиданных ситуаций.', type: 'bad' },
//   { text: 'Вас ждет приятное событие!', type: 'good' },
//   { text: 'Будьте осторожны в общении с окружающими.', type: 'bad' },
//   { text: 'Сегодня благоприятный день для начала нового проекта.', type: 'good' },
//   { text: 'Будьте готовы к непредвиденным изменениям.', type: 'bad' },
  
// ];

// let predictionTimer;

// function startPrediction() {
//   const startButton = document.getElementById('start');
//   const stopButton = document.getElementById('stop');
//   startButton.classList.remove('active');
//   stopButton.classList.add('active');

//   let seconds = 0;
//   predictionTimer = setInterval(function () {
//     document.getElementById('timer').textContent = `${(seconds / 10).toFixed(1)} сек`;
//     seconds++;
//   }, 100);
// }

// function stopPrediction() {
//   const stopButton = document.getElementById('stop');
//   stopButton.classList.remove('active');

//   clearInterval(predictionTimer);
//   const randomIndex = Math.floor(Math.random() * predictions.length);
//   const selectedPrediction = predictions[randomIndex];

//   showPrediction(selectedPrediction.type, selectedPrediction.text);
// }

// function showPrediction(type, text) {
//   const textOutput = document.getElementById('text');
//   textOutput.textContent = text;

//   if (type === 'good') {
//     textOutput.classList.add('good');
//   } else {
//     textOutput.classList.add('bad');
//   }

//   const startButton = document.getElementById('start');
//   const stopButton = document.getElementById('stop');
//   startButton.style.display = 'none';
//   stopButton.style.display = 'none';
// }


// Чеклист
// let input = document.querySelector('#input');
// let list = document.querySelector('#list');

// input.addEventListener('keypress', function(event) {
// 	if (event.key == 'Enter') {
// 		let li = document.createElement('li');
		
// 		let task = document.createElement('span');
// 		task.classList.add('task');
// 		task.textContent = this.value;
// 		task.addEventListener('dblclick', function() {
// 			let text = this.textContent;
// 			this.textContent = '';
			
// 			let edit = document.createElement('input');
// 			edit.value = text;
// 			this.appendChild(edit);
			
// 			let self = this;
// 			edit.addEventListener('keypress', function(event) {
// 				if (event.key == 'Enter') {
// 					self.textContent = this.value;
// 				}
// 			});
// 		});
// 		li.appendChild(task);
		
// 		let remove = document.createElement('span');
// 		remove.textContent = 'удалить';
// 		remove.classList.add('remove');
// 		remove.addEventListener('click', function() {
// 			this.parentElement.remove();
// 		});
// 		li.appendChild(remove);
		
// 		let mark = document.createElement('span');
// 		mark.textContent = 'сделано';
// 		mark.classList.add('mark');
// 		mark.addEventListener('click', function() {
// 			this.parentElement.classList.add('done');
// 		});
// 		li.appendChild(mark);
		
// 		list.appendChild(li);
		
// 		this.value = '';
// 	}
// });



// Игра в города против робота 
// let field = document.querySelector('#field');
// let message = document.querySelector('#message');
// let cities = [];
// let currentPlayer = 1; 
// let allCities = [
//   'Москва', 'Анапа', 'Абакан', 'Новосибирск', 'Омск', 'Екатеринбург', 
//   'Санкт-Петербург', 'Краснодар', 'Казань', 'Сочи', 'Хабаровск', 
//   'Владивосток', 'Томск', 'Уфа', 'Иркутск', 'Ярославль', 'Тверь', 
//   'Волгоград', 'Ростов-на-Дону', 'Калининград', 'Астрахань', 'Саратов'
// ];

// field.addEventListener('keydown', handleKeyDown);

// function handleKeyDown(event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     let cityName = field.value.trim();

//     if (isValidCity(cityName)) {
//       if (isValidMove(cityName)) {
//         cities.push(cityName);
//         displayMessage(`Игрок ${currentPlayer}: "${cityName}" добавлен. Следующий ход.`);
//         field.value = "";

        
//         currentPlayer = (currentPlayer % 3) + 1;

//         makeMove();
//       } else {
//         displayMessage("Неправильный ход. Город должен начинаться с последней буквы предыдущего города.");
//       }
//     } else {
//       displayMessage("Город должен начинаться с буквы.");
//     }
//   }
// }

// function isValidCity(city) {
//   return city.length > 0 && isNaN(city[0]);
// }

// function isValidMove(city) {
//   if (cities.length === 0) {
//     return true; 
//   }

//   let lastCity = cities[cities.length - 1];
//   let lastLetter = lastCity.slice(-1).toUpperCase();

//   if (lastCity.endsWith("ь")) {
  
//     lastLetter = lastCity[lastCity.length - 2].toUpperCase();
//   }

//   return city.toUpperCase().startsWith(lastLetter);
// }

// function makeMove() {
//   switch (currentPlayer) {
//     case 1:
      
//       break;
//     case 2:
      
//       break;
//     case 3:
      
//       makeRobotMove();
//       break;
//   }
// }

// function makeRobotMove() {
//   let lastCity = cities[cities.length - 1];
//   let lastLetter = lastCity.slice(-1).toUpperCase();

//   if (lastCity.endsWith("ь")) {
//     lastLetter = lastCity[lastCity.length - 2].toUpperCase();
//   }

//   let availableCities = allCities.filter(city => !cities.includes(city) && city.toUpperCase().startsWith(lastLetter));

//   if (availableCities.length > 0) {
//     let robotCity = availableCities[Math.floor(Math.random() * availableCities.length)];
//     cities.push(robotCity);
//     displayMessage(`Робот: "${robotCity}". Следующий ход.`);
//     currentPlayer = 1; 
//   } else {
//     displayMessage("Победа! Робот не может найти подходящий город. Вы выиграли!");
//   }
// }

// function displayMessage(text) {
//   message.textContent = text;
// }



// Калькулятор продуктов
// let name   = document.querySelector('#name');
// let price  = document.querySelector('#price');
// let amount = document.querySelector('#amount');
// let add    = document.querySelector('#add');
// let table  = document.querySelector('#table');
// let total  = document.querySelector('#total');

// function createCell(tr, value, name) {
//   let td = document.createElement('td');
//   td.textContent = value;
//   td.classList.add(name);
//   tr.appendChild(td);
//   return td;
// }

// function recountTotal() {
//   let costs = table.querySelectorAll('.cost');
//   let sum = 0;

//   if (costs.length > 0) {
//     costs.forEach(cost => {
//       sum += parseFloat(cost.textContent);
//     });
//   }

//   total.textContent = sum.toFixed(2);
// }

// function allowEdit(td) {
//   td.addEventListener('dblclick', function () {
//     let text = td.textContent;
//     td.textContent = '';

//     let input = document.createElement('input');
//     input.value = text;
//     input.focus();
//     td.appendChild(input);

//     input.addEventListener('keydown', function (event) {
//       if (event.key === 'Enter') {
//         td.textContent = this.value;

//         if (td.classList.contains('price') || td.classList.contains('amount')) {
          
//           let row = td.parentElement;
//           let price = parseFloat(row.querySelector('.price').textContent);
//           let amount = parseFloat(row.querySelector('.amount').textContent);
//           let cost = price * amount;

          
//           row.querySelector('.cost').textContent = cost;

          
//           recountTotal();
//         }
//       }
//     });
//   });
// }

// add.addEventListener('click', function() {
//   let tr = document.createElement('tr');

//   let nameCell = createCell(tr, name.value, 'name');
//   let priceCell = createCell(tr, price.value, 'price');
//   let amountCell = createCell(tr, amount.value, 'amount');

//   createCell(tr, price.value * amount.value, 'cost');

//   let removeCell = createCell(tr, 'удалить', 'remove');
//   removeCell.addEventListener('click', function() {
    
//     tr.remove();
    
//     recountTotal();
//   });

 
//   table.appendChild(tr);
  
//   allowEdit(nameCell);
//   allowEdit(priceCell);
//   allowEdit(amountCell);

//   recountTotal();
// });


// 30
// let inputs = document.querySelectorAll('#test input');
// let checkButton = document.querySelector('#checkAnswers');

// inputs.forEach(input => {
//   input.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//       checkAnswer(input);
//     }
//   });
// });

// checkButton.addEventListener('click', function() {
//   inputs.forEach(input => {
//     checkAnswer(input);
//   });
// });

// function checkAnswer(input) {
//   let userAnswer = input.value.trim();
//   let correctAnswer = input.getAttribute('data-right');

//   if (userAnswer === correctAnswer) {
//     input.classList.remove('wrong');
//     input.classList.add('right');
//   } else {
//     input.classList.remove('right');
//     input.classList.add('wrong');
//   }
// }

// 31
// let questions = ['вопрос 1?', 'вопрос 2?', 'вопрос 3?'];
//   let answers = ['ответ 1', 'ответ 2', 'ответ 3'];

//   let inputs = document.querySelectorAll('#test input');
//   let checkButton = document.querySelector('#button');

//   checkButton.addEventListener('click', function() {
//     inputs.forEach((input, index) => {
//       checkAnswer(input, answers[index]);
//     });
//   });

//   function checkAnswer(input, correctAnswer) {
//     let userAnswer = input.value.trim();

//     if (userAnswer === correctAnswer) {
//       input.classList.remove('wrong');
//       input.classList.add('right');
//     } else {
//       input.classList.remove('right');
//       input.classList.add('wrong');
//     }
//   }

// 32
// let questions = ['вопрос 1?', 'вопрос 2?', 'вопрос 3?'];
// let answers = ['ответ 1', 'ответ 2', 'ответ 3'];

// let testContainer = document.querySelector('#test');
// let checkButton = document.querySelector('#button');

// // Создаем дивы с вопросами и инпутами
// questions.forEach((question, index) => {
//   let questionDiv = document.createElement('div');
//   questionDiv.innerHTML = `<p>${question}</p><input>`;
//   testContainer.appendChild(questionDiv);
// });

// checkButton.addEventListener('click', function() {
//   let inputs = document.querySelectorAll('#test input');
//   inputs.forEach((input, index) => {
//     checkAnswer(input, answers[index]);
//   });
// });

// function checkAnswer(input, correctAnswer) {
//   let userAnswer = input.value.trim();

//   if (userAnswer === correctAnswer) {
//     input.classList.remove('wrong');
//     input.classList.add('right');
//   } else {
//     input.classList.remove('right');
//     input.classList.add('wrong');
//   }
// }

// 33
// let questions = {
//   'Вопрос 1?': 'ответ 1',
//   'Вопрос 2?': 'ответ 2',
//   'Вопрос 3?': 'ответ 3',
// };

// let testContainer = document.querySelector('#test');
// let checkButton = document.querySelector('#button');

// for (let question in questions) {
//   let questionDiv = document.createElement('div');
//   questionDiv.innerHTML = `<p>${question}</p><input>`;
//   testContainer.appendChild(questionDiv);
// }

// checkButton.addEventListener('click', function() {
//   let inputs = document.querySelectorAll('#test input');
//   inputs.forEach((input, index) => {
//     checkAnswer(input, Object.values(questions)[index]);
//   });
// });

// function checkAnswer(input, correctAnswer) {
//   let userAnswer = input.value.trim();

//   if (userAnswer === correctAnswer) {
//     input.classList.remove('wrong');
//     input.classList.add('right');
//   } else {
//     input.classList.remove('right');
//     input.classList.add('wrong');
//   }
// }

// let questions = [
//   {
//     text: 'вопрос 1?',
//     right: 'ответ 1',
//   },
//   {
//     text: 'вопрос 2?',
//     right: 'ответ 2',
//   },
//   {
//     text: 'вопрос 3?',
//     right: 'ответ 3',
//   },
// ];

// let questions = [
//   {
//     text: 'вопрос 1?',
//     right: 'ответ 1',
//   },
//   {
//     text: 'вопрос 2?',
//     right: 'ответ 2',
//   },
//   {
//     text: 'вопрос 3?',
//     right: 'ответ 3',
//   },
// ];

// let testContainer = document.querySelector('#test');
// let checkButton = document.querySelector('#button');

// questions.forEach(question => {
//   let questionDiv = document.createElement('div');
//   questionDiv.innerHTML = `<p>${question.text}</p><input>`;
//   testContainer.appendChild(questionDiv);
// });

// checkButton.addEventListener('click', function() {
//   let inputs = document.querySelectorAll('#test input');
//   inputs.forEach((input, index) => {
//     checkAnswer(input, questions[index].right);
//   });
// });

// function checkAnswer(input, correctAnswer) {
//   let userAnswer = input.value.trim();

//   if (userAnswer === correctAnswer) {
//     input.classList.remove('wrong');
//     input.classList.add('right');
//   } else {
//     input.classList.remove('right');
//     input.classList.add('wrong');
//   }
// }

// 34
// let testContainer = document.querySelector('#test');
// let checkButton = document.querySelector('#checkButton');

// testContainer.addEventListener('change', function (event) {
//   let selectedOption = event.target;
//   checkAnswer(selectedOption);
// });

// checkButton.addEventListener('click', function() {
//   let selectedOptions = document.querySelectorAll('input[type="radio"]:checked');
//   selectedOptions.forEach(selectedOption => {
//     checkAnswer(selectedOption);
//   });
// });

// function checkAnswer(selectedOption) {
//   let isRight = selectedOption.hasAttribute('data-right');
  
//   if (isRight) {
//     selectedOption.parentElement.classList.remove('wrong');
//     selectedOption.parentElement.classList.add('right');
//   } else {
//     selectedOption.parentElement.classList.remove('right');
//     selectedOption.parentElement.classList.add('wrong');
//   }
// }

// let testContainer = document.querySelector('#test');

//   testContainer.addEventListener('change', function (event) {
//     let selectedOption = event.target;
//     checkAnswer(selectedOption);
//   });

//   function checkAnswer(selectedOption) {
//     let isRight = selectedOption.hasAttribute('data-right');
    
//     if (isRight) {
//       selectedOption.parentElement.classList.remove('wrong');
//       selectedOption.parentElement.classList.add('right');
//     } else {
//       selectedOption.parentElement.classList.remove('right');
//       selectedOption.parentElement.classList.add('wrong');
//     }
//   }

35
// let testContainer = document.querySelector('#test');
// let checkButton = document.querySelector('#checkButton');
// let answers = [0, 1, 2];

// testContainer.addEventListener('change', function (event) {
//   let selectedOption = event.target;
//   checkAnswer(selectedOption);
// });

// checkButton.addEventListener('click', function() {
//   let selectedOptions = document.querySelectorAll('input[type="radio"]:checked');
//   selectedOptions.forEach(selectedOption => {
//     checkAnswer(selectedOption);
//   });
// });

// function checkAnswer(selectedOption) {
//   let selectedQuestionIndex = parseInt(selectedOption.getAttribute('data-index'));
//   let isRight = answers[selectedQuestionIndex] == selectedOption.parentElement.querySelectorAll('input[type="radio"]').length - 1;
  
//   if (isRight) {
//     selectedOption.parentElement.classList.remove('wrong');
//     selectedOption.parentElement.classList.add('right');
//   } else {
//     selectedOption.parentElement.classList.remove('right');
//     selectedOption.parentElement.classList.add('wrong');
//   }
// }

// 36
// let testContainer = document.querySelector('#test');
// let checkButton = document.querySelector('#checkButton');

// let questions = [
//   {
//     text: 'вопрос 1?',
//     right: 0,
//     variants: [
//       'вариант 1',
//       'вариант 2',
//       'вариант 3'
//     ]
//   },
//   {
//     text: 'вопрос 2?',
//     right: 1,
//     variants: [
//       'вариант 1',
//       'вариант 2',
//       'вариант 3'
//     ]
//   },
//   {
//     text: 'вопрос 3?',
//     right: 2,
//     variants: [
//       'вариант 1',
//       'вариант 2',
//       'вариант 3'
//     ]
//   },
// ];


// questions.forEach((question, index) => {
//   let questionDiv = document.createElement('div');
//   questionDiv.innerHTML = `<p>${question.text}</p>`;

//   question.variants.forEach((variant, variantIndex) => {
//     let label = document.createElement('label');
//     let input = document.createElement('input');
//     input.type = 'radio';
//     input.name = `question${index}`;
//     input.value = variantIndex;
//     label.appendChild(input);
//     label.appendChild(document.createTextNode(` ${variant}`));
//     questionDiv.appendChild(label);
//   });

//   testContainer.appendChild(questionDiv);
// });

// checkButton.addEventListener('click', checkAnswers);

// function checkAnswers() {
//   let questionDivs = document.querySelectorAll('#test > div');
  
//   questionDivs.forEach((questionDiv, questionIndex) => {
//     let selectedOption = questionDiv.querySelector('input[type="radio"]:checked');
//     if (!selectedOption) return; 

//     let isRight = parseInt(selectedOption.value) === questions[questionIndex].right;
//     highlightAnswer(questionDiv, isRight);
//   });
// }

// function highlightAnswer(questionDiv, isRight) {
//   questionDiv.classList.remove('right', 'wrong');
//   questionDiv.classList.add(isRight ? 'right' : 'wrong');
// }

// крестики нолики
// let cells = document.querySelectorAll('#field td');
// start(cells);

// function isVictory(cells) {
//     let combs = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];

//     for (let comb of combs) {
//         if (
//             cells[comb[0]].textContent == cells[comb[1]].textContent &&
//             cells[comb[1]].textContent == cells[comb[2]].textContent &&
//             cells[comb[0]].textContent != ''
//         ) {
//             return cells[comb[0]].textContent; 
//         }
//     }

//     return false;
// }

// function start(cells) {
//     let i = 0;

//     for (let cell of cells) {
//         cell.addEventListener('click', function step() {
//             this.textContent = ['X', 'O'][i % 2];
//             this.removeEventListener('click', step);

//             let winner = isVictory(cells);
//             if (winner) {
//                 if (winner === 'X') {
//                     alert('Выиграл игрок номер 1 (X)');
//                 } else {
//                     alert('Выиграл игрок номер 2 (O)');
//                 }
//             } else if (i == 8) {
//                 alert('Ничья');
//             }

//             i++;
//         });
//     }
// }



// Игра смена цветов
// function getRandomElement(array) {
//   const randomIndex = Math.floor(Math.random() * array.length);
//   return array[randomIndex];
// }

// let rows = 3;
// let cols = 3;

// let colors = ['red', 'green', 'blue'];

// let field = document.getElementById('field');
// for (let i = 0; i < rows; i++) {
//   let row = field.insertRow();
//   for (let j = 0; j < cols; j++) {
//     let cell = row.insertCell();
//     let randomColor = getRandomElement(colors);
//     cell.classList.add(randomColor);
//   }
// }

// function getNextElement(array, currentElement) {
//   const currentIndex = array.indexOf(currentElement);
//   const nextIndex = (currentIndex + 1) % array.length;
//   return array[nextIndex];
// }


// function handleClick() {
//   let currentColor = this.className; 
//   let nextColor = getNextElement(colors, currentColor); 

//   this.classList.remove(currentColor); 
//   this.classList.add(nextColor); 
// }


// let cells = document.querySelectorAll('#field td');
// cells.forEach(cell => {
//   cell.addEventListener('click', handleClick);
// });
// function checkVictory(cells) {
 
//   const firstCellClass = cells[0].className;

//   for (let cell of cells) {
//     if (cell.className !== firstCellClass) {
//       return false; 
//     }
//   }

//   return true; 
// }

// function handleClick() {
//   let currentColor = this.className; 
//   let nextColor = getNextElement(colors, currentColor); 

//   this.classList.remove(currentColor); 
//   this.classList.add(nextColor); 

//   if (checkVictory(cells)) {
//     alert('Победа!');
//   }
// }
// let clickCount = 0; 

// let clickCountElement = document.createElement('div');
// clickCountElement.textContent = `Количество кликов: ${clickCount}`;
// document.body.insertBefore(clickCountElement, field);


// function handleClick() {
//   let currentColor = this.className; 
//   let nextColor = getNextElement(colors, currentColor); 

//   this.classList.remove(currentColor); 
//   this.classList.add(nextColor); 

//   clickCount++; 
//   clickCountElement.textContent = `Количество кликов: ${clickCount}`; 

//   if (checkVictory(cells)) {
//     alert(`Победа! Количество кликов: ${clickCount}`);
//   }
// }


// Календарь
			

// let calendar = document.querySelector('#calendar');
// let body = calendar.querySelector('.body');
// let prev = calendar.querySelector('.prev');
// let next = calendar.querySelector('.next');

// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth();

// let monthNames = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

// draw(body, year, month);

// function draw(body, year, month) {
//     let arr = range(getLastDay(year, month));

//     let firstWeekDay = getFirstWeekDay(year, month);
//     let lastWeekDay = getLastWeekDay(year, month);

//     let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
//     createTable(body, nums);
//     updateInfo(month, year);

//     function updateInfo(month, year) {
//         let infoElement = document.querySelector('.info');
//         infoElement.textContent = `${monthNames[month]} ${year}`;
//     }
// }
// function createTable(parent, arr) {
//   parent.textContent = '';
//   let cells = [];

//   for (let sub of arr) {
//     let tr = document.createElement('tr');

//     for (let num of sub) {
//       let td = document.createElement('td');
//       td.textContent = num;
//       tr.appendChild(td);

//       cells.push(td);
//     }

//     parent.appendChild(tr);
//   }

//   return cells;
// }

// function normalize(arr, left, right) {
//   for (let i = 0; i < left; i++) {
//     arr.unshift('');
//   }
//   for (var i = 0; i < right; i++) {
//     arr.push('');
//   }

//   return arr;
// }

// function getFirstWeekDay(year, month) {
//   let date = new Date(year, month, 1);
//   let num  = date.getDay();

//   if (num === 0) {
//     return 6;
//   } else {
//     return num - 1;
//   }
// }

// function getLastWeekDay(year, month) {
//   let date = new Date(year, month + 1, 0);
//   let num  = date.getDay();

//   return num === 0 ? 6 : num - 1;
// }

// function getLastDay(year, month) {
//   let date = new Date(year, month + 1, 0);
//   return date.getDate();
// }

// function range(count) {
//   let arr = [];

//   for (let i = 1; i <= count; i++) {
//     arr.push(i);
//   }

//   return arr;
// }

// function chunk(arr, n) {
//   let result = [];
//   let count = Math.ceil(arr.length / n);

//   for (let i = 0; i < count; i++) {
//     let elems = arr.splice(0, n);
//     result.push(elems);
//   }

//   return result;
// }

// function getNextYear(currentYear, currentMonth) {
//   return currentMonth === 11 ? currentYear + 1 : currentYear;
// }

// function getNextMonth(currentMonth) {
//   return currentMonth === 11 ? 0 : currentMonth + 1;
// }

// function getPrevYear(currentYear, currentMonth) {
//   return currentMonth === 0 ? currentYear - 1 : currentYear;
// }

// function getPrevMonth(currentMonth) {
//   return currentMonth === 0 ? 11 : currentMonth - 1;
// }

// function updateInfo(month, year) {
//   let infoElement = document.querySelector('.info');
//   infoElement.textContent = `${monthNames[month]} ${year}`;
// }

// next.addEventListener('click', function () {
//   year = getNextYear(year, month);
//   month = getNextMonth(month);
//   draw(body, year, month);
// });

// prev.addEventListener('click', function () {
//   year = getPrevYear(year, month);
//   month = getPrevMonth(month);
//   draw(body, year, month);
// });


