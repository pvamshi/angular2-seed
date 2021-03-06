import { NgModule } from '@angular/core';

import { SharedModule } from '../+shared/shared.module';
import { LoginComponent } from './login.component';
import { FormInputTextModule } from '../+shared/form-input-text/form-input-text.module';
import { routing } from './login.routing';

@NgModule({
    imports: [SharedModule, FormInputTextModule, routing],
    declarations: [LoginComponent]
})

export default class LoginModule {}
