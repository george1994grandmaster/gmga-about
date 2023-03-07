export const timeFormatter = (timestamp) => {
  let howLongAgo;
  // Get the current time
  let currentTime = new Date();
  // Calculate the difference between the current time and the timestamp in milliseconds
  let timeDifference = currentTime.getTime() - timestamp;

  // Convert the time difference to different measurements --> measurement name can be found via variable name
  let timeDifferenceInSeconds = timeDifference / 1000;
  let timeDifferenceInMinutes = timeDifferenceInSeconds / 60;
  let timeDifferenceInHours = timeDifferenceInMinutes / 60;
  let timeDifferenceInDays = timeDifferenceInHours / 24;
  let timeDifferenceInWeeks = timeDifferenceInDays / 7;
  let timeDifferenceInMonths = timeDifferenceInWeeks / 4;
  let timeDifferenceInYears = timeDifferenceInMonths / 12;

  // Use a switch statement to determine the appropriate time period
  switch (true) {
    case timeDifferenceInSeconds < 60:
      howLongAgo = `${Math.round(timeDifferenceInSeconds)} s`;
      break;
    case timeDifferenceInMinutes < 60:
      howLongAgo = `${Math.round(timeDifferenceInMinutes)} mnt`;
      break;
    case timeDifferenceInHours < 24:
      howLongAgo = `${Math.round(timeDifferenceInHours)} h`;
      break;
    case timeDifferenceInDays < 7:
      howLongAgo = `${Math.round(timeDifferenceInDays)} d`;
      break;
    case timeDifferenceInWeeks < 4:
      howLongAgo = `${Math.round(timeDifferenceInWeeks)} w`;
      break;
    case timeDifferenceInMonths < 12:
      howLongAgo = `${Math.round(timeDifferenceInMonths)} mths`;
      break;
    default:
      howLongAgo = `${Math.round(timeDifferenceInYears)} y`;
      break;
  }
  return howLongAgo;
};

export const dateToTimestamp = (date) => {
  return new Date(date).getTime();
};

export const imageLink = "https://app.mountainguide.ge/uploads/images/";
