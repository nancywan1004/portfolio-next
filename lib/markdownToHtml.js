import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'

export default async function markdownToHtml(markdown) {
  const result = await unified().use(remarkParse).use(remarkHtml).process(markdown);
  //console.log(result.toString());
  return result.toString();
}
