import latin from "../Assets/svg/latin.png";
import asian from "../Assets/svg/asian.png";
import italian from "../Assets/svg/italian.png";
import american from "../Assets/svg/american.png";
import mediterrean from "../Assets/svg/mediterrean.png";
import seafood from "../Assets/svg/african.png";

export const foodImage = (food) => {
  const foodID = food.toLowerCase();
  switch (foodID) {
    case "latin":
      return latin;
    case "asian":
      return asian;
    case "italian":
      return italian;
    case "american":
      return american;
    case "mediterrean":
      return mediterrean;
    case "seafood":
      return seafood;
    default:
      break;
  }
};
