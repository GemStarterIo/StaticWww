const app = () => {

setProductMenu()

}


const setProductMenu = () => {
    const menuItems = [...document.querySelectorAll('.menu_item')]
    const slider = document.querySelector('.slider')
    menuItems?.map(item => {
        console.log(item)

        item.addEventListener('click', (e) => {
            e.preventDefault();
            const itemData = item.getAttribute('data-id')
            const itemSlide = document.getElementById(itemData)
            slider?.scrollTo(itemSlide.offsetLeft, 0)
            menuItems.map(item => {
                if(item.classList.contains("active")){
                    item.classList.remove('active')
                }
            })
            item.classList.add('active')
        })
    })
}

app()