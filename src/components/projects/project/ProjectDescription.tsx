const ProjectDescription = ({ description }: { description: string }) => {
  return (
    <>
      <h2>Overview</h2>
      <p>{description}</p>
    </>
  );
};

export default ProjectDescription;
