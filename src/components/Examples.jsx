import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "../components/TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs>{tabContent}</Tabs>
      <menu>
        
      </menu>
      
    </Section>
  );
};

export default Examples;
