import { markdownify } from "@lib/utils/textConverter";
import ContactForm from "@components/ContactForm";
import Icon from "@components/Icon";

export default function Contact({ data }) {
  const { title, info } = data.frontmatter;
  return (
    <section className="section inner-page">
      <div className="container">
        <div className="page-heading">
          <span className="eyebrow">START A CONVERSATION</span>
          <h1>{title}</h1>
          <p>
            A new idea, a tricky challenge, or your next big step. Tell us what
            you have in mind.
          </p>
        </div>
        <div className="contact-grid">
          <ContactForm />
          <aside className="contact-info">
            <span className="icon-tile">
              <Icon name="spark" size={26} />
            </span>
            <h2>{info.title}</h2>
            {markdownify(info.description, "p")}
            {info.contacts?.length > 0 && (
              <ul className="contact-list">
                {info.contacts.map((contact, index) => (
                  <li key={index}>{markdownify(contact, "div")}</li>
                ))}
              </ul>
            )}
            <div className="contact-expect">
              <h3>A clear path forward</h3>
              {[
                "Talk through your goals",
                "Explore the right approach",
                "Define the scope together",
              ].map((item) => (
                <p key={item}>
                  <Icon name="check" size={17} />
                  {item}
                </p>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
