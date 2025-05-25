# 🚀 CollabCraft – Your Autonomous Startup Co-Founder

**CollabCraft** is a multi-agent AI system that simulates the early stages of startup building — from ideation to research, branding, and pitching — powered by orchestrated agents. Think of it as a virtual co-founder team that helps solo entrepreneurs, students, or incubators validate and build product ideas collaboratively with AI.

---

## 🔍 What It Does

CollabCraft lets users input an idea (even if it’s vague), and walks them through the startup journey — refining the concept, researching the market, designing branding, and assembling a pitch — all handled by different AI agents.

Whether you're a first-time founder or just brainstorming for fun, CollabCraft gives you a complete startup package in minutes.

---

## ✨ Demo & Screenshots

> 📹 **Live Demo:** Coming soon  
> 🖼️ **Screenshots:** (placeholders — will update with actual images)
- `./assets/screenshot-home.png`
- `./assets/screenshot-dashboard.png`
- `./assets/screenshot-pitch.png`

---

## 🧠 Key Features (MVP)

| Agent Name | Role | What It Does |
|------------|------|--------------|
| 🧠 **Ideana (Idea Agent)** | Ideation | Refines vague inputs into structured startup ideas, suggests variations |
| 🔍 **Scopey (Research Agent)** | Market Research | Generates competitor landscape, SWOT, TAM/SAM/SOM using Gemini |
| 🎨 **Brandie (Design Agent)** | Branding & UX | Suggests logos (via image prompts), color palettes, UI layout ideas, and landing page copy |
| 📣 **PitchPal (Pitch Agent)** | Pitch Builder | Builds pitch deck content, taglines, and sample elevator pitch script using output from all agents |

*Agents are orchestrated to run one after another, and their outputs are visually displayed in the dashboard.*

---

## 🧩 How It Works (Agent Flow)

\[ User submits a vague idea ]
⬇
\[ Ideana refines the idea + generates variations ]
⬇
\[ Scopey generates research insights ]
⬇
\[ Brandie generates brand mockups and UI suggestions ]
⬇
\[ PitchPal assembles a pitch deck summary and script ]

Each agent takes input from the previous one and passes structured output to the next — orchestrated using the **Agent Development Kit (ADK)** and **Gemini API**.

---

## 🛠️ Tech Stack

| Layer           | Tech Used                                      |
|-----------------|------------------------------------------------|
| **Frontend**    | React + TailwindCSS                            |
| **Backend**     | Firebase (Auth, Firestore)                     |
| **Agent Logic** | Agent Development Kit (ADK)                    |
| **AI**          | Gemini 1.5 Pro via Google AI Studio            |
| **Storage**     | Firestore (for optional saving agent outputs)  |
| **Design**      | Figma, Whimsical, Canva (for mockups)          |
| **Hosting**     |	Firebase Hosting / Vercel                      |
| **Collab**      |	GitHub, Figma, Notion                          |

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-org/collabcraft.git
cd collabcraft
````

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Set up environment variables

Create a `.env` file in both the root and frontend folders with your Firebase and Gemini credentials:

```env
REACT_APP_GEMINI_API_KEY=your-key-here
REACT_APP_FIREBASE_API_KEY=your-firebase-key
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
```

### 4. Run the frontend locally

```bash
npm run de
```

### 5. Agent Development Kit

* Follow [ADK setup guide](https://github.com/google-deepmind/agent-development-kit)
* Build agents in `agents/` folder
* Integrate prompt templates and logic with Gemini API
* Trigger agents in sequence via the backend or orchestrator script

---

## 👥 Team & Roles

## 👥 Team & Roles

| Team Member | Role | Responsibilities |
|-------------|------|------------------|
| **Anushka** | 🎨 UX Designer & User Flow Architect | - Designs UI/UX screens (home, agent steps, results dashboard) <br> - Creates user flow diagrams and mockups (Figma or Whimsical) <br> - Defines how users interact with agents <br> - (Stretch) Adds visual identity for agents (icons, personalities, theme colors) <br> - Supports with user flows, wireframes, UI, branding <br> - Front-end assistance if needed (Ewa) |
| **Angelos** | 🛠️ Backend Dev / Agent Logic Helper | - Sets up Firebase if persistent storage is required <br> - Helps structure how agents communicate via ADK backend <br> - Works closely with Ewa on routing, agent triggering, and database syncing <br> - Can be assisted by Ewa for tasks like Firestore rules or agent scheduling |
| **Saori** | 🔍 Research Agent Specialist | - Designs logic and outputs of the Research Agent <br> - Crafts Gemini prompts for SWOT analysis, user personas, and sample use cases <br> - Collaborates with Ewa on formatting outputs and mock data integration <br> - (Note: No web scraping involved) |
| **Ewa** | 🧠 Agent Integration + Assistant | - Leads integration and orchestration of the entire system <br> - Sets up ADK environment and chains all agents <br> - Integrates frontend components with live agent outputs <br> - Assists Angelos in backend and debugging <br> - Finalizes Pitch Agent logic and UI <br> - Acts as team’s glue: connects agents, handles fallback logic, and ensures flow works smoothly |

---

## 🧪 Example Prompts

```txt
💡 Idea Prompt:
"Turn this vague idea into a startup concept with problem, solution, and key features: 'Helping remote students study together'."

🔍 Scope Prompt:
"Analyze the market size and key competitors for a virtual co-studying app for students. Provide a SWOT analysis and estimate TAM/SAM/SOM."

🎨 Brand Prompt:
"Design branding and landing page copy for a productivity app that connects students globally. Suggest a name, colors, UI layout, and logo description."

📣 PitchPal Prompt:
"Generate a one-minute elevator pitch script and a 5-slide pitch deck outline for a startup called 'StudyMate' that helps students co-study remotely."
```

---

## 🛣️ Future Roadmap

* ✅ Phase 1: MVP with 4 core agents (Complete)
* 🔄 Phase 2: Add Dev Agent (Stackson) for code scaffold generation
* 🔄 Phase 3: Add Chat Interface for agent discussions
* 🔄 Phase 4: Add progress tracker or "Startup Timeline" UX
* 🚀 Phase 5: Exportable pitch deck (PDF) + portfolio builder

---

## 📜 License

MIT License — feel free to fork, remix, and build your own team of AI startup co-founders!

---

## 🤝 Acknowledgments

Thanks to:

* [Google DeepMind](https://github.com/google-deepmind/agent-development-kit) for the Agent Development Kit
* Google Gemini for powerful language understanding
* Firebase for keeping our data structured and secure
* The hackathon organizers and mentors for their support 💖
