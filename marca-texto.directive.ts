import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcaTexto]',
})
export class MarcaTextoDirective implements OnInit {
  @Input() corDeFundo = 'yellow';
  @Input() corDoTexto = 'white';

  constructor(private eLemento: ElementRef) {}

  ngOnInit(): void {
    this.mudarFundo();
  }

  private mudarFundo(cor: string = 'yellow') {
    this.eLemento.nativeElement.style.backgroundColor = this.corDeFundo || cor;
    this.eLemento.nativeElement.style.color = this.corDoTexto;
    this.eLemento.nativeElement.style.FontWeigh = 'bold';
  }
}
