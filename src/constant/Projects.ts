import canny from "@/src/assets/projects/canny.png";
import chessScene from "@/src/assets/projects/chess-scene.png";
import search_algorithm_a_star from "@/src/assets/projects/search_algorithm_a_star.png";
import sudoku_with_solver from "@/src/assets/projects/sudoku_with_solver.png";
import { Project } from "@/src/model/Project";

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

export const ImageManipulation : Project =  {
    imgUrl: canny,
    title: "Image Manipulation",
    technologyMain: "C++ / QT",
    description: `Assignments during the computer graphics course to implement preprocessing algorithms of image manipulation to detect objects in images used by libraries such as OpenCV, e.g. the Canny algorithm.`,
    codeUrl: "https://github.com/schehat/image_manipulation",
    demoUrl: "",
    technologyAll: ["C++", "QT"]
}

export const SudokuWithSolver : Project =  {
    imgUrl: sudoku_with_solver,
    title: "Sudoku With Solver",
    technologyMain: "Python / Pygame",
    description: `Implemented Sudoku in Python and Pygame and added a solver with recursion for fixed arrangement of numbers.
    controls:
    - left mouse: select cell
    - digit keys: select a digit
    - space: enter digit
    - right click: reset entered digit e.g. digit is wrong
    - s: solve sudoku`,
    codeUrl: "https://github.com/schehat/pygame_projects",
    demoUrl: "",
    technologyAll: ["Python", "Pygame"]
}

export const SearchAlgorithmAStar: Project = {
    imgUrl: search_algorithm_a_star,
    title: "Search Algorithm A*",
    technologyMain: "Python / Pygame",
    description: `Implemented the search algorithm A* in Python and Pygame.\n
    controls:\n
    - left mouse: first start (orange square), second end (blue square), third obstacles (black squares)\n
    - right mouse: remove blocks\n
    - space: start algorithm\n
    - c: clear grid`,
    codeUrl: "https://github.com/schehat/pygame_projects",
    demoUrl: "",
    technologyAll: ["Python", "Pygame"],
  };
  