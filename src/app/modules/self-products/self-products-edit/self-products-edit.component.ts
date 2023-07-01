import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cloneDeep } from 'lodash-es';
import { SelfProductsService } from '../self-products.service';
import { AppService } from 'src/app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs';


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
    data: any;
    deleting: boolean;

    /**
     * Constructor
     */
    constructor(private _formBuilder: FormBuilder, private _selfProductsService: SelfProductsService, private _appService: AppService, private _snackBar: MatSnackBar, private _activatedRoute: ActivatedRoute, private _router: Router)
    {
        this.id = null
        this.submitted = false
        this.deleting = false
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

    ngOnInit() {
        let id = this._activatedRoute.snapshot.paramMap.get('id')
        if(id) {
            this.handleGetData(id)
        }
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
                this.submitted = false
                this.mainForm.markAllAsTouched();
                this.mainForm.enable()
                console.log('form inválido')
                return
            }

            this.mainForm.disable()
            let body = this.getFormBody()
            console.log(body)
            await this.save(body)

        } catch (error) {
            this.submitted = false
            this.mainForm.enable()
            console.log('erro: ', error)
            this._appService.handleError(error, 'onFormSubmit')
            return
        }

        this.submitted = false
        this._snackBar.open('Produto criado com sucesso', 'OK')
        
    }

    /**
     * On save
     */
    async save(body: Object) {
        try {
            this.mainForm.disable()
            var response = await this._selfProductsService.save(body, this.id)

        } finally {
            if (response) {
                this.id = response.id
                this.data = response
            }

            this.mainForm.enable()
        }
    }

    /**
     * On delete
     */
    async delete() {
        
        this.mainForm.disable()
        var response = await this._selfProductsService.delete(this.id)
        this.deleting = true

        if(response) {
            this.deleting = false
            this._snackBar.open('Produto apagado. Voltando à listagem em 3s')
            await this._appService.delay(3000)
            this.redirect()
        }

        this.mainForm.enable()
        
    }

    /**
     * Handle get data
    */
   async handleGetData(id: any) {
    try {
        debugger
        var data: any = await this._selfProductsService.get(id)

        if (data) {
            this.id = data.id
            this.data = data
            this.mainForm.patchValue(data)

        } else {
            this.id = null
        }

    } catch (error) {
        console.error(error)
        return
    }

    

   }

    redirect() {
        this._router.navigate(['./self-products']);
    }

}
