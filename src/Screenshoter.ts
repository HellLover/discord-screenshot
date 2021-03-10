// This is my first TypeScript project, so... yes

import fetch from "node-fetch";
import chalk from "chalk";

const BASE_URL: string = "https://image.thum.io/get/width/1920/crop/675/noanimate/";

class HellScreenshoter {

    /**
	 * Screenshoting the site
	 * @param site The specified site to screenshot
     * @param log Console log or not
	*/

    static async screenshot(site: string, log: boolean = true): Promise<void> {
        
        if(!site) throw new Error(chalk.red("[ERROR: SCREENSHOTER] No site URL provided!"))

        const url: string = /^(https?:\/\/)/i.test(site) ? site : `http://${site}`
        const { body } = await fetch(`${BASE_URL}${url}`);

        if(log === true) {
            console.log("Screenshot is ready");
        }
        return body;
    }
}

export { HellScreenshoter };