import "./singleproduct.css"


const SingleProduct = ({ product }) => {
  console.log(product);

  const { img1, title, mrp, strike, discount } = product;

  return (
    <div id="single-product-parent" >
      <section
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",

          height: "200px",
          width: "250px",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <img style={{ maxHeight: "90%", maxWidth: "90%" }} src={img1} alt="" />
      </section>

      <section>
{/* 
      title and ratings div */}
<div id="single-product-heading"><p >{title}</p></div> 


<div></div>


      </section>
    </div>
  );
};

export default SingleProduct;
