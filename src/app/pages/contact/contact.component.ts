import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})

export default class ContactComponent {

    public user: any;
    public camp!: string;

    constructor(){
        this.user = {
            nom_cognoms: '',
            correu: '',
            missatge: ''
        };
    }

    onSubmit() {
        console.log(this.user);
    }
}
