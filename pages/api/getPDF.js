import stream from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';

const pipeline = promisify(stream.pipeline);
const url = 'http://localhost:3000/assets/Nancy(Leqi)_Wan_Resume_2022_.pdf';

const handler = async (req, res) => {
  const response = await fetch(url); // replace this with your API call & options
  if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=Nancy(Leqi)_Wan_Resume_2022_.pdf');
  await pipeline(response.body, res);
};

export default handler;