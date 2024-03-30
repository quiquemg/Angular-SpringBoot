export class LoginUsuario {
    nif: string;
    password: string;

    constructor(nif: string, password: string) {
        this.nif = nif;
        this.password = password;
    }
}
