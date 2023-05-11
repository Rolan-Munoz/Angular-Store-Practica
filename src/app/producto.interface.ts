export interface IProducto {
    id: number;
    nombre: string;
    precio: number;
    descripcion: string;
    categoria: string;
    imagen: string;
    favorito: boolean;
    tallas: string[];
    precioRebajado: number;
}