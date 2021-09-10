const names=["Madina","Mumtoza","Marziya","Kamola","Madhiya"];
const list=document.querySelector('.list');
const btn=document.getElementById('btn');

btn.addEventListener('click',randomName);
function randomName(e) {
    const randomName=getRandomName();
    list.textContent=names[randomName];
}

function getRandomName() {
    return Math.floor(Math.random()*names.length);
}