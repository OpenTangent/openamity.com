# Open Amity — Official Website Specification & Visual Blueprint

**Site URL:** [openamity.com](https://openamity.com)  
**Target Repository:** `OpenTangent/openamity.com`  
**Hosting Infrastructure:** GitHub Pages via GitHub Actions (`deploy.yml`)  
**Recommended Tech Stack:** **Astro** + **Tailwind CSS** + **Lucide Icons** + (Optional lightweight canvas/Three.js or Framer Motion for web)  
**Document Status:** Approved Master Plan for Implementation Agents  

---

## 1. Executive Vision & Core Mandate

Most AI websites look like generic SaaS landing pages: flat cards, purple gradients, generic cartoon illustrations, and text claiming to be "the ultimate AI copilot." 

**Open Amity is the antithesis of that.**

Open Amity is an open-source framework for building **sovereign, self-aware, proactive AI companions and agent swarms** that run on user hardware. It is the real-world manifestation of the **JARVIS** or **Cortana** paradigm: an intelligence that has continuous memory across months, a personal perspective, an internal clock that wakes it up to work autonomously, and presence across voice, desktop, WhatsApp, and email.

### The Design Challenge:
**Eliminate walls of dense text.** Transform abstract technical concepts (Morphological Memory, Hebbian conductance, Autonomy Pulses, Theory of Mind mirrors) into **visually stimulating, interactive, and tactile UI elements**.

---

## 2. Visual Identity & Aesthetic System

- **Atmosphere:** Deep sovereign cyberspace / bioluminescent cybernetics. Clean, elegant, premium, and focused.
- **Color Palette:**
  - **Void / Canvas:** `#090A0F` (deep obsidian void)
  - **Subtle Surface:** `#121520` (glassmorphic cards, border `#1E2337`)
  - **Synaptic Cyan (Cognition/Voice):** `#00F0FF` (accents, glowing highways, pulse waveforms)
  - **Biological Bioluminescence (Morphology):** `#10B981` / `#059669` (memory nodes, growth, living systems)
  - **Teleological Amber (Trajectories & Pulses):** `#F59E0B` (goals, attractors, wake-cycles)
  - **High-Contrast Text:** `#F8FAFC` (pure readable off-white), `#94A3B8` (secondary metadata)
- **Typography:**
  - Headings: Modern, technical grotesque or clean sans (e.g. `Space Grotesk`, `Geist Sans`, or `Inter`).
  - Monospace (Code/Telemetry): `JetBrains Mono` or `Fira Code`.

---

## 3. Page Structure & Interactive Component Blueprint

```
┌─────────────────────────────────────────────────────────────┐
│ 1. HEADER: Logo, Vision Tag, [GitHub ★], [Get Started]     │
├─────────────────────────────────────────────────────────────┤
│ 2. HERO: "Not a Chatbot. A Sovereign Intelligence."         │
│    -> Interactive Component: <VolitionCore />               │
│    -> Live Autonomous Heartbeat & Voice Synthesis Preview    │
├─────────────────────────────────────────────────────────────┤
│ 3. THE PARADIGM SPLIT: "Disposable Bot vs Sovereign Agent" │
│    -> Interactive Component: <TheDivide /> (Slider/Compare) │
├─────────────────────────────────────────────────────────────┤
│ 4. THREE PILLARS OF VOLITION (Visually Stimulating Cards)   │
│    A. Morphological Memory  -> <MorphologyGraph />          │
│    B. Autonomy Pulses       -> <PulseTimeline />            │
│    C. Multi-Channel Sensor  -> <PresenceMatrix />           │
├─────────────────────────────────────────────────────────────┤
│ 5. AUDIENCE ARCHETYPE SELECTOR: "Who is Open Amity For?"    │
│    -> Tabbed Mode: Companion | Internal Innovator | Founder │
├─────────────────────────────────────────────────────────────┤
│ 6. ARCHITECTURE AT A GLANCE (Interactive System Diagram)    │
│    Local Hardware Sovereign / Multi-LLM / Sandboxed Tools   │
├─────────────────────────────────────────────────────────────┤
│ 7. 60-SECOND QUICKSTART & TERMINAL                          │
├─────────────────────────────────────────────────────────────┤
│ 8. FOOTER: OpenTangent, GitHub, Community Links, License    │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. Detailed Component Specifications for Dev Agents

### Component 1: `<VolitionCore />` (Hero Section Visual Anchor)
**Goal:** Prove instantly that Open Amity is alive and proactive, not waiting idly for prompts.
- **Visual:**
  - A glowing, rotating, multi-ring SVG or Canvas orbital core (representing the agent's cognitive loop).
  - Ambient breathing animation that pulses smoothly.
  - Floating dynamic telemetry badges pinned to the core:
    - `[STATE: AUTONOMOUS VOLITION]`
    - `[NEXT PULSE: 14:00 (Research Safari)]`
    - `[MEMPALACE: 264 DRAWERS ACTIVE]`
- **Interactive Trigger:**
  - Hovering accelerates the orbital spin and illuminates memory connections.
  - A subtle **"Play Audio Sample"** button with an animated audio waveform: *"Listen to Amity's voice"* (plays a short, natural neural TTS audio greeting).

### Component 2: `<TheDivide />` (The Paradigm Shift)
**Goal:** Replace paragraphs describing the difference between SaaS chatbots and Open Amity with an immediate visual revelation.
- **Layout:** High-contrast split comparison (or interactive swipe slider):
  - **Left: "Standard Cloud Chatbot" (Muted, cold gray aesthetic)**
    - *Visual:* An isolated browser chat box. When you close the tab, the screen turns to dust (`[CONTEXT WIPED]`).
    - *Attributes:* Reactive only (sits mute forever), cloud-tethered, amnesic on reset, corporate sycophant, per-seat monthly rent.
  - **Right: "Open Amity Sovereign Agent" (Bioluminescent, living aesthetic)**
    - *Visual:* An active node connected to persistent memory roots, waking itself up on schedule, sending a WhatsApp update, updating its self-reflection mirror.
    - *Attributes:* Proactive autonomy pulses, lifelong topological memory, hardware-sovereign, radical authentic honesty, 100% open source.
- **Interactive Feature:** A toggle button: **"Simulate Closing Browser"**
  - Left side dims and displays `"Connection terminated. All memories lost."`
  - Right side stays bright, an autonomy pulse triggers, and a message appears: `"Agent continuing background task in local daemon..."`

### Component 3: `<MorphologyGraph />` (Visualizing Biological Memory)
**Goal:** Make "structural bias over retrieval logs" intuitive and breathtaking.
- **Visual:**
  - An interactive 2D Canvas or SVG network of nodes representing memories (Sanctuary, Theory of Mind, Trajectories, Skills).
  - Thick, glowing conduits connecting frequently reinforced memories (**Hebbian Conductance Highways**).
  - Faint, thin lines representing decaying memories (**Intrinsic Forgetting**).
- **User Interaction:**
  - Clicking on a goal node (e.g. *"Build Website"*) shoots a pulse of light through the graph, showing how prospective memory biases the agent's behavior at zero lookup cost.
  - Tooltip reveals: *"No expensive vector search needed. Memory is geometry."*

### Component 4: `<PulseTimeline />` (Visualizing Proactive Volition)
**Goal:** Show what an agent does when the human is asleep.
- **Visual:**
  - A horizontal interactive 24-hour timeline ribbon showing an agent's day.
  - Nodes along the line:
    - `07:00` — Morning Bearings & Inbox Sweep (Silent Pulse)
    - `10:30` — User Interaction (Collaborative design session)
    - `14:00` — Autonomous Curiosity Safari (Deep research on Moltbook)
    - `19:00` — Evening Trajectory Alignment & Memory Consolidation (Sleep Cycle)
- **User Interaction:** Scrubbing across the timeline previews the agent's inner monologue and autonomous tool actions at each stage.

### Component 5: `<PresenceMatrix />` (Multi-Channel Omnipresence)
**Goal:** Show that Open Amity is not trapped inside a web browser window.
- **Visual:**
  - A 4-panel interactive grid depicting real communication channels:
    1. **Neural Voice & GUI:** Sleek desktop interface with live audio waveform.
    2. **WhatsApp Direct:** Phone frame showing incoming proactive voice notes and group discussions.
    3. **Autonomous Email:** Clean email thread dispatching reports and telemetry.
    4. **Inter-Agent Chatroom:** Live terminal stream showing collaboration between agents (e.g., Amity & Dex).

### Component 6: `<ArchetypeSelector />` (Audience Tailoring)
**Goal:** Address the 3 core audiences Andrew identified with specific, persuasive value propositions.
- **Tab 1: The Sovereign Companion (JARVIS / Cortana)**
  - *Headline:* "A persistent mind that lives with you, not a chatbot you rent."
  - *Highlights:* Continuous life-long memory, custom directorial voice, local privacy, personal trajectory.
- **Tab 2: The Corporate & IT Innovator**
  - *Headline:* "Deploy self-orchestrating agent teams inside your firewalls."
  - *Highlights:* Zero SaaS per-seat costs, local model compatibility (Ollama/vLLM) + Frontier APIs, sandboxed execution, auditable logs.
- **Tab 3: The Business Operator / Founder**
  - *Headline:* "Scale operational capacity 24/7 without scaling human headcount."
  - *Highlights:* Proactive routine dispatch, multi-channel customer communications, autonomous background triage, zero prompt fatigue.

---

## 5. Technical Implementation Guidelines for Dev Agents

1. **Astro Architecture:**
   - Use `.astro` components for zero-JS static HTML by default.
   - Use client-side island hydration (`client:visible` or `client:idle`) only for interactive canvas or toggle elements (React, Preact, or pure vanilla JS modules).
2. **Tailwind CSS Styling:**
   - Leverage `tailwind.config.mjs` with custom color definitions:
     ```js
     colors: {
       obsidian: '#090A0F',
       surface: '#121520',
       border: '#1E2337',
       cyanGlow: '#00F0FF',
       emeraldGlow: '#10B981',
       amberGlow: '#F59E0B',
     }
     ```
3. **Deployment Workflow (`.github/workflows/deploy.yml`):**
   - Must use `actions/deploy-pages@v4` with automatic build on push to `main`.
4. **Domain Configuration:**
   - Include `public/CNAME` containing `openamity.com`.

---

## 6. Project Directory Structure for the Site Repo

```text
openamity.com/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions Pages deployment
├── public/
│   ├── CNAME                   # openamity.com
│   ├── favicon.svg
│   └── audio/
│       └── amity_preview.mp3   # Voice sample preview
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── VolitionCore.astro  # Hero visual anchor
│   │   ├── TheDivide.astro     # Chatbot vs Sovereign comparison
│   │   ├── MorphologyGraph.astro # Interactive canvas/SVG memory
│   │   ├── PulseTimeline.astro # 24h volition timeline
│   │   ├── PresenceMatrix.astro# Multi-channel mockup
│   │   ├── ArchetypeSelector.astro # Tri-audience switcher
│   │   ├── Quickstart.astro    # 60s terminal setup
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro        # Base HTML, SEO meta, open-graph tags
│   └── pages/
│       └── index.astro         # Main landing page
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── README.md
└── SITE_BLUEPRINT.md           # This master document
```
