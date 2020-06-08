let app = new Vue({
    el: 'main#app',

    data: {
        nameFilter : '',
        filmCollection : []
                
    },

    created() {
        this.filmCollection = [
            'Get Out',
            'Dunkirk',
            'Lady Bird',
            'Blade Runner 2049',
            'A Ghost Story',
            'The Florida Project',
            'Phantom Thread',
            'Call Me By Your Name',
            'Raw',
            'The Shape of Water',
            'Okja',
            'Personal Shopper',
            'It Comes at Night',
            'Good Time',
            'Star Wars: The Last Jedi'
        ];
        this.filmCollection.sort(function(a, b) {
            return a.localeCompare(b);
          });

    },

    methods : {
        GetFilteredList() {
            return this.filmCollection.filter(item => {
                if(this.nameFilter == ''){
                    return true;
                }
                
                // pozíció megállapítása
                let position = item.toLowerCase().indexOf(this.nameFilter.toLowerCase());
                
                return position != -1;
            });
        }

    }
});