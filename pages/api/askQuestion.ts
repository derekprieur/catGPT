// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import query from '../../lib/queryApi'
import admin from 'firebase-admin';

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const {prompt, chatId, model, session} = req.body

    if (!prompt) {
        res.status(400).json({ answer: 'Please provide a prompt!' })
        return
    }

    if (!chatId) {
        res.status(400).json({ answer: 'Please provide a valid chat ID!' })
        return
    }

    const response = await query(prompt, chatId, model)

    const message: Message = {
      text: response || 'CatGPT was unable to find an answer to your question. Please try again later.',
      createdAt: admin.firestore.Timestamp.now(),
      user: {
        _id: 'catgpt',
        name: 'CatGPT',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Font_Awesome_5_solid_cat.svg/1024px-Font_Awesome_5_solid_cat.svg.png?20181017203525'
      },
    }

  res.status(200).json({ name: 'John Doe' })
}
