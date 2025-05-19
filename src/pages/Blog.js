import React, { useState } from "react";
import googleBadge from "../images/googlebadge.webp";
import "../Blog.css";
import commonImage from "../images/CommonStandard/common.jpg";
import standardImage from "../images/CommonStandard/standard.jpg";

function CollapsibleEntry({ title, date, children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="blog-entry">
      <h1>{title}</h1>
      <p><strong>Date:</strong> {date}</p>
      <div className={expanded ? "expanded" : "collapsed"}>
        {children}
      </div>
      <button onClick={() => setExpanded(!expanded)} className="read-more-btn">
        {expanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
}

export default function Blog() {
  return (
    <div className="blog-container">
      <CollapsibleEntry title="Week 6: Realigning the Plan" date="May 15, 2025">
        <p>
          This week's journal entry includes a briefing memo that summarizes my
          research progress so far. I'm behind on the original timeline but not
          off track. I've completed the Introduction and History sections. I
          expected to be working on the Technical Specifics section by now, but
          other responsibilities pulled me away from the project more than I
          planned. I've still made good use of the time I did have.
        </p>

        <p>
          I focused on organizing source material, refining the literature
          matrix, and identifying where I need stronger support in the Technical
          Specifics section. I've also started planning for the final
          presentation and decided to use Prezi. It's a better fit for the way I
          want to walk through AI's evolution visually, especially since I'll be
          showing how it moved from science fiction to real-world
          infrastructure.
        </p>

        <p>
          Next week is about regaining momentum. I'll finish the Technical
          Specifics section, finalize sources, and outline the next two
          sections: Concerns and Privacy. I hope to have a full draft by the end
          of the week.
        </p>

        <h2>MEMORANDUM</h2>
        <p>
          <strong>TO:</strong> Richard Becker
          <br />
          <strong>FROM:</strong> April Sykes
          <br />
          <strong>RE:</strong> Research Summary – The Evolution of Artificial
          Intelligence
          <br />
          <strong>DATE:</strong> May 15, 2025
        </p>

        <h3>Background</h3>
        <p>
          Artificial intelligence has shifted from a science fiction concept
          into real-world technology shaping infrastructure, labor,
          communication, and national security. This project explores how that
          shift occurred and what the implications are for society. It traces
          AI's evolution from early theories through today's neural
          network-driven systems.
        </p>

        <h3>Study Methods, Limitations, and Literature Summary</h3>
        <p>
          This is a literature-based research project. I am reviewing academic
          articles, white papers, technical blogs, and books to map AI's
          development. I originally planned to be done with the Technical
          Specifics section this week, but that didn't happen. I've written the
          Introduction and History sections and adjusted my timeline
          accordingly.
        </p>

        <p>
          I'm using a minimum of two credible sources per section, with inline
          APA citations. The audience includes a professor and six junior
          students in the BASIS program. My tone stays clear and semi-technical,
          with minimal jargon and full source transparency.
        </p>

        <h3>Summary of Key Sources</h3>
        <ol>
          <li>
            <strong>Bringsjord, S., & Govindarajulu, N. (2022).</strong>{" "}
            <em>Artificial Intelligence</em> – Stanford Encyclopedia of
            Philosophy. This source defines AI clearly and provides background
            on symbolic AI, intelligent agents, and machine learning. It also
            outlines major milestones from Turing to deep learning.
          </li>
          <li>
            <strong>Suleyman, M. (2023).</strong> <em>The Coming Wave.</em>{" "}
            Suleyman provides a powerful look at how AI has moved from hype to
            critical infrastructure. He argues that synthetic biology,
            autonomous systems, and global inequality are part of a new
            technological wave humanity is not ready for.
          </li>
          <li>
            <strong>Google AI (2023).</strong>{" "}
            <em>Machine Learning Crash Course.</em> This resource explains
            supervised, unsupervised, and deep learning in clear terms. I'm
            using it to support the Technical Specifics section and explain what
            LLMs like GPT actually do.
          </li>
          <li>
            <strong>NIH (2023).</strong> <em>Synthetic Biology Overview.</em>{" "}
            This report outlines how synthetic biology and AI overlap. It will
            be referenced briefly to show where AI is headed beyond data and
            language models.
          </li>
        </ol>

        <h3>Findings So Far</h3>
        <ul>
          <li>
            AI's history is shaped by both science fiction and actual computing
            limits.
          </li>
          <li>
            The shift from symbolic AI to neural networks changed the field
            completely.
          </li>
          <li>
            Public understanding often lags behind the real capabilities and
            risks.
          </li>
          <li>
            Real AI tools are already embedded in critical systems across
            sectors.
          </li>
          <li>
            Oversight is limited, and ethical frameworks are not keeping up with
            deployment speed.
          </li>
        </ul>

        <h3>Next Steps</h3>
        <p>
          I will complete the Technical Specifics section and get a clean
          outline in place for Concerns and Privacy. I'm still using the same
          citation approach and structure from Week 3. I also plan to finalize
          my choice of a visual element. Prezi will be used for the final
          presentation. I hope to have a full working draft by the end of next
          week.
        </p>
      </CollapsibleEntry>

      <CollapsibleEntry title="Week 5: Midpoint Check-In and Reflection" date="May 8, 2025">
        <p>
          According to the plan I set back in Week 3, I expected to have my
          reading done, sources finalized, and the first few sections of my
          draft underway by now. I'm not there yet. I've had to spend extra time
          this week replacing sources that either turned out to be incomplete,
          no longer credible, or unavailable. One of the key articles I planned
          to use, the MIT piece on science fiction and AI, disappeared, so I'm
          heading back to the library to find a suitable replacement.
        </p>

        <p>
          This week, I focused on evaluating what I had, identifying what still
          works, and removing anything that didn't meet academic standards. I
          confirmed the licenses and citations for my two project images, one
          from Wikimedia Commons and one from iStock. I didn't get as far on
          drafting as I hoped because I was also working on a coding project for
          another class, but I made progress in cleaning up my research base. I
          may need to scale back parts of my outline if I can't stay within the
          scope of the assignment.
        </p>

        <p>
          Next week, I'll go to the library to find replacement sources, finish
          my reading, and start writing the "History of AI" section. I'll also
          make sure to double-check citations while I draft so I don't miss
          anything or end up paraphrasing without attribution.
        </p>

        <h2>How My Sources Relate and Fill Gaps</h2>
        <p>
          So far, my sources haven't directly contradicted each other, but they
          offer very different perspectives on the future of AI. Some are
          optimistic, others are alarmist. There's disagreement about whether AI
          will destroy jobs, save industries, or threaten humanity. I find the
          extreme views more hypothetical than realistic. Most of it sounds like
          fear based on a poor understanding of what AI actually is. I've been
          more focused on identifying credible, well-supported material. For
          example,
          <em> The Coming Wave </em> is helping me understand political and
          economic risks. The OC seminar provided insight into environmental
          costs, something none of my earlier sources covered.
        </p>

        <h2>Ethical Guidelines and Publishing Reflection</h2>
        <p>
          I reviewed the author guidelines for the{" "}
          <em>Information Systems Journal</em>. The ethical rules didn't
          surprise me, but I did find it interesting how they addressed AI
          tools. In past classes, there was no discussion about ChatGPT or AI
          editing, but this journal requires authors to disclose any use of
          tools like that in the methods or acknowledgments section. I agree
          with that. If a tool helps you write, you should say so. I also saw
          that they expect you to assign copyright to the journal unless you go
          the Open Access route. I'd prefer to keep control of my work, but I
          might consider signing over the rights if the compensation or reach
          made sense.
        </p>

        <p>
          Other publishing options include paying to publish Open Access using a
          Creative Commons license or posting a preprint on a site like arXiv
          before formal submission.
        </p>

        <h2>Plagiarism and Citation</h2>
        <p>
          Plagiarism is a problem on campuses, mostly because students aren't
          always sure how to cite properly. I feel more confident now, but I
          still double-check myself, especially since inline citations are new
          to me. I've only used APA format, and it makes sense to me, but the
          number of rules can still be confusing. I use
          <em> The Information Literacy User's Guide </em> and Scribbr to make
          sure my references and in-text citations are correct. This week, I
          realized citations are more complex than I thought, especially when
          I'm writing from memory and need to stop and ask myself whether a
          sentence is paraphrased or my own thought.
        </p>

        <h2>Something New I Learned</h2>
        <p>
          What stood out to me this week is how easily I can confuse my own
          voice with someone else's when paraphrasing. Even if I rewrite
          something in my own words, it might still come from a source and need
          a citation. That's something I'll be watching closely as I begin
          writing the actual draft.
        </p>

        <h2>Selected Images and Citations</h2>

        <h3>Image 1 – Creative Commons Licensed</h3>
        <img
          src={commonImage}
          alt="Creative Commons AI Image"
          className="blog-image"
        />
        <p>
          mikemacmarketing. (2018, October 5).{" "}
          <em>Artificial Intelligence & AI & Machine Learning</em> [Image].
          Wikimedia Commons.
          <br />
          <strong>License:</strong> Creative Commons Attribution 2.0 (CC BY 2.0)
        </p>

        <h3>Image 2 – Standard Licensed</h3>
        <img
          src={standardImage}
          alt="Standard Licensed AI Image"
          className="blog-image"
        />
        <p>
          Just_Super. (2024, February 12).{" "}
          <em>
            AI artificial intelligence Security sentinel password cyber security
          </em>
          . iStock.
          <br />
          <strong>License:</strong> iStock Standard License (educational and
          commercial use with attribution)
        </p>
      </CollapsibleEntry>

      <CollapsibleEntry title="Week 4: Visualizing AI and Making Connections" date="May 1, 2025">
        <p>
          This week I created a mind map to organize everything I've researched
          so far. I already had an outline, but building the mind map gave me a
          different perspective. Visually mapping the pieces helped me see the
          relationships between technical development, real-world use, ethical
          concerns, and regulation in a way that a list of bullet points
          doesn't. It also helped me track what connects and where my strongest
          evidence sits. I didn't expect the environmental impact of AI to tie
          so directly into policy concerns, but it showed up across multiple
          categories. That connection was something I hadn't clearly seen
          before.
        </p>

        <p>
          <strong>Here's the mind map I created:</strong>
          <br />
          <a
            href="https://atlas.mindmup.com/2025/05/9d69bb4026df11f0a04e9b9ed19cec8c/ai_from_science_fiction_to_reality/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My Mind Map
          </a>
        </p>

        <p>
          Looking back at my Week 3 plan, I said I needed to solidify the
          structure of my paper and make better use of the sources I've
          collected. I've done that. The map now mirrors the major sections in
          my outline, and I'm tagging which sources go where. So yes, I'm where
          I planned to be.
        </p>

        <p>
          I used a mix of news articles, corporate blogs, expert blogs, industry
          reports, academic papers, and books. Each had strengths and limits.
          News articles helped track current events but lacked depth. Corporate
          blogs like Google's were technically useful but biased toward
          promoting their tools. Expert blogs like The Gradient offered context
          and analysis that helped frame key ideas. Industry reports like
          McKinsey's explained adoption and business impact clearly. Scholarly
          reports from Stanford added credibility and evidence. The book by
          Suleyman was the most useful for thinking about the future and ethics.
        </p>

        <p>
          Three areas in my research are still incomplete. One is bias and
          fairness in AI. I have not found a solid academic source that covers
          this in enough detail. Another is the economic impact of AI on rural
          areas and low-income communities. A third is how regulation differs
          across countries. These are either underreported or too time-consuming
          to explore right now.
        </p>

        <p>
          To know when I had enough sources, I used the outline as a checklist.
          I looked for at least one strong, credible source per section. If a
          source repeated ideas from another or added little value, I dropped
          it. I also watched for overlap across sources. Once multiple sources
          supported the same idea, I marked that area as covered.
        </p>

        <p>
          For future projects, my selection criteria will be: relevance to the
          research question, date of publication, author credentials, source
          bias, and the depth of information. I will also ask whether it
          introduces a new angle or just repeats what I already know.
        </p>

        <p>
          One ethical concern that came up was how AI companies frame their own
          tools. For example, Google's blog makes their models sound flawless
          but skips over concerns like energy use or bias. I had to check claims
          across multiple sources to get the full picture. There's also a
          question of how much trust to place in AI-generated content or
          summaries. I've stayed focused on sources written or reviewed by
          humans.
        </p>

        <p>
          This week I also finished reviewing the Stanford HAI report and added
          the McKinsey explainer to cover real-world adoption of generative AI.
          I didn't expect to find myself so interested in policy, but after
          reading more on containment, it's clear that regulation is one of the
          most urgent pieces of this story.
        </p>

        <p>
          Next week I plan to start drafting the first full section of my paper.
          The mind map will act like a blueprint. I'll continue tagging my
          sources by topic and look for one more academic article to back up the
          historical section. I also want to do a deeper dive into bias and
          fairness in AI.
        </p>

        <h2>Sources Used:</h2>
        <ol>
          <li>
            Suleyman, M., &amp; Bhaskar, M. (2023).{" "}
            <em>
              The Coming Wave: Technology, Power, and the Twenty-First Century's
              Greatest Dilemma
            </em>
            . Crown.
          </li>
          <li>
            Brynjolfsson, E., &amp; McElheran, K. (2023).{" "}
            <em>Generative AI: A McKinsey Explainer</em>. McKinsey &amp;
            Company.
          </li>
          <li>
            Google. (2023). <em>Gemini, LaMDA, and Prompt Tuning</em>. Google AI
            Blog.
          </li>
          <li>
            Bommasani, R. (2022). <em>NLP's ImageNet Moment Has Arrived</em>.
            The Gradient.
          </li>
          <li>
            Stanford HAI. (2023).{" "}
            <em>Generative AI: Perspectives from Stanford</em>. Stanford
            Human-Centered Artificial Intelligence.
          </li>
        </ol>
      </CollapsibleEntry>

      <CollapsibleEntry title="Week 3: Full Progress Report and Reflection" date="April 24, 2025">
        <p>
          This week I focused on getting organized and laying the foundation for
          my entire project. I worked with a librarian to finalize a WBS-style
          outline that defines the structure of my paper. It includes sections
          on the history of AI, technical details, ethical concerns, privacy,
          regulation, and more. This outline now drives my research and my
          timeline. I also created a literature matrix to categorize and track
          all my sources, and completed a full KWHL chart to reflect what I knew
          coming in and what I've learned so far.
        </p>

        <p>
          I attended a one-hour seminar called <em>AI and Me</em> at Olympic
          College, which focused on the environmental impact of artificial
          intelligence. It covered how large data centers that support AI
          systems consume massive resources.
        </p>

        <ul>
          <li>Data centers use 4.59% of all U.S. energy</li>
          <li>A single AI query can use up to 16oz of bottled water</li>
          <li>
            Companies like Microsoft and Google build centers in rural areas for
            tax breaks and low energy costs
          </li>
          <li>These costs are passed onto the public</li>
          <li>Coal plants are being reactivated to meet power needs</li>
          <li>Toxins are kept secret under corporate protection</li>
          <li>
            Projects like Microsoft's Firecracker and Project Sassy were
            discussed
          </li>
          <li>There is increased air, noise, and light pollution</li>
          <li>AI relies on global cobalt mining and child labor</li>
          <li>E-waste and environmental damage are growing rapidly</li>
          <li>Nuclear energy is being pushed as a solution</li>
        </ul>

        <p>
          <strong>Research Question:</strong> How has artificial intelligence
          evolved from a concept in science fiction into a real-world
          technology, and what does this transformation mean for society?
        </p>

        <p>
          <strong>Thesis:</strong> The rapid evolution of artificial
          intelligence from a science fiction concept to real-world
          infrastructure presents urgent challenges in regulation, societal
          containment, and ethical oversight, forcing humanity to adapt to
          technological change at an unprecedented pace.
        </p>

        <p>
          I'm ahead of schedule. My plan is to complete source review by the end
          of Week 4, evaluate and annotate in Week 5, begin drafting in Weeks
          6–7, and complete my full draft in Week 8. Week 9 is reserved for
          revisions and preparing for final submission and presentation. So far,
          I've done more than expected. I've finalized my outline, attended the
          seminar, created tracking tools, and started evaluating what I'll
          include in the paper.
        </p>

        <p>
          The topic came from personal interest. I grew up watching AI in
          science fiction. Now that it's becoming real, it made sense to ask
          what that means for society. It's not just about technology, it's
          about how fast it's changing our world. Reading{" "}
          <em>The Coming Wave</em> helped focus my attention on containment and
          long-term risks. The hardest part of picking a topic was narrowing it
          down. AI is a huge field. I had to choose one central story. I decided
          to follow the transition from fiction to reality and explore all the
          consequences that come with it.
        </p>

        <p>
          <strong>Resources I used to support the topic include:</strong>
        </p>
        <ul>
          <li>
            <em>The Coming Wave</em> by Mustafa Suleyman
          </li>
          <li>Stanford HAI's AI policy reports</li>
          <li>McKinsey and Deloitte research on enterprise AI use</li>
          <li>Google's AI blog and Gemini documentation</li>
          <li>JSTOR reviews and articles from credible journals</li>
          <li>Google AI intro course and Qwiklabs hands-on training</li>
        </ul>

        <p>
          <strong>Some sources I rejected include:</strong>
        </p>
        <ul>
          <li>A Medium blog with no author or references</li>
          <li>A speculative article on AI replacing all creativity by 2030</li>
          <li>A YouTube video that made big claims with no citation</li>
        </ul>

        <p>
          Looking back, I would've benefited from starting my literature matrix
          earlier and applying stricter filtering upfront. That would've saved
          time by avoiding weak sources. I also didn't plan on how useful the
          KWHL chart would be until I did it. It helped organize what I knew and
          gave direction to what I still needed to learn.
        </p>

        <p>
          Next week, I'll go through all my gathered sources and finalize which
          ones make it into the draft. I'll begin reading and annotating key
          materials and start forming thoughts about writing sections of the
          paper based on my outline. This process should carry me through Week 5
          and into the drafting phase without delays.
        </p>
      </CollapsibleEntry>

      <CollapsibleEntry title="Week 2: Narrowing the Focus and Asking Better Questions" date="April 17, 2025">
        <p>
          My research question is now fully formed:{" "}
          <em>
            How has artificial intelligence evolved from a theoretical concept
            rooted in science fiction to a real-world technology shaping modern
            life?
          </em>{" "}
          It gives me a broad enough range to explore technical development and
          cultural influence, but it also keeps me focused on the timeline and
          impact of AI.
        </p>

        <p>
          This week I made good progress. I completed Google's Introduction to
          AI course and earned a badge, which I've added to this blog below:
        </p>

        <img
          src={googleBadge}
          alt="Google Introduction to Generative AI Badge"
          style={{ width: "200px", marginTop: "10px", borderRadius: "8px" }}
        />

        <p>
          I've been reading <em>The Coming Wave</em> by Mustafa Suleyman, which
          is helping me understand how major technological shifts shape the
          world. I also pulled sources from JSTOR, Stanford, and Google's AI
          research pages. I've started a list of useful articles and am
          beginning to decide which ones are strong enough to cite. I feel
          slightly ahead, but I need to slow down and start reading more deeply
          rather than collecting too much.
        </p>

        <p>
          The biggest issue I've run into is how much material I've gathered.
          It's more than I can reasonably include in a 12 to 15 page paper. I'm
          starting to organize and filter the sources. My plan is to keep the
          strongest ones and remove anything that doesn't directly support the
          research question.
        </p>

        <p>Next week, I plan to:</p>
        <ul>
          <li>
            Continue reading <em>The Coming Wave</em>
          </li>
          <li>Visit the library</li>
          <li>Review JSTOR and academic sources again</li>
        </ul>

        <p>
          As I've been working, I've come across new terms and tools. Vertex AI
          Studio showed up in one of the articles, and I learned about
          information containment, the idea that powerful technologies can be
          mitigated but never fully controlled. Suleyman makes strong points by
          comparing AI to earlier turning points in history like the Gutenberg
          press or the Model T. One quote stuck with me:{" "}
          <em>
            "Our species is not wired to truly grapple with transformation on
            this scale."
          </em>{" "}
          That reminded me of how unprepared we often are when new systems
          emerge faster than we can adapt.
        </p>

        <p>I've started grouping sources into categories:</p>
        <ul>
          <li>Academic research: JSTOR, peer-reviewed journals</li>
          <li>Corporate technical: Google AI blog, Gemini documentation</li>
          <li>Expert opinion: Suleyman's book, Stanford HAI pieces</li>
          <li>Educational: Google's AI course, 365 Data Science</li>
          <li>Media: Wired, McKinsey, and NYT Tech coverage</li>
        </ul>

        <p>
          My main keywords have been "artificial intelligence," "evolution of
          AI," "science fiction and AI," and "M5 Unit Star Trek." These helped
          me find both technical and cultural references. Along the way, I had
          to look up terms like NPU (neural processing unit), DeepMind,
          pessimism aversion trap, and misinformation apocalypse. They're
          helping me understand the risks and future directions of AI.
        </p>

        <p>
          Some things I already knew without researching: I've worked with
          ChatGPT, Bard, Genesis, Copilot, and deepseek. I somewhat know how
          they behave and how to get the best out of them. I know{" "}
          <em>Star Trek</em> like the back of my hand, so I remembered the M5
          Unit and Dr. Daystrom immediately. I also already knew about Deep Blue
          beating Garry Kasparov in 1997. That moment told the world that AI
          wasn't just a theory, it could compete with us.
        </p>

        <p>
          I still don't fully understand how neural networks are created or what
          tech is behind them. That's my biggest knowledge gap right now.
        </p>
      </CollapsibleEntry>

      <CollapsibleEntry title="Week 1: From Science Fiction to Reality" date="April 10, 2025">
        <p>
          This week I started digging into the foundations of artificial
          intelligence to get a better understanding of where the field started,
          how it has changed, and what it looks like today. I watched three
          helpful videos that gave me a solid overview:
        </p>
        <ul>
          <li>Google's AI for Beginners</li>
          <li>A Brief History of AI</li>
          <li>Artificial Intelligence Explained</li>
        </ul>
        <p>
          One of the main things I learned is that machine learning is a subset
          of AI. There are different types of models depending on the task.
          Here's a breakdown of the main types I explored:
        </p>
        <ul>
          <li>
            <strong>Supervised learning:</strong> Uses labeled data to make
            predictions. For example, it can be used in fraud detection, where
            the model learns from known examples of fraud and non-fraud.
          </li>
          <li>
            <strong>Unsupervised learning:</strong> Works with unlabeled data
            and finds patterns or clusters on its own, often used in data
            segmentation or anomaly detection.
          </li>
          <li>
            <strong>Semi-supervised learning:</strong> Combines a small amount
            of labeled data with a large amount of unlabeled data. It's used
            when labeling every data point is too time-consuming or expensive.
          </li>
          <li>
            <strong>Deep learning:</strong> A more advanced type of machine
            learning that uses neural networks with multiple layers. This is
            what powers models like ChatGPT.
          </li>
          <li>
            <strong>Generative models:</strong> Learn from existing data and
            create new content like images, text, or audio. Generative AI tools
            are based on these models.
          </li>
          <li>
            <strong>Discriminative models:</strong> Focus on classifying input,
            such as determining whether a transaction is fraudulent or not based
            on learned differences.
          </li>
        </ul>
        <p>
          Deep learning takes things further by using artificial neural networks
          modeled after how the brain works. These systems have layers of
          virtual neurons that pass data forward and adjust based on what they
          learn. In <em>Star Trek: Voyager</em>, they referred to the ship's
          computer as a neural net, which feels surprisingly close to how modern
          deep learning systems work today.
        </p>
        <p>
          That connection to science fiction is one reason I chose this topic.
          Growing up, I watched a lot of science fiction, and <em>Star Trek</em>
          , <em>2001: A Space Odyssey</em>, and <em>The Terminator</em> are just
          a few of the examples that really stuck with me. They all showed
          different possibilities for AI. In <em>The Next Generation</em>, Data
          was an android who was intelligent and precise but didn't understand
          emotion. Later, when he got an emotion chip, he struggled to make
          sense of feelings and humor. HAL 9000 in <em>2001</em> was calm and
          logical until he turned on the humans. In <em>The Terminator</em>, AI
          evolved into a threat that nearly wiped out humanity. These stories
          made me think about the risks, responsibilities, and potential of AI
          long before I ever saw it in real life.
        </p>
        <p>
          Now, AI is part of our everyday lives. It helps power things like
          Netflix recommendations, fraud detection, auto summaries in email, and
          even creative tools that generate images or write text. That brought
          me to something else I learned this week: LLMs, or large language
          models. These models are trained on massive datasets and are designed
          to understand and generate language. ChatGPT is an example of an LLM.
          It's part of a larger area called generative AI, which takes input and
          turns it into something new, whether that's a spreadsheet, an article,
          or even a video.
        </p>
        <p>Some key moments from the history of AI stood out to me:</p>
        <ul>
          <li>
            1950: Alan Turing introduced the Turing Test and asked if machines
            can think
          </li>
          <li>
            1956: The term artificial intelligence was coined at Dartmouth
          </li>
          <li>
            1960s–1970s: The AI Winter slowed research due to lack of funding
            and progress
          </li>
          <li>1997: IBM's Deep Blue beat chess champion Garry Kasparov</li>
          <li>
            2006: Geoffrey Hinton published research that revived interest in
            deep learning
          </li>
          <li>
            2012: Jeff Dean and Andrew Ng published work on large-scale neural
            networks
          </li>
          <li>2017: Google Brain improved natural language processing</li>
          <li>
            2018–2022: OpenAI released the GPT series and made ChatGPT public
          </li>
        </ul>
        <p>
          I also found a new resource called <strong>365 Data Science</strong>{" "}
          that offers tutorials and lessons on AI and machine learning. I'll be
          using it throughout this project since it breaks concepts down clearly
          and builds on what I'm already learning.
        </p>
        <p>
          This week gave me a solid starting point. It helped me understand what
          AI really is, how it connects to science fiction, and how fast it's
          moving in the real world. I'm looking forward to building on what I've
          learned as the project continues.
        </p>
      </CollapsibleEntry>

      <CollapsibleEntry title="AI Research Paper" date="April 7, 2025">
        <p>
          Hello, my name is <strong>April V. Sykes</strong>. I'm currently
          taking <strong>IS390 IS Reading and Research</strong>, and this blog
          is part of my coursework.
        </p>
        <p>
          I'm interested in how technology evolves and how ideas that once
          seemed like science fiction eventually become reality. That's why I
          chose to research{" "}
          <em>
            "The Evolution of Artificial Intelligence: From Science Fiction to
            Reality."
          </em>
        </p>
        <p>
          This blog will follow my 10-week research process. I'll be using it to
          document my thoughts, research progress, and personal reflections as I
          explore how AI has developed over time and where it might be going.
        </p>
        <p>
          By the end, this will serve as a record of what I've learned and how
          my thinking has grown throughout the project.
        </p>
      </CollapsibleEntry>
    </div>
  );
}