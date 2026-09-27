ki module.exports = {
  config: {
    name: "boss",
    aliases: [],
    version: "1.0.0",
    author: "Shakib",
    role: 0,
    countDown: 0,

    description: {
      en: "Automatically replies when someone calls boss."
    },

    category: "system",

    guide: {
      en: "{pn}"
    }
  },

  onStart: async function () {},

  onChat: async function ({ event, message }) {
    try {
      const text = String(event.body || "")
        .toLowerCase()
        .trim();

      if (!text) return;

      const triggers = [
        "mim",
        "mim re",
        "মিম",
        "mim koi",
        "mim kothay",
        "mim acho",
        "mim asho",
        "mim kemon acho",
        "মিম কই",
        "মিম কোথায়",
        "মিম আছো",
        "মিম আসো",
        "মিম কেমন আছো"
      ];

      const matched = triggers.some(trigger =>
        text.includes(trigger)
      );

      if (!matched) return;

      return message.reply(
        "⎯⎯“জি বস, আমি তো সবসময় আপনার হুকুমের অপেক্ষায় আছি'হহ 😎🫡🔥"
      );

    } catch (error) {
      console.error("boss command error:", error);
    }
  }
};
