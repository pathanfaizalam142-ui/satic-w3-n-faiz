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


// MOCK DATA
const d4Data = [
{id:1,name:"Faiz",email:"Ali@gmail.com",revenue:25000,status:"active"},
{id:2,name:"Aman",email:"aman@gmail.com",revenue:6200,status:"pending"},
{id:3,name:"Ali",email:"faiz@gmail.com",revenue:4500,status:"inactive"},
{id:4,name:"John",email:"john@gmail.com",revenue:7200,status:"active"},
{id:5,name:"Karan",email:"karan@gmail.com",revenue:3800,status:"pending"},
];

// FORMAT MONEY
function d4Format(num){
return "$" + num.toLocaleString();
}

// RENDER TABLE
function d4RenderTable(data){

const tbody = document.getElementById("d4-table-body");

tbody.innerHTML = "";

const rows = data.map(user => {

let statusClass = "";

if(user.status === "active"){
statusClass = "d4-active";
}
else if(user.status === "pending"){
statusClass = "d4-pending";
}
else{
statusClass = "d4-inactive";
}

return `
<tr>
<td>${user.id}</td>
<td>${user.name}</td>
<td>${user.email}</td>
<td>${d4Format(user.revenue)}</td>
<td><span class="d4-status ${statusClass}">${user.status}</span></td>
</tr>
`;

}).join("");

tbody.innerHTML = rows;

}

// INIT
d4RenderTable(d4Data);


// MOBILE SCROLL SMOOTH
const wrapper = document.querySelector(".d4-table-wrapper");

wrapper.addEventListener("touchstart", function(){
this.style.cursor = "grabbing";
});