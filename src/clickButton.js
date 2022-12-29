import { contactSection } from "./contact";
import {menuSection} from "./menu.js"
import {homeSection} from "./home.js"

export default function btnClicked(someButton) {
    var sectionTwo = document.getElementById("section-two");
    if (sectionTwo != null) {
    sectionTwo.parentNode.removeChild(sectionTwo);
    }
    if (someButton == "contact") {
        contactSection();
    }
    else if (someButton == "menu") {
        menuSection();
    }
    else if (someButton == "home") {
        homeSection();
    }
    console.log(someButton);
}