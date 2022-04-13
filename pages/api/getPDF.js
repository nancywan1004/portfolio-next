import stream from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';
import { getResumeFile } from '../../lib/data';

const pipeline = promisify(stream.pipeline);

const handler = async (req, res) => {
  const resumes = await getResumeFile();
  const response = await fetch(resumes[0]?.resumeFile?.url); // replace this with your API call & options
  if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=Nancy(Leqi)_Wan_Resume_2022_.pdf');
  await pipeline(response.body, res);
};

export default handler;