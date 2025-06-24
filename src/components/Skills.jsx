import Section from "./layout/Section";
import SkillCard from "./SkillCard";
import { allSkills } from "contentlayer/generated";
import { sortByOrder } from "../utils/sortByOrder";

export default function Skills() {
  sortByOrder(allSkills);
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allSkills.map((skillObj) => (
          <SkillCard key={skillObj.category} {...skillObj} />
        ))}
      </div>
    </Section>
  );
}
