export class Banner {
    id: number;
    imagen: string;

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



constructor(
    id: number,
    imagen: string
) {
    this.id = id
    this.imagen =imagen
}
}