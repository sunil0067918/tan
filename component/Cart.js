const Cart = () => {
  return (
    <>
      <div className="cart_header">
        <div className="cart_logo">
          <h3>
            bags{" "}
            <svg
              width="5"
              height="6"
              viewBox="0 0 5 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2.5" cy="3" r="2.5" fill="#E5DFD9" />
            </svg>{" "}
            backpacks
          </h3>
        </div>

        <div className="left_logo">
          <h3>
            {" "}
            13 product{" "}
            <svg
              width="19"
              height="23"
              viewBox="0 0 19 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 10.7805V22H17.6667V10.7805M9.33333 15.6585V2M9.33333 2L14.75 7.41667M9.33333 2L3.91667 7.41667"
                stroke="#E5DFD9"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Cart;
