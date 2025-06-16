import { defineStore } from 'pinia'
import { boardState } from './boardState'
import { boardActions } from './boardActions'

export const useBoardStore = defineStore('board', {
    state: boardState,
    actions: boardActions(boardState()),
})
