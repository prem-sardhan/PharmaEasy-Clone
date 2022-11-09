import "./card.css";

const Card = ({ ele,displayProp="grid" }) => {
    console.log(displayProp)
    
  return (
    <div style={{  marginTop: "20px" ,display:`${displayProp} `}}>
      <div
      id="card-img-div"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",

          height: "170px",
          width: "150px",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img style={{maxHeight:"70%",maxWidth:"80%"}} src={ele.damImages[0].url} alt="" />
      </div>

      <div
        style={{
          textAlign: "start",
          paddingLeft: "10px",
          fontSize: "0.9em",
          width: "150px",
          fontSize:"16px"
        }}
      >
        <p
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            lineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {ele.name}
        </p>
        <p style={{ color: "grey" }}>
          MRP <s>{`₹${ele.mrpDecimal}`}</s>
        </p>
        <p style={{ fontWeight: "bold" }}>
          ₹{ele.salePriceDecimal} &nbsp;{" "}
          <span style={{ color: "red" }}>{`${ele.discountPercent}% OFF`}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
