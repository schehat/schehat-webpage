import anpr from "@/src/assets/projects/anpr.png";
import chess_scene from "@/src/assets/projects/chess_scene.png";
import decision_tree from "@/src/assets/projects/decision_tree.png";
import flappy_bird from "@/src/assets/projects/flappy_bird.png";
import image_manipulation from "@/src/assets/projects/image_manipulation.png";
import movie_database from "@/src/assets/projects/movie_database.png";
import sudoku_with_solver from "@/src/assets/projects/sudoko_with_solver.png";
import the_worlds_hardest_game from "@/src/assets/projects/the_worlds_hardest_game.png";
import { Project } from "@/src/model/Project";

export const ANPR : Project =  {
  imgUrl: anpr,
  title: "Automatic Number-Plate Recognition",
  technologyMain: "Python / TensorFlow / PyTorch",
  description: `Perform Number Plate Recognition with the TensorFlow Object Detection API 
  and a PyTorch OCR model for detecting the text in the plate. With real time through the webcam.`,
  codeUrl: "https://github.com/schehat/automatic_number_plate_recognition",
  demoUrl: "",
  technologyAll: ["Python", "TensorFlow", "PyTorch", "OpenCV", "NumPy", "Matplotlib"]
}

export const ChessScene : Project =  {
    imgUrl: chess_scene,
    title: "Chess Scene",
    technologyMain: "C++ / QT / OpenGL",
    description: `Created a chess scene with QT and OpenGL during the computer graphics course. 
    Focusing on the computer graphics pipeline and rendering a scene with geometric objects - polygons.`,
    codeUrl: "https://github.com/schehat/chess_scene",
    demoUrl: "",
    technologyAll: ["C++", "QT", "OpenGL"]
}

export const FlappyBird: Project = {
  imgUrl: flappy_bird,
  title: "Flappy Bird AI",
  technologyMain: "NEAT / Python / Pygame",
  description: `Implemented an AI to the Flappy Bird game with Python and Pygame. The AI is follows the NeuroEvolution of Augmented Topologies (NEAT) evolutionary algorithm that creates artificial neural networks. Follows the concept of survival of the fittest.`,
  codeUrl: "https://github.com/schehat/deep_learning/tree/main/neat_algorithm/flappy_bird",
  demoUrl: "",
  technologyAll: ["NEAT", "Python", "Pygame"],
};

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

export const DecisionTree : Project =  {
  imgUrl: decision_tree,
  title: "Binary Classification With Medical Data",
  technologyMain: "Python / scikit-learn / pandas",
  description: `With medical dataset doing binary classification with a decision tree to
   to predict hearth diseases (HD) with scikit-learn and pandas.`,
  codeUrl: "https://github.com/schehat/decision_tree",
  demoUrl: "",
  technologyAll: ["scikit-learn", "pandas", "Matplotlib"]
}

export const MovieDatabase: Project = {
  imgUrl: movie_database,
  title: "Movie Database",
  technologyMain: "Java / Hibernate / Jakarta",
  description: `A database application for movie management realized in Java with Swing, Hibernate and Jakarta during databases course.`,
  codeUrl: "https://github.com/schehat/movie_database",
  demoUrl: "",
  technologyAll: ["Java", "Hibernate", "Jakarta", "Swing"],
};

export const SudokuWithSolver : Project =  {
  imgUrl: sudoku_with_solver,
  title: "Sudoku With Solver",
  technologyMain: "Python / Pygame",
  description: `Creating a Sudoku game with Python and Pygame and using backtracking to solve it`,
  codeUrl: "https://github.com/schehat/pygame_projects/tree/main/sudoko_with_solver",
  demoUrl: "",
  technologyAll: ["Python", "Pygame"]
}

export const TheWorldHardestGame: Project = {
  imgUrl: the_worlds_hardest_game,
  title: "The World Hardest Game",
  technologyMain: "Java / JavaFX",
  description: `A variation of the popular browser game The World Hardest Game in a matrix version implemented in Java with JavaFX.`,
  codeUrl: "https://github.com/schehat/the_worlds_hardest_game",
  demoUrl: "",
  technologyAll: ["Java", "JavaFX"],
};