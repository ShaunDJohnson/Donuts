class DonutMaker {
    constructor() {
      this.donutCount = 0;
      this.autoClickerCount = 0;
      this.autoClickerCost = 10;
      this.autoClickerInterval = null;
    }
  
    addDonut() {
      this.donutCount++;
      document.getElementById("donutCount").innerHTML = this.donutCount;
    }
  
    purchaseAutoClicker() {
      if (this.donutCount >= this.autoClickerCost) {
        this.donutCount -= this.autoClickerCost;
        this.autoClickerCount++;
        this.autoClickerCost += 10;
        document.getElementById("donutCount").innerHTML = this.donutCount;
        document.getElementById("autoClickerCount").innerHTML = this.autoClickerCount;
        document.getElementById("buyAutoClickerButton").disabled = !this.checkCanPurchaseAutoClicker();
      }
    }
  
    checkCanPurchaseAutoClicker() {
      return this.donutCount >= this.autoClickerCost;
    }
  
    activateAutoClicker() {
      if (this.autoClickerCount > 0 && !this.autoClickerInterval) {
        this.autoClickerInterval = setInterval(() => {
          this.donutCount += this.autoClickerCount;
          document.getElementById("donutCount").innerHTML = this.donutCount;
        }, 1000);
      }
    }
  
    resetGameState() {
      this.donutCount = 0;
      this.autoClickerCount = 0;
      this.autoClickerCost = 10;
      clearInterval(this.autoClickerInterval);
      this.autoClickerInterval = null;
      document.getElementById("donutCount").innerHTML = this.donutCount;
      document.getElementById("autoClickerCount").innerHTML = this.autoClickerCount;
      document.getElementById("buyAutoClickerButton").disabled = !this.checkCanPurchaseAutoClicker();
    }
  }
  
  const donutMaker = new DonutMaker();
  
  function makeDonut() {
    donutMaker.addDonut();
  }
  
  function buyAutoClicker() {
    donutMaker.purchaseAutoClicker();
  }
  
  function activateAutoClicker() {
    donutMaker.activateAutoClicker();
  }
  
  function resetGameState() {
    donutMaker.resetGameState();
  }
  
  const button = document.getElementById('clickButton');
  button.addEventListener('click', makeDonut);
  
  document.getElementById("buyAutoClickerButton").addEventListener('click', buyAutoClicker);
  
  document.getElementById("activateAutoClickerButton").addEventListener('click', activateAutoClicker);
  
  document.getElementById("resetGameStateButton").addEventListener('click', resetGameState);
  
  setInterval(() => {
    button.click();
  }, 1000);