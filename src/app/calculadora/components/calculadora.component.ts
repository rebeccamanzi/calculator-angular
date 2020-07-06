import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services/calculadora.service';

@Component({ 
  selector: 'app-calculadora', // nome da tag
  templateUrl: './calculadora.component.html', // html
  styleUrls: ['./calculadora.component.css'] // css
})

export class CalculadoraComponent implements OnInit {

  constructor(private calculadoraService: CalculadoraService) { }
  // atributo 'calculadoraService'

  ngOnInit(): void {
  }

}

// @Component -> gera uma tag HTML com o nome que tá no 'selector'
// OnInit -> ciclo de vida chamado assim que o objeto é concluído
