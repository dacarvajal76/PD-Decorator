import {  Beverage } from './Beverage'

abstract class AddonDecorator extends Beverage{
  beverage: Beverage;
  

  constructor(beverage: Beverage){
    super();
    this.beverage = beverage;
  }

  public abstract cost(): number;
  public abstract getDescription():string

}

export class Caramel extends AddonDecorator{  

  public cost(): number{
    return this.beverage.cost() + 2
  }

  public getDescription(): string {
      return this.beverage.getDescription() + 'x1 extra of Caramel '
  }

}

export class SoyMilk extends AddonDecorator{
  public cost(): number{
    return this.beverage.cost() + 3
  }

  public getDescription(): string{
    return this.beverage.getDescription() + 'x1 extra of Soy Milk ';
  }
}

export class Espresso extends AddonDecorator{  

  public cost(): number{
    return this.beverage.cost() + 1
  }

  public getDescription(): string{
    return this.beverage.getDescription() + 'x1 shot of Espresso ';
  }
    
}

export class Decaffeinated extends AddonDecorator{
  public cost(): number{
    return this.beverage.cost() + 0.5
  }

  public getDescription(): string{
    return this.beverage.getDescription() + 'x1 shot of Decaffeinated ';
  }
}



