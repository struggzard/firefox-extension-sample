const createNotification = () => {
    browser.notifications.create({
        "type": "basic",
        "iconUrl": browser.extension.getURL("icons/notification_black_48dp.png"),
        "title": "Hi!",
        "message": "Just test content :)"
    });
};

const timeout = 30000; // 30s

const mainLoop = () => setTimeout(() => {
    createNotification();
    mainLoop();
}, 30000);

mainLoop();