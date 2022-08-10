const addList = document.querySelector(".addList");
const toDoList = document.querySelector("ul");

const generate = list => {
    const html = 
    `
    <li>
               <span>${list}</span>
               <i class="far fa-trash-alt delete"></i>
                
    </li>
    `;
    toDoList.innerHTML+=html;
}


addList.addEventListener("submit",e => {

    e.preventDefault();
    const list = addList.add.value.trim();

    if(list.length > 0){

        generate(list);
        addList.reset();
    }

})

toDoList.addEventListener("click" , e => {
    if(e.target.classList.contains("delete")){
        
        e.target.parentElement.remove();
    }
})