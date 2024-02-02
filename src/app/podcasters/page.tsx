import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Podcasting 2.0 for podcasters",
  // description: 'Podcasting 2.0 is for podcasters!',
};

export default function PodcastersPage() {
  return (
    <>
      <div className="flex flex-col justify-center py-16 text-xl lg:py-36">
        <h1>Podcasting 2.0 is for podcasters!</h1>
        <span>
          We believe podcasts deserve an open, independent podcasting ecosystem.
          We created Podcasting 2.0 to preserve, protect, and <em>extend</em>{" "}
          that ecosystem.
        </span>
      </div>
      <h2>Upgrade to the Podcast Namespace</h2>
      <p>
        Really Simple Syndication (RSS) is the foundation for open podcasting.
        But podcast feeds have lacked innovation for years, due in large part to
        leaving it in the hands of large corporatations to innovate&mdash;and
        regularly being disappointed.
      </p>
      <p>
        Podcasting 2.0 changes that by finally bringing fresh innovation to
        podcasting&rsquo;s core technology of RSS. We do this through the
        Podcast Namespace: a new standard for RSS feeds that bring multiple
        benefits for audiences, podcasters, and developers.
      </p>
      <h3>Podcast Namespace benefits</h3>
      <ul className="list-disc pl-8">
        <li>
          Add and edit interactive chapters—<em>without</em> re-uploading your
          media file
        </li>
        <li>Earn money directly from your audience</li>
        <li>Engage through comments accessible accross multiple apps</li>
        <li>
          Expose more information about your podcast, like people, location, and
          more
        </li>
        <li>Lock your podcast against theft</li>
        <li>Notify your audience when you&rsquo;re live-streaming</li>
        <li>Deliver new episodes more quickly to your podcast followers</li>
        <li>Protect your podcast from censorship and deplatforming</li>
      </ul>
      <h2>How to get started</h2>
      <ol className="list-decimal pl-8">
        <li>
          Ensure your podcast is in the Podcast Index, and{" "}
          <Link href="https://podcastindex.org/add">
            add your podcast if it&rsquo;s not included
          </Link>
          .
        </li>
        <li>
          Check with your podcast-feed-publishing tool for support of the
          Podcasting 2.0 features from the{" "}
          <Link href="/podcast-namespace">new Podcast Namespace</Link>. You
          might even want to switch providers in order to get the new features.
        </li>
        <li>
          Prepare your podcast to receive streaming Bitcoin/Satoshis and
          Boostagrams through Value 4 Value.{" "}
          <a href="http://adam.curry.com/html/HowtoreceiveBitcoini-BrxM2PDPNJ7Zzbz7G28xk4H0D658fH.html">
            Here&rsquo;s a guide
          </a>
          .
        </li>
        <li>
          Encourage your audience to get a better podcast app from
          <Link href="http://podcastapps.com">PodcastApps.com</Link>.
        </li>
        <li>
          <a href="https://podcastindex.social/invite/hfcQYbjq">
            Participate in PodcastIndex.social
          </a>{" "}
          to share your ideas and feedback.
        </li>
        <li>
          Go deeper with our <Link href="/developers">developer resources</Link>
          .
        </li>
      </ol>
    </>
  );
}
