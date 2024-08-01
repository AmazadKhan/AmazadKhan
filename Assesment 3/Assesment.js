document.addEventListener('DOMContentLoaded', () => {
    const bookingChoice = document.getElementById('bookingChoice');
    const dateGroup = document.getElementById('dateGroup');
    const timeGroup = document.getElementById('timeGroup');
    const slotGroup = document.getElementById('slotGroup');

    bookingChoice.addEventListener('change', () => {
        const choice = bookingChoice.value;

        // Reset all groups
        timeGroup.style.display = 'none';
        slotGroup.style.display = 'none';

        // Update form fields based on choice
        if (choice === 'fullDay') {
            dateGroup.style.display = 'block';
        } else if (choice === 'halfDay') {
            dateGroup.style.display = 'block';
            slotGroup.style.display = 'block';
        } else if (choice === 'hourly') {
            dateGroup.style.display = 'block';
            timeGroup.style.display = 'block';
        }
    });
});
