const getStarIcon = (isFilled, color, id) => {
  if (isFilled) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
        className="star-icon"
        viewBox="0 0 512 512"
        key={id}
      >
        <title>Star</title>
        <path
          d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
          stroke={color}
          strokeLinejoin="round"
          strokeWidth="25"
        />
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="star-icon"
        fill={color}
        viewBox="0 0 512 512"
        key={id}
      >
        <title>Star</title>
        <path
          d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
          // stroke="black"
          strokeLinejoin="round"
          strokeWidth="25"
        />
      </svg>
    );
  }
};
export default function getRating(rating) {
  const ratingOutOfFive = rating / 2;
  const roundedRating = Math.ceil(ratingOutOfFive);
  const markup = [];
  for (let i = 0; i < 5; i++) {
    if (i < roundedRating) {
      markup.push(getStarIcon(true, "#FDCC0D", i));
    } else {
      markup.push(getStarIcon(false, "transparent", i));
    }
  }
  return markup;
}
