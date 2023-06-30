import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cloneDeep } from 'lodash-es';
import { SelfProductsService } from '../self-products.service';
import { AppService } from 'src/app/app.service';


@Component({
    selector     : 'landing-home',
    templateUrl  : './self-products-edit.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class SelfProductsComponentEdit
{
    mainForm: FormGroup;
    submitted: boolean;
    id: any;

    /**
     * Constructor
     */
    constructor(private _formBuilder: FormBuilder, private _selfProductsService: SelfProductsService, private _appService: AppService)
    {
        this.id = null
        this.submitted = false
        this.mainForm = this._formBuilder.group({
            // info produto
            nome:       [null, [Validators.required, Validators.minLength(4), Validators.maxLength(35)]],
            estoque:    [null, [Validators.required, Validators.min(0), Validators.max(999999999)]],
            preco:      [null, [Validators.required, Validators.min(0), Validators.max(999999999), Validators.pattern("^[0-9,.R$]*$")]],
            categoria:  [null, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
            descricao:  ["", [Validators.minLength(4), Validators.maxLength(15)]],
            imagens:    ['imagem222', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
        })
    }

    get f() {
        return this.mainForm.controls
    }

    getFormBody() {
        let body = cloneDeep(this.mainForm.value);
        return body
    }

    /**
     * On Submit
     */
    async onFormSubmit() {

        try {
            this._appService.surprise()
            this.submitted = true

            // stop here if form is invalid
            if (this.mainForm.invalid) {
                // Notify component datepicker can be is invalid
                this.mainForm.enable()
                console.log('form inválido')
                return
            }

            let body = this.getFormBody()
            console.log(body)

            await this.save(body)

        } catch (error) {
            console.log('erro: ', error)
            this._appService.handleError(error, 'onFormSubmit')
        }
    }

    /**
     * On save
     */
    async save(body: Object) {
        try {
            this.mainForm.disable()
            var teste = await this._selfProductsService.save(body, this.id)

        } finally {
            console.log(teste)
            this.mainForm.enable()
        }
    }

}
