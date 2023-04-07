import chessScene from "@/src/assets/projects/chess-scene.png";
import propertyImg from "@/src/assets/projects/property.jpg";
import { Project } from "@/src/model/Project";

export const Property : Project =  {
    imgUrl: propertyImg,
    title: "Property Finders",
    technologyMain: "React JS / Tailwind / Firebase",
    description: `This app was built using React JS and is hosted on Firebase. Users
    are able to search properties based on an Address, City, or ZIP code
    to retrieve a list of active properties currently for sale. You will
    be able to view property information as well as the specific
    location of the property integrated with the Google Maps API. User
    authentication is available so you can signup and signin to your
    account with an email address in order to save your favorite
    properties. This is made possible with Zillow API.`,
    codeUrl: "string",
    demoUrl: "string",
    technologyAll: ["React", "Tailwind", "Javascript", "Firebase", "Google API", "Zillow API"]
}

export const ChessScene : Project =  {
    imgUrl: chessScene,
    title: "Chess Scene",
    technologyMain: "C++ / QT / OpenGL",
    description: `Created a chess scene with QT and OpenGL during the computer graphics 1 course at the university Hochschule Hannover. 
    Focusing on the computer graphics pipeline and rendering a scene with geometric objects.

    Runs on Ubuntu 20.04. The GPU has to support OpenGL 3.3.`,
    codeUrl: "https://github.com/schehat/chess_scene",
    demoUrl: "",
    technologyAll: ["C++", "QT", "OpenGL"]
}

