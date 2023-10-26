



const list = document.getElementById("list");
const form = document.querySelector("form");
const input = document.querySelector("input");
const small = document.querySelector("small");

 

function addItem(text) {
  const item = document.createElement("li");

  const button = document.createElement("button");
  button.textContent = "delete";
  button.setAttribute("id", "delete");


  item.textContent = text;
  item.classList.add("item");
  item.appendChild(button)
  list.appendChild(item);
}

//   alert massage
function alert(mesage) {
  small.classList.remove("hiddin");
  small.textContent = mesage;
  setTimeout(() => {
    small.classList.add("hiddin");
  }, 3000);
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if(input.value.trim().length === 0){
    alert('Iltimos nimadir yozing')
  } else if(input.value.trim().length <= 4) {
     alert('Iltimos kamida 4ta yozing')
  } else {
      addItem(input.value)
      input.value = ''
  }
})


document.addEventListener('click', (e) => {
  if(e.target.getAttribute('id') === 'delete') {
      e.target.parentElement.remove()
  }
})