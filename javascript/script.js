const mockData = [
  {id:"ID001", name:"John Doe", email:"john@gmail.com", revenue:4200, status:"Active", lastLogin:"2024-03-12"},
  {id:"ID002", name:"Aman Khan", email:"aman@gmail.com", revenue:2500, status:"Pending", lastLogin:"2024-03-10"},
  {id:"ID003", name:"Riya Patel", email:"riya@gmail.com", revenue:5100, status:"Active", lastLogin:"2024-03-14"},
  {id:"ID004", name:"Sara Ali", email:"sara@gmail.com", revenue:1800, status:"Churned", lastLogin:"2024-03-08"},
  {id:"ID005", name:"Rahul Shah", email:"rahul@gmail.com", revenue:3200, status:"Active", lastLogin:"2024-03-11"},
  {id:"ID006", name:"Zaid Khan", email:"zaid@gmail.com", revenue:2700, status:"Pending", lastLogin:"2024-03-09"},
  {id:"ID007", name:"Meera Joshi", email:"meera@gmail.com", revenue:6000, status:"Active", lastLogin:"2024-03-15"},
  {id:"ID008", name:"Arjun Patel", email:"arjun@gmail.com", revenue:1500, status:"Churned", lastLogin:"2024-03-07"},
];

const table = document.getElementById("dataTable");

mockData.forEach(data => {

  let statusClass = "";

  if(data.status === "Active") statusClass = "active";
  if(data.status === "Pending") statusClass = "pending";
  if(data.status === "Churned") statusClass = "churned";

  table.innerHTML += `
    <tr>
      <td>${data.id}</td>
      <td>${data.name}</td>
      <td>${data.email}</td>
      <td>$${data.revenue}</td>
      <td class="${statusClass}">${data.status}</td>
      <td>${data.lastLogin}</td>
    </tr>
  `;
});