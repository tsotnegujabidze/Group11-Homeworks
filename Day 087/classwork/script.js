function change(){
    let text2 = document.getElementsByClassName('text2')
    let text3 = document.getElementsByTagName('p')
    
    text2[0].innerHTML = 'this is text 2 changed'
    text3[0].innerHTML = 'this is text 3 changed'
    
    text3.parentElement.innerHTML = "this is text3's parent changed"
    }