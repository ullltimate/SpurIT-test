var button = document.querySelector('.collapsible__button');
var content = document.querySelector('.collapsible__content');
var hiddenButton = document.querySelector('.collapsible__action--hidden');
var visibleButton = document.querySelector('.collapsible__action--visible');
function showContent(){
    hiddenButton.style.display = 'none';
    visibleButton.style.display = 'block';
    content.animate([{opacity: 1}], {duration:500, fill:'forwards'});
}
function hideContent(){
	content.animate([{opacity: 0}], {duration:500, fill:'forwards'});
	visibleButton.style.display = 'none';
	hiddenButton.style.display = 'block';
}
showContent();
button.addEventListener('click', function(){
    if (hiddenButton.style.display === 'none'){
    	hideContent();
    } else {
    	showContent();
    }  
})


   
    