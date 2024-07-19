import funny from "../Assets/svg/funny.png";
import witty from "../Assets/svg/witty.png";
import bright from "../Assets/svg/bright.png";
import strong from "../Assets/svg/strong.png";
import cute from "../Assets/svg/cute.png";
import supportive from "../Assets/svg/supportive.png";
import caring from "../Assets/svg/caring.png";
import goofy from "../Assets/svg/goofy.png";


export const traitImage = (food) => {
  const foodID = food.toLowerCase();
  switch (foodID) {
    case "funny":
      return funny;
    case "witty":
      return witty;
    case "bright":
      return bright;
    case "strong":
      return strong;
    case "cute":
      return cute;
    case "supportive":
      return supportive;
    case "caring":
      return caring;  
    case "goofy":
      return goofy
    default:
      break;
  }
};
