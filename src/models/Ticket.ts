import * as moment from 'moment';
import {Empleado} from "./Empleado";
import {EstadoTicket} from "./EstadoTicket";
import {Clasificacion} from "./Clasificacion";

export class Ticket{

  private _id: number;
  private _numTicket: number;
  private _estadoTicket: EstadoTicket;
  private _clasificacion: Clasificacion;
  private _fechaApertura: Date;
  private _empleado: Empleado;
  private _codigo: number;
  private _nroLegajo: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get numTicket(): number {
    return this._numTicket;
  }

  set numTicket(value: number) {
    this._numTicket = value;
  }

  get estadoTicket(): EstadoTicket {
    return this._estadoTicket;
  }

  set estadoTicket(value: EstadoTicket) {
    this._estadoTicket = value;
  }

  get clasificacion(): Clasificacion {
    return this._clasificacion;
  }

  set clasificacion(value: Clasificacion) {
    this._clasificacion = value;
  }

  get fechaApertura(): Date {
    return this._fechaApertura;
  }

  set fechaApertura(value: Date) {
    this._fechaApertura = value;
  }

  get empleado(): Empleado {
    return this._empleado;
  }

  set empleado(value: Empleado) {
    this._empleado = value;
  }

  get codigo(): number {
    return this._codigo;
  }

  set codigo(value: number) {
    this._codigo = value;
  }

  get nroLegajo(): number {
    return this._nroLegajo;
  }

  set nroLegajo(value: number) {
    this._nroLegajo = value;
  }

  public toString(){
    return `Ticket [numTicket="${this.numTicket}", codigo=${this.codigo}, estado=${this.estadoTicket.toString()}, empleado = ${this.empleado.toString()}, fechaApertura = ${moment(this.fechaApertura).format('DD-MM-YYYY')}]`;
  }

  constructor(id:number,
              estadoTicket: EstadoTicket,
              clasificacion: Clasificacion,
              fechaApertura: Date,
              empleado: Empleado,
              codigo: number,
              nroLegajo: number){
    this._id = id;
    this._estadoTicket = estadoTicket;
    this._clasificacion = clasificacion;
    this._fechaApertura = fechaApertura;
    this._empleado = empleado;
    this._codigo = codigo;
    this._nroLegajo = nroLegajo;
  }
}
