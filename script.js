
function updateText(){
  let text = document.getElementById('text-input').value;
  document.getElementById('text-output').innerText = text;
  
}

/**
 * Toggle the bold class 
 */
function makeBold(elem){
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('bold');
}

/**
 * Toggle the italic class 
 */
function makeItalic(elem){
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic')
}

/**
 * Toggle the underline class
 */
function makeUnderline(elem){
    elem.classList.toggle('active');
    let FormattedText = document.getElementById('text-output');
    if (FormattedText.classList.contains('underline'))
    {
      FormattedText.classList.remove('underline');
    }
    else{
      FormattedText.classList.add('underline');
    }
    
}

/**
 * Toggle the style textAlign attribute
 */
function alignText(elem, alignType){
  
  document.getElementById('text-output').style.textAlign = alignType;
  let buttonsList = document.getElementsByClassName('align');
  for(let i = 0; i<buttonsList.length; i++){
    buttonsList[i].classList.remove('active');
  }
  elem.classList.add('active'); 
   
}