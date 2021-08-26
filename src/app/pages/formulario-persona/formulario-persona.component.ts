import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../../interfaces/persona';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent implements OnInit,AfterViewInit{
  @Input() formDisabled: boolean;
  @Input() info: Persona;
  @Output() clickAgregar = new EventEmitter<Persona>();
  
  personaForm: FormGroup;
  btnNameForm: string;
  
  constructor() {
  }

  ngAfterViewInit(){
    if (this.btnNameForm) {
      document.getElementById('botonFormulario').innerHTML = this.btnNameForm;
    }
  }

  createFormGroupPersona() {
    return new FormGroup({
      id: new FormControl((this.info && this.info.id) ? this.info.id : ''),
      nombre: new FormControl({
          value: ((this.info && this.info.nombre) ? this.info.nombre : ''),
          disabled: this.formDisabled
        },
        [Validators.required,Validators.minLength(3),Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')]
      ),
      edad: new FormControl({
          value: ((this.info && this.info.edad) ? this.info.edad : ''),
          disabled: this.formDisabled
        },
        [Validators.required]
      ),
      frase: new FormControl({
          value: ((this.info && this.info.frase) ? this.info.frase : ''),
          disabled: this.formDisabled
        },
        [Validators.required,Validators.minLength(5)]
      ),
      direccion: new FormGroup({
        calle: new FormControl({
            value: ((this.info && this.info.direccion.calle) ? this.info.direccion.calle : ''),
            disabled: this.formDisabled
          }
        ),
        colonia: new FormControl({
            value: ((this.info && this.info.direccion.colonia) ? this.info.direccion.colonia : ''),
            disabled: this.formDisabled
          }
        ),
        pais: new FormControl({
            value: ((this.info && this.info.direccion.pais) ? this.info.direccion.pais : ''),
            disabled: this.formDisabled
          }
        ),
        id: new FormControl({
            value: ((this.info && this.info.direccion.id) ? this.info.direccion.id : null),
            disabled: this.formDisabled
          }
        )
      })
    });
  }
  ngOnInit() {
    this.personaForm = this.createFormGroupPersona();
  }

  agregar() {
    this.clickAgregar.emit( this.personaForm.value );
  }

  eliminar() {
    this.clickAgregar.emit( this.info );
  }
  
  getErrorMessage(data:string) {
    let response: string;
    switch (data) {
      case 'nombre':{
        response=this.formValidators('nombre',3);
        break;
      }
      case 'edad':{
        if (this.personaForm.controls['edad'].hasError('required')) {
          response='El campo no puede quedar vacio';
        } else {
          response='Debe ser un numero entero positivo';
        }
        break;
      }
      case 'frase':{
        response=this.formValidators('frase',5);
        break;
      }
      default:{
        response='';
        break;
      }
    }
    return response;
  }

  formValidators(field:string,lengthField:number) {
    if (this.personaForm.controls[field].hasError('required')) {
      return 'El campo no puede quedar vacio';
    } else if (this.personaForm.controls[field].hasError('pattern')) {
      return 'El campo solo debe tener letras';
    } else if (!this.personaForm.controls[field].hasError('minLength')) {
      return 'El nombre debe tener al menos '+lengthField+' caracteres';
    } else {
      return 'Error '+field;
    }
  }
}
