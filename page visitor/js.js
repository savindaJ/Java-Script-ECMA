let count = parseInt(localStorage.getItem('visitorCounter') || '0');

count++;

localStorage.setItem('visitorCounter', count);

document.getElementById('counter').innerHTML = count;