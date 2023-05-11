export class Categorias {
    id: number;
    imagen: string;
    categoria: string;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getImagen(): string {
        return this.imagen;
    }

    public setImagem(imagen: string): void {
        this.imagen = imagen;
    }

    public getCategorias(): string {
        return this.categoria;
    }

    public setCategorias(categoria: string): void {
        this.categoria = categoria;
    }




constructor(
    id: number,
    imagen: string,
    categoria: string
) {
    this.id = id
    this.imagen = imagen
    this.categoria = categoria
}
}