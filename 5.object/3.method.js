const apple = {
    name: 'apple',
    display: function(){
        console.log(`${this.name} : 🍎`); //객체 안에서 내 자신의 데이터 접근할 때 this.key
        
    }

};
apple.display();