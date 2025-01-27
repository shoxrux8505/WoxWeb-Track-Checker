const { Bot } = require('grammy');
const fs = require('fs');
const cron = require('node-cron');

const bot = new Bot('7676777901:AAFUrc8iZuxY5Ildq_GA-oZoZiXvMYJyQmo');
bot.api.setMyCommands([
    { command: 'start', description: 'Начало работы с ботом' },
    // { command: 'addgroup', description: 'Добавить группу' },
    // { command: 'openaddedgroups', description: 'Добавленные группы' },
    // { command: 'openaddedchannels', description: 'Добавленные каналы' },
    // { command: 'openaddedusers', description: 'Добавленные пользователи' },
    // { command: 'send', description: 'Отправить сообщение' },
    // { command: 'setadmessage', description: 'Установить рекламное сообщение' },
    // { command: 'deletechannel', description: 'Удалить канал' },
    // { command: 'deletegroup', description: 'Удалить группу' },
    // { command: 'deleteuser', description: 'Удалить пользователя' }
]);

bot.command('start', (ctx) => {
    const welcomeText = 'Добро пожаловать в наш логистический сервис!';
    const imageUrl = 'https://unsplash.com/photos/male-programmer-working-on-desktop-computer-with-many-monitors-at-office-in-software-develop-company-website-design-programming-and-coding-technologies-5a5l72ti2YM'; // Замените на реальный URL картинки
    ctx.replyWithPhoto(imageUrl, {
        caption: welcomeText,
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Открыть чек лист !!!', web_app: { url: 'https://woxweb-tracker-list.netlify.app/' } }] 
            ],
        },
    });
});

bot.start();