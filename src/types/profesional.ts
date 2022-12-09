export type ProfesionalProject = {
    id: number
    name: string | null
    img: string | null
    year: string | null
    link: string | null
    description: string | null
    start: Date | null
    end: Date | null
    updateAt: Date | null
    createdAt: Date | null
    order: number
    technologies: Technology[]
    gallery: ItemGallery[];
}


export type Technology = {
    id: number
    name: string | null
    img: string | null
    url: string | null
    primaryColor: string | null
    secundaryColor: string | null
    description: string | null
    order: number
}

export type ItemGallery = {
    id: number
    idProfesionalProjects: number
    name: string | null
    src: string | null
    type: string | null
    size: number | null
    order: number | null
}