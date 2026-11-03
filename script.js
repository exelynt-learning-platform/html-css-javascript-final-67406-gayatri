// Chai Stall Bill Counter

const totalAmountElement = document.getElementById("total-amount");
const chaiButtons = document.querySelectorAll(".chai-button");
const resetButton = document.getElementById("reset-button");
const counterCard = document.querySelector(".counter-card");
const goalMessage = document.getElementById("goal-message");
const progressBar = document.getElementById("progress-bar");

const DAILY_GOAL = 500;

let totalAmount = 0;

// Update the displayed total and goal status
function updateBill() {
    totalAmountElement.textContent = totalAmount;

    // Calculate progress towards the daily goal
    const progress = Math.min((totalAmount / DAILY_GOAL) * 100, 100);
    progressBar.style.width = `${progress}%`;

    // Add or remove the goal class
    if (totalAmount >= DAILY_GOAL) {
        counterCard.classList.add("goal");
        goalMessage.textContent = "🎉 Congratulations! Daily goal reached!";
    } else {
        counterCard.classList.remove("goal");
        goalMessage.textContent = `Keep selling! ₹${DAILY_GOAL - totalAmount} more to reach your goal.`;
    }
}

// Add the selected chai price to the total
chaiButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const amount = Number(button.dataset.amount);

        if (!Number.isFinite(amount) || amount <= 0) {
            return;
        }

        totalAmount += amount;
        updateBill();
    });
});

// Reset the total and remove the goal styling
resetButton.addEventListener("click", function() {
    totalAmount = 0;
    updateBill();
});

// Display the initial bill
updateBill();
