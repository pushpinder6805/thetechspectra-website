import Link from "next/link";
import {
  SiAnthropic,
  SiDeepseek,
  SiGooglegemini,
  SiHuggingface,
  SiMistralai,
  SiPerplexity,
  SiQwen,
} from "react-icons/si";
import Cta from "./components/Cta";
import Icon from "@components/Icon";

const capabilities = [
  {
    number: "01",
    icon: "bot",
    title: "AI agents & assistants",
    text: "Create agents that answer questions, use tools, and handle real tasks with your business rules in place.",
  },
  {
    number: "02",
    icon: "integration",
    title: "AI inside your app",
    text: "Add helpful AI features to an existing website, SaaS product, mobile app, or internal platform.",
  },
  {
    number: "03",
    icon: "spark",
    title: "Business workflow automation",
    text: "Connect AI to the processes your team repeats, from sorting requests to drafting and routing work.",
  },
  {
    number: "04",
    icon: "search",
    title: "Answers from your knowledge",
    text: "Help teams and customers find useful answers across your documents, product information, and data.",
  },
  {
    number: "05",
    icon: "chat",
    title: "Chatbots that do more",
    text: "Build support and sales bots that understand context and connect with the systems you already use.",
  },
  {
    number: "06",
    icon: "shield",
    title: "Custom AI integrations",
    text: "Integrate model APIs, SaaS tools, databases, and existing business logic into one dependable flow.",
  },
];

const providers = [
  { name: "OpenAI", models: "GPT", wordmark: "openai" },
  { name: "Anthropic", models: "Claude", icon: SiAnthropic },
  { name: "Google", models: "Gemini", icon: SiGooglegemini },
  { name: "Meta", models: "Llama", wordmark: "meta" },
  { name: "xAI", models: "Grok", wordmark: "xAI" },
  { name: "Mistral AI", models: "Mistral", icon: SiMistralai },
  { name: "DeepSeek", models: "DeepSeek", icon: SiDeepseek },
  { name: "Perplexity", models: "Sonar", icon: SiPerplexity },
  { name: "Amazon", models: "Bedrock", wordmark: "aws" },
  { name: "Microsoft", models: "Azure AI", wordmark: "MS" },
  { name: "Cohere", models: "Command", wordmark: "co" },
  { name: "Hugging Face", models: "Open models", icon: SiHuggingface },
  { name: "Alibaba", models: "Qwen", icon: SiQwen },
];

function WorkflowVisual() {
  return (
    <div className="ai-visual" role="img" aria-label="AI connects your business data, models, and apps into one workflow">
      <div className="ai-visual-topline">
        <span><i /> WORKFLOW STUDIO</span>
        <span className="ai-visual-status"><i /> Ready</span>
      </div>
      <div className="ai-flow">
        <div className="ai-flow-node ai-flow-source">
          <span className="ai-node-icon"><Icon name="database" size={20} /></span>
          <span><strong>Your business</strong><small>Data · rules · tools</small></span>
        </div>
        <div className="ai-flow-line"><i /></div>
        <div className="ai-flow-core">
          <span className="ai-orbit ai-orbit-one" />
          <span className="ai-orbit ai-orbit-two" />
          <span className="ai-core-icon"><Icon name="spark" size={25} /></span>
          <strong>AI layer</strong>
          <small>Reason · retrieve · act</small>
        </div>
        <div className="ai-flow-line"><i /></div>
        <div className="ai-flow-node ai-flow-result">
          <span className="ai-node-icon"><Icon name="app" size={20} /></span>
          <span><strong>Useful outcomes</strong><small>Apps · people · workflows</small></span>
        </div>
      </div>
      <div className="ai-visual-footer">
        <div className="ai-activity"><span className="ai-activity-dot" /><span><strong>Context connected</strong><small>Your systems stay in the loop</small></span></div>
        <span className="ai-visual-tag"><Icon name="shield" size={14} /> Built around your rules</span>
      </div>
      <span className="ai-visual-glow" aria-hidden="true" />
    </div>
  );
}

