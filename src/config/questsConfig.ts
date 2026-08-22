import { CustomClient } from "../core/customClient.js";

export default {
    notification: {
        token: "--", // Self account token (متروك مؤقتاً)
        channel: "1540726781114581012",
        role: "",
        dm: {
            enabled: false, // معطل لتفادي الأخطاء بدون توكن الحساب
            dmRoles: [],
        }
    },
    bypassLimit: [],
    durationQuests: [
        "WATCH_VIDEO",
        "PLAY_ON_DESKTOP",
        "STREAM_ON_DESKTOP",
        "PLAY_ACTIVITY",
        "WATCH_VIDEO_ON_MOBILE",
        "PLAY_ON_XBOX",
        "PLAY_ON_PLAYSTATION"
    ],

    image: {
        channelId: "1540726781114581012",
        guildId: "1534741355157258270",
    },
    serverId: "1534741355157258270",
    completedQuestsChannel: "1540726781114581012",
    voice: {
        channel: "1534744151873159368",
        role: ""
    },

    logStrings: [],
    childProcessCount: 1,
    questsPerChildProcess: 15,
    useProxy: false, // تم التعطيل ليعمل مباشرة بدون بروكسيات
    proxyType: "http",
    buttons: [
        {
            url: "https://discord.com",
            emoji: (e: CustomClient) => e.getEmoji("youtube", false) ?? "▶️",
        }
    ],

    customRewardsImage: {
        "1298745361602449479": "https://i.ibb.co/rRNztwKq/reward.webp",
        "1287881739531976815": "https://i.ibb.co/vxTHNqsS/eff35518172b971fa47c521ca21c7576d3a245433a669a6765f63b744b7b733a.png"
    },
    customRewardsEmoji: {
        "1287881739531976815": "orbIcon",
        "1298745361602449479": "nitro_level_stone"
    },
    inviteUrl: "https://discord.gg/",
    joinMessage: `## انت مو داخل السيرفر
    - **عشان تستعمل البوت لازم تدخل السيرفر ب الحساب الي تبي تسوي فيه المهمة**
    - **ملاحظة البوت مجاني 100%**`
};
