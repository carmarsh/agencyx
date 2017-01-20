(function () {

  console.log("seaf fired");

  //set up variables for all the images, the headline, the subtext, the main content, and an empty
  //variable called applied Class

var images = document.querySelectorAll(".image-holder"),
    headline = document.querySelector(".heading");

var  maincopyBox = document.querySelector(".main-copy");

var subtext = maincopyBox.querySelector("h2"),

maincontent = maincopyBox.querySelector("p");

var appliedClass;

// function changeElements(e) {
// var currentSeason = e.currentTarget.id;;
// subtext.innerHTML = dynamicContent[currentSeason].headline;
// maincontent.innerHTML = dynamicContent[currentSeason].text;
// };

function changeElements() {
  subtext.firstChild.nodeValue = dynamicContent[this.id].headline;
  maincontent.firstChild.nodeValue = dynamicContent[this.id].text;

  subtext.classList.remove(appliedClass);
  headline.classList.remove(appliedClass);
  //change color
  subtext.classList.add(this.id);
  headline.classList.add(this.id);

  appliedClass= this.id;

}


[].forEach.call(images, function(image) {
  image.addEventListener('click', changeElements, false)
});


//load content when page loads
subtext.firstChild.nodeValue = dynamicContent['spring'].headline;
maincontent.firstChild.nodeValue = dynamicContent['spring'].text;
headline.classList.add('spring');


})();
