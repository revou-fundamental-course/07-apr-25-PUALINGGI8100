
import { formCtx } from "../shared/Context.js";
import { contactFormEvent } from "../shared/Event.js";

// ini form yang tidak bisa di reuse
class ContactForm extends HTMLFormElement {
    constructor(){
        super();
        this.addEventListener("submit", (e)=>{
            e.preventDefault();
            const formData = new FormData(this);
            // parsing FormDataIterator ke object JSON, lalu menyimpan data kedalam konteks
            const data = Object.fromEntries(formData.entries());
            formCtx.setState(data);
            // trigger Event contact form
            document.dispatchEvent(contactFormEvent);
            this.reset();
        })
    }
}

export { ContactForm }