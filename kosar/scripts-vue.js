let app = new Vue({
    el: "main#app",
    data: {
        itemCollection: [],
        newItem: {
            name: '',
            count: '', 
            basePrice: ''
        }
    },
    created: function () {
        this.itemCollection.push(new CartItem('tej', 2, 200));
        this.itemCollection.push(new CartItem('kenyér', 5, 200));
        this.itemCollection.push(new CartItem('gumicukor', 10, 500));
    },
    methods: {       
        getTotal (){           
        return this.itemCollection
        .map(item => item.getTotalPrice())
        .reduce((acc, price) => acc + price);

       },
       
       AddNewItem(){
            if (!CartItem.CanBeConstructed(
                this.newItem.name,
                this.newItem.count,
                this.newItem.basePrice
                )) {
                    return;
            }

            this.itemCollection.push(new CartItem(
                this.newItem.name,
                this.newItem.count,
                this.newItem.basePrice
            ));

            this.newItem = {
                name: '',
                count: '', 
                basePrice: ''
            }
    
       }
       
    }
}); 