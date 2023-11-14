import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "./main/main.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, MainComponent]
})
export class AppComponent {
  mostrarComprados = true;
  produto = '';
  quantidade = 0;

  list = [
    { produto: 'arroz', quantidade : 2, comprado: false },
    { produto: 'leite', quantidade : 8, comprado: false },
    { produto: 'nescau', quantidade : 1, comprado: false },
  ]

  markCheckbox(event: any, produto: string)
  {
	this.list.map(it => {
		if (it.produto == produto)
			it.comprado = event.target.checked;
	});
  }

  showComprado(event: any)
  {
	  this.mostrarComprados = !event.target.checked;
  }

  deleteItem(produto: string)
  {
	  this.list = this.list.filter((item) => item.produto != produto);
  }

  editarItem(produto: string)
  {
	  const index = this.list.findIndex((item) => item.produto);
  }

  name(event: any)
  {
    this.produto = event.target.value;
  }

  qtd(event: any)
  {
    this.quantidade = event.target.value;
  }

  adicionarProuto()
  {
    this.list.push({produto: this.produto, quantidade: this.quantidade, comprado: false})
  }
}
