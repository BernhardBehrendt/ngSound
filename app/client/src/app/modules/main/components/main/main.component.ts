import {Component} from '@angular/core';
import {ExampleService} from "../../services/example.service";

@Component({
    selector: 'ngsound-root',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent {
    title = 'ngsound';

    constructor(private exampleService:ExampleService){
    }
}
