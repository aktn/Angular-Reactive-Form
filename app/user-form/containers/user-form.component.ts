import { Component } from '@angular/core'
import { FormGroup, FormArray, FormControl } from '@angular/forms'

@Component({ 
    selector: 'user-form',
    styles: ['user-form.component.scss'],
    template: `
        <contact-form></contact-form>
        <product-form></product-form>
        <payment-form></payment-form>
    `
})

export class UserFormComponent {}