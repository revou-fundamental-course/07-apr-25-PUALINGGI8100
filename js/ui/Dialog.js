
class ContactDialog extends HTMLDialogElement {
    #closeBtn = undefined;
    #namaHolder = undefined;
    #emailHolder = undefined;
    #pesanHolder = undefined;
    constructor(){
        super();
        // Mendefenisikan UI yang ada
        this.#closeBtn = this.querySelector("#contact-modal-button");
        this.#namaHolder = this.querySelector("#contact-nama-holder");
        this.#emailHolder = this.querySelector("#contact-email-holder");
        this.#pesanHolder = this.querySelector("#contact-pesan-holder");
        // Membuat instance agar dapat diakses tanpa perlu initialize class Dialognya
        if (!ContactDialog.instance) {
            ContactDialog.instance = this;
        }
        this.#handleClose();
    }
    // dapat di akses melalui instance
    open(nama, email, pesan) {
        this.#namaHolder.innerHTML = nama;
        this.#emailHolder.innerHTML = email;
        this.#pesanHolder.innerHTML = pesan;
        this.show();
    }
    // ketika menekan tombol close pada dialog
    #handleClose(){
        this.#closeBtn.addEventListener("click", ()=>{
            this.close();
        });
    }
}

export { ContactDialog }