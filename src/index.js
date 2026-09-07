const joplin = require('api');

joplin.plugins.register({
    onStart: async function() {
        // ۱. ثبت دستور کلیک
        await joplin.commands.register({
            name: 'toggleOneTheme',
            label: 'Toggle Dark / Light Mode',
            iconName: 'fas fa-adjust', // آیکون دو رنگ ماه/خورشید
            execute: async () => {
                // نمایش پیام تایید یا ارسال دستور سوییچ
                alert('حالت تم تغییر کرد!');
            },
        });

        // ۲. اضافه کردن دکمه به نوار ابزار بالای نوت‌ها
        await joplin.views.toolbarButtons.create(
            'toggleOneThemeBtn',
            'toggleOneTheme',
            'noteToolbar'
        );
    },
});
