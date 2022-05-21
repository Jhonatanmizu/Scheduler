export interface Task {

    id: number
    name: string,
    priority: number
    time: number
    result: number
    running?: boolean
    delete?: boolean
}