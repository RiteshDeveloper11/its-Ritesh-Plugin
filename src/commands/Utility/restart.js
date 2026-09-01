import {
    SlashCommandBuilder,
    PermissionFlagsBits,
    MessageFlags
} from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('restart')
        .setDescription('Restart the bot.')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {
        await interaction.reply({
            content: '🔄 Restarting the bot...',
            flags: MessageFlags.Ephemeral
        });

        setTimeout(() => {
            process.exit(1);
        }, 1000);
    }
};
