export interface Board {
    boardId: number
    title: string
    writer: string
    content: string
    createDate: string
    updateDate: string
}

export interface BoardState {
    boards: Board[]
    board: Board | null
}

export const boardState = (): BoardState => ({
    boards: [],
    board: null,
})
