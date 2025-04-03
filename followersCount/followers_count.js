let count = 0; // Initialize count

function increaseCount() {
    count++; // Increment the count
    displayCount(); // Display updated count
    checkCountValue(); // Check if count is a multiple of 5
}

function displayCount() {
    document.getElementById('countDisplay').innerText = count; // Update count in UI
}

function checkCountValue() {
    if (count % 5 === 0) { // Check if count is a multiple of 5
        alert(`Your Instagram post gained ${count} followers! Keep going!`);
    }
}
