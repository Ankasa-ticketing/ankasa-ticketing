const PrimaryButton = ({ children }) => {
  return (
    <>
      <button
        type="submit"
        style={{
          backgroundColor: "#2395FF",
          color: "white",
          borderRadius: "5px",
          border: "0",
          boxShadow: "0px 4px 8px #2395FF",
        }}
        className="my-2 fw-bold w-100 p-2"
      >
        {children}
      </button>
    </>
  );
};

export default PrimaryButton;
