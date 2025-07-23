import type { Component } from "solid-js";

import "./SkillSection.scss";
import Section from "../../../../core/layout/Section/Section";
import Carousel from "./components/Carousel/Carousel";

import angular from "../../../../../assets/images/skill_section/angular.webp";
import csharp from "../../../../../assets/images/skill_section/csharp.webp";
import css from "../../../../../assets/images/skill_section/css.webp";
import go from "../../../../../assets/images/skill_section/Go_Logo_Blue.webp";
import html from "../../../../../assets/images/skill_section/html.webp";
import js from "../../../../../assets/images/skill_section/js.webp";
import mariadb from "../../../../../assets/images/skill_section/mariadb.webp";
import mongo from "../../../../../assets/images/skill_section/mongo.webp";
import node from "../../../../../assets/images/skill_section/node.webp";
import postgres from "../../../../../assets/images/skill_section/Postgresql.webp";
import react from "../../../../../assets/images/skill_section/React.webp";
import sass from "../../../../../assets/images/skill_section/sass.webp";
import solid from "../../../../../assets/images/skill_section/solid.webp";
import ts from "../../../../../assets/images/skill_section/TS.webp";

const firstHalfSkills = [
  { name: "Angular", icon: angular },
  { name: "C#", icon: csharp },
  { name: "CSS", icon: css },
  { name: "Go", icon: go },
  { name: "HTML", icon: html },
  { name: "JavaScript", icon: js },
  { name: "MariaDB", icon: mariadb },
];

const secondHalfSkills = [
  { name: "MongoDB", icon: mongo },
  { name: "Node.js", icon: node },
  { name: "PostgreSQL", icon: postgres },
  { name: "React", icon: react },
  { name: "Sass", icon: sass },
  { name: "SolidJS", icon: solid },
  { name: "TypeScript", icon: ts },
];

const SkillSection: Component = () => {
  return (
    <Section>
      <h2 class="skill-section__title">Skills</h2>
      <div class="skill-section__carousel">
        <Carousel skills={firstHalfSkills} reverseRoll={false} />
        <Carousel skills={secondHalfSkills} reverseRoll={true} />
      </div>
    </Section>
  );
};

export default SkillSection;
