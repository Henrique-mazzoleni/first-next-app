import { Fragment } from "react";
import Link from "next/link";

export default function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <div className="list">
        <Link href="/news/yoyoma">The Celist?</Link>
        <Link href="/news/pigman">Cmon George, let's be realistic</Link>
      </div>
    </Fragment>
  );
}
