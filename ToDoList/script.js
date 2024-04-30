let addingTask = document.querySelector("#input-btn");

addingTask.addEventListener('click',() => {
    let tasks = document.querySelector("#input-text");
    if(tasks.value === ""){
        alert("you have to write first");
    }else{
        console.log(tasks.value);
        createNode(tasks.value);
    }
});




function createNode(val){
    let extraNode = document.createElement('div');
    extraNode.classList.add('dispFlex');
    let parentNode = document.querySelector(".NodeAdd");
    parentNode.appendChild(extraNode);
    let node2 = document.createElement('div');
    let node3 = document.createElement('p');
    let imgAdd = new Image();
    imgAdd.src = 'imageSources/crossTick.png';
    let imageNode = document.createElement('img');
    imageNode.src = imgAdd.src;
    imageNode.classList.add('cross-image');
    node3.innerHTML = val;
    node2.appendChild(imageNode)
    node2.appendChild(node3);
    node2.classList.add("right");
    extraNode.appendChild(node2);
    let binImage = new Image();
    binImage.src = "imageSources/binImage.png";
    imageNode = document.createElement('img');
    imageNode.src = binImage.src;
    imageNode.classList.add('binImage');
    extraNode.appendChild(imageNode);
    completeTask();
    isDeleted();
}


function completeTask(){
    let toDoDone = Array.from(document.querySelectorAll('.dispFlex'));
    toDoDone.forEach(element => {
        let temp = element.querySelector('.right');
        let imageToCut = temp.querySelector("img");
        temp.addEventListener('click',() =>{
            imageToCut.src = 'imageSources/greenTick.png';
        }); 
    });
}



function isDeleted(){
    let deleteElement = Array.from(document.querySelectorAll('.binImage'));
    deleteElement.forEach(element => {
        element.addEventListener('click',() =>{
            element.parentNode.remove();
            // this.style.display = 'none';
        });
    });
}

