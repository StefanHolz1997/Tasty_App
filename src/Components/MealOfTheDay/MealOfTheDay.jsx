// meal of the day =   motd
// <MealOfTheDay MealTitle="Full English Breakfast" TagText="Breakfast" AreasText="British" />
import CircleIcon from "@mui/icons-material/Circle";
import "./MealOfTheDay.css";
const MealOfTheDay = (props) => {
  return (
    <>
      <section className="motd-section">
        <h2>Meal of the Day</h2>
        <article className="motd-card">
          <div>
            <h2>{props.MealTitle}</h2>
            <div className="motd-flex">
              <div className="motd-tag-container">
                <CircleIcon style={{ color: "#C4C4C4" }} />
                <p>{props.TagText}</p>
              </div>
              <p>{props.AreasText}</p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default MealOfTheDay;
