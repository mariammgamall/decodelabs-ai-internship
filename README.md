# Decodelabs AI Internship Project Hub

Welcome to the master repository for the **Decodelabs AI Internship** portfolio. This repository hosts a series of three progressively complex AI projects, demonstrating growth from simple rule-based conversational interfaces to machine learning classification pipelines and real-time vector-based recommendation systems.

---

## 📂 Project Repository Directory

| Project | Folder Link | Domain / Technology Stack | Key Algorithms & Methods |
| :--- | :--- | :--- | :--- |
| **Project 1** | [Project 1: Cosmic Navigator](file:///d:/Projects/Internships/Decodelabs/Project%201) | Python 3, CLI, ANSI Escape Colors | Rule-based lexical analysis, keyword matching, state-based contextual flow |
| **Project 2** | [Project 2: Supervised Data Classification](file:///d:/Projects/Internships/Decodelabs/Project%202) | Python 3, Scikit-Learn, Pandas, Matplotlib | Random Forest Classifier, Feature Scaling, Confusion Matrix Heatmaps |
| **Project 3** | [Project 3: Interactive Recommendation Engine](file:///d:/Projects/Internships/Decodelabs/Project%203) | HTML5, CSS3, Vanilla ES6 JavaScript | Jaccard Similarity, 3D Euclidean Vector Distance, Multi-attribute Weighted Fusion |

---

## 🌌 Project 1: Nova — Cosmic Navigator Chatbot

A professionally structured **Rule-Based AI Chatbot** written in Python from the ground up without external dependencies. Named **Nova**, this chatbot acts as a space navigator guiding users through contextual sectors using state management.

### Key Characteristics
* **Input Sanitization & Normalization**: Sanitizes input strings, handles irregular spacing, and trims punctuation.
* **Lexical Keyword Matching**: Integrates a structural Python dictionary lookup for semantic intents.
* **Multi-Turn State Machine**: Transitions users into active space sectors (e.g. searching stars, planets, or black holes) and exits cleanly back to Earth command.
* **Console Theming**: Uses retro-styled ANSI escape codes to create a terminal dashboard user experience.

### File References
* Main Source: [chatbot.py](file:///d:/Projects/Internships/Decodelabs/Project%201/chatbot.py)
* Detailed Guide: [Project 1 README](file:///d:/Projects/Internships/Decodelabs/Project%201/README.md)

### Preview
![Project 1 Welcome Chat](Project%201/screenshots/screenshot_welcome.png)

---

## 📊 Project 2: Iris Supervised Data Classification Pipeline

A supervised learning model pipeline designed to classify species of the classic Iris dataset. The model reads physical measurements of iris flowers and classifies them into Setosa, Versicolor, or Virginica.

### Key Characteristics
* **Exploratory Data Analysis (EDA)**: Reports dataset dimensions, counts, missing values, and target distributions.
* **Preprocessing Pipeline**: Employs `StandardScaler` to normalize dimensions and splits data using a stratified 80/20 train/test distribution.
* **Random Forest Model**: Trains a 100-estimator `RandomForestClassifier` with deterministic seeds.
* **Accuracy metrics**: Achieves **90.00% overall accuracy** on the test subset.
* **Performance Graphs**: Exports a Confusion Matrix Heatmap and Feature Importance chart.

### File References
* Main Source: [classification_model.py](file:///d:/Projects/Internships/Decodelabs/Project%202/classification_model.py)
* Detailed Guide: [Project 2 README](file:///d:/Projects/Internships/Decodelabs/Project%202/README.md)

### Preview
![Project 2 Confusion Matrix Heatmap](Project%202/screenshots/confusion_matrix.png)

---

## 🧠 Project 3: Synapse AI — Interactive Recommendation Engine

An interactive, high-fidelity browser-based recommendation engine. It takes category interests and custom slider inputs, maps them, and returns matching items ranked by mathematically-derived percentage scores.

### Key Characteristics
* **Jaccard Similarity Index**: Computes overlapping sets of user-selected genres ($G$) and moods ($M$):
  $$J(U, I) = \frac{|U \cap I|}{|U \cup I|}$$
* **Normalized Euclidean Distance**: Determines how close user attribute sliders (Pace, Complexity, Era) match items in 3-dimensional coordinate space:
  $$d(V_U, V_I) = \sqrt{(p_U - p_I)^2 + (c_U - c_I)^2 + (e_U - e_I)^2}$$
* **Mathematical Breakdowns**: Side-by-side math visualizer graphs detailing the calculations.
* **Database Manager**: Connects custom item additions to browser persistent `localStorage`.
* **Assertion Tests**: Built-in 5-assertion browser test suite verifying calculations.

### File References
* Web Structure: [index.html](file:///d:/Projects/Internships/Decodelabs/Project%203/index.html)
* Logic Script: [app.js](file:///d:/Projects/Internships/Decodelabs/Project%203/app.js)
* Visual Styles: [style.css](file:///d:/Projects/Internships/Decodelabs/Project%203/style.css)
* Detailed Guide: [Project 3 README](file:///d:/Projects/Internships/Decodelabs/Project%203/README.md)

### Preview
![Project 3 Main Dashboard](Project%203/screenshots/01a_recommendations_dashboard.png)

---

## 🛠️ Global Execution & Setup

### For Python scripts (Project 1 & Project 2):
Ensure Python 3 is installed. Move to the directory and run commands:
```powershell
# Run Chatbot
python "Project 1/chatbot.py"

# Run ML Pipeline
python "Project 2/classification_model.py"
```

### For Web engines (Project 3):
Run a static server at the repository root and navigate to the project directory:
```powershell
python -m http.server 8000
```
Then visit `http://localhost:8000/Project 3/` in your browser.
