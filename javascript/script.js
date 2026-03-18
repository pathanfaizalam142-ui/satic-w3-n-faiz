// ===== DAY 3 CHART =====

const ctx = document.getElementById('d3Chart');

new Chart(ctx, {
    type: 'bar',

    data: {
        labels: [
            'Faiz',
            'Rahul',
            'Aman',
            'Ali',
            'John',
            'Sara',
            'Karan',
            'Zoya',
            'Imran',
            'Neha'
        ],

        datasets: [{
            label: 'Revenue',
            data: [5200, 4300, 6100, 4800, 7000, 3900, 4500, 5200, 6100, 4700],

            backgroundColor: '#3b82f6',
            borderRadius: 8,
            barThickness: 18
        }]
    },

   options: {
    indexAxis: 'y',

    responsive: true,
    maintainAspectRatio: false,

    layout: {
        padding: {
            left: 10,
            right: 10
        }
    },

    plugins: {
        legend: { display: false }
    },

    scales: {
        x: {
            ticks: { color: 'white' },
            grid: { color: 'rgba(255,255,255,0.1)' }
        },
        y: {
            ticks: {
                color: 'white',
                autoSkip: false  // IMPORTANT
            },
            grid: { display: false }
        }
    }
}
});

function toggleMenu(){
    document.querySelector('.sidebar').classList.toggle('active');
}