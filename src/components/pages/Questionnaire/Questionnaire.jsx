import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import QuestionnaireParticule from "../../organisms/QuestionParticule/QuestionParticule";
import particlesOptions from "../../toolkit/particule";

const Questionnaire = () => {
  return (
    <div className="bg-gray-700">
      <Particles
        id="tsparticles"
        options={particlesOptions}
        init={(tsParticles) => loadSlim(tsParticles)}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />
      <QuestionnaireParticule />
    </div>
  );
};

export default Questionnaire;
