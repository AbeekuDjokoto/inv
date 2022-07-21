<template>
    <div class="move">
        <div class="left">
            <div class="leftMargin">
                <app-nav></app-nav>
                <div class="container">
                    <div class="iconInfo">
                        <a href="#"
                        ><img src="../assets/Vector.svg" alt="Dashboard" />Dashboard</a
                        >
                    </div>
                    <div class="iconInfo">
                        <a href="#"
                        ><img src="../assets/inventory.svg" alt="Inventory" />Inventory</a
                        >
                    </div>
                    <div class="iconInfo">
                        <a href="#"
                        ><img src="../assets/category.svg" alt="Categories" />Categories</a
                        >
                    </div>
                    <div class="iconInfo">
                        <a href="#"
                        ><img src="../assets/account.svg" alt="Account Setting" />Account
                        Setting</a
                        >
                    </div>

                    <div class="logout">
                        <div>
                            <a href="#">Logout</a>
                        </div>
                        <figure>
                            <img src="../assets/logout.svg" alt="logout Image" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
        <div class="right">
            <header>
                    <div class="main">
                        <div class="nav">
                            <p class="ayBorder">AY</p>
                            <p class="name">Ammiel Yawson</p>
                        </div>
                    </div>
                    <div class="mainContent">
                        <div>
                            <h1 class="overviewTitle">Overview</h1>
                            <div class="gridCard">
                                <app-card :text="Products.productType" :numberText="Products.productNumber"></app-card>
                                <app-card :text="Categories.categoriesType" :numberText="Categories.categoriesNumber"></app-card>
                                <app-card :text="Sales.salesType" :numberText="Sales.salesNumber"></app-card>
                                <app-card :text="Inventory.inventoryType" :numberText="Inventory.inventoryNumber"></app-card>
                            </div>
                            <h1 class="recently-added">Recently added</h1>
                        </div>
                    </div>
            </header>
        </div>
    </div>
    </template>

<script>
import NavigationItemsVue from "@/components/NavigationItems.vue";
import CardVue from "@/components/Card.vue";
export default {
  components: {
    "app-nav": NavigationItemsVue,
    "app-card": CardVue,
  },
  data(){
    return{
        Products: {productType: "Products Types", productNumber: 24},
        Categories: {categoriesType: "Categories", categoriesNumber: 3},
        Sales: {salesType: "Sales - July", salesNumber: '¢2,400'},
        Inventory: {inventoryType: "Inventory Value", inventoryNumber: '¢12,620'},
    }
  }
};
</script>

<style scoped>
.left {
    width: 100%;
    max-width: 320px;
    background: #151923;
}

.leftMargin {
  max-width: 82%;
  margin: 0 auto;
}

.container {
  margin-top: 104px;
}

.iconInfo {
  margin: 0px 0px 43px 0px;
  align-items: center;
}

.iconInfo img {
  margin-right: 17.58px;
}

.iconInfo a {
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */
  color: #ffffff;
  text-decoration: none;
}

.iconInfo span:active {
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */
  color: #ffffff;
  align-items: center;
}

.logout {
  position: relative;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 390.83px;
}

.logout a {
  text-decoration: none;
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */
  color: #ffffff;
  align-items: center;
}

/* right Styles */

header{
    background: #F4F4F4;
    height: 100%;
}
.move{
    display: flex;
}

.right{
    width: 88%;
}

.main{
    background: #FFFFFF;
}

.nav {
    width: calc(100% - 96px);
    margin: 0 auto;
  display: flex;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02);
  padding: 20px 0px;
  justify-content: end;
  align-items: center;
}

.ayBorder {
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  color: #4057d3;
  width: 40px; 
  height: 40px;
  border-radius: 50%;
  background-color: #B2BDFA;
  text-align: center;
  margin-right: 16px;
}

.name {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */
  color: #000000;
}

.mainContent{
    width: calc(100% - 96px);
    margin: 0 auto;
}

.overviewTitle{
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 150%;
    /* identical to box height, or 54px */
    letter-spacing: -0.04em;
    color: #1D2128;
    margin: 32px 0px 8px 0px;
}

.gridCard{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 89px;
}

.recently-added{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    /* identical to box height, or 27px */
    color: #000000;
}
</style>
