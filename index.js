import { send } from 'micro'
import getRawBody from 'raw-body'
import leftpad from 'left-pad'
import qs from 'querystring'
import url from 'url'

const limit = '1kb'

export default async function (req, res) {
  const body = await getRawBody(req, { limit, encoding: 'utf8' })
  const query = qs.parse(url.parse(req.url).query)
  const padded = leftpad(body, query.size || body.length, query.fill || ' ')
  send(res, 200, padded)
}
