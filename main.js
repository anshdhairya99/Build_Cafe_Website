const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
console.log(thisYear);
year.setAttribute("datetime", thisYear)
console.log(thisYear);
year.textContent = thisYear