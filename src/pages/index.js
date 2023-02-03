import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title="Welcome to Nucleus"
      description="Description will go into a meta tag in <head />">

      <main class="ndsn">
        <ns-landmark type="hillside" gradient="invert-ramp-cyan">
          <h1 slot="heading">
            <span class="h5">Nucleus team.</span>
            <span class="h1">
              Welcome to the British Gas Design System
            </span>
          </h1>
          <p slot="paragraph">Here to solve and build a more cohesive and coherent web experience for the British Gas&nbsp;brand.</p>
        </ns-landmark>

        <ns-panel>
          <ns-content>
            <h2>Deep dive into Nucleus</h2>
          </ns-content>
          <ns-column hockeypitch="3" role="list">
            <ns-card role="listitem" type="section" decoration="bulb">
              <h3 slot="heading" role="heading" aria-level="3">Getting started</h3>
              <p slot="paragraph">How to work with the Nucleus Design&nbsp;System</p>
              <ns-cta type="direct" slot="cta" href="/docs/getting-started/introduction">Get started</ns-cta>
            </ns-card>
            <ns-card role="listitem" type="section" decoration="engineer">
              <h3 slot="heading" role="heading" aria-level="3">Our components</h3>
              <p slot="paragraph">See how our components work and guidelines on how to use&nbsp;them</p>
              <ns-cta type="direct" slot="cta" href="/docs/components/ns-accordion">View components</ns-cta>
            </ns-card>
            <ns-card role="listitem" type="section" decoration="protect">
              <h3 slot="heading" role="heading" aria-level="3">The vision</h3>
              <p slot="paragraph">Find out what we're trying to do and the principles we set against&nbsp;ourselves</p>
              <ns-cta type="direct" slot="cta" href="/docs/getting-started/principles">Learn our principles</ns-cta>
            </ns-card>
          </ns-column>
        </ns-panel>


        <ns-panel decoration="circle-yellow-left">
          <ns-lockup>
            <h2 slot="heading">
              <span class="h5">Becoming Nucleus.</span>
              <span class="h2 enlighten">
                Join in the <b>conversation and movement</b> of our design system
              </span>
            </h2>
            <p slot="paragraph">Want to know how to start using Nucleus or not sure if we have what you are looking&nbsp;for?</p>
            <p slot="paragraph">Understand our process and how we bring your ideas&nbsp;to&nbsp;life</p>
            <ns-cta type="direct" slot="cta" href="/docs/community/contribute-to-nucleus">Our community</ns-cta>
            <ns-image slot="image" src="https://user-images.githubusercontent.com/7101754/74745120-4583f980-525b-11ea-8278-525d4989aecc.jpeg"></ns-image>
          </ns-lockup>
        </ns-panel>

        <ns-panel>
          <ns-content>
            <h2>Building a better Nucleus</h2>
          </ns-content>
          <ns-column hockeypitch="3" role="list">
            <ns-card role="listitem" type="support">
              <h3 slot="heading" role="heading" aria-level="3">Something missing?</h3>
              <p slot="paragraph">Feel free to raise a request for change or contribute to other&nbsp;requests</p>
              <ns-cta type="text" slot="cta" href="https://github.com/ConnectedHomes/nucleus/projects/6">Our backlog</ns-cta>
            </ns-card>
            <ns-card role="listitem" type="support">
              <h3 slot="heading" role="heading" aria-level="3">See how we work</h3>
              <p slot="paragraph">Come to our events and ask about how things&nbsp;work.</p>
              <ns-cta type="text" slot="cta" href="/docs/community/events">Nucleus events</ns-cta>
            </ns-card>
            <ns-card role="listitem" type="support">
              <h3 slot="heading" role="heading" aria-level="3">View our helpful tutorials</h3>
              <p slot="paragraph">Want to know how to do something? Then we have the tutorials for&nbsp;you</p>
              <ns-cta type="text" slot="cta" href="/docs/getting-started/working-with-nucleus">Working with Nucleus</ns-cta>
            </ns-card>
          </ns-column>
        </ns-panel>

      </main>
      
    </Layout>
  );
}

export default Home;
