//Declare verse list
var numb=0;
var myQuotes = [
    {verse:"And we know that all things work together for good to those who love God, to those who are the called according to His purpose.", referance:"Romans 8:28"},
    {verse:"The LORD is my light and my salvation; whom shall I fear? The LORD is the strength of my life; of whom shall I be afraid?", referance:"Psalm 27:1"},
    {verse:"But the salvation of the righteous is from the LORD; He is their strength in time of trouble.", referance:"Psalm 37:39"},
    {verse:"But Jesus looked at them and said to them, ‘With men this is impossible, but with God all things are possible.", referance:"Matthew 19:26"},
    {verse:"Therefore we do not lose heart. Even though our outward man is perishing, yet the inward man is being renewed day by day.", referance:"2 Corinthians 4:16"},
    {verse:"I can do all things through Christ who strengthens me.", referance:"Philippians 4:13"},
    {verse:"For God has not given us a spirit of fear, but of power and of love and of a sound mind.", referance:"2 Timothy 1:7"},
    {verse:"Who shall separate us from the love of Christ? Shall tribulation, or distress, or persecution, or famine, or nakedness, or peril, or sword?", referance:"Romans 8:35"},
    {verse:"Yet in all these things we are more than conquerors through Him who loved us. For I am persuaded that neither death nor life, nor angels nor principalities nor powers, nor things present nor things to come, nor height nor depth, nor any other created thing, shall be able to separate us from the love of God which is in Christ Jesus our Lord.", referance:"Romans 8:37-39"},
    {verse:"Therefore humble yourselves under the mighty hand of God, that He may exalt you in due time, casting all your care upon Him, for He cares for you.", referance:"1 Peter 5:6-7"},
    {verse:"These things I have spoken to you, that in Me you may have peace. In the world you will have tribulation; but be of good cheer, I have overcome the world.", referance:"John 16:33"},
    {verse:"Yea, though I walk through the valley of the shadow of death, I will fear no evil; for You are with me; Your rod and Your staff, they comfort me. … Surely goodness and mercy shall follow me all the days of my life; and I will dwell in the house of the LORD forever.", referance:"Psalm 23:4, 6"},
    {verse:"He heals the brokenhearted and binds up their wounds.", referance:"Psalm 147:3"},
    {verse:"Let your conduct be without covetousness; be content with such things as you have. For He Himself has said, ‘I will never leave you nor forsake you.’ So we may boldly say: ‘The LORD is my helper; I will not fear. What can man do to me?", referance:"Hebrews 13:5-6"},
    {verse:"Many are the afflictions of the righteous, but the LORD delivers him out of them all.", referance:"Psalm 34:19"}
    ];

function myFunction() {
    
  
      //Used to select random number between zero and less than 16
      numb=Math.floor((Math.random() * 16)+1);
      document.getElementById("quote").innerHTML = myQuotes[numb].verse;
      document.getElementById("reference").innerHTML = myQuotes[numb].referance;
     // document.getElementById("quote").innerHTML = numb;
}