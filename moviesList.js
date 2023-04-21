"use strict";

const movies = [
  {
    image: "./images/thething.jpg",
    rating: "8.2",
    title: "The Thing",
    genre: "horror, sci-fi",
    year: "1982",
    director: "John Carpenter",
    cast: "Kurt Russell, Wilford Brimley, Keith David",
    trailer: "https://www.youtube.com/embed/5ftmr17M-a4",
    description:
      "A US research station, Antarctica, early-winter 1982. The base is suddenly buzzed by a helicopter from the nearby Norwegian research station. They are trying to kill a dog that has escaped from their base. After the destruction of the Norwegian chopper the members of the US team fly to the Norwegian base, only to discover them all dead or missing. They do find the remains of a strange creature the Norwegians burned. The Americans take it to their base and deduce that it is an alien life form. After a while it is apparent that the alien can take over and assimilate into other life forms, including humans, and can spread like a virus. This means that anyone at the base could be inhabited by The Thing, and tensions escalate.",
  },
  {
    image: "./images/borat.jpg",
    rating: "7.4",
    title: "Borat",
    genre: "comedy",
    year: "2006",
    director: "Larry Charles",
    cast: "Sacha Baron Cohen, Anthony Hines, Peter Baynham",
    trailer: "https://www.youtube.com/embed/dL6_G1z6ymw",
    description:
      "Borat Sagdiyev is a TV reporter of a popular show in Kazakhstan as Kazakhstan's sixth most famous man and a leading journalist. He is sent from his home to America by his government to make a documentary about American society and culture. Borat takes a course in New York City to understand American humor. While watching Baywatch on TV, Borat discovers how beautiful their women are in the form of C. J. Parker, who was played by actress Pamela Anderson who hails from Malibu, California. He decides to go on a cross-country road trip to California in a quest to make her his wife and take her back to his country.",
  },
  {
    image: "./images/evil dead 2.jpg",
    rating: "7.7",
    title: "Evil Dead 2",
    genre: "horror",
    year: "1987",
    director: "Sam Raimi",
    cast: "Bruce Campbell, Sarah Berry, Dan Hicks",
    trailer: "https://www.youtube.com/embed/6lM3NPeEG24",
    description:
      "Ashley Williams travels to a secluded cabin in the woods with his girlfriend Linda where they find a tape recording of a professor and a book of evil. This unleashes a bunch of evil spirits that constantly terrorize Ash. Meanwhile a journalist comes to the area to study the book of evil. Ash and her end up having to survive this swarm of evil until morning comes.",
  },
  {
    image: "./images/Robocop.jpg",
    rating: "7.6",
    title: "Robocop",
    genre: "thriller, sci-fi",
    year: "1987",
    director: "Paul Verhoeven",
    cast: "Peter Weller, Nancy Allen, Dan O'Herlihy",
    trailer: "https://www.youtube.com/embed/IqvRDhW-XVA",
    description:
      "In a violent, near-apocalyptic Detroit, evil corporation Omni Consumer Products wins a contract from the city government to privatize the police force. To test their crime-eradicating cyborgs, the company leads street cop Alex Murphy into an armed confrontation with crime lord Boddicker so they can use his body to support their untested RoboCop prototype. But when RoboCop learns of the company's nefarious plans, he turns on his masters.",
  },
  {
    image: "./images/hellraiser.jpg",
    rating: "6.9",
    title: "Hellraiser",
    genre: "horror",
    year: "1987",
    director: "Clive Barker",
    cast: "Andrew Robinson, Clare Higgins, Ashley Laurence",
    trailer: "https://www.youtube.com/embed/8mOn4h0lgKQ",
    description:
      "When Kirsty's father, Larry, and stepmother, Julia, move into Larry's childhood home, Kirsty and her boyfriend take a room nearby. Unfortunately for all involved, Larry's house is already occupied: before the family's arrival, Larry's disreputable brother, Frank, used a supernatural puzzle box to summon a gang of other-dimensional demon sadists. Now, Frank requires a series of blood sacrifices to escape the clutches of Pinhead and the cenobites.",
  },
  {
    image: "./images/thewailing.jpg",
    rating: "7.4",
    title: "The Wailing",
    genre: "horror, drama",
    year: "2016",
    director: "Na Hong-jin",
    cast: "Jun Kunimura, Hwang Jung-min, Kwak Do-won",
    trailer: "https://www.youtube.com/embed/g01g2ZhaWi4",
    description:
      "In the small village Goksung in South Korea, police officer Jong-Goo investigates bizarre murders caused by a mysterious disease. His partner relays gossip that a Japanese stranger, who lives in a secluded house in the mountains, would be an evil spirit responsible for the illness. Jong-Goo decides to visit the stranger along with his partner and a young priest who speaks Japanese. They find an altar with a goat head, pictures on the walls of the infected people that died, and an attacking guard dog that prevents their departure until the stranger arrives. Jong-Goo finds one shoe of his beloved daughter, Hyo-jin, in the house of the stranger, and soon she becomes sick. His mother-in-law summons the shaman Il-gwang to save her granddaughter while a mysterious woman tells Jong-Goo that the stranger is responsible. Who might be the demon that is bringing sickness to Goksung?",
  },
  {
    image: "./images/brotherhoodofthewolf.jpg",
    rating: "7.0",
    title: "Brotherhood of the Wolf",
    genre: "action, fantasy, historical",
    year: "2001",
    director: "Christophe Gans",
    cast: "Samuel Le Bihan, Mark Dacascos, Jeremie Renier",
    trailer: "https://www.youtube.com/embed/RAGfNjIzldM",
    description:
      "In 1764 something was stalking the mountains of central France. A 'beast' that pounced on humans and animals with terrible ferocity. Indeed they beast became so notorious that the King of France dispatched envoys to find out what was happening and to kill the creature. By the end, the Beast of Gevaudan had killed over 100 people.To this day, no one is entirely sure what it was, a wolf? a hyena? or something supernatural? The Beast is a popular myth in France, albeit one rooted firmly in reality; somewhat surprisingly it is little known to the outside world, and perhaps incredibly it has never been made into a movie. Until now. Based on the true story of the Beast of the Gevaudan that terrorized France in the eighteenth century, the movie aims to tell first and explain afterwards.",
  },
  {
    image: "./images/threeidiots.jpeg",
    rating: "8.4",
    title: "Three idiots",
    genre: "comedy",
    year: "2009",
    director: "Rajkumar Hirani",
    cast: "Aamir Khan",
    description:
      "Rancho is an engineering student. His two friends. Farhan and Raju, Rancho sees the world in a different way. Rancho goes somewhere one day. And his friends find him. When Rancho is found, he has become one of a great scientist in the world.",
  },
  {
    image:
      "https://media.thecherrypicks.com/images/train_to_busan_.max-1200x1200.format-jpeg.jpegquality-70.jpg",
    rating: "7.6",
    title: "Train to Busan",
    genre: "horror, action",
    year: "2016",
    director: "Sang Ho Yeon",
    cast: "Goong Yoo",
    description:
      "While a zombie virus breaks out in South Korea, passengers struggle to survive on the train from Seoul to Busan.",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/51c1GhIFi8L._AC_UF1000,1000_QL80_.jpg",
    rating: "8.1",
    title: "My neighbor Totoro",
    genre: "animation, family",
    year: "1988",
    director: "Hayo Miyazaki",
    cast: "",
    description:
      "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/51ROjdVz1uL._AC_UF894,1000_QL80_.jpg",
    rating: "8.2",
    title: "Moving Castle",
    genre: "animation, family",
    year: "2004",
    director: "Hayo Miyazaki",
    cast: "",
    description:
      "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
  },
  {
    image:
      "./images/Spider-Man_No_Way_Home_–_The_More_Fun_Stuff_Version_poster.jpeg",
    rating: "8.2",
    title: "Spider-Man: No Way Home",
    genre: "action",
    year: "2021",
    director: "Jon Watts",
    cast: "Tom Holland, Zendaya",
    description:
      "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
  },
  {
    image: "./images/LOR.jfif",
    rating: "9.0",
    title: "The Lord of the Rings: The Return of the King",
    genre: "fantasy",
    year: "2003",
    director: "Peter Jackson",
    cast: "Elijah Wood, Ian McKellen, Orlando Bloom, Cate Blanchett",
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
  },
  {
    image: "./images/schindlers.jfif",
    rating: "9.0",
    title: "Schindler's List",
    genre: "drama, historical",
    year: "1999",
    director: "Steven Spielberg",
    cast: "Liam Neeson, Ben Kingsley, Jonathan Sagall, Ralph Fiennes",
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
  },
  {
    image: "./images/images.jpeg",
    rating: "9.0",
    title: "Memoirs of a Geisha",
    genre: "drama, historical",
    year: "2005",
    director: "Rob Marshall",
    cast: "Zhang Ziy,Ken Watanabe,Michelle Yeoh, Kōji Yakusho",
    description:
      "Memoirs of a Geisha is a 2005 American epic period drama film directed by Rob Marshall and adapted by Robin Swicord from the 1997 novel of the same name by Arthur Golden.",
  },

  {
    image: "/images/download.jpeg",
    rating: "9.0",
    title: "Breakfast at Tiffany's",
    genre: "drama",
    year: "1961",
    director: "	Blake Edwards",
    cast: "	Audrey Hepburn,George Peppard,Patricia Neal",
    description:
      "Breakfast at Tiffany's is a 1961 American romantic comedy film directed by Blake Edwards, written by George Axelrod, adapted from Truman Capote's 1958 novella of the same name, and starring Audrey Hepburn as Holly Golightly, a naïve, eccentric café society girl who falls in love with a struggling writer",
  },

  {
    image: "./images/Coyote_ugly_poster.jpeg",
    rating: "9.0",
    title: "Coyote Ugly",
    genre: "drama",
    year: "2000",
    director: "	David McNally",
    cast: "	Piper Perabo, Adam Garcia, Maria Bella,  Melanie Lynskey ,John Goodman",
    description:
      "As mentioned in the film, the slang term coyote ugly refers to the feeling of waking up after a one-night stand, and discovering that one's arm is underneath someone who is so physically repulsive that one would gladly chew it off without waking the person just so one can get away without being discovered.",
  },
  {
    image: "./images/1.webp",
    rating: "8.2",
    title: "John Wick: 4",
    genre: "triller",
    year: "2023",
    director: "Chad stahelski",
    cast: "Keanu Reeves, Michael Nyqvist, Alfie Allen",
    description:
      "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took his car.",
  },
  {
    image: "./images/movieposter.jpg",
    rating: "9.2",
    title: "Eat Pray Love",
    genre: "romantic drama",
    year: "2010",
    director: "Ryan Murphy",
    cast: "Julia Roberts, Liz Gilbert, Javier Bardem",
    description:
      "Eat, Pray, Love is about what can happen when you claim responsibility for your own contentment and stop trying to live in imitation of society's ideals.",
  },
  {
    image: "./images/unnamed.jpg",
    rating: "9.5",
    title: "Fast&Furious 5",
    genre: "action",
    year: "2011",
    director: "Justin Lin",
    cast: "Vin Diesel, Dominic Toretto, Paul Walker ",
    description:
      "In the film, Dom and Brian, along with Dom's sister Mia (Brewster), recruit a team to help them steal $100 million from drug lord Hernan Reyes (de Almeida).",
  },
];

export default movies;
