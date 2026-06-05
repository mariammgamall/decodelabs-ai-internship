"""
Supervised Learning: Iris Flower Classification Model
------------------------------------------------------
This script loads the classic Iris dataset, performs exploratory data analysis (EDA),
preprocesses the features, splits the data into training/testing sets, trains a
Random Forest Classifier, and evaluates its performance with detailed metrics and plots.
"""

import os
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix, ConfusionMatrixDisplay

def run_classification_pipeline():
    print("=" * 60)
    print("       IRIS FLOWER CLASSIFICATION PIPELINE")
    print("=" * 60)
    
    # -------------------------------------------------------------
    # 1. LOAD DATASET
    # -------------------------------------------------------------
    print("\n[1/5] Loading Iris dataset...")
    iris = load_iris()
    
    # Create a Pandas DataFrame for easy analysis
    df = pd.DataFrame(data=iris.data, columns=iris.feature_names)
    df['target'] = iris.target
    
    # Mapping numeric target values to human-readable class names
    target_names_map = {i: name for i, name in enumerate(iris.target_names)}
    df['class_name'] = df['target'].map(target_names_map)
    
    # -------------------------------------------------------------
    # 2. EXPLORATORY DATA ANALYSIS (EDA)
    # -------------------------------------------------------------
    print("\n[2/5] Performing Exploratory Data Analysis (EDA)...")
    print("-" * 50)
    print(f"Dataset Shape: {df.shape[0]} rows, {df.shape[1]} columns")
    print("\nFirst 5 rows of the dataset:")
    print(df.head())
    
    print("\nFeature names:")
    for col in iris.feature_names:
        print(f" - {col}")
        
    print("\nTarget classes:")
    for idx, name in target_names_map.items():
        print(f" - Class {idx}: {name}")
        
    print("\nClass Distribution:")
    class_counts = df['class_name'].value_counts()
    for class_name, count in class_counts.items():
        print(f" - {class_name}: {count} samples ({count/len(df)*100:.1f}%)")
        
    print("\nBasic Statistical Summary:")
    print(df[iris.feature_names].describe().T)
    
    # Check for missing values
    missing_vals = df.isnull().sum().sum()
    print(f"\nMissing values in the dataset: {missing_vals}")
    print("-" * 50)

    # -------------------------------------------------------------
    # 3. PREPROCESSING & DATA SPLITTING
    # -------------------------------------------------------------
    print("\n[3/5] Preprocessing and splitting data...")
    # Features and target
    X = df[iris.feature_names]
    y = df['target']
    
    # Split the dataset: 80% training, 20% testing
    # Using stratify=y to ensure target classes are balanced in both sets
    # Using random_state for reproducibility
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )
    print(f"Training set size: {X_train.shape[0]} samples")
    print(f"Testing set size: {X_test.shape[0]} samples")
    
    # Feature Scaling (standardization: mean=0, std=1)
    # Although Random Forest is relatively invariant to feature scaling,
    # it is a best-practice preprocessing step for supervised learning models.
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    print("Features standardized successfully.")

    # -------------------------------------------------------------
    # 4. TRAINING THE CLASSIFIER
    # -------------------------------------------------------------
    print("\n[4/5] Training the Random Forest Classifier...")
    # Initialize Random Forest Classifier
    # n_estimators=100 (number of trees)
    # random_state=42 for reproducibility
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train_scaled, y_train)
    print("Model training completed.")

    # -------------------------------------------------------------
    # 5. EVALUATION
    # -------------------------------------------------------------
    print("\n[5/5] Evaluating the model on the testing set...")
    # Predictions
    y_pred = model.predict(X_test_scaled)
    
    # Accuracy
    accuracy = accuracy_score(y_test, y_pred)
    print("-" * 50)
    print(f"Overall Accuracy: {accuracy:.4f} ({accuracy*100:.2f}%)")
    print("-" * 50)
    
    # Classification Report
    print("Classification Report:")
    print(classification_report(y_test, y_pred, target_names=iris.target_names))
    
    # Confusion Matrix
    cm = confusion_matrix(y_test, y_pred)
    print("Confusion Matrix:")
    print(cm)
    print("-" * 50)
    
    # Create directory for saving visual artifacts if it doesn't exist
    os.makedirs('outputs', exist_ok=True)
    
    # Plot & Save Confusion Matrix
    print("\nGenerating confusion matrix plot...")
    fig, ax = plt.subplots(figsize=(6, 5))
    disp = ConfusionMatrixDisplay(confusion_matrix=cm, display_labels=iris.target_names)
    disp.plot(cmap=plt.cm.Blues, ax=ax)
    plt.title("Confusion Matrix on Iris Test Set")
    plt.tight_layout()
    cm_path = os.path.join('outputs', 'confusion_matrix.png')
    plt.savefig(cm_path, dpi=150)
    plt.close()
    print(f"Confusion Matrix saved to: {cm_path}")
    
    # Plot & Save Feature Importances
    print("Generating feature importances plot...")
    importances = model.feature_importances_
    indices = np.argsort(importances)[::-1]
    
    fig, ax = plt.subplots(figsize=(7, 4))
    ax.bar(range(X.shape[1]), importances[indices], align="center", color="#3f51b5")
    ax.set_xticks(range(X.shape[1]))
    ax.set_xticklabels([iris.feature_names[i] for i in indices], rotation=15)
    ax.set_title("Random Forest Feature Importances")
    ax.set_ylabel("Importance Score")
    plt.tight_layout()
    fi_path = os.path.join('outputs', 'feature_importances.png')
    plt.savefig(fi_path, dpi=150)
    plt.close()
    print(f"Feature Importances plot saved to: {fi_path}")
    
    print("\n" + "=" * 60)
    print("             PIPELINE COMPLETED SUCCESSFULLY")
    print("=" * 60)

if __name__ == "__main__":
    run_classification_pipeline()
