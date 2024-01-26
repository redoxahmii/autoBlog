export function convertTime(time: number | string | null) {
  if (!time) return;
  // Convert string representation to timestamp if needed
  const timestamp = typeof time === "string" ? new Date(time).getTime() : time;

  const date = new Date(timestamp);
  const currenttime = new Date();

  // Calculate the time difference
  const timeDiff = currenttime.getTime() - date.getTime();
  const diffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const diffMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

  // Format the difference time
  let diffTimeString = "";

  if (diffDays > 0) {
    diffTimeString += `${diffDays} day${diffDays > 1 ? "s" : ""}`;
  }

  if (diffHours > 0) {
    diffTimeString += ` ${diffHours} hour${diffHours > 1 ? "s" : ""}`;
  }

  if (diffMinutes > 0) {
    diffTimeString += ` ${diffMinutes} minute${diffMinutes > 1 ? "s" : ""}`;
  }

  // Format the provided time
  const formattedTime = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  // console.log(`Difference: ${diffTimeString} ago`);
  // console.log(`Formatted Time: ${formattedTime}`);

  return diffTimeString;
}
