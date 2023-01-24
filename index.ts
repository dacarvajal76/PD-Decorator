import { Tall, Grande, Venti } from './Beverage'
import { Espresso ,Caramel } from './AddonDecorator'

function Show(){ 

  const grande = new Grande();  
  const espresso1 = new Espresso(grande);
  const espresso2 = new Espresso(espresso1);
  const caramel1 = new Caramel(espresso2);  
  
  console.log(caramel1.cost());
  console.log(caramel1.getDescription());
}

Show();