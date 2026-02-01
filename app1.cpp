// engine.cpp
#include <iostream>
#include <vector>

struct InterviewMetrics {
    int wordCount;
    int secondsTaken;
    int currentDifficulty;
};

float calculateQuestionScore(InterviewMetrics m) {
    float accuracyWeight = 0.6;
    float timePenalty = (m.secondsTaken > 45) ? 0.2 : 0.0;
    
    // Depth calculation
    float depthScore = (m.wordCount > 100) ? 1.0 : (m.wordCount / 100.0);
    
    float finalScore = (depthScore * accuracyWeight) - timePenalty;
    return (finalScore < 0) ? 0 : finalScore;
}