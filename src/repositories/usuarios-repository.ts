import { Prisma, Usuario } from "@prisma/client"

export interface UsuariosRepository {
    create(data: Prisma.UsuarioUncheckedCreateInput): Promise<Usuario>
    list(): Promise<Usuario[]>
    getById(id: number): Promise<Usuario | null>
    getByEmail(email: string): Promise<Usuario | null>
    update(id: number, data: Prisma.UsuarioUncheckedUpdateInput): Promise<Usuario>
    delete(id: number): Promise<Usuario>
}