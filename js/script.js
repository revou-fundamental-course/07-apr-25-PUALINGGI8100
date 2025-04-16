import { Link, SideBarButton } from "./ui/Button.js";
import { ContactForm } from "./ui/Form.js";
import { ContactDialog } from "./ui/Dialog.js";
import { Input } from "./ui/Input.js";
import { navECtx, formCtx } from "./shared/Context.js";

customElements.define("custom-input", Input, { extends: "input" });
// Sidebar Custom Ui Defenitions
customElements.define("nav-link", Link, { extends: "a" });
customElements.define("side-button", SideBarButton, { extends:"button" });
// Contact Page customs Ui Defenitions
customElements.define("contact-form", ContactForm, { extends: "form" });
customElements.define("contact-dialog", ContactDialog, { extends: "dialog" });

// handle nav Event click
document.addEventListener("navEvent", ()=>{
    // Reset active link O(n)
    document.querySelectorAll("a[is='nav-link']").forEach(navItem => {
        if(navItem.classList.contains("active")){
            navItem.classList.remove("active");
            return;
        }
    });
});

// handle section Event change
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

// handle form Event submit
document.addEventListener("contactFormEvent", ()=>{
    const formData = formCtx.getState();
    // Membuka dialog contact, ...
    ContactDialog.instance.open(
        formData.nama,
        formData.email,
        formData.pesan
    );
});
