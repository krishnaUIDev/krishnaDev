// import { z } from 'zod';

// import { getSessionId } from '@/helpers/server';
// import {
//   getContentMeta,
//   getReactions,
//   getReactionsBy,
//   getSectionMeta,
// } from '@/lib/meta';

// import type { TApiResponse, TContentMetaDetail } from '@/types';
import type { NextApiRequest } from 'next';

export default async function handler(req: NextApiRequest, res) {
  // const slug = z.string().parse(req.query.slug);
  // const sessionId = getSessionId(req);

  try {
    if (req.method === 'GET') {
      // const meta = await getContentMeta();
      // const metaSection = await getSectionMeta();
      // const reactionsDetail = await getReactions();
      // const reactionsDetailUser = await getReactionsBy();

      // const reactionsSum = ''

      res.status(200).json({});
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);

    res.status(500).json({ message: 'Internal Server Error' });
  }
}
