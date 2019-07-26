function asd(){
    var image=[{

         ss:"vegetable/v1.jpg",
         name:"Lady finger"
    },
    {
        ss:"vegetable/v2.jpg",
        name:"Bringel"
    },
    {
        ss:"vegetable/v3.jpg",
        name:"Onion"
    },
    {
        ss:"vegetable/v4.jpg",
        name:"Potato",
    },
    {
        ss:"vegetable/v5.jpg",
        name:"Tomatoes"
    },
    {
        ss:"vegetable/v6.jpg",
        name:"Carrot"
    },
    {
        ss:"vegetable/v7.jpg",
        name:"Palak"
    },
    {
        ss:"vegetable/v8.jpg",
        name:"Capcicum"
    },
    {
        ss:"vegetable/v9.jpg",
        name:"Cucumber"
    },
    {
        ss:"vegetable/v10.jpg",
        name:"Methi"
    },
    {
        ss:"vegetable/v11.jpg",
        name:"Cauliflower"
    },
    {
        ss:"vegetable/v12.jpg",
        name:"Beans"
    },
    {
        ss:"vegetable/v13.jpg",
        name:"Radish"
    },
    {
        ss:"vegetable/v14.jpg",
        name:"Mushrooms"
    },
    {
        ss:"vegetable/v15.jpg",
        name:"Ginger"
    },
    {
        ss:"vegetable/v16.jpg",
        name:"Garlic"
    }
];
    
    
    temp=``;
    for(let i=0;i<image.length;i++)
    {
        temp+=`
  <div class="col-sm-6 col-md-2" >
    <div class="thumbnail" style="background: linear-gradient(to left,green,white)">
      <img src="`+image[i].ss+`"alt="...">
      <div class="caption">
      <h4 style="color: rgb(20, 92, 7)">[#] `+image[i].name+`</h4>
    </div>
    </div>
  </div>
</div>`;
    }
    document.getElementById("userList").innerHTML=temp;

    var image1=[
        {

        ff:"fruit/f1.jpg",
        name:"Banana"
       }, 
       {

        ff:"fruit/f2.jpg",
        name:"Apple"
       }, 
       {

        ff:"fruit/f3.jpg",
        name:"Kiwi"
       }, 
       {

        ff:"fruit/f4.jpg",
        name:"Pomegranate"
       }, 
       {

        ff:"fruit/f5.jpg",
        name:"Watermelon"
       }, 
       {

        ff:"fruit/f6.jpg",
        name:"Coconut"
       }, 
       {

        ff:"fruit/f7.jpg",
        name:"Muskmelon"
       }, 
       {

        ff:"fruit/f8.jpg",
        name:"Avocado"
       }, 
       {

        ff:"fruit/f9.jpg",
        name:"Mosambi"
       },
       {

        ff:"fruit/f10.jpg",
        name:"Orange"
       },
       {

        ff:"fruit/f11.jpg",
        name:"Guava"
       },
       {

        ff:"fruit/f12.jpg",
        name:"Sapota"
       },
       {

        ff:"fruit/f13.jpg",
        name:"Blueberry"
       },
       {

        ff:"fruit/f14.jpg",
        name:"Pineapple"
       }, 
       {

        ff:"fruit/f15.jpg",
        name:"Grapes-Red"
       }, 
       {

        ff:"fruit/f16.jpg",
        name:"Papaya"
       }, 
       {

        ff:"fruit/f17.jpg",
        name:"Dragon Fruit"
       }, 
       {

        ff:"fruit/f18.jpg",
        name:"Plum"
       },
       {

        ff:"fruit/f19.jpg",
        name:"Mango"
       },
       {

        ff:"fruit/f20.jpg",
        name:"Sugarcane"
       },
       {

        ff:"fruit/f21.jpg",
        name:"Sugarcane"
       }
];
   
   
   temp1=``;
    for(let j=0;j<image1.length;j++)
    {
        temp1+=`
  <div class="col-sm-6 col-md-2" >
    <div class="thumbnail" style="background: linear-gradient(to left,green,white)">
      <img src="`+image1[j].ff+`" alt="...">
      <div class="caption">
        <h4 style="color: rgb(20, 92, 7)">[#] `+image1[j].name+`</h4>
    </div>
    </div>
  </div>
</div>`;
    }
    document.getElementById("userList1").innerHTML=temp1;
   
}