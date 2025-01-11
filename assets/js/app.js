
var menu_layout = document.querySelectorAll('.menu_layout')

menu_layout.forEach((item) => {
    var menuItems = item.querySelectorAll('nav li');
    var indicator = item.querySelector('.indicator')

    const widthPercentage = 100 / menuItems.length;
    indicator.style.width = `${widthPercentage}%`;
    
    menuItems.forEach((item, index) => {

        item.addEventListener('mouseover', () => {
            let width = indicator.offsetWidth
            indicator.style.transform = `translate(calc(${width}px * ${index}))`;
            // Only add the class if it's not already active
            
            // Remove 'active' class from all items
            menuItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Add 'active' class only to the clicked item if it's not already active
            if (!item.classList.contains('active')) {
                item.classList.add('active');
            }
        })
    })

    
})