export default function AIIntegration({ data }) {
  const { title, call_to_action } = data.frontmatter;

  return (
    <>
      <section className="section inner-page ai-hero-section">
        <div className="container">
          <div className="ai-hero">
            <div className="ai-hero-copy">
              <span className="eyebrow"><Icon name="spark" size={15} /> AI THAT FITS THE WAY YOU WORK</span>
              <h1>{title}<span>.</span></h1>
              <p>Bring AI into your business, your software, or the way your team works. We build practical agents, bots, and integrations around your goals and business logic.</p>
              <div className="ai-hero-actions">
                <Link className="btn btn-primary" href="/contact">Build with AI <Icon size={17} /></Link>
                <a className="btn btn-secondary" href="#capabilities">Explore what’s possible</a>
              </div>
              <div className="ai-trust-line"><span><Icon name="check" size={15} /> Works with your existing tools</span><span><Icon name="check" size={15} /> Designed for your use case</span></div>
            </div>
            <WorkflowVisual />
          </div>
        </div>
      </section>

      <section className="section ai-capabilities" id="capabilities">
        <div className="container">
          <div className="section-heading ai-section-heading">
            <div><span className="eyebrow">FROM FIRST IDEA TO REAL WORKFLOW</span><h2>AI that does useful work.</h2></div>
            <p>Whether you’re starting fresh or improving an existing product, we fit the technology to the job.</p>
          </div>
          <div className="service-grid ai-capability-grid">
            {capabilities.map((item) => (
              <article className="service-card ai-capability-card" key={item.number}>
                <div className="card-top"><span className="icon-tile"><Icon name={item.icon} size={22} /></span><span className="card-number">{item.number}</span></div>
                <h3>{item.title}</h3><p>{item.text}</p>
                <span className="ai-card-accent" aria-hidden="true"><Icon name="arrow" size={16} /></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section ai-model-section">
        <div className="container">
          <div className="ai-model-panel">
            <div className="ai-model-copy">
              <span className="eyebrow">FLEXIBLE BY DESIGN</span>
              <h2>Choose the right model for the job.</h2>
              <p>We can connect leading AI models and platforms to your product. Pick a provider based on quality, speed, privacy, and budget—or combine models where it makes sense.</p>
              <Link className="ai-inline-link" href="/contact">Discuss your AI stack <Icon size={16} /></Link>
            </div>
            <div className="ai-provider-grid" aria-label="AI model providers">
              {providers.map(({ name, models, icon: BrandIcon, wordmark }) => (
                <div className="ai-provider" key={name}>
                  <span className={`ai-provider-mark ${wordmark ? `mark-${wordmark.toLowerCase()}` : ""}`} aria-hidden="true">
                    {BrandIcon ? <BrandIcon /> : <span>{wordmark}</span>}
                  </span>
                  <span className="ai-provider-label"><strong>{name}</strong><small>{models}</small></span>
                </div>
              ))}
            </div>
            <p className="ai-provider-note">Model and provider availability depends on your access, requirements, and preferred setup.</p>
          </div>
        </div>
      </section>

      <section className="section ai-usecase-section">
        <div className="container">
          <div className="ai-usecase-layout">
            <div className="ai-usecase-art" aria-hidden="true">
              <div className="ai-usecase-art-head"><span className="ai-art-dot" /><span className="ai-art-dot" /><span className="ai-art-dot" /><small>YOUR AI WORKSPACE</small></div>
              <div className="ai-art-message ai-art-user"><span className="ai-art-avatar">Y</span><span><small>YOUR TEAM</small><strong>Summarise new customer feedback</strong></span><i>10:42</i></div>
              <div className="ai-art-message ai-art-agent"><span className="ai-art-avatar"><Icon name="spark" size={16} /></span><span><small>AI ASSISTANT</small><strong>Feedback grouped into 4 themes</strong><em><b /> Product ideas <b /> Support trends <b /> Urgent</em></span></div>
              <div className="ai-art-tool"><Icon name="integration" size={16} /><span>Connected to your help desk</span><Icon name="check" size={15} /></div>
              <span className="ai-art-orb ai-art-orb-one" /><span className="ai-art-orb ai-art-orb-two" />
            </div>
            <div className="ai-usecase-copy">
              <span className="eyebrow">YOUR RULES. YOUR DATA. YOUR AI.</span>
              <h2>Works with your business logic.</h2>
              <p>AI should fit the systems and decisions your business already depends on. We connect the right models to your data and tools, then shape how they respond and act.</p>
              <ul className="ai-benefit-list">
                <li><Icon name="check" size={18} /><span><strong>Keep your process</strong><small>Use your existing rules, approvals, and workflows.</small></span></li>
                <li><Icon name="check" size={18} /><span><strong>Connect your stack</strong><small>Bring websites, apps, APIs, and SaaS tools together.</small></span></li>
                <li><Icon name="check" size={18} /><span><strong>Start with a clear use case</strong><small>Build a focused solution that can grow with you.</small></span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Cta cta={call_to_action} />
    </>
  );
}
