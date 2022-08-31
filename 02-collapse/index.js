var button = document.querySelector('.collapsible__button');
var content = document.querySelector('.collapsible__content');
var hiddenButton = document.querySelector('.collapsible__action--hidden');
var visibleButton = document.querySelector('.collapsible__action--visible');
function buttonHiddenText(){
    hiddenButton.style.display = 'none';
    visibleButton.style.display = 'block';
    content.style.display = 'block';
}
function buttonVisibleText(){
    content.style.display = 'none';
    visibleButton.style.display = 'none';
    hiddenButton.style.display = 'block';
}
buttonHiddenText();
button.addEventListener('click', function(){
    if (hiddenButton.style.display === 'none'){
        buttonVisibleText();
    } else {
        buttonHiddenText();
    }  
})


   
    