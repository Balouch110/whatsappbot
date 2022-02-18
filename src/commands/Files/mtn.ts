import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import request from '../../lib/request'
import { MessageType, Mimetype} from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'mtn',
            description: 'sends an HC file for MTN .',
            category: 'files',
            usage: `${client.config.prefix}mtn`,
            baseXp: 30
        })
    }
    run = async (M: ISimplifiedMessage): Promise<void> => {

        
        
        

        return void M.reply(this.client.assets.get('mtn.hc'),

            Mimetype : Mimetype.document,
            

            undefined,

            

undefined

        ).catch((reason: any) => M.reply(`✖ An error occurred. Please try again later. ${reason}`))

    }

}
