import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function Acoordion() {
  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <AccContainers faqObj={faq} num={i} />
      ))}
    </div>
  );
}

export default Acoordion;

function AccContainers({ faqObj, num, text }) {
  const [isOpen, SetIsOpen] = useState(false);

  function handleOpenItem() {
    SetIsOpen((item) => (item === false ? true : false));
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleOpenItem}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <h3 className="title">{faqObj.title}</h3>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box ">{faqObj.text}</div>}
    </div>
  );
}
