import React from "react";

function ProjectBackgroud({ projectBackground }) {
  return (
    <div className="mt-2">
      <p className="font-bold font-nova text-h3 leading-h2 tracking-h3 mb-8">
        Project Background
      </p>
      <p className="font-sans text-body-2 leading-[30px]">
        {projectBackground}
      </p>
    </div>
  );
}

export default ProjectBackgroud;
