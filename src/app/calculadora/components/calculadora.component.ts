import { Component, OnInit } from '@angular/core';

@Component({ 
  selector: 'app-calculadora', // nome da tag
  templateUrl: './calculadora.component.html', // html
  styleUrls: ['./calculadora.component.css'] // css
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// @Component -> gera uma tag HTML com o nome que tá no 'selector'
// OnInit -> ciclo de vida chamado assim que o objeto é concluído
