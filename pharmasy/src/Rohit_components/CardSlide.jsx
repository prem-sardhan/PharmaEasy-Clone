import Card from "./card";

const CardSlide = ({data}) => {
  return (
    <div style={{ display: "flex", gap: "20px", paddingLeft: "20px" }}>
      {data.map((ele) => {
        return <Card key={ele.productId} ele={ele}  />;
      })}
    </div>
  );
};

export default CardSlide;
