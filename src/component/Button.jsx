const Button = (props) => {
  return (
    <button id="button" type="submit" className="bg-[#6889FF] hover:bg-[#3D62E5] w-[310px] h-[48px] rounded-[8px] text-white font-bold text-[16px]">
      {props.button}
    </button>
  );
};

export default Button;
