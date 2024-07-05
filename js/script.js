document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().slice(-12, -4);
        const dayOfWeek = now.toLocaleDateString('en-GB', { weekday: 'long' });

        document.getElementById('utc-time').textContent = utcTime;
        document.getElementById('current-day').textContent = dayOfWeek;
    }

    updateTime();
    setInterval(updateTime, 1000);
});
