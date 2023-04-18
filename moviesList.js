"use strict";

const movies = [
  {
    image: "./images/thething.jpg",
    rating: "8.2",
    title: "The Thing",
    year: "1982",
    director: "John Carpenter",
    cast: "Kurt Russell, Wilford Brimley, Keith David",
    description:
      "A US research station, Antarctica, early-winter 1982. The base is suddenly buzzed by a helicopter from the nearby Norwegian research station. They are trying to kill a dog that has escaped from their base. After the destruction of the Norwegian chopper the members of the US team fly to the Norwegian base, only to discover them all dead or missing. They do find the remains of a strange creature the Norwegians burned. The Americans take it to their base and deduce that it is an alien life form. After a while it is apparent that the alien can take over and assimilate into other life forms, including humans, and can spread like a virus. This means that anyone at the base could be inhabited by The Thing, and tensions escalate.",
  },
  {
    image: "./images/borat.jpg",
    rating: "7.4",
    title: "Borat",
    year: "2006",
    director: "Larry Charles",
    cast: "Sacha Baron Cohen, Anthony Hines, Peter Baynham",
    description:
      "Borat Sagdiyev is a TV reporter of a popular show in Kazakhstan as Kazakhstan's sixth most famous man and a leading journalist. He is sent from his home to America by his government to make a documentary about American society and culture. Borat takes a course in New York City to understand American humor. While watching Baywatch on TV, Borat discovers how beautiful their women are in the form of C. J. Parker, who was played by actress Pamela Anderson who hails from Malibu, California. He decides to go on a cross-country road trip to California in a quest to make her his wife and take her back to his country.",
  },
  {
    image: "./images/evil dead 2.jpg",
    rating: "7.7",
    title: "Evil Dead 2",
    year: "1987",
    director: "Sam Raimi",
    cast: "Bruce Campbell, Sarah Berry, Dan Hicks",
    description:
      "Ashley Williams travels to a secluded cabin in the woods with his girlfriend Linda where they find a tape recording of a professor and a book of evil. This unleashes a bunch of evil spirits that constantly terrorize Ash. Meanwhile a journalist comes to the area to study the book of evil. Ash and her end up having to survive this swarm of evil until morning comes.",
  },
  {
    image: "./images/Robocop.jpg",
    rating: "7.6",
    title: "Robocop",
    year: "1987",
    director: "Paul Verhoeven",
    cast: "Peter Weller, Nancy Allen, Dan O'Herlihy",
    description:
      "In a violent, near-apocalyptic Detroit, evil corporation Omni Consumer Products wins a contract from the city government to privatize the police force. To test their crime-eradicating cyborgs, the company leads street cop Alex Murphy into an armed confrontation with crime lord Boddicker so they can use his body to support their untested RoboCop prototype. But when RoboCop learns of the company's nefarious plans, he turns on his masters.",
  },
  {
    image: "./images/hellraiser.jpg",
    rating: "6.9",
    title: "Hellraiser",
    year: "1987",
    director: "Clive Barker",
    cast: "Andrew Robinson, Clare Higgins, Ashley Laurence",
    description:
      "When Kirsty's father, Larry, and stepmother, Julia, move into Larry's childhood home, Kirsty and her boyfriend take a room nearby. Unfortunately for all involved, Larry's house is already occupied: before the family's arrival, Larry's disreputable brother, Frank, used a supernatural puzzle box to summon a gang of other-dimensional demon sadists. Now, Frank requires a series of blood sacrifices to escape the clutches of Pinhead and the cenobites.",
  },
  {
    image: "./images/thewailing.jpg",
    rating: "7.4",
    title: "The Wailing",
    year: "2016",
    director: "Na Hong-jin",
    cast: "Jun Kunimura, Hwang Jung-min, Kwak Do-won",
    description:
      "In the small village Goksung in South Korea, police officer Jong-Goo investigates bizarre murders caused by a mysterious disease. His partner relays gossip that a Japanese stranger, who lives in a secluded house in the mountains, would be an evil spirit responsible for the illness. Jong-Goo decides to visit the stranger along with his partner and a young priest who speaks Japanese. They find an altar with a goat head, pictures on the walls of the infected people that died, and an attacking guard dog that prevents their departure until the stranger arrives. Jong-Goo finds one shoe of his beloved daughter, Hyo-jin, in the house of the stranger, and soon she becomes sick. His mother-in-law summons the shaman Il-gwang to save her granddaughter while a mysterious woman tells Jong-Goo that the stranger is responsible. Who might be the demon that is bringing sickness to Goksung?",
  },
  {
    image: "./images/brotherhoodofthewolf.jpg",
    rating: "7.0",
    title: "Brotherhood of the Wolf",
    year: "2001",
    director: "Christophe Gans",
    cast: "Samuel Le Bihan, Mark Dacascos, Jeremie Renier",
    description:
      "In 1764 something was stalking the mountains of central France. A 'beast' that pounced on humans and animals with terrible ferocity. Indeed they beast became so notorious that the King of France dispatched envoys to find out what was happening and to kill the creature. By the end, the Beast of Gevaudan had killed over 100 people.To this day, no one is entirely sure what it was, a wolf? a hyena? or something supernatural? The Beast is a popular myth in France, albeit one rooted firmly in reality; somewhat surprisingly it is little known to the outside world, and perhaps incredibly it has never been made into a movie. Until now. Based on the true story of the Beast of the Gevaudan that terrorized France in the eighteenth century, the movie aims to tell first and explain afterwards.",
  },
  {
    image: "./images/threeidiots.jpeg",
    rating: "8.4",
    title: "Three idiots",
    year: "2009",
    director: "Rajkumar Hirani",
    cast: "Aamir Khan",
    description:
      "Rancho is an engineering student. His two friends. Farhan and Raju, Rancho sees the world in a different way. Rancho goes somewhere one day. And his friends find him. When Rancho is found, he has become one of a great scientist in the world.",
  },
  {
    image:
      "./images/Spider-Man_No_Way_Home_–_The_More_Fun_Stuff_Version_poster.jpeg",
    rating: "8.2",
    title: "Spider-Man: No Way Home",
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
    year: "1999",
    director: "Steven Spielberg",
    cast: "Liam Neeson, Ben Kingsley, Jonathan Sagall, Ralph Fiennes",
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
  },
];

export default movies;
