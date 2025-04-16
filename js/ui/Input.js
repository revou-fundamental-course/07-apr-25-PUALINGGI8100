class Input extends HTMLInputElement {
    constructor(){
        super();
        this.addEventListener("input", this.#validate);
    }
    #validate(){
        if(!this.checkValidity()){
            this.nextElementSibling.innerHTML = this.validationMessage;
        }else{
            this.nextElementSibling.innerHTML = null;
        }
    }
}

export { Input }