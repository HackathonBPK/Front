const index = ({ modules }) => {
  const handleExpandClasses = (id) => {
    console.log(id);
  };

  return (
    <div className="w-full h-5/6 flex flex-col items-center justify-start">
      <div className="w-full h-2/3">
        {modules.map((module, index) => (
          <div className="w-20 h-36 bg-gray-100 rounded flex flex-col items-start justify-start">
            <p>
              <strong>{module.Titulo}</strong>
            </p>
            <p>{module.description}</p>
            <p>{module.duration}</p>
            <button onClick={handleExpandClasses(module.id)}>expandir</button>
          </div>
        ))}
      </div>
      <hr />
      <div className="w-full h-1/3"></div>
    </div>
  );
};

export default index;
