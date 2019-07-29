"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Wa_1 = require("mbake/lib/Wa");
const FileOpsBase_1 = require("mbake/lib/FileOpsBase");
const fs = require("fs-extra");
class AppLogic {
    async autoBake(appPath, itemPath, fileName) {
        const meta = new Wa_1.MetaPro(appPath);
        const res = await meta.autoBake(itemPath, fileName);
        return res;
    }
    async setPublishDate(appPath, itemPath, date) {
        const dat = new FileOpsBase_1.Dat(appPath + itemPath);
        dat.set('publishDate', date);
        await dat.write();
        const res = await this.autoBake(appPath, itemPath, 'dat.yaml');
        return res;
    }
    async clone(appPath, item, newItem) {
        const fo = new FileOpsBase_1.FileOps(appPath);
        const res = await fo.clone(item, newItem);
        return res;
    }
    async archive(appPath, itemPath, fileName) {
        const oldPath = appPath + itemPath;
        const targetPath = appPath + itemPath + '/archive/';
        if (!fs.existsSync)
            fs.mkdirSync(targetPath);
        const fo = new FileOpsBase_1.FileOps(appPath);
        const count = fo.count(fileName);
        await fs.copySync(oldPath + fileName, targetPath + fileName + count);
        const res = fs.pathExists(oldPath + fileName, targetPath + fileName + count) ? 'OK' : 'Err';
        return res;
    }
}
exports.AppLogic = AppLogic;