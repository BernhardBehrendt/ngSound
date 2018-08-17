import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ClockService {

    private ticking: boolean;
    private bpmCount: number;

    constructor() {
        this.ticking = false;
        this.bpmCount = 100;
    }

    public start(): void {
        this.ticking = true;
    }

    public stop(): void {
        this.ticking = false;
    }

    public isPlaying() {
        return this.ticking;
    }

    public getBpm() {
        return this.bpmCount;
    }

    public setBpm(bpmCount: number = 100) {
        this.bpmCount = Math.round(bpmCount);
    }
}
