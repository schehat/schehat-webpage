import propertyImg from "@/src/assets/projects/property.jpg";
import { Project } from "@/src/model/Project";

const Property : Project =  {
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

export default Property