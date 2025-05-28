# LangPartner AI 🎙️💬✨

**Your Personal AI Tutor for Fluent Language Learning Through Real-Time Voice Conversations!**

LangPartner AI is a cutting-edge application designed to help you master new languages by engaging in natural, voice-based conversations with AI-powered language partners. Create and customize your tutors, pick a language and topic, and start practicing your speaking skills in an immersive and interactive way.

## 🔥 Features

* 🗣️ **Interactive Voice Conversations:** Engage in real-time, spoken dialogues with AI language partners.
* 🧑‍🎨 **Personalized AI Tutors:** Create and customize your language partners by defining their name, language, conversation topic, voice gender, and interaction style (formal/casual).
* 🌐 **Multiple Languages Supported:** Practice languages like Spanish, German, Korean, English, Japanese, and French.
* 🧠 **Advanced AI Integration:**
    * Powered by **OpenAI's GPT-4** for intelligent conversation and tutoring.
    * Utilizes **Vapi AI SDK** for seamless voice interaction management.
    * High-quality voice synthesis via **ElevenLabs** and accurate transcription by **Deepgram**.
* 📚 **Session Tracking ("My Journey"):** Keep track of your completed lessons and created partners.
* 🔒 **Secure User Authentication:** Managed by Clerk for easy sign-in and user management.
* 🎨 **Sleek Dark Theme:** A modern, dark user interface for comfortable learning sessions (now the default!).
* 📱 **Responsive Design:** Learn on the go, with a UI that adapts to different screen sizes.
* ➕ **Create New Partners Easily:** A dedicated form to build your ideal language tutor.
    ## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https
://ui.shadcn.com/) components
* **Database:** [Supabase](https://supabase.io/) (PostgreSQL)
* **Authentication:** [Clerk](https://clerk.com/)
* **Voice AI Platform:** [Vapi AI](https://vapi.ai/)
    * **Text-to-Speech (TTS):** ElevenLabs
    * **Speech-to-Text (STT):** Deepgram
* **Language Model (LLM):** OpenAI GPT-4
* **Form Management:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) for validation

## 🚀 Getting Started

Follow these steps to get LangPartner AI up and running on your local machine.

### Prerequisites

* [Node.js](https://nodejs.org/) (version 18.x or higher recommended)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
* Access to the following services and their API keys:
    * **Clerk:** For user authentication.
    * **Supabase:** For the database.
    * **Vapi AI:** For managing voice AI interactions (this will likely handle your ElevenLabs, Deepgram, and OpenAI connections).

### Environment Variables

Create a `.env.local` file in the root of your project and add the following environment variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Vapi AI
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token