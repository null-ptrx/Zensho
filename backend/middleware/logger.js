import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath} from 'url'
export const logger = async (req, res, next) => {
    let pathUrl = import.meta.url;
    let realPath = fileURLToPath(pathUrl);
    let dir = path.dirname(realPath);
    let logsDir =  path.join(dir, 'logs');
    let finalPath = path.join(logsDir, 'logs.txt');
    await fs.mkdir(logsDir, {recursive : true});
    const date = new Date().toISOString();
    await fs.appendFile(finalPath, `${date} ${req.method} ${req.url}\n`)
    next();
}