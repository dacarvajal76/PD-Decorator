export abstract class Beverage{
  public abstract cost(): number;
  public abstract getDescription(): string;
}

export class Tall extends Beverage{
  public cost(): number{
    return 1
  }

  public getDescription(): string{
    return 'x1 Tall cup ';
  }
}

export class Grande extends Beverage{
  public cost(): number{
    return 1.5
  }

  public getDescription(): string{
    return 'x1 Grande cup ';
  }
}

export class Venti extends Beverage{
  public cost(): number{
    return 2.3
  }

  public getDescription(): string{
    console.log('Hello')
    return 'x1 Venti cup ';
  }
}

