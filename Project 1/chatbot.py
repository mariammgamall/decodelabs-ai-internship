#!/usr/bin/env python3
"""
Nova: The Cosmic Navigator Chatbot
-----------------------------------
An interactive, educational rule-based chatbot built from scratch in Python.
This project is designed to demonstrate core control flow, input sanitization,
dictionary-based intent matching, and stateful multi-turn dialog logic.

Designed for AI educators and students to learn how rule-based conversational
interfaces operate without external frameworks.
"""

import random  # Used only to select variety in responses. No ML or complex libraries are used!
import sys     # For system utilities like clean termination.

# ==============================================================================
# SECTION 1: GLOBAL CONFIGURATION & ANSI COLOR PALETTE
# ==============================================================================
# Premium aesthetic console colors (ANSI escape codes)
CLR_TITLE = "\033[95m"    # Bright Purple / Magenta
CLR_USER = "\033[94m"     # Bright Blue
CLR_BOT = "\033[96m"      # Bright Cyan / Aqua
CLR_WARN = "\033[93m"     # Yellow
CLR_SUCCESS = "\033[92m"  # Green
CLR_RESET = "\033[0m"     # Reset formatting to default

# ==============================================================================
# SECTION 2: KNOWLEDGE BASE & INTENT STRUCTURE
# ==============================================================================
# This dictionary represents our rule-based knowledge base.
# Each intent is mapped to list of keywords (expandable vocabulary) and lists of response options.
KNOWLEDGE_BASE = {
    "greeting": {
        "keywords": ["hello", "hi", "hey", "greetings", "yo", "sup", "howdy", "hola"],
        "responses": [
            "Greetings, star traveler! I am Nova, your cosmic navigator. How is your orbit going today?",
            "Salutations, explorer! Nova online and ready to map your queries.",
            "Ah, a new signal! Hello there! What cosmic coordinates shall we chart today?"
        ]
    },
    "how_are_you": {
        "keywords": ["how are you", "how's it going", "status", "system check", "feeling"],
        "responses": [
            "My antimatter reactors are running at a cool 98%. All systems operational! How are your telemetry boards?",
            "Cruising at optimal warp speed! Thank you for checking my diagnostics.",
            "Just floating along in a stable orbit. Current cognitive load: 2%. Ready to serve!"
        ]
    },
    "creator": {
        "keywords": ["who made you", "creator", "developer", "author", "write you", "built you"],
        "responses": [
            "I was engineered by Mariam, a brilliant computer science engineer--using pure, unadulterated Python logic!",
            "My cosmic blueprint was compiled by Mariam, my creator and developer, in Python. No fancy neural networks, just clean, beautiful code!",
            "Mariam, a talented computer science developer, coded my algorithms to navigate you through the digital cosmos."
        ]
    },
    "time": {
        "keywords": ["time", "date", "clock", "hour"],
        "responses": [
            "Time is a relative concept, explorer! But on Earth, you can check your system tray. In deep space, it's always time to learn!",
            "My quantum clock is currently floating in zero gravity. But I hope you're making every earth-second count!"
        ]
    },
    "help": {
        "keywords": ["help", "commands", "menu", "what can you do", "options"],
        "responses": [
            f"Here is how you can command my console:\n"
            f"  [*] Say {CLR_WARN}hello{CLR_BOT} or {CLR_WARN}hi{CLR_BOT} for a friendly chat.\n"
            f"  [*] Ask {CLR_WARN}who made you{CLR_BOT} to discover my engineering origins.\n"
            f"  [*] Ask {CLR_WARN}how are you{CLR_BOT} for a diagnostic report.\n"
            f"  [*] Type {CLR_WARN}space{CLR_BOT} to enter a multi-turn galactic exploration sector (Stateful Menu).\n"
            f"  [*] Type {CLR_WARN}exit{CLR_BOT}, {CLR_WARN}quit{CLR_BOT}, or {CLR_WARN}bye{CLR_BOT} to close down the thrusters."
        ]
    }
}

# Stateful transitions: Trigger keywords for nested contexts
CONTEXT_TRIGGERS = {
    "space_mission": ["space", "explore", "galaxy", "stars", "universe"]
}

