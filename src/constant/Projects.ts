import ai_in_education from "@/src/assets/projects/ai_in_education.png";
import anpr from "@/src/assets/projects/anpr.png";
import chess_scene from "@/src/assets/projects/chess_scene.png";
import cnn_image_segmentation from "@/src/assets/projects/cnn_image_segmentation.png";
import emotion_classification_bert from "@/src/assets/projects/emotion_classification_bert.png";
import flappy_bird from "@/src/assets/projects/flappy_bird.png";
import genetic_algorithm_AFVRP from "@/src/assets/projects/genetic_algorithm_AFVRP.png";
import seq_to_seq_model from "@/src/assets/projects/seq_to_seq_model.png";
import single_cell_EDA from "@/src/assets/projects/single_cell_EDA.png";
import the_worlds_hardest_game from "@/src/assets/projects/the_worlds_hardest_game.png";
import { Project } from "@/src/model/Project";

export const EmotionClassificationBERT: Project = {
  imgUrl: emotion_classification_bert,
  title: "Emotion Classification with BERT",
  technologyMain: "Python / Transformers",
  description: `Fine-tuned a pre-trained BERT model for multi-class emotion classification on the dair-ai/emotion dataset from Hugging Face.`,
  codeUrl: "https://github.com/schehat/",
  demoUrl: "",
  technologyAll: ["Python", "PyTorch", "Transformers", "Hugging Face", "pandas", "Matplotlib"]
}

export const SeqToSeqModel: Project = {
  imgUrl: seq_to_seq_model,
  title: "Language Model for Machine Translation",
  technologyMain: "Python / Seq2Seq",
  description: `Developed a sequence-to-sequence model in PyTorch for English-to-German translation with Hugging Face.
  Built data preprocessing pipelines and evaluated model performance`,
  codeUrl: "https://github.com/schehat/",
  demoUrl: "",
  technologyAll: ["Python", "Seq2Seq", "Hugging Face"]
}

export const CNNImageSegmentation : Project =  {
  imgUrl: cnn_image_segmentation,
  title: "Image Segmentation with Mask R-CNN",
  technologyMain: "Python / PyTorch",
  description: `Fine-tuned a pre-trained Mask R-CNN model for pixel-wise pet image segmentation and implemented custom data augmentation pipelines and collate functions.`,
  codeUrl: "https://github.com/schehat/",
  demoUrl: "",
  technologyAll: ["Python", "PyTorch", "torchvision", "NumPy", "Matplotlib"]
}

export const AIInEducation : Project =  {
  imgUrl: ai_in_education,
  title: "AI in Education: Predicting student dropout and academic success",
  technologyMain: "Python / scikit-learn / pandas",
  description: `Performed end-to-end data analysis on structured datasets using Python and scikit-learn.
   Applied feature engineering, model selection and cross-validation to identify key risk factors and support data-driven decision making.`,
  codeUrl: "https://github.com/schehat/AI-in-Education",
  demoUrl: "",
  technologyAll: ["Python", "scikit-learn", "pandas", "Matplotlib"]
}

export const SingleCellEDA : Project =  {
  imgUrl: single_cell_EDA,
  title: "Single-Cell RNA-Seq Analysis - Genomic Data Science (EDA)",
  technologyMain: "Python / scikit-learn",
  description: `Conducted exploratory data analysis on a large-scale scRNA-seq dataset using Python and Jupyter Notebook.
  Identified cell populations, analyzed per-cluster gene expression patterns, and evaluated perturbation effects`,
  codeUrl: "https://github.com/schehat/ml_in_genomic_data_science",
  demoUrl: "",
  technologyAll: ["Python", "scikit-learn", "pandas", "Matplotlib"]
}

export const GeneticAlgorithmAFVRP : Project =  {
  imgUrl: genetic_algorithm_AFVRP,
  title: "Genetic Algorithm for the Agricultural Fleet Vehicle Routing Problem",
  technologyMain: "Python",
  description: `Designed a hybrid optimization algorithm in Python to solve a real-world logistics and scheduling problem.
  Evaluated performance improvements and compared alternative routing strategies.`,
  codeUrl: "https://github.com/schehat/genetic_algorithm_for_vehicle_routing_problem",
  demoUrl: "",
  technologyAll: ["Python", "NumPy", "Matplotlib"]
}

export const ANPR : Project =  {
  imgUrl: anpr,
  title: "Automatic Number-Plate Recognition",
  technologyMain: "Python / TensorFlow / OpenCV",
  description: `Perform Number Plate Recognition with the TensorFlow Object Detection API 
  and a PyTorch OCR model for detecting the text in the plate. With real time through the webcam.`,
  codeUrl: "https://github.com/schehat/automatic_number_plate_recognition",
  demoUrl: "",
  technologyAll: ["Python", "TensorFlow", "OpenCV", "NumPy", "Matplotlib"]
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

export const TheWorldHardestGame: Project = {
  imgUrl: the_worlds_hardest_game,
  title: "The World Hardest Game",
  technologyMain: "Java / JavaFX",
  description: `A variation of the popular browser game The World Hardest Game in a matrix version implemented in Java with JavaFX.`,
  codeUrl: "https://github.com/schehat/the_worlds_hardest_game",
  demoUrl: "",
  technologyAll: ["Java", "JavaFX"],
};
