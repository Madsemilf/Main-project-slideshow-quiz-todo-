export default function Quiz() {

	let shuffledQuestions, currentQuestionIndex;
	
	const startButton = document.querySelector('.quiz__start-button');
	const questionContainerElement = document.querySelector('.quiz__container');
	const questionElement = document.querySelector('.quiz__question');
	const answerButtonsElement = document.querySelector('.quiz__answer-buttons');

	if (startButton) {
		startButton.addEventListener('click', handleStartButtonClick);
	}

	/**
	 * 
	 * 
	 * 
	 */

	function handleStartButtonClick() {
		startButton.classList.add('quiz__start-button--visible');
		shuffledQuestions = questions.sort(() => Math.random() - .5);
		currentQuestionIndex = 0;
		questionContainerElement.classList.remove('quiz__container--visible');
		setNextQuestion()
	}

	function setNextQuestion() {
		showQuestion(shuffledQuestions[currentQuestionIndex]);
	}

	/**
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

	function selectAnswer(event) {

	}
	
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
		}
	];	
}
