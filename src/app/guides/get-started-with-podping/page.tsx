import { Badge } from "@/components/ui/badge";
import {
  podcastNamespaceTag,
  podcastNamespaceTags,
} from "@/data/podcastNamespaceTags";
import Markdown from "markdown-to-jsx";
import { notFound } from "next/navigation";
import { MyCodeBlock } from "@/components/ui/MyCodeBlock";
import { Metadata } from "next";
import Link from "next/link";
import { MyCode } from "@/components/ui/MyCode";
import { HeroHeader } from "@/components/ui/HeroHeader";
import { guides } from "@/data/guides";
import { ItemNav } from "@/components/ItemNav";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Getting started with podping - Podcasting 2.0",
  description:
    "Why you want to support Podping, and how to get started",
};

export default function TranscriptsGuide() {
  const tag = podcastNamespaceTag.txt;
  guides.forEach((guide) => {
    guide.label = guide.title;
  });
  const currentGuide = guides.find((guide) => guide.tagSlug === "podping");

  return (
    <>
      <ItemNav current={currentGuide} items={guides} />
      <HeroHeader>
        <h1>Getting started with Podping</h1>
        <span>
          Powered by <MyCode text={tag.tag} language="xml" />
        </span>
      </HeroHeader>

      <div className="mb-8">
        <p>
          Podping is a quick and simple way to fix the following questions:
          <ul>
          <li>I published an episode half an hour ago and it still isn&rsquo;t in the BlahBlah podcast app!</li>
          <li>Why isn't my podcast in apps that use the Podcast Index?</li>
          <li>Our RSS feed is being <a href="https://podnews.net/about/rss-stats">hit so many times</a> it's slowing our website down to a crawl!</li>
          <li>I'm sure some of the stats <a href="https://livewire.io/podcast-hosts-by-episode-share/">in the Livewire list</a>
            don't include all our episodes...</li>
          </ul>          
        </p>
        <p>
          Podping is a simple way to advertise to a growing number of services that your podcast, or
          your customer&rsquo;s podcast, has published a new episode. Typically, it takes less than thirty seconds for
          every podcast app that uses Podping to be notified of your new episode. Using it means fewer support queries
          and happier customers. And, since it dramatically cuts down on speculative calls of your RSS feeds, it lowers your
          bandwidth bill and server load in serving RSS feeds: leading to happier CTOs and less power use by everyone.
        </p>
        <p>
          Under the hood, Podping writes to a publicly-available database, fixing problems with existing notification
          services like websub, which require always-on servers and resubscriptions.
        </p>
        <p>
          It's already in use by podcast hosts like Buzzsprout, Spreaker, Transistor, Captivate, and many more.
          You can <a href="https://podping.watch/">watch Podping live here</a>.
        </p>

        <h2>It's super-easy to use. Here's how.</H2>
        
        <ol>
          <li>
            <strong>Get a bearer auth code</strong> by emailing <MyCode
              text="podping@podcastindex.org"
              language="txt"
            />
          </li>
          <li>
           When you publish a new episode, <i>after regenerating the RSS feed,</i> just use your authorisation header code to make a call to: {" "}
            <MyCode
              text="GET https://podping.cloud/?url=https://feeds.example.org/rss"
              language="txt"
            />
          </li>
          <li>Optionally, add this to your RSS feed to mark the fact you use Podping, so your systems won't be polled every few minutes.
            <MyCode
              text="<podcast:podping usesPodping=\"true\"/>"
              language="xml"
            />
          </li>
          </ol>

        <p>
        The podping.cloud servers are operated by Podcast Index; there are a set of those servers
        across the world to ensure they work quickly and performantly.
        </p>

        <h2>Code samples</h2>

<P>Here is a PHP function that would notify Podping. Call it when you've finished regenerating the RSS feed.</P>
        
        <pre><code class="language-php">
        function podpingNotify($url = NULL) {
	// Set your data here
	$ua='YourPodcastUserAgent/0.1 +https://example.com';
	$authKey='yourbearerkey';

	// Check the params
	if(empty($url) || stripos($url, 'http') !== 0) {
		error_log("podpingNotify(): The url was blank or corrupt.");
		return false;
	}

	//Off we go
	$context = stream_context_create(array(
		'http'=>array(
			'user_agent'=>$ua,
			'header'=>'Authorization: '.$authKey
		)
	));
	$query = http_build_query(array('url'=>$url));
	$response = file_get_contents('https://podping.cloud/?'.$query, false, $context);
  error_log("podpingNotify(): Success for ".$url);
	return($response);
}
        </code></pre>

<h2>Further reading</h2>

      <p><a href="https://podcasting20.substack.com/p/podping">Read a technical overview of Podping</a>.</p>
        
        <Link href={`/podcast-namespace/tags/${tag.slug}`}>
          <Button>Read the technical details</Button>
        </Link>
      </div>
      <ItemNav current={currentGuide} items={guides} />
    </>
  );
}
