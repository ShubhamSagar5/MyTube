
export const YOUTUBE_API_KEY = 'AIzaSyA6e89GHZVUV3ydEywfHUjk80AmIUnbGsg'

export const YOUTUBE_VIDEO_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='





export const  formatNumber = (numString) => {
    const num = parseFloat(numString);
    if (isNaN(num)) {
        return "Invalid input";
    }
    
    if (num < 1000) {
        return num.toString();
    } else if (num < 1000000) {
        return (num / 1000).toFixed(1) + "k";
    } else if (num < 1000000000) {
        return (num / 1000000).toFixed(1) + "m";
    } else {
        return (num / 1000000000).toFixed(1) + "b";
    }
}



export const getTimeSince = (dateString) => {
    const currentDate = new Date();
    const pastDate = new Date(dateString);

const timeDifference = currentDate.getTime() - pastDate.getTime();

    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);
    const monthsDifference = Math.floor(daysDifference / 30);
    const yearsDifference = Math.floor(monthsDifference / 12);

    if (yearsDifference > 0) {
        return yearsDifference + (yearsDifference === 1 ? " year ago" : " years ago");
    } else if (monthsDifference > 0) {
        return monthsDifference + (monthsDifference === 1 ? " month ago" : " months ago");
    } else if (daysDifference > 0) {
        return daysDifference + (daysDifference === 1 ? " day ago" : " days ago");
    } else if (hoursDifference > 0) {
        return hoursDifference + (hoursDifference === 1 ? " hour ago" : " hours ago");
    } else if (minutesDifference > 0) {
        return minutesDifference + (minutesDifference === 1 ? " minute ago" : " minutes ago");
    } else {
        return secondsDifference + (secondsDifference === 1 ? " second ago" : " seconds ago");
    }
}
