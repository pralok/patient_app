Ext.define('WireFrameTwo.view.dietPlanner.DietPlanner', {
  extend: 'Ext.Panel',
  xtype: 'dietPlanner',
  requires: ['WireFrameTwo.view.ToolBar','Ext.Button',
  'Ext.field.Select'],
  config: {
  //  layout: 'fit',
  scrollable : true,
    items: [
      {
        xtype : 'toolbarmenu',
        title : 'Diet Planner'
      },{
        xtype : 'fieldset',
        title : 'Choose your Diet Options',
        items : [
          {
            xtype : 'selectfield',
            labelWrap : true,
            styleHtmlContent : true,
            label : 'Food Type',
            name : 'food_type',
            options : [
              {text: 'North Indian ',  value: 'north_indian'},
              {text: 'South Indian', value: 'south_indian'},
              {text: 'East Indian', value: 'east_indian'},
              {text: 'West Indian',  value: 'west_indian'}
            ]
          },
          {
            xtype : 'selectfield',
            styleHtmlContent : true,
            labelWrap : true,
            label : 'Calories Intake',
            name : 'calories',
            options : [
              {text: '1400',  value: 1400},
              {text: '1600', value: 1600},
              {text: '1800', value: 1800},
              {text: '2000',  value: 2000}
            ]
          },{
            html : '<br />'
          },{
            xtype : 'button',
            text : 'submit',
            ui : 'action-round',
            handler : function(){
              console.log("clicked");
              var food_type = Ext.ComponentQuery.query('dietPlanner selectfield')[0];
              var calorie_count = Ext.ComponentQuery.query('dietPlanner selectfield')[1];

              var html_content = Ext.ComponentQuery.query('#content')[0];

              if(food_type.getValue() == "north_indian" && calorie_count.getValue() == 1400){

                              html_content.setHtml('<div class="dietP"><b>North Indian</b><br>Calories-1400 kcal<br>Carbohydrates-197g(57%)<br>Proteins-62g(18%)<br>'+
              					      'Fat – 30 g( 20%) Visible fat-15g<br>'+'<hr><b>Diet</b><hr/>'+
              							  '<table class="dietT"><tr class="dp"><th><b>Breakfast:</b></th></tr><tr class="dp"><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 glass milk(150ml)(low fat milk)'+
              								'+ 3-4 almonds + 3-4 walnuts(optional, can be taken in early morning)'+
              								'+ 2 brown bread slices<br><img src="./resources/data/bullet.png" height="6" width="6"/> Or whole wheat porridge (40g) Or 1 bowl oats (50g) Or 2 veg paratha (20g each) no oil or ghee.</td></tr>'+
              							  '<tr class="dp"><th><b>Mid-morning:</b><br></th></tr><tr class="dp"><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 fruit or 2 cookies or roasted dal(15g).</td></tr>'+
              						    '<tr class="dp"><th><b>Lunch:</b></th></tr><tr class="dp"><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 bowl salad(tomato, onion , cucumber) + 1 katori cauliflower vegetable(100g cooked) + 2 chapatis(20g each)/ 1 bowl rice(uncooked 40g)'+
              	              ' + 1 katori dal(uncooked 30g) + 1 katori curd(150g)/ 1 glass buttermilk/ 1 katori raita(add veges).</td></tr>'+
              						    '<tr class="dp"><th><b>Mid evening:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup tea(without sugar) + 1 wati roasted chivra/roasted dal/sprouts(30g).</td></tr>'+
              						    '<tr class="dp"><th><b>Dinner:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> Same as lunch or<br><img src="./resources/data/bullet.png" height="6" width="6"/> 1 bowl salad(tomato, onion, cucumber)'+
                              '+ 1 katori French beans vegetable(100g cooked)	+ 1 bowl rice(uncooked 40g) + whole pulses(uncooked 30g)/75g lean chicken/grilled fish/low fat paneer'+
                              ' + 1 bowl curd (125g) / 1 glass lassi(no sugar)(curd–125g).</td></tr><tr class="dp"><th><b>Bed time:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup milk(150 ml)(low fat milk).</td></tr></table>'+
              						    '<b> Non vegetarians can exchange pulse/ curd for lean chicken/ grilled fish.</b></div>');
              }
                        else if(food_type.getValue() == "north_indian" && calorie_count.getValue() == 1600){

                            html_content.setHtml('<div class="dietP"><b>North Indian</b><br>Calories- 1600 kcal<br>Proteins-63g(16%)<br>Carbohydrates-240g(60%) <br>Fats–45(25%)<br>'+
                          '<hr><b>Diet</b><hr/>'+
                          '<table class="dietT"><tr class="dp"><th><b>Breakfast:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup tea (without sugar) 1 cup milk (100ml) (low fat milk)'+
                          '+ 3-4 almonds + 3-4 walnuts + 2 brown bread slices'+
                          '<br><b>-</b> Or whole wheat porridge(45g) Or 1 bowl oats(50g) Or 2 veg paratha(20g each) no oil or ghee.</td></tr>'+
                          '<tr class="dp"><th><b>Mid-morning:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 fruit  or 2 cookies or roasted  dal (15g).</td></tr>'+
                          '<tr class="dp"><th><b>Lunch:</b></th><tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 bowl salad(tomato, onion, cucumber) + 1 katori vegetable(100g cooked) + 3 chapatis(20g each)/1 bowl rice(uncooked 45g) + 1 bowl dal(uncooked 30g)'+
                          '+1 bowl curd(150g)/1 glass buttermilk/ 1 katori raita(add veges)(curd–150g).</td></tr>'+
                          '<tr class="dp"><th><b>Mid afternoon:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 fruit(medium).</td></tr>'+
                          '<tr class="dp"><th><b>Mid evening:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup tea(without sugar) + 1 wati roasted chivda/roasted dal/sprouts(30g) or 3 cookies.</td></tr>'+
                          '<tr class="dp"><th><b>Dinner:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> Same as lunch or 1 bowl salad(tomato, onion, cucumber) 1 katori cauliflower veg(100g cooked) '+
                          '+ 1 bowl rice(uncooked 60g) + whole pulses(uncooked 30g)/75g lean chicken/grilled fish/low fat '+
                          'paneer + 1 bowl curd(150g)/1 glass lassi(no sugar)(curd – 150g).</td></tr><tr><th><b>Bed time:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup milk(150 ml)(low fat milk).</td></tr></table>'+
                          '</div>');

                      }
                    else if(food_type.getValue() == "north_indian" && calorie_count.getValue() == 1800){

                        html_content.setHtml('<div class="dietP"><b>North Indian</b><br>Calories-1800kcal<br>Proteins-72g(16%)<br>Carbohydrates–278g(62%)<br>'+
                      'Fats-48g(24%) Visible fat-15g<br>'+'<hr><b>Diet</b><hr/>'+
                      '<table class="dietT"><tr class="dp"><th><b>Breakfast:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup tea(without sugar) 1 glass milk(200ml)(low fat milk) + 3-4 '+
                      'almonds + 3-4 walnuts + 2 brown bread slices Or whole wheat '+
                      'porridge(45g) Or 1 bowl oats(50g) Or 2 veg paratha(20g each).</td></tr>'+
                      '<tr class="dp"><th><b>Mid-morning:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 fruit or 2 cookies or roasted dal(15g).</td></tr>'+
                      '<tr class="dp"><th><b>Lunch:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 bowl salad(tomato, onion , cucumber) + 1½ katori Bhindi vegetable(150 g cooked) + 4 chapatis(20g each)/2 bowl rice(uncooked 80g)'+
                      ' + 1 bowl dal(uncooked 30g) + 1 bowl curd(150g)/1 glass buttermilk/1 katori raita(add veges).</td></tr>'+
                      '<tr class="dp"><th><b>Mid-afternoon:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 fruit (medium)</td></tr>'+
                      '<tr class="dp"><th><b>Mid evening:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup tea(without sugar) + 1 wati roasted chivra/roasted dal/sprouts(30g).</td></tr>'+
                      '<tr class="dp"><th><b>Dinner:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> Same as lunch or<br><img src="./resources/data/bullet.png" height="6" width="6"/> 1 bowl salad(tomato, onion, cucumber)'+
                      '1½ katori French beans vegetable(150g cooked) or 1 bowl rice(uncooked 60g) + whole pulses(uncooked 30g)/75g lean chicken/grilled fish/low fat paneer + 1 bowl curd(150g)/1 glass lassi(no sugar)(curd–150g).</td></tr>'+
                      '<tr class="dp"><th><b>Bed time:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup milk(150 ml)(low fat milk).</td></tr></table>'+
                      '</div>');
                  }
                  else if(food_type.getValue() == "north_indian" && calorie_count.getValue() == 2000){

                      html_content.setHtml('<div class="dietP"><b>North Indian</b><br>Calories-2000kcal<br>Carbohydrates-303g(62%)<br>Proteins-79g(16%)<br>'+
                    'Fats-51g(23%)<br>'+'<hr><b>Diet</b><hr/>'+
                    '<table class="dietT"><tr class="dp"><th><b>Breakfast:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup tea(without sugar)/1 glass milk (200ml)/(low fat milk) + 3-4 almonds '+
                    '+ 3-4 walnuts + 3 brown bread slices Or whole wheat porridge(60) Or 1 bowl oats(60g) Or 3 veg paratha(20g each).</td></tr>'+
                    '<tr class="dp"><th><b>Mid-morning:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 fruit or 2 cookies or roasted dal(15g).</td></tr>'+
                    '<tr class="dp"><th><b>Lunch:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 bowl salad(tomato, onion, cucumber) + 1½ katori cabbage vegetable(150g cooked) + 4 chapatis(20g each)/2 bowl rice(uncooked 80g)'+
                    '+ 1 bowl dal(uncooked 30g) + 1 bowl curd(150g)/1 glass buttermilk/1 katori raita(add veges).</td></tr>'+
                    '<tr class="dp"><th><b>Mid-afternoon:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 fruit (medium)</td></tr>'+
                    '<tr class="dp"><th><b>Mid evening:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup tea(without sugar) + 1½ wati roasted chivra/roasted dal/sprouts(30g).</td></tr>'+
                    '<tr class="dp"><th><b>Dinner:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> Same as lunch Or 1 bowl salad(tomato, onion, cucumber) + 1½ katori cabbage vegetable(150 g cooked) or 1 bowl rice(uncooked 60g)'+
                    '+ whole pulses(uncooked 30g)/75g lean chicken/grilled fish/low fat paneer + 1 bowl curd(150g)/1 glass lassi(no sugar)(curd–150g).</td></tr>'+
                    '<tr class="dp"><th><b>Bed time:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup milk(150 ml)(low fat milk).</td></tr></table>'+
                    '</div>');
                }
                else if(food_type.getValue() == "south_indian" && calorie_count.getValue() == 2000){

                    html_content.setHtml('<div class="dietP"><b>South Indian</b><br>Calories-2000kcal<br>Proteins-72g(14%)<br>Carbohydrates–305g(61%)<br>'+
                  'Fats–53g(24%) visible fat–15g <br>'+'<hr><b>Diet</b><hr/>'+
                  '<table class="dietT"><tr class="dp"><th><b>Breakfast:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 glass tea/milk/coffee(without sugar) + 2 egg whites '+
                  '+ 4-5 small idlis + 1 wati sambhar/2 medium dosa + sambhar/1½ katori pongal + ¾ wati sambhar/1½ katori puttu + ½ wati '+
                  'channa masala/1½ ragi roti + ¾ wati sambhar(Any cereal-60g)</td></tr>'+
                  '<tr class="dp"><th><b>Mid-morning:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup milk(200 ml) or 1 glass buttermilk(curd-200g).</td></tr>'+
                  '<tr class="dp"><th><b>Lunch:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1½ wati cabbage vegetable(150g cooked) + 1½ bowl rice/2 bowl vegetable pulao/2 bowl bissibelabhat(raw rice-75g)'+
                  '+ 2 wati rasam/2 wati sambhar/1 wati dal(any pulses-30g) + 1 wati curd(200g).</td></tr>'+
                  '<tr class="dp"><th><b>Mid-afternoon:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 2 fruits (medium)</td></tr>'+
                  '<tr class="dp"><th><b>Snack:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup tea/milk/coffee(without sugar) + 1 k Pakoda/2 veg cutlet/2 medu vadai/2 masala vadai/1 k sundal(rajma/cowpea/Bengal gram/green gram) Any cereal or pulse-60g.</td></tr>'+
                  '<tr class="dp"><th><b>Dinner:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> Same as lunch Or 1 bowl salad(tomato, onion, cucumber) + 1½ katori vegetable poriyal(150g cooked)<br> <b>-</b>2½ bowl curd rice/2bowl tomato rice/3 adai(uncooked rice-75g) + 1 wati curd(200g) Or same as lunch.</td></tr>'+
                  '<tr class="dp"><th><b>Bed time:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup milk(150 ml).</td></tr></table>'+
                  '</div>');
              }
              else if(food_type.getValue() == "south_indian" && calorie_count.getValue() == 1800){

                  html_content.setHtml('<div class="dietP"><b>South Indian</b><br>Calories-1800kcal<br>Proteins-61g(13%)<br>Carbohydrates-280g(61%)<br>'+
                'Fats-49g(24%) Visible fat-15g <br>'+'<hr><b>Diet</b><hr/>'+
                '<table class="dietT"><tr class="dp"><th><b>Breakfast:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 glass tea/milk/coffee(without sugar) + 2 egg white + 4-5 small idlis + 1 wati sambhar/2 medium dosa + sambhar/1½ katori'+
                ' pongal + ¾ wati sambhar/1½ katori puttu + ½ wati channa masala/1½ ragi roti + ¾ wati sambhar(Any cereal-60g).</td></tr>'+
                '<tr class="dp"><th><b>Mid-morning:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup milk(150 ml) or 1 glass buttermilk (curd-150g).</td></tr>'+
                '<tr class="dp"><th><b>Lunch:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 bowl salad(tomato, onion, cucumber) + 1 katori gavar vegetable(cooked) + 1 bowl rice/1½ bowl vegetable pulao/1½ '+
                'bowl bissibelabhat(raw rice-75g) + 2 wati rasam/ 2 wati sambhar/1 wati dal(any pulses-30g) + 1 wati curd(150g).</td></tr>'+
                '<tr class="dp"><th><b>Mid-afternoon:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 2 fruits(medium)</td></tr>'+
                '<tr class="dp"><th><b>Snack:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup tea/milk/coffee(without sugar) + ½ k Pakoda/1 veg cutlet/1 medu vadai/1 masala vadai/ ½ k sundal(rajma/cowpea/Bengal gram/green gram)/2 Any cereal or pulse-30g.</td></tr>'+
                '<tr class="dp"><th><b>Dinner:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 bowl salad(tomato, onion, cucumber) + 1 katori bhindi vegetable + 2 bowl curd rice/1½ bowl tomato rice/3 adai(uncooked rice-75g) + 1 wati curd(150g) Or same as lunch.</td></tr>'+
                '<tr class="dp"><th><b>Bed time:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup milk(150 ml).</td></tr></table>'+
                '</div>');
              }
              else if(food_type.getValue() == "south_indian" && calorie_count.getValue() == 1600){

                  html_content.setHtml('<div class="dietP"><b>South Indian</b><br>Calories-1600kcal<br>Proteins-58g(14%)<br>Carbohydrates-243(60%)<br>'+
                'Fats–45g(25%) visible fat –15g<br>'+'<hr><b>Diet</b><hr/>'+
                '<table class="dietT"><tr class="dp"><th><b>Breakfast:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 glass tea/milk/coffee(without sugar) + 1 egg white + 4-5  small idlis + 1 wati sambhar/2 medium dosa + 1 wati sambhar/ 1½ '+
                'katori pongal + ¾ wati sambhar/1½ katori puttu + ½ wati channa masala/1½ ragi roti + ¾ wati sambhar(Any cereal-60g).</td></tr>'+
                '<tr class="dp"><th><b>Mid-morning:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup milk(150 ml) or 1 glass buttermilk(curd-100g).</td></tr>'+
                '<tr class="dp"><th><b>Lunch:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 bowl salad(tomato, onion, cucumber) + 1 katori French beans vegetable(cooked) + ¾ bowl cooked rice/1¼ bowl pulao/1¼ '+
                'bowl bissibelabhat(raw rice- 60g) + 2 wati rasam/2 wati sambhar/1 wati dal(any pulses-30g) + 1 wati curd(150g).</td></tr>'+
                '<tr class="dp"><th><b>Mid-afternoon:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 fruit</td></tr>'+
                '<tr class="dp"><th><b>Snack:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup tea/milk/coffee(without sugar) + ½ k Pakoda/1 veg cutlet/1 medu vadai/1 masala vadai/ ½ k sundal(rajma/cowpea/Bengal gram/green gram)/2 small idli + 1 wati sambhar(any cereal or pulse–30g).</td></tr>'+
                '<tr class="dp"><th><b>Dinner:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 bowl salad(tomato, onion, cucumber) + 1 katori dudhi vegetable + 1½ bowl curd rice/ ¾ bowl tomato rice/2 adai(uncooked rice-60g) + 1 wati curd(150g) Or same as lunch.</td></tr>'+
                '<tr class="dp"><th><b>Bed time:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup milk (150 ml).</td></tr></table>'+
                '</div>');
              }
              else if(food_type.getValue() == "south_indian" && calorie_count.getValue() == 1400){

                  html_content.setHtml('<div class="dietP"><b>South Indian</b><br>Calories-1400kcal<br>Proteins-52gms(15%)<br>Carbohydrates-195gms(56%)<br>'+
                'Fats–42gms(27%) visible fat-15g<br>'+'<hr><b>Diet</b><hr/>'+
                '<table class="dietT"><tr class="dp"><th><b>Breakfast:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup tea/milk/coffee(without sugar) + 1 egg white + 3 small idlis + 1 wati sambhar/1½ medium dosa + sambhar/1 wati pongal + '+
                '¾ wati sambhar/1 katori puttu + ½ wati channa masala/1 ragi roti + ¾ wati sambhar.</td></tr>'+
                '<tr class="dp"><th><b>Mid-morning:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup milk(200ml) or buttermilk(300 ml).</td></tr>'+
                '<tr class="dp"><th><b>Lunch:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 bowl salad(tomato, onion, cucumber) + 1 katori vegetable kurma(cooked) + ½ bowl rice/1 bowl pulao/1 bowl'+
                ' bissibelabhat/1 bowl lemon tamarind rice(uncooked rice-40g) + 2 wati rasam/2 wati sambhar/1 wati dal(pulses-30g) + 1 wati curd(150g).</td></tr>'+
                '<tr class="dp"><th><b>Mid-afternoon:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 fruit</td></tr>'+
                '<tr class="dp"><th><b>Snack:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup tea/milk/coffee(without sugar) + ½ k Pakoda/1 veg cutlet(not fried)/1 medu vada/1 masala vadai/½ k sundal(rajma/cowpea/Bengal gram/green gram)/2 small idlis+ 1 wati sambhar.</td></tr>'+
                '<tr class="dp"><th><b>Dinner:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 bowl salad(tomato, onion, cucumber) + 1 katori vegetable poriyal(cooked)/1 bowl curd rice/½ bowl tomato rice/1 adai + 1 wati curd(uncooked rice- 40g).</td></tr>'+
                '<tr class="dp"><th><b>Bed time:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup milk (150 ml).</td></tr></table>'+
                '</div>');
              }
              else if(food_type.getValue() == "east_indian" && calorie_count.getValue() == 1400){

                  html_content.setHtml('<div class="dietP"><b>East Indian</b><br>Calories-1400kcal<br>Proteins-58.2(16.5%)<br>Carbohydrates-193g(55%)<br>'+
                'Fats–44.4(28%)<br>'+'<hr><b>Diet</b><hr/>'+
                '<table class="dietT"><tr class="dp"><th><b>Breakfast:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup milk(150 ml) + 1 egg white + 1 medium bowl Moori or 1½ slice bread 0r 3 Tbsp oats/3 Tbsp muesli/3 Tbsp wheat flakes/ '+
                '2 rotis(20g each) Any cereal–45g.</td></tr>'+
                '<tr class="dp"><th><b>Mid-morning:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 fruit(medium).</td></tr>'+
                '<tr class="dp"><th><b>Lunch:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 bowl salad(tomato, onion, cucumber) + 1 katori bhindi vegetable(100g cooked) + 2 rotis(20g each) or 1 bowl rice(40g uncooked) + '+
                '1 wati dal(30g uncooked)/pulse/75 g grilled/panfried fish or lean chicken + 1 katori curd(150g).</td></tr>'+
                '<tr class="dp"><th><b>Snack:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> ¾ bowl roasted grams/sprouts/2-3 Marie biscuits.</td></tr>'+
                '<tr class="dp"><th><b>Dinner:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> Same as lunch.</td></tr>'+
                '<tr class="dp"><th><b>Bed time:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup milk(150ml).</td></tr></table>'+
                '</div>');
              }
              else if(food_type.getValue() == "east_indian" && calorie_count.getValue() == 1600){

                  html_content.setHtml('<div class="dietP"><b>East Indian</b><br>Calories-1600kcal<br>Proteins-62g(16%)<br>Carbohydrates-235g(58%)<br>'+
                'Fats–45g(25%)<br>'+'<hr><b>Diet</b><hr/>'+
                '<table class="dietT"><tr class="dp"><th><b>Breakfast:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1½ cup milk(150 ml) + 1 egg white + 1 medium bowl Moori or 1½ slice bread 0r 3 tbsp oats/3 tbsp muesli/3 tbsp wheat flakes/Or 2 rotis(20g each) Any cereal–45g.</td></tr>'+
                '<tr class="dp"><th><b>Mid-morning:</b></th></tr><tr><td><b>-</b> 1 fruit(medium).</td></tr>'+
                '<tr class="dp"><th><b>Lunch:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 bowl salad(tomato, onion, cucumber) + 1 bowl cauliflower vegetable(100g cooked) + 3 rotis(20g each) or 1½ bowl rice(60g uncooked) + 1 wati dal/pulse/75g grilled or panfried fish or lean chicken + 1 katori curd(150g)'+
                '.</td></tr>'+
                '<tr class="dp"><th><b>Mid-afternoon:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 fruit(medium).</td></tr>'+
                '<tr class="dp"><th><b>Snack:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> ¾ bowl roasted grams/sprouts/2-3 marie biscuits.</td></tr>'+
                '<tr class="dp"><th><b>Dinner:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> Same as lunch.</td></tr>'+
                '<tr class="dp"><th><b>Bed time:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup milk(150ml).</td></tr></table>'+
                '</div>');
              }
              else if(food_type.getValue() == "east_indian" && calorie_count.getValue() == 1800){

                  html_content.setHtml('<div class="dietP"><b>East Indian</b><br>Calories-1800kcal<br>Proteins-71g(16%)<br>Carbohydrates-269g(60%)<br>'+
                'Fats–55.3g(28%)<br>'+'<hr><b>Diet</b><hr/>'+
                '<table class="dietT"><tr class="dp"><th><b>Breakfast:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1½ cup milk(150 ml) + 2 egg white + 2 medium bowl Moori/chire or 3 slice bread 0r 4 Tbsp oats/4 Tbsp muesli/4 Tbsp wheat flakes/Or3 rotis(20g each) Any cereal–60g.</td></tr>'+
                '<tr class="dp"><th><b>Mid-morning:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 fruit(medium).</td></tr>'+
                '<tr class="dp"><th><b>Lunch:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 bowl salad(tomato, onion, cucumber) + 1½ katori cluster beans(gavar) vegetable(150g cooked) + 3 rotis(20g each) or 1½ bowl rice(60g uncooked) + 1 wati dal(30g uncooked)/pulse/75g grilled or panfried fish or lean chicken + 1 katori curd(150g).</td></tr>'+
                '<tr class="dp"><th><b>Mid-afternoon:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 fruit(medium).</td></tr>'+
                '<tr class="dp"><th><b>Snack:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> ¾ bowl roasted grams/srouts/2-3 marie biscuits.</td></tr>'+
                '<tr class="dp"><th><b>Dinner:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> Same as lunch.</td></tr>'+
                '<tr class="dp"><th><b>Bed time:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup milk(150ml).</td></tr></table>'+
                '</div>');
              }
              else if(food_type.getValue() == "east_indian" && calorie_count.getValue() == 2000){

                  html_content.setHtml('<div class="dietP"><b>East Indian</b><br>Calories-2000kcal<br>Proteins-79g(16%)<br>Carbohydrates (61.5%)<br>'+
                'Fats–51g(23%)<br>'+'<hr><b>Diet</b><hr/>'+
                '<table class="dietT"><tr class="dp"><th><b>Breakfast:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 glass milk(200ml) + 2 egg white + 3 medium bowl Moori/chire or 4 slice bread 0r 5½ Tbsp oats/5½ Tbsp muesli/5½ Tbsp wheat flakes Or 4 rotis(20g each) Any cereal–80g.</td></tr>'+
                '<tr class="dp"><th><b>Mid-morning:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 fruit(medium).</td></tr>'+
                '<tr class="dp"><th><b>Lunch:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 bowl salad(tomato, onion, cucumber) + 1½ bottle gourd(dudhi) vegetable(150g cooked) + 4 rotis(20g each) or 2 bowl rice(80g uncooked) + 1 wati dal/pulse(30g uncooked)/75g grilled or panfried fish or lean chicken + 1 katori curd(150g).</td></tr>'+
                '<tr class="dp"><th><b>Snack:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 bowl roasted grams(45g)/sprouts/2-3 marie biscuits Any cereal or pulse–45g.</td></tr>'+
                '<tr class="dp"><th><b>Dinner:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> Same as lunch.</td></tr>'+
                '<tr class="dp"><th><b>Bed time:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 glass milk(200ml).</td></tr></table>'+
                '</div>');
              }
              else if(food_type.getValue() == "west_indian" && calorie_count.getValue() == 2000){

                  html_content.setHtml('<div class="dietP"><b>West Indian</b><br>Calories-2000kcal<br>Protein-75.6(15%)<br>Carbohydrates-305(61%)<br>'+
                'Fat- 54.5(24%) visible fat–15g <br>'+'<hr><b>Diet</b><hr/>'+
                '<table class="dietT"><tr class="dp"><th><b>Early Morning:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup tea/milk/coffee(without sugar).</td></tr>'+
                '<tr class="dp"><th><b>Breakfast:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 glass milk(200ml) + 2 wati pohe(add vegetables or sprouts)/2 wati veg upma/8 small idlis with 1 wati sambhar/4 small dosa with 1 wati sambhar/5 small uttapam with 1 wati sambhar/4 veg paratha(each paratha-20g) or 3 paratha (each paratha-30g)/1 bowl oats porridge(60g)+½ wati boiled pulse Any cereal-90gms.</td></tr>'+
                '<tr class="dp"><th><b>Mid-morning:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1½ fruit/3 marie biscuit with 1 cup tea/coffee(without sugar).</td></tr>'+
                '<tr class="dp"><th><b>Lunch:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1½ big wati salad(tomato, onion, cucumber) + 1½ wati cabbage vegetable(cooked 150g) + 3 chapatis(30g each) or 4 chapatis(20g each) or 2 chapati with ¾ k rice or 1½ big bhakri(60g each) or 3 small bhakris(30g each) 0r 2 medium katori rice(Any cereal-90g) + 1 wati dal(thick)/sprouts/pulses(uncooked dal or pulse-30g) + 1 wati curd(150g)/1 glass buttermilk/1 wati raita(150g curd with vegetables).</td></tr>'+
                '<tr class="dp"><th><b>Mid-afternoon:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 3-4 almonds + 3-4 walnuts.</td></tr>'+
                '<tr class="dp"><th><b>Snack:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup tea/milk/coffee(without sugar) + 1½ big wati roasted chana/1½ big or 3 small veg pudla(Chana flour-30g)/1½ big or 3 small mix dal chila/sprout salad(pulses–45g)/1½ open faced sandwich(2 slice bread with toppings).</td></tr>'+
                '<tr class="dp"><th><b>Dinner:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> Same as lunch.</td></tr></table>'+
                '</div>');
              }
              else if(food_type.getValue() == "west_indian" && calorie_count.getValue() == 1800){

                  html_content.setHtml('<div class="dietP"><b>West Indian</b><br>Calories-1800 kcal<br>Carbohydrates-270g(60%)<br>Protein-69g(15%)<br>'+
                'Fat-54.8g(27%) visible fat–15g<br>'+'<hr><b>Diet</b><hr/>'+
                '<table class="dietT"><tr class="dp"><th><b>Early Morning:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup tea/milk/coffee(without sugar).</td></tr>'+
                '<tr class="dp"><th><b>Breakfast:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 glass milk(200ml) + 2 wati pohe(add vegetables or sprouts)/2 wati upma/5 small idlis with 1 wati sambhar/3 small dosa with 1 wati sambhar/3-4 small uttapam with 1 wati sambhar/3 veg paratha(each paratha-20g) or 2 paratha(each paratha-30g)/1 bowl oats porridge(60g) Any cereal-60gms.</td></tr>'+
                '<tr class="dp"><th><b>Mid-morning:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1½ fruit/3 marie biscuit with 1 cup tea/coffee(without sugar).</td></tr>'+
                '<tr class="dp"><th><b>Lunch:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 3 chapatis(30g each) or 4 chapatis(20g each) or 2 chapati with ¾ k rice or 1½ big bhakri(60g each) or 3 small bhakris(30g each) 0r 2 medium katori rice(Any cereal-90g) + 1 wati dal(thick)/sprouts/pulses(uncooked dal or pulse-30g) + 1½ wati bhindi vegetable(cooked 150g) + 1½ big wati salad(tomato,onion,cucumber) + 1 wati curd(150g)/1 glass buttermilk/ 1 wati raita(150g curd with vegetables).</td></tr>'+
                '<tr class="dp"><th><b>Mid-afternoon:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 3-4 almonds + 3-4 walnuts.<hr>'+
                '<tr class="dp"><th><b>Snack:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup tea/milk/coffee(without sugar) + 1½ big wati roasted chana/ 1½ big or 3 small veg pudla (Chana flour-45g)/ 1½ big or 3 small mix dal chila/sprout salad(pulses–45g)/ 1½ open faced sandwich (1 slice bread with toppings).<hr>'+
                '<tr class="dp"><th><b>Dinner:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 big wati salad(tomato, onion, cucumber) + 1½ wati cauliflower vegetable(cooked 150g) 2 chapatis(30g each) or 3 chapatis(20g each) or 1 chapati with ¾ k rice or 1 big bhakri(60g each) or 2 small bhakris(30g each) 0r 1½ medium katori rice(Any cereal-60g) + 1 wati dal(thick)/sprouts/pulses + 1 wati curd(150g)/ 1 glass buttermilk/ 1 wati raita(150g curd with vegetables).</td></tr></table>'+
                '</div>');
              }
              else if(food_type.getValue() == "west_indian" && calorie_count.getValue() == 1600){

                  html_content.setHtml('<div class="dietP"><b>West Indian</b><br>Calories- 1600 kcal<br>Protein- 61g(15.3%)<br>Carbohydrates – 232g(58%)<br>'+
                'Total Fat – 49g visible fat- 15g<br>'+'<hr><b>Diet</b><hr/>'+
                '<table class="dietT"><tr class="dp"><th><b>Early Morning:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup tea/milk/coffee(without sugar).</td></tr>'+
                '<tr class="dp"><th><b>Breakfast:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup milk(100ml) + 2 wati pohe(add vegetables or sprouts)/2 wati upma/5 small idlis with 1 wati sambhar/3 small dosa with 1 wati sambhar/4 small uttapam with 1 wati sambhar/3 veg paratha(each paratha-20g) or 2 paratha(each paratha-30g)/1 bowl oats porridge(60g) Any cereal-60gms.</td></tr>'+
                '<tr class="dp"><th><b>Mid-morning:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1½ fruit/3 marie biscuit with 1 cup tea/coffee(without sugar).</td></tr>'+
                '<tr class="dp"><th><b>Lunch:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 big wati salad(tomato, onion, cucumber) + 1 wati cauliflower vegetable(cooked 100g) + 2 chapatis(30g each) or 3 chapatis(20g each) or 1 chapati with ¾ k rice or 1 big bhakri(60g each) or 2 small bhakris(30g each) 0r 1½ medium katori rice(Any cereal-60g) + 1 wati dal(thick)/sprouts/pulses(uncooked dal or pulse-30g) + 1 wati curd(150g)/1 glass buttermilk/1 wati raita(150g curd with vegetables).</td></tr>'+
                '<tr class="dp"><th><b>Mid-afternoon:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 3-4 almonds + 3-4 walnuts.</td></tr>'+
                '<tr class="dp"><th><b>Snack:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> ¾ big wati roasted chana/1 big or 2 small veg pudla(Chana flour- 30g)/1 big or 2 small mix dal chila/sprout salad(pulses–30g)/1 open faced sandwich(1 slice bread with toppings).</td></tr>'+
                '<tr class="dp"><th><b>Dinner:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> Same as lunch.</td></tr></table>'+
                '</div>');
              }
              else if(food_type.getValue() == "west_indian" && calorie_count.getValue() == 1400){

                  html_content.setHtml('<div class="dietP"><b>West Indian</b><br>Calories- 1400 kcal<br>Protein- 53g (15%)<br>Carbohydrates – 203g (58% )<br>'+
                'Total Fat –44g visible fat- 15 g<br>'+'<hr><b>Diet</b><hr/>'+
                '<table class="dietT"><tr class="dp"><th><b>Early Morning:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup tea/milk/coffee(without sugar).</td></tr>'+
                '<tr class="dp"><th><b>Breakfast:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 cup milk (100ml) + 1½ wati pohe (add vegetables or sprouts)/ 1½ wati upma / 3-4 small idlis with 1 wati sambhar/ 1½ small dosa with 1 wati sambhar/ 2 small uttapam with 1 wati sambhar/ 2 veg paratha(each paratha- 20g) or 1½ paratha (each paratha- 30g) / 1 bowl oats porridge (40g) Any cereal- 30 gms.</td></tr>'+
                '<tr class="dp"><th><b>Mid-morning:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 fruit / 2 marie biscuit with 1 cup tea/ coffee(without sugar).</td></tr>'+
                '<tr class="dp"><th><b>Lunch:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 1 big wati salad (tomato, onion, cucumber) + 1 wati bhindi vegetable(cooked 100g) + 2 chapatis(30g each) or 3 chapatis(20g each) or 1 chapati with ¾ k rice or 1 big bhakri(60g each) or 2 small bhakris(30g each) 0r 1½ medium katori rice(Any cereal-60g) + 1 wati dal/sprouts/pulses(uncooked dal-30g) + 1 wati curd(100g)/1 glass buttermilk/1 wati raita(100g curd with vegetables).</td></tr>'+
                '<tr class="dp"><th><b>Mid-afternoon:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> 3-4 almonds + 3-4 walnuts (optional, can be taken early morning).</td></tr>'+
                '<tr class="dp"><th><b>Snack:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> ¾ big wati roasted chana/1 big or 2 small veg pudla(Chana flour- 30g)/1 big or 2 small mix dal chila/sprout salad(pulses–30g)/open faced sandwich(1 slice bread with toppings).</td></tr>'+
                '<tr class="dp"><th><b>Dinner:</b></th></tr><tr><td><img src="./resources/data/bullet.png" height="6" width="6"/> Same as lunch.</td></tr></table>'+
                '</div>');
              }

              else{
                html_content.setHtml('');
                console.log(food_type.getValue());
                console.log(calorie_count.getValue());
              }
            }
          },{
            html : '<br />'
          },{
            xtype : 'panel',
            html : '',
            itemId : 'content'
          }
        ]
      }
    ]
  },
  initialize : function(){
    console.log('diet planner view created');
  }
});
