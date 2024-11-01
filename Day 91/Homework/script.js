document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    if (isNaN(birthDate.getTime()) || birthDate > today) {
        alert('Please enter a valid date that is not in the future.');
        return;
    }

    let age = today - birthDate;
    let ageDate = new Date(age);

    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    let days = today.getDate() - birthDate.getDate();

    const totalDays = new Date(year, month, 0).getDate();
    if (days < 0) {
        days += totalDays;
        months--;
    }

    if (months < 0) {
        months += 12;
    }

    document.getElementById('result').innerHTML = `${years} years<br>${months} months<br>${days} days`;
});