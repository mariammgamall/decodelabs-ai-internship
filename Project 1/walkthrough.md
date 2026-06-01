# Project Walkthrough - Rule-Based AI Chatbot (Nova)

This document outlines the development process, testing results, and technical decisions made during the build of the Rule-Based AI Chatbot (Nova).

Below is an overview of what has been built, tested, and verified.

---

## 🛠️ Summary of Created Files

1. **[chatbot.py](file:///d:/Projects/Internships/Decodelabs/Project%201/chatbot.py)**:
   - Houses the entire chatbot logic including:
     - **Config/Styling**: Standard cross-platform compatible ANSI color mapping for a retro-styled, readable console experience.
     - **Knowledge Dictionary**: Fully custom space-themed dictionaries for matching user queries against keywords.
     - **Input Sanitization**: Standard `.strip().lower()` with manual ending-punctuation removal filters.
     - **Contextual Management**: Nested state checking inside the active loops to allow multi-turn state navigation under the Space exploration submode.
     - **Graceful Termination hooks**: Handles Ctrl+C (KeyboardInterrupt) and command exit parameters cleanly.

2. **[README.md](file:///d:/Projects/Internships/Decodelabs/Project%201/README.md)**:
   - A stunning, comprehensive GitHub-ready Markdown file.
   - Includes full project description, features list, installation instructions, code layout breakdown with ASCII flowchart, terminal interaction logging transcripts, and future scaling recommendations.

---

## 🧪 Testing and Verification

To ensure maximum resilience and platform-compatibility:
- Verified syntax correctness and execution: The chatbot compiled with zero errors.
- Handled terminal encoding bugs: Replaced emojis and Unicode characters like em-dashes `—` with safe ASCII indicators (e.g., standard hyphens `-` and double-hyphens `--`), completely resolving standard Windows PowerShell/CMD UnicodeEncodeErrors.
- Interactive trace results proved successful for:
  - Global Greeting matchers
  - Case-sensitivity and spacing sanitization (e.g. `   BlAck hOleS   ` was correctly sanitized to `black holes`)
  - Multi-turn Space context transitions
  - Predefined custom cosmic fallbacks
  - Smooth application exit commands (`quit` / `exit`)

---

## 🐞 Bug Fixes

- **Clashing Intent Bug resolved:** Fixed a substring-clashing bug where the intent greeting trigger `"yo"` was matching as a substring of words like `"you"` (such as in `"who made you"` or `"how are you"`), causing those queries to fall back into the friendly greeting flow. By applying space-boundary padded keyword checks (`padded_keyword in padded_input`), the chatbot now accurately ensures full word or phrase boundary matches. Additionally, expanded `sanitize_input` to strip punctuation globally across user queries.

---

## 📈 Next Steps and Customization

This project highlights several key concepts in software engineering:
1. **Control Flow**: How `while` loops maintain infinite session persistence.
2. **State Machines**: How setting a variable (`context`) shifts the logical branching routes dynamically.
3. **Data Normalization**: Why stripping whitespace and capital letters is essential for simple string equivalence comparisons.
4. **Resiliency**: How standard try-except structures capture force-quit command behaviors (Ctrl+C).
