# 4-bits: AI-Powered Multiplayer Murder Mystery Game

An immersive, real-time multiplayer murder mystery game that merges strategic roleplay with interactive game mechanics and generative AI.

---

## 📝 Project Description

**4-bits** is an interactive web-based multiplayer game where players gather in a virtual setting to solve a complex murder mystery. 
- One player or an AI entity plays the role of the victim, while the remaining players assume unique suspect roles.
- The game engine dynamically generates clues, crime dossiers, and context-aware responses to player queries.
- A visual 2D interactive canvas powered by **Phaser.js** allows players to move around, investigate rooms, and discover critical evidence.
- The progression, logic verification, and ultimate judgment of the murderer are moderated by **Google Gemini API**, providing a unique and unpredictable experience in every session.

---

## 🚀 Key Features

### 🧠 Generative AI Game Master (Google Gemini)
- **Dynamic Dossier Generation**: Automatically generates character backgrounds, relationships, secrets, and motives at the start of each game.
- **Interactive NPC suspect interrogations**: Allows real-time dialogue where suspects react defensively, adapt to evidence, or try to deflect blame based on AI prompts.
- **Intelligent Crime Solving & Verdicts**: Analyzes final player accusations and evidence submissions to deliver a custom verdict.

### 🎮 Interactive 2D Game World (Phaser.js)
- **Virtual Crime Scene Navigation**: Move characters through rooms, corridors, and crime scenes to collect clues.
- **Evidence Spotting**: Interactive objects placed around the canvas contain critical clues that update player investigation boards.

### ⚡ Real-Time Multiplayer Networking (Socket.IO)
- **Synchronized Lobbies**: Seamlessly host and join rooms using clean, unique room codes.
- **Live Communication**: Instant action synchronization, movement updates, and global chats to debate findings.

### 🎙️ Audio Integration (LiveKit)
- Real-time voice communication integrations to facilitate debates, interrogations, and suspect discussions directly in-game.