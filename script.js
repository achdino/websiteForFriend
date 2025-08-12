// Update current date
function updateDate() {
    const dateElement = document.getElementById('currentDate');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = new Date().toLocaleDateString('en-US', options);
}

// Close breaking news alert
function closeBreakingNews() {
    const breakingNews = document.getElementById('breakingNews');
    breakingNews.style.display = 'none';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateDate();
});