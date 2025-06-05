# 🎨 CollabCraft Frontend

This is the frontend of **CollabCraft**, a multi-agent AI system that simulates building a startup — from idea to pitch — using Gemini and the Agent Development Kit (ADK).

---

## 🚀 What’s Here

This React app provides the user interface for:
- Inputting startup ideas
- Watching AI agents work live
- Viewing complete startup results (idea, research, branding, pitch)
- Exporting pitch materials

---

## 📄 Pages Needed for CollabCraft

| Page Name          | Route        | Purpose            |
| ---------------    | ------------ | -------------------------------------------------------------------- |
| **Landing Page**   | `/`  | Intro to CollabCraft, CTA to "Start Your Startup", overview of agent flow    |
| **Idea Input**     | `/idea`  | User inputs rough idea, submits to begin agent orchestration               |
| **Agent Progress** | `/progress` | Live agent sequence pages (Ideana, Scopey, Brandie, PitchPal) animated with status indicators      |
| **Results Dashboard** | `/dashboard` | Full startup output: idea summary, research, branding, pitch – agent sections collapsible or scrollable |
| **Pitch View**        | `/pitch`     | Clean view of generated pitch deck (elevator pitch, slide content) with PDF export option           |
| **AskPal (Optional)** | `/ask`       | Simple Gemini-powered Q\&A interface for users to ask startup-related questions               |
| **NotFound**          | `*`          | 404 page with redirection to home or recent session                                                     |

---

## 🛠️ Stack

| Tech           | Purpose                      |
|----------------|------------------------------|
| **React**      | UI framework                 |
| **TailwindCSS**| Styling                      |
| **React Router** | Routing between pages      |
| **Firebase**   | Auth (if needed), hosting    |
| **Gemini API** | LLM agent responses          |

---

## 📁 Folder Structure

```plaintext
/src
│
├── /components        # Reusable UI components
├── /pages             # Route-based components
├── /agents            # Agent visual wrappers and response handlers
├── /hooks             # Custom hooks (e.g., useAgentChain)
├── /services          # Gemini + Firebase wrappers
├── /assets            # Logos, icons, etc.
└── App.jsx            # Route setup
````

---

## ⚙️ Local Development

1. Clone the repo and enter frontend folder:

```bash
git clone https://github.com/ewa-edun/CollabCraft.git
cd CollabCraft/frontend
```

2. Install dependencies:

```bash
npm install
npm install react-router-dom
npm install tailwindcss @tailwindcss/vite
```

3. Create `.env` file in the `frontend` folder:

```env
VITE_GEMINI_API_KEY=your-gemini-api-key
VITE_FIREBASE_API_KEY=your-firebase-key
VITE_FIREBASE_PROJECT_ID=your-project-id
```

4. Run the development server:

```bash
npm run dev
```

The app will be live at [http://localhost:5173](http://localhost:5173)

---

## 🧪 Components of Interest

| Component           | Use                              |
| ------------------- | -------------------------------- |
| `AgentProgress.jsx` | Shows agent work animation       |
| `Dashboard.jsx`     | Displays each agent's outputs    |
| `PitchDeck.jsx`     | Compiles pitch info + PDF export |
| `AskPal.jsx` (opt)  | Chat interface using Gemini      |

---

## 🛣️ To Do / Ideas

* [ ] Add dark mode toggle
* [ ] Save sessions to Firebase
* [ ] Add smooth transitions between agents
* [ ] Animate agent personalities (optional fun)
* [ ] Show Gemini fallback messages on API error

---

## 🧠 Agent Flow Overview

```plaintext
[User Idea]
   ↓
[Ideana] → Refined Idea
   ↓
[Scopey] → Market & SWOT
   ↓
[Brandie] → Branding/UX
   ↓
[PitchPal] → Pitch Script + Deck
```

Each agent updates the global state, which feeds into the Dashboard.

---

## 📜 License

MIT – free to build your dream AI cofounder ✨

---

## 🤝 Built With

* [Gemini API](https://makersuite.google.com)
* [Firebase](https://firebase.google.com)
* [Agent Development Kit](https://github.com/google-deepmind/agent-development-kit)
* [React](https://react.dev)

```