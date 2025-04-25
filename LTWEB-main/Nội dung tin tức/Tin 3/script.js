const list = document.getElementById('newsList');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
    
prev.onclick = () => list.scrollBy({ left: -300, behavior: 'smooth' });
next.onclick = () => list.scrollBy({ left: 300, behavior: 'smooth' });