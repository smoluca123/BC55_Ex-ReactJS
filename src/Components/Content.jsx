import React from 'react';
import ContentItem from './ContentItem';

export default function Content() {
  return (
    <section className="pt-4">
      <div className="container px-lg-5">
        {/* Page Features*/}
        <div className="row gx-lg-5">
          <ContentItem
            icon="bi bi-collection"
            title="Fresh new layout"
            message="With Bootstrap 5, we've created a fresh new layout for this template!"
          />
          <ContentItem
            icon="bi bi-cloud-download"
            title="Free to download"
            message="As always, Start Bootstrap has a powerful collectin of free templates."
          />
          <ContentItem
            icon="bi bi-card-heading"
            title="Jumbotron hero header"
            message="The heroic part of this template is the jumbotron hero header!"
          />
          <ContentItem
            icon="bi bi-bootstrap"
            title="Feature boxes"
            message="We've created some custom feature boxes using Bootstrap icons!"
          />
          <ContentItem
            icon="bi bi-code"
            title="Simple clean code"
            message="We keep our dependencies up to date and squash bugs as they come!"
          />
          <ContentItem
            icon="bi bi-patch-check"
            title="A name you trust"
            message="Start Bootstrap has been the leader in free Bootstrap templates since 2013!"
          />
        </div>
      </div>
    </section>
  );
}
