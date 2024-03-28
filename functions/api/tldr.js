import { Ai } from './vendor/@cloudflare/ai.js';

export default {
  async fetch(request, env) {
    const tasks = [];
    const ai = new Ai(env.AI);
    const u = new URL(request.url);
    const component = u.searchParams.get('component') || 'ns-card';
    const url = `https://beta.nucleus.design/components/${component}/`;
    const resp = await fetch(url);

    if (resp.ok) {
      let bodyText = '';
      const rewriter = new HTMLRewriter().on('.sl-markdown-content', {
        text(text) {
          if (!text.lastInTextNode) {
            bodyText += text.text;
          }
        },
      });

      await rewriter.transform(resp).text();

      // Post-processing the extracted text
      bodyText = cleanText(bodyText);
      bodyText = removeExcessiveDuplicates(bodyText);
      bodyText = removeEmojis(bodyText);

      // Ensure the text is under 4000 characters
      if (bodyText.length > 4096) {
        bodyText = bodyText.substring(0, 4096);
      }

      let chat = {
        messages: [
          { role: 'system', content: `You are acting as a summarization AI, and for the input text of the documentation (${url}) please summarize it to the most important 5 bullet points for brevity: ` },
          { role: 'user', content: bodyText },
          { role: 'user', content: bodyText }
        ]
      };
      const response = await ai.run('@cf/meta/llama-2-7b-chat-int8', {
        ...chat,
        stream: true
      });
      tasks.push({ inputs: chat, response });

      return new Response(tasks[0].response, { headers: { "content-type": "text/event-stream" } });

    } else {
      return new Response('Failed to fetch HTML content', { status: resp.status });
    }

    function cleanText(text) {
      let cleanedText = text.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

      return cleanedText;
    }

    function removeExcessiveDuplicates(text) {
      const words = text.split(/\s+/);
      const wordCounts = {};
      const maxOccurrences = 2;

      const filteredWords = words.filter((word) => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
        return wordCounts[word] <= maxOccurrences;
      });

      return filteredWords.join(' ');
    }

    function removeEmojis(text) {
      const emojiRegex = /[\u{1F600}-\u{1F64F}|\u{1F300}-\u{1F5FF}|\u{1F680}-\u{1F6FF}|\u{2600}-\u{26FF}|\u{2700}-\u{27BF}]/ug;

      return text.replace(emojiRegex, '');
    }
  }
};
