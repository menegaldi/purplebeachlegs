function setDay() {
  const d = new Date();
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(d);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);


  const dateEl = document.getElementById('date')
  dateEl.innerText = `${da}.${mo}.${ye}`;
}

function setTime() {
  const d = new Date();
  const time = d.toLocaleTimeString();
  const timeEl = document.getElementById('time')

  timeEl.innerText = time
}

function startTimer () {
  setInterval(setTime,1000)
}

setDay()
startTimer()

