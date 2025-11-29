function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please choose an answer.";
        return;
    }

    const userAnswer = selectedOption.value;

    // Compare answers and give feedback
    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to submit button
document
    .getElementById("submit-answer")
    .addEventListener("click", checkAnswer);
