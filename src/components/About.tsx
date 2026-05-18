import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <div className="code-editor">
          <div className="editor-header">
            <div className="mac-btns">
              <span className="mac-btn close"></span>
              <span className="mac-btn min"></span>
              <span className="mac-btn max"></span>
            </div>
            <div className="editor-title">developer.ts</div>
          </div>
          <div className="editor-body">
            <pre>
              <code>
                <span className="keyword">const</span> <span className="variable">developer</span> = {"{"}
                <br />
                {"  "}<span className="property">name</span>: <span className="string">"Aqib Jawed"</span>,
                <br />
                {"  "}<span className="property">role</span>: <span className="string">"Software Engineer & SDE Intern"</span>,
                <br />
                {"  "}<span className="property">passion</span>: <span className="string">"Building scalable, high-performance applications"</span>,
                <br />
                {"  "}<span className="property">focus</span>: [<span className="string">"Full-Stack"</span>, <span className="string">"AI Systems"</span>, <span className="string">"Cloud Architecture"</span>],
                <br />
                {"  "}<span className="method">innovate</span>() {"{"}
                <br />
                {"    "}<span className="keyword">return</span> <span className="string">"Transforming complex ideas into clean digital products."</span>;
                <br />
                {"  }"}
                <br />
                {"};"}
                <br />
                <br />
                <span className="variable">developer</span>.<span className="method">innovate</span>();<span className="cursor">|</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
