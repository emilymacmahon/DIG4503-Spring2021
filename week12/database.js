class Database {
    constructor() {
        this.arrayExample = [
            'Cortney',
            'Dewayne',
            'Trenton',
            'Pamala',
            'Ettie',
            'Errol',
            'Lorrie',
            'Hang',
            'Lauryn',
            'Caterina',
            'Isa',
            'Marcela'
        ];
    }

    createOne(person) {
        //add to array with push
        this.arrayExample.push(person);
    }

    readOne(person) {

        //set up response
        let result= {person: "not found"};
        
        //search through array
        arrayExample.forEach(value => {
            if(value == person) {
                result = {person: person};
            }
        });

        return result;
    }

    
} 