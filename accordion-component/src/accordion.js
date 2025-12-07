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
  const [currOpen, SetcurrOpen] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <AccContainers
          currOpen={currOpen}
          onCurrOpen={SetcurrOpen}
          title={faq.title}
          num={i}
          key={faq.title}
        >
          {faq.text}
        </AccContainers>
      ))}
      <AccContainers
        currOpen={currOpen}
        onCurrOpen={SetcurrOpen}
        title="Test 1"
        num={23}
        key="test 1"
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusuable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccContainers>
    </div>
  );
}

export default Acoordion;

function AccContainers({ title, num, currOpen, onCurrOpen, children }) {
  const isOpen = num === currOpen;
  function handleOpenItem() {
    onCurrOpen(isOpen ? null : num);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleOpenItem}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <h3 className="title">{title}</h3>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box ">{children}</div>}
    </div>
  );
}
