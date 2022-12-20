function buildHeader() {
    var header = document.createElement('div');
    header.className = "header";
    var logo = document.createElement('div');
    logo.classList = "header-logo";
    var links = document.createElement('div');
    links.classList = "header-links";
    var home = document.createElement('a');
    home.textContent = "Home";
    home.addEventListener('click', btnClicked("home"))
    var menu = document.createElement('a');
    menu.textContent = "Menu";
    menu.addEventListener('click', btnClicked("menu"))
    var contact = document.createElement('a');
    contact.textContent = "Contact";
    contact.addEventListener('click', btnClicked("contact"))
    var footer = document.createElement('div');
    var content = document.getElementById('content');
    footer.className = "footer";
    footer.innerHTML = "<p>Copyright <a href=\"https://github.com/EverybodyToTheLimit/\">@EverybodyToTheLimit</a><br><br><a href=\"https://www.freepik.com/free-vector/cute-shiba-inu-eating-ramen-noodle-cartoon-vector-illustration-animal-food-concept-isolated-vector-flat-cartoon-style_10336158.htm#query=ramen&position=7&from_view=search&track=sph\">Image by catalyststuff</a> on Freepik</p>";
    content.insertBefore(header, content.firstChild);
    content.appendChild(footer);
    header.appendChild(logo);
    header.appendChild(links);
    links.appendChild(home);
    links.appendChild(menu);
    links.appendChild(contact);
    return true;
    }

export {buildHeader}

