const chalk = require("chalk");
const fetch = require("node-fetch")

const BASE_URL = "https://image.thum.io/get/width/1920/crop/675/noanimate/";

class DiscordScreenshoter {

    constructor() {
        throw new Error(`The ${this.constructor.name} class may not be instantiated!`);
    }

    /**
	 * Screenshoting the site
	 * @param site The specified site to screenshot
     * @param log Console log or not
	*/

    async screenshot(site, log = true) {
        
        if(!site) throw new Error(chalk.red("[ERROR: SCREENSHOTER] No site URL provided!"))

        const url = /^(https?:\/\/)/i.test(site) ? site : `http://${site}`
        const { body } = await fetch(`${BASE_URL}${url}`);

        if(log === true) {
            console.log("Screenshot is ready");
        }
        return body;
    }
}

module.exports = { DiscordScreenshoter }