import React from "react";
import googleBadge from "../images/googlebadge.webp";
import "../Blog.css";

export default function Blog() {
  return (
    <div className="blog-container">

      {/* Week 2 Post */}
      <div className="blog-entry">
        <h1>Week 2: Narrowing the Focus and Asking Better Questions</h1>
        <p><strong>Date:</strong> April 17, 2025</p>

        <p>My research question is now fully formed: <em>How has artificial intelligence evolved from a theoretical concept rooted in science fiction to a real-world technology shaping modern life?</em> It gives me a broad enough range to explore technical development and cultural influence, but it also keeps me focused on the timeline and impact of AI.</p>

        <p>This week I made good progress. I completed Google’s Introduction to AI course and earned a badge, which I’ve added to this blog below:</p>

        <img 
          src={googleBadge} 
          alt="Google Introduction to Generative AI Badge" 
          style={{ width: "200px", marginTop: "10px", borderRadius: "8px" }} 
        />

        <p>I’ve been reading <em>The Coming Wave</em> by Mustafa Suleyman, which is helping me understand how major technological shifts shape the world. I also pulled sources from JSTOR, Stanford, and Google’s AI research pages. I’ve started a list of useful articles and am beginning to decide which ones are strong enough to cite. I feel slightly ahead, but I need to slow down and start reading more deeply rather than collecting too much.</p>

        <p>The biggest issue I’ve run into is how much material I’ve gathered. It’s more than I can reasonably include in a 12 to 15 page paper. I’m starting to organize and filter the sources. My plan is to keep the strongest ones and remove anything that doesn’t directly support the research question.</p>

        <p>Next week, I plan to:</p>
        <ul>
          <li>Continue reading <em>The Coming Wave</em></li>
          <li>Visit the library</li>
          <li>Review JSTOR and academic sources again</li>
        </ul>

        <p>As I’ve been working, I’ve come across new terms and tools. Vertex AI Studio showed up in one of the articles, and I learned about information containment, the idea that powerful technologies can be mitigated but never fully controlled. Suleyman makes strong points by comparing AI to earlier turning points in history like the Gutenberg press or the Model T. One quote stuck with me: <em>“Our species is not wired to truly grapple with transformation on this scale.”</em> That reminded me of how unprepared we often are when new systems emerge faster than we can adapt.</p>

        <p>I’ve started grouping sources into categories:</p>
        <ul>
          <li>Academic research: JSTOR, peer-reviewed journals</li>
          <li>Corporate technical: Google AI blog, Gemini documentation</li>
          <li>Expert opinion: Suleyman’s book, Stanford HAI pieces</li>
          <li>Educational: Google’s AI course, 365 Data Science</li>
          <li>Media: Wired, McKinsey, and NYT Tech coverage</li>
        </ul>

        <p>My main keywords have been “artificial intelligence,” “evolution of AI,” “science fiction and AI,” and “M5 Unit Star Trek.” These helped me find both technical and cultural references. Along the way, I had to look up terms like NPU (neural processing unit), DeepMind, pessimism aversion trap, and misinformation apocalypse. They’re helping me understand the risks and future directions of AI.</p>

        <p>Some things I already knew without researching: I’ve worked with ChatGPT, Bard, Genesis, Copilot, and deepseek. I somewhat know how they behave and how to get the best out of them. I know <em>Star Trek</em> like the back of my hand, so I remembered the M5 Unit and Dr. Daystrom immediately. I also already knew about Deep Blue beating Garry Kasparov in 1997. That moment told the world that AI wasn’t just a theory, it could compete with us.</p>

        <p>I still don’t fully understand how neural networks are created or what tech is behind them. That’s my biggest knowledge gap right now.</p>
      </div>

      {/* Week 1 Post */}
      <div className="blog-entry">
        <h1>Week 1: From Science Fiction to Reality</h1>
        <p><strong>Date:</strong> April 10, 2025</p>
        <p>This week I started digging into the foundations of artificial intelligence to get a better understanding of where the field started, how it has changed, and what it looks like today. I watched three helpful videos that gave me a solid overview:</p>
        <ul>
          <li>Google’s AI for Beginners</li>
          <li>A Brief History of AI</li>
          <li>Artificial Intelligence Explained</li>
        </ul>
        <p>One of the main things I learned is that machine learning is a subset of AI. There are different types of models depending on the task. Here’s a breakdown of the main types I explored:</p>
        <ul>
          <li><strong>Supervised learning:</strong> Uses labeled data to make predictions. For example, it can be used in fraud detection, where the model learns from known examples of fraud and non-fraud.</li>
          <li><strong>Unsupervised learning:</strong> Works with unlabeled data and finds patterns or clusters on its own, often used in data segmentation or anomaly detection.</li>
          <li><strong>Semi-supervised learning:</strong> Combines a small amount of labeled data with a large amount of unlabeled data. It’s used when labeling every data point is too time-consuming or expensive.</li>
          <li><strong>Deep learning:</strong> A more advanced type of machine learning that uses neural networks with multiple layers. This is what powers models like ChatGPT.</li>
          <li><strong>Generative models:</strong> Learn from existing data and create new content like images, text, or audio. Generative AI tools are based on these models.</li>
          <li><strong>Discriminative models:</strong> Focus on classifying input, such as determining whether a transaction is fraudulent or not based on learned differences.</li>
        </ul>
        <p>Deep learning takes things further by using artificial neural networks modeled after how the brain works. These systems have layers of virtual neurons that pass data forward and adjust based on what they learn. In <em>Star Trek: Voyager</em>, they referred to the ship’s computer as a neural net, which feels surprisingly close to how modern deep learning systems work today.</p>
        <p>That connection to science fiction is one reason I chose this topic. Growing up, I watched a lot of science fiction, and <em>Star Trek</em>, <em>2001: A Space Odyssey</em>, and <em>The Terminator</em> are just a few of the examples that really stuck with me. They all showed different possibilities for AI. In <em>The Next Generation</em>, Data was an android who was intelligent and precise but didn’t understand emotion. Later, when he got an emotion chip, he struggled to make sense of feelings and humor. HAL 9000 in <em>2001</em> was calm and logical until he turned on the humans. In <em>The Terminator</em>, AI evolved into a threat that nearly wiped out humanity. These stories made me think about the risks, responsibilities, and potential of AI long before I ever saw it in real life.</p>
        <p>Now, AI is part of our everyday lives. It helps power things like Netflix recommendations, fraud detection, auto summaries in email, and even creative tools that generate images or write text. That brought me to something else I learned this week: LLMs, or large language models. These models are trained on massive datasets and are designed to understand and generate language. ChatGPT is an example of an LLM. It’s part of a larger area called generative AI, which takes input and turns it into something new, whether that’s a spreadsheet, an article, or even a video.</p>
        <p>Some key moments from the history of AI stood out to me:</p>
        <ul>
          <li>1950: Alan Turing introduced the Turing Test and asked if machines can think</li>
          <li>1956: The term artificial intelligence was coined at Dartmouth</li>
          <li>1960s–1970s: The AI Winter slowed research due to lack of funding and progress</li>
          <li>1997: IBM’s Deep Blue beat chess champion Garry Kasparov</li>
          <li>2006: Geoffrey Hinton published research that revived interest in deep learning</li>
          <li>2012: Jeff Dean and Andrew Ng published work on large-scale neural networks</li>
          <li>2017: Google Brain improved natural language processing</li>
          <li>2018–2022: OpenAI released the GPT series and made ChatGPT public</li>
        </ul>
        <p>I also found a new resource called <strong>365 Data Science</strong> that offers tutorials and lessons on AI and machine learning. I’ll be using it throughout this project since it breaks concepts down clearly and builds on what I’m already learning.</p>
        <p>This week gave me a solid starting point. It helped me understand what AI really is, how it connects to science fiction, and how fast it's moving in the real world. I’m looking forward to building on what I’ve learned as the project continues.</p>
      </div>

      {/* Introductory Post */}
      <div className="blog-entry">
        <h1>AI Research Paper</h1>
        <p><strong>Date:</strong> April 7, 2025</p>
        <p>Hello, my name is <strong>April V. Sykes</strong>. I’m currently taking <strong>IS390 IS Reading and Research</strong>, and this blog is part of my coursework.</p>
        <p>I’m interested in how technology evolves and how ideas that once seemed like science fiction eventually become reality. That’s why I chose to research <em>“The Evolution of Artificial Intelligence: From Science Fiction to Reality.”</em></p>
        <p>This blog will follow my 10-week research process. I’ll be using it to document my thoughts, research progress, and personal reflections as I explore how AI has developed over time and where it might be going.</p>
        <p>By the end, this will serve as a record of what I’ve learned and how my thinking has grown throughout the project.</p>
      </div>
    </div>
  );
}
