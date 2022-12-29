let menuSection = () => {
    let sectionMenu = document.createElement('div')
    sectionMenu.id = "section-two";
    sectionMenu.className = "menu-container"
    let menuItem1 = document.createElement('div')
    menuItem1.className = "menu-item"
    let menuItem2 = document.createElement('div')
    menuItem2.className = "menu-item"
    let menuItem3 = document.createElement('div')
    menuItem3.className = "menu-item"
    let menuItem4 = document.createElement('div')
    menuItem4.className = "menu-item"
    let menuItem5 = document.createElement('div')
    menuItem5.className = "menu-item"
    let menuItem6 = document.createElement('div')
    menuItem6.className = "menu-item"
    let menuItem1Image = document.createElement('div')
    menuItem1Image.className = "menu-image"
    menuItem1Image.style.background = "url(../src/img/ikuradon.png) no-repeat"
    menuItem1Image.style.backgroundSize = "contain"
    let menuItem2Image = document.createElement('div')
    menuItem2Image.className = "menu-image"
    menuItem2Image.style.background = "url(../src/img/butadon.png) no-repeat"
    menuItem2Image.style.backgroundSize = "contain"
    let menuItem3Image = document.createElement('div')
    menuItem3Image.className = "menu-image"
    menuItem3Image.style.background = "url(../src/img/katsudon.png) no-repeat"
    menuItem3Image.style.backgroundSize = "contain"
    let menuItem4Image = document.createElement('div')
    menuItem4Image.className = "menu-image"
    menuItem4Image.style.background = "url(../src/img/gyudon.png) no-repeat"
    menuItem4Image.style.backgroundSize = "contain"
    let menuItem5Image = document.createElement('div')
    menuItem5Image.className = "menu-image"
    menuItem5Image.style.background = "url(../src/img/oyakodon.png) no-repeat"
    menuItem5Image.style.backgroundSize = "contain"
    let menuItem6Image = document.createElement('div')
    menuItem6Image.className = "menu-image"
    menuItem6Image.style.background = "url(../src/img/tendon.png) no-repeat"
    menuItem6Image.style.backgroundSize = "contain"

    menuItem1.appendChild(menuItem1Image);
    menuItem2.appendChild(menuItem2Image);
    menuItem3.appendChild(menuItem3Image);
    menuItem4.appendChild(menuItem4Image);
    menuItem5.appendChild(menuItem5Image);
    menuItem6.appendChild(menuItem6Image);
    sectionMenu.appendChild(menuItem1)
    sectionMenu.appendChild(menuItem2)
    sectionMenu.appendChild(menuItem3)
    sectionMenu.appendChild(menuItem4)
    sectionMenu.appendChild(menuItem5)
    sectionMenu.appendChild(menuItem6)

    let sectionOne = document.getElementsByClassName('section-one')[0];
    sectionOne.insertAdjacentElement("afterend", sectionMenu);
}

export {menuSection}