class navECtx {
    static #_state = "";
    static getState(){
        return this.#_state;
    }
    static setState(key){
        this.#_state = key;
    }
}

export { navECtx }