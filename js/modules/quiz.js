export default function Quiz() {

	let shuffledQuestions, currentQuestionIndex;
	
	const startButton = document.querySelector('.quiz__start-button');
	const nextButton = document.querySelector('.quiz__next-button')
	const questionContainerElement = document.querySelector('.quiz__container');
	const questionElement = document.querySelector('.quiz__question');
	const answerButtonsElement = document.querySelector('.quiz__answer-buttons');

	if (startButton) {
		startButton.addEventListener('click', handleStartButtonClick);
		nextButton.addEventListener('click', handleNextButtonClick);
	}

	/**
	 * 
	 * Adds display: none to start butten after it is clicked.
	 * Creates shuffled questions which are grabbed random from questions array.
	 * Removes display: none from question container and shows it in DOM.
	 * 
	 */
	function handleStartButtonClick() {
		startButton.classList.add('quiz__start-button--visible');
		shuffledQuestions = questions.sort(() => Math.random() - .5);
		currentQuestionIndex = 0;
		questionContainerElement.classList.remove('quiz__container--visible');
		setNextQuestion()
	}

	function handleNextButtonClick() {
		currentQuestionIndex++
		setNextQuestion(currentQuestionIndex);
	}

	/**
	 * Converts answer buttons to an array.
	 * Loops through answer buttons and removes them from the DOM.
	 */
	function setNextQuestion() {
		resetState();
		showQuestion(shuffledQuestions[currentQuestionIndex]);
	}

	/**
	 * 
	 * TODO: Write this code using for loop instead of while loop!
	 * 
	 * Wants to reset state after next button is clicked.
	 * Needs to loop through all b
	 * if there is a child inside the answer-button element, we want to remove it.
	 * 
	 */
	function resetState() {
		nextButton.classList.remove('quiz__next-button--visible');
		while (answerButtonsElement.firstChild) {
			answerButtonsElement.removeChild(answerButtonsElement.firstChild);
		}
	}

	/**
	 * 
	 * Checks if answer chosen is correct.
	 * Converts answer buttons to an array so we can loop through.
	 * 
	 * @param {*} event Selected answer in quiz
	 */
	function selectAnswer(event) {
		const selectedAnswerButton = event.target;
		const correctAnswer = selectedAnswerButton.dataset.correct;
		setStatusClass(document.body, correctAnswer);
		Array.from(answerButtonsElement.children).forEach(button => {
			setStatusClass(button, button.dataset.correct);
		});
	}

	function setStatusClass(element, correct) {
		clearStatusClass(element)
		if (correct) {
			element.classList.add('correct');
		} else {
			element.classList.add('wrong');
		}
	}

	function clearStatusClass(element) {
		element.classList.remove('correct');
		element.classList.remove('wrong');
	}

	/**
	 * Creates 
	 * 
	 * @param {string} question The question from question array
	 * 
	 */
	function showQuestion(question) {
		questionElement.innerText = question.question;
		question.answers.forEach(answer => {
			const answerButton = document.createElement('button');
			answerButton.innerText = answer.text;
			answerButton.classList.add('quiz__answer-button');
			if (answer.correct) {
				answerButton.dataset.correct = answer.correct;
			}
			answerButton.addEventListener('click', selectAnswer);
			answerButtonsElement.appendChild(answerButton);
		});
	}

	// function showQuestion(answer) {
	// 	const answerButton = document.createElement('button');

	// 	answerButton.className = 'quiz__answer-button';
	// 	answerButton.innerText = answer.text;

	// 	if (answer.correct) {
	// 		answerButton.dataset.correct = answer.correct;
	// 	}

	// 	answerButton.addEventListener('click', selectAnswer);
	// 	answerButtonsElement.appendChild(answerButton);
	// }

	// function renderHTML() {

	// } 
	
	const questions = [
		{ 
			question: "What is 4 * 4?",
			answers: [
				{ 
					text: "10",
					correct: false
				},
				{ 
					text: "12",
					correct: false
				},
				{ 
					text: "14",
					correct: false
				},
				{ 
					text: "16",
					correct: true
				}
			]
		},
		{ 
			question: "What does CSS stand for?",
			answers: [
				{ 
					text: "Cass Sass Sass",
					correct: false
				},
				{ 
					text: "Cascading Style Sheets ",
					correct: true
				},
				{ 
					text: "It does not stand for anything",
					correct: false
				},
				{ 
					text: "Cascading Styling sheet",
					correct: false
				}
			]
		},
		{ 
			question: "Inside which HTML element do we put the JavaScript?",
			answers: [
				{ 
					text: "<scripting>",
					correct: false
				},
				{ 
					text: "<script>",
					correct: true
				},
				{ 
					text: "<javascript>",
					correct: false
				},
				{ 
					text: "<js>",
					correct: false
				}
			]
		},
		{ 
			question: "What is the optimal Tab Size?",
			answers: [
				{ 
					text: "2",
					correct: false
				},
				{ 
					text: "3",
					correct: true
				},
			]
		},
	];	
}
