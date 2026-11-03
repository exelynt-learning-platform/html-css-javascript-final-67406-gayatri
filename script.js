
// Chai Stall Bill Counter

const totalAmountElement = document.getElementById("total-amount");
const itemButtons = document.querySelectorAll(".item-button");
const resetButton = document.getElementById("reset-button");
const counterCard = document.getElementById("counter-card");
const goalMessage = document.getElementById("goal-message");

// Daily sales target
const DAILY_GOAL = 200;

// Initial bill amount
let totalAmount = 0;

// Update the bill and goal status
function updateBill() {
    totalAmountElement.textContent = totalAmount;

    if (totalAmount >= DAILY_GOAL) {
        counterCard.classList.add("goal");
        goalMessage.textContent = "Congratulations! Your ₹200 daily goal has been reached!";
    } else {
        counterCard.classList.remove("goal");

        const remainingAmount = DAILY_GOAL - totalAmount;
        goalMessage.textContent = `₹${remainingAmount} more to reach your daily goal of ₹200.`;
    }
}

// Add the selected item's price
itemButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const amount = Number(button.dataset.amount);

        if (!Number.isFinite(amount) || amount <= 0) {
            return;
        }

        totalAmount += amount;
        updateBill();
    });
});

// Reset the bill
resetButton.addEventListener("click", function() {
    totalAmount = 0;

    // Update the amount and remove goal styling
    updateBill();
});

// Show initial amount
updateBill();
