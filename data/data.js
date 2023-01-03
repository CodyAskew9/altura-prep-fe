import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'Cody',
            password:'999',
            checkedOut: []
        }

    ],
   books:[
    {
        title: "Duck on a Boat",
        author: 'Sabrina Roberts',
        isbn: 9781338265446,
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "The Elephant at the Beach",
        author: 'Alec Young',
        isbn: 978133826547,
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "The Race",
        author: '',
        isbn: 0,
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "Cats",
        author: '',
        isbn: 0,
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "The Penguins",
        author: 'Cynthia Parker',
        isbn: 9781338265439,
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "Summer Camp",
        author: 'Elezabeth Spence',
        isbn: 9781338265514,
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "This Fox",
        author: 'Marc Jordan',
        isbn: 9781338265545,
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "Rabbits GO!",
        author: 'Scott A taylor',
        isbn: 9781338265620,
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "The Snow",
        author: 'Jack Crosby',
        isbn: 9781338265415,
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "I Like the Seasons",
        author: 'Ireana Martin',
        isbn: 9781338236859,
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "The Artist",
        author: 'Alex Ives',
        isbn: 9781338236750,
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "We Play Together",
        author: 'Wiley Blevins',
        isbn: 9781338236729,
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "What Insects Do",
        author: 'Michiko Lambearde',
        isbn: 9781338236743,
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "Chet Rides Home",
        author: 'Cynthia Rothman',
        isbn: 9781338262711,
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "Bears! Bears! Bears!",
        author: 'Max Bank',
        isbn: 9781338236736,
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "The Hen Sat",
        author: 'Pam Lewis',
        isbn: 9780395739853,
        level: "A",
        image: "",
        count: 1,

    },
    {
        title: "Pancakes for Breakfast",
        author: 'Tomie DePaola',
        isbn: 9781328710604,
        level: "A",
        image: "",
        count: 1,

    },
    {
        title: "Chalk",
        author: 'Bill Thomson',
        isbn: 9780761455264,
        level: "A",
        image: "",
        count: 1,

    },
    {
        title: "The Farmer",
        author: 'Danny Benjamin',
        isbn: 978133823687,
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "Elephants",
        author: 'J. C. Harnell',
        isbn: 9781338236880,
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "Mix it Up",
        author: 'Benjamin Reed',
        isbn: 9781338236842,
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "My Kitten",
        author: 'Jane Michelle',
        isbn: 9781338236866,
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "I'm a Lot of Sometimes!",
        author: 'Jack Guinan',
        isbn: 9781634401777,
        level: "B",
        image: "",
        count: 1,

    },
    {
        title: "Dinosaur Days",
        author: 'Joyce Milton',
        isbn: 9780394870236,
        level: "B",
        image: "",
        count: 1,

    },
    {
        title: "Have You Seen My Cat?",
        author: 'Eric Carle',
        isbn: 978068982310,
        level: "B",
        image: "",
        count: 1,

    },
    {
        title: "Ducks in Muck",
        author: 'Lori Haskins',
        isbn: 0,
        level: "B",
        image: "",
        count: 1,

    },
    {
        title: "Games",
        author: '',
        isbn: 0,
        level: "B",
        image: "",
        count: 6,

    },
    {
        title: "The Windy Day",
        author: 'Emily Banks',
        isbn: 987133823897,
        level: "B",
        image: "",
        count: 6,

    },
    {
        title: "Rain! Rain! Go Away!",
        author: 'Lucy Howard',
        isbn: 9781338253689,
        level: "B",
        image: "",
        count: 6,

    },
    {
        title: "The Shape Hunt",
        author: 'M. D. Lee',
        isbn: 9781338253702,
        level: "B",
        image: "",
        count: 6,

    },
    {
        title: "How We Roll",
        author: 'Mackie Dougal',
        isbn: 9781338253672,
        level: "B",
        image: "",
        count: 6,

    },
    {
        title: "Look at Me!",
        author: 'Christine Veronica',
        isbn: 9781338253719,
        level: "B",
        image: "",
        count: 6,

    },
    {
        title: "Trains Go! Planes Fly!",
        author: 'Julie Micheals',
        isbn: 9781338253665,
        level: "B",
        image: "",
        count: 6,

    },
    {
        title: "Color it Orange",
        author: 'Kevin Fulton',
        isbn: 9781338253658,
        level: "B",
        image: "",
        count: 6,

    },
    {
        title: "Sports",
        author: 'Ruth Mattison',
        isbn: 9781584535324,
        level: "C",
        image: "",
        count: 1,

    },
    {
        title: "The Zoo Book",
        author: '',
        isbn: 0,
        level: "C",
        image: "",
        count: 1,

    },
    {
        title: "My Dog Jet",
        author: '',
        isbn: 0,
        level: "C",
        image: "",
        count: 1
    
    },
    {
        title: "The Ocean",
        author: '',
        isbn: 0,
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Baby Kermit's Opposites",
        author: '',
        isbn: 0,
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Muppet Babies Word Book",
        author: '',
        isbn: 0,
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Things that Go Air and Sea",
        author: '',
        isbn: 0,
        level: "C",
        image: "",
        count: 1
    
    },
    {
        title: "Things that Go on Land",
        author: '',
        isbn: 0,
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Olivia's Opposites",
        author: '',
        isbn: 0,
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Lightning's Feelings",
        author: '',
        isbn: 0,
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Nat Geo Kids The Best Pet",
        author: '',
        isbn: 0,
        level: "C",
        image: "",
        count: 1
    
    },
    {
        title: "Nat Geo Kids Lots of Spots",
        author: '',
        isbn: 0,
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Nat Geo Kids Bowels",
        author: '',
        isbn: 0,
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Nat Geo Kids Animal KIngdom Bug Hunt",
        author: '',
        isbn: 0,
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Water is Everywhere",
        author: '',
        isbn: 0,
        level: "C",
        image: "",
        count: 6,
    
    },
    {
        title: "Green Means Go",
        author: '',
        isbn: 0,
        level: "C",
        image: "",
        count: 6,
    
    },
    {
        title: "Let's Play Soccer",
        author: '',
        isbn: 0,
        level: "C",
        image: "",
        count: 6,
    
    },
    {
        title: "The Bug Dance",
        author: '',
        isbn: 0,
        level: "C",
        image: "",
        count: 6,
    
    },
    {
        title: "See My Stripes",
        author: '',
        isbn: 0,
        level: "C",
        image: "",
        count: 6,
    
    },
    {
        title: "If I Could Build a House",
        author: '',
        isbn: 0,
        level: "C",
        image: "",
        count: 6,
    
    },
    {
        title: "So Much Fun!",
        author: '',
        isbn: 0,
        level: "C",
        image: "",
        count: 6,
    
    },
    {
        title: "Cool Kangaroo",
        author: '',
        isbn: 0,
        level: "C",
        image: "",
        count: 6,
    
    },
    {
        title: "Alfie and Gus",
        author: '',
        isbn: 0,
        level: "C",
        image: "",
        count: 6,
    
    },
    {
        title: "Forest Fun",
        author: '',
        isbn: 0,
        level: "C",
        image: "",
        count: 6,
    
    },
]
}

export default data