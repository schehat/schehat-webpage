import basic_image_classification from "@/src/assets/projects/basic_image_classification.png";
import chessScene from "@/src/assets/projects/chess-scene.png";
import flappy_bird from "@/src/assets/projects/flappy_bird.png";
import image_manipulation from "@/src/assets/projects/image_manipulation.png";
import movie_database from "@/src/assets/projects/movie_database.png";
import search_algorithm_a_star from "@/src/assets/projects/search_algorithm_a_star.png";
import sudoku_with_solver from "@/src/assets/projects/sudoku_with_solver.png";
import the_worlds_hardest_game from "@/src/assets/projects/the_worlds_hardest_game.png";
import { Project } from "@/src/model/Project";



export const ChessScene : Project =  {
    imgUrl: chessScene,
    title: "Chess Scene",
    technologyMain: "C++ / QT / OpenGL",
    description: `Created a chess scene with QT and OpenGL during the computer graphics course. 
    Focusing on the computer graphics pipeline and rendering a scene with geometric objects - polygons.`,
    codeUrl: "https://github.com/schehat/chess_scene",
    demoUrl: "",
    technologyAll: ["C++", "QT", "OpenGL"]
}

export const ImageManipulation : Project =  {
    imgUrl: image_manipulation,
    title: "Image Manipulation",
    technologyMain: "C++ / QT",
    description: `Assignments during the computer graphics course to implement preprocessing algorithms
     of image manipulation to detect objects in images used by libraries such as OpenCV, e.g. the Canny algorithm.`,
    codeUrl: "https://github.com/schehat/image_manipulation",
    demoUrl: "",
    technologyAll: ["C++", "QT"]
}

export const SudokuWithSolver : Project =  {
    imgUrl: sudoku_with_solver,
    title: "Sudoku With Solver",
    technologyMain: "Python / Pygame",
    description: `Implemented Sudoku in Python and Pygame and added a solver
     with recursion for fixed arrangement of numbers.`,
    codeUrl: "https://github.com/schehat/pygame_projects",
    demoUrl: "",
    technologyAll: ["Python", "Pygame"]
}

export const SearchAlgorithmAStar: Project = {
    imgUrl: search_algorithm_a_star,
    title: "Search Algorithm A*",
    technologyMain: "Python / Pygame",
    description: `Implemented the search algorithm A* in Python and Pygame.`,
    codeUrl: "https://github.com/schehat/pygame_projects",
    demoUrl: "",
    technologyAll: ["Python", "Pygame"],
  };

export const MovieDatabase: Project = {
  imgUrl: movie_database,
  title: "Movie Database",
  technologyMain: "Java / Hibernate / Jakarta",
  description: `A database application for movie management realized in Java with Swing, Hibernate and Jakarta during databases course.`,
  codeUrl: "https://github.com/schehat/movie_database",
  demoUrl: "",
  technologyAll: ["Java", "Hibernate", "Jakarta", "Swing"],
};

export const TheWorldHardestGame: Project = {
  imgUrl: the_worlds_hardest_game,
  title: "The World Hardest Game",
  technologyMain: "Java / JavaFX",
  description: `A variation of the popular browser game The World Hardest Game in a matrix version implemented in Java with JavaFX.`,
  codeUrl: "https://github.com/schehat/the_worlds_hardest_game",
  demoUrl: "",
  technologyAll: ["Java", "JavaFX"],
};
export const FlappyBird: Project = {
  imgUrl: flappy_bird,
  title: "Flappy Bird AI",
  technologyMain: "NEAT / Python / Pygame",
  description: `Implemented an AI to the Flappy Bird game with Python and Pygame. The AI is follows the NeuroEvolution of Augmented Topologies (NEAT) evolutionary algorithm that creates artificial neural networks. Follows the concept of survival of the fittest.`,
  codeUrl: "https://github.com/schehat/deep_learning/tree/main/neat_algorithm/flappy_bird",
  demoUrl: "",
  technologyAll: ["NEAT", "Python", "Pygame"],
};

export const BasicImageClassification: Project = {
  imgUrl: basic_image_classification,
  title: "Neural Network - Basic Image Classification",
  technologyMain: "Python / TensorFlow / NumPy / Matplotlib",
  description: `Tested TensorFlow out and created a basic neural network to classify Images from the Fashion MNIST dataset`,
  codeUrl: "https://github.com/schehat/deep_learning/blob/main/tensorflow/nn_basic_image_classification.ipynb",
  demoUrl: "",
  technologyAll: ["Python", "TensorFlow", "NumPy", "Matplotlib"],
};

