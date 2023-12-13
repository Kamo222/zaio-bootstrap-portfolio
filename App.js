class App {
    constructor(){
        const $nav = document.getElementById("nav");
        const $navButton = document.querySelector("#nav-button");
        const $hamburgerMenu = document.querySelector(".hamburger-menu");
        const $header = document.querySelector("#header");
        const menuIsOpen = false;
        
        console.log("test");
        this.navbarToggle($nav, $hamburgerMenu, $navButton);
        this.menuHandler($navButton, $hamburgerMenu, menuIsOpen);
        this.closeMenu($hamburgerMenu);
        // this.menuToggle($hamburgerMenu);
        // this.hamMenuDisplay(menuIsOpen);
    }

    // hamMenuDisplay(menuIsOpen){
    //     if(menuIsOpen){
    //         this.$hamburgerMenu.classList.remove('d-none');
    //     } else {
    //         this.$hamburgerMenu.classList.add('d-none');
    //     }
    // }

    navbarToggle($nav, $hamburgerMenu, $navButton){
        if(window.screen.width < 390){
            $nav.classList.add("d-none");
            $navButton.classList.remove("d-none");
        } else {
            this.$nav.classList.remove("invisible");
        }
        

    }

    openMenu($hamburgerMenu){
        $hamburgerMenu.classList.remove("d-none")
    }

    closeMenu($hamburgerMenu){
        $hamburgerMenu.classList.add("d-none");
    }

    menuHandler($navButton, $hamburgerMenu, menuIsOpen){
        $navButton.addEventListener("click", () => {
            if(menuIsOpen){
                menuIsOpen = false;
                // $hamburgerMenu.classList.add("d-none");
                this.closeMenu($hamburgerMenu);
            } else {
                this.openMenu($hamburgerMenu);
                menuIsOpen = true;
                // $hamburgerMenu.classList.remove("d-none");
            }
            console.log(menuIsOpen);
        })
        
        // $navButton.addEventListener("click", () => {
        //     if(menuIsOpen){
                
        //     } else {
                
        //     }
            
        // })

        
    }

    // menuToggle($hamburgerMenu){
        
    //     if(this.menuIsOpen){
            
    //         this.$hamburgerMenu.classList.add("d-none");
    //         // $hamburgerMenu.style.display = 'none';
    //         this.menuIsOpen = false;
            
            
    //     } else {

            
    //         this.$hamburgerMenu.classList.remove("d-none");
    //         // $hamburgerMenu.style.display = 'flex';
    //         this.menuIsOpen = true;
            
            
    //     }
    // }
    
}

const app = new App();