import Link from "next/link";
import Cta from "./components/Cta";
import Icon from "@components/Icon";

const capabilities = [
  {
    icon: "board",
    title: "Projects, boards & lists",
    text: "Organize work by project, then move tasks through clear statuses on boards and lists.",
  },
  {
    icon: "users",
    title: "Team workspaces",
    text: "Bring projects and team members together with roles and administrative controls.",
  },
  {
    icon: "calendar",
    title: "Plans & deadlines",
    text: "Assign owners, set priorities and due dates, and map work across a project timeline.",
  },
  {
    icon: "message",
    title: "Collaboration in context",
    text: "Keep project conversations, comments, files, and notifications close to the work.",
  },
  {
    icon: "clock",
    title: "Time & workload",
    text: "Track time and understand how work is distributed across the team.",
  },
  {
    icon: "chart",
    title: "Progress & reports",
    text: "See project progress and productivity through useful reports and dashboards.",
  },
];

function TaskautomationPreview() {
  return (
    <div
      className="opensource-preview"
      role="img"
      aria-label="Illustration of a Taskautomation project board with tasks, progress, priorities, and team workload"
    >
      <div className="opensource-window-bar">
        <span className="opensource-window-dots"><i /><i /><i /></span>
        <span className="opensource-window-title">TASKAUTOMATION / PRODUCT LAUNCH</span>
        <span className="opensource-window-menu">···</span>
      </div>
      <div className="opensource-dashboard">
        <aside className="opensource-sidebar">
          <span className="opensource-mini-brand"><Icon name="board" size={16} /></span>
          <small>WORKSPACE</small>
          <b><i /> Product team</b>
          <small>PROJECTS</small>
          <span className="opensource-sidebar-link active"><i /> Product launch</span>
          <span className="opensource-sidebar-link"><i /> Website refresh</span>
          <span className="opensource-sidebar-link"><i /> Mobile app</span>
          <span className="opensource-sidebar-bottom"><Icon name="users" size={14} /> Team settings</span>
        </aside>
        <div className="opensource-board">
          <div className="opensource-board-heading">
            <div><small>PROJECT / Q3 ROADMAP</small><strong>Product launch</strong></div>
            <div className="opensource-avatars"><i>AM</i><i>JK</i><i>+3</i></div>
          </div>
          <div className="opensource-board-meta">
            <span><Icon name="calendar" size={13} /> Due Aug 28</span>
            <span><i /> On track</span>
          </div>
          <div className="opensource-board-columns">
            <div className="opensource-column">
              <div className="opensource-column-title"><i className="todo-dot" /> To do <small>3</small></div>
              <article><small>DESIGN</small><b>Review onboarding flow</b><footer><span className="priority medium">Medium</span><i>AM</i></footer></article>
              <article><small>PRODUCT</small><b>Confirm launch checklist</b><footer><span className="priority high">High</span><i>JK</i></footer></article>
            </div>
            <div className="opensource-column">
              <div className="opensource-column-title"><i className="progress-dot" /> In progress <small>2</small></div>
              <article><small>ENGINEERING</small><b>Connect workspace roles</b><footer><span className="priority high">High</span><i>SL</i></footer></article>
              <article><small>CONTENT</small><b>Prepare release notes</b><footer><span className="priority low">Low</span><i>AM</i></footer></article>
            </div>
            <div className="opensource-column column-done">
              <div className="opensource-column-title"><i className="done-dot" /> Done <small>4</small></div>
              <article><small>RESEARCH</small><b>Collect early feedback</b><footer><span className="priority done-priority">Complete</span><i>JK</i></footer></article>
            </div>
          </div>
          <div className="opensource-board-foot"><span><Icon name="chart" size={14} /> Project progress</span><div><i /><b /></div><strong>68%</strong></div>
        </div>
      </div>
      <div className="opensource-floating-note"><span><Icon name="users" size={15} /></span><div><b>Team workload</b><small>Balanced across 5 members</small></div><i>↗</i></div>
    </div>
  );
}

