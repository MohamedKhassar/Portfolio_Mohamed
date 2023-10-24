import img from "../../assets/36.png"

const SlideImg = () => {
  return (
    <div className="flex justify-end -translate-x-[200px] translate-y-[280px]">
      <img src={img} alt=""  className="w-[300px] dark:border-cyan-900 rounded-full border-blue-900 border-8" />
    </div>
  );
}


export default SlideImg;
