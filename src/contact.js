let contactSection = () => {
    let sectionTwo = document.createElement('div')
    sectionTwo.id = "section-two";
    sectionTwo.className = "section-two-contact"
    let contactDetails = document.createElement('h4')
    contactDetails.className = "section-two-text"
    contactDetails.innerHTML = "115 Mayflower Avenue<br>33432 Lexington<br>Utah"
    let contactMap = document.createElement('img')
    contactMap.className = "map-image"
    contactMap.src = "../src/map.PNG"
    let sectionOne = document.getElementsByClassName('section-one')[0];
    sectionTwo.appendChild(contactDetails);
    sectionTwo.appendChild(contactMap);
    sectionOne.insertAdjacentElement("afterend", sectionTwo);
}

export {contactSection}