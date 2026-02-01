// app.js
let currentScore = 0;
let questionCount = 0;

async function submitAnswer() {
    const response = document.getElementById('user-response').value;
    const timeLeft = parseInt(document.getElementById('timer-seconds').innerText);

    // Call C++ Logic via WebAssembly or API to calculate local score
    const metrics = {
        length: response.length,
        timeTaken: 60 - timeLeft,
        difficulty: currentDifficultyLevel
    };

    const evaluation = await calculateMetricsInCpp(metrics); // High-speed processing
    
    if (evaluation.shouldTerminate) {
        showFinalReport();
    } else {
        updateDifficulty(evaluation.newDifficulty);
        fetchNextQuestion();
    }
}