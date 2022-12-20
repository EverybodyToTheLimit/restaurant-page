import btnClicked from "./clickButton";

function buildHeader() {
    var header = document.createElement('div');
    header.className = "header";
    var logo = document.createElement('div');
    logo.classList = "header-logo";
    var links = document.createElement('div');
    links.classList = "header-links";
    var home = document.createElement('a');
    home.textContent = "Home";
    var menu = document.createElement('a');
    menu.textContent = "Menu";
    var contact = document.createElement('a');
    contact.textContent = "Contact";
    var footer = document.createElement('div');
    var content = document.getElementById('content');
    footer.className = "footer";
    footer.innerHTML = "<p>Copyright <a href=\"https://github.com/EverybodyToTheLimit/\">@EverybodyToTheLimit</a><br><br><a href=\"https://www.freepik.com/free-vector/cute-shiba-inu-eating-ramen-noodle-cartoon-vector-illustration-animal-food-concept-isolated-vector-flat-cartoon-style_10336158.htm#query=ramen&position=7&from_view=search&track=sph\">Image by catalyststuff</a> on Freepik</p>";
    var sectionOne = document.createElement('div');
    sectionOne.className = "section-one";
    sectionOne.innerHTML = "<div class=\"section-one-text\"><h5>Welcome to Donburi Cafe</h5><p class=\"section-one-no-emphasis\">Traditional Techniques - Faithful Presentation - Utterly Japanese</p><p class=\"section-one-no-emphasis\">Discover something new from the world's most accomplished cuisine.</p></div><div class=\"section-one-image\"></div>"

    content.insertBefore(header, content.firstChild);
    content.appendChild(sectionOne);
    content.appendChild(footer);
    header.appendChild(logo);
    header.appendChild(links);
    links.appendChild(home);
    links.appendChild(menu);
    links.appendChild(contact);
    home.addEventListener('click', () => {btnClicked("home")})
    menu.addEventListener('click', () => {btnClicked("menu")})
    contact.addEventListener('click', () => {btnClicked("contact")})
    return true;
    }

export {buildHeader}

