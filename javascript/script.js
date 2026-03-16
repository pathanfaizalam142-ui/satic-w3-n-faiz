const ctx = document.getElementById('chart');

new Chart(ctx,{

type:'line',

data:{

labels:['Jan','Feb','Mar','Apr','May','Jun'],

datasets:[{

label:'Revenue',

data:[1200,1900,800,1500,2200,3000],

borderColor:'#4f46e5',

fill:false,

tension:0.3

}]

},

options:{
responsive:true
}

});