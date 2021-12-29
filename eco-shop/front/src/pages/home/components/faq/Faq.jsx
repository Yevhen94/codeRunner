import React, { useState, useContext } from "react";
import LangContext from "../../../../context/Context";
import AccordionItem from "../../../../elements/accordion/Accordion";
import style from "./faq.module.scss";

const Faq = () => {
  const { content } = useContext(LangContext);

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const titleStyles = {
    width: "90%",
    fontWeight: "bold",
  };
  return (
    <>
      <div className={`${style.questions} block-size`}>
        <div className={style["questions-title"]}>
          <h2 className="title title--home-resize">{content.homeFaq.title}</h2>
        </div>
        <div className={style["questions-content"]}>
          {content.faqPage.content.common.map((item, index) => (
            <AccordionItem
              expanded={expanded === `panel${index + 1}`}
              onChange={handleChange(`panel${index + 1}`)}
              aria-controls={`panel${index + 1}bh-content`}
              id={`panel${index + 1}bh-header`}
              titleStyle={titleStyles}
              title={item.title}
              content={item.content}
              key={Date.now + index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
