"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Mic, Terminal as TerminalIcon } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant" | "system-alert";
  content: string;
}

export default function ChatDeck() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      role: "assistant",
      content: `Hello! I am Shani's AI Agent. Ask me anything about Shani's technical background, projects, work experience, or availability!

Type a question or select a quick action below to get started.`
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const handleToggle = () => setIsOpen((prev) => !prev);
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("toggle-chat-deck", handleToggle);
    window.addEventListener("open-chat-deck", handleOpen);
    return () => {
      window.removeEventListener("toggle-chat-deck", handleToggle);
      window.removeEventListener("open-chat-deck", handleOpen);
    };
  }, []);

  const addMessage = (role: "user" | "assistant" | "system-alert", content: string) => {
    setMessages((prev) => [
      ...prev,
      { id: Math.random().toString(36).substring(7), role, content }
    ]);
  };

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text) return;

    if (!textToSend) {
      setInput("");
    }

    addMessage("user", text);
    setIsLoading(true);

    const lowercaseText = text.toLowerCase();
    
    // Check if it's a predefined slash command or quick action first
    if (lowercaseText === "/skills" || lowercaseText.includes("skills")) {
      setTimeout(() => {
        addMessage("assistant", `⚡ **Shani Mishra's Tech Arsenal:**
- **Frontend & Mobile**: React, React Native, Expo, JavaScript, TypeScript, HTML5/CSS3
- **Backend**: Python, Django, Django REST Framework, Node.js, Express.js, REST APIs
- **Databases**: PostgreSQL, MongoDB, MySQL, Redis, Firebase
- **Cloud & DevOps**: AWS, S3, Docker, Dokku, Git, CI/CD
- **Commerce & UI**: Shopify, Liquid, Web Pixels, responsive UI, UI/UX implementation`);
        setIsLoading(false);
      }, 500);
      return;
    }

    if (lowercaseText === "/projects" || lowercaseText.includes("best project") || lowercaseText.includes("project")) {
      setTimeout(() => {
        addMessage("assistant", `🚀 **Shani's Featured Projects**
Shani builds live real-estate and business platforms used for property discovery, sales operations, CRM, telecalling, and customer workflows.

Other major projects include:
- **InhouseCaller** - Live internal CRM and telecalling platform for Gharwale.com
- **Gharwale.com App** - Live real-estate mobile app available on Google Play
- **Gharwale.in** - Live property listing and discovery platform
- **TrueSpace Realty CRM** - Live internal real-estate sales and customer management platform
- **ClotheStore** - Virtual clothing try-on web application using React, Python, MongoDB, and AWS S3`);
        setIsLoading(false);
      }, 500);
      return;
    }

    if (lowercaseText === "/hire" || lowercaseText.includes("why hire") || lowercaseText.includes("hire")) {
      setTimeout(() => {
        addMessage("assistant", `💼 **Why Hire Shani Mishra?**
1. **Production experience**: Builds and maintains live internal platforms for real-estate sales, CRM, telecalling, and operations.
2. **Full-stack delivery**: Works across React, React Native, Node.js, Express.js, Python, Django, databases, APIs, and AWS.
3. **End-to-end ownership**: Handles architecture, deployment, CI/CD, cloud storage, debugging, and business requirements.
4. **Real-estate expertise**: Has delivered property discovery apps, sales CRMs, telecalling systems, and multiple real-estate websites.`);
        setIsLoading(false);
      }, 500);
      return;
    }

    if (lowercaseText === "/contact" || lowercaseText.includes("contact")) {
      setTimeout(() => {
        addMessage("assistant", `📞 **Connect with Shani:**
 - **Email**: shanimishra284@gmail.com
 - **Location**: Virar, Maharashtra, India
- **GitHub**: github.com/ShaniMishra9695
- **LinkedIn**: linkedin.com/in/shani-mishra-28838b25a

Feel free to send a message via the form at the bottom of the page or reach out directly!`);
        setIsLoading(false);
      }, 500);
      return;
    }

    if (lowercaseText === "/help") {
      setTimeout(() => {
        addMessage("assistant", `Available commands:
- \`/skills\` - List technical skills
- \`/projects\` - Show featured projects
 - \`/hire\` - View Shani's value propositions
- \`/contact\` - Display contact details
 - Or ask about Shani's experience, projects, skills, or availability.`);
        setIsLoading(false);
      }, 500);
      return;
    }

    // Call Groq API route for custom queries
    try {
      // Create message list for LLM context, converting state messages format
      const apiMessages = messages
        .filter((msg) => msg.role !== "system-alert")
        .map((msg) => ({
          role: msg.role,
          content: msg.content
        }));
      
      // Append latest message
      apiMessages.push({ role: "user", content: text });

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ messages: apiMessages })
      });

      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }

      const data = await response.json();
      const aiReply = data?.choices?.[0]?.message?.content || "Sorry, I received an empty response. Please try again.";
      addMessage("assistant", aiReply);
    } catch (error) {
      console.error("Chat API error:", error);
      addMessage("system-alert", "System Error: Failed to fetch reply from Groq. Please verify your internet connection or check API logs.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const scrollTerminalSection = () => {
    setIsOpen(false);
    const terminalSec = document.getElementById("terminal-section");
    if (terminalSec) {
      terminalSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button 
        className="chat-trigger-btn hover-target" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat with Shani's AI Agent"
      >
        <span className="chat-trigger-glow"></span>
        <span className="pulse-dot"></span>
        <MessageSquare size={16} />
        <span>Agent System</span>
      </button>

      {/* Main Panel Drawer */}
      {isOpen && (
        <>
          <div className="chat-deck-overlay" onClick={() => setIsOpen(false)} />
          <div
            className="chat-deck-container"
            onWheel={(event) => event.stopPropagation()}
            onTouchMove={(event) => event.stopPropagation()}
          >
            {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-header-title">KOUSHIK-AGENT-DECK</div>
              <div className="chat-status">
                <span className="chat-status-dot"></span>
                <span>SYSTEM ONLINE</span>
              </div>
            </div>
            <div className="chat-header-actions">
              <button 
                className="chat-header-btn hover-target" 
                onClick={scrollTerminalSection}
                title="Scroll to main Command Terminal"
              >
                <TerminalIcon size={14} />
              </button>
              <button 
                className="chat-header-btn hover-target" 
                onClick={() => setIsOpen(false)}
                title="Close chat panel"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="chat-messages">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`message-bubble ${msg.role}`}
              >
                <div className="message-label">
                  {msg.role === "user" ? "USER_RECRUITER" : msg.role === "assistant" ? "SYSTEM_AGENT" : "SYSTEM_WARN"}
                </div>
                <div style={{ whiteSpace: "pre-wrap" }}>
                  {msg.content.replace(/`/g, "").split(/(\*\*.*?\*\*)/g).map((part, index) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={index}>{part.slice(2, -2)}</strong>
                    ) : (
                      <React.Fragment key={index}>{part}</React.Fragment>
                    )
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message-bubble assistant animate-pulse">
                <div className="message-label">SYSTEM_AGENT</div>
                <span className="cursor-blink">_ Processing Groq Response...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions Bar */}
          <div className="chat-quick-actions">
            <button className="quick-action-pill hover-target" onClick={() => handleSend("⚡ Top Skills")}>
              ⚡ Top Skills
            </button>
            <button className="quick-action-pill hover-target" onClick={() => handleSend("🚀 Best Project")}>
              🚀 Best Project
            </button>
            <button className="quick-action-pill hover-target" onClick={() => handleSend("💼 Why Hire")}>
              💼 Why Hire
            </button>
            <button className="quick-action-pill hover-target" onClick={() => handleSend("📞 Contact")}>
              📞 Contact
            </button>
          </div>

          {/* Connection Shortcuts Panel */}
          <div className="chat-connect-panel">
            <div className="chat-connect-title">Connect with Shani</div>
            <div className="chat-connect-grid">
              <a href="https://drive.google.com/file/d/1lLITzaQICOw54E92fvjqcO44Rbk6hy-M/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="chat-connect-link hover-target">RESUME</a>
              <a href="https://www.linkedin.com/in/shani-mishra-28838b25a/" target="_blank" rel="noopener noreferrer" className="chat-connect-link hover-target">LINKEDIN</a>
              <a href="https://github.com/ShaniMishra9695" target="_blank" rel="noopener noreferrer" className="chat-connect-link hover-target">GITHUB</a>
              <a href="mailto:shanimishra284@gmail.com" className="chat-connect-link hover-target">EMAIL</a>
            </div>
          </div>


          {/* Input Bar */}
          <div className="chat-input-bar">
            <input
              type="text"
              className="chat-input-field"
              placeholder="Ask a question or type code..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
            />
            <button 
              className="chat-voice-btn hover-target" 
              title="Voice Input (visual placeholder)"
              onClick={() => addMessage("system-alert", "Mic access is visual only. Type your questions directly!")}
            >
              <Mic size={16} />
            </button>
            <button 
              className="chat-send-btn hover-target" 
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              title="Send message"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
        </>
      )}
    </>
  );
}
