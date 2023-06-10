const catsExample = [
    {
        name: "Luna",
        followers: [500, 200, 300]
    },
    {
        name: "Michi",
        followers: [100, 300]
    },
];

const catsExample2 = [
    {
        name: "Mimi",
        followers: [320, 120, 70]
    },
    {
        name: "Milo",
        followers: [400, 300, 100, 200]
    },
    {
        name: "Gizmo",
        followers: [250, 750]
    },
    {
        name: "Luna",
        followers: [500, 200, 300]
    },
]

function findFamousCats(cats) {
    // Tu código aquí 👈

    let arrayForFamousCats = [];

        cats.reduce((obtainer, cat) => { 
            let totalFollowers = cat.followers.reduce((acumulator, quantity) => { return acumulator + quantity });

        if (obtainer < totalFollowers) {
            arrayForFamousCats = [];
            arrayForFamousCats.push(cat.name);

            return totalFollowers;
        }else if (obtainer === totalFollowers) {
            arrayForFamousCats.push(cat.name);
            return obtainer;
        }

            console.log('Acumulador: ',obtainer);
            
    },0);

    return arrayForFamousCats;
    
}


console.log(findFamousCats(catsExample2));
