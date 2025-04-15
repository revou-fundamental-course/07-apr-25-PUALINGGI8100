class navECtx {
    static #_state = "";
    static getState(){
        return this.#_state;
    }
    static setState(key){
        this.#_state = key;
    }
}

class formCtx {
    static #_state = {};
    static getState(){
        return this.#_state;
    }
    static setState(data){
        this.#_state = data;
    }
}

export { navECtx, formCtx }