// let background = document.getElementsByClassName("background")
// let massive = Array.from(background)

// for (let i = 0; i < massive.length; i++) {
//     const element = massive[i];
//     element.style.backgroundColor = 'red'
// }

let tableArr = document.querySelector('table');

for (let i = 0; i < tableArr.rows.length; i++) {
  let row = tableArr.rows[i];
  row.cells[i].style.backgroundColor = 'red';
}
