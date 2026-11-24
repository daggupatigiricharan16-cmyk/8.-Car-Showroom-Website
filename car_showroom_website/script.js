const cars = {
  Terra:{type:"SUV",price:"₹18.9 lakh",power:"195 bhp",range:"—",fuel:"Petrol / Diesel",transmission:"8-speed Automatic",seats:"5",drive:"Front-wheel drive",features:"Panoramic roof, 360° camera, adaptive cruise control",description:"A confident, versatile SUV created for everyday life and spontaneous escapes."},
  Grand:{type:"Sedan",price:"₹22.5 lakh",power:"210 bhp",range:"—",fuel:"Petrol",transmission:"8-speed Automatic",seats:"5",drive:"Front-wheel drive",features:"Ventilated seats, premium audio, head-up display",description:"A refined sedan that pairs a serene cabin with effortless performance."},
  Volt:{type:"Electric",price:"₹26.4 lakh",power:"245 bhp",range:"480 km",fuel:"Electric",transmission:"Single-speed",seats:"5",drive:"Rear-wheel drive",features:"Fast charging, regenerative braking, connected cockpit",description:"All-electric performance with a smooth, quiet drive and practical range."},
  Velocity:{type:"Sport",price:"₹34.8 lakh",power:"310 bhp",range:"—",fuel:"Petrol",transmission:"8-speed Dual Clutch",seats:"2+2",drive:"Rear-wheel drive",features:"Sport suspension, launch control, performance seats",description:"A focused sports coupe engineered to make every open road memorable."},
  Summit:{type:"SUV",price:"₹29.2 lakh",power:"225 bhp",range:"—",fuel:"Diesel",transmission:"8-speed Automatic",seats:"7",drive:"All-wheel drive",features:"Three-zone climate, panoramic roof, terrain modes",description:"A spacious seven-seat SUV with comfort and capability for the whole crew."},
  Eon:{type:"Electric",price:"₹21.7 lakh",power:"180 bhp",range:"410 km",fuel:"Electric",transmission:"Single-speed",seats:"5",drive:"Front-wheel drive",features:"One-pedal mode, wireless charging, smart navigation",description:"A compact electric crossover with clever technology for the urban rhythm."}
};
const grid=document.querySelector("#car-grid");
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");
  grid.querySelectorAll(".car-card").forEach(card=>card.hidden=btn.dataset.filter!=="all"&&card.dataset.type!==btn.dataset.filter);
}));
const dialog=document.querySelector("#car-dialog");
document.querySelectorAll(".details-btn").forEach(btn=>btn.addEventListener("click",()=>{
  const c=cars[btn.dataset.car];document.querySelector("#dialog-content").innerHTML=`<p class="eyebrow dark">${c.type.toUpperCase()} · AURORA COLLECTION</p><h2>${btn.dataset.car}</h2><p>${c.description}</p><dl><div><dt>Starting price</dt><dd>${c.price}</dd></div><div><dt>Power</dt><dd>${c.power}</dd></div><div><dt>Driving range</dt><dd>${c.range}</dd></div><div><dt>Powertrain</dt><dd>${c.fuel}</dd></div><div><dt>Transmission</dt><dd>${c.transmission}</dd></div><div><dt>Seating</dt><dd>${c.seats}</dd></div><div><dt>Drive</dt><dd>${c.drive}</dd></div><div><dt>Highlights</dt><dd>${c.features}</dd></div></dl><a class="button button-dark" href="#test-drive" onclick="document.querySelector('#car-dialog').close();document.querySelector('[name=model]').value='${btn.dataset.car}'">Book this model ↗</a>`;
  dialog.showModal();
}));
document.querySelector(".dialog-close").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});
const one=document.querySelector("#car-one"),two=document.querySelector("#car-two");
function compare(){const a=cars[one.value],b=cars[two.value];document.querySelector("#head-one").textContent=one.value;document.querySelector("#head-two").textContent=two.value;const rows=[["Starting price","price"],["Body style","type"],["Power","power"],["Driving range","range"],["Powertrain","fuel"],["Transmission","transmission"],["Seating","seats"],["Drive type","drive"],["Key features","features"]];document.querySelector("#compare-body").innerHTML=rows.map(([label,key])=>`<tr><td>${label}</td><td>${a[key]}</td><td>${b[key]}</td></tr>`).join("");}
one.addEventListener("change",compare);two.addEventListener("change",compare);compare();
const dateInput=document.querySelector('[name=date]');dateInput.min=new Date().toISOString().split("T")[0];
document.querySelector("#booking-form").addEventListener("submit",e=>{e.preventDefault();const data=new FormData(e.currentTarget);document.querySelector("#form-message").textContent=`Thank you, ${data.get("name")}! Your ${data.get("model")} test-drive request is ready. This demo does not send it to a showroom.`;e.currentTarget.reset();dateInput.min=new Date().toISOString().split("T")[0];});
document.querySelector(".menu-toggle").addEventListener("click",()=>{const nav=document.querySelector("#nav");nav.classList.toggle("open");document.querySelector(".menu-toggle").setAttribute("aria-expanded",nav.classList.contains("open"));});
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector("#nav").classList.remove("open")));
