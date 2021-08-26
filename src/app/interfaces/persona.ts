export interface Persona {
    readonly id?: number;
    nombre: string;
    edad: number;
    frase: string;
    direccion?: Direccion;
}

export interface Direccion {
    id: number;
    calle: string;
    colonia: string;
    pais: string;
}