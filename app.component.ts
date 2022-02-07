import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  count = 0;

  nome = 'Fulano da Silva Pereira';

  text = '';

  pessoas = [
    {
      nome: 'Beltrano',
      sobrenome: 'Soares',
    },
    {
      nome: 'Cicrano',
      sobrenome: 'Silva',
    },
    {
      nome: 'Fulano',
      sobrenome: 'Pereira',
    },
    {
      nome: 'Maria',
      sobrenome: 'Silva',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log(this.pessoas);
    let interval = setInterval(() => {
      this.count++;
      if (this.count === 10) {
        clearInterval(interval);
      }
    }, 1000);
  }

  clicou(nome: String): void {
    console.log('Clicou em mim!', nome);
  }
}
