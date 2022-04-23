import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import axios, { AxiosError } from 'axios'

interface ContactBody {
  message: string
  name: string
  email: string
}
export default async function handler(
  req: GatsbyFunctionRequest<ContactBody>,
  res: GatsbyFunctionResponse
): Promise<void> {
  if (
    req.method === 'POST' &&
    req.headers.origin === 'https://karolwaliszewski.pl' &&
    process.env.MAILER_URL
  ) {
    try {
      const data = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
      }
      const result = await axios.post(process.env.MAILER_URL, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.CLIENT_TOKEN}`,
        },
      })

      res.status(result.status).send(result.data)
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        res.status(error.response?.status || 500).send(error.response?.data)
      } else {
        res.status(500).send('Error occured')
      }
    }
  } else {
    res.status(401).send('Unauthorized')
  }
}
