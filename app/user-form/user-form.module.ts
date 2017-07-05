import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Containers
import { UserFormComponent } from './containers/user-form.component';

//Components
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
    declarations: [
        UserFormComponent,
        PaymentFormComponent,
        ContactFormComponent,
        ProductFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        UserFormComponent
    ]
})

export class UserFormModule {}