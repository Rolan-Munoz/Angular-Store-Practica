export class Producto {
    id: number;
    nombre: string;
    precio: number;
    descripcion: string;
    categoria: string;
    imagen: string;
    favorito: boolean;
    tallas: string[];
    precioRebajado: number;
    
    
    
    



    public getId(): number  {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNombre(): string  {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }


    public getDescripcion(): string  {
        return this.descripcion;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    public getCategoria(): string  {
        return this.categoria;
    }

    public setCategoria(categoria: string): void {
        this.categoria = categoria;
    }

    public getImagen(): string {
        return this.imagen;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }

    public getFavorito(): boolean {
        return this.favorito
    }

    public setFavorito(favorito: boolean): void {
        this.favorito = favorito
    }

    public getTallas(): string[] {
        return this.tallas
    }

    public setTallas(tallas: string[]): void {
        this.tallas = tallas
    }

    public getPrecioRebajado(): number {
        return this.precioRebajado ?? this.precio;
    }

    public setPrecioRebajado(precioRebajado: number): void {
        this.precioRebajado = precioRebajado;
    }

    constructor(
        id: number, 
        nombre: string, 
        precio: number, 
        descripcion: string, 
        categoria: string,
        imagen: string,
        favorito: boolean,
        tallas: string[],
        precioRebajado: number,



) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.descripcion = descripcion
    this.categoria = categoria
    this.imagen = imagen
    this.favorito = favorito
    this.tallas = tallas
    this.precioRebajado = precioRebajado
}    

}