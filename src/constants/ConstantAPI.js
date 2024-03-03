
export const YOUTUBE_API_KEY = 'AIzaSyAxwqANxIvxGhrscBaK4nykR2FyiWv1Zkw'

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


var nameList = [
    "Aarav",
    "Vivaan",
    "Aditya",
    "Arjun",
    "Ishaan",
    "Reyansh",
    "Kabir",
    "Advik",
    "Vihaan",
    "Shaurya",
    "Rudra",
    "Aryan",
    "Dhruv",
    "Ayaan",
    "Atharv",
    "Aadi",
    "Aaradhya",
    "Ananya",
    "Saanvi",
    "Myra",
    "Avni",
    "Anika",
    "Kiara",
    "Anaya",
    "Aanya",
    "Aditi",
    "Pari",
    "Riya",
    "Avisha",
    "Tara",
    "Aashi",
    "Ishita",
    "Aarohi",
    "Anvi",
  ];
  
  export const randomNameGenerator = ()=> {
  return nameList[Math.floor(Math.random() * nameList.length)];
      };
      


    export  function randomMessageGenerator() {
        const comments = [
            "Great video, informative!",
            "Loved it, learned!",
            "Short and sweet!",
            "Helpful content, clear!",
            "Awesome, changed mind!",
            "Nice job, explained!",
            "Super helpful, thanks!",
            "Very informative, loved!",
            "Interesting topic, engaging!",
            "Amazing video, insightful!",
            "Excellent job, continue!",
            "Clear and concise!",
            "Great content, follows!",
            "Very helpful, thanks!",
            "Informative video, fantastic!",
            "Fantastic job, thanks!",
            "Short and impactful!",
            "Impressive work, thanks!",
            "Awesome content, helpful!",
            "Insightful, thank you!"
        ];
      
        // Generate a random index
        const randomIndex = Math.floor(Math.random() * comments.length);
      
        // Return a random comment
        return comments[randomIndex];
      }    
      

  
  export const OFFSETCOUNT = 25



 export  function generateRandomProfilePicUrl() {
    const width = 200; // Specify the width of the image
    const height = 200; // Specify the height of the image
    const randomId = Math.floor(Math.random() * 1000); // Generate a random ID for the image
    return `https://picsum.photos/${width}/${height}?random=${randomId}`;
  }
  
  // Example usage
  const randomProfilePicUrl = generateRandomProfilePicUrl();
  

export const  generateFiveDigitNumber= () => {
    // Generate a random number between 10000 and 99999
    return Math.floor(Math.random() * 90000) + 10000;
}