import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img src="pages/sanath.jpg" alt="profile-pic" className="avatar" />;
}
function SkillList() {
  return (
    <>
      <div className="skill-list">
        <Card name="Html and Css💪" classNameattribute="htmlAndCss" />
        <Card name="Javascript💪" classNameattribute="javascript" />
        <Card name="Web design💪" classNameattribute="web" />
        <Card name="Git and Github👍" classNameattribute="git" />
        <Card name="React💪" classNameattribute="react" />
        <Card name="Svelete👶" classNameattribute="svelete" />
      </div>
    </>
  );
}
function Intro() {
  return (
    <div className="data">
      <h2>Sanath S Kamath</h2>
      <br />
      <p>
        Full stack web debeloper and student of the great teacher Jonas
        Schedtaman. Apart from coding i like to play badminton and football and
        love to watch cricket .Here my my top skills listed below
      </p>
    </div>
  );
}
function Card(props) {
  return (
    <>
      <div className="skill">
        <h2 className={props.classNameattribute}>{props.name}</h2>
      </div>
    </>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