function SelfHostedVisual() {
  return (
    <div className="opensource-hosting-visual" role="img" aria-label="Taskautomation running on your own server with your team and data in your control">
      <div className="opensource-hosting-label"><span className="opensource-hosting-pulse" /> YOUR INFRASTRUCTURE</div>
      <div className="opensource-hosting-flow">
        <div className="hosting-people"><span><Icon name="users" size={21} /></span><b>Your team</b><small>Members & roles</small></div>
        <div className="hosting-connection"><i /></div>
        <div className="hosting-server"><span><Icon name="server" size={25} /></span><b>Your server</b><small>VPS or self-managed</small><div><i /> Taskautomation</div></div>
        <div className="hosting-connection"><i /></div>
        <div className="hosting-data"><span><Icon name="shield" size={21} /></span><b>Your data</b><small>Projects & files</small></div>
      </div>
      <div className="opensource-hosting-foot"><Icon name="check" size={16} /> Keep control of your users, projects, and infrastructure.</div>
      <span className="hosting-orbit orbit-a" /><span className="hosting-orbit orbit-b" />
    </div>
  );
}

export default function OpenSource({ data }) {
  const { title, call_to_action } = data.frontmatter;

  return (
    <>
      <section className="section inner-page opensource-hero-section">
        <div className="container">
          <div className="opensource-hero">
            <div className="opensource-hero-copy">
              <span className="eyebrow"><Icon name="code" size={15} /> BUILT IN THE OPEN</span>
              <h1>{title}<span>.</span></h1>
              <p>We’re creating practical software that teams can use, inspect, and run on their own terms. Taskautomation is our first open source project in development.</p>
              <div className="opensource-actions">
                <a className="btn btn-primary" href="#taskautomation">Explore Taskautomation <Icon size={17} /></a>
                <Link className="btn btn-secondary" href="/contact">Talk with us</Link>
              </div>
              <div className="opensource-status"><i /> Taskautomation <span>IN DEVELOPMENT</span></div>
            </div>
            <TaskautomationPreview />
          </div>
        </div>
      </section>

      <section className="section opensource-project-section" id="taskautomation">
        <div className="container">
          <div className="opensource-project-heading">
            <div>
              <span className="eyebrow">PROJECT 01 / TEAM PRODUCTIVITY</span>
              <h2>Meet Taskautomation.</h2>
              <p>A self-hosted project management and team collaboration platform for teams that want to organize work while keeping control of their own data and infrastructure.</p>
            </div>
            <div className="opensource-project-actions">
              <a
                className="btn btn-secondary opensource-github-link"
                href="https://github.com/pushpinder6805/Taskautomation"
                target="_blank"
                rel="noopener noreferrer"
              >
                View source on GitHub <Icon size={16} />
              </a>
              <span className="opensource-project-badge"><Icon name="server" size={16} /> Self-hosted</span>
            </div>
          </div>
          <div className="opensource-feature-grid">
            {capabilities.map((feature, index) => (
              <article className="opensource-feature-card" key={feature.title}>
                <span className="icon-tile"><Icon name={feature.icon} size={21} /></span>
                <span className="opensource-feature-number">0{index + 1}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section opensource-hosting-section">
        <div className="container">
          <div className="opensource-hosting-layout">
            <SelfHostedVisual />
            <div className="opensource-hosting-copy">
              <span className="eyebrow">YOUR SERVER. YOUR CONTROL.</span>
              <h2>Self-host it on your own infrastructure.</h2>
              <p>Taskautomation is being designed for installation on a VPS or server you control. Your organization can manage its own users, projects, files, and infrastructure.</p>
              <ul>
                <li><Icon name="check" size={17} /><span><b>Control your workspace</b><small>Manage team access and administration.</small></span></li>
                <li><Icon name="check" size={17} /><span><b>Keep work in one place</b><small>Tasks, comments, attachments, and updates stay connected.</small></span></li>
                <li><Icon name="check" size={17} /><span><b>Understand progress</b><small>Plan timelines, track workload, and review reports.</small></span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section opensource-next-section">
        <div className="container">
          <div className="opensource-next-card">
            <div className="opensource-next-art" aria-hidden="true">
              <span className="opensource-next-orbit orbit-1" /><span className="opensource-next-orbit orbit-2" />
              <span className="opensource-next-icon"><Icon name="spark" size={28} /></span>
              <span className="opensource-next-star star-one">✳</span><span className="opensource-next-star star-two">✦</span>
            </div>
            <div><span className="eyebrow">MORE PROJECTS ARE ON THE WAY</span><h2>One project to start. More to come.</h2><p>We’re working on additional open source ideas. We’ll share them here as they take shape.</p><Link className="ai-inline-link" href="/contact">Suggest a project or collaboration <Icon size={16} /></Link></div>
            <span className="opensource-next-label"><i /> Coming soon</span>
          </div>
        </div>
      </section>

      <Cta cta={call_to_action} />
    </>
  );
}
