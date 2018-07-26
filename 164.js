var firstLi = document.querySelectorAll("li");

for(i =0; i < firstLi.length; i++) {
    firstLi[i].addEventListener("mouseover" , function(){
        this.classList.add('selected');
    })
    firstLi[i].addEventListener("mouseout" , function(){
        this.classList.remove('selected');
    })
    firstLi[i].addEventListener('click' , function(){
        this.classList.toggle('done');
    })
}


// Remember that the keyword 'this' instead of an event listner
// refers to the item or the element that the event was triggered on.

// toggle의 사용이 굉장히 중요하다.

// this concept is > separation of concerns idea.
// we don't want our javascript's manipulating individual style rather
// we can use javascript to turn on parts of our css.