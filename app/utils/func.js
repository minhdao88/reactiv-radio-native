function withLeadingZero(amount) {
  if (amount < 10) {
    return `0${amount}`;
  } else {
    return `${amount}`;
  }
}

export function formattedTime(timeInSeconds) {
  let minutes = Math.floor(timeInSeconds / 60);
  let seconds = timeInSeconds - minutes * 60;

  if (isNaN(minutes) || isNaN(seconds)) {
    return "";
  } else {
    return `${withLeadingZero(minutes)}:${withLeadingZero(seconds.toFixed(0))}`;
  }
}
