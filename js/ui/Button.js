
import { navEvent, sectEvent } from "../shared/Event.js";
import { navECtx } from "../shared/Context.js";

class Link extends HTMLAnchorElement {
    constructor(){
        super();
        this.addEventListener("click", function(e){

            e.preventDefault();
            // triger event nav
            document.dispatchEvent(navEvent);
            this.classList.toggle("active");
            // Mengambil Id section dan memperbarui context
            const sectionId = this.querySelector("span[slot='key']").textContent;
            navECtx.setState(sectionId);
            // triger event section
            document.dispatchEvent(sectEvent);

        });
    }
}

class SideBarButton extends HTMLButtonElement {
    constructor(){
        super();
        this.addEventListener("click", ()=>{
            this.parentElement.parentElement.classList.toggle("show")
        });
    }
}

export { Link, SideBarButton };