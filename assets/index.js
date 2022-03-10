let questions = document.querySelectorAll(".question-container");
questions.forEach((question) => {
	let button = question.querySelector(".toggle-answer-button");

	button.addEventListener("click", () => {
		questions.forEach((questionCompare) => {
			if (questionCompare != question) {
				questionCompare.classList.remove("show-answer");

				questionCompare.querySelector(
					".toggle-answer-button"
				).textContent = "add";
			}
		});

		question.classList.toggle("show-answer");

		if (button.textContent.trim() == "add") {
			button.textContent = "remove";
		} else {
			button.textContent = "add";
		}
	});
});
