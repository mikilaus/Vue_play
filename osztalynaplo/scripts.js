let app = new Vue({
el: 'main#app',
data: {
    pageTitle: 'Osztálynapló',
    studentCollection: [
        { name: 'Anna', gender: 'lány'},
        { name: 'Béla', gender: 'fiú'},
        { name: 'Tomi', gender: 'fiú'},
        { name: 'Andris', gender: 'fiú'},
        { name: 'Panka', gender: 'lány'},
        { name: 'Dóri', gender: 'lány'}
    ],
    newStudent: {
        name: '',
        gender: ''

    }

    },
    methods: {
        AddNewStudent() {
           if(this.newStudent === ''){
               return;
           } 
           this.studentCollection.push(this.newStudent);
           this.newStudent = {name: '', gender: ''};
        },

        GetColor(student) {
            backgroundColor = student.gender == 'fiú' ? 'blue' : 'red';

            return {
                color: 'white',
                backgroundColor: backgroundColor
            };
        }
    }
});



