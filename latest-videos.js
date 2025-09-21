// latest-videos.js
const videosData = [
    {
        title: "Trust Wallet SHOCKS Market: Buy Tesla & Apple NOW! (RWA Update)",
        thumbnail: "assets/thumbnails/U6.jpg",
        url: "https://youtu.be/zzjPyoXKKvM"
    },
    {
        title: "Phemex: 100X Leverage + 1 SOL Rewards",
        thumbnail: "assets/thumbnails/U55.jpg",
        url: "https://youtu.be/F_wal84xaZs"
    },
    {
        title: "100x Crypto Gaming Gem? From CryptoKitties to SST Token",
        thumbnail: "assets/thumbnails/U3.jpg",
        url: "https://youtu.be/Cd4c6k1QnyI"
    },
    {
        title: "This Crypto Exchange Pays You $5,000 To Join?! (BingX)",
        thumbnail: "assets/thumbnails/U21.jpg",
        url: "https://youtu.be/d9olYHGwQHI"
    },
    {
        title: "Blockchains Get AI BRAINS! $25/Mo Passive Income (Aug 6 Drop)",
        thumbnail: "assets/thumbnails/U1.jpg",
        url: "https://youtu.be/Nqo24zohVo0"
    },
    {
        title: "Is This The #1 RWA Crypto For 2025? (Libertum Explained)",
        thumbnail: "assets/thumbnails/THUMB 92 PACK50.jpg",
        url: "https://youtu.be/_OaHW7j-Eq8"
    },
    {
        title: "FLOKI Is Changing Everything: New Hub, Real Utility & A Shocking Robotics Move!",
        thumbnail: "assets/thumbnails/fotor-ai-2025051416417.jpg",
        url: "https://youtu.be/iotdje_L6po"
    }
];

const container = document.getElementById("videos-container");

videosData.forEach(video => {
    const card = document.createElement("div");
    card.className = "video-card";

    card.innerHTML = `
        <img src="${video.thumbnail}" alt="${video.title}" class="video-thumb">
        <div class="video-overlay">
            <h3>${video.title}</h3>
            <a href="${video.url}" target="_blank" class="watch-btn">Watch</a>
        </div>
    `;

    container.appendChild(card);
});
