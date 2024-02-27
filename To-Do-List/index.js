const input = document.querySelector('#input-box')
const list = document.querySelector('#list-container')

input.addEventListener('keyup', function(e){
    let key = e.which || e.keyCode
    if(key === 13){
        addTask()
    }
})

function addTask(){
    if(input.value === ''){
        alert('você deve digitar alguma coisa !!!')
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = input.value
        list.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "x"
        li.appendChild(span)
    }
    input.value = ''
    saveData()
}

list.addEventListener('click' , function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('check')

        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()

        saveData()
    }
}, false)

function saveData(){
    localStorage.setItem('data', list.innerHTML)
}

function showTask(){
    list.innerHTML = localStorage.getItem('data')
}
showTask()