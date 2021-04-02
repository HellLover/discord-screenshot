import chalk from "chalk"
import fetch from "node-fetch"

const BASE_URL: string = "https://image.thum.io/get/width/1920/crop/675/noanimate/";

class DiscordScreenshoter {

    constructor() {
        throw new Error(`The ${this.constructor.name} class may not be instantiated!`);
    }

    /**
	 * Screenshoting the site
	 * @param site The specified site to screenshot
     * @param log Console log or not
	*/

    static async screenshot(site: string, log: boolean = true) {
        
        if(!site) throw new Error(chalk.red("[ERROR: SCREENSHOTER] No site URL provided!"))

        const url: string = /^(https?:\/\/)/i.test(site) ? site : `http://${site}`
        const { body } = await fetch(`${BASE_URL}${url}`);

        if(log === true) {
            console.log("Screenshot is ready");
        }
        return body;
    }
}

export { DiscordScreenshoter };