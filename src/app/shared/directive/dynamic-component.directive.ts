import { ComponentFactoryResolver, Directive, Input, OnChanges, SimpleChanges, ViewContainerRef, OnDestroy } from '@angular/core';

import { BirdsComponent } from '../components/birds/birds.component';
import { DogsComponent } from '../components/dogs/dogs.component';
import { DynamicComponentService } from './dynamic-component.service';
import { Api } from '../models/api.model';

@Directive({
  selector: '[appDynamicComponent]'
})
export class DynamicComponentDirective implements OnChanges,OnDestroy {

  @Input() componenteName;
  @Input() valueForComponent;

  private component: Api;
  private componentFactory;

  constructor(public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    public dynamicService: DynamicComponentService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getComponent();
  }

  ngOnDestroy(): void {
    this.viewContainerRef.clear();
  }

  /**
   * Traz da api o component solicitado
   */
  private getComponent() {
    this.dynamicService.getComponent(this.componenteName).subscribe(data => {
      this.resolveComponents(data);
    }, err => {
        alert('API not found');
    });
  }

  /**
   * Limpa o container e cria uma nova instancia do componente resultado da busca da api
   * @param data  informa qual component deve ser criado
   */
  private resolveComponents(data?) {
    this.component = data;
    // limpa o container onde se encontra a diretiva
    this.viewContainerRef.clear();
    // recupera o objeto para criação do component
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component.component);
    // cria a instancia do component 
    let componentRef = this.viewContainerRef.createComponent(this.componentFactory);

    switch (this.component.name) {
      case 'bird':
        (<BirdsComponent>componentRef.instance).name = this.valueForComponent;
        (<BirdsComponent>componentRef.instance).getImage();
        break;
      case 'dog':
        (<DogsComponent>componentRef.instance).getVideo();
        break;
    }
  }
}
