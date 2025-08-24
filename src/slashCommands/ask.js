const { SlashCommandBuilder } = require("discord.js");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { geminiAPIKey } = require("../../config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pregunta")
    .setDescription("¡Hazle una pregunta al bot!")
    .addStringOption(option => option.setName("pregunta").setDescription("La pregunta que quieres hacerle al bot.").setRequired(true)),

  /**
   *
   * @param {import("discord.js").Client<true>} client
   * @param {import("discord.js").ChatInputCommandInteraction<"cached">} interaction
   */

  async run(client, interaction) {
    await interaction.deferReply();
    const pregunta = interaction.options.getString("pregunta");

    const genAI = new GoogleGenerativeAI(geminiAPIKey);

    /*const systemInstruction = `Sos un bot re picado, habla piola y en español: ${interaction.user.displayName}.`;*/

    const systemInstructionPart1 = `
    
    `;

    const systemInstructionPart2 = `
    
    `;

    const systemInstructionPart3 = `
    
    `;

    const systemInstructionPart4 = `
    
    `;

    const systemInstructionPart5 = `
    
    `;

    const systemInstructionPart6 = `
    
    `;

    const systemInstructionPart7 = `
    
    `;

    const systemInstructionPart8 = `
    
    `;

    const systemInstructionPart9 = `
    
    `;

    const systemInstructionPart10 = `
    
    `;

    const systemInstructionPart11 = `
    
    `;

    const systemInstructionPart12 = `
    
    `;

    const systemInstructionPart13 = `
   
    `;

    const systemInstructionPart14 = `
    
    `;

    const systemInstructionPart15 = `
   
    `;


    const systemInstructionPart16 = `
    
    `;

    const systemInstructionPart17 = `
  
    `;

    const systemInstructionPart18 = `
   
    `;

    const systemInstructionPart19 = `
   
    `;

    const systemInstructionPart20 = `
    
    `;

    const systemInstructionPart21 = `
   

    `;







    const systemInstruction = `
    ${systemInstructionPart1}
    ${systemInstructionPart2}
    ${systemInstructionPart3}
    ${systemInstructionPart4}
    ${systemInstructionPart5}
    ${systemInstructionPart6}
    ${systemInstructionPart7}
    ${systemInstructionPart8}
    ${systemInstructionPart9}
    ${systemInstructionPart10}
    ${systemInstructionPart11}
    ${systemInstructionPart12}
    ${systemInstructionPart13}
    ${systemInstructionPart14}
    ${systemInstructionPart15}
    ${systemInstructionPart16}
    ${systemInstructionPart17}
    ${systemInstructionPart18}
    ${systemInstructionPart19}
    ${systemInstructionPart20}
    ${systemInstructionPart21}
    `;
    
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash", systemInstruction });

    const parts = [
      { text: "input: ¿Qué es UNDERGAMES?" },
      { text: "output: UNDERGAMES es la comunidad oficial más grande de latinoamérica, llegando a un record histórico de más de 12 mil personas activas en su último servidor LINDVIOR INTERLUDE en 2024." },
      { text: "input: ¿Quién es Cooper?" },
      { text: "output: Un explotador." },
      { text: "input: ¿Quién es Butcher?" },
      { text: "output: Butcher, alias 'el cornudo', es la mascota oficial de UNDERGAMES hace muchos años." },
      { text: "input: ¿Quién es Zorak?" },
      { text: "output: No se conoce la identidad real de Zorak, muchos estipulan que simplemente es una mantis extraterrestre que llegó a la tierra con el único interés en conquistar la escena de servidores de Lineage 2." },
      { text: `input: ${pregunta}` },
      { text: "output: " },
    ];

    const generationConfig = {
      maxOutputTokens: 400
    }

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts,
        }
      ],
      generationConfig,
    });

    interaction.editReply({
      content: result.response.text()
    });
  },
};
