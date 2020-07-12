import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Numero1 } from 'src/app/shared/model/numero1.model';
import { Numero2 } from 'src/app/shared/model/numero2.model';
import { Numero3 } from 'src/app/shared/model/numero3.model';
import { Numero4 } from 'src/app/shared/model/numero4.model';
import { Numero5 } from 'src/app/shared/model/numero5.model';
import { Numero6 } from 'src/app/shared/model/numero6.model';
import { Numero7 } from 'src/app/shared/model/numero7.model';
import { Numero8 } from 'src/app/shared/model/numero8.model';
import { Numero9 } from 'src/app/shared/model/numero9.model';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * @title Stepper overview
 */
@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {
  isLinear = false;
  labelPosition: 'before' | 'after' = 'after';
  questao0FormGroup: FormGroup;
  questao1FormGroup: FormGroup;
  questao2FormGroup: FormGroup;
  questao3FormGroup: FormGroup;
  questao4FormGroup: FormGroup;
  questao5FormGroup: FormGroup;
  questao6FormGroup: FormGroup;
  questao7FormGroup: FormGroup;
  questao8FormGroup: FormGroup;
  questao9FormGroup: FormGroup;

  vertical = false;

  // variaveis numero 1
  listnumero1: Numero1[] = new Array();
  descricaoAtividade1: string;
  numero1: Numero1;

  // variaveis numero 2
  listnumero2: Numero2[] = new Array();
  numero2: Numero2;

  // variaveis numero 3
  listnumero3: Numero3[] = new Array();
  numero3: Numero3;

  // variaveis numero 4
  listnumero4: Numero4[] = new Array();
  numero4: Numero4;

  // variaveis numero 5
  listnumero5: Numero5[] = new Array();
  numero5: Numero5;

  // variaveis numero 6
  listnumero6: Numero6[] = new Array();
  numero6: Numero6;

  // variaveis numero 7
  listnumero7: Numero7[] = new Array();
  numero7: Numero7;

  // variaveis numero 8
  numero8: Numero8;

  // variaveis numero 9
  numero9: Numero9;

  //variaveis numero 8
  botaosim = false;
  botaonao = false;

  //totalMoedasMaxNumero2 : any = 11;
  //totalMoedasNumero2 : any = 0;
  totalMoedasNumero2 = 0;
  totalMoedasMaxNumero2 = 11;

  durationInSeconds = 5;

  constructor(private _formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
    this.popularDadosNumero3();
    this.popularDadosNumero4();
    this.popularDadosNumero5();
    this.popularDadosNumero6();
    this.popularDadosNumero7();
  }



  selecionarQuestao8Sim(){
    this.botaonao = false;
    this.botaosim = true;
  }

  selecionarQuestao8Nao(){
    this.botaosim = false;
    this.botaonao = true;
  }

  ngOnInit() {
    this.questao0FormGroup = this._formBuilder.group({
      questao0Ctrl: ['', Validators.required]
    });
    this.questao1FormGroup = this._formBuilder.group({
      questao1Ctrl: ['', Validators.required]
    });
    this.questao2FormGroup = this._formBuilder.group({
      questao2Ctrl: ['', Validators.required]
    });
    this.questao3FormGroup = this._formBuilder.group({
      questao3Ctrl: ['', Validators.required]
    });
    this.questao4FormGroup = this._formBuilder.group({
      questao4Ctrl: ['', Validators.required]
    });
    this.questao5FormGroup = this._formBuilder.group({
      questao5Ctrl: ['', Validators.required]
    });
    this.questao6FormGroup = this._formBuilder.group({
      questao6Ctrl: ['', Validators.required]
    });
    this.questao7FormGroup = this._formBuilder.group({
      questao7Ctrl: ['', Validators.required]
    });
    this.questao8FormGroup = this._formBuilder.group({
      questao8Ctrl: ['', Validators.required]
    });
    this.questao9FormGroup = this._formBuilder.group({
      questao9Ctrl: ['', Validators.required]
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  finalizar(){
    this.listnumero1 = new Array();
    this.listnumero2 = new Array();
    this.listnumero3 = new Array();
    this.listnumero4 = new Array();
    this.listnumero5 = new Array();
    this.listnumero6 = new Array();
    this.listnumero7 = new Array();

    this.numero1 = new Numero1();
    this.numero2 = new Numero2();
    this.numero3 = new Numero3();
    this.numero4 = new Numero4();
    this.numero5 = new Numero5();
    this.numero6 = new Numero6();
    this.numero7 = new Numero7();
    this.numero8 = new Numero8();
    this.numero9 = new Numero9();

    this.descricaoAtividade1 = null;

    this.popularDadosNumero3();
    this.popularDadosNumero4();
    this.popularDadosNumero5();
    this.popularDadosNumero6();
    this.popularDadosNumero7();

    this.openSnackBar("OBRIGADO PELA SUA PARTICIPAÇÃO!",  null);

  }

  // Inicio questão numero 1
  addListNumero1(){
    this.numero1 = new Numero1();

    if(this.descricaoAtividade1 == null){
      this.openSnackBar("Informe a atividade :",  null);
    }else{
      if(this.listnumero1.length == 0){
        this.numero1.id = 1;
      }else{
        this.numero1.id = this.listnumero1.length + 1;
      }

      this.numero1.atividade = this.descricaoAtividade1;
      this.listnumero1.push(this.numero1);
      this.addNumero1NaNumero2(this.numero1);
      this.descricaoAtividade1 = null;
    }

  }
  //Fim questão numero 1

  // Inicio questão numero 2
  addNumero1NaNumero2(numero1: Numero1){
    this.numero2 = new Numero2();
    this.numero2.id = numero1.id;
    this.numero2.atividade = numero1.atividade;
    this.listnumero2.push(this.numero2);
  }

  updateListNumero2(event, id) {

    for(let item of this.listnumero2){
     if(item.id == id){
          item.moedas = 0;
          item.moedas = event.value;
          break;
     }
    }

   }

  updateAtividade1ListNumero3(event, id) {

    for(let item of this.listnumero3){
     if(item.id == id){
          item.moedasatividade1 = 0;
          item.moedasatividade1 = event.value;
          break;
     }
    }

   }

   updateAtividade2ListNumero3(event, id) {

    for(let item of this.listnumero3){
     if(item.id == id){
          item.moedasatividade2 = 0;
          item.moedasatividade2 = event.value;
          break;
     }
    }

   }

   updateListNumero4(event, id) {

    for(let item of this.listnumero4){
     if(item.id == id){
          item.moedas = 0;
          item.moedas = event.value;
          break;
     }
    }

   }

   updateListNumero6(event, id) {

    for(let item of this.listnumero6){
     if(item.id == id){
          item.moedas = 0;
          item.moedas = event.value;
          break;
     }
    }

   }



  //Fim questão numero 3

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    //this.totalMoedasNumero2 = (this.totalMoedasNumero2 + value);
    //this.totalMoedasMaxNumero2 = (this.totalMoedasMaxNumero2 - value);

    return value;
  }

// Popular Dados iniciais
popularDadosNumero3(){
  this.numero3 = new Numero3();
  this.numero3.id = 1;
  this.numero3.atividade1 = 'Fazer atividade física em grupo (como ginástica dança, circuito).';
  this.numero3.atividade2 = 'Sair para beber ou comer com os amigos.';
  this.listnumero3.push(this.numero3);

  this.numero3 = new Numero3();
  this.numero3.id = 2;
  this.numero3.atividade1 = 'Caminhar.';
  this.numero3.atividade2 = 'Assistir televisão ou filmes.';
  this.listnumero3.push(this.numero3);

  this.numero3 = new Numero3();
  this.numero3.id = 3;
  this.numero3.atividade1 = 'Navegar na internet ou jogar no celular sentado ou deitado.';
  this.numero3.atividade2 = 'Musculação ou pilates.';
  this.listnumero3.push(this.numero3);

  this.numero3 = new Numero3();
  this.numero3.id = 4;
  this.numero3.atividade1 = 'Ir a eventos culturais (como shows, teatro, exposição).';
  this.numero3.atividade2 = 'Correr ou participar de eventos esportivos.';
  this.listnumero3.push(this.numero3);

  this.numero3 = new Numero3();
  this.numero3.id = 5;
  this.numero3.atividade1 = 'Praticar esportes coletivos.';
  this.numero3.atividade2 = 'Jogar jogos de mesa, cartas e tabuleiro.';
  this.listnumero3.push(this.numero3);

  this.numero3 = new Numero3();
  this.numero3.id = 6;
  this.numero3.atividade1 = 'Observar e contemplar a natureza.';
  this.numero3.atividade2 = 'Praticar esportes de aventura (como mountain bike, corridas na natureza).';
  this.listnumero3.push(this.numero3);

  this.numero3 = new Numero3();
  this.numero3.id = 7;
  this.numero3.atividade1 = 'Realizar atividade física em casa.';
  this.numero3.atividade2 = 'Fazer artesanato ou cozinhar.';
  this.listnumero3.push(this.numero3);

  this.numero3 = new Numero3();
  this.numero3.id = 8;
  this.numero3.atividade1 = 'Ler ou ouvir músicas.';
  this.numero3.atividade2 = 'Caminhar, andar de bicicleta ou nadar.';
  this.listnumero3.push(this.numero3);
}

popularDadosNumero4(){
  this.numero4 = new Numero4();
  this.numero4.id = 1;
  this.numero4.beneficio = 'Diminuir peso e melhorar estética do corpo';
  this.listnumero4.push(this.numero4);

  this.numero4 = new Numero4();
  this.numero4.id = 2;
  this.numero4.beneficio = 'Diminuir o risco de doenças';
  this.listnumero4.push(this.numero4);

  this.numero4 = new Numero4();
  this.numero4.id = 3;
  this.numero4.beneficio = 'Fazer mais amigos';
  this.listnumero4.push(this.numero4);

  this.numero4 = new Numero4();
  this.numero4.id = 4;
  this.numero4.beneficio = 'Estar mais disposto para o dia-a-dia';
  this.listnumero4.push(this.numero4);

  this.numero4 = new Numero4();
  this.numero4.id = 5;
  this.numero4.beneficio = 'Diminuir o estresse';
  this.listnumero4.push(this.numero4);

  this.numero4 = new Numero4();
  this.numero4.id = 6;
  this.numero4.beneficio = 'Dormir melhor';
  this.listnumero4.push(this.numero4);

  this.numero4 = new Numero4();
  this.numero4.id = 7;
  this.numero4.beneficio = 'Melhorar condicionamento físico';
  this.listnumero4.push(this.numero4);
}

popularDadosNumero5(){
  this.numero5 = new Numero5();
  this.numero5.id = 1;
  this.numero5.beneficio = 'Diminuir peso e melhorar estética do corpo';
  this.listnumero5.push(this.numero5);

  this.numero5 = new Numero5();
  this.numero5.id = 2;
  this.numero5.beneficio = 'Diminuir o risco de doenças';
  this.listnumero5.push(this.numero5);

  this.numero5 = new Numero5();
  this.numero5.id = 3;
  this.numero5.beneficio = 'Fazer mais amigos';
  this.listnumero5.push(this.numero5);

  this.numero5 = new Numero5();
  this.numero5.id = 4;
  this.numero5.beneficio = 'Estar mais disposto para o dia-a-dia';
  this.listnumero5.push(this.numero5);

  this.numero5 = new Numero5();
  this.numero5.id = 5;
  this.numero5.beneficio = 'Diminuir o estresse';
  this.listnumero5.push(this.numero5);

  this.numero5 = new Numero5();
  this.numero5.id = 6;
  this.numero5.beneficio = 'Dormir melhor';
  this.listnumero5.push(this.numero5);

  this.numero5 = new Numero5();
  this.numero5.id = 7;
  this.numero5.beneficio = 'Melhorar condicionamento físico';
  this.listnumero5.push(this.numero5);
}

popularDadosNumero6(){
  this.numero6 = new Numero6();
  this.numero6.id = 1;
  this.numero6.prejuizo = 'Hipertensão';
  this.listnumero6.push(this.numero6);

  this.numero6 = new Numero6();
  this.numero6.id = 2;
  this.numero6.prejuizo = 'Obesidade';
  this.listnumero6.push(this.numero6);

  this.numero6 = new Numero6();
  this.numero6.id = 3;
  this.numero6.prejuizo = 'Doença do coração';
  this.listnumero6.push(this.numero6);

  this.numero6 = new Numero6();
  this.numero6.id = 4;
  this.numero6.prejuizo = 'Derrame';
  this.listnumero6.push(this.numero6);

  this.numero6 = new Numero6();
  this.numero6.id = 5;
  this.numero6.prejuizo = 'Dores nas articulações';
  this.listnumero6.push(this.numero6);

  this.numero6 = new Numero6();
  this.numero6.id = 6;
  this.numero6.prejuizo = 'Diabetes';
  this.listnumero6.push(this.numero6);

  this.numero6 = new Numero6();
  this.numero6.id = 7;
  this.numero6.prejuizo = 'Osteoporose';
  this.listnumero6.push(this.numero6);

  this.numero6 = new Numero6();
  this.numero6.id = 8;
  this.numero6.prejuizo = 'Câncer';
  this.listnumero6.push(this.numero6);

  this.numero6 = new Numero6();
  this.numero6.id = 9;
  this.numero6.prejuizo = 'Depressão';
  this.listnumero6.push(this.numero6);

}

popularDadosNumero7(){
  this.numero7 = new Numero7();
  this.numero7.id = 1;
  this.numero7.prejuizo = 'Hipertensão';
  this.listnumero7.push(this.numero7);

  this.numero7 = new Numero7();
  this.numero7.id = 2;
  this.numero7.prejuizo = 'Obesidade';
  this.listnumero7.push(this.numero7);

  this.numero7 = new Numero7();
  this.numero7.id = 3;
  this.numero7.prejuizo = 'Doença do coração';
  this.listnumero7.push(this.numero7);

  this.numero7 = new Numero7();
  this.numero7.id = 4;
  this.numero7.prejuizo = 'Derrame';
  this.listnumero7.push(this.numero7);

  this.numero7 = new Numero7();
  this.numero7.id = 5;
  this.numero7.prejuizo = 'Dores nas articulações';
  this.listnumero7.push(this.numero7);

  this.numero7 = new Numero7();
  this.numero7.id = 6;
  this.numero7.prejuizo = 'Diabetes';
  this.listnumero7.push(this.numero7);

  this.numero7 = new Numero7();
  this.numero7.id = 7;
  this.numero7.prejuizo = 'Osteoporose';
  this.listnumero7.push(this.numero7);

  this.numero7 = new Numero7();
  this.numero7.id = 8;
  this.numero7.prejuizo = 'Câncer';
  this.listnumero7.push(this.numero7);

  this.numero7 = new Numero7();
  this.numero7.id = 9;
  this.numero7.prejuizo = 'Depressão';
  this.listnumero7.push(this.numero7);
}

// Fim dados iniciais



}


