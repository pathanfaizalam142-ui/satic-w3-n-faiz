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
{id:1,name:"Faiz",email:"Ali@gmail.com",revenue:79000,status:"active"},
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

// DATA (same like Day 4)
const d5Data = [
  { name: "Ali", status: "active" ,revenue:520000},
  { name: "faiz", status: "inactive",revenue:48000 },
  { name: "Ahmed", status: "active",revenue:72000 },
  { name: "yash", status: "active",revenue:59000 },

  { name: "rahul", status: "inactive",revenue:46000},

  { name: "kamal", status: "inactive",revenue:89000 },
  { name: "rahim", status: "active",revenue:49000 },
  { name: "sayedh", status: "active",revenue:88000 },

  { name: "sahil;", status: "inactive",revenue:96000},

];

function d5Render(data) {
  const body = document.getElementById("d5-body");
  body.innerHTML = "";

  data.forEach((item, index) => {
    body.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td>${item.status}</td>
        <td>₹${item.revenue}</td>
      </tr>
    `;
  });
}

// FILTER LOGIC
document.getElementById("d5-filter").addEventListener("change", function () {
  const val = this.value;

  if (val === "all") {
    d5Render(d5Data);
  } else {
    const filtered = d5Data.filter(d => d.status === val);
    d5Render(filtered);
  }
});

// THEME TOGGLE
const btn = document.getElementById("d5-theme-btn");

btn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");

  if (current === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("d5-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("d5-theme", "dark");
  }
});

// LOAD SAVED THEME
(function () {
  const saved = localStorage.getItem("d5-theme");

  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
  }
})();

// INITIAL LOAD
d5Render(d5Data);

const navButtons = document.querySelectorAll("#bottom-nav-mobile button");

navButtons.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    
    navButtons.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");

  });
});