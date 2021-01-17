// Base URL
const base_url = "https://api.rawg.io/api/";

// getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDay();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// const day/month/year
const currentYear = new Date().getFullYear();
const currenMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currenMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currenMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currenMonth}-${currentDay}`;

// _____________Popular games
const popular_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=5`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;

// _____________Upcoming Games
const upcoming_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${currentDate},${nextYear}&ordering=-added&page_size=5`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;

// _____________New Games
const newGames = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-released&page_size=5`;
export const newGamesUrl = () => `${base_url}${newGames}`;

// Game details
export const gameDetailsUrl = (game_id) =>
  `${base_url}games/${game_id}?key=${process.env.REACT_APP_RAWG_API}`;
