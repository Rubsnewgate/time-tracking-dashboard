// dom elements
const trackingBtns = {
    dailyBtn: document.getElementById('daily-btn'),
    weeklyBtn: document.getElementById('weekly-btn'),
    monthlyBtn: document.getElementById('monthly-btn'),
}

// utility functions
const resetButtonStyles = () => {
    Object.values(trackingBtns).forEach((button) => {
        button.style.color = ''
    })
}

// user data
fetch('../../public/data/userData.json')
    .then(response => response.json())  // Convierte la respuesta en JSON
    .then(userData => {
        console.log(userData)

        const previousTextMap = {
            daily: 'Last Day',
            weekly: 'Last Week',
            monthly: 'Last Month',
        }

        function updateTrackingTime (timeFrame) {
            userData.forEach((item) => {
                const card = document.getElementById(`${item.title.toLowerCase()}-card`)
                if (!card) return

                const currentTimeElement = card.querySelector('.current-time')
                const previousTimeElement = card.querySelector('.previous-time')

                currentTimeElement.textContent = `${item.timeframes[timeFrame].current}hrs`

                if (currentTimeElement) {
                    currentTimeElement.textContent = `${item.timeframes[timeFrame].current}hrs`
                }

                if (previousTimeElement) {
                    previousTimeElement.textContent =
                    `${previousTextMap[timeFrame]} - ${item.timeframes[timeFrame].previous}hrs`
                }
            })
        }

        updateTrackingTime('weekly')

        trackingBtns.dailyBtn.addEventListener('click', () => {
            resetButtonStyles()
            updateTrackingTime('daily')
            trackingBtns.dailyBtn.style.color = 'white'
        })
        trackingBtns.weeklyBtn.addEventListener('click', () => {
            resetButtonStyles()
            updateTrackingTime('weekly')
            trackingBtns.weeklyBtn.style.color = 'white'
        })
        trackingBtns.monthlyBtn.addEventListener('click', () => {
            resetButtonStyles()
            updateTrackingTime('monthly')
            trackingBtns.monthlyBtn.style.color = 'white'
        })
    })
    .catch(error => console.error('Error al cargar el JSON:', error))