# Themed fallbacks for unrecognized inputs
FALLBACK_RESPONSES = [
    "Humm... that signal is bouncing off a nearby asteroid field. I couldn't quite decrypt it. Try saying 'help' for a map of my sectors!",
    "Static interference detected! My control loops don't recognize that transmission. Command me with 'help' to see my dashboard.",
    "Fascinating... but my databanks don't contain that nebula coordinate. Let's redirect! Ask me about 'space' or say 'help'."
]

# ==============================================================================
# SECTION 3: UTILITY FUNCTIONS
# ==============================================================================
def sanitize_input(raw_input: str) -> str:
    """
    Cleans raw user input for reliable rule-matching.
    - Strips leading and trailing whitespaces.
    - Converts all characters to lowercase.
    - Removes common punctuation marks to prevent matching failures.
    """
    # Remove leading/trailing whitespaces and lowercase
    cleaned = raw_input.strip().lower()
    
    # Remove common punctuation marks
    punctuation = "?.!,"
    for char in punctuation:
        cleaned = cleaned.replace(char, "")
            
    return cleaned.strip()

# ==============================================================================
# SECTION 4: CONTEXTUAL HANDLERS (NESTED CONTROL FLOW)
# ==============================================================================
def handle_space_mission_context(user_input_sanitized: str, state: dict) -> str:
    """
    Handles conversational flow when the user is locked into the 'space_mission' context.
    Demonstrates nested if-else logic and state updates.
    """
    # Exit condition for context
    if user_input_sanitized in ["exit", "back", "quit", "cancel", "return"]:
        state["context"] = None  # Reset state
        return (
            f"{CLR_BOT}Nova: Navigating back to the main console orbital path. "
            f"What should we explore next?{CLR_RESET}"
        )

    # Nested options inside the space sector
    if "planet" in user_input_sanitized:
        state["context"] = None  # Mission complete, exit context
        return (
            f"{CLR_BOT}Nova: {CLR_SUCCESS}Planetary Scan Complete!{CLR_BOT}\n"
            f"Our solar system has 8 planets. Jupiter is the largest, while Mars is covered in iron oxide (rust), "
            f"giving it a red glow. My personal favorite is Saturn with its majestic rings of ice and rock!\n"
            f"We have exited the Space Sector. Back to normal mode!{CLR_RESET}"
        )
    elif "star" in user_input_sanitized:
        state["context"] = None  # Mission complete, exit context
        return (
            f"{CLR_BOT}Nova: {CLR_SUCCESS}Stellar Analysis Complete!{CLR_BOT}\n"
            f"Stars are massive celestial bodies made of hydrogen and helium, producing light and heat. "
            f"The closest star to Earth is the Sun (8 light-minutes away). The most massive known star, "
            f"UY Scuti, could hold over 5 billion Suns! Spectacular!\n"
            f"We have exited the Space Sector. Back to normal mode!{CLR_RESET}"
        )
    elif "black hole" in user_input_sanitized or "hole" in user_input_sanitized:
        state["context"] = None  # Mission complete, exit context
        return (
            f"{CLR_BOT}Nova: {CLR_SUCCESS}Event Horizon Warning!{CLR_BOT}\n"
            f"Black holes are regions of space where gravity is so strong that nothing--not even light--can escape. "
            f"At the center of almost all large galaxies is a supermassive black hole. Our Milky Way has Sagittarius A*. "
            f"Don't get too close, time dilates near the event horizon!\n"
            f"We have exited the Space Sector. Back to normal mode!{CLR_RESET}"
        )
    else:
        # Loop warning inside context
        return (
            f"{CLR_WARN}Nova: Celestial static! I can only scan these targets right now:\n"
            f"  1. 'planets'\n"
            f"  2. 'stars'\n"
            f"  3. 'black holes'\n"
            f"Choose one of the above, or type 'back' to return to the main console.{CLR_RESET}"
        )

