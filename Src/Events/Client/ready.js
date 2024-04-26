module.exports = {
    name: "ready",
    runOnce: true,
    
    run: async (client) => {
        console.log(" The Bot Has Been Logged In! ".bold.green + `Client Name:`.bold.underline.red +` ${client.user.tag}`.bold.cyan)

        const activities = [
            `Kicking All Spy.pet Bots`
        ];

        setInterval(() => {
                client.user.setPresence({ 
                    activities: [
                        {
                            name: `${activities[Math.floor(Math.random() * activities.length)]}`, 
                            type: 3
                        }
                    ],  
                    status: 'online',   
                });
        }, 15000);
    

    } 
};
