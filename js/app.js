document.addEventListener('DOMContentLoaded', () => {

  const mainForm = document.querySelector('#form-main');
  mainForm.addEventListener('submit', handleForm);

  const deleteForm = document.querySelector('#delete');
  deleteForm.addEventListener('click', handleDeleteForm);

  const hoverEffect = document.querySelector('#main-header');
  hoverEffect.addEventListener('mouseenter', handleHoverEffect);

  const hoverEffectAgain = document.querySelector("#dance-schedule");
  hoverEffectAgain.addEventListener('mouseenter', handleHoverEffect);

  const backgroundController = document.querySelector("#colorToggle");
  backgroundController.addEventListener('click', handleColorChange);

  const dateController = document.querySelector("#show-date");
  dateController.addEventListener('click', handleDate);

});
// End of the DOM content loaded

const handleColorChange = function(event){
  var isPurple = false;
  document.body.classList.toggle("purple");
};

const handleDate = function(event){
  event.target.innerHTML = Date();
}

const handleHoverEffect = function(event) {
  event.target.style.color = "pink";

  setTimeout(function(){
    event.target.style.color = "";
  }, 500);
}


const handleForm = function (event){
  event.preventDefault();
  const newListItem = createNewDanceClass(event.target);
  const danceDisplay = document.querySelector("#dance-list");
  danceDisplay.appendChild(newListItem);
  event.target.reset();
  alert('Your lesson was added, please review it on the list');
}

const createNewDanceClass= function(newItem) {
  newListItem = document.createElement("tr");
  newListItem.classList.add('new-list-item');

  const danceName = document.createElement('td');
  danceName.textContent = newItem.danceName.value;
  newListItem.appendChild(danceName);

  const time = document.createElement('td');
  time.textContent = newItem.time.value;
  newListItem.appendChild(time);

  const duration = document.createElement('td');
  duration.textContent = newItem.duration.value;
  newListItem.appendChild(duration);

  const instructor = document.createElement('td')
  instructor.textContent = newItem.instructor.value;
  newListItem.appendChild(instructor);

  const danceCategory = document.createElement('td')
  danceCategory.textContent = newItem.danceFamily.value;
  newListItem.appendChild(danceCategory);

  // const level = document.createElement('li')
  // const allLevels = document.getElementsByName('level')
  // level.textContent = newItem.level.value;
  // newListItem.appendChild(level);


  const level = document.createElement('p')
  const allLevels = getRadioButtonValue(event.target);
  level.textContent = allLevels.value;
  newListItem.appendChild(level);


  // document.querySelector('input[name="gender"]:checked').value

  return newListItem;
}

const getRadioButtonValue = function(event) {
  const allLevels = document.getElementsByName('level')
  let selectedButton;
  for (let i = 0; i < allLevels.length; i++) {
    if (allLevels[i].checked){
      selectedButton = allLevels[i].value;
    }
  }
  return selectedButton;
}

const handleDeleteForm = function(event) {
  const danceDisplay = document.querySelector('#dance-list');
  while (danceDisplay.hasChildNodes()){
  danceDisplay.removeChild(danceDisplay.lastChild);
  alert('All your entries will be deleted');

}

const handleSelectingItems = function(event){
  let allLis = document.querySelectorAll("li");
  for (let i =0; i < allLis.length; i++){
    allLis[i].addEventListener('click', function(){
      this.style.color = "purple"
    });
  }
}







// background color changer


}
