export interface Menu {
    id: number;
    name: string;
    position: number;
    imageUrl: string;
}

export interface FindAllMenuResponse {
    data: Menu[];
}

export interface FindMenuResponse {
    data: Menu;
}
