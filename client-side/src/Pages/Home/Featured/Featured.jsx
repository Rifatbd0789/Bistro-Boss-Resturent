import SectionTitle from "../../../componenets/Sectiontitle/Sectiontitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "../Featured/Featured.css";
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle subHeading="check it out" heading="Featured Item" />
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-40">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 80, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            tenetur, sapiente blanditiis corporis iure pariatur quibusdam animi
            sint neque doloremque. Vel, aut placeat accusantium aspernatur
            voluptatibus autem accusamus, laudantium velit neque earum hic nam,
            laboriosam aperiam. Facere repudiandae distinctio quae ea minima
            velit nisi tempore exercitationem ab praesentium? Ab, nisi.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
