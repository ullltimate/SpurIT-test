var button = document.querySelector('.collapsible__button');
var content = document.querySelector('.collapsible__content');
var hiddenButton = document.querySelector('.collapsible__action--hidden');
var visibleButton = document.querySelector('.collapsible__action--visible');
hiddenButton.style.display = 'none';
visibleButton.style.display = 'block';
content.style.display = 'block';
button.addEventListener('click', function(){
    if (hiddenButton.style.display === 'none'){
        content.style.display = 'none';
        visibleButton.style.display = 'none';
        hiddenButton.style.display = 'block';
    } else {
        hiddenButton.style.display = 'none';
        visibleButton.style.display = 'block';
  		content.style.display = 'block';
   }  
})


   
    