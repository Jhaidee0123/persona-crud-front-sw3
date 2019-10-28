import { TipoDocumento } from './tipodocumento';
export class Persona {
     id: number;
     nroDocumento: string;
     nombre: string;
     apellido: string;
     telefono: string;
     tipoDocumento = new TipoDocumento();
}