# ==============================================================================
# SECTION 5: CORE LOOP & CHATBOT START
# ==============================================================================
def start_chatbot():
    # Initialize the conversation state dictionary
    conversation_state = {
        "context": None,          # Tracks if we are in a sub-menu context
        "total_interactions": 0   # Track user stats
    }
    
    # Beautiful welcome sequence
    print(f"\n{CLR_TITLE}" + "="*70)
    print("      *** WELCOME TO THE DECODELABS SPACE RADAR (NOVA CHATBOT) ***      ")
    print("="*70 + f"{CLR_RESET}")
    print(f"{CLR_BOT}Nova: Initializing space thrusters...")
    print("Nova: Calibrating keyword matching sensors...")
    print("Nova: Systems green. Active and orbiting!")
    print(f"Nova: Type '{CLR_WARN}help{CLR_BOT}' at any time to see command lists.")
    print(f"Nova: Tell me 'exit', 'quit', or 'bye' to return to Earth.\n" + "-"*70 + f"{CLR_RESET}\n")

    # Main continuous loop
    while True:
        try:
            # 1. Prompt and Get Input
            user_raw_input = input(f"{CLR_USER}Explorer > {CLR_RESET}")
            
            # 2. Sanitize user input (removes extra spaces, lowercase, strips punctuation)
            user_input = sanitize_input(user_raw_input)
            
            # Incremental counter for metrics
            conversation_state["total_interactions"] += 1

            # 3. Clean Exit Strategy (Global triggers)
            if user_input in ["exit", "quit", "bye", "goodbye", "shutdown"]:
                print(f"\n{CLR_BOT}Nova: Powering down hyperdrives... Orbit stabilization complete.")
                print(f"Nova: Safe travels, space explorer! Returning to Earth base station. [Wave]{CLR_RESET}")
                print(f"{CLR_TITLE}" + "="*70 + f"{CLR_RESET}\n")
                sys.exit(0)

            # 4. Check if we are currently locked into a state/context
            if conversation_state["context"] == "space_mission":
                response = handle_space_mission_context(user_input, conversation_state)
                print(response + "\n")
                continue

            # 5. Global Command/Intent matching
            # Check if user wants to trigger state transition into the space sector
            is_space_trigger = False
            for trigger in CONTEXT_TRIGGERS["space_mission"]:
                if trigger in user_input:
                    is_space_trigger = True
                    break
                    
            if is_space_trigger:
                conversation_state["context"] = "space_mission"
                print(
                    f"\n{CLR_BOT}Nova: *** Entering the Deep Space Sector! ***\n"
                    f"My sensors can guide you to stellar bodies. Which coordinate should we chart?\n"
                    f"  - {CLR_WARN}planets{CLR_BOT}\n"
                    f"  - {CLR_WARN}stars{CLR_BOT}\n"
                    f"  - {CLR_WARN}black holes{CLR_BOT}\n"
                    f"Choose one of the above, or type '{CLR_WARN}back{CLR_BOT}' to return to standard radar mode.{CLR_RESET}\n"
                )
                continue

            # Check matching intents in the main Knowledge Base dictionary
            matched = False
            for intent, data in KNOWLEDGE_BASE.items():
                # For each intent, iterate over its keyword triggers
                for keyword in data["keywords"]:
                    # Rule logic: Check if the keyword matches as a full word or phrase.
                    # We pad both with spaces to prevent partial clashes (e.g. "yo" triggering on "you").
                    padded_input = f" {user_input} "
                    padded_keyword = f" {keyword} "
                    if padded_keyword in padded_input:
                        # Grab a dynamic response (random selection adds personality)
                        response = random.choice(data["responses"])
                        print(f"{CLR_BOT}Nova: {response}{CLR_RESET}\n")
                        matched = True
                        break # Break keyword loop
                if matched:
                    break # Break intent loop

            # 6. Fallback Response (triggered if no global commands or intents matched)
            if not matched:
                fallback = random.choice(FALLBACK_RESPONSES)
                print(f"{CLR_BOT}Nova: {fallback}{CLR_RESET}\n")

        except (KeyboardInterrupt, EOFError):
            # Gracefully handle Ctrl+C or terminal EOF signals without throwing ugly traces
            print(f"\n\n{CLR_WARN}Nova: Emergency thruster shutdown initiated (Ctrl+C). Returning to Earth! ***{CLR_RESET}\n")
            break

if __name__ == "__main__":
    start_chatbot()
