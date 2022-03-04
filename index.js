const shopItems= [
    {
        Name: "Beauty picks",
        image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg",
        

    },
    {
        Name: "AmazonBasics",
        image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg",
        

    },
    {
        Name: "New arrivals in Toys",
        image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg",
        

    },
    {
        Name: "Shop Pet supplies",
        image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg",
        

    },
  
    
   
    
]

const cards = document.querySelector('.Card-main');

shopItems.forEach((item) => {

    const div = `
    

    <div class="card-1  bg-white py-3" style="background-color: #EAEDED;">
      <h4>
        ${item.Name}
      </h4>
      <img class="card-img" src="${item.image}" alt="">
      <a href="" class=" text-decoration-none text-success"> Shop now</a>

    </div>
     
    
    
  `


    cards.innerHTML += div; 

 
    


})
