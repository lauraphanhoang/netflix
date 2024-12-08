const Section = ({ data }) => {
  return (
    //   console.log(props.data); console.log({data})
    <>
      {data.map((elem, index) => {
        return (
          <section key={index}>
            <p className="title">{elem.category}</p>
            <div className="movies-List">
              {elem.images.map((elem, index) => {
                return <img key={index} src={elem} alt="movies" />;
              })}
            </div>
          </section>
        );
      })}
    </>
  );
};
export default Section;
