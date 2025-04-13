import { Link, SideBarButton } from "./ui/Button.js";
import { navECtx } from "./shared/Context.js";

customElements.define("nav-link", Link, { extends: "a" });
customElements.define("side-button", SideBarButton, { extends:"button" });

document.addEventListener("navEvent", ()=>{
    // Reset active link O(n)
    document.querySelectorAll("a[is='nav-link']").forEach(navItem => {
        if(navItem.classList.contains("active")){
            navItem.classList.remove("active");
            return;
        }
    });
});

document.addEventListener("sectEvent", ()=>{
    const activeSectionId = navECtx.getState();
    // Reset active section O(n)
    document.querySelectorAll("section[name='controlled-section']").forEach(section => {
        try { section.classList.remove("active") }
        catch(err){ /** NEVER */ }
    });
    // set active section O(1)
    document.querySelector(`section[id='${activeSectionId}']`).classList.toggle("active");
});