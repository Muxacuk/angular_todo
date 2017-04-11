export class Todo{
    id: number;
    done: boolean;

    constructor (public title) {
        this.done = false;
    }
}