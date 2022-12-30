import bowls from "../src/img/stacked-bowls.png";

let homeSection = () => {
    let sectionTwo = document.createElement('div')
    sectionTwo.id = "section-two";
    sectionTwo.className = "section-two-home"
    let homeDetails = document.createElement('h4')
    homeDetails.className = "section-two-text"
    homeDetails.innerHTML = "Welcome to Donburi Cafe"
    let homeDetails1 = document.createElement('p')
    homeDetails1.className = "section-two-text-p"
    homeDetails1.innerHTML = "Japanese cooking can sometimes seem a little daunting, but recipes like these make whipping up a restaurant favourite a walk in the <br><br>Donburi (丼, literally translating to “bowl”) is a Japanese rice bowl dish usually made with a combination of fish, meat, vegetables or other ingredients simmered together and served over rice. Donburi is quick and easy to make, and can actually be made from almost any ingredients – including leftovers!<br><br>One of the tastiest componants of the dish has got to be the donburi sauce – with the perfect balance of sweet and umami. The ingredients of the sauce vary according to season, region, and taste – but our co-founder Ken has shared one of his favourite recipes for you to try at home.<br><br>If you dont want to make a whole donburi rice bowl, try the sauce as a dip with chicken or beef, or lightly drizzled over an omelette or rice."
    let contactMap = document.createElement('img')
    contactMap.className = "map-image"
    contactMap.src = bowls
    let sectionOne = document.getElementsByClassName('section-one')[0];
    sectionTwo.appendChild(homeDetails);
    sectionTwo.appendChild(homeDetails1);
    sectionTwo.appendChild(contactMap);
    sectionOne.insertAdjacentElement("afterend", sectionTwo);
}

export {homeSection}