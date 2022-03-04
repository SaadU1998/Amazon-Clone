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
  
    {
        Name: "Health & Personal Care",
        image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg",
        

    },
    {
        Name: "Electronics",
        image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg",
        

    },
    {
        Name: "For your Fitness Needs  ",
        image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg",
        

    },
    {
        Name: "Shop activity trackers and smartwatches ",
        image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg",
        

    },
    {
        Name: "AmazonBasics ",
        image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg",
        

    },
    {
        Name: "Kindle E readers        ",
        image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Desktop_Dash_Kindle_1x._SY304_CB639752818_.jpg",
        

    },
    {
        Name: "Shop Laptops & Tablets        ",
        image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg",
        

    },
  
    {
        Name: "Popular products in Wireless internationally  ",
        image: "https://th.bing.com/th/id/OIP.PB1fihxEF_jDlN17_wu6SQAAAA?w=146&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        

    },
  
    
   
    
]

const cards = document.querySelector('.Card-main');

shopItems.forEach((item) => {

    const div = `
    

    <div class="card-1   bg-white py-3" style="background-color: #EAEDED;">
      <h4>
        ${item.Name}
      </h4>
      <img class="card-img" src="${item.image}" alt="">
      <a href="" class=" text-decoration-none text-success"> Shop now</a>

    </div>
     
    
    
  `


    cards.innerHTML += div; 

 
    


})
